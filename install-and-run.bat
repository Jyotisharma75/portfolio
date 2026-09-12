@echo off
REM Install Node.js and run portfolio setup
REM This script will download and install Node.js LTS version

echo.
echo ============================================================
echo NODE.JS INSTALLER - AI Engineer Portfolio
echo ============================================================
echo.

REM Check if Node.js is already installed
node --version >nul 2>&1
if errorlevel 0 (
    if not errorlevel 1 (
        echo Node.js is already installed!
        for /f "tokens=*" %%i in ('node --version') do echo Version: %%i
        echo.
        echo Running portfolio setup...
        call run-portfolio.bat
        exit /b 0
    )
)

echo Node.js is not installed on this system.
echo.
echo This script will:
echo 1. Download Node.js LTS
echo 2. Install it automatically
echo 3. Set up and run your portfolio
echo.

pause

REM Create temp directory
mkdir %temp%\node-installer 2>nul

REM Download Node.js LTS (20.x)
echo Downloading Node.js LTS...
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi', '%temp%\node-installer\node.msi')" >nul 2>&1

if exist %temp%\node-installer\node.msi (
    echo Installing Node.js...
    msiexec /i %temp%\node-installer\node.msi /quiet /norestart
    
    echo Waiting for installation to complete...
    timeout /t 30 /nobreak
    
    echo.
    echo ✓ Node.js installation complete!
    echo.
    echo Running portfolio setup...
    call run-portfolio.bat
) else (
    echo.
    echo ERROR: Could not download Node.js
    echo.
    echo Please install Node.js manually from:
    echo https://nodejs.org/
    echo.
    echo Download the LTS version and run the installer.
    echo After installation, run run-portfolio.bat
    pause
    exit /b 1
)

rmdir /s /q %temp%\node-installer 2>nul
