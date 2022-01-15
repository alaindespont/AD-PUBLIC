mkdir "C:\Program Files\InteractMailMerger"

move /Y "%~dp0\installationfiles\MailMerger.lnk" "C:\Users\Public\Desktop"
move /Y "%~dp0\installationfiles\01_Single Mails Templates" "C:\Program Files\InteractMailMerger"
move /Y "%~dp0\installationfiles\02_Install" "C:\Program Files\InteractMailMerger"
move /Y "%~dp0\installationfiles\MailMerger.xlsm" "C:\Program Files\InteractMailMerger"
move /Y "%~dp0\README.txt" "C:\Program Files\InteractMailMerger"

RD /Q /S "%~dp0\installationfiles"
RD /Q /S "%~dp0"

timeout /T 1 /NOBREAK
del "%~dp0\Install.bat"
