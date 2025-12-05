export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/imgs/footer-logo.svg","assets/imgs/home-back.jpg","assets/imgs/img1.jpg","assets/imgs/logo.svg","assets/imgs/p.jpeg","assets/imgs/patil-high-resolution-logo-white-transparent (1).svg","assets/imgs/patil.svg","assets/imgs/profile-photo.jpg","assets/imgs/profile.png","assets/imgs/scroll_arrow.png","assets/imgs/signature-white.png","assets/imgs/svg-icons/android.svg","assets/imgs/svg-icons/firebase.svg","assets/imgs/svg-icons/flutter.svg","assets/imgs/svg-icons/gcp.svg","assets/imgs/svg-icons/iOS.svg","assets/imgs/svg-icons/nodejs.svg","assets/imgs/svg-icons/php.svg","assets/imgs/svg-icons/react.svg","assets/imgs/svg-icons/svelte.svg","assets/imgs/svg-icons/trace.svg","assets/imgs/Untitled.png","assets/imgs/work-back/grillzzy/cover.jpg","assets/imgs/work-back/kic/cover.jpg","assets/imgs/work-back/kwa/cover.jpg","assets/imgs/work-back/lcml/cover.jpg","assets/imgs/work-back/lcml/image.png","assets/imgs/work-back/slickscroll/cover.jpg","assets/imgs/work-back/v1/cover.jpg","data/data.json","data/work-data.json","favicon.ico","robots.txt","sitemap.xml"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".json":"application/json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.C4PToQhw.js","app":"_app/immutable/entry/app.0f7f3l8B.js","imports":["_app/immutable/entry/start.C4PToQhw.js","_app/immutable/chunks/entry.eRhOlaKv.js","_app/immutable/chunks/scheduler.BITu6n1W.js","_app/immutable/entry/app.0f7f3l8B.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.BITu6n1W.js","_app/immutable/chunks/index.Dc_fS-S_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/experience",
				pattern: /^\/api\/experience\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/experience/_server.ts.js'))
			},
			{
				id: "/api/img",
				pattern: /^\/api\/img\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/img/_server.ts.js'))
			},
			{
				id: "/api/myself",
				pattern: /^\/api\/myself\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/myself/_server.ts.js'))
			},
			{
				id: "/api/services",
				pattern: /^\/api\/services\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/services/_server.ts.js'))
			},
			{
				id: "/api/uploadthing",
				pattern: /^\/api\/uploadthing\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/uploadthing/_server.ts.js'))
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/user/_server.ts.js'))
			},
			{
				id: "/api/work",
				pattern: /^\/api\/work\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/work/_server.ts.js'))
			},
			{
				id: "/studio/[...catchall]",
				pattern: /^\/studio(?:\/(.*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
