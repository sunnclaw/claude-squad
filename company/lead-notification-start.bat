@echo off
echo ========================================
echo Claude天团 Lead Notification System
echo ========================================
echo.
echo Starting webhook server...
echo.

REM Set environment variables if available
if exist .env (
    for /f "tokens=1,2 delims==" %%a in (.env) do set %%a=%%b
)

REM Start the webhook server
start "Lead Webhook Server" cmd /k "node lead-webhook-server.js"

echo.
echo Webhook server started on port 3200
echo.
echo Available commands:
echo   node lead-notification-system.js --check    Check for new leads
echo   node lead-notification-system.js --notify   Send notifications
echo   node lead-notification-system.js --list     List all leads
echo.
echo Press any key to check for leads...
pause > nul

node lead-notification-system.js --check

echo.
echo Press any key to exit...
pause > nul
