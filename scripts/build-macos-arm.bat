@echo off

echo Start running the script...
cd ../

echo Start building the app for macos platform...
wails build --clean --platform darwin/arm64

echo End running the script!
