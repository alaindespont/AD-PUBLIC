# Importe lde CSV contenant les noms a rechercher
$rqi = Import-Csv "AutomatedReturns_Namelist.csv" -Delimiter ";"

# Demmarer le navigateur a l'adresse du rapport
START MSEDGE "https://example.service-now.com/nav_to.do?uri=%2Fsys_report_template.do%3Fjvar_report_id%3DREPLACE_WITH_REPORT_ID"
timeout /t 10

# Pour chaque ligne dans le CSV, implante le nom dans le rapport et l'exporte
Foreach($Users in $rqi){

    $nom = $Users.Name
    Add-Type -AssemblyName System.Windows.Forms



    # Cherche le champ sort field pour arriver au champ de nom d'utilisateur
    [System.Windows.Forms.SendKeys]::SendWait("(^f)")
    [System.Windows.Forms.SendKeys]::SendWait("Add Sort Field")
    Start-Sleep 1
    [System.Windows.Forms.SendKeys]::SendWait("{TAB}{TAB}{TAB}{ENTER}")
    Start-Sleep 1
    [System.Windows.Forms.SendKeys]::SendWait("{TAB}{TAB}{TAB}")
    Start-Sleep 1


    # Insere le nom d'utilisateur
    [System.Windows.Forms.SendKeys]::SendWait("$nom")
    Start-Sleep 2
    [System.Windows.Forms.SendKeys]::SendWait("{ENTER}")


    # Execute le rapport et sort
    [System.Windows.Forms.SendKeys]::SendWait("(^f)")
    [System.Windows.Forms.SendKeys]::SendWait("Switch to new ui")
    Start-Sleep 1
    [System.Windows.Forms.SendKeys]::SendWait("{TAB}{TAB}{TAB}{ENTER}")
    Start-Sleep 1
    [System.Windows.Forms.SendKeys]::SendWait("+{TAB}+{TAB}+{TAB}{ENTER}")
    Start-Sleep 1



    # Cherche a novueau le champ sort field
    [System.Windows.Forms.SendKeys]::SendWait("(^f)")
    [System.Windows.Forms.SendKeys]::SendWait("Add Sort Field")
    [System.Windows.Forms.SendKeys]::SendWait("{TAB}{TAB}{TAB}{ENTER}")
    Start-Sleep 1

    # Va vers le champ "Code" du debut du rapport
    [System.Windows.Forms.SendKeys]::SendWait("{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}")
    Start-Sleep 1

    # Imite un clic droit et exporte en csv
    [System.Windows.Forms.SendKeys]::SendWait("(+{F10})")
    [System.Windows.Forms.SendKeys]::SendWait("{DOWN}{DOWN}{DOWN}{DOWN}{DOWN}")
    [System.Windows.Forms.SendKeys]::SendWait("{ENTER}{DOWN}{ENTER}")
    Start-Sleep 6

    # Ferme la fenetre de telechargement
    [System.Windows.Forms.SendKeys]::SendWait("{ENTER}")
    Start-Sleep 1
    [System.Windows.Forms.SendKeys]::SendWait("{ESC}")
    Start-Sleep 1
}
