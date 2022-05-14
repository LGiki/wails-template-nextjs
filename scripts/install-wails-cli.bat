@echo off

echo Start running the script...
cd ../

<nul set /p =Current Go version: 
go version

echo Install the Wails command line tool...
go install github.com/wailsapp/wails/v2/cmd/wails@latest

echo Successful installation!

echo End running the script!
