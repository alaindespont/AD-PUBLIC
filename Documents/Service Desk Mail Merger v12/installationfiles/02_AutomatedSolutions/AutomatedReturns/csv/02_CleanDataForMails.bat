ECHO OFF
Del "%~dp0"\03_CleanDataForMails.csv
PowerShell.exe -executionpolicy bypass -command "&{ Import-Csv .\03_CombineReturnList.csv | select ci_u_code, ci_name, rp_user, rp_user.manager, vipCHECK | Export-Csv -Path .\03_CleanDataForMails.csv -NoTypeInformation}"