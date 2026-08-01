@echo off
echo Cleaning up deprecated and unwanted folders and files...
cd /d "%~dp0"

if exist "app\api" (
    echo Deleting app\api...
    rmdir /s /q "app\api"
)

if exist "Foto" (
    echo Deleting Foto...
    rmdir /s /q "Foto"
)

if exist "index.html" (
    echo Deleting old index.html...
    del /f /q "index.html"
)

if exist "debug_git.bat" (
    echo Deleting debug_git.bat...
    del /f /q "debug_git.bat"
)

if exist "debug_git_log.txt" (
    echo Deleting debug_git_log.txt...
    del /f /q "debug_git_log.txt"
)

echo.
echo Cleanup complete! You can now safely run update_github.bat.
pause
