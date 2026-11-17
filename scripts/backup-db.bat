@echo off
REM ==============================================================================
REM APTI CLUB - GSSSIETW Placement Intelligence Platform
REM Automated Database Backup Script (Windows)
REM ==============================================================================

set BACKUP_DIR=.\backups
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c%%a%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
set TIMESTAMP=%mydate%_%mytime%
set BACKUP_FILE=%BACKUP_DIR%\apti_db_backup_%TIMESTAMP%.sql

echo [INFO] Dumping MySQL database apti_placement_db to %BACKUP_FILE%...

docker exec apti_mysql_db mysqldump -uapti_user -papti_secure_pass_2026! apti_placement_db > "%BACKUP_FILE%"

if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Backup completed successfully: %BACKUP_FILE%
) else (
    echo [ERROR] Backup failed.
)
