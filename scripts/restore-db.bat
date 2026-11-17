@echo off
REM ==============================================================================
REM APTI CLUB - Database Restoration Script (Windows)
REM Usage: .\scripts\restore-db.bat <path-to-sql-file>
REM ==============================================================================

if "%~1"=="" (
    echo Usage: %0 ^<path-to-sql-file^>
    exit /b 1
)

set BACKUP_FILE=%~1
echo [INFO] Restoring database from %BACKUP_FILE%...

docker exec -i apti_mysql_db mysql -uapti_user -papti_secure_pass_2026! apti_placement_db < "%BACKUP_FILE%"

if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Database restored successfully!
) else (
    echo [ERROR] Restoration failed.
)
