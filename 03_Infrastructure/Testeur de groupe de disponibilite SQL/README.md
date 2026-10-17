# Testeur de groupe de disponibilité SQL Server

Historical batch script for comparing the SQL Server instance reached through an availability group listener with and without read-only application intent.

## Requirements and configuration

- Windows Command Prompt and `sqlcmd` available on the execution path.
- Network access to the listener and appropriate SQL Server permissions.
- Replace the example listener `AGListener1` and database `perl_db` with values appropriate to the test environment.

## Expected output and limits

The script repeatedly runs `SELECT @@SERVERNAME` through the listener, first normally and then with `-K ReadOnly`. The returned server names help observe routing behavior. The result depends on the availability group configuration and does not, by itself, validate the complete high availability solution.

This is a historical test example; review it before execution.

[Script](./TestAGGroupSQL.bat)
