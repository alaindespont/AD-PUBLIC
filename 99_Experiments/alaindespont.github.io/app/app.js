const STORAGE_KEY = "consultantToolDayV10";

// A modifier avec l'adresse cible souhaitee.
const MAIL_TO = "alain.despont@outlook.com";
const MAIL_SUBJECT_PREFIX = "Consultant Timer & Expense Tool";

const TYPES = {
    travel: { label: "Deplacement", emoji: "🚗" },
    client: { label: "Clientele", emoji: "💼" },
    break: { label: "Pause", emoji: "☕" }
};

let state = loadState();
let tickHandle = null;
let timeModalMode = "add";
let timeModalEditId = null;

const els = {
    todayTitle: document.getElementById("todayTitle"),
    badge: document.getElementById("timerStateBadge"),
    currentType: document.getElementById("currentTypeLabel"),
    currentElapsed: document.getElementById("currentElapsed"),
    summaryRounded: document.getElementById("summaryRounded"),
    summaryExpenses: document.getElementById("summaryExpenses"),
    timeEntries: document.getElementById("timeEntries"),
    expenseEntries: document.getElementById("expenseEntries"),
    btnTravel: document.getElementById("btnTravel"),
    btnClient: document.getElementById("btnClient"),
    btnBreak: document.getElementById("btnBreak"),
    btnStop: document.getElementById("btnStop"),
    btnManualTime: document.getElementById("btnManualTime"),
    btnFixedExpense: document.getElementById("btnFixedExpense"),
    btnCustomExpense: document.getElementById("btnCustomExpense"),
    btnExport: document.getElementById("btnExport"),
    btnMail: document.getElementById("btnMail"),
    btnReset: document.getElementById("btnReset"),
    timeModal: document.getElementById("timeModal"),
    timeModalTitle: document.getElementById("timeModalTitle"),
    timeType: document.getElementById("timeType"),
    timeStart: document.getElementById("timeStart"),
    timeEnd: document.getElementById("timeEnd"),
    btnCancelTimeModal: document.getElementById("btnCancelTimeModal"),
    btnSaveTimeModal: document.getElementById("btnSaveTimeModal")
};

function defaultState() {
    return {
        active: null,
        timeEntries: [],
        expenses: []
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultState();

        const parsed = JSON.parse(raw);
        return {
            active: parsed.active || null,
            timeEntries: Array.isArray(parsed.timeEntries) ? parsed.timeEntries : [],
            expenses: Array.isArray(parsed.expenses) ? parsed.expenses : []
        };
    } catch {
        return defaultState();
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function nowIso() {
    return new Date().toISOString();
}

function pad(value) {
    return String(value).padStart(2, "0");
}

function formatClock(dateLike) {
    const d = new Date(dateLike);
    return `${pad(d.getHours())}h${pad(d.getMinutes())}`;
}

function formatTimeInput(dateLike) {
    const d = new Date(dateLike);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function formatTodayTitle() {
    const text = new Intl.DateTimeFormat("fr-CH", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }).format(new Date());

    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDuration(ms, withSeconds = false) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (withSeconds) {
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    return `${pad(hours)}h${pad(minutes)}`;
}

function formatDurationText(ms) {
    const totalMinutes = Math.max(0, Math.round(ms / 60000));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    }

    if (minutes === 0) {
        return `${hours}h`;
    }

    return `${hours}h${pad(minutes)}`;
}

function roundedBillableMs(ms) {
    const minutes = Math.floor(ms / 60000);

    if (minutes < 5) {
        return 0;
    }

    const roundedMinutes = Math.ceil(minutes / 15) * 15;
    return roundedMinutes * 60000;
}

function getEntryMs(entry) {
    return new Date(entry.end).getTime() - new Date(entry.start).getTime();
}

function parseTimeInput(value, referenceDate) {
    const match = String(value || "").trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;

    const date = new Date(referenceDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
}

function openTimeModal(mode, entryId = null) {
    timeModalMode = mode;
    timeModalEditId = entryId;

    const now = new Date();

    if (mode === "edit") {
        const entry = state.timeEntries.find(item => item.id === entryId);
        if (!entry) return;

        els.timeModalTitle.textContent = "Editer un temps";
        els.timeType.value = entry.type;
        els.timeStart.value = formatTimeInput(entry.start);
        els.timeEnd.value = formatTimeInput(entry.end);
    } else {
        els.timeModalTitle.textContent = "Ajouter un temps";
        els.timeType.value = "client";
        els.timeStart.value = `${pad(now.getHours())}:00`;
        els.timeEnd.value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }

    els.timeModal.classList.remove("hidden");
    els.timeModal.setAttribute("aria-hidden", "false");
    els.timeType.focus();
}

function closeTimeModal() {
    els.timeModal.classList.add("hidden");
    els.timeModal.setAttribute("aria-hidden", "true");
    timeModalMode = "add";
    timeModalEditId = null;
}

function saveTimeModal() {
    const type = els.timeType.value;
    const startDate = parseTimeInput(els.timeStart.value, new Date());
    const endDate = parseTimeInput(els.timeEnd.value, new Date());

    if (!TYPES[type]) {
        alert("Libelle invalide.");
        return;
    }

    if (!startDate || !endDate) {
        alert("Heure invalide.");
        return;
    }

    if (endDate <= startDate) {
        alert("L'heure de fin doit etre apres l'heure de debut.");
        return;
    }

    if (timeModalMode === "edit") {
        const entry = state.timeEntries.find(item => item.id === timeModalEditId);
        if (!entry) return;

        entry.type = type;
        entry.start = startDate.toISOString();
        entry.end = endDate.toISOString();
    } else {
        state.timeEntries.push({
            id: crypto.randomUUID(),
            type,
            start: startDate.toISOString(),
            end: endDate.toISOString()
        });
    }

    saveState();
    closeTimeModal();
    render();
}

function startTimer(type) {
    if (state.active) {
        stopTimer(false);
    }

    state.active = {
        type,
        start: nowIso()
    };

    saveState();
    render();
    startTick();
}

function stopTimer(forceRender = true) {
    if (!state.active) return;

    const end = nowIso();
    const entry = {
        id: crypto.randomUUID(),
        type: state.active.type,
        start: state.active.start,
        end
    };

    state.timeEntries.push(entry);
    state.active = null;

    saveState();

    if (forceRender) {
        render();
    }
}

function addFixedExpense() {
    state.expenses.push({
        id: crypto.randomUUID(),
        label: "Frais forfaitaire",
        amount: 17,
        createdAt: nowIso()
    });

    saveState();
    render();
}

function addCustomExpense() {
    const value = prompt("Montant du frais en CHF");
    if (value === null) return;

    const normalized = value.replace(",", ".").trim();
    const amount = Number(normalized);

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Montant invalide.");
        return;
    }

    state.expenses.push({
        id: crypto.randomUUID(),
        label: "Frais libre",
        amount: Math.round(amount * 100) / 100,
        createdAt: nowIso()
    });

    saveState();
    render();
}

function editExpense(id) {
    const expense = state.expenses.find(item => item.id === id);
    if (!expense) return;

    const amountInput = prompt("Montant du frais en CHF", expense.amount.toFixed(2));
    if (amountInput === null) return;

    const amount = Number(amountInput.replace(",", ".").trim());
    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Montant invalide.");
        return;
    }

    const labelInput = prompt("Libelle du frais", expense.label);
    if (labelInput === null) return;

    expense.amount = Math.round(amount * 100) / 100;
    expense.label = labelInput.trim() || expense.label;

    saveState();
    render();
}

function deleteTimeEntry(id) {
    const ok = confirm("Supprimer cette entree de temps ?");
    if (!ok) return;

    state.timeEntries = state.timeEntries.filter(entry => entry.id !== id);
    saveState();
    render();
}

function deleteExpense(id) {
    const ok = confirm("Supprimer ce frais ?");
    if (!ok) return;

    state.expenses = state.expenses.filter(expense => expense.id !== id);
    saveState();
    render();
}

function resetDay() {
    const ok = confirm("Reset complet de la journee ?");
    if (!ok) return;

    state = defaultState();
    saveState();
    render();
}

function totals() {
    const countedMs = state.timeEntries.reduce((sum, entry) => {
        return sum + roundedBillableMs(getEntryMs(entry));
    }, 0);

    const activeMs = state.active
        ? new Date().getTime() - new Date(state.active.start).getTime()
        : 0;

    const activeCountedMs = state.active ? roundedBillableMs(activeMs) : 0;

    const expenseTotal = state.expenses.reduce((sum, item) => sum + item.amount, 0);

    return {
        countedMs: countedMs + activeCountedMs,
        expenseTotal
    };
}

function renderActiveTimer() {
    if (!state.active) {
        els.badge.textContent = "OFF";
        els.badge.className = "state-badge off";
        els.currentType.textContent = "Aucun timer";
        els.currentElapsed.textContent = "00:00:00";
        return;
    }

    const type = TYPES[state.active.type] || TYPES.client;
    const elapsed = new Date().getTime() - new Date(state.active.start).getTime();

    els.badge.textContent = "ON";
    els.badge.className = "state-badge on";
    els.currentType.textContent = `${type.emoji} ${type.label}`;
    els.currentElapsed.textContent = formatDuration(elapsed, true);
}

function renderSummary() {
    const t = totals();
    els.summaryRounded.textContent = formatDuration(t.countedMs);
    els.summaryExpenses.textContent = `${t.expenseTotal.toFixed(2)} CHF`;
}

function renderTimeEntries() {
    if (state.timeEntries.length === 0) {
        els.timeEntries.className = "entries empty";
        els.timeEntries.textContent = "Aucune entree.";
        return;
    }

    els.timeEntries.className = "entries";
    els.timeEntries.innerHTML = "";

    state.timeEntries.forEach(entry => {
        const type = TYPES[entry.type] || TYPES.client;
        const countedMs = roundedBillableMs(getEntryMs(entry));

        const row = document.createElement("div");
        row.className = "entry";

        row.innerHTML = `
            <div class="entry-main">
                <div class="entry-title">${formatClock(entry.start)} : ${formatClock(entry.end)} = ${formatDurationText(countedMs)} ${type.emoji} ${type.label}</div>
                <div class="entry-actions">
                    <button class="edit-btn" type="button" data-edit-time="${entry.id}">Editer</button>
                    <button class="delete-btn" type="button" data-delete-time="${entry.id}">Supprimer</button>
                </div>
            </div>
            <div class="entry-total">${formatDurationText(countedMs)}</div>
        `;

        els.timeEntries.appendChild(row);
    });
}

function renderExpenseEntries() {
    if (state.expenses.length === 0) {
        els.expenseEntries.className = "entries empty";
        els.expenseEntries.textContent = "Aucun frais.";
        return;
    }

    els.expenseEntries.className = "entries";
    els.expenseEntries.innerHTML = "";

    state.expenses.forEach(expense => {
        const row = document.createElement("div");
        row.className = "entry";

        row.innerHTML = `
            <div class="entry-main">
                <div class="entry-title">${expense.label}</div>
                <div class="entry-sub">${formatClock(expense.createdAt)}</div>
                <div class="entry-actions">
                    <button class="edit-btn" type="button" data-edit-expense="${expense.id}">Editer</button>
                    <button class="delete-btn" type="button" data-delete-expense="${expense.id}">Supprimer</button>
                </div>
            </div>
            <div class="entry-total">${expense.amount.toFixed(2)} CHF</div>
        `;

        els.expenseEntries.appendChild(row);
    });
}

function render() {
    els.todayTitle.textContent = formatTodayTitle();
    renderActiveTimer();
    renderSummary();
    renderTimeEntries();
    renderExpenseEntries();
}

function startTick() {
    if (tickHandle) {
        clearInterval(tickHandle);
    }

    tickHandle = setInterval(() => {
        renderActiveTimer();
        renderSummary();
    }, 1000);
}

function csvEscape(value) {
    const text = String(value ?? "");
    if (text.includes(";") || text.includes('"') || text.includes("\n")) {
        return `"${text.replaceAll('"', '""')}"`;
    }
    return text;
}

function buildCsv() {
    const lines = [];
    lines.push(["Type", "Categorie", "Debut", "Fin", "Montant CHF", "Temps compte"].join(";"));

    state.timeEntries.forEach(entry => {
        const type = TYPES[entry.type] || TYPES.client;
        const countedMs = roundedBillableMs(getEntryMs(entry));

        lines.push([
            "Temps",
            type.label,
            formatClock(entry.start),
            formatClock(entry.end),
            "",
            formatDurationText(countedMs)
        ].map(csvEscape).join(";"));
    });

    if (state.active) {
        const type = TYPES[state.active.type] || TYPES.client;
        const countedMs = roundedBillableMs(new Date().getTime() - new Date(state.active.start).getTime());

        lines.push([
            "Temps actif",
            type.label,
            formatClock(state.active.start),
            "En cours",
            "",
            formatDurationText(countedMs)
        ].map(csvEscape).join(";"));
    }

    state.expenses.forEach(expense => {
        lines.push([
            "Frais",
            expense.label,
            formatClock(expense.createdAt),
            "",
            expense.amount.toFixed(2),
            ""
        ].map(csvEscape).join(";"));
    });

    return lines.join("\n");
}

function buildMailBody() {
    const t = totals();
    const lines = [];

    lines.push(formatTodayTitle());
    lines.push("");
    lines.push(`Temps compte: ${formatDuration(t.countedMs)}`);
    lines.push(`Frais: ${t.expenseTotal.toFixed(2)} CHF`);
    lines.push("");
    lines.push("Temps:");

    if (state.timeEntries.length === 0 && !state.active) {
        lines.push("- Aucune entree");
    }

    state.timeEntries.forEach(entry => {
        const type = TYPES[entry.type] || TYPES.client;
        const countedMs = roundedBillableMs(getEntryMs(entry));
        lines.push(`- ${formatClock(entry.start)} : ${formatClock(entry.end)} = ${formatDurationText(countedMs)} ${type.label}`);
    });

    if (state.active) {
        const type = TYPES[state.active.type] || TYPES.client;
        const countedMs = roundedBillableMs(new Date().getTime() - new Date(state.active.start).getTime());
        lines.push(`- ${formatClock(state.active.start)} : En cours = ${formatDurationText(countedMs)} ${type.label}`);
    }

    lines.push("");
    lines.push("Frais:");

    if (state.expenses.length === 0) {
        lines.push("- Aucun frais");
    }

    state.expenses.forEach(expense => {
        lines.push(`- ${expense.label}: ${expense.amount.toFixed(2)} CHF`);
    });

    lines.push("");
    lines.push("CSV:");
    lines.push(buildCsv());

    return lines.join("\n");
}

function exportCsv() {
    const blob = new Blob(["\uFEFF" + buildCsv()], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    const date = new Date();
    a.href = url;
    a.download = `consultant-tool-${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}.csv`;
    a.click();

    URL.revokeObjectURL(url);
}

function sendMail() {
    const subject = `${MAIL_SUBJECT_PREFIX} - ${formatTodayTitle()}`;
    const body = buildMailBody();

    const href = `mailto:${encodeURIComponent(MAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
}

els.btnTravel.addEventListener("click", () => startTimer("travel"));
els.btnClient.addEventListener("click", () => startTimer("client"));
els.btnBreak.addEventListener("click", () => startTimer("break"));
els.btnStop.addEventListener("click", () => stopTimer(true));
els.btnManualTime.addEventListener("click", () => openTimeModal("add"));
els.btnFixedExpense.addEventListener("click", addFixedExpense);
els.btnCustomExpense.addEventListener("click", addCustomExpense);
els.btnExport.addEventListener("click", exportCsv);
els.btnMail.addEventListener("click", sendMail);
els.btnReset.addEventListener("click", resetDay);
els.btnCancelTimeModal.addEventListener("click", closeTimeModal);
els.btnSaveTimeModal.addEventListener("click", saveTimeModal);

document.addEventListener("click", event => {
    if (event.target.getAttribute("data-modal-close") === "true") {
        closeTimeModal();
        return;
    }

    const editTimeId = event.target.getAttribute("data-edit-time");
    if (editTimeId) {
        openTimeModal("edit", editTimeId);
        return;
    }

    const deleteTimeId = event.target.getAttribute("data-delete-time");
    if (deleteTimeId) {
        deleteTimeEntry(deleteTimeId);
        return;
    }

    const editExpenseId = event.target.getAttribute("data-edit-expense");
    if (editExpenseId) {
        editExpense(editExpenseId);
        return;
    }

    const deleteExpenseId = event.target.getAttribute("data-delete-expense");
    if (deleteExpenseId) {
        deleteExpense(deleteExpenseId);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !els.timeModal.classList.contains("hidden")) {
        closeTimeModal();
    }
});

render();
startTick();
