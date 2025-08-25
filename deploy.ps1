# PowerShell script to deploy to GitHub
Set-Location "C:\Users\iulii\Desktop\dashboard"

Write-Host "Initializing Git repository..." -ForegroundColor Green
& git init

Write-Host "Adding remote repository..." -ForegroundColor Green
& git remote add origin https://github.com/weblab420com/medical_website.git

Write-Host "Adding all files..." -ForegroundColor Green
& git add .

Write-Host "Creating commit..." -ForegroundColor Green
& git commit -m "Update: Expanded accordion view by default - all content blocks visible"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
& git push -u origin main

Write-Host "Done!" -ForegroundColor Green
Read-Host "Press Enter to continue"
