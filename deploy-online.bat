@echo off
title Jivamukti Tribe - Quick Deploy
color 0E
echo.
echo ========================================
echo  JIVAMUKTI TRIBE GATHERING
echo  Quick Deploy - Full Setup
echo ========================================
echo.

cd /d "%~dp0"

:: Check if server is already running
netstat -an | findstr ":8000" | findstr "LISTENING" >nul

if %errorlevel% equ 0 (
    echo [INFO] Local server already running on port 8000
    echo.
) else (
    echo Step 1: Starting local server...
    start "Jivamukti Tribe - Local Server" cmd /c start-server.bat
    echo [OK] Server started
    echo.
    echo Waiting for server to initialize...
    timeout /t 3 /nobreak >nul
)

echo Step 2: Starting ngrok tunnel...
echo.
echo ========================================
echo.

:: Run ngrok in this window
ngrok http 8000

