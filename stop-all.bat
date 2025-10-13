@echo off
title Jivamukti Tribe - Stop All Services
color 0C
echo.
echo ========================================
echo  JIVAMUKTI TRIBE GATHERING
echo  Stopping All Services
echo ========================================
echo.

echo Stopping Python HTTP server...
taskkill /F /IM python.exe /FI "WINDOWTITLE eq Jivamukti Tribe - Local Server*" 2>nul
if %errorlevel% equ 0 (
    echo [OK] Local server stopped
) else (
    echo [INFO] No local server was running
)

echo.
echo Stopping ngrok tunnel...
taskkill /F /IM ngrok.exe 2>nul
if %errorlevel% equ 0 (
    echo [OK] ngrok tunnel stopped
) else (
    echo [INFO] No ngrok tunnel was running
)

echo.
echo ========================================
echo  All services stopped successfully
echo ========================================
echo.
timeout /t 3

