@ECHO OFF
ECHO Bienvenue sur ce manager de fermeture tardive d'ordinateur "MTTS", Mean Time to Shutdown.
ECHO Indiquez en minutes, dans combien de temps vous voulez eteindre l'ordinateur.

REM La première fonction demande le temps en minute pour fermer à l'user
:FonctionPrompt
SET /P tempsfermeture=Temps avant fermeture en minutes : 
REM Si c'est vide, on redemande
IF "%tempsfermeture%"=="" (GOTO FonctionRedemande)
REM Si c'est égal a +Variable (apparemment c'est comme ca qu'on vérifier si c'est un integre, donc un bombre entier), on execute la fonction, ou on redemande
IF %tempsfermeture% EQU +%tempsfermeture% (GOTO FonctionShutdown) ELSE (GOTO FonctionVide)
GOTO:EOF 


:FonctionRedemande
ECHO.
ECHO.
ECHO VEUILLEZ INSERER UN NOMBRE ET PAS DE TEXTE !
ECHO.
ECHO.
call:FonctionPrompt
GOTO:EOF



:FonctionShutdown
PAUSE
ECHO Fermeture de l'ordinateur programmee effective dans %tempsfermeture% minutes
SET /A tempseffectif=%tempsfermeture%*60
shutdown /s /f /t %tempseffectif%
call:FonctionArret
GOTO:EOF

:FonctionArret
CLS
ECHO.
SET /P arret=Pour arreter le decompte et stopper la fermeture de l'ordinateur, ecrire STOP et appuyer sur ENTER : 
IF %arret%==STOP (shutdown /a) ELSE IF %arret%==stop (shutdown /a) ELSE (call:fonctionArret)

GOTO:EOF




