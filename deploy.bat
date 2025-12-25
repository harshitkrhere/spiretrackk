@echo off
cd "c:\Users\Harshit\OneDrive\Documents\spiretrackk\spiretrackk-todo"
echo Committing changes...
git commit -m "Initial commit: SpireTrack Todo App with all features and beautiful UI"
echo.
echo Adding remote origin...
git remote add origin https://github.com/harshitkrhere/spiretrackk.git
echo.
echo Renaming branch to main...
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Ready for Vercel deployment!
pause
