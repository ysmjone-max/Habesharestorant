@echo off
echo Fixing Git completely and uploading your latest changes... please wait.
cd /d "%~dp0"
echo --- GIT LOG --- > github_log.txt

echo [Removing legacy incompatible folders] >> github_log.txt
if exist "app\api" rmdir /s /q "app\api"
if exist "Foto" rmdir /s /q "Foto"

echo [Configuring git] >> github_log.txt
git config --global --add safe.directory "C:/Users/pc/OneDrive/Documents/My Apps/Habesha Restorant" 2>> github_log.txt

echo [Removing existing .git folder to clear bad history] >> github_log.txt
rmdir /s /q .git

echo [Initializing fresh Git repository] >> github_log.txt
git init >> github_log.txt 2>&1
git remote add origin https://github.com/ysmjone-max/Habesharestorant.git >> github_log.txt 2>&1

echo [Adding files] >> github_log.txt
git add . >> github_log.txt 2>&1

echo [Committing files] >> github_log.txt
git commit -m "Fresh update with new menu images and drinks" >> github_log.txt 2>&1

echo [Force pushing to GitHub] >> github_log.txt
git push -f origin HEAD:main >> github_log.txt 2>&1

echo Done! Please check the GitHub page in a minute.
pause
