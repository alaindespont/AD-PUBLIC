ECHO OFF
Del "%~dp0"\03_CombineReturnList.csv
PowerShell.exe -executionpolicy bypass -command "&{ foreach ($csv in Get-ChildItem -Filter *.csv){ $csv | Select-Object -ExpandProperty FullName | Import-csv | Export-Csv .\03_CombineReturnList.csv -NoTypeInformation -Append} }"
