@echo off
title Image Optimization - Rome Tribe
color 0E
echo.
echo ========================================
echo  IMAGE OPTIMIZATION SCRIPT
echo  Rome Tribe Gathering
echo ========================================
echo.

cd /d "%~dp0"

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed!
    echo Please install Python from python.org
    pause
    exit /b 1
)

:: Check if Pillow is installed, install if not
echo Checking for required libraries...
python -c "import PIL" >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Pillow library not found. Installing...
    echo.
    pip install Pillow
    echo.
)

echo.
echo ========================================
echo  Starting Optimization
echo ========================================
echo.
echo This will:
echo  - Convert images to WebP format
echo  - Compress with 85%% quality
echo  - Resize large images
echo  - Generate detailed report
echo.
echo Output: images-optimized/ folder
echo.
pause

python optimize_images.py

echo.
echo ========================================
echo  Check IMAGE_OPTIMIZATION_REPORT.md
echo  for detailed results!
echo ========================================
echo.
pause

