@echo off
title Jivamukti Tribe - Local Server
color 0A
echo.
echo ========================================
echo  JIVAMUKTI TRIBE GATHERING
echo  Local Server Launcher
echo ========================================
echo.
echo Starting local web server on port 8000...
echo.
echo Server will be available at:
echo   - http://localhost:8000
echo   - http://127.0.0.1:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause

