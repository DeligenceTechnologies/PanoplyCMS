// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sample-data-tests.js for an example of importing.
if(Meteor.isServer){
	
	export const name = 'sample-data';

	homepageListCategory=[
		{
			"_id" : "wmPS6xzbbTmhwA889",
			"title" : "About us",
			"alias" : "about-us",
			"createdAt" : new Date(),
			"status" : 1,
			"trash" : false,
			"column" : "1",
			"ownerId" : "PgdiH34LCYaEPtMn9"
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
			"status" : 1,
			"trash" : false,
			"ownerId" : "KYjfJkbgimWbEbmiC",
			"column" : "2"
		},
		{
			"_id" : "bySxAvLs2WS2XNQ5i",
			"title" : "Side bar categories",
			"alias" : "side-bar-categories",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"column" : "2",
			"ownerId" : "PgdiH34LCYaEPtMn9"
		}
	];

	homepageListArticle=[
		{
			"_id" : "xdrSMwzaGaw4KBbPL",
			"title" : "LIFE INSURANCE",
			"alias" : "life-insurance",
			"category" : "bySxAvLs2WS2XNQ5i",
			"tags" : [
				"b8T3f4YAYfeiPMGu6"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"/services/service-img1.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "LIFE INSURANCE",
			"metaDescription" : "LIFE INSURANCE",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
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
			"updateAt" : "",
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
			"updateAt" : "",
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
			"updateAt" : "",
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
			"updateAt" : "",
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
		},
		{
			"_id" : "vDvjt3ddc3vWSHFiQ",
			"title" : "Travel Insurance",
			"alias" : "travel-insurance",
			"category" : "bySxAvLs2WS2XNQ5i",
			"tags" : [
				"BoJY6CJj8tiXkm5dk"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"/services/service-img2.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "Travel Insurance",
			"metaDescription" : "Travel Insurance",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "iv7MsJxH2ypXwCiTR",
			"title" : "Home Insurance",
			"alias" : "home-insurance",
			"category" : "bySxAvLs2WS2XNQ5i",
			"tags" : [
				"mtRXQ9FoaNshCQJXF"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"/services/service-img3.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "Home Insurance",
			"metaDescription" : "Home Insurance",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "Pk7SfSEDhyYdW3FCE",
			"title" : "Health Insurance",
			"alias" : "health-insurance",
			"category" : "bySxAvLs2WS2XNQ5i",
			"tags" : [
				"maTzEptA6sHeD7ySF"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"/services/service-img4.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "Health Insurance ",
			"metaDescription" : "Health Insurance",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "9hp7nRpYfd4AQh29x",
			"title" : "Business Insurance",
			"alias" : "business-insurance",
			"category" : "bySxAvLs2WS2XNQ5i",
			"tags" : [
				"xGtYwRqPmRxihFSuS"
			],
			"article" : "<div class=\"section-space services-style1\">\n<div class=\"container\">\n                \n        <div class=\"service-detail\">\n             <div class=\"row\">\n               <div class=\"col-sm-6\"><figure><img src=\"/services/service-img6.jpg\"></figure></div>\n               <div class=\"col-sm-6\">\n                   <div class=\"list-style\">\n               <ul>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                 <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                 <li>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</li>\n               \n               </ul>\n             </div>\n              \n               </div>\n             </div>\n             \n             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>\n               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n             \n            \n        </div>\n    </div>\n\n</div>",
			"metaKeyword" : "Business Insurance",
			"metaDescription" : "Business Insurance",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "ccS2qYW8JjemHc4Zs",
			"title" : "WHO WE ARE",
			"alias" : "who-we-are",
			"category" : "wmPS6xzbbTmhwA889",
			"tags" : [
				"WP4KeXAQx8Wvij369"
			],
			"article" : "<div class=\"container\">\t<div class=\"section-heading heading-center animated fadeInLeft\">\n       \n        <h2></h2>\n        <div class=\"seperator\"></div>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n    </div>\n    <div class=\"about-content\">\t<p class=\"text-center animated fadeInLeft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n    </div>\n</div>",
			"metaKeyword" : "about Us",
			"metaDescription" : "about us",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"trash" : false,
			"ownerId" : "PgdiH34LCYaEPtMn9"
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
		}
	];

	homepageListMenuItems=[
		{
			"_id" : "T8sgLe9oEToTApsfZ",
			"title" : "Home",
			"desc" : "module type",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "category",
			"MenuItemTypeId" : "KHQBBYzHo4niSBbcT",
			"parentId" : "",
			"homepage" : true,
			"createdAt" : new Date(),
			"alias" : "home",
			"trash" : false,
			"target" : "0",
			"link" : ""
		},
		{
			"_id" : "NWwGpMkjoCmehFegb",
			"title" : "About Us",
			"desc" : "module type",
			"mainParentId" : "dGBtw92nTceAkThKq",
			"MenuItemType" : "article",
			"MenuItemTypeId" : "ccS2qYW8JjemHc4Zs",
			"parentId" : "",
			"homepage" : false,
			"createdAt" : new Date(),
			"alias" : "about-us",
			"trash" : false,
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
			"target" : "0",
			"link" : ""
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
			"link" : ""
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
			"target" : "0",
			"link" : ""
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
			"target" : "0",
			"link" : ""
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
			"MenuItemType" : "article",
			"MenuItemTypeId" : "xdrSMwzaGaw4KBbPL",
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
			"MenuItemType" : "article",
			"MenuItemTypeId" : "vDvjt3ddc3vWSHFiQ",
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
			"MenuItemType" : "article",
			"MenuItemTypeId" : "iv7MsJxH2ypXwCiTR",
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
			"MenuItemType" : "article",
			"MenuItemTypeId" : "Pk7SfSEDhyYdW3FCE",
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
			"MenuItemType" : "article",
			"MenuItemTypeId" : "9hp7nRpYfd4AQh29x",
			"link" : "",
			"parentId" : "",
			"alias" : "business-insurance",
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
				"html" : "<div class=\"footer-social\">\n              <h3><strong>Connect with us</strong></h3>\n              <ul>\n\t\t\t\t<li><a target=\"_blank\" href=\"https://www.facebook.com/deligencetechnologies\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t<li><a target=\"_blank\" href=\"https://twitter.com/deligence1\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t<li><a target=\"_blank\" href=\"https://www.linkedin.com/company/deligencetechnologies\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t<li><a target=\"_blank\" href=\"skype:sanjay.deligence\"><i class=\"fa fa-skype\"></i></a></li>\n\t\t\t  </ul>\n           </div>"
			},
			"menuItems" : [ ],
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : "",
			"moduleClass" : "Footer"
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
			"updatedAt" : "",
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
				"html" : "<div class=\"top-left\">\n                    <ul class=\"top-contact-info\">\n                        <li><i class=\"fa fa-phone\"></i>+91 9910130340</li>    \n                        <li><i class=\"fa fa-envelope\"></i><a href=\"mailto:sanjay@deligence.com\">sanjay@deligence.com</a></li>    \n                        <li><i class=\"fa fa-globe\"></i>Janakpuri, New Delhi - 110058, India</li>    \n                    </ul>   \n                 </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
				"html" : "\n                    <ul class=\"social-icons text-right\">\n                     <li><a target=\"_blank\" href=\"https://www.facebook.com/deligencetechnologies\"><i aria-hidden=\"true\" class=\"fa fa-facebook\"></i></a></li>\n                     <li><a target=\"_blank\" href=\"https://twitter.com/deligence1\"><i aria-hidden=\"true\" class=\"fa fa-twitter\"></i></a></li>\n                     <li><a target=\"_blank\" href=\"https://www.linkedin.com/company/deligencetechnologies\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                     <li><a target=\"_blank\" href=\"skype:sanjay.deligence\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a></li>\n                   </ul>\n              "
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
			"updatedAt" : ""
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
				"html" : "<div class=\"\">\n<h2>ABOUT US</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"/ \">Home</a></li>\n                  <li class=\"active\">About Us</li>\n             </ul>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "EPSbvPRQ4TKBbCZpN",
			"name" : "WHO WE ARE",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "feature",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"container\">\n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span>About Us</span>\n            <h2>WHO WE ARE</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        <div class=\"about-content\">\n          <p class=\"text-center animated fadeInLeft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n          \n          <div class=\"counter-wrap\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-users count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">200</h3>\n                   <p>Team Members</p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-globe count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">80</h3>\n                   <p>COUNTRIES</p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-smile-o count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">21930</h3>\n                   <p> Happy Customers </p>\n               </div>\n            </div>\n            <div class=\"col-sm-3\">\n               <div class=\"work-counter animated fadeInRight\">\n                   <i class=\"fa fa-coffee count-icon\" aria-hidden=\"true\"></i>\n                   <h3 class=\"Count\">90</h3>\n                   <p>Coffee</p>\n               </div>\n            </div>\n          </div>\n        </div>\n        \n           <div class=\"about-tagline animated fadeInLeft\">\n             <p><span>We're</span> Your ONE STOP SHOP <br>\n             <span>for</span> ALL YOUR INSURANCE NEEDS</p>\n           </div>\n       </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "tKfsfJCXjJRqKSPwg",
			"name" : "01. ABOUT US",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "mainTop",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"why-choose-us\">\n<div class=\"row\">\n       <div class=\"col-sm-6\">\n         <div class=\"why-us-leftside animated fadeInLeft\">\n           <div class=\"section-heading heading-left\">\n                <span>About Us</span>\n                <h2>Why Choose Us ?</h2>\n                <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n            </div>\n         </div>\n       </div>\n       <div class=\"col-sm-6\">\n         <div class=\"why-us-right animated fadeInRight\">\n                            <div class=\"block-1 color-1\">\n                               <div class=\"icon-1 \"><i class=\"fa fa-trophy\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>01. ABOUT US</h1>\n                                 <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-2\">\n                               <div class=\"icon-1\"><i class=\"fa fa-suitcase\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>02. Experienced</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-3\">\n                               <div class=\"icon-1\"><i class=\"fa fa-eye\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>03. Our Vision</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                            <div class=\"block-1 color-4\">\n                               <div class=\"icon-1\"><i class=\"fa fa-file\"></i></div>\n                               <div class=\"block-info\">\n                                 <h1>04. Business Plan</h1>\n                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>\n                               </div>\n                            </div>\n                            \n                        </div>\n       </div>\n     </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "PrhfHZ8cKJ47njZEn",
			"name" : "Our Services",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ",
				"KzZZECf8FZBPuYZAu"
			],
			"moduleClass" : "mainTop",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"container\">\n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span>Our Services</span>\n            <h2>What We Do</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        \n        <div class=\"our-services animated fadeInUp\">\n           <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-1.png\"></div>\n                        <div class=\"title\"> <h3>Life Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-2.png\"></div>\n                        <div class=\"title\"> <h3>Travel Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-3.png\"></div>\n                        <div class=\"title\"> <h3>Home Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-4.png\"></div>\n                        <div class=\"title\"> <h3>Health Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-5.png\"></div>\n                        <div class=\"title\"> <h3>Business Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"service-box\">\n                       <div class=\"icon\"><img src=\"images/insurance-6.png\"></div>\n                        <div class=\"title\"> <h3>Car Insurance </h3> </div>\n                        <div class=\"service-info\"> <p>Lorem Ipsum is simply dummy text of the print been the industry's standard.</p></div>\n                    </div>\n                </div>\n                \n              </div>\n           </div>\n        </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "a5rghXvjjNNjvGtr9",
			"name" : "Our Blog",
			"type" : "htmlblock",
			"position" : "contentTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "mainBottom",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"section-space blog-wrap\"> \n<div class=\"section-heading heading-center animated fadeInLeft\">\n            <span></span>\n            <h2>Our Blog</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n       \n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
			"updatedAt" : ""
		},
		{
			"_id" : "5dZHMFQ2PDSqCFiyb",
			"name" : "Our Team",
			"type" : "htmlblock",
			"position" : "mainBottom",
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
			"updatedAt" : ""
		},
		{
			"_id" : "CHF8egPKLoXSamded",
			"name" : "Roberta ball",
			"type" : "htmlblock",
			"position" : "mainTop",
			"showTitle" : false,
			"menuItems" : [
				"T8sgLe9oEToTApsfZ"
			],
			"moduleClass" : "testinomial",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"row section-space testimonial-wrap parallax\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n              <div class=\"owl-carousel\" id=\"testimonial\">\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"customNavigation\">\n                 <a class=\"prev-arrow\"><i class=\"fa fa-chevron-left\"></i></a>\n                 <a class=\"next-arrow\"><i class=\"fa fa-chevron-right\"></i></a>\n             </div>\n           </div>           \n      </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
				"html" : "<div class=\"section-space our-partner\">\n<div class=\"section-heading heading-center\">\n            <span></span>\n            <h2>Our Partner</h2>\n            <div class=\"seperator\"></div>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>\n        </div>\n        \n          <div class=\"owl-carousel\" id=\"clients\">\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n           <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/deligence.png\" alt=\"\"></a></div>\n          <div class=\"item partner-logo\"><a href=\"#\"><img src=\"images/panoply.png\" alt=\"\"></a></div>\n      </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
				"html" : "<div class=\"\">\n<h2>Our Services</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"/ \">Home</a></li>\n                  <li class=\"active\">Services</li>\n             </ul>\n</div>\n"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
			"updatedAt" : ""
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
				"html" : "<div class=\"\">\n<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Our Services</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"/ \">Home</a></li>\n                  <li><a href=\"/services\">Services</a></li>\n                  <li class=\"active\">Life Insurance</li>\n             </ul>\n          </div>\n        </div>\n</div></div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
				"html" : "<div class=\"internal-banner int-banner-img\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h2>Contact Us</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"/ \">Home</a></li>\n                  <li class=\"active\">Contact</li>\n             </ul>\n          </div>\n        </div>\n      </div>\n        \n    </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "6es5uaLRCjhetbHgE",
			"name" : "Contact Us",
			"type" : "htmlblock",
			"position" : "feature",
			"showTitle" : false,
			"menuItems" : [
				"kf34w98iuQHqoMbwq"
			],
			"moduleClass" : "contactUs",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"section-space contact-us\">\n  \t<div class=\"container\">\n        <div class=\"contact-info\">\n            <h4>Our Office Address</h4>\n            <div class=\"row\">\n      \t\t\t<div class=\"col-sm-4\">\n        \t\t\t<div class=\"contact-address\">\n                    \t<i class=\"fa fa-map-marker\"></i> \n                    \t<h2>Address </h2>\n                    \t<p> Deligence Technologies Pvt. Ltd.\n106 &amp; 107, 1st Floor, Jyoti Shikhar Tower, <br> District Centre, Janakpuri ,<br> New Delhi - 110058, India</p>\n               \t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"col-sm-4\">\n        \t\t\t<div class=\"contact-phone\">\n        \t\t\t\t<i class=\"fa fa-mobile\"></i> \n                    \t<h2>Mobile </h2>\n                    \t<p>  +91 9910130340 </p>\n               \t\t</div>\n      \t\t\t</div>\n      \t\t\t<div class=\"col-sm-4\">\n         \t\t\t<div class=\"contact-email\">\n\t         \t\t\t<i class=\"fa fa-envelope\"></i> \n\t                \t<h2>Email</h2>\n\t                    <p>  <a href=\"mailto:sanjay@deligence.com\"> sanjay@deligence.com </a> </p>\n\t               </div>\n\t      \t\t</div>\n\t\t\t</div>\n        </div>\n    </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
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
				"html" : "<div>\n<h2>Our Blog</h2>\n            <ul class=\"breadcrumb\">\n                  <li><a href=\"/ \">Home</a></li>\n                  <li class=\"active\">Blog</li>\n             </ul>\n</div>"
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
			"updatedAt" : ""
		},
		{
			"_id" : "aupQALdspGBe8trvQ",
			"name" : "Categories",
			"type" : "menumodule",
			"position" : "sidebar",
			"showTitle" : true,
			"menuItems" : [
				"mDopsGQLGakQJWwcf"
			],
			"moduleClass" : "categories-post widget",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"menuItem" : "57E9282t68emxeFT4"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "zCPpTpgqR7vydteXq",
			"name" : "Contact Us Map",
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
				"html" : "<div class=\"section-space contact-us\">   \n   <div class=\"map\">\n     <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.12770846077!2d77.0817619!3d28.6288052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x368abbd9af45e487!2sDeligence+Technologies+Private+Limited!5e0!3m2!1sen!2sin!4v1499085529446\" style=\"border:0\" allowfullscreen=\"\" height=\"400\" frameborder=\"0\" width=\"100%\"></iframe>\n   </div>\n    \n </div>"
			},
			"trash" : false,
			"createdAt" : new Date(),
			"updatedAt" : ""
		},
		{
			"_id" : "a8pDnrWqqBfC57Nhj",
			"name" : "Robert Dell (about us page)",
			"type" : "htmlblock",
			"position" : "extension",
			"showTitle" : false,
			"menuItems" : [
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "about us",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"row section-space testimonial-wrap parallax\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n              <div class=\"owl-carousel\" id=\"testimonial\">\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n                  <div class=\"item\">\n                     <div class=\"single-testimonial\">\n                       <p class=\"quot\"><i class=\"fa fa-quote-left\"></i></p>\n                       <p class=\"comment\">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis .</p>\n                       <p class=\"name\"> - Roberta  Ball</p>\n                      <p class=\"job\">Director</p>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"customNavigation\">\n                 <a class=\"prev-arrow\"><i class=\"fa fa-chevron-left\"></i></a>\n                 <a class=\"next-arrow\"><i class=\"fa fa-chevron-right\"></i></a>\n             </div>\n           </div>           \n      </div>"
			},
			"trash" : false,
			"createdAt" : new Date()
		},
		{
			"_id" : "Zgs4s9zBJTgendo8c",
			"name" : "Who we are icos",
			"type" : "htmlblock",
			"position" : "contentBottom",
			"showTitle" : false,
			"menuItems" : [
				"NWwGpMkjoCmehFegb"
			],
			"moduleClass" : "aboutUs-icon",
			"allPages" : false,
			"moduleData" : {
				"gridLength" : "12",
				"html" : "<div class=\"container\">\n    <div class=\"about-content\">\n      \t<div class=\"counter-wrap\">\n          \t<div class=\"row\">\n            \t<div class=\"col-sm-3\">\n              \t\t<div class=\"work-counter animated fadeInRight\">\n\t                   <i class=\"fa fa-users count-icon\" aria-hidden=\"true\"></i>\n\t                   <h3 class=\"Count\">200</h3>\n\t                   <p>Team Members</p>\n\t               </div>\n\t            </div>\n\t            <div class=\"col-sm-3\">\n\t               <div class=\"work-counter animated fadeInRight\">\n\t                   <i class=\"fa fa-globe count-icon\" aria-hidden=\"true\"></i>\n\t                   <h3 class=\"Count\">80</h3>\n\t                   <p>COUNTRIES</p>\n\t               </div>\n\t            </div>\n\t            <div class=\"col-sm-3\">\n\t               <div class=\"work-counter animated fadeInRight\">\n\t                   <i class=\"fa fa-smile-o count-icon\" aria-hidden=\"true\"></i>\n\t                   <h3 class=\"Count\">21930</h3>\n\t                   <p> Happy Customers </p>\n\t               </div>\n\t            </div>\n\t            <div class=\"col-sm-3\">\n\t               <div class=\"work-counter animated fadeInRight\">\n\t                   <i class=\"fa fa-coffee count-icon\" aria-hidden=\"true\"></i>\n\t                   <h3 class=\"Count\">90</h3>\n\t                   <p>Coffee</p>\n\t               </div>\n\t            </div>\n          \t</div>\n        </div>\n    \t<div class=\"about-tagline animated fadeInLeft\">\n             <p><span>We're</span> Your ONE STOP SHOP <br>\n             <span>for</span> ALL YOUR INSURANCE NEEDS</p>\n       </div>\n   </div>\n</div>"
			},
			"trash" : false,
			"createdAt" : new Date()
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
			"updateAt" : "",
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
		},
		{
			"_id" : "BoJY6CJj8tiXkm5dk",
			"title" : "Travel Insurance",
			"alias" : "travel-insurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "mtRXQ9FoaNshCQJXF",
			"title" : "Home Insurance",
			"alias" : "home-insurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "maTzEptA6sHeD7ySF",
			"title" : "Health Insurance",
			"alias" : "health-insurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "xGtYwRqPmRxihFSuS",
			"title" : "Business Insurance",
			"alias" : "business-insurance",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "PgdiH34LCYaEPtMn9"
		},
		{
			"_id" : "WP4KeXAQx8Wvij369",
			"title" : "About Us",
			"alias" : "about-us",
			"desc" : "",
			"metaKeyword" : "",
			"metaDescription" : "",
			"createdAt" : new Date(),
			"updateAt" : "",
			"status" : 1,
			"ownerId" : "PgdiH34LCYaEPtMn9"
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