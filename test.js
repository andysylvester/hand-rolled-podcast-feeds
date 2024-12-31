const fs = require ("fs");
const rss = require ("daverss");

var headElements = { 
	"title": "Ken Smith's Michiana Chronicles",
	"link": "https://www.wvpe.org/people/ken-smith",
	"description": "Ken Smith writes about algebra, bikes, con artists, donuts, exercise, failure to exercise, grandparents, harmonica, introverts, jury duty, kings of long ago, Lipitor, meteors, night fishing, Olympic athletes, peace and quiet, rattlesnakes, silly sex education, Twitter, unpaid debts to our fellow human beings, the velocity of an unladen swallow, World War II, extroverts, Young People of Today, and the South Bend Zoo.",
	"language": "en-us",
	"generator": "rss package",
	"docs": "http://cyber.law.harvard.edu/rss/rss.html",
	"maxFeedItems": 25,
	"flRssCloudEnabled": true,
	"rssCloudDomain": "rpc.rsscloud.io",
	"rssCloudPort": 5337,
	"rssCloudPath": "/pleaseNotify",
	"rssCloudRegisterProcedure": "",
	"rssCloudProtocol": "http-post",
	"itunes": {
		"category": ["Technology", "History", "Business", "Education", "Society & Culture", "Arts"],
		"explicit": "no", //other options ore "yes" and "clean"
		"author": "Ken Smith",
		"type": "episodic"
		},
	"image": {
		"url": "https://npr-brightspot.s3.amazonaws.com/legacy/sites/wvpe/files/201407/KS2014a.jpg",
		"title": "Ken Smith's Michiana Chronicles",
		"link": "https://www.wvpe.org/people/ken-smith"
		}

	};
var historyArray = [
	{
		"text": "Ken Smith likens the network of underground utilities to the hidden systems built to drive media consumption.",
		"title": "Michiana Chronicles: Paint lines on the pavement",
		"when": "Thu, 19 Dec 2024 17:26:38 GMT",
		"guid": {
			"flPermalink": false,
			"value": 1734644053047
			},
		"enclosure": {
			"url": "https://cpa.ds.npr.org/s680/audio/2024/12/michiana-chronicles-12202024.mp3",
			"type": "audio/mpeg",
			"length": 5158000
			},
		},
	{
		"text": "Ken Smith walks down to the County-City Building to vote.",
		"title": "Michiana Chronicles: Early voting",
		"when": "Thur, 24 Oct 2024 15:45:18 GMT",
		"guid": {
			"flPermalink": false,
			"value": 1729805066855
			},
		"enclosure": {
			"url": "https://cpa.ds.npr.org/s680/audio/2024/10/michiana-chronicles-10252024.mp3",
			"type": "audio/mpeg",
			"length": 5165000
			},
		}
	]

var xmltext = rss.buildRssFeed (headElements, historyArray); //generate the RSS feed from the data
fs.writeFile ("rss.xml", xmltext, function (err) {
	if (err) {
		console.log (err.message);
		}
	else {
		console.log ("rss.xml successfully created.");
		}
	});

