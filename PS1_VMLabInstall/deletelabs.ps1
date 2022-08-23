#Suppression d'ancien labos
get-vm -name DEPLOY* | Remove-VM
Get-Item -Path "C:\Users\Public\Documents\Hyper-V\Virtual Hard Disks\DEPLOY*" | Remove-Item
Remove-VMSwitch "DEPLOY_PrivateSwitch"