@echo off
title CHAY COM - Local WooCommerce Store
echo ======================================================
echo    DANG KHOI CHAY WEBSITE LOCAL CHO "CHAY COM"
echo ======================================================
echo Website dang chay tai: http://localhost:8080
echo Nhan Ctrl + C de dung server.
echo.
start http://localhost:8080
python -m http.server 8080
pause
