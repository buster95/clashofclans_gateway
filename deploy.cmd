@echo off
echo Deploy on production branch...
git push origin main:prod
echo. ✔ Completed...
echo Merge remote production with local...
git pull origin prod:prod
echo. ✔ Completed...
echo Upstream for remote main and local...
git push origin main:main
echo. ✔ Completed...
