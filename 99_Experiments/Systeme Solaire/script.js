const objectData = [
	{
		id: "soleil",
		name: "Soleil",
		kind: "Etoile",
		src: "img/soleil.png",
		color: "#f3c962",
		size: "Diametre: 1 392 700 km",
		rotation: "Rotation: ~27 jours",
		orbit: "Centre du systeme",
		markerSize: 126
	},
	{
		id: "mercure",
		name: "Mercure",
		kind: "Planete",
		src: "img/mercure.png",
		color: "#bfc2c7",
		size: "Diametre: 4 879 km",
		rotation: "Rotation: 58.6 jours",
		orbit: "Orbite: 88 jours",
		markerSize: 30
	},
	{
		id: "venus",
		name: "Venus",
		kind: "Planete",
		src: "img/venus.png",
		color: "#e8bd75",
		size: "Diametre: 12 104 km",
		rotation: "Rotation: 243 jours",
		orbit: "Orbite: 225 jours",
		markerSize: 30
	},
	{
		id: "terre",
		name: "Terre",
		kind: "Planete",
		src: "img/terre.png",
		color: "#70d8ff",
		size: "Diametre: 12 742 km",
		rotation: "Rotation: 0.997 jour",
		orbit: "Orbite: 365.25 jours",
		markerSize: 30
	},
	{
		id: "lune",
		name: "Lune",
		kind: "Lune de Terre",
		parentId: "terre",
		src: "img/lune.png",
		color: "#d7dde6",
		size: "Diametre: 3 475 km",
		rotation: "Rotation: 27.3 jours",
		orbit: "Orbite: 27.3 jours",
		markerSize: 28
	},
	{
		id: "mars",
		name: "Mars",
		kind: "Planete",
		src: "img/mars.png",
		color: "#ff6b4a",
		size: "Diametre: 6 779 km",
		rotation: "Rotation: 1.03 jour",
		orbit: "Orbite: 687 jours",
		markerSize: 30
	},
	{
		id: "phobos",
		name: "Phobos",
		kind: "Lune de Mars",
		parentId: "mars",
		src: "img/lune.png",
		color: "#c5c2bd",
		size: "Taille: ~22 km",
		rotation: "Rotation: 0.32 jour",
		orbit: "Orbite: 0.32 jour",
		markerSize: 26
	},
	{
		id: "deimos",
		name: "Deimos",
		kind: "Lune de Mars",
		parentId: "mars",
		src: "img/lune.png",
		color: "#c9c0b5",
		size: "Taille: ~12 km",
		rotation: "Rotation: 1.26 jour",
		orbit: "Orbite: 1.26 jour",
		markerSize: 26
	},
	{
		id: "asteroids_belt",
		name: "Ceinture d'asteroides",
		kind: "Asteroides",
		src: "img/asteroids_belt.png",
		color: "#d39a36",
		size: "Zone: ~2.1 a 3.3 UA",
		rotation: "Objets: vitesses variables",
		orbit: "Entre Mars et Jupiter",
		markerSize: 58,
		anchor: "ring",
		anchorPoint: { x: 0, y: -1 },
		selectionZoom: 0.8
	},
	{
		id: "asteroids_troyens",
		name: "Asteroides troyens",
		kind: "Asteroides",
		src: "img/asteroids_troyens.png",
		color: "#caa56a",
		size: "Zone: orbite de Jupiter",
		rotation: "Objets: vitesses variables",
		orbit: "Points L4 et L5",
		markerSize: 64,
		anchor: "ring",
		anchorPoint: { x: 0, y: -1 },
		selectionZoom: 0.65
	},
	{
		id: "jupiter",
		name: "Jupiter",
		kind: "Planete",
		src: "img/jupiter.png",
		color: "#f4a35d",
		size: "Diametre: 139 820 km",
		rotation: "Rotation: 0.41 jour",
		orbit: "Orbite: 11.86 ans",
		markerSize: 36
	},
	{
		id: "ganymede",
		name: "Ganymede",
		kind: "Lune de Jupiter",
		parentId: "jupiter",
		src: "img/lune.png",
		color: "#bfb7a5",
		size: "Diametre: 5 268 km",
		rotation: "Rotation: 7.15 jours",
		orbit: "Orbite: 7.15 jours",
		markerSize: 28
	},
	{
		id: "callisto",
		name: "Callisto",
		kind: "Lune de Jupiter",
		parentId: "jupiter",
		src: "img/lune.png",
		color: "#aaa294",
		size: "Diametre: 4 821 km",
		rotation: "Rotation: 16.69 jours",
		orbit: "Orbite: 16.69 jours",
		markerSize: 28
	},
	{
		id: "io",
		name: "Io",
		kind: "Lune de Jupiter",
		parentId: "jupiter",
		src: "img/lune.png",
		color: "#f3d15c",
		size: "Diametre: 3 643 km",
		rotation: "Rotation: 1.77 jour",
		orbit: "Orbite: 1.77 jour",
		markerSize: 28
	},
	{
		id: "europe",
		name: "Europe",
		kind: "Lune de Jupiter",
		parentId: "jupiter",
		src: "img/lune.png",
		color: "#d9e5f1",
		size: "Diametre: 3 122 km",
		rotation: "Rotation: 3.55 jours",
		orbit: "Orbite: 3.55 jours",
		markerSize: 28
	},
	{
		id: "saturne",
		name: "Saturne",
		kind: "Planete",
		src: "img/saturne.png",
		color: "#d9bd7a",
		size: "Diametre: 116 460 km",
		rotation: "Rotation: 0.44 jour",
		orbit: "Orbite: 29.45 ans",
		markerSize: 42
	},
	{
		id: "titan",
		name: "Titan",
		kind: "Lune de Saturne",
		parentId: "saturne",
		src: "img/lune.png",
		color: "#d7a65d",
		size: "Diametre: 5 149 km",
		rotation: "Rotation: 15.95 jours",
		orbit: "Orbite: 15.95 jours",
		markerSize: 28
	},
	{
		id: "rhea",
		name: "Rhea",
		kind: "Lune de Saturne",
		parentId: "saturne",
		src: "img/lune.png",
		color: "#d7d7d3",
		size: "Diametre: 1 528 km",
		rotation: "Rotation: 4.52 jours",
		orbit: "Orbite: 4.52 jours",
		markerSize: 28
	},
	{
		id: "japet",
		name: "Japet",
		kind: "Lune de Saturne",
		parentId: "saturne",
		src: "img/lune.png",
		color: "#b8afa1",
		size: "Diametre: 1 469 km",
		rotation: "Rotation: 79.3 jours",
		orbit: "Orbite: 79.3 jours",
		markerSize: 28
	},
	{
		id: "dione",
		name: "Dione",
		kind: "Lune de Saturne",
		parentId: "saturne",
		src: "img/lune.png",
		color: "#d8d9dc",
		size: "Diametre: 1 123 km",
		rotation: "Rotation: 2.74 jours",
		orbit: "Orbite: 2.74 jours",
		markerSize: 28
	},
	{
		id: "thetys",
		name: "Thetys",
		kind: "Lune de Saturne",
		parentId: "saturne",
		src: "img/lune.png",
		color: "#e0e0dc",
		size: "Diametre: 1 062 km",
		rotation: "Rotation: 1.89 jour",
		orbit: "Orbite: 1.89 jour",
		markerSize: 28
	},
	{
		id: "uranus",
		name: "Uranus",
		kind: "Planete",
		src: "img/uranus.png",
		color: "#6cd5d3",
		size: "Diametre: 50 724 km",
		rotation: "Rotation: 0.72 jour",
		orbit: "Orbite: 84 ans",
		markerSize: 34
	},
	{
		id: "titania",
		name: "Titania",
		kind: "Lune d'Uranus",
		parentId: "uranus",
		src: "img/lune.png",
		color: "#c7c6bd",
		size: "Diametre: 1 578 km",
		rotation: "Rotation: 8.71 jours",
		orbit: "Orbite: 8.71 jours",
		markerSize: 28
	},
	{
		id: "oberon",
		name: "Oberon",
		kind: "Lune d'Uranus",
		parentId: "uranus",
		src: "img/lune.png",
		color: "#b8b7ad",
		size: "Diametre: 1 523 km",
		rotation: "Rotation: 13.46 jours",
		orbit: "Orbite: 13.46 jours",
		markerSize: 28
	},
	{
		id: "umbriel",
		name: "Umbriel",
		kind: "Lune d'Uranus",
		parentId: "uranus",
		src: "img/lune.png",
		color: "#a7a7a1",
		size: "Diametre: 1 169 km",
		rotation: "Rotation: 4.14 jours",
		orbit: "Orbite: 4.14 jours",
		markerSize: 28
	},
	{
		id: "ariel",
		name: "Ariel",
		kind: "Lune d'Uranus",
		parentId: "uranus",
		src: "img/lune.png",
		color: "#d5d8d8",
		size: "Diametre: 1 158 km",
		rotation: "Rotation: 2.52 jours",
		orbit: "Orbite: 2.52 jours",
		markerSize: 28
	},
	{
		id: "neptune",
		name: "Neptune",
		kind: "Planete",
		src: "img/neptune.png",
		color: "#5d8cff",
		size: "Diametre: 49 244 km",
		rotation: "Rotation: 0.67 jour",
		orbit: "Orbite: 164.8 ans",
		markerSize: 34
	},
	{
		id: "triton",
		name: "Triton",
		kind: "Lune de Neptune",
		parentId: "neptune",
		src: "img/lune.png",
		color: "#cbd5d8",
		size: "Diametre: 2 707 km",
		rotation: "Rotation: 5.88 jours",
		orbit: "Orbite: 5.88 jours",
		markerSize: 28
	},
	{
		id: "pluton",
		name: "Pluton",
		kind: "Planete naine",
		src: "img/lune.png",
		color: "#bda58c",
		size: "Diametre: 2 377 km",
		rotation: "Rotation: 6.39 jours",
		orbit: "Orbite: 248 ans",
		markerSize: 30
	},
	{
		id: "charon",
		name: "Charon",
		kind: "Lune de Pluton",
		parentId: "pluton",
		src: "img/lune.png",
		color: "#b9b5ad",
		size: "Diametre: 1 212 km",
		rotation: "Rotation: 6.39 jours",
		orbit: "Orbite: 6.39 jours",
		markerSize: 28
	},
	{
		id: "kuiper",
		name: "Ceinture de Kuiper",
		kind: "Objets transneptuniens",
		src: "img/kuiper_belt.png",
		color: "#8cc7ff",
		size: "Zone: ~30 a 50 UA",
		rotation: "Objets: vitesses variables",
		orbit: "Au-dela de Neptune",
		markerSize: 72,
		anchor: "ring",
		anchorPoint: { x: 0, y: -1 },
		selectionZoom: 0.2
	}
];

const objectTranslations = {
	en: {
		soleil: {
			name: "Sun",
			kind: "Star",
			size: "Diameter: 1 392 700 km",
			rotation: "Rotation: ~27 days",
			orbit: "System center"
		},
		mercure: {
			name: "Mercury",
			kind: "Planet",
			size: "Diameter: 4 879 km",
			rotation: "Rotation: 58.6 days",
			orbit: "Orbit: 88 days"
		},
		venus: {
			name: "Venus",
			kind: "Planet",
			size: "Diameter: 12 104 km",
			rotation: "Rotation: 243 days",
			orbit: "Orbit: 225 days"
		},
		terre: {
			name: "Earth",
			kind: "Planet",
			size: "Diameter: 12 742 km",
			rotation: "Rotation: 0.997 day",
			orbit: "Orbit: 365.25 days"
		},
		lune: {
			name: "Moon",
			kind: "Moon of Earth",
			size: "Diameter: 3 475 km",
			rotation: "Rotation: 27.3 days",
			orbit: "Orbit: 27.3 days"
		},
		mars: {
			name: "Mars",
			kind: "Planet",
			size: "Diameter: 6 779 km",
			rotation: "Rotation: 1.03 days",
			orbit: "Orbit: 687 days"
		},
		phobos: {
			name: "Phobos",
			kind: "Moon of Mars",
			size: "Size: ~22 km",
			rotation: "Rotation: 0.32 day",
			orbit: "Orbit: 0.32 day"
		},
		deimos: {
			name: "Deimos",
			kind: "Moon of Mars",
			size: "Size: ~12 km",
			rotation: "Rotation: 1.26 days",
			orbit: "Orbit: 1.26 days"
		},
		asteroids_belt: {
			name: "Asteroid belt",
			kind: "Asteroids",
			size: "Zone: ~2.1 to 3.3 AU",
			rotation: "Objects: variable speeds",
			orbit: "Between Mars and Jupiter"
		},
		asteroids_troyens: {
			name: "Trojan asteroids",
			kind: "Asteroids",
			size: "Zone: Jupiter orbit",
			rotation: "Objects: variable speeds",
			orbit: "L4 and L5 points"
		},
		jupiter: {
			name: "Jupiter",
			kind: "Planet",
			size: "Diameter: 139 820 km",
			rotation: "Rotation: 0.41 day",
			orbit: "Orbit: 11.86 years"
		},
		ganymede: {
			name: "Ganymede",
			kind: "Moon of Jupiter",
			size: "Diameter: 5 268 km",
			rotation: "Rotation: 7.15 days",
			orbit: "Orbit: 7.15 days"
		},
		callisto: {
			name: "Callisto",
			kind: "Moon of Jupiter",
			size: "Diameter: 4 821 km",
			rotation: "Rotation: 16.69 days",
			orbit: "Orbit: 16.69 days"
		},
		io: {
			name: "Io",
			kind: "Moon of Jupiter",
			size: "Diameter: 3 643 km",
			rotation: "Rotation: 1.77 days",
			orbit: "Orbit: 1.77 days"
		},
		europe: {
			name: "Europa",
			kind: "Moon of Jupiter",
			size: "Diameter: 3 122 km",
			rotation: "Rotation: 3.55 days",
			orbit: "Orbit: 3.55 days"
		},
		saturne: {
			name: "Saturn",
			kind: "Planet",
			size: "Diameter: 116 460 km",
			rotation: "Rotation: 0.44 day",
			orbit: "Orbit: 29.45 years"
		},
		titan: {
			name: "Titan",
			kind: "Moon of Saturn",
			size: "Diameter: 5 149 km",
			rotation: "Rotation: 15.95 days",
			orbit: "Orbit: 15.95 days"
		},
		rhea: {
			name: "Rhea",
			kind: "Moon of Saturn",
			size: "Diameter: 1 528 km",
			rotation: "Rotation: 4.52 days",
			orbit: "Orbit: 4.52 days"
		},
		japet: {
			name: "Iapetus",
			kind: "Moon of Saturn",
			size: "Diameter: 1 469 km",
			rotation: "Rotation: 79.3 days",
			orbit: "Orbit: 79.3 days"
		},
		dione: {
			name: "Dione",
			kind: "Moon of Saturn",
			size: "Diameter: 1 123 km",
			rotation: "Rotation: 2.74 days",
			orbit: "Orbit: 2.74 days"
		},
		thetys: {
			name: "Tethys",
			kind: "Moon of Saturn",
			size: "Diameter: 1 062 km",
			rotation: "Rotation: 1.89 days",
			orbit: "Orbit: 1.89 days"
		},
		uranus: {
			name: "Uranus",
			kind: "Planet",
			size: "Diameter: 50 724 km",
			rotation: "Rotation: 0.72 day",
			orbit: "Orbit: 84 years"
		},
		titania: {
			name: "Titania",
			kind: "Moon of Uranus",
			size: "Diameter: 1 578 km",
			rotation: "Rotation: 8.71 days",
			orbit: "Orbit: 8.71 days"
		},
		oberon: {
			name: "Oberon",
			kind: "Moon of Uranus",
			size: "Diameter: 1 523 km",
			rotation: "Rotation: 13.46 days",
			orbit: "Orbit: 13.46 days"
		},
		umbriel: {
			name: "Umbriel",
			kind: "Moon of Uranus",
			size: "Diameter: 1 169 km",
			rotation: "Rotation: 4.14 days",
			orbit: "Orbit: 4.14 days"
		},
		ariel: {
			name: "Ariel",
			kind: "Moon of Uranus",
			size: "Diameter: 1 158 km",
			rotation: "Rotation: 2.52 days",
			orbit: "Orbit: 2.52 days"
		},
		neptune: {
			name: "Neptune",
			kind: "Planet",
			size: "Diameter: 49 244 km",
			rotation: "Rotation: 0.67 day",
			orbit: "Orbit: 164.8 years"
		},
		triton: {
			name: "Triton",
			kind: "Moon of Neptune",
			size: "Diameter: 2 707 km",
			rotation: "Rotation: 5.88 days",
			orbit: "Orbit: 5.88 days"
		},
		pluton: {
			name: "Pluto",
			kind: "Dwarf planet",
			size: "Diameter: 2 377 km",
			rotation: "Rotation: 6.39 days",
			orbit: "Orbit: 248 years"
		},
		charon: {
			name: "Charon",
			kind: "Moon of Pluto",
			size: "Diameter: 1 212 km",
			rotation: "Rotation: 6.39 days",
			orbit: "Orbit: 6.39 days"
		},
		kuiper: {
			name: "Kuiper belt",
			kind: "Trans-Neptunian objects",
			size: "Zone: ~30 to 50 AU",
			rotation: "Objects: variable speeds",
			orbit: "Beyond Neptune"
		}
	}
};

const interfaceText = {
	fr: {
		htmlLang: "fr",
		panelTitle: "Objets",
		speedLabel: "Vitesse simulation",
		recenter: "Recentrer",
		languageLabel: "Langue",
		openMenu: "Ouvrir le menu",
		closeMenu: "Fermer le menu",
		zoomControls: "Controle du zoom",
		zoomIn: "Zoomer",
		zoomOut: "Dezoomer",
		viewport: "Simulation du systeme solaire"
	},
	en: {
		htmlLang: "en",
		panelTitle: "Objects",
		speedLabel: "Simulation speed",
		recenter: "Recenter",
		languageLabel: "Language",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		zoomControls: "Zoom controls",
		zoomIn: "Zoom in",
		zoomOut: "Zoom out",
		viewport: "Solar system simulation"
	}
};

const objectList = document.getElementById("objectList");
const panel = document.getElementById("objectPanel");
const panelTitle = document.getElementById("panelTitle");
const menuToggle = document.getElementById("menuToggle");
const closePanel = document.getElementById("closePanel");
const languageControl = document.getElementById("languageControl");
const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");
const speedLabel = document.getElementById("speedLabel");
const recenterButton = document.getElementById("recenterView");
const solarSystem = document.getElementById("solarSystem");
const zoomValue = document.getElementById("zoomValue");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const viewport = document.querySelector(".space-viewport");
const zoomControls = document.querySelector(".zoom-controls");
const appHeader = document.querySelector(".app-header");
const overlay = document.getElementById("selectionOverlay");
const marker = document.getElementById("selectionMarker");
const line = document.getElementById("selectionLine");
const label = document.getElementById("selectionLabel");

const buttonsByObject = new Map();
let selectedObject = null;
let selectedElement = null;
let trackingSelection = false;
let zoom = 1;
let panX = 0;
let panY = 0;
let currentLanguage = "fr";
let baseAnimations = [];
let isDraggingView = false;
let dragPointerId = null;
let dragStartX = 0;
let dragStartY = 0;
let dragStartPanX = 0;
let dragStartPanY = 0;

function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

function getObjectText(item) {
	return {
		...item,
		...(objectTranslations[currentLanguage]?.[item.id] || {})
	};
}

function updateSelectionLabel() {
	if (!selectedObject) {
		return;
	}

	const itemText = getObjectText(selectedObject);
	const title = document.createElement("strong");
	const kind = document.createElement("span");
	title.textContent = itemText.name;
	kind.textContent = itemText.kind;
	label.replaceChildren(title, kind);
}

function updatePanelToggleText() {
	const text = interfaceText[currentLanguage];
	const isOpen = panel.classList.contains("is-open");
	menuToggle.setAttribute("aria-label", isOpen ? text.closeMenu : text.openMenu);
	closePanel.setAttribute("aria-label", text.closeMenu);
}

function updateLanguageButtons() {
	languageButtons.forEach((button) => {
		const isActive = button.dataset.language === currentLanguage;
		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});
}

function setLanguage(language) {
	if (!interfaceText[language]) {
		return;
	}

	currentLanguage = language;
	const text = interfaceText[currentLanguage];

	document.documentElement.lang = text.htmlLang;
	panelTitle.textContent = text.panelTitle;
	speedLabel.textContent = text.speedLabel;
	recenterButton.textContent = text.recenter;
	languageControl.setAttribute("aria-label", text.languageLabel);
	zoomControls.setAttribute("aria-label", text.zoomControls);
	zoomIn.setAttribute("aria-label", text.zoomIn);
	zoomOut.setAttribute("aria-label", text.zoomOut);
	viewport.setAttribute("aria-label", text.viewport);

	updateLanguageButtons();
	updatePanelToggleText();
	renderObjectList();
	updateSelectionLabel();
}

function createObjectButton(item, options = {}) {
	const itemText = getObjectText(item);
	const button = document.createElement("button");
	button.className = "object-button";
	button.type = "button";
	button.dataset.object = item.id;
	button.setAttribute("aria-label", itemText.name);
	button.style.setProperty("--accent", item.color);

	if (options.isMoon) {
		button.classList.add("is-moon");
	}

	if (selectedObject?.id === item.id) {
		button.classList.add("is-active");
	}

	const visual = document.createElement("span");
	visual.className = "object-visual";

	const swatch = document.createElement("span");
	swatch.className = "object-swatch";

	const image = document.createElement("img");
	image.src = item.src;
	image.alt = "";
	swatch.append(image);
	visual.append(swatch);

	const text = document.createElement("span");
	text.className = "object-text";

	const name = document.createElement("span");
	name.className = "object-name";
	name.textContent = itemText.name;

	const kind = document.createElement("span");
	kind.className = "object-kind";
	kind.textContent = itemText.kind;

	const info = document.createElement("span");
	info.className = "object-info";
	[itemText.size, itemText.rotation, itemText.orbit].forEach((lineText) => {
		const row = document.createElement("span");
		row.textContent = lineText;
		info.append(row);
	});

	text.append(name, kind, info);
	button.append(visual, text);
	button.addEventListener("click", () => selectObject(item.id));

	buttonsByObject.set(item.id, button);
	return button;
}

function createObjectGroup(item) {
	const group = document.createElement("div");
	group.className = "object-group";
	group.style.setProperty("--group-accent", item.color);
	group.append(createObjectButton(item));

	const moons = objectData.filter((candidate) => candidate.parentId === item.id);

	if (moons.length > 0) {
		const moonList = document.createElement("div");
		moonList.className = "moon-submenu";

		moons.forEach((moon) => {
			moonList.append(createObjectButton(moon, { isMoon: true }));
		});

		group.append(moonList);
	}

	return group;
}

function renderObjectList() {
	buttonsByObject.clear();
	objectList.replaceChildren();

	objectData.forEach((item) => {
		if (!item.parentId) {
			objectList.append(createObjectGroup(item));
		}
	});
}

function setPanelOpen(isOpen) {
	panel.classList.toggle("is-open", isOpen);
	panel.setAttribute("aria-hidden", String(!isOpen));
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	updatePanelToggleText();

	if (isOpen) {
		panel.removeAttribute("inert");
	} else {
		panel.setAttribute("inert", "");
	}

	updateSelectionOverlay();
}

function parseAnimationDuration(value) {
	return value.split(",").map((part) => {
		const trimmed = part.trim();
		const amount = parseFloat(trimmed);

		if (Number.isNaN(amount)) {
			return 0;
		}

		return trimmed.endsWith("ms") ? amount / 1000 : amount;
	});
}

function captureBaseAnimations() {
	baseAnimations = Array.from(solarSystem.querySelectorAll("*"))
		.map((element) => {
			const computed = window.getComputedStyle(element);
			const name = computed.animationName || computed.webkitAnimationName;
			const duration = computed.animationDuration || computed.webkitAnimationDuration;
			const delay = computed.animationDelay || computed.webkitAnimationDelay;

			if (!name || name === "none" || !duration) {
				return null;
			}

			return {
				element,
				durations: parseAnimationDuration(duration),
				delays: parseAnimationDuration(delay || "0s")
			};
		})
		.filter(Boolean);
}

function setSimulationSpeed(speed) {
	speedValue.textContent = `x${Math.round(speed)}`;

	baseAnimations.forEach(({ element, durations, delays }) => {
		const nextDuration = durations
			.map((duration) => duration === 0 ? "0s" : `${(duration / speed).toFixed(3)}s`)
			.join(", ");
		const nextDelay = delays
			.map((delay) => delay === 0 ? "0s" : `${(delay / speed).toFixed(3)}s`)
			.join(", ");

		element.style.animationDuration = nextDuration;
		element.style.webkitAnimationDuration = nextDuration;
		element.style.animationDelay = nextDelay;
		element.style.webkitAnimationDelay = nextDelay;
	});
}

function setViewTransform() {
	solarSystem.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
	zoomValue.textContent = `${Math.round(zoom * 100)}%`;
	updateSelectionOverlay();
}

function setPan(nextPanX, nextPanY) {
	panX = nextPanX;
	panY = nextPanY;
	setViewTransform();
}

function recenterView() {
	solarSystem.classList.add("is-recentering");
	clearSelectedObject();
	zoom = 1.5;
	panX = 0;
	panY = 0;
	setViewTransform();
	requestAnimationFrame(() => {
		solarSystem.classList.remove("is-recentering");
	});
}

function setZoom(nextZoom) {
	zoom = clamp(nextZoom, 0.2, 3);
	setViewTransform();
}

function applySelectionZoom(item) {
	if (item.selectionZoom && zoom > item.selectionZoom) {
		setZoom(item.selectionZoom);
	}
}

function clearSelection() {
	if (selectedElement) {
		selectedElement.classList.remove("is-selected");
		selectedElement.style.removeProperty("--object-accent");
	}

	if (selectedObject) {
		const activeButton = buttonsByObject.get(selectedObject.id);
		activeButton?.classList.remove("is-active");
	}
}

function clearSelectedObject() {
	clearSelection();
	selectedObject = null;
	selectedElement = null;
	overlay.hidden = true;
}

function selectObject(objectId) {
	const item = objectData.find((candidate) => candidate.id === objectId);
	const target = solarSystem.querySelector(`.sim-object[data-object="${objectId}"]`);

	if (!item || !target) {
		return;
	}

	clearSelection();
	selectedObject = item;
	selectedElement = target;
	selectedElement.classList.add("is-selected");
	selectedElement.style.setProperty("--object-accent", item.color);
	overlay.hidden = false;
	overlay.style.setProperty("--selection-color", item.color);
	updateSelectionLabel();

	const activeButton = buttonsByObject.get(item.id);
	activeButton?.classList.add("is-active");

	applySelectionZoom(item);
	revealObjectIfNeeded(item, target);

	if (!trackingSelection) {
		trackingSelection = true;
		requestAnimationFrame(trackSelection);
	}

	updateSelectionOverlay();
}

function getObjectAnchor(rect, item, target = selectedElement) {
	const anchor = {
		x: rect.left + rect.width / 2,
		y: rect.top + rect.height / 2
	};

	if (item.anchor === "ring") {
		const anchorPoint = item.anchorPoint || { x: 0, y: -1 };
		const baseSize = target
			? Math.min(target.offsetWidth || rect.width / zoom, target.offsetHeight || rect.height / zoom)
			: Math.min(rect.width / zoom, rect.height / zoom);
		const radius = baseSize * zoom / 2;

		anchor.x += radius * anchorPoint.x;
		anchor.y += radius * anchorPoint.y;
	}

	return anchor;
}

function getSelectionSize(rect, item) {
	if (item.anchor === "ring") {
		return item.markerSize || 64;
	}

	const objectSize = Math.max(rect.width, rect.height);

	return Math.max(item.markerSize || 30, Math.min(objectSize + 24, 150));
}

function getHeaderBottom() {
	return appHeader?.getBoundingClientRect().bottom || 58;
}

function getAvailableTargetBounds(markerSize) {
	const margin = 24;
	const radius = markerSize / 2;
	const top = getHeaderBottom() + margin + radius;
	const bottom = window.innerHeight - margin - radius;
	let right = window.innerWidth - margin - radius;
	const panelRect = panel.getBoundingClientRect();

	if (panel.classList.contains("is-open") && panelRect.left > 0) {
		right = Math.min(right, panelRect.left - margin - radius);
	}

	let left = margin + radius;

	if (right <= left) {
		left = margin;
		right = window.innerWidth - margin;
	}

	return {
		left,
		right,
		top,
		bottom: bottom <= top ? window.innerHeight - margin : bottom
	};
}

function revealObjectIfNeeded(item, target) {
	const rect = target.getBoundingClientRect();
	const anchor = getObjectAnchor(rect, item, target);
	const markerSize = getSelectionSize(rect, item);
	const bounds = getAvailableTargetBounds(markerSize);
	let deltaX = 0;
	let deltaY = 0;

	if (anchor.x < bounds.left) {
		deltaX = bounds.left - anchor.x;
	} else if (anchor.x > bounds.right) {
		deltaX = bounds.right - anchor.x;
	}

	if (anchor.y < bounds.top) {
		deltaY = bounds.top - anchor.y;
	} else if (anchor.y > bounds.bottom) {
		deltaY = bounds.bottom - anchor.y;
	}

	if (deltaX !== 0 || deltaY !== 0) {
		setPan(panX + deltaX, panY + deltaY);
	}
}

function getSelectionCalloutPosition(labelWidth, labelHeight) {
	const panelRect = panel.getBoundingClientRect();
	const margin = 16;
	const top = getHeaderBottom() + 12;
	const left = margin;
	const right = panel.classList.contains("is-open") && panelRect.left > 0
		? panelRect.left - margin
		: window.innerWidth - margin;
	const availableWidth = Math.max(labelWidth, right - left);
	const centerX = left + availableWidth / 2;

	return {
		x: clamp(centerX - labelWidth / 2, margin, window.innerWidth - labelWidth - margin),
		y: top
	};
}

function getLineSource(markerY, labelPosition, labelWidth, labelHeight) {
	const labelCenterX = labelPosition.x + labelWidth / 2;
	const labelTop = labelPosition.y;
	const labelBottom = labelPosition.y + labelHeight;

	return {
		x: labelCenterX,
		y: markerY < labelPosition.y ? labelTop : labelBottom
	};
}

function updateSelectionOverlay() {
	if (!selectedObject || !selectedElement || overlay.hidden) {
		return;
	}

	const rect = selectedElement.getBoundingClientRect();
	const anchor = getObjectAnchor(rect, selectedObject, selectedElement);
	const markerX = anchor.x;
	const markerY = anchor.y;
	const markerSize = getSelectionSize(rect, selectedObject);

	marker.style.width = `${markerSize}px`;
	marker.style.height = `${markerSize}px`;
	marker.style.transform = `translate(${markerX}px, ${markerY}px) translate(-50%, -50%)`;

	const labelWidth = label.offsetWidth || 150;
	const labelHeight = label.offsetHeight || 44;
	const labelPosition = getSelectionCalloutPosition(labelWidth, labelHeight);

	label.style.transform = `translate(${labelPosition.x}px, ${labelPosition.y}px)`;

	const source = getLineSource(markerY, labelPosition, labelWidth, labelHeight);
	const dx = markerX - source.x;
	const dy = markerY - source.y;
	const length = Math.hypot(dx, dy);
	const angle = Math.atan2(dy, dx) * 180 / Math.PI;

	line.style.width = `${length}px`;
	line.style.transform = `translate(${source.x}px, ${source.y}px) rotate(${angle}deg)`;
}

function trackSelection() {
	if (!selectedElement) {
		trackingSelection = false;
		return;
	}

	updateSelectionOverlay();
	requestAnimationFrame(trackSelection);
}

function beginViewDrag(event) {
	if (event.button !== undefined && event.button !== 0) {
		return;
	}

	isDraggingView = true;
	dragPointerId = event.pointerId;
	dragStartX = event.clientX;
	dragStartY = event.clientY;
	dragStartPanX = panX;
	dragStartPanY = panY;
	viewport.classList.add("is-dragging");
	viewport.setPointerCapture(event.pointerId);
	event.preventDefault();
}

function dragView(event) {
	if (!isDraggingView || event.pointerId !== dragPointerId) {
		return;
	}

	setPan(
		dragStartPanX + event.clientX - dragStartX,
		dragStartPanY + event.clientY - dragStartY
	);
}

function endViewDrag(event) {
	if (!isDraggingView || event.pointerId !== dragPointerId) {
		return;
	}

	isDraggingView = false;
	dragPointerId = null;
	viewport.classList.remove("is-dragging");
}

setLanguage(currentLanguage);
captureBaseAnimations();
setPanelOpen(false);
setZoom(1);
setSimulationSpeed(Number(speedRange.value));

menuToggle.addEventListener("click", () => {
	setPanelOpen(!panel.classList.contains("is-open"));
});

closePanel.addEventListener("click", () => {
	setPanelOpen(false);
});

speedRange.addEventListener("input", (event) => {
	setSimulationSpeed(Number(event.target.value));
});

languageButtons.forEach((button) => {
	button.addEventListener("click", () => {
		setLanguage(button.dataset.language);
	});
});

recenterButton.addEventListener("click", recenterView);

zoomIn.addEventListener("click", () => {
	setZoom(zoom + 0.15);
});

zoomOut.addEventListener("click", () => {
	setZoom(zoom - 0.15);
});

viewport.addEventListener("wheel", (event) => {
	event.preventDefault();
	const direction = event.deltaY < 0 ? 1 : -1;
	setZoom(zoom + direction * 0.1);
}, { passive: false });

viewport.addEventListener("pointerdown", beginViewDrag);
viewport.addEventListener("pointermove", dragView);
viewport.addEventListener("pointerup", endViewDrag);
viewport.addEventListener("pointercancel", endViewDrag);

window.addEventListener("resize", updateSelectionOverlay);

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		setPanelOpen(false);
	}
});
