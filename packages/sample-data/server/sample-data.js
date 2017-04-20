// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sample-data-tests.js for an example of importing.
if(Meteor.isServer){
	
	export const name = 'sample-data';

	homepageListCategory=[
		{
			"_id" : "WjkfAjSTBQMBk4e6y",
			"title" : "Category1",
			"alias" : "category1",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "wT75z3GXDijmiygcQ",
			"title" : "Category2",
			"alias" : "category2",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "8LagPWd8TyWauB8Bi",
			"title" : "Category3",
			"alias" : "category3",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		}
	];
	homepageListArticle=[
		{
			"_id" : "eQBWG4DXMsEp8NX7x",
			"title" : "Article1",
			"alias" : "article1",
			"category" : "wT75z3GXDijmiygcQ",
			"tags" : [
				"KbNnewPfXkkXEGdMB"
			],
			"article" : "<p>Meteor is really an awesome tool to build great Web apps and get productive fast. I absolutely love it. That&rsquo;s why 6 months ago I created a package that allows you to plug Webpack with Meteor.</p><p> I though if we could add a real-time hot reload, ES6 modules, bundle assets with the code and do code splitting, it would make Meteor 2x cooler and it did.</span></p>",
			"metaKeyword" : "sidebar",
			"metaDescription" : "sidebar",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "McwCH6S4cMGsqPags",
			"title" : "Welcome To Deligence",
			"alias" : "welcome-to-deligence",
			"category" : "WjkfAjSTBQMBk4e6y",
			"tags" : [ ],
			"article" : "<h1 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-size: 30px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; text-rendering: optimizeLegibility; background-color: #ffffff;\">Welcome to Deligence Technologies</h1>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">Deligence Technologies is a team of highly qualified and experienced professionals. We value our words and fulfill our commitments. We deliver on time and when we are not able to do so, we inform in advance. Communication, Commitment and Quality are our Key Values.</p>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">We are experts of PHP/MySQL and we mainly work in&nbsp;<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"Joomla\" href=\"http://www.deligence.com/technologies/php-mysql/joomla\">Joomla</a>, and&nbsp;<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"WordPress\" href=\"http://www.deligence.com/technologies/php-mysql/wordpress\">WordPress</a>&nbsp;CMSs.</p>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">We also have expertise in&nbsp;<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"MeteorJS\" href=\"http://www.deligence.com/technologies/nodejs-mongodb/meteor\">MeteorJS</a>&nbsp;which is a web framework based on NodeJS and uses MongoDB as backend.</p>\n<h2 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 22px; text-rendering: optimizeLegibility; background-color: #ffffff;\">Concerns/Vision of the Company&nbsp;</h2>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">1. We are in action to fulfill the aspirations of our team members.</p>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">2. Deligence Technologies is a well known and trusted Brand in IT Services Industry.</p>\n<h2 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 22px; text-rendering: optimizeLegibility; background-color: #ffffff;\">raison d'&ecirc;tre</h2>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">fulfilling the aspirations of our team members.</p>\n<h2 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 22px; text-rendering: optimizeLegibility; background-color: #ffffff;\">Promoters of the Company</h2>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">Sanjay Kumar and Nidhi Aggarwal are the 2 promoters &amp; Directors of this company.</p>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;\">Sanjay Kumar</span>&nbsp;is CEO and Sales Manager of Deligence Technologies Pvt. Ltd. He has done DOEACC 'B\" Level which is equivalent to MCA. He is a Zend Certified Engineer (<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"Zend\" href=\"http://www.zend.com/en/yellow-pages/ZEND003862\" target=\"_blank\">http://www.zend.com/en/yellow-pages/ZEND003862</a>) and also an Oracle Certified Professional (OCP-DBA). Sanjay has 10 years of experience in Open Source. He has worked for 5 years with&nbsp;<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"Value One\" href=\"http://value-one.com/\" target=\"_blank\">Value One InfoTech Pvt. Ltd.</a>&nbsp;He started there as a Software Engineer, then become Sr. Software Engineer, and then Lead Developer, and then Team Leader. After that&nbsp;he founded&nbsp;<a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" title=\"OST\" href=\"http://www.opensourcetechnologies.com/\" target=\"_blank\">Open Source Technologies Pvt. Ltd.</a>&nbsp;with one of his friend in July 2009. Sanjay had played various roles in that&nbsp;company. The roles include Project Manager, Sr. Project Manager, Sales Manager, and CEO. Recently he has discontinued with&nbsp;Open Source Technologies Pvt. Ltd. and has formed this company.</p>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; font-weight: bold;\">Nidhi Aggarwal</span>&nbsp;is the other promoter and director of the company. Her qualifications include M.Com., and MBA (Finance). She started her career with Open Source Technologies Pvt. Ltd. in July 2009 and she had played various roles during her stay of 5 years. She started as a developer and HR assistant. Then she started leading the team and from last 2.5 years - her major roles were - Project Manager and HR Manager. Now she is going to play the role of HR Manager and COO (Chief Operating Officer) in Deligence Technologies Pvt. Ltd.</p>",
			"metaKeyword" : "About Us",
			"metaDescription" : "About Us",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "472Dgsst3bf4d7KAZ",
			"title" : "Article2",
			"alias" : "article2",
			"category" : "WjkfAjSTBQMBk4e6y",
			"tags" : [ ],
			"article" : "<h6 class=\"widget-title\" style=\"box-sizing: inherit; margin: 0px 0px 16px; font-size: 20px; line-height: 1.1; font-family: 'Alegreya Sans'; color: #4a4a4a; padding-top: 20px; padding-bottom: 10px; background-color: #f7f7f7;\">Contacts info</h6>\n<div class=\"textwidget\" style=\"box-sizing: inherit; color: #949494; font-family: 'Alegreya Sans', sans-serif; font-size: 20px; line-height: 24px; background-color: #f7f7f7;\">\n<ul class=\"contacts-list\" style=\"box-sizing: inherit; margin: 0px; padding: 0px; color: #616262;\">\n<li class=\"phones fa  fa-phone\" style=\"box-sizing: inherit; display: inline-block; font-stretch: normal; line-height: 1; font-family: FontAwesome; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; margin-top: 0px; list-style: none; position: relative; padding-left: 30px;\"><a style=\"box-sizing: inherit; text-decoration: none; transition: all 0.3s ease; color: #949494; background-color: transparent;\" href=\"tel:555%E2%80%93123%E2%80%932323\"><em style=\"box-sizing: inherit; display: inline-block; margin-bottom: 9px; transition: all 0.3s ease; font-family: 'Alegreya Sans', sans-serif;\">555&ndash;123&ndash;2323</em></a><em style=\"box-sizing: inherit; display: inline-block; margin-bottom: 9px; transition: all 0.3s ease; font-family: 'Alegreya Sans', sans-serif;\">;</em>&nbsp;<a style=\"box-sizing: inherit; text-decoration: none; transition: all 0.3s ease; color: #949494; background-color: transparent;\" href=\"tel:555%E2%80%93123%E2%80%932323\"><em style=\"box-sizing: inherit; display: inline-block; margin-bottom: 9px; transition: all 0.3s ease; font-family: 'Alegreya Sans', sans-serif;\">555&ndash;123&ndash;2323</em></a></li>\n&nbsp;\n<li class=\"fa  fa-envelope\" style=\"box-sizing: inherit; display: inline-block; font-stretch: normal; line-height: 1; font-family: FontAwesome; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; margin-top: 9px; list-style: none; position: relative; padding-left: 30px;\"><a style=\"box-sizing: inherit; text-decoration: none; transition: all 0.3s ease; color: #ff6465; background-color: transparent;\" href=\"mailto:celaningpro@demolink.org\"><em style=\"box-sizing: inherit; display: inline-block; margin-bottom: 9px; transition: all 0.3s ease; font-family: 'Alegreya Sans', sans-serif;\">celaningpro@demolink.org</em></a></li>\n&nbsp;\n<li class=\"fa fa-map-marker\" style=\"box-sizing: inherit; display: inline-block; font-stretch: normal; line-height: 1; font-family: FontAwesome; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; margin-top: 9px; list-style: none; position: relative; padding-left: 30px;\"><address style=\"box-sizing: inherit; margin: 0px 0px 1.5em; color: #949494;\"><em style=\"box-sizing: inherit; display: inline-block; margin-bottom: 9px; transition: all 0.3s ease; font-family: 'Alegreya Sans', sans-serif;\">22 St. Black Road Orlando, PL 3457</em></address></li>\n</ul>\n</div>",
			"metaKeyword" : "contect us",
			"metaDescription" : "contect us",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "sQxFCncirtu4gEzJ7",
			"title" : "Article",
			"alias" : "article",
			"category" : "8LagPWd8TyWauB8Bi",
			"tags" : [ ],
			"article" : "<p><span style=\"color: #222222; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 19px; background-color: #ffffff;\">And this is just a beginning. Anyone can write a Meteor package to wrap a specific Webpack configuration. If you feel like something is missing, please open an issue and I would love to add the missing features or packages&nbsp;</span></p>",
			"metaKeyword" : "Footer3 Article",
			"metaDescription" : "Footer3 Article",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "ZAEfAHBASGAJDmJcb",
			"title" : "Article3",
			"alias" : "article3",
			"category" : "WjkfAjSTBQMBk4e6y",
			"tags" : [ ],
			"article" : "<div class=\"items-row cols-1 row-0 row-fluid clearfix\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff;\">\n<div class=\"span12\" style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 0px 0px !important;\">\n<div class=\"item column-1\" style=\"box-sizing: border-box; margin: 0px; padding: 0px;\">\n<div class=\"page-header\" style=\"box-sizing: border-box; margin: 40px 0px 20px; padding: 0px 0px 9px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #eeeeee;\">\n<h2 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 22px; text-rendering: optimizeLegibility;\"><a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" href=\"http://www.deligence.com/blog/mobile-app-marketing\">Mobile App Marketing</a></h2>\n</div>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\">Mobile App marketing aim is to drive more revenue and engagement from the people who already use your app and making new users.</p>\n<h4 style=\"box-sizing: border-box; margin: 10px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 18px; text-rendering: optimizeLegibility;\">Factors of App Marketing:-</h4>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>First, make app website&ndash; For better Mobile App Marketing first create a mobile app website and put unique and targeted audience based content.</p>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>Make website responsive&ndash; Mobile App website should be responsive.</p>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>SEO&ndash; Do proper SEO for better results.</p>\n<div class=\"jcomments-links\" style=\"box-sizing: border-box; margin: 10px 0px 0px; padding: 0px; clear: both;\">&nbsp;</div>\n</div>\n</div>\n</div>\n<div class=\"items-row cols-1 row-1 row-fluid clearfix\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff;\">\n<div class=\"span12\" style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 0px 0px !important;\">\n<div class=\"item column-1\" style=\"box-sizing: border-box; margin: 0px; padding: 0px;\">\n<div class=\"page-header\" style=\"box-sizing: border-box; margin: 40px 0px 20px; padding: 0px 0px 9px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #eeeeee;\">\n<h2 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 22px; text-rendering: optimizeLegibility;\"><a style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #04659f; text-decoration: none; background-color: transparent;\" href=\"http://www.deligence.com/blog/app-store-optimization-aso\">App Store Optimization(ASO)</a></h2>\n</div>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\">App store optimization or ASO is the process of improving the visibility of a&nbsp;mobile app&nbsp;like (an&nbsp;iPhone,&nbsp;iPad,&nbsp;Android,&nbsp;BlackBerry&nbsp;or&nbsp;Windows Phone&nbsp;app) in an&nbsp;app store&nbsp;(such as&nbsp;iTunes&nbsp;for iOS,&nbsp;Google Play for Android, Windows Store for Windows Phone or&nbsp;BlackBerry World&nbsp;for BlackBerry).</p>\n<h4 style=\"box-sizing: border-box; margin: 10px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 18px; text-rendering: optimizeLegibility;\">Top Important Factors</h4>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>App functionality&ndash; Better app functionality.</p>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>Content&ndash; Content should be service, brand or product based with uniqueness.</p>\n<p style=\"box-sizing: border-box; padding: 0px; margin: 0px 0px 10px !important 0px;\"><span style=\"box-sizing: border-box; margin: 0px; padding: 0px; line-height: 16.1px; font-family: Wingdings;\">&Oslash;&nbsp;</span>Service&ndash; Service should be clear.</p>\n</div>\n</div>\n</div>\n<div class=\"items-row cols-1 row-3 row-fluid clearfix\" style=\"box-sizing: border-box; margin: 0px; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; background-color: #ffffff;\">&nbsp;</div>",
			"metaKeyword" : "blog",
			"metaDescription" : "blog",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		},
		{
			"_id" : "mMDKNW7wxwnkR7c2g",
			"title" : "Article5",
			"alias" : "article5",
			"category" : "WjkfAjSTBQMBk4e6y",
			"tags" : [ ],
			"article" : "<h3 style=\"margin: 15px 0px; padding: 0px; font-weight: bold; text-align: left; font-size: 14px;\">The standard Lorem Ipsum passage, used since the 1500s</h3>\n<div id=\"Translation\" style=\"margin: 0px 28.7969px; padding: 0px; text-align: left; color: #000000; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\">\n<p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify;\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n</div>\n<h3 style=\"margin: 15px 0px; padding: 0px; font-weight: bold; text-align: left; font-size: 14px;\">Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC</h3>\n<div style=\"margin: 0px 28.7969px; padding: 0px; text-align: left; color: #000000; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\">\n<p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify;\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n</div>\n<h3 style=\"margin: 15px 0px; padding: 0px; font-weight: bold; text-align: left; font-size: 14px;\">&nbsp;</h3>",
			"metaKeyword" : "Home Page",
			"metaDescription" : "Home Page",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : ""
		}
	];
	homepageListMenus=[
		{
			"_id" : "dGBtw92nTceAkThKq",
			"title" : "menu1",
			"desc" : "menu1",
			"createdAt" : new Date(),
			"alias" : "menu1",
			"item" : [ ],
			"trash" : false
		},
		{
			"_id" : "D2rrdhBncpZ7Rm2XC",
			"title" : "menu2",
			"desc" : "menu2",
			"createdAt" : new Date(),
			"alias" : "menu2",
			"item" : [ ],
			"trash" : false
		},
		{
			"_id" : "MMcnHBRKFw4FQ9THH",
			"title" : "menu3",
			"desc" : "menu3",
			"createdAt" : new Date(),
			"alias" : "menu3",
			"item" : [ ],
			"trash" : false
		}
	];
	homepageListMenuItems=[
		{
			"_id" : "T8sgLe9oEToTApsfZ",
			"title" : "Home",
			"desc" : "Menu Item1",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "mMDKNW7wxwnkR7c2g",
			"parentId" : "",
			"homepage" : true,
			"createdAt" : new Date(),
			"alias" : "home",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "RLSgd9NZTfmSyFLyw",
			"title" : "Item2",
			"desc" : "Item2 ",
			"mainParentId" : "D2rrdhBncpZ7Rm2XC",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "wT75z3GXDijmiygcQ",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item2",
			"trash" : false
		},
		{
			"_id" : "WHL9jpdewRzs3DP24",
			"title" : "Item3",
			"desc" : "Item 3",
			"mainParentId" : "MMcnHBRKFw4FQ9THH",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "jbGsFCaz6JBC85nC6",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item3",
			"trash" : false
		},
		{
			"_id" : "h3juW4EZMHxijqME6",
			"title" : "Item4",
			"desc" : "Item 4",
			"mainParentId" : "MMcnHBRKFw4FQ9THH",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "g9RSQYgkMuLwkf78k",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item4",
			"trash" : false
		},
		{
			"_id" : "oXFTuq9PGpj6fYEwu",
			"title" : "Item5",
			"desc" : "Item 5",
			"mainParentId" : "MMcnHBRKFw4FQ9THH",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "8LagPWd8TyWauB8Bi",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item5",
			"trash" : false
		},
		{
			"_id" : "NWwGpMkjoCmehFegb",
			"title" : "Item6",
			"desc" : "Item 6",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "ZAEfAHBASGAJDmJcb",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "blog",
			"trash" : false
		},
		{
			"_id" : "KzZZECf8FZBPuYZAu",
			"title" : "Item7",
			"desc" : "Item 7",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "McwCH6S4cMGsqPags",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item7",
			"trash" : false
		},
		{
			"_id" : "52MrttTEnfcY7bSrs",
			"title" : "Item8",
			"desc" : "Item 8",
			"mainParentId" : "5h3uv4CkbM8k8MoGm",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "472Dgsst3bf4d7KAZ",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item8",
			"trash" : false
		},
		{
			"_id" : "EfRWXxGF7euKRiq8y",
			"title" : "Item9",
			"desc" : "Item 9",
			"mainParentId" : "D2rrdhBncpZ7Rm2XC",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "McwCH6S4cMGsqPags",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item9",
			"trash" : false
		},
		{
			"_id" : "hTri9FcKsEv7K2aKs",
			"title" : "Sub Item1",
			"desc" : "sub Item1",
			"mainParentId" : "D2rrdhBncpZ7Rm2XC",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "ZAEfAHBASGAJDmJcb",
			"parentId" : "RLSgd9NZTfmSyFLyw",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "sub-item1",
			"trash" : false
		},
		{
			"_id" : "XsmoRxpXcZPeNLSGa",
			"title" : "Item10",
			"desc" : "item 10",
			"mainParentId" : "D2rrdhBncpZ7Rm2XC",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "472Dgsst3bf4d7KAZ",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item10",
			"trash" : false
		},
		{
			"_id" : "pxDBqwHDJMdgKeruw",
			"title" : "item11",
			"desc" : "item 11",
			"mainParentId" : "D2rrdhBncpZ7Rm2XC",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "sQxFCncirtu4gEzJ7",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "item11",
			"trash" : false
		}
	];
	homepageListModules=[
		{
			"_id" : "FFocjg2zgMZWEACJf",
			"name" : "Home",
			"type" : "menumodule",
			"position" : "top",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"menuItem" : "dGBtw92nTceAkThKq"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "btzfnsMesobufaaiB",
			"name" : "Footer",
			"type" : "htmlblock",
			"position" : "footer",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"html" : "<div class=\"title\" style=\"box-sizing: border-box; margin: 0px; padding: 10px 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; text-align: center; background-color: #ffffff;\">\n<h3 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 20px; text-rendering: optimizeLegibility;\">ABOUT Us</h3>\n</div>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; text-align: center; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">Deligence Technologies is an open source development company with highly qualified and experienced professionals.</p>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "sau4un2XnpBgxzsmf",
			"name" : "Our Links",
			"type" : "menumodule",
			"position" : "footer",
			"showTitle" : true,
			"menuItems" : [ ],
			"allPages" : true,
			"moduleData" : {
				"menuItem" : "dGBtw92nTceAkThKq"
			},
			"trash" : false,
			"createdAt" : new Date()
		},
		{
			"_id" : "dw2MPsFDMzW4cN7F4",
			"name" : "Footer3",
			"type" : "htmlblock",
			"position" : "footer",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"html" : "<div class=\"title\" style=\"box-sizing: border-box; margin: 0px; padding: 10px 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; text-align: center; background-color: #ffffff;\">\n<h3 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 20px; text-rendering: optimizeLegibility;\">Address</h3>\n</div>\n<p style=\"box-sizing: border-box; padding: 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; text-align: center; background-color: #ffffff; margin: 0px 0px 10px !important 0px;\">106 &amp; 107, 1st Floor, Jyoti Shikhar Tower, District Centre, Janakpuri , New Delhi - 110058, India</p>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "GfBsB74mXxAAZeG9j",
			"name" : "Footer3",
			"type" : "htmlblock",
			"position" : "footer",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"html" : "<div class=\"title\" style=\"box-sizing: border-box; margin: 0px; padding: 10px 0px; color: #333333; font-family: Raleway, Arial, Helvetica, sans-serif; font-size: 14px; line-height: 25.2px; text-align: center; background-color: #ffffff;\">\n<h3 style=\"box-sizing: border-box; margin: 0px 0px 15px; padding: 0px; font-family: 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.1; color: #292723; font-size: 20px; text-rendering: optimizeLegibility;\">Contact Us</h3>\n<p>Phone: +91 9910130340 http://www.deligence.com/ Email: sanjay@deligence.com</p>\n</div>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "Yqvr5BQaJeTeXYMmt",
			"name" : "Sidebar Items",
			"type" : "menumodule",
			"position" : "sidebar",
			"showTitle" : true,
			"menuItems" : [ ],
			"allPages" : true,
			"moduleData" : {
				"menuItem" : "D2rrdhBncpZ7Rm2XC"
			},
			"trash" : false,
			"createdAt" : new Date()
		}
	];

	if(PanoplyCMSCollections.Tags.find().count() == 0){
		PanoplyCMSCollections.Tags.insert({
			"_id" : "KbNnewPfXkkXEGdMB",
			"title" : "tag1",
			"alias" : "tag1",
			"desc" : "test1",
			"metaKeyword" : "test1",
			"metaDescription" : "test1",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : ""
		});
	}

	if(PanoplyCMSCollections.Sites.find().count() == 0){
		PanoplyCMSCollections.Sites.insert({
			"_id" : "q3oGP4r7mc8oFcjZm",
			"name" : "PanoplyCMS",
			"siteMetaKeyword" : "Meteor with Backend, Node js, Mongodb",
			"siteMetaDesc" : "PanoplyCMS is an Open Source CMS, based on Meteor Framework",
			"siteOffline" : false
		});
	}

	_.each(homepageListCategory,function(listCategory){
		if(PanoplyCMSCollections.Categories.find({_id:listCategory._id}).count() == 0){
			PanoplyCMSCollections.Categories.insert(listCategory);
		}
	});
	_.each(homepageListArticle,function(listArticles){
		if(PanoplyCMSCollections.Articles.find({_id:listArticles._id}).count() == 0){
			PanoplyCMSCollections.Articles.insert(listArticles);
		}
	});
	_.each(homepageListMenus,function(listMenus){
		if(PanoplyCMSCollections.Menus.find({_id:listMenus._id}).count() == 0){
			PanoplyCMSCollections.Menus.insert(listMenus);
		}
	});
	_.each(homepageListMenuItems,function(listMenuItems){
		if(PanoplyCMSCollections.MenuItems.find({_id:listMenuItems._id}).count() == 0){
			PanoplyCMSCollections.MenuItems.insert(listMenuItems);
		}
	});
	_.each(homepageListModules,function(listModules){
		if(PanoplyCMSCollections.Modules.find({_id:listModules._id}).count() == 0){
			PanoplyCMSCollections.Modules.insert(listModules);
		}
	});
}