@echo off
title Image Optimization - Dry Run
color 0B
echo.
echo ========================================
echo  IMAGE OPTIMIZATION - DRY RUN
echo  Rome Tribe Gathering
echo ========================================
echo.
echo This will ANALYZE without modifying files
echo.

cd /d "%~dp0"

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed!
    pause
    exit /b 1
)

:: Check if Pillow is installed
python -c "import PIL" >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Pillow library not found. Installing...
    pip install Pillow
    echo.
)

echo Running analysis...
echo.

python optimize_images.py --dry-run

echo.
echo ========================================
echo  Analysis complete!
echo  No files were modified.
echo ========================================
echo.
pause

