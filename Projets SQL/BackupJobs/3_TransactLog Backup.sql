USE [msdb]
GO

/****** Object:  Job [3_TransactLog Backup]    Script Date: 22.04.2021 17:58:50 ******/
BEGIN TRANSACTION
DECLARE @ReturnCode INT
SELECT @ReturnCode = 0
/****** Object:  JobCategory [Database Maintenance]    Script Date: 22.04.2021 17:58:50 ******/
IF NOT EXISTS (SELECT name FROM msdb.dbo.syscategories WHERE name=N'Database Maintenance' AND category_class=1)
BEGIN
EXEC @ReturnCode = msdb.dbo.sp_add_category @class=N'JOB', @type=N'LOCAL', @name=N'Database Maintenance'
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback

END

DECLARE @jobId BINARY(16)
EXEC @ReturnCode =  msdb.dbo.sp_add_job @job_name=N'3_TransactLog Backup', 
		@enabled=1, 
		@notify_level_eventlog=0, 
		@notify_level_email=2, 
		@notify_level_netsend=0, 
		@notify_level_page=0, 
		@delete_level=0, 
		@description=N'Sauvegarde des logs transactionnels', 
		@category_name=N'Database Maintenance', 
		@owner_login_name=N'AD\Administrateur', 
		@notify_email_operator_name=N'Admin SQL', @job_id = @jobId OUTPUT
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
/****** Object:  Step [Vérification PRIMARY]    Script Date: 22.04.2021 17:58:50 ******/
EXEC @ReturnCode = msdb.dbo.sp_add_jobstep @job_id=@jobId, @step_name=N'Vérification PRIMARY', 
		@step_id=1, 
		@cmdexec_success_code=0, 
		@on_success_action=3, 
		@on_success_step_id=0, 
		@on_fail_action=1, 
		@on_fail_step_id=0, 
		@retry_attempts=0, 
		@retry_interval=0, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=N'IF (SELECT
repstate.role_desc
FROM sys.dm_hadr_availability_replica_states repstate
INNER JOIN sys.availability_groups ag
ON repstate.group_id = ag.group_id AND repstate.is_local = 1) != ''Primary''
BEGIN
RAISERROR (''Not Primary'', 2, 1)
END
', 
		@database_name=N'master', 
		@flags=0
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
/****** Object:  Step [Sauvegarde des logs transactionnels]    Script Date: 22.04.2021 17:58:50 ******/
EXEC @ReturnCode = msdb.dbo.sp_add_jobstep @job_id=@jobId, @step_name=N'Sauvegarde des logs transactionnels', 
		@step_id=2, 
		@cmdexec_success_code=0, 
		@on_success_action=3, 
		@on_success_step_id=0, 
		@on_fail_action=2, 
		@on_fail_step_id=0, 
		@retry_attempts=1, 
		@retry_interval=1, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=N'BACKUP LOG perl_db
TO  DISK = ''D:\backup\3_TransactLogs\TransactLog_perl_db.BAK''
GO', 
		@database_name=N'perl_db', 
		@flags=0
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
/****** Object:  Step [Déplacement des backup sur le NAS]    Script Date: 22.04.2021 17:58:50 ******/
EXEC @ReturnCode = msdb.dbo.sp_add_jobstep @job_id=@jobId, @step_name=N'Déplacement des backup sur le NAS', 
		@step_id=3, 
		@cmdexec_success_code=0, 
		@on_success_action=1, 
		@on_success_step_id=0, 
		@on_fail_action=2, 
		@on_fail_step_id=0, 
		@retry_attempts=1, 
		@retry_interval=1, 
		@os_run_priority=0, @subsystem=N'PowerShell', 
		@command=N'# Variables de date
$mois = get-date -uformat %m
$jour = get-date -uformat %d
$annee = get-date -uformat %y

# Fichiers de backup à déplacer
$Source = "D:\backup\3_TransactLogs"
$Destination = "\\AD1\Dossiers IT\DBA\Backups\3_TransactLogs_"+"$jour."+"$mois."+"$annee"

# Copie
Robocopy $Source $Destination * /e /r:1 /w:1', 
		@database_name=N'perl_db', 
		@flags=0
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
EXEC @ReturnCode = msdb.dbo.sp_update_job @job_id = @jobId, @start_step_id = 1
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
EXEC @ReturnCode = msdb.dbo.sp_add_jobschedule @job_id=@jobId, @name=N'Toutes les 15 minutres', 
		@enabled=1, 
		@freq_type=4, 
		@freq_interval=1, 
		@freq_subday_type=4, 
		@freq_subday_interval=15, 
		@freq_relative_interval=0, 
		@freq_recurrence_factor=0, 
		@active_start_date=20210413, 
		@active_end_date=99991231, 
		@active_start_time=0, 
		@active_end_time=235959, 
		@schedule_uid=N'a81fa62c-9ca1-4810-ad49-0ec5e0682e07'
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
EXEC @ReturnCode = msdb.dbo.sp_add_jobserver @job_id = @jobId, @server_name = N'(local)'
IF (@@ERROR <> 0 OR @ReturnCode <> 0) GOTO QuitWithRollback
COMMIT TRANSACTION
GOTO EndSave
QuitWithRollback:
    IF (@@TRANCOUNT > 0) ROLLBACK TRANSACTION
EndSave:
GO


