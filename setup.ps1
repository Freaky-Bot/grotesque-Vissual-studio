# Cat God World - PowerShell Setup Script - Nyaa!

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  🐱 Cat God NPC World Setup - Nyaa! 🐱 ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check for Node.js
Write-Host "Checking for Node.js installation, nyaa~" -ForegroundColor Yellow
$nodeCheck = Get-Command node -ErrorAction SilentlyContinue

if (-not $nodeCheck) {
    Write-Host "❌ Node.js not found, meow!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js 16+ from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Then run this script again, nyaa!" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Display versions
Write-Host "✓ Node.js found! Nyaa~" -ForegroundColor Green
Write-Host ""
node --version
npm --version
Write-Host ""

# Install dependencies
Write-Host "Installing divine cat dependencies, meow meow~" -ForegroundColor Yellow
Write-Host ""
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install packages, nyaa..." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  ✓ Setup Complete! Nyaa! 🐱            ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "To start the Cat God world, meow:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "The divine feline realm awaits, nyaa~ ✨" -ForegroundColor Magenta
Write-Host ""
Read-Host "Press Enter to exit"
