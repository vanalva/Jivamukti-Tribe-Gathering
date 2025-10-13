@echo off
title Jivamukti Tribe - ngrok Tunnel
color 0B
echo.
echo ========================================
echo  JIVAMUKTI TRIBE GATHERING
echo  ngrok Public URL Launcher
echo ========================================
echo.

:: Check if local server is running on port 8000
echo Checking for local server...
netstat -an | findstr ":8000" | findstr "LISTENING" >nul

if %errorlevel% equ 0 (
    echo [OK] Local server detected on port 8000
    echo.
    echo Starting ngrok tunnel...
    echo.
    echo ========================================
    echo  Your public URL will appear below
    echo  Share this URL with anyone!
    echo ========================================
    echo.
    timeout /t 2 /nobreak >nul
    
    cd /d "%~dp0"
    ngrok http 8000
) else (
    echo [ERROR] No local server found on port 8000
    echo.
    echo Please start the server first by running:
    echo   start-server.bat
    echo.
    echo Or manually start it with:
    echo   python -m http.server 8000
    echo.
    pause
    exit /b 1
)

