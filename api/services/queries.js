const queryType = {
    alltimeAdminReport: "alltimeAdminReport",
    monthlyAdminReport: "monthlyAdminReport",
    dailyTrends: "dailyTrends",
    monthlyAllStatNoJoin: "monthlyAllStatNoJoin",
    monthlyAllStatJoin: "monthlyAllStatJoin",
    monthlyCombinedStat: "monthlyCombinedStat",
    wordCloud: "wordCloud"
}
function getQuery(qtype, dbname) {

    const queryMap = new Map([
        [queryType.alltimeAdminReport, `
            select actor,action,actedon,count(*) as '#times' 
               from ${dbname}.chat_action 
               group by actor,action,actedon 
               order by action desc`],
        [queryType.monthlyAdminReport, `
            select actor,action,actedon,count(*) as '#times' 
                from ${dbname}.chat_action 
                where timestamp>=? and timestamp <=?  
                group by actor,action,actedon 
                order by action `],
        [queryType.dailyTrends, `
            select count(*) as count, date(timestamp) as date 
                from ${dbname}.chat_text 
                where timestamp>='2021-01-01' 
                group by date `],
        [queryType.monthlyAllStatJoin, `
            select name_map.name_mine as name, count(*) as count 
                from ${dbname}.chat_text as chat_text,${dbname}.name_map as name_map
                where chat_text.sender=name_map.ID and timestamp>=? and timestamp<?  
                group by chat_text.sender 
                order by count(*) desc `],
        [queryType.monthlyAllStatNoJoin, `
            select sender as name, count(*) as count 
                from ${dbname}.chat_text  as chat_text
                where timestamp>=? and timestamp<?  
                group by chat_text.sender 
                order by count(*) desc; `],
        [queryType.monthlyCombinedStat, `
            select name_map.name_mine as name, count(*) as count 
                from ${dbname}.chat_dedupe_stat as chat_dedupe_stat,${dbname}.name_map as name_map
                where chat_dedupe_stat.id=name_map.ID and timestamp>= ? and timestamp<?  
                group by chat_dedupe_stat.id 
                order by count(*) desc `],
        [queryType.wordCloud, `
            select message 
                from ${dbname}.chat_text 
                where timestamp>=? and timestamp<=?  and message<>'<Media omitted>' `]
    ]
    );
    return queryMap.get(qtype);
}




module.exports = {
    getQuery,
    queryType
}
