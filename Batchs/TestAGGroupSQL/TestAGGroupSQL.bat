@ECHO OFF
ECHO Ce script va executer des requetes via SQLCMD sur l'ecouteur AGlistener1
TITLE Testeur de groupe de disponibilite 


:start
echo Entrer le nombre d'essais
set/p "time=>
set time=%time%


:looping
set/a time=%time%-1
if %time%==0 goto timeup
REM echo Restant [%time%]
PING localhost -n 2 >NUL

ECHO Requete normale sur :
SQLCMD -S AGListener1 -d perl_db -Q"select @@servername" -W
PING localhost -n 4 >NUL
goto secondline

:secondline
ECHO Requete en lecture seule sur : 
SQLCMD -S AGListener1 -K ReadOnly -d perl_db  -Q"select @@servername" -W
PING localhost -n 4 >NUL
goto looping


:timesup
echo FIN
pause
goto start


