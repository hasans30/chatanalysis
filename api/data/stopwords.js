const englishStopWords=[
"zero",
"z",
"yourselves",
"yourself",
"yours",
"youre",
"your",
"youd",
"you've",
"you'll",
"you",
"yet",
"yes",
"y",
"x",
"www",
"wouldnt",
"would",
"world",
"words",
"wont",
"without",
"within",
"with",
"wish",
"willing",
"widely",
"why",
"whose",
"whos",
"whomever",
"whom",
"whole",
"whoever",
"whod",
"who'll",
"who",
"whither",
"whim",
"while",
"which",
"whether",
"wherever",
"whereupon",
"wheres",
"wherein",
"whereby",
"whereas",
"whereafter",
"where",
"whenever",
"whence",
"when",
"whats",
"whatever",
"what'll",
"what",
"werent",
"were",
"went",
"welcome",
"wed",
"we've",
"we'll",
"we",
"way",
"wasnt",
"was",
"wants",
"want",
"w",
"vs",
"vols",
"vol",
"viz",
"via",
"very",
"various",
"value",
"v",
"usually",
"using",
"uses",
"usefulness",
"usefully",
"useful",
"used",
"use",
"us",
"ups",
"upon",
"up",
"unto",
"until",
"unlikely",
"unlike",
"unless",
"unfortunately",
"under",
"un",
"u",
"two",
"twice",
"ts",
"trying",
"try",
"truly",
"tries",
"tried",
"towards",
"toward",
"took",
"too",
"together",
"to",
"tip",
"til",
"thus",
"thru",
"throughout",
"through",
"throug",
"thousand",
"thoughh",
"though",
"thou",
"those",
"this",
"think",
"theyre",
"theyd",
"they've",
"they'll",
"they",
"these",
"thereupon",
"thereto",
"theres",
"therere",
"thereof",
"therein",
"therefore",
"thered",
"thereby",
"thereafter",
"there've",
"there'll",
"there",
"thence",
"then",
"themselves",
"them",
"theirs",
"their",
"the",
"thats",
"that've",
"that'll",
"that",
"thanx",
"thanks",
"thank",
"than",
"th",
"tends",
"tell",
"taking",
"taken",
"take",
"sure	t",
"sup",
"suggest",
"sufficiently",
"such",
"successfully",
"substantially",
"sub",
"strongly",
"stop",
"still",
"specifying",
"specify",
"specified",
"specifically",
"sorry",
"soon",
"somewhere",
"somewhat",
"sometimes",
"sometime",
"something",
"somethan",
"someone",
"somehow",
"somebody",
"some",
"so",
"slightly",
"six",
"since",
"similarly",
"similar",
"significantly",
"significant",
"shows",
"showns",
"shown",
"showed",
"show",
"shouldn't",
"should",
"shes",
"shed",
"she'll",
"she",
"shall",
"several",
"seven",
"sent",
"selves",
"self",
"seen",
"seems",
"seeming",
"seemed",
"seem",
"seeing",
"see",
"section",
"sec",
"says",
"saying",
"say",
"saw",
"same",
"said",
"s",
"run",
"right",
"results",
"resulting",
"resulted",
"respectively",
"research",
"relatively",
"related",
"regards",
"regardless",
"regarding",
"refs",
"ref",
"recently",
"recent",
"really",
"readily",
"re",
"rd",
"rather",
"ran",
"r",
"qv",
"quite",
"quickly",
"que",
"q",
"put",
"provides",
"proud",
"promptly",
"probably",
"primarily",
"previously",
"present",
"predominantly",
"pp",
"potentially",
"possibly",
"possible",
"poorly",
"plus",
"please",
"placed",
"perhaps",
"per",
"past",
"particularly",
"particular",
"part",
"pages",
"page",
"p",
"own",
"owing",
"overall",
"over",
"outside",
"out",
"ourselves",
"ours",
"our",
"ought",
"otherwise",
"others",
"other",
"ord",
"or",
"onto",
"only",
"ones",
"one",
"once",
"on",
"omitted",
"old",
"okay",
"ok",
"oh",
"often",
"off",
"of",
"obviously",
"obtained",
"obtain",
"o",
"nowhere",
"now",
"nothing",
"noted",
"not",
"nos",
"normally",
"nor",
"noone",
"nonetheless",
"none",
"non",
"nobody",
"no",
"ninety",
"nine",
"next",
"new",
"nevertheless",
"never",
"neither",
"needs",
"need",
"necessary",
"necessarily",
"nearly",
"near",
"nd",
"nay",
"namely",
"name",
"na",
"n",
"myself",
"my",
"must",
"mug",
"much",
"mrs",
"mr",
"mostly",
"most",
"moreover",
"more",
"ml",
"miss",
"million",
"might",
"mg",
"merely",
"meanwhile",
"meantime",
"means",
"mean",
"me",
"maybe",
"may",
"many",
"makes",
"make",
"mainly",
"made",
"m",
"ltd",
"looks",
"looking",
"look",
"little",
"line",
"likely",
"liked",
"like",
"lets",
"let",
"lest",
"less",
"least",
"latterly",
"latter",
"later",
"lately",
"last",
"largely",
"l",
"knows",
"known",
"know",
"km",
"kg",
"kept",
"keep	keeps",
"k",
"just",
"j",
"itself",
"its",
"itd",
"it'll",
"it",
"isn't",
"is",
"inward",
"invention",
"into",
"instead",
"information",
"index",
"indeed",
"inc",
"in",
"important",
"importance",
"immediately",
"immediate",
"im",
"if",
"ie",
"id",
"i've",
"i'll",
"i",
"hundred",
"however",
"howbeit",
"how",
"home",
"hither",
"his",
"himself",
"him",
"hid",
"hi",
"hes",
"herself",
"hers",
"hereupon",
"heres",
"herein",
"hereby",
"hereafter",
"here",
"her",
"hence",
"hed",
"he",
"having",
"haven't",
"have",
"hasn't",
"has",
"hardly",
"happens",
"had",
"h",
"gotten",
"got",
"gone",
"goes",
"go",
"giving",
"gives",
"given",
"give",
"getting",
"gets",
"get",
"gave",
"g",
"furthermore",
"further",
"from",
"four",
"found",
"forth",
"formerly",
"former",
"for",
"follows",
"following",
"followed",
"fix",
"five",
"first",
"fifth",
"ff",
"few",
"far",
"f",
"except",
"ex",
"everywhere",
"everything",
"everyone",
"everybody",
"every",
"ever",
"even",
"etc",
"et-al",
"et",
"especially",
"enough",
"ending",
"end",
"elsewhere",
"else",
"either",
"eighty",
"eight",
"eg",
"effect",
"edu",
"ed",
"each",
"e",
"during",
"due",
"downwards",
"down",
"done",
"don't",
"doing",
"doesn't",
"does",
"do",
"different",
"didn't",
"did",
"date",
"d",
"couldnt",
"could",
"contains",
"containing",
"contain",
"comes",
"come",
"com",
"co",
"certainly",
"certain",
"causes",
"cause",
"cannot",
"can't",
"can",
"came",
"ca",
"c",
"by",
"but",
"briefly",
"brief",
"both",
"biol",
"beyond",
"between",
"besides",
"beside",
"below",
"believe",
"being",
"behind",
"begins",
"beginnings",
"beginning",
"begin",
"beforehand",
"before",
"been",
"becoming",
"becomes",
"become",
"because",
"became",
"be",
"back",
"b",
"awfully",
"away",
"available",
"auth",
"at",
"asking",
"ask",
"aside",
"as",
"around",
"arise",
"arent",
"aren",
"are",
"approximately",
"apparently",
"anywhere",
"anyways",
"anyway",
"anything",
"anyone",
"anymore",
"anyhow",
"anybody",
"any",
"another",
"announce",
"and",
"an",
"amongst",
"among",
"am",
"always",
"although",
"also",
"already",
"along",
"alone",
"almost",
"all",
"ah",
"against",
"again",
"afterwards",
"after",
"affects",
"affecting",
"affected",
"adj",
"added",
"actually",
"act",
"across",
"accordingly",
"according",
"accordance",
"abst",
"above",
"about",
"able",
"a",
"'ve",
"'ll",
// extra bengali transliteration 
"-",
 "ar",
 "er",
 "hobe",
 "ke",
 "ki",
 "kore",
 "ta",
 "te",
 "theke",
].join('|');

const bengaliStopWords=[
    "হয়েছেন",
"হয়েছে",
"হয়েছিল",
"হয়েই",
"হয়ে",
"হয়নি",
"হয়তো",
"হয়",
"হোক",
"হৈলে",
"হিসাবে",
"হলো",
"হলেও",
"হলেই",
"হলে",
"হল",
"হবেন",
"হবে",
"হন",
"হতেই",
"হতে",
"হত",
"হচ্ছে",
"হওয়ায়",
"হওয়ার",
"হওয়া",
"হইয়া",
"হইবে",
"হইতে",
"স্বয়ং",
"স্পষ্ট",
"সেটি",
"সেটাও",
"সেটাই",
"সেটা",
"সেখানে",
"সেখান",
"সেই",
"সে",
"সুতরাং",
"সহিত",
"সহ",
"সম্প্রতি",
"সমস্ত",
"সবার",
"সব",
"সঙ্গেও",
"সঙ্গে",
"শুধু",
"রয়েছে",
"রেখে",
"রাখা",
"রকম",
"যেমন",
"যেন",
"যেতে",
"যেখানে",
"যে",
"যিনি",
"যায়",
"যারা",
"যার",
"যাবে",
"যান",
"যাদের",
"যাতে",
"যাচ্ছে",
"যাকে",
"যাওয়ার",
"যাওয়া",
"যাঁরা",
"যাঁর",
"যা",
"যদিও",
"যদি",
"যথেষ্ট",
"যতটা",
"যত",
"যখন",
"মোটেই",
"মোট",
"মাধ্যমে",
"মাত্র",
"মধ্যেও",
"মধ্যেই",
"মধ্যে",
"মধ্যভাগে",
"মতোই",
"মতো",
"ভাবেই",
"ভাবে",
"ব্যাপারে",
"ব্যবহার",
"ব্যবহার",
"বেশ",
"বিশেষ",
"বিভিন্ন বিষয়টি",
"বিনা",
"বার",
"বার",
"বাদে",
"বা",
"বহু",
"বসে",
"বলেন",
"বলেছেন",
"বলে",
"বলা",
"বললেন",
"বলল",
"বলতে",
"বরং",
"বদলে",
"ফের",
"ফিরে",
"ফলে",
"প্রায়",
"প্রভৃতি",
"প্রতি",
"পেয়ে",
"পারেন",
"পারে",
"পারি",
"পাওয়া",
"পর্যন্ত",
"পরেও",
"পরেই",
"পরে",
"পর",
"পক্ষে",
"নয়",
"নেওয়ার",
"নেওয়া",
"নেই",
"নিয়ে",
"নিতে",
"নিজের",
"নিজেদের",
"নিজেই",
"নিজে",
"নানা",
"নাগাদ",
"নাকি",
"নাই",
"না",
"না",
"ধরে",
"ধরা",
"দ্বারা",
"দেয়",
"দেন",
"দেখে",
"দেখা",
"দেখতে",
"দেওয়ার",
"দেওয়া",
"দুটো",
"দুটি",
"দু",
"দিয়েছেন",
"দিয়েছে",
"দিয়ে",
"দিলেন",
"দিতে",
"দিকে",
"থেকেও",
"থেকেই",
"থেকে",
"থেকে",
"থাকেন",
"থাকে",
"থাকায়",
"থাকা",
"থাকবেন",
"থাকবে",
"তোমার",
"তো",
"তো",
"তেমন",
"তুলে",
"তুমি",
"তুই",
"তিনিও",
"তিনি",
"তিনি",
"তিনঐ",
"তাহার",
"তাহাতে",
"তাহা",
"তাহলে",
"তারৈ",
"তারা",
"তারপর",
"তার",
"তাদের",
"তাতে",
"তাকে",
"তাও",
"তাই",
"তাঁাহারা",
"তাঁরা",
"তাঁর",
"তাঁদের",
"তাঁকে",
"তা",
"তবে",
"তবু",
"তথা",
"তত",
"তখন",
"ঠিক",
"টি",
"টা",
"জে",
"জানিয়েছে",
"জানিয়ে",
"জানায়",
"জানানো",
"জানা",
"জানতে",
"জন্যওজে",
"জন্য",
"জন্য",
"জনের",
"জনকে",
"জন",
"ছিলেন",
"ছিলেন",
"ছিল",
"ছাড়াও",
"ছাড়া",
"চেয়ে",
"চায়",
"চান",
"চলে",
"গোটা",
"গেলে",
"গেল",
"গেছে",
"গিয়েছে",
"গিয়ে",
"খুব	গুলি",
"কয়েকটি",
"কয়েক",
"ক্ষেত্রে",
"কোনো",
"কোনও",
"কোন",
"কেন",
"কেউই",
"কেউ",
"কে",
"কী",
"কিন্তু",
"কিছুই",
"কিছু",
"কিংবা",
"কি",
"কি",
"কারণ",
"কারও",
"কাজে",
"কাছে",
"কাছ",
"কাউকে",
"করেন",
"করেছেন",
"করেছে",
"করেছিলেন",
"করেই",
"করে",
"করে",
"করিয়ে",
"করিয়া",
"করিতে",
"করি",
"করায়",
"করার",
"করার",
"করাই",
"করা",
"করলেন",
"করলেন",
"করলে",
"করবেন",
"করবে",
"করতে",
"করছেন",
"করছে",
"কবে",
"কত",
"কখনও",
"ওরা",
"ওর",
"ওদের",
"ওখানে",
"ওকে",
"ওই",
"ওঁরা",
"ওঁর",
"ওঁদের",
"ও",
"ঐ",
"এসে",
"এস",
"এল",
"এরা",
"এর",
"এমনকী",
"এমন",
"এবার",
"এবং",
"এদের",
"এতে",
"এতটাই",
"এত",
"এটি",
"এটাই",
"এটা",
"এখানেই",
"এখানে",
"এখনও",
"এখন",
"একে",
"একে",
"একবার",
"একটি",
"একই",
"এই",
"এঁরা",
"এঁদের",
"এ",
"উপরে",
"উপর",
"উনি",
"উচিত",
"ইহা",
"ইত্যাদি",
"আরও",
"আর",
"আর",
"আমি",
"আমি",
"আমার",
"আমার",
"আমাদের",
"আমাকে",
"আমরা",
"আবার",
"আপনি",
"আপনার",
"আদ্যভাগে",
"আজ",
"আছে",
"আগেই",
"আগে",
"আগামী",
"আই",
"অর্থাত",
"অবশ্য",
"অবধি",
"অন্য",
"অন্তত",
"অনেকেই",
"অনেকে",
"অনেক",
"অনুযায়ী",
"অথবা",
"অথচ",
"অতএব",
"theke",
"te",
"ta",
"kore",
"ki",
"ke",
"hobe",
"er",
"ar",
"-",
"ই"
].join('|');

const hindiStopwords=[
"के",
"का",
"एक",
"में",
"की",
"है",
"यह",
"और",
"से",
"हैं",
"को",
"पर",
"इस",
"होता",
"कि",
"जो",
"कर",
"मे",
"गया",
"करने",
"किया",
"लिये",
"अपने",
"ने",
"बनी",
"नहीं",
"तो",
"ही",
"या",
"एवं",
"दिया",
"हो",
"इसका",
"था",
"द्वारा",
"हुआ",
"तक",
"साथ",
"करना",
"वाले",
"बाद",
"लिए",
"आप",
"कुछ",
"सकते",
"किसी",
"ये",
"इसके",
"सबसे",
"इसमें",
"थे",
"दो",
"होने",
"वह",
"वे",
"करते",
"बहुत",
"कहा",
"वर्ग",
"कई",
"करें",
"होती",
"अपनी",
"उनके",
"थी",
"यदि",
"हुई",
"जा",
"ना",
"इसे",
"कहते",
"जब",
"होते",
"कोई",
"हुए",
"व",
"न",
"अभी",
"जैसे",
"सभी",
"करता",
"उनकी",
"तरह",
"उस",
"आदि",
"कुल",
"एस",
"रहा",
"इसकी",
"सकता",
"रहे",
"उनका",
"इसी",
"रखें",
"अपना",
"पे",
"उसके",
].join('|');

const stopWords = `${englishStopWords}|${bengaliStopWords}|${hindiStopwords}`;

const patternEn=`\\b(${englishStopWords})\\b`;
const regexEn=new RegExp(patternEn,'gi');
const regexBn=new RegExp("(\s|^)"+bengaliStopWords+"(\s|$)",'gui');

function removeEnglishStopWords(text=''){
    let tmpTxt=text;
    const punctuations = "।|,;-!.?".split('');
    punctuations.forEach(elm=>tmpTxt=tmpTxt.split(elm).join(''));
    return tmpTxt.replace(regexEn,'');
}

function removeBengaliStopWords(text=''){
    let tmpTxt= text;
    let otherChars="অ,আ,ই,ঈ,উ,ঊ,ঋ,ঌ,এ,ঐ,ও,ঔ,ক,খ,গ,ঘ,ঙ,চ,ছ,জ,ঝ,ঞ,ট,ঠ,ড,ঢ,ণ,ত,থ,দ,ধ,ন,প,ফ,ব,ভ,ম,য,র,ল,শ,ষ,স,হ";
    const extraChars="ঀ,ঁ,ং,ঃ,অ,আ,ই,ঈ,উ,ঊ,ঋ,ঌ,এ,ঐ,ও,ঔ,ক,খ,গ,ঘ,ঙ,চ,ছ,জ,ঝ,ঞ,ট,ঠ,ড,ঢ,ণ,ত,থ,দ,ধ,ন,প,ফ,ব,ভ,ম,য,র,ল,শ,ষ,স,হ,়,ঽ,া,ি,ী,ু,ূ,ৃ,ৄ,ে,ৈ,ো,ৌ,্,ৎ,ৗ,ড়,ঢ়,য়,ৠ,ৡ,ৢ,ৣ,০,১,২,৩,৪,৫,৬,৭,৮,৯,ৰ,ৱ,৲,৳,৴,৵,৶,৷,৸,৹,৺,৻,ৼ,৽,৾".split();
    extraChars.forEach(elm=>tmpTxt=tmpTxt.split(elm).join('')); // since we don't have replaceAll
    return tmpTxt.replace(regexBn,'');
}


const englishtestString = "!!!e baba the eta ki the but | -  !";
const englishoutput=removeEnglishStopWords(englishtestString);

console.log(englishoutput);

const bengaliString = "আমার টা একবার দেখ না আরও আর আর আমি আমি tui ঀ,ঁ,ং,ঃ,অ,আ,ই,ঈ,উ,ঊ,ঋ,ঌ,এ,ঐ,ও,ঔ,ক,খ,গ,ঘ,ঙ,চ,ছ,জ,ঝ,ঞ,ট,ঠ,ড,ঢ,ণ,ত,থ,দ,ধ,ন,প,ফ,ব,ভ,ম,য,র,ল,শ,ষ,স,হ,়,ঽ,া,ি,ী,ু,ূ,ৃ,ৄ,ে,ৈ,ো,ৌ,্,ৎ,ৗ,ড়,ঢ়,য়,ৠ,ৡ,ৢ,ৣ,০,১,২,৩,৪,৫,৬,৭,৮,৯,ৰ,ৱ,৲,৳,৴,৵,৶,৷,৸,৹,৺,৻,ৼ,৽,৾";
const bengalioutput=removeBengaliStopWords(bengaliString);
console.log(bengalioutput);

module.exports = {
    removeBengaliStopWords,
    removeEnglishStopWords,
    stopWords,
    englishStopWords,
    bengaliStopWords,
    hindiStopwords
};
