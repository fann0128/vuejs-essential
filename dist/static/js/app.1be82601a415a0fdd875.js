webpackJsonp([0],{"1nHR":function(t,e){},"40Db":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])}))])])])},staticRenderFns:[]};function s(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var i=t.getBoundingClientRect(),s=window.getComputedStyle(t,null),o=parseInt(s.getPropertyValue("padding-right"))||0,r=parseInt(s.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=i.left-n.offsetWidth/2+(t.offsetWidth-o)/2+"px",a.top=i.top-n.offsetHeight+r+"px",a.display="block",a.visibility="visible"}}var o={name:"TheFooter",directives:{title:{bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],i=function(n){"mouseenter"===n.type?s(t,e.value):s()};a.forEach(function(e){t.addEventListener(e,i,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,i,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"VuejsCaff",contacts:[{icon:"envelope",title:"report",link:""},{icon:"weibo",title:"weibo",link:""},{icon:"weixin",title:"WeChat",link:""}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">\n          <a href="https://github.com/fann0128" target="_blank" style="color:inherit">fann0128</a>\n        </span>\n      '}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}))]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1 text-right"},[n("span",{domProps:{innerHTML:t._s(t.designer)}})])])])])},staticRenderFns:[]};var l={name:"App",components:{TheHeader:n("VU/8")({name:"TheHeader",data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["Social","Hot","Q&A","Training"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},i,!1,function(t){n("rXt+")},"data-v-00a99b81",null).exports,TheFooter:n("VU/8")(o,r,!1,function(t){n("1nHR")},"data-v-60f1b905",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var v=n("VU/8")(l,c,!1,function(t){n("40Db")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:v},template:"<App/>"})},"rXt+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1be82601a415a0fdd875.js.map