<<<<<<< HEAD:webadmin/fitcrackFE/dist/static/js/27.42e1dc931aa2ee125881.js
webpackJsonp([27],{489:function(t,a,s){"use strict";function r(t){s(871)}Object.defineProperty(a,"__esModule",{value:!0});var e=s(639),i=s(873),o=s(39),n=r,l=o(e.a,i.a,!1,n,"data-v-4f79ef4a",null);a.default=l.exports},639:function(t,a,s){"use strict";a.a={methods:{switchAccount:function(){sessionStorage.setItem("loginRedirect",this.$route.query.accessing),this.$store.dispatch("signOut")}}}},871:function(t,a,s){var r=s(872);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(461)("9f279928",r,!0,{})},872:function(t,a,s){a=t.exports=s(460)(!0),a.push([t.i,".container[data-v-4f79ef4a]{margin:0 auto;max-width:800px}.illust[data-v-4f79ef4a]{width:80%;max-width:300px;margin:2em auto}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/errorPages/unauthorized.vue"],names:[],mappings:"AACA,4BACE,cAAe,AACf,eAAiB,CAClB,AACD,yBACE,UAAW,AACX,gBAAiB,AACjB,eAAiB,CAClB",file:"unauthorized.vue",sourcesContent:["\n.container[data-v-4f79ef4a] {\n  margin: 0 auto;\n  max-width: 800px;\n}\n.illust[data-v-4f79ef4a] {\n  width: 80%;\n  max-width: 300px;\n  margin: 2em auto;\n}\n"],sourceRoot:""}])},873:function(t,a,s){"use strict";var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center mt-8 pa-8 container"},[s("h1",[t._v("Sorry "+t._s(t.$store.state.user.userData.username)+", I'm afraid I can't do that...")]),t._v(" "),s("svg",{staticClass:"illust",attrs:{viewBox:"0 0 867 468",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0)"}},[s("path",{attrs:{d:"M45.6 429.28a5 5 0 011.65-.28H818a5 5 0 011.62.27l43.9 15c5.35 1.83 4.03 9.73-1.62 9.73H4.41c-5.63 0-6.96-7.86-1.65-9.72l42.84-15z",fill:"#000","fill-opacity":".15"}}),t._v(" "),s("rect",{attrs:{x:"172.5",y:"184.5",width:"55",height:"252",rx:"12.5",fill:"#D78CA7",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"7.5",y:"-7.5",width:"55",height:"252",rx:"12.5",transform:"matrix(-1 0 0 1 701.5 190)",fill:"#D78CA7",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"119.5",y:"313.5",width:"628",height:"57",rx:"12.5",fill:"#F3D2DE",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",fill:"#F3D2DE"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",fill:"url(#paint0_linear)"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",fill:"#F3D2DE"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",fill:"url(#paint1_linear)"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"65.5",y:"6.5",width:"732",height:"226",rx:"12.5",fill:"#F3F3F3",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M198 14h72l-98 211h-72l98-211zM530 14h72l-98 211h-72l98-211zM364 14h72l-98 211h-72l98-211zM696 14h72l-98 211h-72l98-211z",fill:"#FF7168"}})]),t._v(" "),s("defs",[s("linearGradient",{attrs:{id:"paint0_linear",x1:"132.75",y1:"192",x2:"132.75",y2:"454",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7","stop-opacity":"0"}})],1),t._v(" "),s("linearGradient",{attrs:{id:"paint1_linear",x1:"733.75",y1:"190",x2:"733.75",y2:"452",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7","stop-opacity":"0"}})],1),t._v(" "),s("clipPath",{attrs:{id:"clip0"}},[s("path",{attrs:{fill:"#fff",d:"M0 0h867v468H0z"}})])],1)]),t._v(" "),s("p",[t._v("\n    Your role doesn't permit you to access "),s("strong",[t._v(t._s(t.$route.query.accessing||"that route"))]),t._v("."),s("br"),t._v("\n    If you are not "),s("strong",[t._v(t._s(t.$store.state.user.userData.username))]),t._v(", you can try to sign in with another account.\n  ")]),t._v(" "),s("v-btn",{staticClass:"mb-4",attrs:{color:"primary"},on:{click:t.switchAccount}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("\n      mdi-account-switch\n    ")]),t._v("\n    Use another account\n  ")],1),t._v(" "),s("p",[t._v("\n    Otherwise, please contact an admin and ask for the "+t._s(t.$route.query.missing)+" permission.\n  ")])],1)},e=[],i={render:r,staticRenderFns:e};a.a=i}});
//# sourceMappingURL=27.42e1dc931aa2ee125881.js.map
=======
webpackJsonp([27],{488:function(t,a,s){"use strict";function r(t){s(825)}Object.defineProperty(a,"__esModule",{value:!0});var e=s(626),i=s(827),o=s(32),n=r,l=o(e.a,i.a,!1,n,"data-v-4f79ef4a",null);a.default=l.exports},626:function(t,a,s){"use strict";a.a={methods:{switchAccount:function(){sessionStorage.setItem("loginRedirect",this.$route.query.accessing),this.$store.dispatch("signOut")}}}},825:function(t,a,s){var r=s(826);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(460)("9f279928",r,!0,{})},826:function(t,a,s){a=t.exports=s(459)(!0),a.push([t.i,".container[data-v-4f79ef4a]{margin:0 auto;max-width:800px}.illust[data-v-4f79ef4a]{width:80%;max-width:300px;margin:2em auto}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/errorPages/unauthorized.vue"],names:[],mappings:"AACA,4BACE,cAAe,AACf,eAAiB,CAClB,AACD,yBACE,UAAW,AACX,gBAAiB,AACjB,eAAiB,CAClB",file:"unauthorized.vue",sourcesContent:["\n.container[data-v-4f79ef4a] {\n  margin: 0 auto;\n  max-width: 800px;\n}\n.illust[data-v-4f79ef4a] {\n  width: 80%;\n  max-width: 300px;\n  margin: 2em auto;\n}\n"],sourceRoot:""}])},827:function(t,a,s){"use strict";var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center mt-8 pa-8 container"},[s("h1",[t._v("Sorry "+t._s(t.$store.state.user.userData.username)+", I'm afraid I can't do that...")]),t._v(" "),s("svg",{staticClass:"illust",attrs:{viewBox:"0 0 867 468",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0)"}},[s("path",{attrs:{d:"M45.6 429.28a5 5 0 011.65-.28H818a5 5 0 011.62.27l43.9 15c5.35 1.83 4.03 9.73-1.62 9.73H4.41c-5.63 0-6.96-7.86-1.65-9.72l42.84-15z",fill:"#000","fill-opacity":".15"}}),t._v(" "),s("rect",{attrs:{x:"172.5",y:"184.5",width:"55",height:"252",rx:"12.5",fill:"#D78CA7",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"7.5",y:"-7.5",width:"55",height:"252",rx:"12.5",transform:"matrix(-1 0 0 1 701.5 190)",fill:"#D78CA7",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"119.5",y:"313.5",width:"628",height:"57",rx:"12.5",fill:"#F3D2DE",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",fill:"#F3D2DE"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",fill:"url(#paint0_linear)"}}),t._v(" "),s("path",{attrs:{d:"M212.75 184.5h-46.02a12.5 12.5 0 00-11.4 7.35l-113.97 252a12.5 12.5 0 0011.39 17.65h46.02a12.5 12.5 0 0011.4-7.35l113.97-252a12.5 12.5 0 00-11.39-17.65z",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",fill:"#F3D2DE"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",fill:"url(#paint1_linear)"}}),t._v(" "),s("path",{attrs:{d:"M653.75 182.5h46.02a12.5 12.5 0 0111.4 7.35l113.97 252a12.5 12.5 0 01-11.39 17.65h-46.02a12.5 12.5 0 01-11.4-7.35l-113.97-252a12.5 12.5 0 0111.39-17.65z",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("rect",{attrs:{x:"65.5",y:"6.5",width:"732",height:"226",rx:"12.5",fill:"#F3F3F3",stroke:"#DC2365","stroke-width":"15"}}),t._v(" "),s("path",{attrs:{d:"M198 14h72l-98 211h-72l98-211zM530 14h72l-98 211h-72l98-211zM364 14h72l-98 211h-72l98-211zM696 14h72l-98 211h-72l98-211z",fill:"#FF7168"}})]),t._v(" "),s("defs",[s("linearGradient",{attrs:{id:"paint0_linear",x1:"132.75",y1:"192",x2:"132.75",y2:"454",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7","stop-opacity":"0"}})],1),t._v(" "),s("linearGradient",{attrs:{id:"paint1_linear",x1:"733.75",y1:"190",x2:"733.75",y2:"452",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7"}}),t._v(" "),s("stop",{attrs:{offset:".35","stop-color":"#D78CA7","stop-opacity":"0"}})],1),t._v(" "),s("clipPath",{attrs:{id:"clip0"}},[s("path",{attrs:{fill:"#fff",d:"M0 0h867v468H0z"}})])],1)]),t._v(" "),s("p",[t._v("\n    Your role doesn't permit you to access "),s("strong",[t._v(t._s(t.$route.query.accessing||"that route"))]),t._v("."),s("br"),t._v("\n    If you are not "),s("strong",[t._v(t._s(t.$store.state.user.userData.username))]),t._v(", you can try to sign in with another account.\n  ")]),t._v(" "),s("v-btn",{staticClass:"mb-4",attrs:{color:"primary"},on:{click:t.switchAccount}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("\n      mdi-account-switch\n    ")]),t._v("\n    Use another account\n  ")],1),t._v(" "),s("p",[t._v("\n    Otherwise, please contact an admin and ask for the "+t._s(t.$route.query.missing)+" permission.\n  ")])],1)},e=[],i={render:r,staticRenderFns:e};a.a=i}});
//# sourceMappingURL=27.c5ac9d81be96a6116334.js.map
>>>>>>> dev:webadmin/fitcrackFE/dist/static/js/27.c5ac9d81be96a6116334.js
