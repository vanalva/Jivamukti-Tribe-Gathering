@echo off
title Jivamukti Tribe - Local Server
color 0A
echo.
echo ========================================
echo  JIVAMUKTI TRIBE GATHERING
echo  Next.js Development Server
echo ========================================
echo.
echo Starting Next.js development server...
echo.
echo Server will be available at:
echo   - http://localhost:3000
echo   - http://127.0.0.1:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

cd /d "%~dp0"
npm run dev

pause

