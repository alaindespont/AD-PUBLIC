# Marque l'heure du début de l'installation
$DateDebut  = Get-Date -UFormat "%R"
Write-host "Début du script à"$DateDebut

#Si on met le labo ailleurs
$emplacementDesDisques = "D:\Labo_ADK_MDT\VirtualMachines"
$emplacementVHDX = "C:\Users\Public\Documents\Hyper-V\Virtual Hard Disks"



# Créé un switch virtuel
New-VMSwitch -name DEPLOY_PrivateSwitch -SwitchType Private

# Importe les VM et prépare les machines
Import-VM  -Copy -GenerateNewId -Path "$emplacementDesDisques\DEPLOY1_ServeurDeDeploiement_MD100\Virtual Machines\27917935-4474-4075-AF22-0663C635004D.vmcx"
Import-VM  -Copy -GenerateNewId -Path "$emplacementDesDisques\DEPLOY2_GoldImage\Virtual Machines\A60E60BB-E16F-43FE-B2D4-BF88FBBFAC00.vmcx"
Import-VM  -Copy -GenerateNewId -Path "$emplacementDesDisques\DEPLOY3_TestDeploy\Virtual Machines\BDC88C27-E415-420E-839B-BA28B45DF879.vmcx"

# Resize du serveur pour avoir la place pour installer des OS
Resize-VHD -Path "$emplacementVHDX\DEPLOY1_ServeurDeDeploiement_MD100.vhdx" -SizeBytes 100GB
Resize-VHD -Path "$emplacementVHDX\DEPLOY3_TestDeploy.vhdx" -SizeBytes 60GB

# Fait un checkpoint sur les machines pour éviter de les copier dans l'installation du labo
Checkpoint-VM -Name DEPLOY1_ServeurDeDeploiement_MD100 -SnapshotName "INSTALLATION DU LABO"
Checkpoint-VM -Name DEPLOY2_GoldImage -SnapshotName "INSTALLATION DU LABO"
Checkpoint-VM -Name DEPLOY3_TestDeploy -SnapshotName "INSTALLATION DU LABO"


# Marque l'heure de fin de l'installation et fait un prompt pour que l'utilisateur sache que c'est terminé
$DateFin  = Get-Date -UFormat "%R"
Write-host "Fin du script à"$DateFin
Read-Host "Copie du labo terminée, appuyer sur [ENTER] pour fermer"
exit


