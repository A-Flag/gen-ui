echo off

echo delete old dist directory
rd /s/q jib\data\nginx\html\dist
echo delete finished

XCOPY ..\dist jib\data\nginx\html\dist /E/Y/I

set buildType="%1"
echo buildType:%buildType%
echo off

if %buildType%=="dev" (
set /p appversion=<app_version_dev.txt
echo appversion:%appversion%
mvn install jib:build ^
-Dicbcgd.appversion=%appversion% ^
-Dicbcgd.imgrepo=gdfh.harbor.io/kf1-apps ^
-Dicbcgd.jib.auth.password=Harbor2019 ^
-DsendCredentialsOverHttp=true 
)

if %buildType%=="dev_ori" (
set /p appversion=<app_version_dev.txt
echo appversion:%appversion%
mvn install jib:build ^
-Dicbcgd.appversion=%appversion% ^
-Dicbcgd.imgrepo=dockerhub.gdfh:5000/icbcgd ^
-Dicbcgd.jib.auth.password=Harbor2019 ^
-DsendCredentialsOverHttp=true
)

if %buildType%=="prod" (
set authPassword=%2
set /p appversion=<app_version_prod.txt
echo appversion:%appversion%
mvn install jib:build ^
-Dicbcgd.appversion=%appversion% ^
-Dicbcgd.imgrepo=gdfh.harbor.io/kf1-apps ^
-Dicbcgd.jib.auth.password=%authPassword% ^
-DsendCredentialsOverHttp=true
)

if %buildType%=="prod_ori" (
set /p appversion=<app_version_prod.txt
echo appversion:%appversion%
mvn install jib:build ^
-Dicbcgd.appversion=%appversion% ^
-Dicbcgd.imgrepo=dockerhub.gdfh:5000/icbcgd ^
-Djib.from.auth.username=kf1 ^
-DsendCredentialsOverHttp=true
)