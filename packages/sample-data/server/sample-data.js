// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sample-data-tests.js for an example of importing.
if(Meteor.isServer){
	
	export const name = 'sample-data';

	homepageListCategory=[
		{
			"_id" : "qJmvAbE3zZi3ANbJJ",
			"title" : "LIFE INSURANCE",
			"alias" : "life-insurance",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "xo4S5G9a32RJnumwb"
		},
		{
			"_id" : "MMrdixNaveR7vSzkm",
			"title" : "Blog Details",
			"alias" : "blog-details",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "xo4S5G9a32RJnumwb"
		},
		{
			"_id" : "KHQBBYzHo4niSBbcT",
			"title" : "Blog",
			"alias" : "blog",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC",
			"column" : "2"
		}
	];
	homepageListArticle=[
		{
			"_id" : "xdrSMwzaGaw4KBbPL",
			"title" : "LIFE INSURANCE",
			"alias" : "life-insurance",
			"category" : "qJmvAbE3zZi3ANbJJ",
			"tags" : [
				"b8T3f4YAYfeiPMGu6"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"images/blog-img2.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. </li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. </p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "LIFE INSURANCE",
			"metaDescription" : "LIFE INSURANCE",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "dwWqfcHyCCakeJLmb",
			"title" : "Cum sociis natoque penatibus et magnis dis parturient",
			"alias" : "cum-sociis-natoque-penatibus-et-magnis-dis-parturient",
			"category" : "MMrdixNaveR7vSzkm",
			"tags" : [
				"eAhjeGCkxYdD5ggyh",
				"C38ASQc42Nhpgyrxu",
				"XcqDzMxWSQGmKB8vz"
			],
			"article" : "<div class=\"blog-post-header\">\n              \n               \n            </div>\n            <div class=\"blog-post-image\">\n              <img src=\"/images/blog.jpg\">\n            </div>\n            <div class=\"blog-post-text\">\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n            </div>\n         \n",
			"metaKeyword" : "Blog Details",
			"metaDescription" : "Blog Detail",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "7mY594GEgG2c3g7B5",
			"title" : "Aenean commodo ligula eget dolor 1",
			"alias" : "aenean-commodo-ligula-eget-dolor-1",
			"category" : "KHQBBYzHo4niSBbcT",
			"tags" : [
				"C38ASQc42Nhpgyrxu"
			],
			"article" : "<div class=\"blog-post-header\">\n              \n               \n            </div>\n            <div class=\"blog-post-image\">\n              <img src=\"/images/blog-img1.jpg\">\n            </div>\n            <div class=\"blog-post-text\">\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n            </div>\n         \n",
			"metaKeyword" : "Aenean commodo ligula eget dolor",
			"metaDescription" : "Aenean commodo ligula eget dolor",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "pBuFgx3X86HCqts6y",
			"title" : "Aenean commodo ligula eget dolor 2",
			"alias" : "aenean-commodo-ligula-eget-dolor-2",
			"category" : "KHQBBYzHo4niSBbcT",
			"tags" : [
				"C38ASQc42Nhpgyrxu"
			],
			"article" : "<div class=\"blog-post-header\">\n              \n               \n            </div>\n            <div class=\"blog-post-image\">\n              <img src=\"/images/blog-img2.jpg\">\n            </div>\n            <div class=\"blog-post-text\">\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n            </div>\n         \n",
			"metaKeyword" : "Aenean commodo ligula eget dolor",
			"metaDescription" : "Aenean commodo ligula eget dolor",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "grB3RxPJGnCEs6ku8",
			"title" : "Aenean commodo ligula eget dolor 3",
			"alias" : "aenean-commodo-ligula-eget-dolor-3",
			"category" : "KHQBBYzHo4niSBbcT",
			"tags" : [
				"C38ASQc42Nhpgyrxu"
			],
			"article" : "<div class=\"blog-post-header\">\n              \n               \n            </div>\n            <div class=\"blog-post-image\">\n              <img src=\"/images/blog.jpg\">\n            </div>\n            <div class=\"blog-post-text\">\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n            </div>\n         \n",
			"metaKeyword" : "Aenean commodo ligula eget dolor",
			"metaDescription" : "Aenean commodo ligula eget dolor",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "JBFd8A2dmT7RPBD6k",
			"title" : "Aenean commodo ligula eget dolor 4",
			"alias" : "aenean-commodo-ligula-eget-dolor-4",
			"category" : "KHQBBYzHo4niSBbcT",
			"tags" : [
				"C38ASQc42Nhpgyrxu"
			],
			"article" : "<div class=\"blog-post-header\">\n              \n               \n            </div>\n            <div class=\"blog-post-image\">\n              <img src=\"/images/blog-img1.jpg\">\n            </div>\n            <div class=\"blog-post-text\">\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. </p>\n              \n            </div>\n         \n",
			"metaKeyword" : "Aenean commodo ligula eget dolor 1",
			"metaDescription" : "Aenean commodo ligula eget dolor 1",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		}
	];
	homepageListMenus=[
		{
			"_id" : "dGBtw92nTceAkThKq",
			"title" : "Main Header Nevigation",
			"desc" : "Main Header Nevigation",
			"createdAt" : new Date(),
			"alias" : "main-header-nevigation",
			"item" : [ ],
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "qsezyJ5C4FsDokzcN",
			"title" : "my menu",
			"desc" : "new menu",
			"createdAt" : new Date(),
			"alias" : "my-menu",
			"item" : [ ],
			"trash" : false
		},
		{
			"_id" : "a4D369kAXSWfnrTqM",
			"title" : "Legal",
			"desc" : "Footer Legal",
			"createdAt" : new Date(),
			"alias" : "legal",
			"item" : [ ],
			"trash" : false
		},
		{
			"_id" : "57E9282t68emxeFT4",
			"title" : "Categories",
			"desc" : "side bar Categories",
			"createdAt" : new Date(),
			"alias" : "categories",
			"item" : [ ],
			"trash" : false
		},
		{
			"_id" : "dMwW7XdXrhb43etGE",
			"title" : "RECENT POSTS",
			"desc" : "RECENT POSTS side bar",
			"createdAt" : new Date(),
			"alias" : "recent-posts",
			"item" : [ ],
			"trash" : false
		}
	];
	homepageListMenuItems=[
		{
			"_id" : "T8sgLe9oEToTApsfZ",
			"title" : "Home",
			"desc" : "module type",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "",
			"homepage" : true,
			"createdAt" : new Date(),
			"alias" : "home",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "NWwGpMkjoCmehFegb",
			"title" : "About Us",
			"desc" : "module type",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "about-us",
			"trash" : false,
			"updatedAt" : new Date(),
			"target" : "0",
			"link" : ""
		},
		{
			"_id" : "KzZZECf8FZBPuYZAu",
			"title" : "Services",
			"desc" : "Services",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "services",
			"trash" : false,
			"updatedAt" : new Date(),
			"target" : "0",
			"link" : ""
		},
		{
			"_id" : "oc4agcZr6XLsmi9mL",
			"title" : "Gallery",
			"desc" : "Gallery",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "gallery",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "mDopsGQLGakQJWwcf",
			"title" : "Blog",
			"desc" : "Blog",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "KHQBBYzHo4niSBbcT",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "blog",
			"trash" : false,
			"target" : "0",
			"link" : "",
			"updatedAt" : new Date()
		},
		{
			"_id" : "SawyKvjuzXEEYKNyD",
			"title" : "Services Style 1",
			"desc" : "Services Style 1",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "KzZZECf8FZBPuYZAu",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "services-style-1",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "yYMrfCohfJZFu8DR7",
			"title" : "Services Style 2",
			"desc" : "Services Style 2",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "KzZZECf8FZBPuYZAu",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "services-style-2",
			"trash" : false
		},
		{
			"_id" : "9AwxN97eJ4EtxoJDc",
			"title" : "Services Detail",
			"desc" : "Services Detail",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "xdrSMwzaGaw4KBbPL",
			"parentId" : "KzZZECf8FZBPuYZAu",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "services-detail",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "LiFqNSdyTyRr9crPu",
			"title" : "Services Style 2.1",
			"desc" : "Services Style 2.1",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"parentId" : "yYMrfCohfJZFu8DR7",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "services-style-21",
			"trash" : false
		},
		{
			"_id" : "Cu5ME64CTqDfFFFie",
			"title" : "Blog Details",
			"desc" : "Blog Detail",
			"mainParentId" : "moCES3RXKNgPvLPg4",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "eQBWG4DXMsEp8NX7x",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "blog-details",
			"trash" : true
		},
		{
			"_id" : "CToCHY38NchyEccMe",
			"title" : "Blog Details",
			"desc" : "Blog Details",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "dwWqfcHyCCakeJLmb",
			"parentId" : "mDopsGQLGakQJWwcf",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "blog-details",
			"trash" : false,
			"updatedAt" : new Date()
		},
		{
			"_id" : "7kJYmPrAXhXo2GvBA",
			"title" : "jhhh",
			"desc" : "jkhkj",
			"target" : "0",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "jhhh",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : true
		},
		{
			"_id" : "kf34w98iuQHqoMbwq",
			"title" : "Contact",
			"desc" : "Contact Us",
			"target" : "0",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "contact",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "mY2cGxG9f6ZYCjpG9",
			"title" : "Item4",
			"desc" : "item4",
			"target" : "0",
			"mainParentId" : "qsezyJ5C4FsDokzcN",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "item4",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "ApiwAYNXaysqqQCfH",
			"title" : "Privacy Statement",
			"desc" : "Privacy Statement",
			"target" : "0",
			"mainParentId" : "a4D369kAXSWfnrTqM",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "privacy-statement",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "nKaQ2YBLcMiJfXN9o",
			"title" : "Terms & Condinition",
			"desc" : "Terms & Condition",
			"target" : "0",
			"mainParentId" : "a4D369kAXSWfnrTqM",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "terms-condinition",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "vaFDxKhiMRAZSiDNa",
			"title" : "Disclaimer",
			"desc" : "Disclaimer",
			"target" : "0",
			"mainParentId" : "a4D369kAXSWfnrTqM",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "disclaimer",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "3Fhck4YLeyo8mZYwG",
			"title" : "Legal Information",
			"desc" : "Legal Information",
			"target" : "0",
			"mainParentId" : "a4D369kAXSWfnrTqM",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "legal-information",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "46kGgMQbkntHAvyna",
			"title" : "Life Insurance",
			"desc" : "Life Insurance",
			"target" : "0",
			"mainParentId" : "57E9282t68emxeFT4",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "life-insurance",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "fSYa6XdqwGXTuAtLB",
			"title" : "Travel Insurance",
			"desc" : "Travel Insurance",
			"target" : "0",
			"mainParentId" : "57E9282t68emxeFT4",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "travel-insurance",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "hxciBcJCDWPuEyJdz",
			"title" : "Home Insurance",
			"desc" : "Home Insurance",
			"target" : "0",
			"mainParentId" : "57E9282t68emxeFT4",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "home-insurance",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "jR5osG7p3emeKE86c",
			"title" : "Health Insurance",
			"desc" : "Health Insurance",
			"target" : "0",
			"mainParentId" : "57E9282t68emxeFT4",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "health-insurance",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "4js8vWjP7Wp95yokZ",
			"title" : "Business Insurance",
			"desc" : "Business Insurance",
			"target" : "0",
			"mainParentId" : "57E9282t68emxeFT4",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "business-insurance",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "zYvDv5zRDn5tA3ukR",
			"title" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
			"desc" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
			"target" : "0",
			"mainParentId" : "dMwW7XdXrhb43etGE",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "lorem-ipsum-dolor-sit-amet-consectetuer-adipiscing-elit",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "didGAMYj4qp3ifx4H",
			"title" : "Aenean commodo ligula eget dolor",
			"desc" : "Aenean commodo ligula eget dolor",
			"target" : "0",
			"mainParentId" : "dMwW7XdXrhb43etGE",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "aenean-commodo-ligula-eget-dolor",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "ebbxzt2xWEEMYXtLK",
			"title" : "Etiam ultricies nisi vel augue",
			"desc" : "Etiam ultricies nisi vel augue",
			"target" : "0",
			"mainParentId" : "dMwW7XdXrhb43etGE",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "etiam-ultricies-nisi-vel-augue",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "WCvFnpeGEFh8ZywSK",
			"title" : "Aenean commodo ligula eget dolor3",
			"desc" : "Aenean commodo ligula eget dolor",
			"target" : "0",
			"mainParentId" : "dMwW7XdXrhb43etGE",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "aenean-commodo-ligula-eget-dolor3",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		},
		{
			"_id" : "znAwgDsizjR93aCfA",
			"title" : "Etiam ultricies nisi vel augue 1",
			"desc" : "Etiam ultricies nisi vel augue",
			"target" : "0",
			"mainParentId" : "dMwW7XdXrhb43etGE",
			"MenuItemType" : "module",
			"MenuItemTypeId" : "",
			"link" : "",
			"parentId" : "",
			"alias" : "etiam-ultricies-nisi-vel-augue-1",
			"homepage" : false,
			"createdAt" : new Date(),
			"trash" : false
		}
	];
	homepageListModules=[
		{
			"_id" : "btzfnsMesobufaaiB",
			"name" : "Footer Social Networking Links",
			"type" : "htmlblock",
			"position" : "mainFooter",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "6",
				"html" : "<div class=\"footer-social\">\n              <h3><strong>Connect with us</strong></h3>\n              <ul>\n\t\t\t\t<li><a href=\"https://www.facebook.com/deligencetechnologies\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t<li><a href=\"https://twitter.com/deligence1\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t<li><a href=\"https://www.linkedin.com/company/deligencetechnologies\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t<li><a href=\"skype:sanjay.deligence\"><i class=\"fa fa-skype\"></i></a></li>\n\t\t\t  </ul>\n           </div>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date(),
			"moduleClass" : "Footer"
		},
		{
			"_id" : "dw2MPsFDMzW4cN7F4",
			"name" : "Footer Legal",
			"type" : "htmlblock",
			"position" : "mainFooter",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "6",
				"html" : "<div class=\"legal-links\">\n           <h3>Legal</h3>\n           <ul>\n\t\t\t\t\t<li><a href=\"\">Privacy Statement</a></li>\n                    <li>/</li>\n\t\t\t\t\t<li><a href=\"\">Terms &amp; Condinition</a></li>\n                     <li>/</li>\n\t\t\t\t\t<li><a href=\"\">Disclaimer</a></li>\n                     <li>/</li>\n\t\t\t\t\t<li><a href=\"\">Legal Information</a></li>\n\t\t\t</ul>\n          </div>"
			},
			"menuItems" : [ ],
			"trash" : true,
			"createdAt" : new Date(),
			"updatedAt" : new Date(),
			"moduleClass" : "FooterRight"
		},
		{
			"_id" : "GfBsB74mXxAAZeG9j",
			"name" : "CopyRight",
			"type" : "htmlblock",
			"position" : "copyright",
			"showTitle" : false,
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "12",
				"html" : " <div class=\"copyright pull-left\">Copyright © 2017  All rights reserved. </div>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date(),
			"moduleClass" : "CopyRight"
		},
		{
			"_id" : "jM9azkQ9tMQn9LrjN",
			"name" : "Top header Contact",
			"type" : "htmlblock",
			"position" : "topHeader",
			"showTitle" : false,
			"menuItems" : [ ],
			"moduleClass" : "top-header-left",
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "9",
				"html" : "<div class=\"top-left\">\n                    <ul class=\"top-contact-info\">\n                        <li><i class=\"fa fa-phone\"></i>+91 9910130340</li>    \n                        <li><i class=\"fa fa-envelope\"></i><a href=\"mailto:sanjay@deligence.com\">sanjay@deligence.com</a></li>    \n                        <li><i class=\"fa fa-globe\"></i>Janakpuri ,New Delhi - 110058, India</li>    \n                    </ul>   \n                 </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "rtC4dqRYw573AGqQt",
			"name" : "Top header Social Networking Link",
			"type" : "htmlblock",
			"position" : "topHeader",
			"showTitle" : false,
			"menuItems" : [ ],
			"moduleClass" : "top-header-right",
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "3",
				"html" : "<div class=\"social-icons text-right\">\n                    <ul>\n                     <li><a href=\"https://www.facebook.com/deligencetechnologies\"><i aria-hidden=\"true\" class=\"fa fa-facebook\"></i></a></li>\n                     <li><a href=\"https://twitter.com/deligence1\"><i aria-hidden=\"true\" class=\"fa fa-twitter\"></i></a></li>\n                     <li><a href=\"https://www.linkedin.com/company/deligencetechnologies\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                     <li><a href=\"skype:sanjay.deligence\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a></li>\n                   </ul>\n              </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "7bwkzcXSHrqiqDpSB",
			"name" : "Main Header Nevgation",
			"type" : "menumodule",
			"position" : "mainHeader",
			"showTitle" : false,
			"menuItems" : [ ],
			"moduleClass" : "main-header-right",
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "12",
				"menuItem" : "dGBtw92nTceAkThKq"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "QzgvkSF3yTZLmtbeD",
			"name" : "About Us bannaer",
			"type" : "htmlblock",
			"position" : "utility",
			"showTitle" : false,
			"menuItems" : [
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "internal-banner int-banner-img",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"\">\n<h2>ABOUT US</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li class=\"active\">About Us</li>\n             </ul>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "EPSbvPRQ4TKBbCZpN",
			"name" : "WHO WE ARE",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "feature",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"container\">\n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span>About Us</span>\n            <h2>WHO WE ARE</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        <div class=\"about-content\">\n          <p class=\"text-center animated fadeInLeft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n          \n          <div class=\"counter-wrap\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-users count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">200</h3>\n                   <p>Team Members</p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-globe count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">80</h3>\n                   <p>COUNTRIES</p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-smile-o count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">21930</h3>\n                   <p> Happy Customers </p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-coffee count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">90</h3>\n                   <p>Coffee</p>\n               </div>\n            </div>\n          </div>\n        </div>\n        \n           <div class=\"about-tagline animated fadeInLeft\">\n             <p><span>We're</span> Your ONE STOP SHOP <br>\n             <span>for</span> ALL YOUR INSURANCE NEEDS</p>\n           </div>\n       </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "tKfsfJCXjJRqKSPwg",
			"name" : "01. ABOUT US",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "mainTop",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"why-choose-us\">\n<div class=\"row\">\n       <div class=\"col-sm-6\">\n         <div class=\"why-us-leftside animated fadeInLeft\">\n           <div class=\"section-heading heading-left\">\n                <span>About Us</span>\n                <h2>Why Choose Us ?</h2>\n                <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n            </div>\n         </div>\n       </div>\n       <div class=\"col-sm-6\">\n         <div class=\"why-us-right animated fadeInRight\">\n                            <div class=\"block-1 color-1\">\n                               <div class=\"icon-1 \"><i class=\"fa fa-trophy\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>01. ABOUT US</h1>\n                                 <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-2\">\n                               <div class=\"icon-1\"><i class=\"fa fa-suitcase\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>02. Experienced</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-3\">\n                               <div class=\"icon-1\"><i class=\"fa fa-eye\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>03. Our Vision</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-4\">\n                               <div class=\"icon-1\"><i class=\"fa fa-file\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>04. Business Plan</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                        </div>\n       </div>\n     </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "PrhfHZ8cKJ47njZEn",
			"name" : "Our Services",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"KzZZECf8FZBPuYZAu",
				"SawyKvjuzXEEYKNyD",
				"yYMrfCohfJZFu8DR7",
				"LiFqNSdyTyRr9crPu"
			],
			"moduleClass" : "mainTop",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"container\">\n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span>Our Services</span>\n            <h2>What We Do</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        \n        <div class=\"our-services animated fadeInUp\">\n           <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-1.png\"></div>\n                        <div class=\"title\"> <h3>Life Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-2.png\"></div>\n                        <div class=\"title\"> <h3>Travel Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-3.png\"></div>\n                        <div class=\"title\"> <h3>Home Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-4.png\"></div>\n                        <div class=\"title\"> <h3>Health Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-5.png\"></div>\n                        <div class=\"title\"> <h3>Business Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-6.png\"></div>\n                        <div class=\"title\"> <h3>Car Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n              </div>\n           </div>\n        </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "a5rghXvjjNNjvGtr9",
			"name" : "Our Blog",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"mDopsGQLGakQJWwcf"
			],
			"moduleClass" : "mainBottom",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"section-space blog-wrap\"> \n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span></span>\n            <h2>Our Blog</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n       \n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "fyQnimHojxT5ASX2s",
			"name" : "We're Your",
			"type" : "htmlblock",
			"position" : "mainbody",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "mainBody",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"white-bg\">\n         <div class=\"about-tagline animated fadeInLeft\">\n                         <p> <span>We're</span> Your ONE STOP SHOP <br>\n                         <span>for</span> ALL YOUR INSURANCE NEEDS</p>\n          </div>\n           <div class=\"about-text animated fadeInUp text-center\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>\n          <a href=\"contact.html\" class=\"theme-btn btn-style-three\">Contact Us</a>\n        </div>\n     </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "qTSc2dvHmZJQuWmRJ",
			"name" : "Slider",
			"type" : "slidermodule",
			"showTitle" : false,
			"position" : "showcase",
			"allPages" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleData" : [
				{
					"title" : "Our Plans Are Based on Yours",
					"description" : "IT'S NECESSARY TO INSURING YOUR FUTURE, TODAY!",
					"linkTitle" : "CONTACT US",
					"linkUrl" : "/contact",
					"published" : true,
					"bgImageId" : ""
				},
				{
					"title" : "Our Plans Are Based on Yours",
					"description" : "IT'S NECESSARY TO INSURING YOUR FUTURE, TODAY!",
					"linkTitle" : "CONTACT US",
					"linkUrl" : "/contact",
					"published" : true,
					"bgImageId" : ""
				},
				{
					"title" : "Our Plans Are Based on Yours",
					"description" : "IT'S NECESSARY TO INSURING YOUR FUTURE, TODAY!",
					"linkTitle" : "CONTACT US",
					"linkUrl" : "/contact",
					"published" : true,
					"bgImageId" : ""
				}
			],
			"trash" : false,
			"createdAt" : new Date(),
			"moduleClass" : "",
			"updatedAt" : new Date()
		},
		{
			"_id" : "5dZHMFQ2PDSqCFiyb",
			"name" : "Our Team",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "ourTeam section-space",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"section-heading heading-center\">\n            <h2>OUR TEAM</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n             <div class=\"team-box\">\n        <div class=\"team-inner\"> <img src=\"images/member-1.png\" alt=\"\">\n          <div class=\"mask\"></div>\n          <ul class=\"team-social-list\">\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n          </ul>\n        </div>\n        <div class=\"team-content\">\n          <h6>Mark Warren</h6>\n          <div class=\"subtext\">CEO</div>\n        </div>\n      </div>\n          </div>\n          <div class=\"col-sm-4\">\n             <div class=\"team-box\">\n        <div class=\"team-inner\"> <img src=\"images/member-2.png\" alt=\"\">\n          <div class=\"mask\"></div>\n          <ul class=\"team-social-list\">\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n          </ul>\n        </div>\n        <div class=\"team-content\">\n          <h6>Henry  Gilbert</h6>\n          <div class=\"subtext\">Supervisor</div>\n        </div>\n      </div>\n          </div>\n          <div class=\"col-sm-4\">\n             <div class=\"team-box\">\n        <div class=\"team-inner\"> <img src=\"/images/member-3.png\" alt=\"\">\n          <div class=\"mask\"></div>\n          <ul class=\"team-social-list\">\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n          </ul>\n        </div>\n        <div class=\"team-content\">\n          <h6>Elaine Steinbet</h6>\n          <div class=\"subtext\">Manager</div>\n        </div>\n      </div>\n          </div>\n        </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "CHF8egPKLoXSamded",
			"name" : "Roberta ball",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "testinomial",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"row section-space testimonial-wrap parallax\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n              <div class=\"owl-carousel\" id=\"testimonial\">\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"customNavigation\">\n                 <a class=\"prev-arrow\"><i class=\"fa fa-chevron-left\"></i></a>\n                 <a class=\"next-arrow\"><i class=\"fa fa-chevron-right\"></i></a>\n             </div>\n           </div>           \n      </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "TXfx7TngwTjxkscih",
			"name" : "Our Parnter",
			"type" : "htmlblock",
			"position" : "fullWidth",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "ourPartner",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"section-space our-partner\">\n<div class=\"section-heading heading-center\">\n            <span></span>\n            <h2>Our Partner</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        \n          <div class=\"owl-carousel\" id=\"clients\">\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/clients-1.png\" alt=\"\"></a></div>\n      </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "Cahb4T6NjymztiaEZ",
			"name" : "Our Services Banner",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"KzZZECf8FZBPuYZAu",
				"SawyKvjuzXEEYKNyD",
				"yYMrfCohfJZFu8DR7",
				"LiFqNSdyTyRr9crPu"
			],
			"moduleClass" : "serviceBanner internal-banner int-banner-img",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"\">\n<h2>Our Services</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li class=\"active\">Services</li>\n             </ul>\n</div>\n"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "dSJ7bEexan5xk8buW",
			"name" : "Get in touch",
			"type" : "htmlblock",
			"position" : "extension",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "getInTouch",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"get-in-touch\">\n<div class=\"container\">\n     <div class=\"white-bg\">\n         <div class=\"about-tagline animated fadeInLeft\">\n                         <p> <span>We're</span> Your ONE STOP SHOP <br>\n                         <span>for</span> ALL YOUR INSURANCE NEEDS</p>\n          </div>\n           <div class=\"about-text animated fadeInUp text-center\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>\n          <a href=\"contact.html\" class=\"theme-btn btn-style-three\">Contact Us</a>\n        </div>\n     </div>\n</div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "8gg4KmeNXWwSw3Q8Q",
			"name" : "Our Services 2",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"9AwxN97eJ4EtxoJDc"
			],
			"moduleClass" : "internal-banner int-banner-img",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"\">\n<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Our Services</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li><a href=\"services.html\">Services</a></li>\n                  <li class=\"active\">Life Insurance</li>\n             </ul>\n          </div>\n        </div>\n</div></div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "K35Dijpp6o3jwva9g",
			"name" : "Our Gallery",
			"type" : "htmlblock",
			"position" : "utility",
			"showTitle" : false,
			"menuItems" : [
				"oc4agcZr6XLsmi9mL"
			],
			"moduleClass" : "ourGallery",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"internal-banner int-banner-img\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Our Gallery</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li class=\"active\">Gallery</li>\n             </ul>\n          </div>\n        </div>\n      </div>\n        \n    </div>"
			},
			"trash" : false,
			"createdAt" : new Date()
		},
		{
			"_id" : "JjpieaRKQFqoFMrMB",
			"name" : "Our Gallery Images",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"oc4agcZr6XLsmi9mL"
			],
			"moduleClass" : "galleryImages",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : " <div class=\"section-space gallery\">\n        <div class=\"container\">       \n              <div class=\"row\">\n                <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img1.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img2.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                 <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img1.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img2.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                 <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img1.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n                <!--Gallery Item-->\n                <div class=\"col-sm-4 gallery-item\">\n                    <div class=\"inner-box\">\n                        <figure class=\"image-box\"><img src=\"images/blog-img2.jpg\" alt=\"\"></figure>\n                        <!--Overlay Box-->\n                        <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"border-box\"></div>\n                                <div class=\"content\">\n                                    <h3><a href=\"#gallery-popup\" class=\" has-gallery-popup\" >HEADING #</a></h3>\n                                </div>\n                            </div>\n                        </div>\n                        <!--Gallery Popup Button-->\n                        <ul class=\"link-btn\">\n                            <li><a href=\"#\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                \n          \n                       \n            </div>\n                                    \n        </div>\n    </div>\n"
			},
			"trash" : false,
			"createdAt" : new Date()
		},
		{
			"_id" : "Hu4h3JHs5uRs7XoAB",
			"name" : "Our Blog Sidbar",
			"type" : "htmlblock",
			"position" : "sidebar",
			"showTitle" : false,
			"menuItems" : [ ],
			"moduleClass" : "ourBlogSidbar",
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "3",
				"html" : "<div class=\"blog-sidebar\">\n             <div class=\"categories-post widget\">\n             <h2>CATEGORIES</h2>\n             \n             <ul>\n\t\t\t\t\t<li>\n\t\t\t\t      <a href=\"#\">Life Insurance</a>\n\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t \t<a href=\"#\">Travel Insurance </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t<a href=\"#\">Home Insurance</a>\n\t\t\t\t\t\t</li>\n                        \n                        \t<li>\n\t\t\t\t<a href=\"#\">Health Insurance</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t<a href=\"#\"> Business Insurance </a>\n\t\t\t\t\t\t</li>\n\t\t\n\t\t\t\t</ul>\n                </div>\n           \n           \n            \n                \n             \n                \n           </div>\n         \n"
			},
			"trash" : true,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "waCowaD6QCsq4FoWY",
			"name" : "Contact Us Banner",
			"type" : "htmlblock",
			"position" : "utility",
			"showTitle" : false,
			"menuItems" : [
				"kf34w98iuQHqoMbwq"
			],
			"moduleClass" : "contactUsBanner",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"internal-banner int-banner-img\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Contact Us</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li class=\"active\">Contact</li>\n             </ul>\n          </div>\n        </div>\n      </div>\n        \n    </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "6es5uaLRCjhetbHgE",
			"name" : "Contact Us",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"kf34w98iuQHqoMbwq"
			],
			"moduleClass" : "contactUs",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : " <div class=\"section-space contact-us\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-sm-6\">\n       <h4>Our Office Address</h4>\n         <div class=\"contact-info\">\n             \n              <div class=\"contact-address\">\n                    <h2><i class=\"fa fa-map-marker\"></i> Address </h2>\n                    <p> 106 &amp; 107, 1st Floor, Jyoti Shikhar Tower, <br> District Centre, Janakpuri ,<br> New Delhi - 110058, India</p>\n               </div>\n               \n             <div class=\"contact-phone\">\n                    <h2><i class=\"fa fa-mobile\"></i> Mobile </h2>\n                    <p>  +91 9910130340 </p>\n               </div>\n               \n             <div class=\"contact-email\">\n                    <h2><i class=\"fa fa-envelope\"></i> Email</h2>\n                    <p>  <a href=\"mailto:sanjay@deligence.com\"> sanjay@deligence.com </a> </p>\n               </div>\n \n          </div>\n       </div>\n       <div class=\"col-sm-6\">\n         <h4>Stay Connected</h4>\n         <div class=\"blue-block \">\n       <form>    \n    <div class=\"form-group\">\n        <label>Name</label>\n        <input class=\"form-control\" placeholder=\"Your Name\" type=\"text\">\n    </div>\n    \n      <div class=\"form-group\">\n        <label>Email</label>\n        <input class=\"form-control valid\" placeholder=\"Your Email\" type=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label>Mobile</label>\n        <input class=\"form-control\" placeholder=\"Your Mobile No.\" type=\"text\">\n    </div>\n   \n    <div class=\"form-group\">\n        <label>Message</label>\n       <textarea class=\"form-control\"></textarea>\n    </div>\n    <div class=\"center-block\"><button type=\"submit\" class=\"btn submit-btn\">SUBMIT</button></div>\n</form>\n         </div>\n       </div>\n     </div>\n   </div> \n   \n   <div class=\"map\">\n     <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.026570991266!2d77.07993466516399!3d28.62896573241928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf19087279%3A0x5e3329ce2a459e33!2sJyothi+Shikhar+Tower%2C+Professor+Joginder+Singh+Marg%2C+Janakpuri+District+Center%2C+Janakpuri%2C+New+Delhi%2C+Delhi+110058!5e0!3m2!1sen!2sin!4v1493268975898\" style=\"border:0\" allowfullscreen=\"\" height=\"400\" frameborder=\"0\" width=\"100%\"></iframe>\n   </div>\n    \n </div>\n"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "PxRsE7pcHrugWdged",
			"name" : "Our Blog Sidbar 2",
			"type" : "htmlblock",
			"position" : "sidebar",
			"showTitle" : false,
			"menuItems" : [
				"CToCHY38NchyEccMe"
			],
			"moduleClass" : "ourBlogSidbar",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "3",
				"html" : "<div class=\"blog-sidebar\">\n<div class=\"recent-post widget\">\n             <h2>Recent Posts</h2>\n             \n             <ul>\n\t\t\t\t\t<li>\n\t\t\t\t      <a href=\"#\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a>\n                      <span class=\"post-date\"><i class=\"fa fa-calendar\"></i>March 29, 2017</span>\n\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t \t        <a href=\"#\">Aenean commodo ligula eget dolor</a>\n                          <span class=\"post-date\"><i class=\"fa fa-calendar\"></i>March 29, 2017</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t         <a href=\"#\"> Etiam ultricies nisi vel augue</a>\n                           <span class=\"post-date\"><i class=\"fa fa-calendar\"></i>March 29, 2017</span>\n\t\t\t\t\t\t</li>\n                        \n                        \t<li>\n\t\t\t\t          <a href=\"#\">Aenean commodo ligula eget dolor</a>\n                            <span class=\"post-date\"><i class=\"fa fa-calendar\"></i>March 29, 2017</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t        <a href=\"#\"> Etiam ultricies nisi vel augue</a>\n                         <span class=\"post-date\"><i class=\"fa fa-calendar\"></i>March 29, 2017</span>\n\t\t\t\t\t\t</li>\n\t\t\n\t\t\t\t</ul>\n                </div>\n</div>"
			},
			"trash" : true,
			"createdAt" : new Date()
		},
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
			"_id" : "sau4un2XnpBgxzsmf",
			"name" : "Quick Links",
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
			"_id" : "N9N47y44967jPymBR",
			"name" : "Our Blog banner",
			"type" : "htmlblock",
			"position" : "utility",
			"showTitle" : false,
			"menuItems" : [
				"mDopsGQLGakQJWwcf",
				"CToCHY38NchyEccMe"
			],
			"moduleClass" : "internal-banner int-banner-img",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : 12,
				"html" : "<div>\n<h2>Our Blog</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"index.html\">Home</a></li>\n                  <li class=\"active\">Blog</li>\n             </ul>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date()
		},
		{
			"_id" : "oyJqiwemiWingkcX5",
			"name" : "LEGAL",
			"type" : "menumodule",
			"position" : "mainFooter",
			"showTitle" : true,
			"menuItems" : [ ],
			"moduleClass" : "legal-links",
			"allPages" : true,
			"moduleData" : {
				"gridLength" : "6",
				"menuItem" : "a4D369kAXSWfnrTqM"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "aupQALdspGBe8trvQ",
			"name" : "Categories",
			"type" : "menumodule",
			"position" : "sidebar",
			"showTitle" : true,
			"menuItems" : [
				"mDopsGQLGakQJWwcf",
				"CToCHY38NchyEccMe"
			],
			"moduleClass" : "categories-post widget",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"menuItem" : "57E9282t68emxeFT4"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		},
		{
			"_id" : "Sfi2X4C6u9CYikBWS",
			"name" : "RECENT POSTS",
			"type" : "menumodule",
			"position" : "sidebar",
			"showTitle" : true,
			"menuItems" : [
				"mDopsGQLGakQJWwcf",
				"CToCHY38NchyEccMe"
			],
			"moduleClass" : "recent-post widget",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"menuItem" : "dMwW7XdXrhb43etGE"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : new Date()
		}
	];
	homepageListTags=[
		{
			"_id" : "eAhjeGCkxYdD5ggyh",
			"title" : "Blog Detail",
			"alias" : "blog-detail",
			"desc" : "Blog Detail",
			"metaKeyword" : "Blog Detail",
			"metaDescription" : "Blog Detail",
			"createdAt" : new Date(),
			"updateAt" : new Date(),
			"status" : 1,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "C38ASQc42Nhpgyrxu",
			"title" : "blog",
			"alias" : "blog",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "XcqDzMxWSQGmKB8vz",
			"title" : "insaurance",
			"alias" : "insaurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		},
		{
			"_id" : "b8T3f4YAYfeiPMGu6",
			"title" : "LIFE INSURANCE",
			"alias" : "life-insurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "KYjfJkbgimWbEbmiC"
		}
	]

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
	_.each(homepageListTags,function(listTag){
		if(PanoplyCMSCollections.Tags.find({_id:listTag._id}).count() == 0){
			PanoplyCMSCollections.Tags.insert(listTag);
		}
	});
}