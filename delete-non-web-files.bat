@echo off
title Delete Non-Web Files
color 0C
echo.
echo ========================================
echo  DELETE NON-WEB FILES
echo  Rome Tribe Gathering
echo ========================================
echo.
echo WARNING: This will DELETE files!
echo.
echo This script will remove:
echo  - .tif / .tiff files (RAW images)
echo  - .zip files (Archives)
echo  - .pdf files (Documents)
echo  - .psd files (Photoshop)
echo  - .ai files (Illustrator)
echo.
echo These files are NOT web-compatible
echo and are wasting ~106 MB of space.
echo.
echo ========================================
echo.

cd /d "%~dp0"

set /p CONFIRM="Are you sure you want to DELETE these files? (yes/no): "

if /i NOT "%CONFIRM%"=="yes" (
    echo.
    echo Cancelled. No files deleted.
    pause
    exit /b 0
)

echo.
echo Searching for non-web files...
echo.

:: Find and delete non-web files
powershell -Command "Get-ChildItem 'images' -Recurse -Include *.tif,*.tiff,*.zip,*.pdf,*.psd,*.ai | ForEach-Object { Write-Host \"Deleting: $($_.Name) ($([math]::Round($_.Length/1MB,2)) MB)\"; Remove-Item $_.FullName -Force }"

echo.
echo ========================================
echo  Non-web files deleted!
echo ========================================
echo.
pause

