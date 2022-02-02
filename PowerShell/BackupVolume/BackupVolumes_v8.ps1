################################################################################ 
################################################################################
################################################################################
###### Créé par : Alain Philip Despont
###### Dernière mise à jour : 04.08.2021
###### But du script : Script de capture d'images
###### Logiciels additionnels : WinPE sur clé USB
###### Notes : C'est la version 8 qui marque mon départ
################################################################################
################################################################################
################################################################################
#-------------------------------------------------------------------------------
#        1         2         3         4         5         6         7         8
#2345678901234567890123456789012345678901234567890123456789012345678901234567890
#-------------------------------------------------------------------------------

# Le script commence par PARAM sinon erreur
# Trois parametres possibles : [scheduletask] - [activate] - [backup]
# Chacun lance une série de fonctions spécifiques à ce qu'on veut faire...

    param($scriptAction)

#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------     F U N C T I O N S     ---------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------


#-------------------------------------------------------------------------------
# FONCTION Pour créer la tâche planifiée sur les postes
#-------------------------------------------------------------------------------

function Create-ScheduledTask{


    # Nom de la tâche planifiée et la commande executée par le task scheduler
    $nom_ScheduledTask = "WinPEBackup"

    $d = "Z"
    $p = "FileSystem"
    $r = "\\deploy1\winpe_backup_share"
    $s ="Z:\scripts\BackupVolume.ps1 -scriptAction 'activate'"

    $command = "-command ""&{New-PSDrive -name $d -PSProvider $p -Root $r;$s}"" "

   # Je laisse la commande complète pour l'histoire :
   # $command = "-command ""&{New-PSDrive -name 'Z' -PSProvider 'FileSystem' -Root '\\deploy1\winpe_backup_share';Z:\scripts\BackupVolume.ps1 -scriptAction 'activate'}"" "



    # Supprimer la tache existante (Au cas ou on redéploie ce script)
    #---------------------------------------------------------------------------
    if(Get-ScheduledTask         -TaskName $nom_ScheduledTask                  `
                                 -ErrorAction SilentlyContinue){
        Unregister-ScheduledTask -TaskName $nom_ScheduledTask                  `
                                 -Confirm:$false
    }


    # Lecture du tableau integré - Script de Mark Gaber
    #---------------------------------------------------------------------------
    Write-Output ""
    try {
        $file = Get-Content $inputFile -ErrorAction Stop
    }
    catch {
        Write-Output "Could not find inputFile +$inputFile+.  Aborting..."
        EXIT 1
    }

    $__DATA__found = $false
    $backupTimer =  @{}        # create local variable empty hashtable
    $serialnumber = (get-ciminstance win32_bios).serialNumber

    foreach ($line in $file) {

        if ($line -cmatch  '^\s*__END__\s*$') {break}          # stop at __END__
        if ($line -cmatch  '^\s*__DATA__\s*$'){
            $__DATA__found = $true; continue
        }

        if ($__DATA__found) {
        if ($line -match   '^\s*(#.*)?$'   ) {continue}    # skip no-data lines
            $line   = $line -replace '\s*#.*',''           # remove EOL comments

            $fields = $line -split '\s+'         # field delimiter is whitespace

            $serial = $fields[0]
            $timer  = $fields[1]
    
            $backupTimer.add($serial, $timer)

        } # if in __DATA__ section
    } # next line in file 
  


    # Vérification des serials + timer
    #---------------------------------------------------------------------------
 
    # Si le serial existe dans le tableau, on prend l'heure fixée
    if($backupTimer.ContainsKey($serialnumber)){
       $tempsAttente = $backupTimer.$serialnumber
    }

    # Sinon on assigne une heure par défaut (qui alertera l'uilisateur)
    else{
        $tempsAttente = "2:00:00PM"
        $defaultTime = $true
    }


    # On créé la tâche planifiée qui executera le script
    #---------------------------------------------------------------------------

    # Vérifie si la lettre Z: est utilisée
        if(Get-Volume    -Driveletter Z -ErrorAction SilentlyContinue){
       Write-Warning -Message "ATTENTION CHANGER LA LETTRE DU DISQUE Z A AUTRE CHOSE"
       Read-Host     -Prompt "Sortie du script en appuyant sur ENTER"
       EXIT 1
    }

    if($defaultTime -eq $true){
        Write-Warning -message  "SERIAL NUMBER correspondant à cette machine PAS TROUVE"
        Write-Warning -message  "Sauvegarde planifiée pour $tempsAttente par défaut"
        Write-Warning -message  "Si besoin, ajouter SERIAL et TIMER en bas du script"
        Write-Host ""
    
        # Si l'utilisateur veut changer le script, il peut quitter maintenant :
        $yesNo = Read-Host                                                      `
                -Prompt "Appuyer sur [Y] pour enregistrer la tâche / [N] Annuler"
                if($yesNo -eq "n" -or ($yesNo -ne "y")){
                    Write-Warning -message "Sortie du script..."
                    EXIT 1
                }
               
        # Autrement on crée la tâche
        if($yesNo -eq "Y"){
    
            $action   = New-ScheduledTaskAction                                `
            -Execute "powershell.exe"                                          `
            -Argument $command

            $trigger  = New-ScheduledTaskTrigger                               `
            -Weekly                                                            `
            -DaysOfWeek Saturday                                               `
            -At $tempsAttente                                                  `

            $settings = New-ScheduledTaskSettingsSet                           `
            -WakeToRun
 
            Register-ScheduledTask                                             `
            -User $user                                                        `
            -Password $password                                                `
            -RunLevel Highest                                                  `
            -Action $action                                                    `
            -Trigger $trigger                                                  `
            -Settings $settings                                                `
            -TaskName $nom_ScheduledTask                                       `
            -Description "Active la clé USB contenant WINPE"

            Read-Host -prompt "Appuyer sur ENTER pour quitter"
            EXIT 0

        } # Fin du elseif
    } # fin du IF
} # Fin de la fonction Create-ScheduledTask



#-------------------------------------------------------------------------------
# FONCTIONS Pour écrire dans le log de façon claire et précise
#-------------------------------------------------------------------------------

# INFO
# Use Write-log to say something useful
# Use | Tee to pass OUTPUT of the commands
# When a command dont pass an output : put it before so its still take info

function Write-Log {

    # Default type sera une information (I)
    Param($Message, [ValidateSet("I", "warning","ERROR")][string]$type="I")

     $date = Get-Date
     "[$date][$type] $Message"           |
     Tee-Object -Append $machineLogPath  |
     Write-Verbose

} # Fin de la fonction Write-Log




#-------------------------------------------------------------------------------
# FONCTION Pour créer les fichiers de logs et stocker le nom de la machine
#-------------------------------------------------------------------------------

function Create-LoggingFiles{
    try{  
        
    #On prend la variable ici à cause du scope
    $nommachine = hostname

    #Le nom change de scope, donc on déclare ici
    $machineDir = $nommachine + "\"
    $dirMachineDir = $dirLogsDir + $machineDir

    #Créé le dossier avec le nom de l'ordinateur
    if(Get-Item $dirMachineDir){
    Write-Log $logFatLine
    Write-Log "## BACKUP EN COURS DE $nommachine"
    Write-Log "## $logDate"
    Write-Log $logFatLine
    Write-Log -type warning "[$dirMachineDir] existe déjà"
    }
    Else{New-Item -Path $dirLogsDir -Name $nommachine -ItemType "Directory" -Force
    Write-Log $logFatLine
    Write-Log "## BACKUP EN COURS DE $nommachine"
    Write-Log "## $logDate"
    Write-Log $logFatLine
    Write-Log $logSpace
    Write-Log "Le dossier contenant le log [$dirMachineDir] est créé"
    }


    # Vérifie si les logs existent ou non et les crée
    $listPaths = $masterLogPath, $rapportEmail, $machineLogPath, $hostnamePath
    foreach ($path in $listPaths){
        if  (Get-Item $path -ErrorAction SilentlyContinue){
             Write-Log -type warning "Existe déjà [$path]"
        }
        else{New-Item $path -ErrorAction SilentlyContinue                  
             Write-Log "Création de [$path]"
             }
    }

    # Ajotue le nom de l'ordinateur dans le fichier text
    Set-Content -Path $hostnamePath -Value $nommachine
    
    # Resume pour le log
    Write-Log $logSpace
    Write-Log $logLine                                        
    Write-Log "# RESUME DES FICHIERS LOGS EFFECTUE"          
    Write-Log $logLine  
    Write-Log $logSpace

    Write-Log "Nom de l'ordinateur : [$nommachine]"
    Write-log "Les logs se trouvent ici :[$dirLogsDir]"
    Write-Log "Les logs de la machine ici : [$machineDir]"
    Write-Log "Chemin exact : [$nas$logsDir$machineDir]"
    Write-log "Ce qui doit correspondre à : [$dirMachineDir]"
    Write-log $logSpace
    Write-Log "Le masterLog est ici : [$masterLogPath]"
    Write-Log "Le rapportEmail est ici : [$rapportEmail]"
    Write-Log "Nom de l'ordinateur stocké dans : [$hostnamePath]"


    }
    catch {$createloggingfiles =        "[ERROR] Bug à Create-LoggingFiles"}
    finally {
        if( $createloggingfiles -ne     "[ERROR] Bug à Create-LoggingFiles"){
           $global:createloggingfiles = "[ok] Create-LoggingFiles à fonctionné"
           Write-Log $createloggingfiles
           Add-Content -path $rapportEmail -value $createloggingfiles
        }
    }


} # Fin de la fonction Create-LoggingFiles



#-------------------------------------------------------------------------------
# FONCTION Pour activer la clé USB et redémmarer l'ordinateur
#-------------------------------------------------------------------------------
function Activate-WINPEDisk{
    try{
 
        Write-Log $logSpace             
        Write-Log $logLine                                        
        Write-Log "# ACTIVATION DE LA CLE WINPE"          
        Write-Log $logLine    
        Write-Log $logSpace                                  


        # D'abord on récupère le disque USB.
        Write-Log "Récupération du disque WINPE maintenant ->"
        $driveletter = Get-Volume -friendlyname "WINPE"            | Tee -Append $machineLogPath
        $letter = $driveletter.driveletter
        Get-Disk -Number                                          `
        (Get-Partition -DriveLetter $letter).DiskNumber |
        Tee -Append $machineLogPath |                             `
        Set-Disk -IsReadOnly $false                                     

        # Finalement on marque la partition comme étant active
        Write-Log "Le disque n'est plus read-only..."
        Set-partition -DriveLetter $letter                        `
                       -IsActive    $true                          | Tee -Append $machineLogPath
                           
        Write-Log "La partition [$letter] est activée..."     
        
        Write-Log "Le disque suivant est remis en read-only ->"  
        Get-Disk -Number                                          `
        (Get-Partition -DriveLetter $letter).DiskNumber |         `
        Tee -Append $machineLogPath |                             `
        Set-Disk -IsReadOnly $true         

    }
    catch {$activatewinpedisk =        "[ERROR] Bug à Activate-WINPEDisk"}
    finally {
        if( $activatewinpedisk -ne     "[ERROR] Bug à Activate-WINPEDisk"){
           $global:activatewinpedisk = "[ok] Activate-WINPEDisk à fonctionné"

            # On inscrit dans le rapport pour l'email
            Write-Log $activatewinpedisk
            Add-Content -path $rapportEmail -value $activatewinpedisk
        }
    }
  


    # Finalement on redémarre l'ordinateur
    Restart-Computer -Force

}# Fin de Activate-WINPEDisk


#-------------------------------------------------------------------------------
# FONCTION Pour sauvegarder les volumes
#-------------------------------------------------------------------------------
function Backup-Volume{
    try{
        Write-Log $logSpace                                                   
        Write-Log $logLine                                             
        Write-Log "# SAUVEGARDE DES VOLUMES"    
        Write-Log $logLine
        Write-Log $logSpace                                            
   

        # Emplacement de l'image
        $nommachine = Get-Content -path $hostnamePath
        $dirImgDirPath = $nas + $imgDir + "$nommachine\"
        Write-Log "Dossier de stockage des .wim est ici : [$dirImgDirPath]"
        
        if(Test-Path $dirImgDirPath -ErrorAction SilentlyContinue){
        Write-Log -type warning "Le dossier contenant les images de la machine existe déjà !"
        }
        else{New-Item -path $dirImgDir -Name "$nommachine" -ItemType "Directory"
        Write-Log "Le dossier [$nommachine] à été créé à l'emplacement [$dirImgDir]"
        }

        Write-Log "Les disques à sauvegarder suivants sont trouvés ->"
        # Récupère tous les disques voulus
        $getdiskvolumes = Get-Volume |                                           `
                          Where-Object -property "FileSystemLabel"               `
                                       -in $disktosave                            | Tee -Append $machineLogPath
        # Pour chaque volume on récupère la lettre et nom
        # On le couple avec le nom de la machine
        # Et on créé une image a part


        Write-Log "Pour chaque disque ci-dessous il va y avoir une sauvegarde..."
            foreach ($volume in $getdiskvolumes){
                     $driveletter = $volume.DriveLetter
                     $volumelabel = $volume.FileSystemLabel

                    # On récupère le nom de la machine grace au serial
                    Write-Log "Informations récupérées pour nommer les images :"
                    
                                        
                    $nommachine = Get-Content -path $hostnamePath 
                    Write-Log "Nom de la machine : [$nommachine]" 

                                             
                    $filename = "$nommachine" + "_" + "$volumelabel"
                    Write-Log "Nom du fichier : [$filename]" 

                                              
                    $imagefile = "$dirImgDirPath" + "$filename" + ".wim"
                    Write-Log "Chemin de l'image .wim : [$imagefile]"

                              
                    $capturedir = $driveletter + ":\"   
                    Write-Log "Lettre du disque capturé, vu par WinPE : [$capturedir]"                     

                    # La capture en tant que tel
                    Write-Log "Capture de l'image maintenant..."

                    New-WindowsImage `
                    -ImagePath $imagefile `
                    -CapturePath $capturedir `
                    -Name $filename                                              | Tee -Append $machineLogPath
                            
                    # Je n'ai pas réussi à obtenir quelque chose d'utile du log suivant
                    # X:\windows\Logs\DISM\dism.log        
                                                                    
            }

    }
    catch {
           $backupvolume =        "[ERROR] Bug à Backup-Volume"}
    finally {
        if($backupvolume -ne      "[ERROR] Bug à Backup-Volume"){
           $global:backupvolume = "[ok] Backup-Volume à fonctionné"}
          
           # On ajoute les erreurs au rapport pour l'email
           Write-Log $backupvolume
           Add-Content -path $rapportEmail -value $backupvolume
        }
    
}# Fin de la fonction Backup-Volume


#-------------------------------------------------------------------------------
# FONCTION Pour remettre la clé USB inactive et pouvoir eteindre l'ordinateur
#-------------------------------------------------------------------------------
function Desactivate-WINPEDisk{
    try{
        Write-Log $logSpace                                                            
        Write-Log $logLine                                                      
        Write-Log "# DESACTIVATION DE LA CLE WINPE"      
        Write-Log $logLine
        Write-Log $logSpace                                                      

        Write-Log "Récupération du disque WINPE maintenant ->"                   
        # D'abord on récupère le disque USB.
        $driveletter = Get-Volume -friendlyname "WINPE"                         | Tee -Append $machineLogPath
        $letter = $driveletter.driveletter

        Write-Log "Le disque suivant va etre désactivé ->"
        Get-Disk -Number (Get-Partition -DriveLetter $letter).DiskNumber        | Tee -Append $machineLogPath
        Set-Partition -DriveLetter $letter -IsActive $false                     | Tee -Append $machineLogPath
        
        # Pas besoin de ça pour une raison inconnu
        # Il le faut à Activate-WinPEDisk cependant
        # Mais pas besoin lors que l'on est en WinPE
        # Set-Disk -IsReadOnly  $true
        
    }
    catch {$desactivatewinpedisk =        "[ERROR] Bug à Desactivate-WINPEDisk"}
    finally {
        if($desactivatewinpedisk -ne      "[ERROR] Bug à Desactivate-WINPEDisk"){
           $global:desactivatewinpedisk = "[ok] Desactivate-WINPEDisk à fonctionné"

           #On ajoute les erreurs au rapport pour l'email
           Write-Log $desactivatewinpedisk
           Add-Content -path $rapportEmail -value $desactivatewinpedisk
        }
    }

}# Fin de la fonction Desactivate-WINPEDisk


#-------------------------------------------------------------------------------
# FONCTION Pour envoyer le log par mail
#-------------------------------------------------------------------------------
function Send-LogMail{
    try{
        Write-Log $logSpace                                                           
        Write-Log $logLine                                                      
        Write-Log "# ENVOI DU RAPPORT PAR EMAIL"      
        Write-Log $logLine
        Write-Log $logSpace    
  
        #On récupère le contenu du fichier de log
        Write-Log "On récupère le rapport spécialement créé pour le mail ->"
        $content = Get-Content -path $rapportEmail #-Delimiter "`n"
        foreach($line in $content){
            Write-Log $line
        }         

        #On vérifie si il y a une erreur pour le mettre dans le mail
        if ($content | %{$_ -match "ERROR"}) 
             {$bugFound = "[ERREUR]"}
        else {$bugFound = "[Backup complete]"                                 
        }
        Write-Log $logSpace      
        Write-Log "On vérifie si une fonction a eu une erreur : [$bugFound]"

        #On prend le nom de la machine sauvegardée
        $nommachine = Get-Content -path $hostnamePath      
        Write-Log "On récupère le nom de la machine : [$nommachine]"                   

        # Formatting
        $tab = "&nbsp;&nbsp;&nbsp;&nbsp;"
        $br1 = "</br>"
        $br2 = "</br></br>"

        # Corps du message
        $body1 = "$br1" + "<b>NOM DE LA MACHINE</b>" + "$br2"
        $body2 = "$tab"+ "$nommachine"

        $body3 = "$br2" + "<b>RAPPORT : RAPPORT SUR LES FONCTIONS</b>" + "$br2"
        $body4 = $content
        $body5 = "[ ] Send-LogMail à fonctionné"


        #Erreurs capturées par PowerShell
        Write-Log "Les erreurs signalées par PowerShell sont : [$Error]"

        $body6 = "$br2" + "<b>RAPPORT : AUTRES ERREURS</b>" + "$br2"
        $body7 = "$noError"

        $body8 = "$br2" + "<b>EMPLACEMENT DU LOG DE LA MACHINE</b>" + "$br2"
        $body9 = "$tab"+ "$machineLogPath"

        #Envoi du message
        $expe = 'serviceAccount@lab4tech.ch'
        $dest = 'destinataire@lab4tech.ch'
        $serveurSMTP = 'smtp.ch'
        $objet = '$bugFound' + 'Backup de'+ '$nommachine' + 'du' + $(get-date -Format $dateformat)
        $message = New-Object System.Net.Mail.MailMessage
        $message.Body = $body1
        $message.Body += $body2
        $message.Body += $body3
        $message.Body += $body4
        $message.Body += $body5
        $message.Body += $body6
        $message.Body += $body7
        $message.Body += $body8
        $message.Body += $body9
        $message.IsBodyHtml = $true
        $message.From = $expe
        $message.Subject = $objet
        $message.To.Add($dest)
        $client = New-object System.Net.Mail.SmtpClient
        $client.Set_Host($serveurSMTP)
        $client.Send($message)

    }
    catch {$sendlogmail =        "[ERROR] Bug à Send-LogMail"}
    finally {
        if($sendlogmail -ne      "[ERROR] Bug à Send-LogMail"){
           $global:sendlogmail = "[ok] Send-LogMail à fonctionné"}

           # On ajoute les erreurs au rapport pour l'email
           Write-Log "On rajoute le rapport sur la fonction email"
           Write-Log $sendlogmail    
    }

} #Fin de la fonction Send-LogMail

#-------------------------------------------------------------------------------
# FONCTION Pour eteindre l'ordinateur et finaliser l'opération
#-------------------------------------------------------------------------------
Function Final-Function{

    Write-Log $logSpace                                                           
    Write-Log $logLine                                                      
    Write-Log "# FONCTION FINALE"      
    Write-Log $logLine
    Write-Log $logSpace    

    # On ajoute le log au masterlog et on formatte le tout
    Write-Log "On ajoute le log au MasterLog"
    Write-Log "$logSpace"
    Write-Log "<____________________________________________ >"
    Write-Log "<______________ ( FIN DU LOG ) ______________ >"
    Write-Log "<____________________________________________ >"
    Write-Log $logSpace | Write-Log $logSpace | Write-Log $logSpace 
    Write-Log $logSpace | Write-Log $logSpace | Write-Log $logSpace 
    Write-Log $logSpace | Write-Log $logSpace | Write-Log $logSpace 

    Get-content $machineLogPath | Add-Content $masterLogPath

    # Déplacement des fichiers logs dans les bons dossiers
    $nommachine = Get-content $hostnamePath
    $date       = Get-Date -Format $dateformat
    $nne        = $date + "_" + $nommachine + $log
    $machineDir = $nas + $logsDir + "$nommachine\" +$nne

    Get-Item $machineLogPath | Move-item -Destination $machineDir   


    Remove-Item -path $hostnamePath -Force
    Remove-Item -Path $rapportEmail -Force

} # Fin de la fonction Final-Function


#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#----------------------     M A I N   P R O G R A M     ------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------


#-------------------------------------------------------------------------------
# DEBUG MODE
#-------------------------------------------------------------------------------

    # $true = ACTIF
    # $false = INACTIF => Pour utilisation normale
    $DEBUG = $true
    
    if($DEBUG -eq $true){

        # Affiche les messages 
        $VerbosePreference = "Continue"

            function Debug-Console{
            $debugWinpe = Read-Host -Prompt "Pour continuer a utiliser WinPE entrer [Y] | Pour sortir de WinPE de force entrer [EXIT]"
            if($debugWinpe -eq "Y"){EXIT 0}
            if($debugWinpe -eq "EXIT"){
        
                # Desactive la partition WinPE pour pouvoir sortir
                $driveletter = Get-Volume -friendlyname "WINPE"
                $letter = $driveletter.driveletter
                Get-Disk -Number (Get-Partition -DriveLetter $letter).DiskNumber
                Set-Partition -DriveLetter $letter -IsActive $false
                Restart-computer
                }
            }
        }
    
        

    if($DEBUG -eq $false){

        function Debug-Console{

            Stop-Computer -Force        
        }
    }
    



    

#-------------------------------------------------------------------------------
# SCRIPT SCOPE VARIABLES
#-------------------------------------------------------------------------------

# Emplacement du fichier contenant les noms des machines = Soi-même
    $inputFile = $PSCommandPath

# Compte utilisé par le script
    $user = "DOMAINE\Administrateur"
    $password = "Passw0rd"

# Formattage de la date et des logs
   
    $logDate    =    Get-Date
    $dateformat =    "yyyy-MM-dd"
    $logLine    =    "#-------------------------------------------------------------------------------"
    $logFatLine =    "################################################################################"
    $logSpace   =    ""

# Noms des disques que l'on va rechercher et sauvegarder
    $disktosave = "Windows", "Data"

# Ces variables ne changent pas
# Elles peuvent rester dans le scope du script VS fonction
# J'aimerai réduire, mais c'est long à vérifier

# Serial de la machine utilisé pour retrouver les fichiers
    $serialnumber = (get-ciminstance win32_bios).serialNumber

# Si la lettre de lecteur ou les dossiers changent de nom
    $nas     = "Z:\"
    $log     = ".log"
    $txt     = ".txt"
    $logsDir = "logs\"
    $imgDir  = "images\"

# Chemins des dossiers /images/ et /logs/
    $dirLogsDir = $nas + $logsDir
    $dirImgDir  = $nas + $imgDir

# Le master log est situés à la racine de /logs/
    $masterLogPath  = $nas + $logsDir + "master" + $log
    $rapportEmail   = $nas + $logsDir + $machineDir + "rapportEmail" + $log
    $machineLogPath = $nas + $logsDir + $machineDir + $serialnumber + $log

# Pour stocker le nom du PC on crée un fichier
    $hostnamePath = $nas + $serialnumber + $txt
    

#-------------------------------------------------------------------------------
# MAIN PROGRAM EXECUTION
#-------------------------------------------------------------------------------

# Selon le paramètres reçu par le script au lancement
# On lance une suite de fonctions précises


    if ($scriptAction -eq "scheduletask"){
        # Execute la fonction pour créer la tâche planifiée
        Create-ScheduledTask                              
        EXIT 0
    }

    if ($scriptAction -eq "activate"){
        #Crée les ficheirs de log et nom de machine
        Create-LoggingFiles
        
        # Execute la fonction poru activer la clé USB
        Activate-WINPEDisk
        EXIT 0
    }

    if ($scriptAction -eq "backup"){
       
        # Execute la fonction pour sauvegarder les disques
        Backup-Volume

        # Desactive le disque USB
        Desactivate-WINPEDisk

        # On envoie le mail récapitulatif
        Send-LogMail  

        # Appelle la dernière fonction
        Final-Function

        # On éteint l'ordinateur pour le weekend
        # En passant c'est aussi le mode debug :-)
        Debug-Console

        EXIT 0
    }

    # Si le paramètre n'existe pas, on annule tout
    if ($scriptAction -ne "install" -ne "activate" -ne "backup"){
        Write-Warning -Message "Paramètre de script inconnu... fermeture immédiate"
        EXIT 1
    }

#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#------------------------     S E R I A L D A T A     --------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
#-------------------------------------------------------------------------------

__DATA__

#  serial   backuptimer
# --------  -----------
EZGTHFZAUA  3:00:00AM
EZGTHFZAUB  3:00:00AM
EZGTHFZAUC  3:00:00AM

#__END__


# Last line
