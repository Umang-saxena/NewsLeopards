import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
     articles = [
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Insects find their way onto Italian plates despite resistance",
          "description": "Pulverising crickets to make flour for food is seen by some as a threat to the Mediterranean diet.",
          "url": "https://www.bbc.co.uk/news/world-europe-66022857",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg",
          "publishedAt": "2023-07-08T04:42:53Z",
          "content": "Media caption, The BBC's Sofia Bettiza visits a cricket farm near Turin, Italy\r\nIn a small room near the Alps in northern Italy, containers filled with millions of crickets are stacked on top of each… [+6967 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "Brashna Kasi",
          "title": "America doesn't really care about cricket. Can Major League Cricket change that?",
          "description": "The new league makes its debut near Dallas on Thursday when the Texas Super Kings play the LA Knight Riders. The league's backers hope to cultivate a new generation of U.S. cricketers.",
          "url": "https://www.npr.org/2023/07/13/1187445629/major-league-cricket-debut-texas-history-sport",
          "urlToImage": "https://media.npr.org/assets/img/2023/07/13/ap23193166972710_wide-83ac6baf7108a8a2d6ef64e40e3084c753b83936-s1400-c100.jpg",
          "publishedAt": "2023-07-13T16:38:41Z",
          "content": "The Kolkata Knight Riders' Andre Russell plays a shot during Indian Premier League cricket match in Kolkata on April 29. Russell is a player on Major League Cricket's Los Angeles Knight Riders.\r\nBika… [+3576 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Nissanka century earns Sri Lanka Cricket World Cup berth - Reuters",
          "description": "Nissanka century earns Sri Lanka Cricket World Cup berth  Reuters",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L25pc3NhbmthLWNlbnR1cnktZWFybnMtc3JpLWxhbmthLWNyaWNrZXQtd29ybGQtY3VwLWJlcnRoLTIwMjMtMDctMDIv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-07-02T13:09:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Cricket dismissal row draws in Australian and UK Prime Ministers - Reuters.com",
          "description": "Cricket dismissal row draws in Australian and UK Prime Ministers  Reuters.com",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2NyaWNrZXQtZGlzbWlzc2FsLXJvdy1kcmF3cy1hdXN0cmFsaWFuLXVrLXByaW1lLW1pbmlzdGVycy0yMDIzLTA3LTA0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-07-04T08:43:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Mihir Bose",
          "title": "If you want to make cricket truly diverse, don't fixate on bat and ball – focus on what happens in the tea break | Mihir Bose",
          "description": "There is a social element to the game that could be an opportunity, but right now heightens the sense of othering and exclusionWhat do they know of cricket who only cricket know, asked the great CLR James. He talked of cricket as a prism through which we migh…",
          "url": "https://www.theguardian.com/commentisfree/2023/jun/30/cricket-bat-ball-game-exclusion",
          "urlToImage": "https://i.guim.co.uk/img/media/7719a4297270a63f75a8abce3b4cca2a5b5686d4/309_520_3691_2214/master/3691.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=4b94f2aa1a93905fb2087944648c2b67",
          "publishedAt": "2023-06-30T05:00:34Z",
          "content": "What do they know of cricket who only cricket know, asked the great CLR James. He talked of cricket as a prism through which we might view society, and that remains as true now as in 1963, when Beyon… [+6213 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton at Lord's",
          "title": "MCC suspends three members after clash with Australian cricket team",
          "description": "<ul><li>Tourists allege players were ‘verbally abused’ by MCC members</li><li>Incident took place following Bairstow’s controversial dismissal</li></ul>The Marylebone Cricket Club has suspended three members after an altercation with the Australian cricket te…",
          "url": "https://www.theguardian.com/sport/2023/jul/02/mcc-unreservedly-apologised-to-australia-after-long-room-incident-england-ashes",
          "urlToImage": "https://i.guim.co.uk/img/media/618c78dd8d85bcc38aff93ab89704213eaf75ace/16_950_1175_704/master/1175.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e94004433d6f743b3faba7891845a411",
          "publishedAt": "2023-07-02T20:43:37Z",
          "content": "The Marylebone Cricket Club has suspended three members after an altercation with the Australian cricket team at Lords on the last day of the second Ashes Test.\r\nThe club had earlier unreservedly apo… [+8253 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Sean Ingle Chief sports reporter",
          "title": "English cricket is ‘racist, sexist and elitist’, says landmark report",
          "description": "<ul><li>Independent Commission finds problems ‘widespread’</li><li>ECB chair recognises need for significant reform</li></ul>English cricket suffers from “widespread and deep-rooted” racism, sexism, elitism and class-based discrimination at all levels of the …",
          "url": "https://www.theguardian.com/sport/2023/jun/27/english-cricket-is-racist-sexist-and-elitist-says-landmark-report",
          "urlToImage": "https://i.guim.co.uk/img/media/aff417f589cbfc3ff2dabe82dface0a3ab3b41f4/0_41_3138_1885/master/3138.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c247fb3534c52ab5bdca9cff1699f12d",
          "publishedAt": "2023-06-26T23:01:34Z",
          "content": "English cricket suffers from widespread and deep-rooted racism, sexism, elitism and class-based discrimination at all levels of the game and urgently needs reform, a landmark report has found.\r\nThe 3… [+12283 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Headingley",
          "title": "Surrey v Lancashire, Hampshire v Middlesex: county cricket – live",
          "description": "<ul><li>County Championship updates from day two’s play</li><li>And you can mail Tanya, tweet her or drop a post BTL</li></ul>DIVISION ONEChelmsford: Essex 391-7 v Warwickshire Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jun/26/surrey-v-lancashire-hampshire-v-middlesex-county-cricket-live",
          "urlToImage": "https://i.guim.co.uk/img/media/e6c7643141affd8d9c4b59788f15fbb33e61fb0d/0_389_5840_3504/master/5840.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=6b4f253e9f1cb75074c4cf4b8c31a22e",
          "publishedAt": "2023-06-26T09:39:44Z",
          "content": "Scores on the doors\r\nDIVISION ONE\r\nChelmsford: Essex 391-7 v Warwickshire\r\nRose Bowl: Hampshire 284-4 v Middlesex\r\nCounty Ground: Northants 237 v Kent 110-1\r\nTaunton: Somerset 163 v Nottinghamshire 1… [+2714 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Hosted by Savannah Ayoade-Greaves, written by Joe Gibson and Marina Hyde, narrated by Evelyn Miller and Geoffrey Newland, produced byRachel Porter, the executive producer is Ellie Bury.",
          "title": "Weekend podcast: an affair that changed my life – an exclusive extract of Joe Gibson’s memoir, and Marina Hyde on Rishi Sunak’s ‘spirit of cricket’",
          "description": "We’re doing something a bit different this week and bringing you an extended extract from Joe Gibson’s memoir, Seventeen, about the troubling affair with a teacher that changed his life (10m53s); and after Rishi Sunak is quick to decry the Australian cricket …",
          "url": "https://www.theguardian.com/lifeandstyle/audio/2023/jul/08/weekend-podcast-an-affair-that-changed-my-life-an-exclusive-extract-of-joe-gibsons-memoir-and-marina-hyde-on-rishi-sunaks-spirit-of-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/c987903c1685775b23a86d30014cf496283634ba/0_1_3979_2388/master/3979.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fefca1825f852d05e8c2b893c3369fb6",
          "publishedAt": "2023-07-08T04:00:05Z",
          "content": "Were doing something a bit different this week and bringing you an extended extract from Joe Gibsons memoir, Seventeen, about the troubling affair with a teacher that changed his life (10m53s); and a… [+185 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Andy Bull at Lord's",
          "title": "Lord’s and the pitches beyond show us English cricket contains multitudes | Andy Bull",
          "description": "The serious and significant failings of the sport and its complicated history mean that all sides are needed to fix it“Jeremy! Jeremy!” Handkerchiefs folded in top pockets, tan jackets and slacks, panama hats with egg-and-bacon straps. “Good to see you! I tho…",
          "url": "https://www.theguardian.com/sport/blog/2023/jun/28/english-cricket-multitudes-lords-icec-report",
          "urlToImage": "https://i.guim.co.uk/img/media/f3afef791ca504f4af4de742ed9d6944baa8ca65/0_0_6277_3769/master/6277.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4639a7277df11d9e15a2001367379e3",
          "publishedAt": "2023-06-28T19:00:33Z",
          "content": "Jeremy! Jeremy! Handkerchiefs folded in top pockets, tan jackets and slacks, panama hats with egg-and-bacon straps. Good to see you! I thought you might be here. Are you sitting up top? Chateau DEscl… [+5189 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "PA Media",
          "title": "Azeem Rafiq hails bravery behind report on discrimination in English cricket",
          "description": "<ul><li>Former Yorkshire player hopes damning report brings closure</li><li>Report’s chair Cindy Butts says: ‘The culture in cricket is rotten’</li></ul>Azeem Rafiq has hailed the courage of those who had contributed to a new report laying bare the problems o…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/azeem-rafiq-hails-bravery-report-discrimination-english-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/dc4705ef601232ecb6951843352e25ea2df84204/256_276_5065_3039/master/5065.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3f093b556dc213f3e9f8a557b492db63",
          "publishedAt": "2023-06-27T11:26:07Z",
          "content": "Azeem Rafiq has hailed the courage of those who had contributed to a new report laying bare the problems of discrimination facing cricket.\r\nThe long-awaited Independent Commission for Equity in Crick… [+12161 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Raf Nicholson",
          "title": "Heather Knight calls on cricket to be more equitable, diverse and inclusive",
          "description": "<ul><li>England captain reacts to this week’s independent report</li><li>‘We feel strongly that the game needs to keep moving forwards’</li></ul>Heather Knight said the findings of the Independent Commission for Equity in Cricket are “unsurprising” and hopes …",
          "url": "https://www.theguardian.com/sport/2023/jun/30/heather-knight-calls-on-cricket-to-be-more-equitable-diverse-and-inclusive",
          "urlToImage": "https://i.guim.co.uk/img/media/d1d0f5cd76aa37e0083daee5e8e83525dc05d2a9/0_376_2996_1797/master/2996.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ada6126093b6ddf7de5bf926d4ec27af",
          "publishedAt": "2023-06-30T14:30:24Z",
          "content": "Heather Knight said the findings of the Independent Commission for Equity in Cricket are unsurprising and hopes the report will enable cricket to lead the way in terms of being more equitable, divers… [+8325 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Sean Ingle",
          "title": "ECB calls for Yorkshire to be hit with record fine over Rafiq scandal",
          "description": "<ul><li>ECB recommends points deductions in all competitions</li><li>Cricket Discipline Commission will announce decision in July</li></ul>Yorkshire should face a record fine of £500,000 and a points deduction of between 48 and 72 points in this season’s Coun…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/ecb-yorkshire-record-fine-cricket-discipline-commission",
          "urlToImage": "https://i.guim.co.uk/img/media/6f570f9f7d51032c9f6c32a74c8683577ab65f5c/0_367_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c83ffbe29168aa1b71d84db3a86aa698",
          "publishedAt": "2023-06-27T15:16:42Z",
          "content": "Yorkshire should face a record fine of £500,000 and a points deduction of between 48 and 72 points in this seasons County Championship over its handling of the Azeem Rafiq scandal, the England and Wa… [+7161 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Aaron Timms",
          "title": "Can cricket crack America? New T20 league aims to take US by storm",
          "description": "The dream is in place, the field has been built. Major League Cricket finally launches on Thursday outside Dallas. But will the people come? For decades, cricket’s powers have dreamed of making it big in America. Starting on Thursday the grandest, richest att…",
          "url": "https://www.theguardian.com/sport/2023/jul/12/major-league-cricket-preview-united-states",
          "urlToImage": "https://i.guim.co.uk/img/media/1c49e1db870eceeb6621162c2fdf5b4b562e62d2/0_249_3590_2154/master/3590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=819c43263648f5a0a3d43b175845b5c4",
          "publishedAt": "2023-07-12T07:00:05Z",
          "content": "For decades, crickets powers have dreamed of making it big in America. Starting on Thursday the grandest, richest attempt yet to get Americans hooked on cricket will begin in a converted baseball sta… [+13122 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian Staff",
          "title": "A level playing field for cricket is a long way off | Letters",
          "description": "Unless inner-city state schools are given funding, cricket will stay out of reach for many children, says Laura Matthews. Plus letters from Mike Stein, Hugh Southey, Michael Pyke, John Saxbee, Peter Hutchinson and Mike SheaffMark Ramprakash made some good poi…",
          "url": "https://www.theguardian.com/sport/2023/jun/30/a-level-playing-field-for-cricket-is-a-long-way-off",
          "urlToImage": "https://i.guim.co.uk/img/media/ff65d3492d371312eb494d14dbbfcb30420bbb3d/0_0_5353_3214/master/5353.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2a588ab3d7c8c7e5d7da716db46403ad",
          "publishedAt": "2023-06-30T16:50:57Z",
          "content": "Mark Ramprakash made some good points about cricket reflecting the unequal society it operates within, but I think he also managed to confirm that it is almost impossible for cricket to be egalitaria… [+5636 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Editorial",
          "title": "The Guardian view on cricket: infused with racial, sex- and class-based bigotry | Editorial",
          "description": "To understand the nature and extent of inequity requires going beyond the game to history itselfHolding Up a Mirror to Cricket, the report unveiled on Tuesday by the Independent Commission for Equity in Cricket (ICEC), will make all but the most blinkered cri…",
          "url": "https://www.theguardian.com/commentisfree/2023/jun/27/the-guardian-view-on-cricket-infused-with-racial-sex--and-class-based-bigotry",
          "urlToImage": "https://i.guim.co.uk/img/media/91090c138664b56f5be09cc94fdf7962b17b11ae/0_229_1894_1136/master/1894.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=aa50d357c396faef07db6554ac3ab94e",
          "publishedAt": "2023-06-27T18:11:11Z",
          "content": "Holding Up a Mirror to Cricket, the report unveiled on Tuesday by the Independent Commission for Equity in Cricket (ICEC), will make all but the most blinkered cricket aficionados reconsider the spor… [+3630 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Ella Creamer",
          "title": "British Library acquires ultra-rare cricket book thanks to anonymous donor",
          "description": "William Epps’s 1799 book of scorecards from ‘the grand matches’, formerly owned by commentator John Arlott, has been saved for the nationThe British Library has acquired a “virtually unobtainable” cricket book after a mysterious donor funded the sale of the c…",
          "url": "https://www.theguardian.com/books/2023/jul/13/british-library-acquires-ultra-rare-cricket-book-thanks-to-anonymous-donor",
          "urlToImage": "https://i.guim.co.uk/img/media/162651a6c6f28d559438309a74d3925fce42a7b2/0_935_3712_2227/master/3712.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=05f1b1dbd0615f8131d1d2dfd1f2d75c",
          "publishedAt": "2023-07-13T14:07:12Z",
          "content": "The British Library has acquired a virtually unobtainable cricket book after a mysterious donor funded the sale of the copy that once belonged to famed cricket commentator John Arlott.\r\nThe anonymous… [+7869 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian Staff",
          "title": "Cricket test: the right questions to ask about Jonny Bairstow’s stumping | Letters",
          "description": "Readers reflect on the rights and wrongs of the English player’s dismissal by AustraliaThe debate on Jonny Bairstow’s dismissal rages on (In the best cricket tradition, Bairstow v Carey turned on a man saying ‘over’, 2 July). The viewpoint on this is simple, …",
          "url": "https://www.theguardian.com/sport/2023/jul/05/cricket-test-the-right-questions-to-ask-about-jonny-bairstow-stumping",
          "urlToImage": "https://i.guim.co.uk/img/media/8c69b3788cad10808e4cd00667f7e72ab514de12/0_116_4052_2431/master/4052.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e02d2455f8b87b96bca774f5e09bf44e",
          "publishedAt": "2023-07-05T17:38:15Z",
          "content": "The debate on Jonny Bairstows dismissal rages on (In the best cricket tradition, Bairstow v Carey turned on a man saying over, 2 July). The viewpoint on this is simple, provided one asks the right qu… [+3646 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "The Spin | ‘Cricket is our soul’: park teams unite people through love of the game",
          "description": "Far from the Long Room and the Western Terrace, grass roots clubs are bringing communities together across the countryIt is the day after midsummer, sweet and balmy at nine o’clock, the sun still up, and Alexandra Park, Manchester, is fizzing with life. A gro…",
          "url": "https://www.theguardian.com/sport/2023/jul/13/cricket-park-teams-communities-the-spin",
          "urlToImage": "https://i.guim.co.uk/img/media/198e2cf0c182da244487f11f1194a0ecd83fcf14/107_15_797_478/master/797.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b63911dd441088132379990764a26cce",
          "publishedAt": "2023-07-13T10:42:36Z",
          "content": "It is the day after midsummer, sweet and balmy at nine oclock, the sun still up, and Alexandra Park, Manchester, is fizzing with life. A group of energetic twentysomethings slam a volleyball over the… [+4371 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Trent Bridge",
          "title": "Australia in good hands as Annabel Sutherland picks up Perry’s baton | Geoff Lemon",
          "description": "Annabel Sutherland had advantages early in life but her first Test century shows she has never stopped learningIn terms of sporting provenance stories, having a national cricket board CEO for a father doesn’t hit the inspirational high notes. James Sutherland…",
          "url": "https://www.theguardian.com/sport/2023/jun/23/australian-women-sutherland-picks-up-perrys-baton",
          "urlToImage": "https://i.guim.co.uk/img/media/5bc20468a3c98edf500352e69ad5b9fed8c0f9b6/0_95_2348_1409/master/2348.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c3a8b5f55df7e6a9545c380faea00f35",
          "publishedAt": "2023-06-23T18:04:54Z",
          "content": "In terms of sporting provenance stories, having a national cricket board CEO for a father doesnt hit the inspirational high notes. James Sutherland spent two decades at the top for Cricket Australia … [+9794 chars]"
        },
        {
          "source": {
            "id": "business-insider",
            "name": "Business Insider"
          },
          "author": "Brendan Griffiths",
          "title": "Free Ashes live stream 4th Test: How to watch England vs. Australia online from anywhere",
          "description": "Fancy a free Ashes live stream? The England vs. Australia cricket tournament is super simple to watch online and is gripping at 2-1 to the tourists.",
          "url": "https://www.businessinsider.com/guides/streaming/england-vs-australia-ashes-live-stream-how-to-watch-4th-test-2023",
          "urlToImage": "https://i.insider.com/64b66d5076558a00189d1337?width=1200&format=jpeg",
          "publishedAt": "2023-07-19T07:30:06Z",
          "content": "When you buy through our links, Insider may earn an affiliate commission. Learn more.\r\nWe're very excited to watch England vs. Australia online today. That's because there's plenty to play for again,… [+4513 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Daniel Gallan",
          "title": "England v Australia: Women’s Ashes, first T20 match – live",
          "description": "<ul><li>Updates from Edgbaston, 6.35pm BST/3.35am AEST start</li><li>Sign up to The Spin newsletter | Email Daniel or tweet him</li></ul>And they said cricket in England has a problem with equality?Yup…. Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jul/01/england-australia-womens-ashes-cricket-first-t20-match-live",
          "urlToImage": "https://i.guim.co.uk/img/media/086fd7e3eb315fdd3601aafc056a9d0956ffbace/0_158_2133_1280/master/2133.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=b5fd26385993261be9e6a3eea354c212",
          "publishedAt": "2023-07-01T16:57:40Z",
          "content": "England need to win this one if they have any hope of securing the Ashes. Its handy batting first here where the average score is 151. Anything north of that should be defendable.&lt;/p&gt;\",\"element… [+6604 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Ali Martin at Lord's",
          "title": "England try to heal the wounds after bruising time for cricket | Ali Martin",
          "description": "With the game under scrutiny from the ICEC report Ben Stokes and his team have a 1-0 Ashes deficit to rectifyWhether by accident or design, the long-awaited report by the Independent Commission for Equity in Cricket has landed in the very same week England ar…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/england-try-to-heal-the-wounds-after-bruising-time-for-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/1a1e0b5fbcff7a723aace1045ff8b2781328438e/0_226_7591_4555/master/7591.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a5a8435c33a80933eb226dceedb3d3e",
          "publishedAt": "2023-06-27T20:00:16Z",
          "content": "Whether by accident or design, the long-awaited report by the Independent Commission for Equity in Cricket has landed in the very same week England are taking on Australia in a must-win Ashes Test ma… [+10242 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Barney Ronay",
          "title": "Latest damning cricket report shows same old pathways remain blocked | Barney Ronay",
          "description": "The county pathways reflect wider issues, with racial inequality and state school pupils disadvantaged – this can be remedied“Complacency on racial equality is not acceptable. We must open our doors to everyone.” The contrite, heartfelt, revolutionary words t…",
          "url": "https://www.theguardian.com/sport/2023/jul/01/latest-damning-cricket-report-shows-same-old-pathways-remain-blocked",
          "urlToImage": "https://i.guim.co.uk/img/media/7e7936ac742ff396ca5c4c0b85d00e40ed0c1d5b/0_0_2000_1200/master/2000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=ccaeaa6b0e45852196f9f9d0493aa038",
          "publishedAt": "2023-07-01T07:00:08Z",
          "content": "Complacency on racial equality is not acceptable. We must open our doors to everyone. The contrite, heartfelt, revolutionary words there of the England and Wales Cricket Board in the wake of a devast… [+13098 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Gary Naylor",
          "title": "County cricket: T20 Blast reaches last eight as Essex rise in Championship",
          "description": "The County Championship trialled a Kookaburra ball this week, which produced plenty of runs and surprisesBy Gary Naylor for the 99.94 Cricket BlogThe big climbers in the Championship last week, pop pickers, are Essex who rose all the way up to second with the…",
          "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/jul/03/county-cricket-t20-blast-last-eight-essex-county-championship-ball-kookaburra",
          "urlToImage": "https://i.guim.co.uk/img/media/f6baa0ffde7b62c9443891ccac3c1d42ec2a9747/0_112_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59eab849e3ca781c674fe061f5680047",
          "publishedAt": "2023-07-03T11:34:21Z",
          "content": "Ball One: Essex hold Surrey close\r\nThe big climbers in the Championship last week, pop pickers, are Essex who rose all the way up to second with their smash, The Teddy Bears Points Nicked. Enough of … [+6734 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Reuters",
          "title": "Cricket World Cup fixtures revealed as India v Pakistan date confirmed",
          "description": "<ul><li>Holders England to open tournament against New Zealand</li><li>Dispute between neighbours had delayed fixtures release</li></ul>The men’s Cricket World Cup will begin on 5 October, with England facing New Zealand in Ahmedabad and the same venue hostin…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/cricket-world-cup-fixtures-india-v-pakistan-date",
          "urlToImage": "https://i.guim.co.uk/img/media/4134f9d7a1e83cde20809b707ef059f2ca2a6b20/122_413_5242_3146/master/5242.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=df8bafb55f64d648ae6b89025cfa00b7",
          "publishedAt": "2023-06-27T08:14:33Z",
          "content": "The mens Cricket World Cup will begin on 5 October, with England facing New Zealand in Ahmedabad and the same venue hosting the final on 19 November, organisers have said, with the schedule for the s… [+9302 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Mark Ramprakash",
          "title": "Stokes and McCullum have delivered entertainment but winning cricket is key | Mark Ramprakash",
          "description": "England have invigorated Test cricket after being let off the leash but will the public stay with them if they lose at Lord’s?It’s time for supporters and management to decide what they want with England going into the second game of the Ashes 1-0 down. If en…",
          "url": "https://www.theguardian.com/sport/2023/jun/26/ben-stokes-brendon-mccullum-australia-england-the-ashes-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/9c667d10eaeae0b4dae2672aa581939b66bc61ae/0_299_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=47838ed6c954011c7ccd793e3b9198ca",
          "publishedAt": "2023-06-26T17:45:35Z",
          "content": "Its time for supporters and management to decide what they want with England going into the second game of the Ashes 1-0 down. If entertainment is the sole criteria, that box has been ticked. The fir… [+10647 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "County cricket: Surrey v Nottinghamshire, Somerset v Hampshire, and more – live",
          "description": "<ul><li>Rolling updates from around Divisions One and Two</li><li>Email Tanya any thoughts, tweet @tjaldred or post BTL</li></ul>Haseeb Hameed’s first opportunity to captain in Championship cricket proved tricky, Nottinghamshire hampered as both Brett Hutton …",
          "url": "https://www.theguardian.com/sport/live/2023/jul/11/county-cricket-surrey-v-nottinghamshire-somerset-v-hampshire-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/31ade5d556ccfcdf117d696d0a620390509a64d5/84_0_3090_1854/master/3090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=81e49111888a37279e6a7ccc6ed2f6dd",
          "publishedAt": "2023-07-11T09:05:11Z",
          "content": "Monday's round-up\r\nHaseeb Hameeds first opportunity to captain in Championship cricket proved tricky, Nottinghamshire hampered as both Brett Hutton and Jake Ball left the field at the Oval clutching … [+2074 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "James Wallace",
          "title": "Jack Russell: ‘Cricket and art, you can never crack either – you’re always learning’",
          "description": "The former England wicketkeeper on Ashes mistakes, the battle between Bairstow and Foakes, the return of bucket hats and his art exhibition opening in London next week“Missed chances weigh on the mind and they dent your confidence no matter who you are.” Jack…",
          "url": "https://www.theguardian.com/sport/2023/jun/23/jack-russell-ashes-2023-mistakes-magnified-jonny-bairstow-ben-foakes-cricket-interview",
          "urlToImage": "https://i.guim.co.uk/img/media/18e2f5a87e6bc647142097e2f00498a5a0b4238a/0_124_4000_2401/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b3698c1ced74ac4f7d7a176125b8aaa4",
          "publishedAt": "2023-06-23T12:00:38Z",
          "content": "Missed chances weigh on the mind and they dent your confidence no matter who you are. Jack Russell knows how Jonny Bairstow must be feeling. Well, sort of. I missed Brian Lara a couple of times in th… [+11708 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Cheltenham College",
          "title": "County cricket: Gloucestershire v Glamorgan, Essex v Kent, and more – live",
          "description": "<ul><li>Live updates from all the County Championship matches</li><li>Drop Tanya an email | Tweet @tjaldred | Or post BTL</li></ul>Time wheeled to sepia at Chelmsford, with Alastair Cook unbeaten on 64 at stumps on a good day for Essex. Kent, who had chosen t…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/20/county-cricket-gloucestershire-v-glamorgan-essex-v-kent-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/4e41e7e406637e7c2477ef5b2d2ff66867beb7c8/0_582_2426_1456/master/2426.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=41a259a7c68bd3de64a4178aa061feee",
          "publishedAt": "2023-07-20T09:11:55Z",
          "content": "Wednesday's round-up\r\nTime wheeled to sepia at Chelmsford, with Alastair Cook unbeaten on 64 at stumps on a good day for Essex. Kent, who had chosen to bat on a greenish pitch and with frowning skies… [+3050 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Gary Naylor",
          "title": "County cricket: Somerset win T20 Blast as Championship race opens up",
          "description": "Lewis Gregory’s bowlers and fielders were the key as Somerset won their first T20 title since 2005 By Gary Naylor for the 99.94 Cricket BlogSurrey’s unexpected stumble (a draw last week after their defeat to Lancashire in the previous round) has opened up a r…",
          "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/jul/17/cricket-somerset-win-t20-blast-county-championship-race-lewis-gregory",
          "urlToImage": "https://i.guim.co.uk/img/media/965e767c1f6a232030f216110ba9d9bb60d3d937/23_0_3478_2088/master/3478.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d8ba6b8e10126cc1f82146d5b1364026",
          "publishedAt": "2023-07-17T10:47:41Z",
          "content": "Ball one: Dan Lawrence builds towering target in Blackpool\r\nSurreys unexpected stumble (a draw last week after their defeat to Lancashire in the previous round) has opened up a real race for the penn… [+9509 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Cheltenham College",
          "title": "County cricket: Essex v Kent, Middlesex v Surrey, and more – live",
          "description": "<ul><li>Day three action around the grounds begins at 11am BST</li><li>Share your thoughts with Tanya via mail, Twitter or BTL</li></ul>A cloud like a coal-stained king-sized duvet is currently skirting the ground.If Durham couldn’t quite keep pace with Engla…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/21/county-cricket-essex-v-kent-middlesex-v-surrey-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/dc1eb4118641f571533a025cf1505ee9c3403937/0_221_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=3b6a938ea640d6f0d61aba804db41aee",
          "publishedAt": "2023-07-21T09:33:01Z",
          "content": "&lt;strong&gt;I was pretty underwhelming for the first half-a-dozen games of the season,&lt;/strong&gt; I kept getting 40 and out so the last few games have been pleasing on an individual standpoint … [+27726 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Barney Ronay at Lord’s",
          "title": "In the best cricket tradition, Bairstow v Carey turned on a man saying ‘over’ | Barney Ronay",
          "description": "The issue in this toxic Lord’s Test lies with the ever-nebulous notion of the spirit of the gameFrankly, it’s just not Bazball, old boy. On a febrile, toxic, at times mildly hallucinogenic day at Lord’s the cricketers of England and Australia produced one of …",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/02/cricket-bairstow-carey-ashes-lords",
          "urlToImage": "https://i.guim.co.uk/img/media/23590f8588b3f19ee125fcd86c4e384112685268/0_354_3602_2161/master/3602.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e3e5f447ba45d8d15a4c71510e4e182e",
          "publishedAt": "2023-07-02T21:19:57Z",
          "content": "Frankly, its just not Bazball, old boy. On a febrile, toxic, at times mildly hallucinogenic day at Lords the cricketers of England and Australia produced one of the most obscurely rancorous days of h… [+11685 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Headingley",
          "title": "Surrey v Lancashire, Yorkshire v Gloucs and more: county cricket – live",
          "description": "<ul><li>Updates from day four of the latest Championship round</li><li>Get in touch: contact Tanya by mail, on Twitter or BTL</li></ul>Get thee down to the County Ground:England Women’s T20 Ashes squad: Heather Knight (capt), Lauren Bell, Maia Bouchier, Alice…",
          "url": "https://www.theguardian.com/sport/live/2023/jun/28/county-cricket-live",
          "urlToImage": "https://i.guim.co.uk/img/media/d75f1a0495156571443de718d36ce6d247d6626d/0_311_1902_1141/master/1902.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d950bca7c589bb0600e9a00dde4503c7",
          "publishedAt": "2023-06-28T09:42:01Z",
          "content": "Get thee down to the County Ground:\r\n&lt;p lang=\\\"en\\\" dir=\\\"ltr\\\"&gt;Day 4. &lt;br&gt;&lt;br&gt;Entry is free all day. &lt;a href=\\\"https://t.co/qMTwANA6c7\\\"&gt;pic.twitter.com/qMTwANA6c7&lt;/a&gt;&… [+4441 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Richard Whitehead",
          "title": "Spinners on Shane Warne: bowlers explain why he was a cricket genius",
          "description": "Warne revolutionised spin bowling – but how did he do it? For the last 30 years, Wisden has been asking the expertsShane Warne’s genius as a bowler as well as his role in breathing new life into the dying art of leg-spin bowling was dissected endlessly during…",
          "url": "https://www.theguardian.com/sport/2023/jun/30/spinners-shane-warne-bowlers-explain-cricket-genius",
          "urlToImage": "https://i.guim.co.uk/img/media/c324c459d52f61f727774ecb928d68b1b8bccfce/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fddf61d01d425df2ec37fc361b5d99ec",
          "publishedAt": "2023-06-30T10:37:41Z",
          "content": "Shane Warnes genius as a bowler as well as his role in breathing new life into the dying art of leg-spin bowling was dissected endlessly during his career and life. But what did other spinners make o… [+7408 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Michael Savage Policy editor",
          "title": "Rishi Sunak speaks of sting of racism after damning cricket report",
          "description": "Prime minister says he experienced racist abuse when growing up but progress has been made in tackling itRishi Sunak has spoken of the pain he felt from racism when he was growing up, as he said he believed the cricketing authorities were committed to stampin…",
          "url": "https://www.theguardian.com/politics/2023/jul/01/rishi-sunak-speaks-of-sting-of-racism-after-damning-cricket-report",
          "urlToImage": "https://i.guim.co.uk/img/media/480f9284d373e3ef05d2d0a74c8f5bd7c172f2da/206_271_1131_679/master/1131.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9fc8fb51f7c3d7b6ee96775eee82b639",
          "publishedAt": "2023-07-01T15:27:37Z",
          "content": "Rishi Sunak has spoken of the pain he felt from racism when he was growing up, as he said he believed the cricketing authorities were committed to stamping out widespread discrimination in the game.\r… [+7561 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Reuters",
          "title": "West Indies fail to qualify for men’s Cricket World Cup after Scotland defeat",
          "description": "<ul><li>Two-times winners will not feature in India tournament </li><li>Scotland remain in contention to make 50-over competition</li></ul>West Indies will not play in the men’s 50-over Cricket World Cup for the first time after a comprehensive seven-wicket l…",
          "url": "https://www.theguardian.com/sport/2023/jul/01/cricket-west-indies-fail-to-qualify-world-cup-defeat-scotland",
          "urlToImage": "https://i.guim.co.uk/img/media/33342d5513e6f65f76dfa04a477dd3a6cccd8ba4/889_118_3334_2000/master/3334.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1cf6fa37ec68ad7b6dec6630f6aaec81",
          "publishedAt": "2023-07-01T15:27:38Z",
          "content": "West Indies will not play in the mens 50-over Cricket World Cup for the first time after a comprehensive seven-wicket loss to Scotland in their Super Six clash at the qualification tournament in Zimb… [+7095 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Leila Latif",
          "title": "Is Cricket Racist? review – the answer can only be one thing: ‘very’",
          "description": "There is no denying the racism in the sport – but the shocking consequences of it are even more appalling than you might imagineOne of the weirdest things about racism, be it in person, on social media or emailed directly to a TV critic who dared to say a Cle…",
          "url": "https://www.theguardian.com/tv-and-radio/2023/jul/19/is-cricket-racist-review-the-answer-can-only-be-one-thing-very",
          "urlToImage": "https://i.guim.co.uk/img/media/b712614aa35786bdfe70f6cee4c0854bcecab614/0_0_5229_3137/master/5229.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=7d670145e000d167d9de419d90cc8963",
          "publishedAt": "2023-07-18T23:10:32Z",
          "content": "One of the weirdest things about racism, be it in person, on social media or emailed directly to a TV critic who dared to say a Cleopatra docudrama was fine, is that it so often comes with a caveat. … [+9804 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Blackpool",
          "title": "County cricket: Essex v Lancashire, Somerset v Hampshire, and more – live",
          "description": "<ul><li>Live updates from all the County Championship matches</li><li>Rew and Yates hit double centuries as English young guns fire</li><li>Email Tanya | Tweet @taldred | Or comment below the line</li></ul>DIVISION ONECanterbury: Kent 171 and 55-1 v Warwicksh…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/12/county-cricket-essex-v-lancashire-somerset-v-hampshire-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/d6f437cef233981bcce80d734036675980c1b769/0_15_5601_3361/master/5601.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9975841a4642f5b066cb3b419d449b0b",
          "publishedAt": "2023-07-12T09:54:02Z",
          "content": "Tuesday's round up\r\nOn the runs piled, century after century. At Taunton, James Rew crafted his maiden double hundred, to put on the wall alongside his four other Championship tons of 2023 all at the… [+1813 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at The Oval",
          "title": "Surrey v Nottinghamshire, Lancashire v Essex, and more: county cricket – live",
          "description": "<ul><li>County Championship updates from around the grounds</li><li>Sign up for The Spin | Email Tanya, tweet her or discuss BTL</li></ul>1 Durham (8) 1312 Leicestershire (8) 95 Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jul/10/surrey-v-nottinghamshire-lancashire-v-essex-county-cricket-updates-live",
          "urlToImage": "https://i.guim.co.uk/img/media/83ea5c51e20fcb9a453cb2527b7061925394ec3d/0_36_5332_3199/master/5332.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7905884430d413de0425f38d57997693",
          "publishedAt": "2023-07-10T09:30:54Z",
          "content": "DIVISION ONE&lt;/p&gt;\",\"elementId\":\"aaf271aa-f4bc-4238-a619-0fd2e48a13ff\"},{\"_type\":\"model.dotcomrendering.pageElements.TextBlockElement\",\"html\":\"&lt;p&gt;&lt;strong&gt;Canterbury:&lt;/strong&gt; Ke… [+13198 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "County cricket: Middlesex v Surrey, Essex v Kent and more – live",
          "description": "<ul><li>Updates from from around the County Championship grounds</li><li>Join in the discussion! Email Tanya, tweet her or comment BTL</li></ul>All change please, all change:Some transfer news: Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jul/19/county-cricket-middlesex-v-surrey-essex-v-kent-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/90700ec972b970e553af8c7ca2b0242185976ab8/0_101_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=0ae527f52139651af707cdeb9ac6fce2",
          "publishedAt": "2023-07-19T09:28:30Z",
          "content": "Fixtures\r\nDIVISION ONE\r\nChelmsford: Essex v Kent\r\nLords: Middlesex v Surrey\r\nNorthants: Northamptonshire v Somerset\r\nTrent Bridge: Nottinghamshire v Hampshire\r\nEdgbaston: Warwickshire v Lancashire\r\nD… [+1138 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Headingley",
          "title": "Surrey v Lancashire, Essex v Warwickshire, and more: county cricket – live",
          "description": "<ul><li>Updates from day three of the latest round of matches</li><li>Get in touch: contact Tanya by mail, on Twitter or BTL</li></ul>1. Ben Duckett2. Zak Crawley Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jun/27/surrey-v-lancashire-essex-v-warwickshire-and-more-county-cricket-live",
          "urlToImage": "https://i.guim.co.uk/img/media/29139a689cfa8fdfe1d1961134ad0e04d5f7e9ae/0_308_5282_3171/master/5282.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=53524e57259a454d7bdefc27f2d1b651",
          "publishedAt": "2023-06-27T09:17:36Z",
          "content": "1. Ben Duckett&lt;/p&gt;\",\"elementId\":\"36b19b2a-db2c-4321-8f2e-fb21cd856b4f\"},{\"_type\":\"model.dotcomrendering.pageElements.TextBlockElement\",\"html\":\"&lt;p&gt;2. Zak Crawley&lt;/p&gt;\",\"elementId\":\"90… [+18212 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Barney Ronay at Lord's",
          "title": "Lord’s may never see another Steve Smith, solving the giant sudoku of Test cricket | Barney Ronay",
          "description": "One of the batting greats showed his class again for Australia at the home of cricket with a hundred full of balance and defianceIt seemed fitting that even Steve Smith’s celebration of another brilliant, gripping sui generis hundred should become a little bi…",
          "url": "https://www.theguardian.com/sport/blog/2023/jun/29/lords-may-never-see-another-steve-smith-solving-the-giant-sudoku-of-test-cricket-england-australia-ashes",
          "urlToImage": "https://i.guim.co.uk/img/media/e2df757b8de3735b32b0083d59e49529d31805dc/0_313_4976_2985/master/4976.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3629f1e9d7deebfd03e42c3de70a2ab0",
          "publishedAt": "2023-06-29T19:23:23Z",
          "content": "It seemed fitting that even Steve Smiths celebration of another brilliant, gripping sui generis hundred should become a little bit clipped and fraught and fussicky. The hundred had arrived in the rig… [+4968 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Jonathan Liew",
          "title": "Our shared values deserve better than a pointless term like ‘spirit of cricket’ | Jonathan Liew",
          "description": "The culture of English cricket is but one concept of morality – no person, and certainly no country, has a monopoly on virtueSo let’s talk about Nepal v Ireland in the Oman Quadrangular Twenty20 series last year. Ireland are 114 for eight in the 19th over whe…",
          "url": "https://www.theguardian.com/sport/2023/jul/03/cricket-ashes-england-australia-jonny-bairstow",
          "urlToImage": "https://i.guim.co.uk/img/media/10ed4eeb4ac5f0718a45b90efc2332ca286b47d8/0_87_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=0b4d83f5ec1b3d1175f125c2896fb994",
          "publishedAt": "2023-07-03T19:00:40Z",
          "content": "So lets talk about Nepal v Ireland in the Oman Quadrangular Twenty20 series last year. Ireland are 114 for eight in the 19th over when the ball is hit towards mid-on. The Oman bowler Kamal Singh lung… [+10460 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon",
          "title": "Any spirit of goodness in cricket should recognise two opposing worldviews | Geoff Lemon",
          "description": "Australia is a harder school where the batter is fair game – that culture does not deserve abuse or the label of cheatIt’s safe to say Alastair Cook would not have much enjoyed his 100th Test. His men were 2-0 down heading to another belting in Perth. England…",
          "url": "https://www.theguardian.com/sport/2023/jul/04/spirit-cricket-australia-england-ashes-jonny-bairstow-alex-carey",
          "urlToImage": "https://i.guim.co.uk/img/media/4c5e4cf02bc5b2e5d8f38002efc0632a8ce62e1d/0_150_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=79e1b178e1005302ba277e00af94c40a",
          "publishedAt": "2023-07-04T15:50:44Z",
          "content": "Its safe to say Alastair Cook would not have much enjoyed his 100th Test. His men were 2-0 down heading to another belting in Perth. England fielded for days, Ryan Harris chainsawed his off-stump in … [+9743 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "PA Media",
          "title": "Australia’s actions in Ashes Test not in the spirit of cricket, says Rishi Sunak",
          "description": "Spokesperson says prime minister agrees with Ben Stokes about Jonny Bairstow’s dismissal at Lord’sRishi Sunak has accused Australia of breaking the spirit of cricket over the controversial dismissal of Jonny Bairstow at Lord’s.England’s Bairstow was stumped i…",
          "url": "https://www.theguardian.com/sport/2023/jul/03/australias-actions-in-ashes-test-not-in-the-spirit-of-cricket-says-rishi-sunak",
          "urlToImage": "https://i.guim.co.uk/img/media/477317e98cd368c061600c297e87ac1d9d6fcc26/0_38_3626_2175/master/3626.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0ed912a9a7f156e94afbc1b4495562d4",
          "publishedAt": "2023-07-03T12:31:47Z",
          "content": "Rishi Sunak has accused Australia of breaking the spirit of cricket over the controversial dismissal of Jonny Bairstow at Lords.\r\nEnglands Bairstow was stumped in bizarre circumstances on a tense fin… [+814 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "County cricket: Yorkshire v Gloucestershire, Surrey v Lancashire and more – live",
          "description": "<ul><li>Follow the action from around the county grounds</li><li>Get in touch: contact Tanya by email, Twitter or BTL</li></ul>Yes, this is one of the two rounds this summer which will features the Kookaburra ball – as recommended in the Strauss report. They …",
          "url": "https://www.theguardian.com/sport/live/2023/jun/25/county-cricket-yorkshire-v-gloucestershire-surrey-v-lancashire-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/76e01f467531a2562d7ce589fac5016eebec11e5/0_200_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=61a832de7d7f1833e12160c5bde17b30",
          "publishedAt": "2023-06-25T09:57:39Z",
          "content": "&lt;strong&gt;Yes, this is one of the two rounds&lt;/strong&gt; this summer which will features the Kookaburra ball as recommended in the Strauss report. They are said to seam and swing less and gene… [+20160 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Blackpool",
          "title": "County cricket: Surrey v Nottinghamshire, Essex v Lancashire and more – live",
          "description": "<ul><li>Updates from final day play around the grounds</li><li>Get in touch! Email Tanya, tweet @tjaldred or comment below</li></ul>DIVISION ONECanterbury: Warwickshire 549-7dec BEAT Kent 171 and 332 by an innings and 46 runs Continue reading...",
          "url": "https://www.theguardian.com/sport/live/2023/jul/13/county-cricket-surrey-v-nottinghamshire-essex-v-lancashire-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/cebe050d3863a46fff25a05e089c497d443a4c81/0_33_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=717b157f9883f83a3cac2492f1100afd",
          "publishedAt": "2023-07-13T09:20:18Z",
          "content": "Scores on the doors\r\nDIVISION ONE\r\nCanterbury: Warwickshire 549-7dec BEAT Kent 171 and 332 by an innings and 46 runs\r\nBlackpool:Lancashire 145 v Essex 282 and 292-8\r\nMerchant Taylors School: Middlese… [+2397 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian Staff",
          "title": "It’s hard to play cricket if your school’s got no sports field | Letter",
          "description": "Like most state schools, Cotham lacks the facilities to nurture future sports stars, and its achievement in producing three England cricketers is unlikely to be repeated, writes Rosemary ChamberlinJohn Saxbee (Letters, 30 June) and ACH Smith (Letters, 3 July)…",
          "url": "https://www.theguardian.com/sport/2023/jul/07/its-hard-to-play-cricket-if-your-schools-got-no-sports-field",
          "urlToImage": "https://i.guim.co.uk/img/media/a4b4f398e49aac1d14c0229db40bf37381831246/0_262_4998_3000/master/4998.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=70af55cc782ab52d5ff45c3a34b422aa",
          "publishedAt": "2023-07-07T15:58:38Z",
          "content": "John Saxbee (Letters, 30 June) and ACH Smith (Letters, 3 July) rightly celebrate Cotham schools famous England cricketers former pupils Arthur Milton, John Mortimore and David Allen, who were in the … [+727 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Mark Ramprakash",
          "title": "I made my way in cricket but it is clear that was against the odds | Mark Ramprakash",
          "description": "ICEC report will hopefully be seen as a landmark but the game reflects the society that exists around itThe ICEC report that was published on Tuesday will hopefully come to be seen as a landmark in the development of a more equal game. Reading it, my response…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/cricket-icec-report-negative-experiences",
          "urlToImage": "https://i.guim.co.uk/img/media/b99977f4baf5a292d48fdbe88ed33d43dfaac573/0_206_6192_3715/master/6192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f389416ab2448b4b13c3c6614c28cd5a",
          "publishedAt": "2023-06-27T19:34:14Z",
          "content": "The ICEC report that was published on Tuesday will hopefully come to be seen as a landmark in the development of a more equal game. Reading it, my response was informed by memories of my own path int… [+5017 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Jonathan Liew at Lord’s",
          "title": "In Bazball World England win Vibes Urn – but Australia superior in reality | Jonathan Liew",
          "description": "In this series everyone’s a winner, until pesky facts get in the way – Ashes defeats on home soil are not forgottenThe bars are empty. The food village is deserted. Fish goujons and hog roast slowly drying out on industrial hotplates. Stewards perched on the …",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/02/ashes-england-australia-bazball-lords-second-test-headingly",
          "urlToImage": "https://i.guim.co.uk/img/media/f8806e21549f98964dab09d3174b6d91565e76e3/0_32_4377_2628/master/4377.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4e1b9e1fee3c30b22f818b00809b1ca4",
          "publishedAt": "2023-07-02T19:00:10Z",
          "content": "The bars are empty. The food village is deserted. Fish goujons and hog roast slowly drying out on industrial hotplates. Stewards perched on the edge of their boundary chairs, no longer looking out fo… [+10826 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Lord's (now) and Rob Smyth (later)",
          "title": "The Ashes 2023: England v Australia, second Test, day three – live",
          "description": "<ul><li>Play at Lord’s on day three from 11am BST/8pm AEST</li><li>Sign up to The Spin newsletter | Email Geoff or tweet him</li></ul>… and the Ashes Diary.https://www.theguardian.com/sport/2023/jun/29/ashes-diary-broad-stuck-on-repeat-as-robinson-torments-th…",
          "url": "https://www.theguardian.com/sport/live/2023/jun/30/the-ashes-2023-england-australia-live-updates-second-test-cricket-eng-v-aus-latest-score-day-three-lords",
          "urlToImage": "https://i.guim.co.uk/img/media/a7605f1edfe0ac2f415a74f2c0a487a745f61008/0_365_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=5cf9ad58e7d326e1372c59130427df4b",
          "publishedAt": "2023-06-30T09:11:02Z",
          "content": "It seems that weve only just left the cricket ground, and then, what do you know? Were back at the cricket ground. Mornings roll round easily at this time of year. Day three of the Lords Test, after … [+669 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Jonathan Liew",
          "title": "English cricket’s reign of shame exposed with brutal admission of guilt | Jonathan Liew",
          "description": "Damning report must act as a brutal wake-up call and a line cannot be drawn under this with prejudice rife within the sportYou may want to sit down for this part. Turns out – no, seriously – that a sport created and codified for the purpose of allowing rich w…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/english-cricket-independent-commission-equity-prejudice-azeem-rafiq-racism",
          "urlToImage": "https://i.guim.co.uk/img/media/e88a32447ff65b2458a30f8f533a51264f638044/458_407_4769_2861/master/4769.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=23cbbdd2500e2be31143e794f7be3e08",
          "publishedAt": "2023-06-26T23:01:33Z",
          "content": "You may want to sit down for this part. Turns out no, seriously that a sport created and codified for the purpose of allowing rich white landowners to bet against each other, and then exported around… [+7337 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "2 Wickets In 4 Balls! | Lauren Bell & Kate Cross Remove Openers | England Women v Australia Women - England & Wales Cricket Board",
          "description": "<ol><li>2 Wickets In 4 Balls! | Lauren Bell & Kate Cross Remove Openers | England Women v Australia Women  England & Wales Cricket Board\r\n</li><li>England remove Perry as momentum swings again in final ODI  BBC\r\n</li><li>Women's Ashes: England vs Australia, t…",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC3VkNzFFTjJLcTlzmAEB?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-07-18T18:07:04Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "First Dog on the Moon",
          "title": "Was it in the spirit of the game? A NATION CRIES WHITHER CRICKET?! | First Dog on the Moon",
          "description": "You are still out even if the other fellow is a cad or a bounder<ul><li>Sign up here to get an email whenever First Dog cartoons are published</li><li>Get all your needs met at the First Dog shop if what you need is First Dog merchandise and prints</li></ul> …",
          "url": "https://www.theguardian.com/commentisfree/2023/jul/03/was-it-in-the-spirit-of-the-game-a-nation-cries-whither-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/90c9e7f6c4a8e138ff9d9c78d5e17c2f30dc8bc1/4_0_1596_958/master/1596.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=7a8a1e8a5e6bc5c7ca77d6cb7683f057",
          "publishedAt": "2023-07-03T06:40:18Z",
          "content": "You are still out even if the other fellow is a cad or a bounder"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Cath Bishop",
          "title": "Cricket report a shocking wake-up call: this is how all sports can do better | Cath Bishop",
          "description": "Testimonies that reveal misogyny, racism and sexism should jolt every sporting body into listening to excluded voicesWhile the relative merits of Bazball continue to be debated, focus has swung away from arguably the most critical challenge that the sport fac…",
          "url": "https://www.theguardian.com/sport/2023/jul/17/cricket-report-a-shocking-wake-up-call-this-is-how-all-sports-can-do-better",
          "urlToImage": "https://i.guim.co.uk/img/media/d3f2279b43352c0ad0dbd8d8dece12f5df77d0e0/817_333_3314_1989/master/3314.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=27c1697edc6ae4b68f29188d0d159d93",
          "publishedAt": "2023-07-17T07:00:21Z",
          "content": "While the relative merits of Bazball continue to be debated, focus has swung away from arguably the most critical challenge that the sport faces: the findings from the Independent Commission for Equi… [+12092 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Headingley (now) and Rob Smyth (later)",
          "title": "The Ashes 2023: England v Australia, third Test, day two – live",
          "description": "<ul><li>Live cricket updates from Headingley (11am BST/8pm AEST)</li><li>Sign up for The Spin newsletter | Email Geoff or tweet him </li></ul>Mark Wood, after all of that, reackons that he’s just warming up.Time for Day 2 catch-ups? Let’s start with yesterday…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/07/the-ashes-2023-england-v-australia-third-test-day-two-live-score-updates",
          "urlToImage": "https://i.guim.co.uk/img/media/6534dee2d1b6cc230a617b74d7fc239abbfcd874/0_174_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=60fa9735a03721d159da54dc49e13f2f",
          "publishedAt": "2023-07-07T08:45:00Z",
          "content": "Hello from Headingley. Question one, as always at the cricket: how is the weather? Looks decent, a mix of cloud and blue, and thats forecast to clear further. Conditions falling in the favour of Engl… [+877 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian sport",
          "title": "‘Poms’ great Ashes hypocrisy’: Australia reacts to second Test controversy",
          "description": "<ul><li>Alex Carey’s stumping of Jonny Bairstow causes storm</li><li>Ugly scenes in Lord’s Long Room branded ‘disgraceful’</li></ul>Australia woke up on Monday morning to an Ashes storm blowing from the other side of the world after Alex Carey’s controversial…",
          "url": "https://www.theguardian.com/sport/2023/jul/03/poms-great-ashes-hypocrisy-australia-reacts-to-second-test-controversy",
          "urlToImage": "https://i.guim.co.uk/img/media/5b23b03dcefeb17ff906e5a9273d1601b3c3dd2d/0_120_3788_2272/master/3788.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7091d403af153dd52faab24a83a730b0",
          "publishedAt": "2023-07-03T03:09:31Z",
          "content": "Australia woke up on Monday morning to an Ashes storm blowing from the other side of the world after Alex Careys controversial stumping of Jonny Bairstow led to acrimony, recriminations, finger-point… [+11349 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred at Headingley",
          "title": "Gloom at Yorkshire as proposed punishment emerges for racism scandal | Tanya Aldred",
          "description": "Threat of huge fines and points deductions after racism scandal means darkness in the skies and among supportersIt was soggy at Headingley, the rain passing in damp sheets, the sky a permanent frown. When play eventually started at a quarter past two on Tuesd…",
          "url": "https://www.theguardian.com/sport/2023/jun/27/gloomy-times-yorkshire-cricket-racism-scandal-fines-points-deduction",
          "urlToImage": "https://i.guim.co.uk/img/media/6f570f9f7d51032c9f6c32a74c8683577ab65f5c/0_324_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f83701fccb9e10c13771d534a99cc1ab",
          "publishedAt": "2023-06-27T18:56:49Z",
          "content": "It was soggy at Headingley, the rain passing in damp sheets, the sky a permanent frown. When play eventually started at a quarter past two on Tuesday, the floodlights shone so brightly in the gloom t… [+2310 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Emma John",
          "title": "Duck review – young cricketer faces racist abuse in timely one-man play",
          "description": "Arcola theatre, LondonIn a week when English cricket was found guilty of deep-rooted racism, an affecting tale of discrimination dismissed as banter feels particularly profoundThis one-man cricket play premiered last summer in the wake of Azeem Rafiq’s emotio…",
          "url": "https://www.theguardian.com/stage/2023/jun/30/duck-review-young-cricketer-faces-racist-abuse-maatin-arcola-theatre-london",
          "urlToImage": "https://i.guim.co.uk/img/media/0f5879d8d3a90bad616200fb541096bd4460949e/0_531_3735_2241/master/3735.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=c508f33e98376703f7308ed64c972d3f",
          "publishedAt": "2023-06-30T12:06:31Z",
          "content": "This one-man cricket play premiered last summer in the wake of Azeem Rafiqs emotional testimony of his experiences as a British Asian player. A revised version now opens the week that a major report … [+1949 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Megan Maurice",
          "title": "‘Same old Aussies, always cheating!’ Chants cut deep for a nation still scarred by sandpaper | Megan Maurice",
          "description": "It was shocking to watch a baying crowd at Lord’s hurl abuse at players for effecting a stumping within the laws of the gameIn most sports, players simply follow the rules laid out for them, which are enforced by umpires or referees. If they break a rule, a c…",
          "url": "https://www.theguardian.com/sport/2023/jul/03/same-old-aussies-always-cheating-chants-cut-deep-for-a-nation-still-scarred-by-sandpaper",
          "urlToImage": "https://i.guim.co.uk/img/media/5c0481e79dde8a9dbed115c9848c79f5e86d0612/0_217_4080_2447/master/4080.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=071ac326796c1c363f3bcf0110fd8363",
          "publishedAt": "2023-07-03T10:15:25Z",
          "content": "In most sports, players simply follow the rules laid out for them, which are enforced by umpires or referees. If they break a rule, a consequence is applied and play resumes. There are times, natural… [+9247 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "PA Media",
          "title": "‘A significant moment’: ICC announces equal prize money for cricketers",
          "description": "<ul><li>Governing body will give women and men equal pots</li><li>Equal prize split to include World Cups and world T20s</li></ul>Women’s teams will be awarded the same prize money as their male counterparts at International Cricket Council events from now on…",
          "url": "https://www.theguardian.com/sport/2023/jul/13/a-significant-moment-icc-announces-equal-prize-money-for-female-cricketers",
          "urlToImage": "https://i.guim.co.uk/img/media/b8da03075e969053fa3e6029a32a0eb373a32825/0_267_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=80cf06ea942cf75f3e6ea704f57d4cb9",
          "publishedAt": "2023-07-13T16:16:38Z",
          "content": "Womens teams will be awarded the same prize money as their male counterparts at International Cricket Council events from now on.\r\nEngland walked away with a pot of $1.6m (£1.2m) after winning the me… [+6903 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Megan Maurice",
          "title": "Success of Women’s Ashes spectacle shifts the dial in a major way | Megan Maurice",
          "description": "Women’s cricket has grown in incremental steps for a long time – this series shows making the leap to big grounds is the best tacticThe Women’s Ashes has a long history of close contests, drawn series and match-defining moments that have kept spectators on th…",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/19/success-of-womens-ashes-spectacle-shifts-the-dial-in-a-major-way",
          "urlToImage": "https://i.guim.co.uk/img/media/85ab92886d4143a3eb9c7e0856eef3a02fa7feca/0_167_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6517b960523de0ff8b9bd619fdbd40b7",
          "publishedAt": "2023-07-19T03:31:05Z",
          "content": "The Womens Ashes has a long history of close contests, drawn series and match-defining moments that have kept spectators on the edge of their seats. But in 2011, only a handful of people were at Bank… [+9490 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Emma John at Headingley",
          "title": "England fans turn to Good Book and stiff drink to settle Ashes nerves | Emma John",
          "description": "Edgy spectators resort to Sunday morning visits to the church and public house as Stokes’s men test their faith to the limitFor three days, excited crowds have been walking down St Michael’s Lane to Headingley’s cricket ground. A good number of them have paus…",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/09/england-australia-headingley-ashes",
          "urlToImage": "https://i.guim.co.uk/img/media/7fedcea28841ff2318656ca514c6cb5efe84a7e4/0_108_7180_4310/master/7180.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a56891c81654dc3ce1e820c7267734da",
          "publishedAt": "2023-07-09T17:42:50Z",
          "content": "For three days, excited crowds have been walking down St Michaels Lane to Headingleys cricket ground. A good number of them have paused at the Original Oak for a nerve-settling pint ahead of the days… [+10560 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Andy Bull at Lord’s",
          "title": "Ben Stokes and Jonny Bairstow burn with fury and fire to set Lord’s alight | Andy Bull",
          "description": "The raging atmosphere has never sounded like it did in 140 years of Test cricket at the ground after all hell broke looseAt 2pm the Harris Garden was empty, and the Nursery deserted. Apart from the idle bar and catering staff, the cleaners sweeping up the tum…",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/02/ben-stokes-jonny-bairstow-lords-ashes-cricket-england-australia",
          "urlToImage": "https://i.guim.co.uk/img/media/eae09c5879ff0e6658e85459bbcfabe43d9751bd/1066_102_3598_2158/master/3598.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=64ba50733ba19a4c123bbd275838f0c2",
          "publishedAt": "2023-07-02T16:48:31Z",
          "content": "At 2pm the Harris Garden was empty, and the Nursery deserted. Apart from the idle bar and catering staff, the cleaners sweeping up the tumbling plastic cups, the outer grounds were uninhabited. Every… [+10986 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Headingley (now) and Rob Smyth (later)",
          "title": "The Ashes 2023: England v Australia, third Test, day one – live",
          "description": "<ul><li>Live cricket updates from Headingley (11am BST/8pm AEST)</li><li>Sign up to The Spin newsletter | Email Geoff or tweet instead</li></ul>As for the match, Ali Martin wrote a preview so that I don’t have to.Hello all. Not much of a turnaround from the L…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/06/the-ashes-2023-england-v-australia-third-test-day-one-live-score-updates",
          "urlToImage": "https://i.guim.co.uk/img/media/2fb9f5772b7fda4690027099e97a73fcc5306985/0_138_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=89270e273f4b52249a52d3443e0ebc4e",
          "publishedAt": "2023-07-06T08:36:50Z",
          "content": "Hello all. Not much of a turnaround from the Lords Test, so not much time to catch our breath, but here we are in Leeds. It has been a febrile few days of culture conflict after Australias contentiou… [+570 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Donald McRae",
          "title": "Nick Compton: ‘People who seem difficult or complex are worth the bother’",
          "description": "Former England opener has struggled with his mental health but is now finally in a position to make sense of his smothering fixation with cricket“It was like I was on a train that I knew was going to crash,” Nick Compton says as he describes how he struggled …",
          "url": "https://www.theguardian.com/sport/2023/jul/09/cricket-nick-compton-interview-england-batsman",
          "urlToImage": "https://i.guim.co.uk/img/media/bbb1fba040406c7d4c6c420370ef7583a232e701/0_452_8192_4915/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=5660779e8ee5b5b0073e23cffd114910",
          "publishedAt": "2023-07-09T07:00:39Z",
          "content": "It was like I was on a train that I knew was going to crash, Nick Compton says as he describes how he struggled with his mental health during the last few years of his cricket career. I could get off… [+16555 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Headingley",
          "title": "Starc magic not enough for muddled Australia who have work to do | Geoff Lemon",
          "description": "A combination of England’s aggression and odd bowling tactics allowed a winning position to slip away at HeadingleyIt was always going to need a lot of things to go right. Chases of 250 were often seen as mountainous in the early days of Test cricket, and on …",
          "url": "https://www.theguardian.com/sport/2023/jul/09/starc-magic-not-enough-for-australia-who-have-work-to-do-for-old-trafford",
          "urlToImage": "https://i.guim.co.uk/img/media/970930f9be466addf2a41536fd57912bce5bf778/0_77_2300_1380/master/2300.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=36329571338aea7b6902cfabbae4744e",
          "publishedAt": "2023-07-09T17:43:40Z",
          "content": "It was always going to need a lot of things to go right. Chases of 250 were often seen as mountainous in the early days of Test cricket, and on hazardous pitches they still can be. On a top-class Hea… [+9706 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Ali Martin",
          "title": "Ben Duckett: ‘It’s amazing what you can do when you take away the fear of failure’",
          "description": "The England opener on why he will continue to play his risk and reward style, why this Australia team are nice guys and his love for bucket hats“It’s probably the first day in the last month I’ve not thought about cricket at all,” says Ben Duckett down the en…",
          "url": "https://www.theguardian.com/sport/2023/jul/15/ben-duckett-cricket-the-ashes-england-australia",
          "urlToImage": "https://i.guim.co.uk/img/media/cfef27d89b71a739b08f97620caad1c51a7eaf27/74_115_3952_2372/master/3952.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7ef27102780ae0e198e95a88e6c7de91",
          "publishedAt": "2023-07-15T07:00:24Z",
          "content": "Its probably the first day in the last month Ive not thought about cricket at all, says Ben Duckett down the end of the phone line, even if, by answering this call from a cricket journalist, the spel… [+12914 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "The Spin | County cricket’s relentless spin cycle has left England short of options",
          "description": "There is no spin bowler in England’s team for the second Ashes Test and a look at the domestic game points to a wider problemWhile Nathan Lyon prepares to play his 100th consecutive Test for Australia, England have opted to go to Lord’s without either of the …",
          "url": "https://www.theguardian.com/sport/2023/jun/27/england-cricket-spinners-county-championship-options",
          "urlToImage": "https://i.guim.co.uk/img/media/5de99113e8c64a4d08f66c0ba81b424f1b1bba5d/0_93_3723_2234/master/3723.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65f9f95e29fdf5217a2c0f77a897bff",
          "publishedAt": "2023-06-27T12:50:43Z",
          "content": "While Nathan Lyon prepares to play his 100th consecutive Test for Australia, England have opted to go to Lords without either of the two spinners grabbed in a hurried supermarket sweep after Jack Lea… [+10593 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Ali Martin at Headingley",
          "title": "England should take chance to move on but fire of Ashes outrage still burns | Ali Martin",
          "description": "Will the short gap between Tests help England focus on the task in hand, or will the rancour linger on at Headingley?Right, deep breath. It feels strange casting thoughts towards a crunch Ashes Test that gets under way on Thursday when the skip fire that resu…",
          "url": "https://www.theguardian.com/sport/2023/jul/05/cricket-england-australia-ashes-third-test-headingley-preview",
          "urlToImage": "https://i.guim.co.uk/img/media/166639f823a12a94fa49630eec99fa0b264133f1/0_293_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a7aba982e4cbd5ee132643d6fcde4f0f",
          "publishedAt": "2023-07-05T18:00:39Z",
          "content": "Right, deep breath. It feels strange casting thoughts towards a crunch Ashes Test that gets under way on Thursday when the skip fire that resulted from the last one sparked by the stumping of Jonny B… [+10502 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Marina Hyde",
          "title": "Who’s for political Bazball with Rishi? Voters? Tories? Anyone? | Marina Hyde",
          "description": "So a prime minister soiled by the Rwanda policy offers fair play and ethics lessons to cricketers. Funny old game, isn’t it?Cricket banning orders, please, for the Wagner group of MCC blazers who took it upon themselves to enforce “the spirit of the game” by …",
          "url": "https://www.theguardian.com/commentisfree/2023/jul/04/political-bazball-rishi-sunak-voters-rwanda-cricket-ashes",
          "urlToImage": "https://i.guim.co.uk/img/media/480f9284d373e3ef05d2d0a74c8f5bd7c172f2da/144_210_1339_804/master/1339.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=d1785b82ac3e9cd5535a2524088423a9",
          "publishedAt": "2023-07-04T11:57:38Z",
          "content": "Cricket banning orders, please, for the Wagner group of MCC blazers who took it upon themselves to enforce the spirit of the game by abusing the Australian team as they returned to their dressing roo… [+6506 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "James Wallace",
          "title": "Shaun Udal: ‘Shane Warne seemed invincible. I can’t get my head around the fact he’s gone’",
          "description": "Former England and Hampshire spinner remembers the Australian legend as he opens up on his own struggles with Parkinson’s and family bereavementsShaun Udal has mixed memories of the T20 Blast, then known as the Twenty20 Cup. On 13 June 2003, he played in the …",
          "url": "https://www.theguardian.com/sport/2023/jul/14/shaun-udal-shane-warne-seemed-invincible-i-cant-get-my-head-around-the-fact-hes-gone",
          "urlToImage": "https://i.guim.co.uk/img/media/2d3b0a8851f235ec87065edb17b3e95fb9940d18/0_8_2464_1478/master/2464.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1333afbab7ae505a072448061eed39f9",
          "publishedAt": "2023-07-14T21:00:11Z",
          "content": "Shaun Udal has mixed memories of the T20 Blast, then known as the Twenty20 Cup. On 13 June 2003, he played in the very first game as Hampshire Hawks took on Sussex Sharks at a sun drenched Rose Bowl.… [+10460 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Australian Associated Press",
          "title": "‘If I make 80 that’ll be a miracle’: Allan Border reveals he has Parkinson’s",
          "description": "<ul><li>Former Australia captain was diagnosed in 2016</li><li>‘At the moment I’m not scared’ says Border</li></ul>The Australian cricket legend Allan Border has announced that he is suffering from Parkinson’s disease and says it will be a miracle if he lives…",
          "url": "https://www.theguardian.com/sport/2023/jun/30/allan-border-reveals-he-has-parkinsons-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/cc9eed3ffd7f6b2ddae2231af8a98b6dd30bcf43/141_155_4797_2878/master/4797.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=032f2c61c60d45b00d315b7afc695292",
          "publishedAt": "2023-06-30T14:01:44Z",
          "content": "The Australian cricket legend Allan Border has announced that he is suffering from Parkinsons disease and says it will be a miracle if he lives to 80.\r\nThe first player in history to score 11,000 Tes… [+2452 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Old Trafford (now) and Rob Smyth (later)",
          "title": "The Ashes 2023: England v Australia, fourth Test, day one – live",
          "description": "<ul><li>Live cricket updates from Old Trafford (11am BST/8pm AEST)</li><li>Sign up for The Spin newsletter | Email Geoff or tweet him</li></ul>Now for Australia, and unusually their team news came out the day before the match. They have been waiting until the…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/19/the-ashes-2023-england-v-australia-fourth-test-day-one-live-updates-score-results-eng-vs-aus-old-trafford-start-time",
          "urlToImage": "https://i.guim.co.uk/img/media/5fd1a7067fe3b31bd4e34334d1f6ff66a4a648d6/103_130_3310_1985/master/3310.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=56623eb162be08a2705cae6cc3ab0ca6",
          "publishedAt": "2023-07-19T09:19:05Z",
          "content": "Interesting call! Thats been their method in this new era. Know what youre chasing. Overheads can help, says Stokes, but he would have bowled even if the sun was out.&lt;/p&gt;\",\"elementId\":\"ea1653fe… [+6208 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Jonathan Liew at Lord's",
          "title": "England’s persona non grata Duckett takes big step on road to redemption | Jonathan Liew",
          "description": "Ben Duckett’s Test career appeared to be finished in 2017 but his busy 98 at Lord’s embellished a stirring comeback storyIt was actually a vodka and lemonade, not that it really matters. Everyone assumes that the drink Ben Duckett tipped over James Anderson d…",
          "url": "https://www.theguardian.com/sport/blog/2023/jun/29/englands-persona-non-grata-takes-significant-step-on-road-to-redemption",
          "urlToImage": "https://i.guim.co.uk/img/media/7a0d1ac2c6e96ca7625a7993851752813cf5bccd/232_54_1968_1180/master/1968.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c73baaaf51d2e5eec2f93939c041bc8b",
          "publishedAt": "2023-06-29T18:30:36Z",
          "content": "It was actually a vodka and lemonade, not that it really matters. Everyone assumes that the drink Ben Duckett tipped over James Anderson during the ill-fated 2017-18 Ashes tour the drink that looked … [+9982 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Megan Maurice (now) and Tanya Aldred (later)",
          "title": "Women’s Ashes Test match: England v Australia, day two – live",
          "description": "<ul><li>Live over-by-over updates from Trent Bridge</li><li>The cricket in Nottingham starts at 11am BST/8pm AEST</li><li>Get in touch: email Megan or tweet @meganmaurice</li></ul>If you’d like to read about a little bit of everything, then Raf Nicholson has …",
          "url": "https://www.theguardian.com/sport/live/2023/jun/23/womens-ashes-2023-england-vs-australia-live-updates-test-match-cricket-eng-v-aus-latest-score-scorecard-day-two-trent-bridge",
          "urlToImage": "https://i.guim.co.uk/img/media/c082fec09ffb4f4005720a8dcdac4931fefb87d5/0_89_2700_1620/master/2700.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7be0b597ee8f8c84a04cc476fb80429d",
          "publishedAt": "2023-06-23T09:23:32Z",
          "content": "Ellyse Perry is correct here, of course. You dont really get anything for a century, just one more run for your team, not that huge in the scheme of things. And yet, we just love round numbers, dont … [+4104 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton at Lord's",
          "title": "England confused by erroneous warning from officials over Ollie Pope injury",
          "description": "<ul><li>Hosts told they would have to field with 10 men if Pope went off</li><li>Batter jarred shoulder joint again in Australia’s second innings</li></ul>Ollie Pope ended the third day at Lord’s as he had the first – in the dressing room with his right shoul…",
          "url": "https://www.theguardian.com/sport/2023/jun/30/england-confused-by-erroneous-warning-from-officials-over-ollie-pope-injury",
          "urlToImage": "https://i.guim.co.uk/img/media/01cca67f43f7e381373705d8ea10fd019f97094f/143_146_1545_927/master/1545.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e105e8282ae78fe5310e31dfbea6448f",
          "publishedAt": "2023-06-30T20:05:58Z",
          "content": "Ollie Pope ended the third day at Lords as he had the first in the dressing room with his right shoulder on ice after jarring the joint while fielding, with the England camp reporting they were erron… [+7777 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Australian Associated Press",
          "title": "Australia’s Alex Carey would ‘definitely’ repeat Bairstow Ashes stumping",
          "description": "<ul><li>Wicketkeeper speaks for first time since second Test at Lord’s</li><li>‘It’s been a little bit surprising how it’s played out,’ Carey says</li></ul>Australia’s wicketkeeper Alex Carey would not hesitate to repeat the Jonny Bairstow stumping on another…",
          "url": "https://www.theguardian.com/sport/2023/jul/15/australias-alex-carey-would-definitely-repeat-bairstow-ashes-stumping",
          "urlToImage": "https://i.guim.co.uk/img/media/f8d836f1934b0d0134a2e735ebd4d7d155942c8a/0_187_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=de9cbaac5e76cf112768311634b941b6",
          "publishedAt": "2023-07-15T09:57:49Z",
          "content": "Australias wicketkeeper Alex Carey would not hesitate to repeat the Jonny Bairstow stumping on another batter, saying he blamed himself when falling victim to a similar dismissal early in his career.… [+2256 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Boing Boing"
          },
          "author": "Rob Beschizza",
          "title": "Report finds cricket in Britain a cesspool of sexist, racist and elitist discrimination",
          "description": "An official report in the UK has found that cricket there suffers from widespread discrimination. Though the sport has been successfully exported to former colonies, the domestic game is exactly what you'd think a class-bound shire leisure pursuit would be: a…",
          "url": "https://boingboing.net/2023/06/30/report-finds-cricket-in-britain-a-cesspool-of-sexist-racist-and-elitist-discrimination.html",
          "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/06/shutterstock_2036845802-scaled.jpg?fit=1200%2C801&ssl=1",
          "publishedAt": "2023-06-30T20:11:35Z",
          "content": "An official report in the UK has found that cricket there suffers from widespread discrimination. Though the sport has been successfully exported to former colonies, the domestic game is exactly what… [+999 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Rob Smyth (now) and Adam Collins (later)",
          "title": "Women’s Ashes Test match, day one: England v Australia – live",
          "description": "<ul><li>Over-by-over updates from the one-off match at Trent Bridge</li><li>Play in the cricket starts in Nottingham at 11am BST/8pm AEST</li><li>Get in touch: send your thoughts to Rob by email</li></ul>Ambassador, with all this Ashes cricket you really are …",
          "url": "https://www.theguardian.com/sport/live/2023/jun/22/the-womens-ashes-2023-england-vs-australia-live-updates-test-match-cricket-eng-v-aus-latest-score-scorecard-day-one-trent-bridge",
          "urlToImage": "https://i.guim.co.uk/img/media/ff9e57ecb2b662a057848656b94c95109661d953/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=2c0dc868a407c1b896dfed6abde846f3",
          "publishedAt": "2023-06-22T08:01:41Z",
          "content": "How the Women's Ashes works\r\nSome of you will already know this but its worth a refresher. The womens Ashes is a multi-format competition: one Test match, three T20s and three ODIs.\r\nThere are four p… [+8892 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Barney Ronay at Lord's",
          "title": "Tireless Robinson shakes things up for England with fitness and accuracy | Barney Ronay",
          "description": "Bowler has been pick of England’s seamers this series and showed once again his worth to Ben Stokes’s sideDeep down, beneath the layers of mooching sang-froid, Ollie Robinson might have bridled a bit at Matthew Hayden’s description of his bowling as “124kph n…",
          "url": "https://www.theguardian.com/sport/blog/2023/jul/01/cricket-ollie-robinson-england-australia-ashes",
          "urlToImage": "https://i.guim.co.uk/img/media/174e42d2e0aaa2509e0b0c87c75f09c3d9846f3b/0_103_3867_2320/master/3867.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=6ab8ee297502cffd96470fdc7c643994",
          "publishedAt": "2023-07-01T19:54:49Z",
          "content": "Deep down, beneath the layers of mooching sang-froid, Ollie Robinson might have bridled a bit at Matthew Haydens description of his bowling as 124kph nude nuts. He might have felt the pressure of bec… [+11461 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton at Headingley",
          "title": "MCC orders members away from players after Long Room incident at Ashes Test",
          "description": "<ul><li>Cordoned area through famous Lord’s Long Room increased</li><li>Club will take tougher stance on ‘unacceptable’ behaviour</li></ul>The MCC will separate members from players for the remainder of the summer while they continue their investigation into …",
          "url": "https://www.theguardian.com/sport/2023/jul/06/mcc-orders-members-away-from-players-after-long-room-incident-at-ashes-test-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/618c78dd8d85bcc38aff93ab89704213eaf75ace/0_758_1206_723/master/1206.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=203f1dd1605964499dc9c413fdbde5bf",
          "publishedAt": "2023-07-06T14:40:49Z",
          "content": "The MCC will separate members from players for the remainder of the summer while they continue their investigation into the wild scenes in the normally sedate Long Room during the bad-tempered denoue… [+7092 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton at Emirates Old Trafford",
          "title": "Ashes diary: northern mayors call out ECB as Mike Gatting relives that ball",
          "description": "Andy Burnham and Tracy Brabin call on ECB to reconsider decision not to allocate 2027 Ashes Tests to northern grounds as former England captain braves potential ignominyAndy Burnham, mayor of Greater Manchester, rang the five-minute bell on Friday and then at…",
          "url": "https://www.theguardian.com/sport/2023/jul/21/ashes-diary-northern-mayors-call-out-ecb-as-mike-gatting-relives-that-ball",
          "urlToImage": "https://i.guim.co.uk/img/media/1789df6ceb5bda83dcfc43773d0670c74e4b80e8/0_195_3966_2381/master/3966.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1b0bff0194e7b700f9e1050152a5df3c",
          "publishedAt": "2023-07-21T16:09:37Z",
          "content": "Mayors on a mission\r\nAndy Burnham, mayor of Greater Manchester, rang the five-minute bell on Friday and then attempted to also sound an alarm. He and Tracy Brabin, mayor of West Yorkshire, wrote a le… [+7959 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Exclusive by Sean Ingle",
          "title": "Just Stop Oil funder warns more high-profile sports will be on group’s hit list",
          "description": "<ul><li>Dale Vince says environmental group will continue protests</li><li>Comments come as campaigners target cricket and Wimbledon</li></ul>Just Stop Oil’s lead funder Dale Vince has warned that more high-profile sport is on the organisation’s target list a…",
          "url": "https://www.theguardian.com/sport/2023/jul/06/just-stop-oil-dale-vince-warns-more-high-profile-sports-will-be-on-hit-list-wimbledon",
          "urlToImage": "https://i.guim.co.uk/img/media/8ede0f0d37baa3263029f82f339df527524332e8/70_300_3048_1829/master/3048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c2e528fb5a4c09a4952340f5645bf644",
          "publishedAt": "2023-07-06T11:15:20Z",
          "content": "Just Stop Oils lead funder Dale Vince has warned that more high-profile sport is on the organisations target list as it seeks to jolt more people out of sleepwalking amid a worsening climate crisis.\r… [+10147 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Ali Martin at Trent Bridge",
          "title": "England’s Lauren Filer goes large to halt Perry in high-speed Test debut | Ali Martin",
          "description": "Bowler broke a national record and picked up the prize wicket of Ellyse Perry on her first appearance for her countryIt was one of those moments where the needle scratches on the record; when the usual rhythms of red-ball cricket are suddenly altered by a dis…",
          "url": "https://www.theguardian.com/sport/blog/2023/jun/22/englands-lauren-filer-off-to-a-flyer-in-high-speed-test-debut",
          "urlToImage": "https://i.guim.co.uk/img/media/a57b6fd8b02da3618174e1aa6ecf653b3972a56e/0_106_3604_2163/master/3604.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c1191bd75c6ea5447040e72961e9170d",
          "publishedAt": "2023-06-22T20:52:59Z",
          "content": "It was one of those moments where the needle scratches on the record; when the usual rhythms of red-ball cricket are suddenly altered by a disturbance, prompting backsides on to the edges of seats an… [+13412 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Lord's (now) and Rob Smyth (later)",
          "title": "The Ashes 2023: England v Australia, second Test, day four – live",
          "description": "<ul><li>Play at Lord’s on day four from 11am BST/8pm AEST</li><li>Sign up to The Spin newsletter | Email Geoff or tweet him</li></ul>England women’s captain Heather Knight has spoken about the ICEC report finding that women were marginalised in cricket – not …",
          "url": "https://www.theguardian.com/sport/live/2023/jul/01/the-ashes-2023-england-vs-australia-live-updates-second-test-cricket-eng-v-aus-latest-score-day-four-lords",
          "urlToImage": "https://i.guim.co.uk/img/media/6df285c666b60bd439b853f7543cddbc29d07c71/18_0_3212_1928/master/3212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=4b6f124af502caa2b5eb7eb0facc0f14",
          "publishedAt": "2023-07-01T09:13:51Z",
          "content": "Good morning, good morning, the general said. Ive wandered around Lords already this morning and had a number of conversations with some fairly downcast English folk. They dont think theres a way bac… [+1017 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "Ashes series heads to Old Trafford seeking a perfect pitch amid the noise",
          "description": "Rain and a lack of recent first-class cricket at Lancashire’s home means the jury is out on what surface awaits on WednesdayWhen Jimmy Anderson pauses at the top of his mark at Old Trafford this week, he will have his neat white boots on familiar clod.But muc…",
          "url": "https://www.theguardian.com/sport/2023/jul/18/ashes-series-old-trafford-pitch-cricket-england-australia-fourth-test",
          "urlToImage": "https://i.guim.co.uk/img/media/dd190378a36c6f85e176e401b3b5ed834e0339d5/40_62_3952_2372/master/3952.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9e54e73723894dd986db80ad9dd2c22c",
          "publishedAt": "2023-07-18T12:25:34Z",
          "content": "When Jimmy Anderson pauses at the top of his mark at Old Trafford this week, he will have his neat white boots on familiar clod.\r\nBut much has changed since the almost 41-year-old Anderson first set … [+9622 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Gerard Meagher",
          "title": "British & Irish Lions aim for records as 2025 Australia tour dates confirmed",
          "description": "<ul><li>MCG will host second Test and 100,000 attendance targeted</li><li>Boost for Borthwick as Marcus Smith signs new Quins deal</li></ul>The British & Irish Lions will lock horns with Australia at the Melbourne Cricket Ground on their 2025 tour and seek to…",
          "url": "https://www.theguardian.com/sport/2023/jul/19/british-irish-lions-aim-for-records-as-2025-australia-tour-dates-confirmed",
          "urlToImage": "https://i.guim.co.uk/img/media/7adebe49070f5478800a78198cc57413e8e7133c/0_367_5500_3300/master/5500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=98f6794cf21aacb9e7715de9433048cc",
          "publishedAt": "2023-07-19T10:53:24Z",
          "content": "The British &amp; Irish Lions will lock horns with Australia at the Melbourne Cricket Ground on their 2025 tour and seek to set a record crowd of 100,000 at the iconic venue.\r\nThe Lions have announce… [+10479 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "PA Media",
          "title": "Matthew Hayden turns up Ashes heat on ‘forgettable cricketer’ Ollie Robinson",
          "description": "<ul><li>Former Australia great takes swipe at bowler on SEN Radio</li><li>Ricky Ponting hits back at Robinson on cricket podcast</li></ul>The former Australian greats Matthew Hayden and Ricky Ponting have rounded on England’s Ollie Robinson after the seamer’s…",
          "url": "https://www.theguardian.com/sport/2023/jun/22/ashes-cricket-ollie-robinson-matthew-hayden-ricky-ponting",
          "urlToImage": "https://i.guim.co.uk/img/media/5e8c7388fe9e27f50a44af372f4f8a752eb448cd/2_96_3332_2000/master/3332.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a0f10345275b907cc1a63d431bcc501",
          "publishedAt": "2023-06-22T11:50:07Z",
          "content": "The former Australian greats Matthew Hayden and Ricky Ponting have rounded on Englands Ollie Robinson after the seamers provocative display in the Ashes opener at Edgbaston.\r\nRobinson was happy to of… [+7555 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon (now) and James Wallace (later)",
          "title": "England v Australia: Women’s Ashes second one-day international – live",
          "description": "<ul><li>Updates from the ODI at Southampton’s Rose Bowl</li><li>The cricket starts at 11am BST/8pm AEST</li><li>Any thoughts? Email or tweet @GeoffLemonSport</li></ul>Here we go again. After Australia won the Test match and the first T20 in this year’s Women’…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/16/womens-ashes-2023-england-vs-australia-live-updates-odi-one-day-international-cricket-eng-v-aus-latest-score-scorecard-southampton-rose-bowl",
          "urlToImage": "https://i.guim.co.uk/img/media/2362a4f7e9baf7a1f52f7434a19f15ca87e4022d/0_170_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=3ef698d55fa895b801f69aa3b9e24608",
          "publishedAt": "2023-07-16T09:00:27Z",
          "content": "Here we go again. After Australia won the Test match and the first T20 in this years Womens Ashes series, there was surely no way back for the other team. England werent going to beat the world champ… [+992 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Kevin Rushby",
          "title": "Let the bog snorkelling commence! 10 of the weirdest sporting events in the UK",
          "description": "From ferret racing to shinkicking, we round up some of the country’s most eccentric sporting events. Oddly, cricket isn’t among them …All modern sports can seem faintly ridiculous to the non-affiliated. How on earth did anyone come up with cricket? Or two pac…",
          "url": "https://www.theguardian.com/travel/2023/jun/28/10-weird-sporting-events-in-the-uk",
          "urlToImage": "https://i.guim.co.uk/img/media/f21e95c41ea07f053c227535844c385d158b8e63/0_162_5200_3121/master/5200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5c499d0ddd0fb253ed6c8855c0b8ee49",
          "publishedAt": "2023-06-28T06:00:01Z",
          "content": "All modern sports can seem faintly ridiculous to the non-affiliated. How on earth did anyone come up with cricket? Or two packs of eight sturdy warriors all hugging each other, crouching down and loc… [+17261 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Raf Nicholson",
          "title": "The Spin | Women’s Ashes has been enthralling, and for that you can thank England",
          "description": "Hosts put the emphasis on entertainment and, much like the men’s team, it freed them from pressure and results followedAs far as reactions go to forgoing the Ashes, England’s response on Sunday evening, after Australia pipped them at the post in the Southampt…",
          "url": "https://www.theguardian.com/sport/2023/jul/19/the-spin-womens-ashes-enthralling-thank-england-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/578412409d0f4fd0589582a1f04e8e1ea32d66d9/185_262_3315_1989/master/3315.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=342ee57b7d64c2dfde84790e6e703af5",
          "publishedAt": "2023-07-19T14:12:42Z",
          "content": "As far as reactions go to forgoing the Ashes, Englands response on Sunday evening, after Australia pipped them at the post in the Southampton ODI by a mere three runs, was oddly upbeat. First, Heathe… [+10753 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon at Lord's",
          "title": "David Warner shows he is still up for the Ashes fight with opening stand | Geoff Lemon",
          "description": "On his last Ashes tour the opener, more watchful than in the past, again gave Australia a good start at Lord’s in second TestYou get the sense that David Warner has spent his lifetime looking for a fight. Speak to players who came up against the young version…",
          "url": "https://www.theguardian.com/sport/blog/2023/jun/28/david-warner-great-survivor-up-for-ashes-fight-australia-england",
          "urlToImage": "https://i.guim.co.uk/img/media/225cd7736424d07e5717a58cb50bf1305258a9d0/0_94_3620_2173/master/3620.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=abba22910660af8dc1f4e3c4350dffcf",
          "publishedAt": "2023-06-28T18:14:16Z",
          "content": "You get the sense that David Warner has spent his lifetime looking for a fight. Speak to players who came up against the young version in suburban Sydney cricket, remembering Warner prowling the boun… [+4691 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian Staff",
          "title": "We must tell the stories of all West Indians of Windrush generation | Letter",
          "description": "There is little coverage of those who were not of African heritage, says Dr Ray BachanI arrived in this country in 1965 on a boat from Georgetown, Guyana, via Trinidad to a cold and wet Southampton with my mother and baby sister, and many other citizens from …",
          "url": "https://www.theguardian.com/uk-news/2023/jun/25/we-must-tell-the-stories-of-all-west-indians-of-windrush-generation",
          "urlToImage": "https://i.guim.co.uk/img/media/2da2cae62550ea63e7bbed94822675c4116ea56d/0_17_5090_3053/master/5090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d70af1e9fcfa58ae8e649facba5815b",
          "publishedAt": "2023-06-25T15:15:59Z",
          "content": "I arrived in this country in 1965 on a boat from Georgetown, Guyana, via Trinidad to a cold and wet Southampton with my mother and baby sister, and many other citizens from the Caribbean. My parents … [+1022 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Megan Maurice (now) and James Wallace (later)",
          "title": "Women’s Ashes Test: England chase 268 against Australia on final day – live",
          "description": "<ul><li>Play in Nottingham starts at 11am BST/ 8pm AEST</li><li>Get in touch: email Megan or tweet @meganmaurice</li></ul>Next up we have Raf Nicholson on England’s collapse and the damage that Ash Gardner inflicted.Time to catch up on the required reading be…",
          "url": "https://www.theguardian.com/sport/live/2023/jun/26/womens-ashes-2023-england-vs-australia-live-updates-test-match-cricket-eng-v-aus-latest-score-scorecard-day-five-trent-bridge",
          "urlToImage": "https://i.guim.co.uk/img/media/38b76c5a605ea2969d14e1ecac585ea0950bfad3/0_382_5754_3452/master/5754.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d65f6c67ac96ebe178e66e528d3988e7",
          "publishedAt": "2023-06-26T09:14:27Z",
          "content": "Probably my favourite thing about Test cricket is that a match can truly be poised like no other sport. Weve been begging for five day Tests for women for what feels like forever and finally our wish… [+1163 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Thomas Eaton",
          "title": "What links Cabaret and Democracy? The Saturday quiz",
          "description": "From the River of January to Top of the Pops, test your knowledge with the Saturday quiz1 What did Max Park solve in 3.13 seconds in June?2 Which African empire was founded by Osei Tutu?3 Which house was served by Wolferton railway station?4 Who appeared heav…",
          "url": "https://www.theguardian.com/lifeandstyle/2023/jul/08/what-links-cabaret-and-democracy-the-saturday-quiz",
          "urlToImage": "https://i.guim.co.uk/img/media/25705f64adf78cb16b244c514be0032fa1f9adbf/0_0_3245_1948/master/3245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fd3eb77b7d3b1b1a016a4bec94478588",
          "publishedAt": "2023-07-08T06:00:09Z",
          "content": "The questions\r\n1 What did Max Park solve in 3.13 seconds in June?2 Which African empire was founded by Osei Tutu?3 Which house was served by Wolferton railway station?4 Who appeared heavily pregnant … [+1280 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "James Wallace at Headingley (now) and Tanya Aldred (later)",
          "title": "The Ashes 2023: England v Australia, third Test, day four – live",
          "description": "<ul><li>Over-by-over updates from Headingley (11am BST/8pm AEST)</li><li>Nick Compton: ‘People who seem complex are worth the bother’</li><li>Get in touch! Email James here or tweet @Jimbo_Cricket</li></ul>Don McRae speaks to Nick Compton:Morning reading, cat…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/09/the-ashes-2023-england-v-australia-third-test-day-four-live",
          "urlToImage": "https://i.guim.co.uk/img/media/3183936442fab9e617a401bac60ccf14ddb42a76/0_263_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7705b3e83a418db3543f1473a4839c5c",
          "publishedAt": "2023-07-09T09:08:11Z",
          "content": "Good morning and welcome to a pivotal day in this mens Ashes series. Today could be the day that Australia reclaim the urn, ten Sunday English wickets at Headingley will see the visitors win their fi… [+1167 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Geoff Lemon (now) and Tim de Lisle (later)",
          "title": "Women’s Ashes: England v Australia, third one-day international – live",
          "description": "<ul><li>Over-by-over updates from Taunton </li><li>Play in the third ODI starts at 1pm BST/10pm AEST</li><li>Get in touch! Email Geoff or tweet @GeoffLemonSport</li></ul>I had a look at Australia’s double-leg-spin selection, one that they didn’t use in Bristo…",
          "url": "https://www.theguardian.com/sport/live/2023/jul/18/womens-ashes-2023-england-vs-australia-third-one-day-international-live-updates-scores-results-eng-vs-aus-cricket-odi-taunton",
          "urlToImage": "https://i.guim.co.uk/img/media/ccfd525961b71fcc473cd8a05246e86607181b81/0_118_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7ed879236eda062fe5a3980d412c5a94",
          "publishedAt": "2023-07-18T11:16:08Z",
          "content": "And so we arrive at this. Ten days of brilliant cricket across three formats for the Womens Ashes series of 2023, one that must take the mantle as the best weve seen, once you combine the quality of … [+998 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Larry Elliott",
          "title": "Economic ‘Bazball’ will have replaced UK’s safety-first approach to inflation and growth by 2025 | Larry Elliott",
          "description": "Rishi Sunak used just-go-for-it route in Covid crisis but Treasury and Bank of England now play with straightest of batsThe England cricket team are winning friends and admirers after adopting a style of play known as Bazball. Named after the side’s coach, Br…",
          "url": "https://www.theguardian.com/business/2023/jul/16/economic-bazball-uk-safety-first-approach-inflation-growth-rishi-sunak-bank-of-england",
          "urlToImage": "https://i.guim.co.uk/img/media/78fa2b2fbfb05ec5bc50eaf525676a4a52981c33/17_745_2851_1712/master/2851.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=7175b5c3979a65c197fdefc630ec5259",
          "publishedAt": "2023-07-16T10:20:19Z",
          "content": "The England cricket team are winning friends and admirers after adopting a style of play known as Bazball. Named after the sides coach, Brendon (Baz) McCullum, it is an aggressive, carefree approach … [+10873 chars]"
        }
      ];

    constructor(){
        super();
        console.log("I am console log of News Component");
        this.state ={
            articles : articles
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2 className='mb-4' >News Leopards - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" imageUrl={"https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"} />
            </div>
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" imageUrl={"https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"} />
            </div>
            <div className="col-md-4">
                <Newsitems title="myTitle" description="myDesc" imageUrl={"https://ichef.bbci.co.uk/news/1024/branded_news/14F1F/production/_130219758_sofiatastingcrickettagliatelle.jpg"} />
            </div>
            
        </div>

      </div>
    )
  }
}
