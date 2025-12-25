# Git deployment script
$projectPath = "c:\Users\Harshit\OneDrive\Documents\spiretrackk\spiretrackk-todo"
Set-Location $projectPath

Write-Host "📦 Preparing to push to GitHub..." -ForegroundColor Cyan

# Stage all files
git add .
Write-Host "✓ Files staged" -ForegroundColor Green

# Commit
git commit -m "Initial commit: SpireTrack Todo App with all features and beautiful UI"
Write-Host "✓ Changes committed" -ForegroundColor Green

# Add remote if not exists
$remoteExists = git remote | Select-String "origin"
if (-not $remoteExists) {
    git remote add origin https://github.com/harshitkrhere/spiretrackk.git
    Write-Host "✓ Remote origin added" -ForegroundColor Green
}

# Push to GitHub
git branch -M main
git push -u origin main
Write-Host "✓ Pushed to GitHub" -ForegroundColor Green

Write-Host "`n🎉 Ready for Vercel deployment!" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com/new" -ForegroundColor White
Write-Host "2. Import your GitHub repository" -ForegroundColor White
Write-Host "3. Vercel will auto-detect and deploy!" -ForegroundColor White
