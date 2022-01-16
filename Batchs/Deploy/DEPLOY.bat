REM Pour deployer des fichers et s'autodetruire apres
@echo on
mkdir C:\KinoBackup\
move /Y KinoBackup.ps1 C:\KinoBackup\
move /Y KinoBackup.bat C:\KinoBackup\
move /Y "C:\Users\%username%\Desktop\KinoBackup.lnk" "%AppData%\Microsoft\Windows\Start Menu\Programs\Startup\"
pause

del /q /f "%~f0" >nul 2>&1 & exit /b 0
