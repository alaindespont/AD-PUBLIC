DEL "C:\Users\Public\Desktop\MailMerger.lnk"
DEL "C:\Users\Public\Documents\MailMerger.ico"
timeout /T 1 /NOBREAK
RD /Q /S "C:\ServiceDesk_MailMerger"
del "%~dp0\UNINSTALL.bat"
