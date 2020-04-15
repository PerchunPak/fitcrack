webpackJsonp([11],{478:function(t,e,n){"use strict";function a(t){n(775),n(777)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(613),i=n(779),o=n(32),s=a,l=o(r.a,i.a,!1,s,"data-v-1d7bb504",null);e.default=l.exports},490:function(t,e,n){"use strict";e.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},492:function(t,e,n){"use strict";var a=n(490),r=n(494),i=n(32),o=i(a.a,r.a,!1,null,null,null);e.a=o.exports},493:function(t,e,n){t.exports={default:n(500),__esModule:!0}},494:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto"},[n("v-card-title",[t.icon?n("v-icon",{attrs:{left:""}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("v-card-text",{staticClass:"contentFcTile"},[t.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):t._t("default")],2)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},495:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(497),i=a(r),o=n(493),s=a(o);e.default=function(){function t(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=(0,s.default)(t);!(a=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},496:function(t,e,n){"use strict";var a=n(510),r=n.n(a),i=n(493),o=n.n(i),s=n(495),l=n.n(s);e.a={name:"FileUploader",props:{multiple:Boolean,url:{type:String,default:this.$serverAddr},noUpload:Boolean,label:{type:String,default:"Select files"},args:{type:Object,default:function(){}}},data:function(){return{selectedFiles:[],files:null,progress:0,showProgress:!1,fileUploaded:!1}},computed:{overSizeLimit:function(){return this.selectedFiles.some(function(t){return t.size>2e9})}},methods:{uploadChange:function(t){this.progress=Math.round(100*t.loaded/t.total),console.log(this.progress)},fileChange:function(t){this.files=new FormData,this.selectedFiles=[];for(var e=0;e<t.length;e++)this.selectedFiles.push({name:t[e].name,type:t[e].type||"n/a",size:t[e].size,modified:t[e].lastModifiedDate?t[e].lastModifiedDate.toLocaleDateString():"n/a"}),this.files.append("file",t[e],t[e].name);if(this.args){var n=!0,a=!1,i=void 0;try{for(var s,c=o()(r()(this.args));!(n=(s=c.next()).done);n=!0){var u=s.value,d=l()(u,2),f=d[0],p=d[1];this.files.append(f,p)}}catch(t){a=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw i}}}this.fileUploaded=!1,this.progress=0,this.$emit("filesChanged",t)},upload:function(){var t=this;this.showProgress=!0;var e={withCredentials:!0,headers:{"Content-type":"multipart/form-data"},onUploadProgress:this.uploadChange};this.axios.post(this.url,this.files,e).then(function(e){t.fileUploaded=!0,t.$emit("uploadComplete",e.data),t.files=null}).catch(function(t){console.log(t)})}}}},497:function(t,e,n){t.exports={default:n(498),__esModule:!0}},498:function(t,e,n){n(187),n(33),t.exports=n(499)},499:function(t,e,n){var a=n(35),r=n(3)("iterator"),i=n(8);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(a(e))}},500:function(t,e,n){n(187),n(33),t.exports=n(501)},501:function(t,e,n){var a=n(5),r=n(36);t.exports=n(2).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}},507:function(t,e,n){"use strict";function a(t){n(508)}var r=n(496),i=n(514),o=n(32),s=a,l=o(r.a,i.a,!1,s,"data-v-1c1e87be",null);e.a=l.exports},508:function(t,e,n){var a=n(509);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(460)("60faad44",a,!0,{})},509:function(t,e,n){e=t.exports=n(459)(!0),e.push([t.i,".uploadInput[data-v-1c1e87be]{max-width:250px}.form[data-v-1c1e87be]{max-width:100%;text-align:center}.uploadButton[data-v-1c1e87be]{margin-top:15px}.spacer[data-v-1c1e87be]{width:10px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/fileUploader/fileUploader.vue"],names:[],mappings:"AACA,8BACE,eAAiB,CAClB,AACD,uBACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,eAAiB,CAClB,AACD,yBACE,UAAY,CACb",file:"fileUploader.vue",sourcesContent:["\n.uploadInput[data-v-1c1e87be] {\n  max-width: 250px;\n}\n.form[data-v-1c1e87be] {\n  max-width: 100%;\n  text-align: center;\n}\n.uploadButton[data-v-1c1e87be] {\n  margin-top: 15px;\n}\n.spacer[data-v-1c1e87be] {\n  width: 10px;\n}\n"],sourceRoot:""}])},510:function(t,e,n){t.exports={default:n(511),__esModule:!0}},511:function(t,e,n){n(512),t.exports=n(2).Object.entries},512:function(t,e,n){var a=n(6),r=n(513)(!0);a(a.S,"Object",{entries:function(t){return r(t)}})},513:function(t,e,n){var a=n(20),r=n(21),i=n(188).f;t.exports=function(t){return function(e){for(var n,o=r(e),s=a(o),l=s.length,c=0,u=[];l>c;)i.call(o,n=s[c++])&&u.push(t?[n,o[n]]:o[n]);return u}}},514:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-0 mt-0"},[t.overSizeLimit?n("v-alert",{attrs:{type:"error",tile:""}},[t._v("\n    Maximum size of uploaded file is 2 GB.\n  ")]):t._e(),t._v(" "),n("form",{staticClass:"form pa-2",attrs:{enctype:"multipart/form-data"}},[n("v-file-input",{staticClass:"mr-2",attrs:{outlined:"",chips:"","show-size":"",label:t.label,name:"file",multiple:t.multiple},on:{change:t.fileChange}}),t._v(" "),t.noUpload?t._e():n("v-btn",{attrs:{color:"primary",outlined:"",disabled:null===t.files||t.overSizeLimit},on:{click:function(e){return t.upload()}}},[t._v("\n      Upload\n      "),n("v-icon",{attrs:{right:""}},[t._v("\n        mdi-upload\n      ")])],1)],1),t._v(" "),n("v-progress-linear",{attrs:{query:!0,active:t.showProgress,color:"primary"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},613:function(t,e,n){"use strict";var a=n(492),r=n(507);e.a={name:"MasksView",components:{FileUploader:r.a,"fc-tile":a.a},data:function(){return{loading:!1,masks:[],headers:[{text:"Name",align:"start",value:"name"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",align:"end",sortable:!1}]}},mounted:function(){this.loadMasks()},methods:{loadMasks:function(){var t=this;this.loading=!0,this.axios.get(this.$serverAddr+"/masks",{}).then(function(e){t.masks=e.data,t.loading=!1})},deleteMask:function(t){var e=this;this.$root.$confirm("Delete","This will remove "+t.name+" from your masks. Are you sure?").then(function(n){e.loading=!0,e.axios.delete(e.$serverAddr+"/masks/"+t.id).then(function(t){e.loadMasks()})})}}}},775:function(t,e,n){var a=n(776);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(460)("78839f29",a,!0,{})},776:function(t,e,n){e=t.exports=n(459)(!0),e.push([t.i,".noEvent[data-v-1d7bb504]{pointer-events:none;display:inline-block}.dz-message[data-v-1d7bb504]{cursor:pointer;text-align:center}.max500[data-v-1d7bb504]{max-width:600px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/mask/masksView.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB",file:"masksView.vue",sourcesContent:["\n.noEvent[data-v-1d7bb504] {\n  pointer-events: none;\n  display: inline-block;\n}\n.dz-message[data-v-1d7bb504] {\n  cursor: pointer;\n  text-align: center;\n}\n.max500[data-v-1d7bb504] {\n  max-width: 600px;\n}\n\n"],sourceRoot:""}])},777:function(t,e,n){var a=n(778);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(460)("332ad2bb",a,!0,{})},778:function(t,e,n){e=t.exports=n(459)(!0),e.push([t.i,".selectedDict{background:rgba(37,157,173,.85)!important;color:#fff}.selectedDict a{color:#fff}.clickable{cursor:pointer}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/mask/masksView.vue"],names:[],mappings:"AACA,cACE,0CAAgD,AAChD,UAAa,CACd,AACD,gBACE,UAAa,CACd,AACD,WACE,cAAgB,CACjB",file:"masksView.vue",sourcesContent:["\n.selectedDict {\n  background: rgba(37, 157, 173, 0.85) !important;\n  color: white;\n}\n.selectedDict a {\n  color: white;\n}\n.clickable {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},779:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"max500"},[n("fc-tile",{staticClass:"ma-2",attrs:{title:"Mask sets",icon:t.$route.meta.icon}},[n("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[t._v("\n      Mask files must have a .txt or .hcmask extension.\n    ")]),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.masks.items,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"Masks per page"}},scopedSlots:t._u([{key:"item.name",fn:function(e){var a=e.item;return[n("router-link",{attrs:{to:"masks/"+a.id}},[t._v("\n          "+t._s(a.name)+"\n        ")])]}},{key:"item.time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.$moment(n.time).format("DD.MM.YYYY HH:mm"))+"\n      ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("a",t._g({attrs:{href:t.$serverAddr+"/masks/"+a.id+"/download",target:"_blank",download:""}},r),[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-file-download-outline")])],1)],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Download")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.deleteMask(a)}}},r),[n("v-icon",{attrs:{color:"error"}},[t._v("\n                mdi-delete-outline\n              ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete")])])]}}])}),t._v(" "),n("v-divider"),t._v(" "),n("file-uploader",{attrs:{url:this.$serverAddr+"/masks/add"},on:{uploadComplete:t.loadMasks}})],1)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i}});
//# sourceMappingURL=11.fe397837e2305c6e3e79.js.map