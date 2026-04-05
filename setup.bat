@echo off
REM Cat God World - Quick Setup Script - Nyaa!
echo.
echo ╔════════════════════════════════════════╗
echo ║  🐱 Cat God NPC World Setup - Nyaa! 🐱 ║
echo ╚════════════════════════════════════════╝
echo.

REM Check for Node.js
echo Checking for Node.js installation, nyaa~
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js not found, meow!
    echo.
    echo Please install Node.js 16+ from: https://nodejs.org/
    echo Then run this script again, nyaa!
    pause
    exit /b 1
)

REM Display Node version
echo ✓ Node.js found! Nyaa~
node --version
npm --version
echo.

REM Install dependencies
echo Installing divine cat dependencies, meow meow~
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Failed to install packages, nyaa... 
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════╗
echo ║  ✓ Setup Complete! Nyaa! 🐱            ║
echo ╚════════════════════════════════════════╝
echo.
echo To start the Cat God world, meow:
echo   npm run dev
echo.
echo The divine feline realm awaits, nyaa~ ✨
echo.
pause
