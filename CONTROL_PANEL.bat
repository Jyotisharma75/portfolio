@echo off
REM Jyoti Sharma AI Engineer Portfolio - Start Menu
REM Main control panel for running the portfolio

:menu
cls
echo.
echo ============================================================
echo     JYOTI SHARMA AI ENGINEER PORTFOLIO - CONTROL PANEL
echo ============================================================
echo.
echo Select an option:
echo.
echo 1. Run Portfolio (Full Setup + Start Server)
echo 2. Install Node.js (If Not Already Installed)
echo 3. Just Start Dev Server (If Already Set Up)
echo 4. Open Portfolio in Browser
echo 5. View Documentation
echo 6. Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto run_full
if "%choice%"=="2" goto install_nodejs
if "%choice%"=="3" goto start_server
if "%choice%"=="4" goto open_browser
if "%choice%"=="5" goto view_docs
if "%choice%"=="6" goto exit
goto menu

:run_full
echo.
echo Starting full portfolio setup...
call run-portfolio.bat
goto menu

:install_nodejs
echo.
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js not found. Installing...
    REM Download Node.js LTS
    powershell -Command "Write-Host 'Downloading Node.js...' ; (New-Object Net.WebClient).DownloadFile('https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi', '%temp%\node.msi')" >nul 2>&1
    
    if exist %temp%\node.msi (
        echo Running Node.js installer...
        msiexec /i %temp%\node.msi /quiet /norestart
        timeout /t 30 /nobreak
        echo.
        echo ✓ Node.js installed!
        del %temp%\node.msi
    ) else (
        echo.
        echo Could not download Node.js automatically.
        echo Please download from: https://nodejs.org/
        echo Download the LTS version and run the installer manually.
    )
) else (
    echo ✓ Node.js is already installed!
    node --version
)
pause
goto menu

:start_server
echo.
echo.
echo Checking directories...
if not exist app (
    echo Error: app directory not found. Run option 1 first.
    pause
    goto menu
)

echo.
echo Starting development server...
echo Access your portfolio at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server.
echo.

start http://localhost:3000
timeout /t 2 /nobreak

npm run dev
goto menu

:open_browser
echo.
echo Opening portfolio in browser...
start http://localhost:3000
timeout /t 2 /nobreak
goto menu

:view_docs
echo.
echo ============================================================
echo Available Documentation:
echo ============================================================
echo.
echo 1. START_HERE.md - Quick overview
echo 2. QUICKSTART.md - 5-minute setup
echo 3. RUN_YOUR_PORTFOLIO.md - How to run
echo 4. SETUP.md - Detailed setup guide
echo 5. DEPLOYMENT_GUIDE.md - Deploy to Vercel
echo 6. FILE_ORGANIZATION.md - File structure
echo.
echo Open these files with Notepad or your preferred text editor.
echo.
pause
goto menu

:exit
echo.
echo Goodbye! Your portfolio is ready to showcase your skills! 🚀
echo.
pause
