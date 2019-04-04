if (self.CavalryLogger) { CavalryLogger.start_js(["9V+Ng"]); }

__d("XGamesNavigationSliderAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/navigationslider/",{id:{type:"String",required:!0},referral_objects:{type:"StringVector",defaultValue:[]},num_items_per_page:{type:"Int",required:!0},num_rows:{type:"Int",defaultValue:1},width:{type:"Int",required:!0},height:{type:"Int",required:!0},days_since:{type:"Int"},row_type:{type:"Enum",enumType:1},upsell_type:{type:"Enum",enumType:1}})}),null);
__d("CanvasNavigationSlider",["AsyncRequest","DataStore","Event","XGamesNavigationSliderAsyncController"],(function(a,b,c,d,e,f){__p&&__p();var g="GamesNavigationSlider";a=function(){"use strict";__p&&__p();a.init=function(b,c){return new a(b,c)};function a(a,c){__p&&__p();var d=this;this.$1=c.autoscroll;this.$2=a;this.$3=c.referral_objects;this.$4=a.getNode().id;this.$5=c.height;this.$6=c.width;this.$7=c.days_since;this.$8=c.num_items_per_page;this.$9=c.num_rows;this.$10=!1;this.$11=c.row_type;this.$12=c.upsell_type;b("DataStore").set(g,this.$4,this);(a.getIndex()>0||this.$1)&&this.$13();var e=b("Event").listen(a.getNextArrow(),"click",function(){e.remove(),d.$13()}.bind(this))}var c=a.prototype;c.$13=function(){if(this.$10)return;this.$10=!0;var a=b("XGamesNavigationSliderAsyncController").getURIBuilder().setString("id",this.$4).setInt("num_items_per_page",this.$8).setInt("num_rows",this.$9).setInt("width",this.$6).setInt("height",this.$5);this.$11&&(a=a.setEnum("row_type",this.$11));this.$12&&(a=a.setEnum("upsell_type",this.$12));this.$7&&(a=a.setInt("days_since",this.$7));new(b("AsyncRequest"))(a.getURI()).setData({referral_objects:this.$3}).send()};c.$14=function(a){var b=this;a.forEach(function(a){b.$2.push(a)})};a.update=function(a,c){a=b("DataStore").get(g,a);a.$14(c)};return a}();e.exports=a}),null);
__d("XGamesReplaceableXOutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/xout/replace/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"},query_type:{type:"String"},query_params:{type:"String"},excluded_app_ids:{type:"StringVector",defaultValue:[]},attributes:{type:"String"}})}),null);
__d("GamesReplaceableXOutHelper",["invariant","Parent","XGamesReplaceableXOutAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();var h="data-games-xout-container",i=0,j={},k={};function l(a){a=b("Parent").byAttribute(a,h);if(a){var c=parseInt(a.getAttribute(h),10);c===0&&(i+=1,c=i.toString(),a.setAttribute(h,c));return c}}function m(a){a=l(a);a||g(0,4728);return a}function n(a){a=j[m(a)];return a?Object.keys(a):[]}function a(a,b){return o(a,[b])}function o(a,b){a=l(a);if(a){a=j[a]=j[a]||{};for(var c=0;c<b.length;c+=1)a[b[c]]=!0}}function c(a){a=m(a);a&&(delete j[a],delete k[a])}function d(a,c){return b("XGamesReplaceableXOutAsyncController").getURIBuilder().setInt("app_id",c.appID).setString("extra_data",c.extraData).setString("attributes",c.attributes).setString("query_type",a.getAttribute("data-games-xout-query-type")).setString("query_params",a.getAttribute("data-games-xout-query-params")).setString("unit_type",c.unitType).setInt("fbs",a.getAttribute("data-games-xout-fbs")).setStringVector("excluded_app_ids",n(a)).getURI()}function f(a,b){a=l(a);if(!a)return;a=k[a]=k[a]||[];a.length===0&&b();a.push(b)}function p(a){a=m(a);a=k[a];a&&(a.shift(),a.length>0&&a[0]())}a={getBoundAppIDs:n,registerAppID:a,registerAppIDs:o,deleteContainer:c,queueRequest:f,processQueuedRequests:p,createURI:d};e.exports=a}),null);
__d("GamesReplaceableXOutListener",["csx","cx","AsyncRequest","CSS","DOM","Event","GamesReplaceableXOutHelper","Parent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={};function j(a,c,d){d=d.payload;if(!d)return;b("GamesReplaceableXOutHelper").registerAppID(a,d.app_id);b("GamesReplaceableXOutHelper").processQueuedRequests(c);i[d.app_id]=d.item_data;b("DOM").replace(c,d.el)}function k(a){return b("Event").listen(a,"click",function(c){c=c.target;if(!b("CSS").matchesSelector(c,"._1m6e"))return;var d=b("Parent").bySelector(c,"._2b2u"),e=c.getAttribute("data-appid"),f=i[e];b("CSS").addClass(d,"_4ksu");b("GamesReplaceableXOutHelper").queueRequest(d,function(){new(b("AsyncRequest"))(b("GamesReplaceableXOutHelper").createURI(a,f)).setHandler(function(b){return j(a,d,b)}).setMethod("POST").send(),delete i[e]})})}a={registerContainerItems:function(a,c,d){b("GamesReplaceableXOutHelper").registerAppIDs(a,c),d.forEach(function(c){var d=c.appID;i[d]=c;b("GamesReplaceableXOutHelper").registerAppID(a,d)}),k(a,c)}};e.exports=a}),null);
__d("GamesXOut.react",["cx","React","ShimButton.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_2b2u",this.props.className)},this.props.children,b("React").createElement(b("ShimButton.react"),{className:"_1m6e",onClick:this.props.onClick}))};return c}(b("React").Component);c.propTypes={onClick:a.func.isRequired};e.exports=c}),null);
__d("XGamesHideableXOutAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/async/xout/hide/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"}})}),null);
__d("GamesUninstallXOut.react",["cx","AsyncRequest","CSS","Dialog","DOMContainer.react","GamesXOut.react","React","ReactDOM","URI","XGamesHideableXOutAsyncController"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={pending:!1},d.$1=function(){var a=b("XGamesHideableXOutAsyncController").getURIBuilder().setInt("app_id",d.props.appID).setString("extra_data",d.props.extraData).setString("unit_type",d.props.unitType).setInt("fbs",d.props.fbs).getURI();d.$2=new(b("AsyncRequest"))(a).setMethod("POST");d.$2.send()},d.$3=function(){var a=new(b("URI"))("/ajax/settings/apps/delete_app.php").setQueryData({app_id:d.props.appID,legacy:!1,dialog:!0,xout:!0});new(b("Dialog"))().setAsync(new(b("AsyncRequest"))(a).setRelativeTo(b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)))).setCausalElement(b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d))).show()},c)||babelHelpers.assertThisInitialized(d)}c.appUninstalled=function(a){b("CSS").addClass(a,"_4ksu")};var d=c.prototype;d.render=function(){return b("React").createElement(b("GamesXOut.react"),{onClick:this.$3},b("React").createElement(b("DOMContainer.react"),null,this.props.domChild))};return c}(b("React").Component);c.propTypes={unitType:a.string.isRequired,appID:a.string.isRequired,domChild:a.any.isRequired,extraData:a.string.isRequired,fbs:a.number.isRequired};e.exports=c}),null);
__d("XPlatformXOutableElementController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/async/xoutelement/",{type:{type:"Enum",required:!0,enumType:0},fbid:{type:"Int",required:!0}})}),null);
__d("PlatformElementXOut.react",["AsyncRequest","DOM","DOMContainer.react","GamesXOut.react","React","ReactDOM","XPlatformXOutableElementController"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=b("XPlatformXOutableElementController").getURIBuilder().setEnum("type",d.props.type).setInt("fbid",d.props.fbid).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send();a=b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)).parentNode.parentNode;b("ReactDOM").unmountComponentAtNode(a);b("DOM").remove(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=b("React").createElement(b("DOMContainer.react"),null,this.props.domChild);return b("React").createElement(b("GamesXOut.react"),{onClick:this.$1},a)};return c}(b("React").Component);c.propTypes={type:a.string.isRequired,fbid:a.string.isRequired,domChild:a.object.isRequired};e.exports=c}),null);
__d("GamesGogglesSwitch",[],(function(a,b,c,d,e,f){var g=!1;a={enable:function(){g=!0},isEnabled:function(){return g}};e.exports=a}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="data-gamesrankedimp";a=1e3;function i(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function j(a){return function(){a&&(a(),a=null)}}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleEvent=function(a,c){if(c.name==="visible"){var d=a.getAttribute(h);a.removeAttribute(h);d&&(i(a),d&&b("Banzai").post("games_ranked_imp",{data:d}));b("Event").listen(a,"mouseover",j(function(){b("Banzai").post("games_mouseover",{data:d}),b("Event").listen(a,"mouseout",j(function(){b("Banzai").post("games_mouseout",{data:d})}))}))}};return c}(b("VisibilityTracking"));var k=new c({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return k.fireEventCallback()},a,null);k.listeners&&k.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return k.refreshAllTrackedElements()}))}),null);
__d("Slideshow",["csx","cx","ArbiterMixin","CSS","DOM","Event","Parent","getActiveElement","mixin","shield"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e._setCurrent=function(a){__p&&__p();var c=e._items[e._currentIndex];c&&b("CSS").removeClass(c,"_2xn");b("CSS").addClass(e._items[a],"_2xn");b("CSS").removeClass(e._root,"_2xm");c=c&&b("DOM").scry(c,"a").some(function(a){return a==b("getActiveElement")()});if(c){c=b("DOM").scry(e._items[a],"a");c[0]&&c[0].focus()}e._currentIndex=a;e._animating=!1;e.inform("page_end",a)};e.informAndResetAutoPlay=function(){e.resetAutoplay(),e._config.autoplay&&e.inform("reset_autoplay")};e.informAndStopAutoplay=function(){e.stopAutoplay(),e.inform("stop_autoplay")};e._root=c;e._config=d;e._currentIndex=0;e._animating=!1;e._autoplayTimer=null;e._autoplayTimeout=d.autoplayTimeout;e._init();return e}var d=c.prototype;d.getNode=function(){return this._root};d.getIndex=function(){return this._currentIndex};d.getNumItems=function(){return this._items.length};d.getNextArrow=function(){return this._config.arrows?b("DOM").find(this._root,"a._2xw"):null};d.getPrevArrow=function(){return this._config.arrows?b("DOM").find(this._root,"a._2xx"):null};d.page=function(a){a||(a="next");if(a==="next")(this._config.wrap||this.getIndex()<this.getNumItems()-1)&&this._animateTo((this.getIndex()+1)%this.getNumItems(),this.getIndex());else if(a==="prev"){if(this._config.wrap||this.getIndex()>0){a=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(a,this.getIndex())}}};d.pageTo=function(a){this._animateTo(a,this.getIndex(),b("shield")(this._setCurrent,this,a))};d.insert=function(a,c){a>this._currentIndex?b("DOM").insertAfter(this._items[a-1],c):(b("DOM").insertBefore(this._items[a],c),this._currentIndex++),this._items.splice(a,0,c),this._updateArrowState(),this.inform("items_updated")};d.push=function(a){this.insert(this._items.length,a)};d.remove=function(a){__p&&__p();if(a<0||a>=this._items.length)return;b("DOM").remove(this._items[a]);this._items=b("DOM").scry(this._container,"li._2xr");if(a===this._currentIndex&&this._items.length){a=a%this._items.length;this._conditionFade(this._items[a],!0,null);this._setCurrent(a)}this.inform("items_updated")};d._init=function(){this._container=b("DOM").find(this._root,"ul._2xq"),this._items=b("DOM").scry(this._container,"li._2xr"),this._config.arrows&&(b("Event").listen(this._root,"click",this._clickListener.bind(this)),this._arrowNext=b("DOM").find(this._root,"a._2xw"),this._arrowPrev=b("DOM").find(this._root,"a._2xx")),this._config.autoplay&&(this._config.autoplaycontrol&&(b("Event").listen(this._root,"mouseenter",this.informAndStopAutoplay),b("Event").listen(this._root,"mouseleave",this.informAndResetAutoPlay)),this.resetAutoplay()),this.subscribe(["page_start","page_end"],function(a,c){b("CSS").conditionClass(this._root,"_2xm",a==="page_start")}.bind(this))};d._clickListener=function(a){var c=a.getTarget();c=b("Parent").byTag(c,"a");c&&!b("CSS").matchesSelector(c,"._2xo")&&(b("CSS").matchesSelector(c,"._2xw")?(this.page("next"),a.preventDefault()):b("CSS").matchesSelector(c,"._2xx")&&(this.page("prev"),a.preventDefault()))};d._updateArrowState=function(){if(!this._config.arrows)return;b("CSS").conditionClass(this._arrowNext,"_2xo",this._items.length===1);b("CSS").conditionClass(this._arrowPrev,"_2xo",this._items.length===1)};d._animateTo=function(a,b){b===void 0};d.startAutoplay=function(a){this._config.autoplay=!0,this._autoplayTimeout=a,this.resetAutoplay()};d.resetAutoplay=function(){this._config.autoplay&&(clearTimeout(this._autoplayTimer),this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout))};d.stopAutoplay=function(){clearTimeout(this._autoplayTimer),this._autoplayTimer=null};d._autoplay=function(){this.resetAutoplay(),this._items.length>1&&this.page()};d.setAutoplayTimeout=function(a){this._autoplayTimeout=a};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("Carousel",["cx","Animation","CSS","Ease","Locale","Slideshow","Style","shield"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("Locale").isRTL()?"right":"left",i=b("Ease").sineInOut;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b,c)||this;b.subscribe("items_updated",b._updateItemState.bind(babelHelpers.assertThisInitialized(b)));b._width=b._config.width;return b}var d=c.prototype;d._updateItemState=function(a,c){this._setContainerPos(a),b("Style").set(this._container,"width",this._items.length*this._config.width+this._config.widthunit)};d._updateArrowState=function(a){if(!this._config.arrows)return;var c=this._config.wrap,d=this._items.length;d=Math.floor(d/this._config.photosperframe);b("CSS").conditionClass(this._arrowNext,"_2xo",d===1||!c&&a===d-1);b("CSS").conditionClass(this._arrowPrev,"_2xo",d===1||!c&&a===0)};d._animate=function(a,c,d){c===void 0&&(c=null);var e=a===-1?this._items.length-1:a,f=0;f=this._calcOffset(a,this._config.width,this._config.peek,this._config.item_margin);this._animating=!0;this.inform("page_start",e);a=new(b("Animation"))(this._container).setUnit(this._config.widthunit).to(h,f).duration(this._config.animationDuration).ease(i).ondone(d);c!==null&&(e=this._calcOffset(c,this._config.width,this._config.peek,this._config.item_margin),a.from(h,e));a.go()};d._calcOffset=function(a,b,c,d){if(this._config.peek_with_offset){var e=-a*(b-c*2);a>0&&(e=e+c-a*(d/2));a===this._items.length-1&&(e+=c);return e}else return-a*b};d._setContainerPos=function(a){b("Style").set(this._container,h,-a*this._config.width+this._config.widthunit)};d._animateTo=function(a,c){__p&&__p();c===void 0&&(c=null);if(this._animating)return;var d=this._items.length;if(0<=a&&a<d||!this._config.wrap){var e=(a+d)%d;this._updateArrowState(e);return this._animate(e,c,b("shield")(this._setCurrent,this,e))}e=a%d;var f=e?d-1:0,g=this._items[d-1];b("Style").set(g,"position","absolute");b("Style").set(g,h,-this._config.width+this._config.widthunit);f===0&&this._setContainerPos(-1);this._animate(e,c,function(){b("Style").set(g,"position","static"),b("Style").set(g,h,"auto"),this._setContainerPos(f),this._setCurrent(f)}.bind(this))};return c}(b("Slideshow"));e.exports=a}),null);