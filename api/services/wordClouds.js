const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const stopWords = require('../data/stopwords');
const { getQuery, queryType } = require('./queries');

async function getWordClouds(page = 1, month, max, dbname) {
    const monthRange = helper.getRange(month)
    const query = getQuery(queryType.wordCloud, dbname);
    const rows = await db.query(query, monthRange);
    const messages = helper.emptyOrRows(rows);
    const data = processWordClouds(messages, max);
    const meta = { page };

    return {
        data,
        meta
    }
}

function processWordClouds(messages, max = 500) {
    if (!messages) return [];
    const lines = messages.reduce(
        (acc, curr) => {
            let text = stopWords.removeEnglishStopWords(curr.message.toLowerCase());
            text = stopWords.removeBengaliStopWords(text);
            acc = `${acc} ${text}`;
            return acc

        }, '')
        .split(/[,\. ]+/g);
    const alldata = lines.reduce(function (arr, word) {
        if (word.length <= 2) return arr;
        var obj = arr.find(function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);
    const data = alldata.length > max ? alldata.sort((a, b) => b.weight - a.weight).slice(0, max) : alldata;
    return data;
}

module.exports = {
    getWordClouds
}