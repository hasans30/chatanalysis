#!/bin/bash

# mon="jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"
# mon="jan","feb","mar","apr","may","jun"
mon="jun","jul"
year="2021"
rawdata="rawdata=true"
echo "rawdata=true; use false if name map information not available"
dbname=$1
echo "running for $dbname"
function makeAPICallwithMonth {
    list=$(echo $1|tr  "," " ")
    url=$2
    extraparam=$3
for m in  $list;
do
  curl "$url?month=$m&dbname=$dbname&$extraparam"  -o $m.json;
done
}

dir_admin="data/admin-report/"
dir_allmon="data/all-monthly/"
dir_compact="data/compact-monthly/"
dir_dailytrend="data/daily-total-trend/"
dir_wordcloud="data/wordcloud/"

rm -r data/*
mkdir -p $dir_admin
mkdir -p $dir_allmon
mkdir -p $dir_dailytrend
mkdir -p $dir_wordcloud
mkdir -p $dir_compact

#admin report
pushd $dir_admin
makeAPICallwithMonth $mon "localhost:3030/adminreports" "all=false"
# all admin report
makeAPICallwithMonth "all" "localhost:3030/adminreports" "all=true"
popd

#monthly compact
#localhost:3030/data?month=may
pushd $dir_compact
makeAPICallwithMonth $mon "localhost:3030/data" $rawdata
# all admin report
popd




#monthly all
pushd $dir_allmon
makeAPICallwithMonth $mon "localhost:3030/allmonthly" $rawdata
popd

#wodcloud
pushd $dir_wordcloud
# echo "skipped wordcloud"
makeAPICallwithMonth $mon "localhost:3030/wordclouds" "max=300"
popd

#daily trends
pushd $dir_dailytrend
makeAPICallwithMonth "data" "localhost:3030/dailytrends"
popd


