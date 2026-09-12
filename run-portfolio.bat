@echo off
REM Jyoti Sharma AI Engineer Portfolio - Complete Setup and Run Script
REM This script will:
REM 1. Check for Node.js
REM 2. Install Node.js if needed
REM 3. Install dependencies
REM 4. Organize files
REM 5. Start dev server
REM 6. Open browser

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo     JYOTI SHARMA AI ENGINEER PORTFOLIO - SETUP & RUN
echo ============================================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js...
node --version >nul 2>&1

if errorlevel 1 (
    echo Node.js not found. Installing...
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version and run the installer.
    echo.
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo ✓ Node.js found: !NODE_VERSION!
)

echo.
echo Checking for npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo npm not found. Please install Node.js first.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo ✓ npm found: !NPM_VERSION!
)

echo.
echo ============================================================
echo STEP 1: Create Directory Structure
echo ============================================================
echo.

mkdir app 2>nul
mkdir components\navbar 2>nul
mkdir components\hero 2>nul
mkdir components\about 2>nul
mkdir components\experience 2>nul
mkdir components\projects 2>nul
mkdir components\skills 2>nul
mkdir components\education 2>nul
mkdir components\contact 2>nul
mkdir components\footer 2>nul
mkdir data 2>nul
mkdir lib 2>nul
mkdir public 2>nul

echo ✓ Directories created

echo.
echo ============================================================
echo STEP 2: Organize Files to Correct Locations
echo ============================================================
echo.

REM Move app files
if exist app-layout.tsx (
    move /y app-layout.tsx app\layout.tsx >nul
    echo ✓ Moved app-layout.tsx to app/layout.tsx
)

if exist app-page.tsx (
    move /y app-page.tsx app\page.tsx >nul
    echo ✓ Moved app-page.tsx to app/page.tsx
)

if exist app-globals.css (
    move /y app-globals.css app\globals.css >nul
    echo ✓ Moved app-globals.css to app/globals.css
)

if exist app-sitemap.ts (
    move /y app-sitemap.ts app\sitemap.ts >nul
    echo ✓ Moved app-sitemap.ts to app/sitemap.ts
)

if exist app-robots.ts (
    move /y app-robots.ts app\robots.ts >nul
    echo ✓ Moved app-robots.ts to app/robots.ts
)

REM Move component files
if exist components-theme-provider.tsx (
    move /y components-theme-provider.tsx components\theme-provider.tsx >nul
    echo ✓ Moved components-theme-provider.tsx
)

if exist components-navbar.tsx (
    move /y components-navbar.tsx components\navbar\index.tsx >nul
    echo ✓ Moved components-navbar.tsx
)

if exist components-hero.tsx (
    move /y components-hero.tsx components\hero\index.tsx >nul
    echo ✓ Moved components-hero.tsx
)

if exist components-about.tsx (
    move /y components-about.tsx components\about\index.tsx >nul
    echo ✓ Moved components-about.tsx
)

if exist components-stats.tsx (
    move /y components-stats.tsx components\stats\index.tsx >nul
    echo ✓ Moved components-stats.tsx
)

if exist components-experience.tsx (
    move /y components-experience.tsx components\experience\index.tsx >nul
    echo ✓ Moved components-experience.tsx
)

if exist components-projects.tsx (
    move /y components-projects.tsx components\projects\index.tsx >nul
    echo ✓ Moved components-projects.tsx
)

if exist components-skills.tsx (
    move /y components-skills.tsx components\skills\index.tsx >nul
    echo ✓ Moved components-skills.tsx
)

if exist components-education.tsx (
    move /y components-education.tsx components\education\index.tsx >nul
    echo ✓ Moved components-education.tsx
)

if exist components-contact.tsx (
    move /y components-contact.tsx components\contact\index.tsx >nul
    echo ✓ Moved components-contact.tsx
)

if exist components-footer.tsx (
    move /y components-footer.tsx components\footer\index.tsx >nul
    echo ✓ Moved components-footer.tsx
)

REM Move data files
if exist data-projects.ts (
    move /y data-projects.ts data\projects.ts >nul
    echo ✓ Moved data-projects.ts
)

if exist data-experience.ts (
    move /y data-experience.ts data\experience.ts >nul
    echo ✓ Moved data-experience.ts
)

if exist data-skills.ts (
    move /y data-skills.ts data\skills.ts >nul
    echo ✓ Moved data-skills.ts
)

if exist data-education.ts (
    move /y data-education.ts data\education.ts >nul
    echo ✓ Moved data-education.ts
)

REM Move lib files
if exist utils.ts (
    move /y utils.ts lib\utils.ts >nul
    echo ✓ Moved utils.ts to lib/utils.ts
)

if exist types.ts (
    move /y types.ts lib\types.ts >nul
    echo ✓ Moved types.ts to lib/types.ts
)

echo.
echo ============================================================
echo STEP 3: Install Dependencies with npm
echo ============================================================
echo.

echo Installing npm packages (this may take 2-3 minutes)...
call npm install

if errorlevel 1 (
    echo.
    echo ERROR: npm install failed!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!

echo.
echo ============================================================
echo STEP 4: Start Development Server
echo ============================================================
echo.

echo Starting development server on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server.
echo.

REM Open browser after a short delay
timeout /t 3 /nobreak >nul
start http://localhost:3000

echo.
echo Opening browser in 3 seconds...
echo.

call npm run dev

pause
