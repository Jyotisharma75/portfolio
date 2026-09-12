@echo off
REM Portfolio Setup Script for Windows
REM This script sets up the complete directory structure and installs dependencies

echo.
echo ============================================
echo Jyoti Sharma AI Engineer Portfolio Setup
echo ============================================
echo.

REM Create directory structure
echo Creating directory structure...
mkdir app
mkdir components\navbar
mkdir components\hero
mkdir components\about
mkdir components\experience
mkdir components\projects
mkdir components\skills
mkdir components\certifications
mkdir components\education
mkdir components\stats
mkdir components\contact
mkdir components\footer
mkdir components\ui
mkdir data
mkdir lib
mkdir public

echo.
echo Directory structure created successfully!
echo.

REM Install dependencies
echo Installing npm dependencies...
echo This may take a few minutes...
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed!
    echo Make sure you have Node.js installed: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ============================================
echo Setup completed successfully!
echo ============================================
echo.

REM Display next steps
echo Next steps:
echo.
echo 1. Move component files to correct directories:
echo    - components-navbar.tsx to components\navbar\index.tsx
echo    - components-hero.tsx to components\hero\index.tsx
echo    - (etc for all components)
echo.
echo 2. Move data files:
echo    - data-projects.ts to data\projects.ts
echo    - data-experience.ts to data\experience.ts
echo    - (etc for all data files)
echo.
echo 3. Move app files:
echo    - app-layout.tsx to app\layout.tsx
echo    - app-page.tsx to app\page.tsx
echo    - app-globals.css to app\globals.css
echo    - (etc)
echo.
echo 4. Start development server:
echo    npm run dev
echo.
echo 5. Open http://localhost:3000 in your browser
echo.

REM Ask to start dev server
echo.
echo Would you like to start the development server now?
set /p response="Enter 'y' for yes or 'n' for no: "

if /i "%response%"=="y" (
    echo.
    echo Starting development server...
    call npm run dev
) else (
    echo.
    echo Run 'npm run dev' when you're ready to start the server.
    echo.
    pause
)
