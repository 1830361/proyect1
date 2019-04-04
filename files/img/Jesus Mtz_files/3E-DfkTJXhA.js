if (self.CavalryLogger) { CavalryLogger.start_js(["+GzCk"]); }

__d("XBrowserPushDisabledController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/disabled/",{})}),null);
__d("XBrowserPushXOutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/xout/",{})}),null);
__d("XServiceWorkerSessionChangeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/service_workers/session/persist/",{})}),null);
__d("BrowserPushSessionChange.react",["cx","fbt","ix","AsyncRequest","BanzaiLogger","Image.react","ImageBlock.react","LayerFadeOnHide","React","ReloadPage","XBrowserPushDisabledController","XBrowserPushXOutController","XServiceWorkerSessionChangeController","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","XUISpinner.react","XUIText.react"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!0,spin:!1},d.$1=function(a){if(a)return;d.setState({dialogShown:!1});d.$2("session_keep");a=b("XServiceWorkerSessionChangeController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({app_id:d.props.push.appID}).setAllowCrossPageTransition(!0).setHandler(function(a){d.props.onHide()}).send()},d.$3=function(){d.setState({spin:!0});d.$2("session_uninstall");d.$2("xout");var a=b("XBrowserPushXOutController").getURIBuilder().getURI(),c=function(){d.props.push.unregisterPushAndSW(b("XBrowserPushDisabledController"),b("AsyncRequest")).done(function(a){b("ReloadPage").now()})};new(b("AsyncRequest"))().setURI(a).setMethod("POST").setHandler(c).setAllowCrossPageTransition(!0).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){a={event:a,appid:this.props.push.appID,surface:"session_change"};b("BanzaiLogger").log("BrowserPushLoggerConfig",a)};d.componentDidMount=function(){this.$2("session_change_prompt")};d.render=function(){if(!this.state.dialogShown)return null;var a=i("92724");return b("React").createElement(b("XUIDialog.react"),{shown:!0,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},onToggle:this.$1,width:445,key:"dialog"},b("React").createElement(b("XUIDialogTitle.react"),null,h._("Las notificaciones en la computadora est\u00e1n activadas")),b("React").createElement(b("XUIDialogBody.react"),null,this.state.spin?b("React").createElement(b("XUISpinner.react"),{size:"large"}):b("React").createElement(b("ImageBlock.react"),{spacing:"medium"},b("React").createElement(b("Image.react"),{src:a,alt:h._("Las notificaciones en la computadora est\u00e1n activadas")}),b("React").createElement("div",null,b("React").createElement("div",{className:"_3-8h"},b("React").createElement(b("XUIText.react"),{size:"header3"},h._("Si recibes una notificaci\u00f3n nueva, la ver\u00e1s en la esquina de la pantalla."))),b("React").createElement("div",{className:"_3-8h"},b("React").createElement(b("XUIText.react"),{size:"meta1"},h._("Para asegurarte de que recibes las notificaciones, debes seguir con la sesi\u00f3n iniciada en Facebook en esta computadora. Si est\u00e1s usando una computadora p\u00fablica o no quieres dejar tu sesi\u00f3n de Facebook abierta, haz clic en \"Deshacer\" para desactivar las notificaciones en la computadora.")))))),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{action:"button",label:h._("Deshacer"),onClick:this.$3}),b("React").createElement(b("XUIDialogOkayButton.react"),{use:"confirm",action:"cancel"})))};return c}(b("React").Component);c.propTypes={onHide:a.func.isRequired,push:a.object.isRequired};e.exports=c}),null);
__d("MockChromeBrowserNotification.react",["cx","fbt","ix","BrowserPushStrings","DOMContainer.react","Image.react","React","WorkModeConfig","isNode","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("isNode")(this.props.message)?b("React").createElement(b("DOMContainer.react"),null,this.props.message):this.props.message,c=!this.props.image&&b("WorkModeConfig").is_work_user,d=this.props.image?this.props.image:this.props.defaultImage;return b("React").createElement("section",{className:b("joinClasses")(this.props.className,"_257o")},b("React").createElement("span",{className:"_61kd"}),b("React").createElement(b("Image.react"),{className:(c?"":"_ega")+(c?" _2rk4":""),draggable:!1,src:d}),b("React").createElement("div",{className:"_egb"},b("React").createElement("h3",null,b("BrowserPushStrings").title),b("React").createElement("p",null,a),b("React").createElement("cite",null,window.location.hostname)))};return c}(b("React").Component);a.defaultProps={message:h._("Tienes notificaciones nuevas."),defaultImage:b("WorkModeConfig").is_work_user?i("351290"):i("76304")};e.exports=a}),null);
__d("MockEdgeBrowserNotification.react",["cx","fbt","ix","BrowserPushStrings","DOMContainer.react","Image.react","React","WorkModeConfig","isNode","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("isNode")(this.props.message)?b("React").createElement(b("DOMContainer.react"),null,this.props.message):this.props.message,c=h._("Microsoft Edge");return b("React").createElement("section",{className:b("joinClasses")(this.props.className,"_2eed")},b("React").createElement(b("Image.react"),{className:(b("WorkModeConfig").is_work_user?"":"_2eee")+(b("WorkModeConfig").is_work_user?" _3_qv":""),draggable:!1,src:this.props.image}),b("React").createElement("div",{className:"_2eef"},b("React").createElement("h3",{className:"_2eeg"},b("BrowserPushStrings").title),b("React").createElement("p",{className:"_2eeh"},a),b("React").createElement("div",{className:"_2eei"},c," \xb7 ",window.location.hostname)))};return c}(b("React").Component);a.defaultProps={message:h._("Tienes notificaciones nuevas."),image:b("WorkModeConfig").is_work_user?i("351290"):i("363137")};e.exports=a}),null);
__d("MockFirefoxBrowserNotification.react",["cx","fbt","ix","BrowserPushStrings","DOMContainer.react","Image.react","React","WorkModeConfig","isNode","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("isNode")(this.props.message)?b("React").createElement(b("DOMContainer.react"),null,this.props.message):this.props.message,c=this.props.isWindows;return b("React").createElement("section",{className:b("joinClasses")(this.props.className,"_g5o")},c?this.$1(a):this.$2(a))};d.$2=function(a){return b("React").createElement("div",{className:"_g5p"},b("React").createElement("div",{className:"_g5q"},b("React").createElement(b("Image.react"),{draggable:!1,src:i("355144")})),b("React").createElement("div",{className:"_g5r"},b("React").createElement("h3",null,b("BrowserPushStrings").title),b("React").createElement("cite",null,window.location.hostname),b("React").createElement("p",null,a)),b("React").createElement(b("Image.react"),{className:(b("WorkModeConfig").is_work_user?"":"_g5u")+(b("WorkModeConfig").is_work_user?" _gcl":""),draggable:!1,src:this.props.image}))};d.$1=function(a){return b("React").createElement("div",{className:"_g5w"},b("React").createElement("h3",null,b("BrowserPushStrings").title),b("React").createElement("div",{className:"_g5x"},b("React").createElement("span",{className:"_g5z"}),b("React").createElement("span",{className:"_g7w"})),b("React").createElement("div",{className:"_g5r"},b("React").createElement(b("Image.react"),{className:(b("WorkModeConfig").is_work_user?"":"_g5u")+(b("WorkModeConfig").is_work_user?" _gcl":""),draggable:!1,src:this.props.image}),b("React").createElement("div",{className:"_g7x"},b("React").createElement("p",null,a),b("React").createElement("cite",null,window.location.hostname))))};return c}(b("React").Component);a.defaultProps={message:h._("Tienes notificaciones nuevas."),image:b("WorkModeConfig").is_work_user?i("351290"):i("363137"),isWindows:!1};e.exports=a}),null);
__d("MockBrowserNotification.react",["MockChromeBrowserNotification.react","MockEdgeBrowserNotification.react","MockFirefoxBrowserNotification.react","React","UserAgent"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){var c=b("UserAgent").isPlatform("Windows");if(b("UserAgent").isBrowser("Firefox"))return b("React").createElement(b("MockFirefoxBrowserNotification.react"),babelHelpers["extends"]({},a,{isWindows:c}));else if(b("UserAgent").isBrowser("Edge"))return b("React").createElement(b("MockEdgeBrowserNotification.react"),a);return b("React").createElement(b("MockChromeBrowserNotification.react"),babelHelpers["extends"]({},a,{isWindows:c}))}}),null);
__d("NotificationPermissionDummyRequest.react",["fbt","React","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=[g._("Recibe notificaciones de tus amigos al instante")],c=[g._("Activa las notificaciones en el navegador para no perderte nada de lo que ocurre en Facebook.")],d=this.props.promptTitleIndex<a.length?this.props.promptTitleIndex:0,e=this.props.promptBodyIndex<c.length?this.props.promptBodyIndex:0;return b("React").createElement(b("XUIDialog.react"),{isStrictlyControlled:!0,onHide:this.props.isBinary?function(){}:this.props.onIgnore,shown:!0,width:445},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!this.props.isBinary},b("React").createElement("span",null,a[d])),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("br",null),b("React").createElement("div",null,c[e]),b("React").createElement("br",null)),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{action:"button",label:g._("Ahora no"),onClick:this.props.onNotNow,size:"large"}),b("React").createElement(b("XUIDialogButton.react"),{action:"button",label:g._("Aceptar"),onClick:this.props.onAccept,use:"confirm",size:"large"})))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationPermissionNotice.react",["cx","fbt","Event","Keys","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=[];a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=this;i.push(b("Event").listen(window,"mousedown",this.props.onHide));i.push(b("Event").listen(window,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.props.onHide()}))};d.componentWillUnmount=function(){while(i.length>0){var a=i.pop();a.remove()}};d.renderLayers=function(){var a=this,c=this.props.shortText?h._("Haz clic en el candado para dar permiso a {browser_name} para que te env\u00ede notificaciones en la computadora.",[h._param("browser_name",this.props.browserName)]):h._("Si cambias de opini\u00f3n, haz clic en el candado para dar permiso a {browser_name} para que te env\u00ede notificaciones en la computadora.",[h._param("browser_name",this.props.browserName)]);return b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.noticeAnchor},shown:!0,position:"below",onCloseButtonClick:this.props.onHide,key:"nux"},c)};d.render=function(){return b("React").createElement("span",null,b("React").createElement("span",{ref:"noticeAnchor",className:"_1_i1"}),this.renderLayers())};return c}(b("React").Component);c.propTypes={onHide:a.func.isRequired,shortText:a.bool,browserName:a.string.isRequired};e.exports=c}),null);
__d("NotificationPermissionRequest.react",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("Spotlight.react"),{shown:!0,onHide:this.props.onHide,key:"spotlight"},b("React").createElement("div",{className:"_n3"}))};return c}(b("React").Component);c.propTypes={onHide:a.func};e.exports=c}),null);
__d("NotificationPermissionRequestWithPreview.react",["cx","fbt","ix","BrowserPushStrings","Image.react","ImageBlock.react","MockBrowserNotification.react","React","Spotlight.react","XUIAmbientNUX.react","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=function(a){var c;return b("React").createElement(b("Spotlight.react"),{onHide:a.onHide,shown:a.shown,wash:"xui"},b("React").createElement("span",{ref:function(a){return c=a},className:"_m4w"}),b("React").createElement("div",{className:"_n3"},b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:function(){return c},key:"nux",shown:a.shown,onCloseButtonClick:a.onHide,position:"below"},b("React").createElement("strong",null,h._("Ya casi terminas")),b("React").createElement("br",null),h._("Ahora haz clic en \"Permitir\" para terminar de activar las notificaciones."))))};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={acceptPromptShown:!1,dialogShown:!0,spinnerShown:!1},c.$2=function(a){c.setState({dialogShown:a})},c.$3=function(){c.setState({acceptPromptShown:!c.props.hideSecondStep&&!c.props.showSpinnerWhileRequesting,dialogShown:c.props.showSpinnerWhileRequesting,spinnerShown:!c.props.hideSecondStep&&c.props.showSpinnerWhileRequesting}),c.props.onAccept&&c.props.onAccept(c.$4)},c.$4=function(){c.$1&&c.setState({acceptPromptShown:!1,dialogShown:!1})},c.$5=function(){c.setState({acceptPromptShown:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$1=!0};d.componentWillUnmount=function(){this.$1=!1};d.render=function(){var a=this.props,c=a.notificationImage;a=a.notificationMessage;c=b("React").createElement(b("MockBrowserNotification.react"),{className:"_m4x",image:c,message:a});a=this.state.spinnerShown?b("React").createElement(b("XUIDialogBody.react"),{className:"_mjv"},b("React").createElement(b("ImageBlock.react"),{spacing:"large"},b("React").createElement(b("Image.react"),{draggable:!1,src:i("287648"),width:40,height:40,className:"_mjw"}),b("React").createElement("div",null,b("React").createElement("strong",null,h._("Ya casi terminas")),b("React").createElement("p",{className:"_mjx"},h._("Ahora haz clic en \"Permitir\" para terminar de activar las notificaciones."))))):b("React").createElement(b("XUIDialogBody.react"),{className:"_mjy"},b("React").createElement(b("ImageBlock.react"),{spacing:"large"},b("React").createElement(b("Image.react"),{draggable:!1,src:i("287648"),className:"_mjw"}),b("React").createElement("div",null,this.props.isWebNotifications?b("BrowserPushStrings").explanation_web_notifications:b("BrowserPushStrings").explanation)),c);c=this.state.spinnerShown?null:b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",label:h._("Ahora no"),onClick:this.props.onClose}),b("React").createElement(b("XUIDialogButton.react"),{action:"button",label:h._("Activar"),onClick:this.$3,use:"special"}));return b("React").createElement("div",{className:"_m4y"},b("React").createElement(b("XUIDialog.react"),{layerHideOnBlur:!1,onToggle:this.$2,shown:this.state.dialogShown,titleID:"notification-permission-title",width:445},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!1},b("React").createElement("span",{id:"notification-permission-title"},b("BrowserPushStrings").turn_on)),a,c),b("React").createElement(j,{shown:this.state.acceptPromptShown,onHide:this.$5}))};return c}(b("React").Component);e.exports=a}),null);
__d("BrowserPushCommands",[],(function(a,b,c,d,e,f){a="browser_push_ack";b="browser_push_redirect";c="browser_push_window_visible";d={ACK:a,REDIRECT:b,WINDOW_VISIBLE:c};e.exports=d}),null);
__d("BrowserPushMessageRedirectUtil",["Bootloader"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){var c="(messages)(.*?)(?:(tid=))([^&]*)";a=a.match(c);if(!a)return!0;var d=a.pop();b("Bootloader").loadModules(["FantaTabActions"],function(a){a.openTab(d)},"BrowserPushMessageRedirectUtil");return!1};e.exports=a}),null);
__d("BrowserPushMessageHandler",["BrowserPushCommands","BrowserPushMessageRedirectUtil","EventListener","URI","URISchemes","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();function g(a){__p&&__p();if(a.data.command&&a.data.command===b("BrowserPushCommands").REDIRECT){if(window.onbeforeunload()===void 0)a.ports[0].postMessage({command:b("BrowserPushCommands").ACK,success:!0});else{a.ports[0].postMessage({command:b("BrowserPushCommands").ACK,success:!1});return}a=a.data.uri;if(/^([^.:/?#]+):/.test(a)&&!b("URISchemes").isAllowed(/^([^.:/?#]+):/.exec(a)[1])||!b("isFacebookURI")(new(b("URI"))(a)))throw new Error("goURI: URI scheme rejected, URI: "+a);b("BrowserPushMessageRedirectUtil")(a)&&(window.location.href=a)}}a={registerRedirectHandler:function(){b("EventListener").listen(window,"message",function(a){a.origin===""&&g(a)}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener&&navigator.serviceWorker.addEventListener("message",function(a){(navigator.serviceWorker&&navigator.serviceWorker.controller&&a.target&&a.target.controller&&a.target.controller===navigator.serviceWorker.controller||new RegExp("^"+window.location.protocol+"//"+window.location.host+"$").test(a.origin))&&g(a)})}};e.exports=a}),null);
__d("BrowserPushMuteOptions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ZERO:0,FIFTEEN_MINUTES:900,THIRTY_MINUTES:1800,FORTY_FIVE_MINUTES:2700,ONE_HOUR:3600,TWO_HOURS:7200,EIGHT_HOURS:28800,ONE_DAY:86400})}),null);
__d("BrowserPushVisibilityChanger",["BrowserPushCommands","ClientServiceWorkerMessage","Visibility"],(function(a,b,c,d,e,f){function g(){new(b("ClientServiceWorkerMessage"))(b("BrowserPushCommands").WINDOW_VISIBLE,null).sendViaController()}a={listenForVisibility:function(){b("Visibility").isHidden()||g(),b("Visibility").addListener(b("Visibility").VISIBLE,g)}};e.exports=a}),null);
__d("PushRegistrationUtils",[],(function(a,b,c,d,e,f){"use strict";var g={normalizeSubscriptionEndpoint:function(a){var b=a.endpoint;"subscriptionId"in a&&!new RegExp("/"+a.subscriptionId+"$").test(b)&&(b+="/"+a.subscriptionId);return b},setupPushRegistrationData:function(a,b){var c=g.normalizeSubscriptionEndpoint(a),d=null;a.toJSON?d=a.toJSON().keys:a.keys&&(d=a.keys);return{app_id:b,push_endpoint:c,subscription_keys:JSON.stringify(d)}}};e.exports=g}),null);
__d("XAsyncPushMuteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/settings/push/mute/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0},mute_for:{type:"Enum",enumType:0}})}),null);
__d("XAsyncPushMuteStateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/settings/push/mute/state/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0}})}),null);
__d("PushRegistration",["Promise","BrowserPushMessageHandler","BrowserPushMuteOptions","BrowserPushVisibilityChanger","PushRegistrationUtils","ServiceWorkerRegistration","XAsyncPushMuteController","XAsyncPushMuteStateController","emptyFunction","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=window.Notification,h=new Map();a=function(){"use strict";__p&&__p();a.get=function(b,c){if(h.has(c))return h.get(c);b=new a(b,c);h.set(c,b);return b};function a(b,c){this.$3=b,this.appID=c,!a.$1&&!a.$2&&(a.$1=!1,a.$2=!1)}var c=a.prototype;c.getPushSubscription=function(){var c=this;return new(b("Promise"))(function(d,e){a.pushPermissionIsDenied()&&e(new Error("No permission or not supported")),b("ServiceWorkerRegistration").getWorkerRegistration(c.$3).then(function(a){if(!a){d(null);return}a.pushManager.getSubscription().then(function(a){d(a)})["catch"](e)})["catch"](e)})};c.$4=function(a,c,d,e){a=a.getURIBuilder().getURI();c=new c(a);c.setData(b("PushRegistrationUtils").setupPushRegistrationData(d,this.appID));c.setMethod("post");c.setHandler&&c.setHandler(function(a){a.payload&&a.payload.session_change&&e()});c.send()};c.getMutedUntilInServer=function(a){__p&&__p();var c=this;return new(b("Promise"))(function(d,e){__p&&__p();c.getPushSubscription().then(function(f){if(f){f=b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f);f=b("XAsyncPushMuteStateController").getURIBuilder().setString("push_endpoint",f).setInt("appid",c.appID).getURI();f=new a(f);f.listen("done",function(a){d(a.payload.muteUntilTimestampSec)});f.send()}else e("cannot check mute status for unsubscribed endpoint")})["catch"](e)})};c.muteNotifications=function(a,c){__p&&__p();var d=this;return new(b("Promise"))(function(e,f){__p&&__p();d.getPushSubscription().then(function(g){__p&&__p();if(g){g=b("PushRegistrationUtils").normalizeSubscriptionEndpoint(g);g=b("XAsyncPushMuteController").getURIBuilder().setEnum("mute_for",a).setString("push_endpoint",g).setInt("appid",d.appID).getURI();g=new c(g);g.setMethod("POST");g.listen("done",function(c){a!==b("BrowserPushMuteOptions").ZERO&&c.payload.muteUntilTimestampSec===0?f("operation failed in server"):e(c.payload.muteUntilTimestampSec)});g.send()}else f("no subscription found")})["catch"](f)})};c.getSubscription=function(){var a=this;return new(b("Promise"))(function(c,d){a.getPushSubscription().then(function(a){a?c(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)):c(null)})["catch"](d)})};c.maybeRegisterPushAgain=function(a,c,d){var e=this;return new(b("Promise"))(function(f,g){e.getPushSubscription().then(function(g){g?(e.$4(a,c,g,d),f(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(g))):f(null)})["catch"](function(){f(null)})})};c.$5=function(c,d,e){__p&&__p();var f=this;return new(b("Promise"))(function(b,g){__p&&__p();if(a.$2&&!e){g(new Error("sending disable info already"));return}a.$2=!0;var h=c.getURIBuilder().getURI();h=new d(h.toString());h.setData({appid:f.appID,from_browser_settings:e});h.setMethod("post");h.listen?(h.listen("finally",b),h.listen("fail",function(){a.$2=!1,g()})):h.setErrorHandler&&h.setHandler?(h.setErrorHandler(function(){a.$2=!1,g()}),h.setHandler(b)):b();h.send()})};c.isPushRegistered=function(c,d,e,f,g,h,i){var j=this;g===void 0&&(g=!1);h===void 0&&(h=b("emptyFunction"));i===void 0&&(i=!1);b("BrowserPushMessageHandler").registerRedirectHandler();return new(b("Promise"))(function(k,l){j.getPushSubscription().then(function(l){k(!!l||c&&!a.pushPermissionIsPending()),l?g?j.$4(d,f,l,h):b("BrowserPushVisibilityChanger").listenForVisibility():!l&&c&&(a.pushPermissionIsOn()?j.registerPush(d,f,h,i)["catch"](function(){}):j.$5(e,f,!1))})["catch"](function(){c&&j.$5(e,f,!1),i&&b("ServiceWorkerRegistration").unregisterControllingWorker(),l()})})};c.$6=function(){return new(b("Promise"))(function(a,b){g.requestPermission(a)})};c.registerPushAndWaitForEndpoint=function(a,c,d,e){var f=this;return new(b("Promise"))(function(b,g){f.$7(a,c,d,!0,null,e).then(function(a){if(typeof a!=="string"){g(new Error("registerPushImpl did not return an endpoint"));return}b(a)})["catch"](g)})};c.registerPushOnKaiOS=function(a,c,d){var e=this;return new(b("Promise"))(function(f,g){d.waitForKaiOS().done(function(){d.registerPush(function(d){d=JSON.parse(d.get("push_endpoint"));e.$4(a,c,d,b("emptyFunction"));f(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(d))})})})};c.registerPush=function(a,c,d,e,f){d===void 0&&(d=b("emptyFunction"));e===void 0&&(e=!1);f===void 0&&(f=b("emptyFunction"));return this.registerPushWithFinishedCallBack(a,c,d,f,e)};c.registerPushWithFinishedCallBack=function(a,c,d,e,f){var g=this;return new(b("Promise"))(function(b,h){g.$7(a,c,d,!1,e,f).then(function(a){if(typeof a!=="boolean"){h(new Error("registerPushImpl did not return a boolean"));return}b(a)})["catch"](h)})};c.$7=function(c,d,e,f,g,h){__p&&__p();var i=this;if(a.$1)return new(b("Promise"))(function(a,b){b(new Error("registering already"))});if(!self.PushManager)return b("Promise").reject(new Error("PushManager not found."));a.$1=!0;return new(b("Promise"))(function(j,k){__p&&__p();var l=b("ServiceWorkerRegistration").registerWorkerIfUnregistered(i.$3),m=i.$6();b("Promise").all([l,m]).then(function(l){var m=l[0];if(!a.pushPermissionIsOn()){h&&m.unregister();throw new Error("Push permission was denied")}f||j(!0);m.pushManager.subscribe({userVisibleOnly:!0}).then(function(a){f&&j(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)),i.$4(c,d,a,e),g&&g(),b("BrowserPushVisibilityChanger").listenForVisibility()})["catch"](function(b){a.$1=!1,h&&m.unregister(),k(b)})})["catch"](function(b){a.$1=!1,k(b)})})};c.unregisterPushAndSWOnKaiOS=function(a,c,d,e){var f=this;return new(b("Promise"))(function(b,g){f.$5(a,c,e).then(function(){d.unregisterPush(),b()})["catch"](g)})};c.unregisterPushAndSW=function(a,c){var d=this;return new(b("Promise"))(function(e,f){d.$5(a,c,!0).then(function(){b("promiseDone")(b("ServiceWorkerRegistration").unregisterControllingWorker(),e)})["catch"](f)})};c.unregisterPushOnly=function(a,c){var d=this;return new(b("Promise"))(function(b,e){d.getPushSubscription().then(function(f){f?f.unsubscribe().then(d.$5(a,c,!0)).then(function(){b(!0)})["catch"](e):e()})["catch"](e)})};a.pushPermissionIsPending=function(){return window.Notification&&window.Notification.permission==="default"};a.pushPermissionIsOn=function(){return window.Notification&&window.Notification.permission==="granted"};a.pushPermissionIsDenied=function(){return window.Notification&&window.Notification.permission==="denied"};return a}();e.exports=a}),null);
__d("XBrowserPushDummyPromptActionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/dummyprompt/action/",{})}),null);
__d("XBrowserWebNotificationsEnableController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/web_notifications/enable/",{})}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);
__d("incognito",["regeneratorRuntime","Promise","UserAgent","WebStorage","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){__p&&__p();while(1)switch(c.prev=c.next){case 0:a=window.RequestFileSystem||window.webkitRequestFileSystem;if(!a){c.next=3;break}return c.abrupt("return",new(b("Promise"))(function(b){return a(window.TEMPORARY,10,function(){return b(!1)},function(){return b(!0)})}));case 3:if(!(b("UserAgent").isBrowser("IE >= 10")||b("UserAgent").isBrowser("Edge"))){c.next=5;break}return c.abrupt("return",!window.indexedDB);case 5:if(!b("UserAgent").isBrowser("Firefox >= 16")){c.next=7;break}return c.abrupt("return",new(b("Promise"))(function(a){var b=window.indexedDB.open("__test__");b.onsuccess=function(){return a(!1)};b.onerror=function(b){b.preventDefault(),a(!0)}}));case 7:if(!(b("gkx")("676917")&&(b("UserAgent").isPlatform("iOS")&&b("UserAgent").isBrowser("Safari >= 10.3")||b("UserAgent").isPlatform("Mac OS X")&&b("UserAgent").isBrowser("Safari >= 11.1")))){c.next=18;break}c.prev=8;window.openDatabase("sid","1.0","",0);c.next=16;break;case 12:c.prev=12;c.t0=c["catch"](8);if(!(c.t0.name==="SecurityError")){c.next=16;break}return c.abrupt("return",!0);case 16:c.next=20;break;case 18:if(!b("UserAgent").isBrowser("Safari")){c.next=20;break}return c.abrupt("return",!b("WebStorage").getLocalStorage());case 20:return c.abrupt("return",!1);case 21:case"end":return c.stop()}},null,this,[[8,12]])}e.exports=a}),null);
__d("BrowserPushDirectPromptInstaller",["Promise","Arbiter","AsyncRequest","BanzaiLogger","Bootloader","BrowserPushSessionChange.react","CrossWindowEventEmitter","DOM","NotificationPermissionDummyRequest.react","NotificationPermissionNotice.react","NotificationPermissionRequest.react","NotificationPermissionRequestWithPreview.react","PushRegistration","QE2Logger","React","ReactDOM","XBrowserPushDisabledController","XBrowserPushDummyPromptActionController","XBrowserPushXOutController","XBrowserWebNotificationsEnableController","XPushRegisterServiceWorkerController","incognito","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=window.Notification,h=new(b("CrossWindowEventEmitter"))("BrowserPushInstall"),i={},j,k=!1;function l(a,c,d){d===void 0&&(d="prompt");a=babelHelpers["extends"]({event:a,appid:c,surface:d},i);b("BanzaiLogger").log("BrowserPushLoggerConfig",a)}function m(){i.xout_count===0&&j&&b("QE2Logger").logExposureForUser(j)}function n(a){var c=b("XBrowserPushXOutController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").send();l("xout",a)}function o(a){var c=b("XBrowserWebNotificationsEnableController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").send();b("Arbiter").inform("WebNotifications/enabled");h.emitRemote("complete");b("Bootloader").loadModules(["WebNotificationsPresenter"],function(b){b.init(a.toString())},"BrowserPushDirectPromptInstaller")}function p(a){k||(k=!0,b("ReactDOM").unmountComponentAtNode(a))}function q(a,c){var d=b("DOM").insertBefore(a,b("DOM").create("span"));d=d.pop();b("ReactDOM").render(b("React").createElement(b("BrowserPushSessionChange.react"),{onHide:function(){b("ReactDOM").unmountComponentAtNode(a)},push:c}),d)}function r(a,c,d,e,f){var g=b("PushRegistration").get(a,c);l("turn_on",c);return g.registerPushWithFinishedCallBack(b("XPushRegisterServiceWorkerController"),b("AsyncRequest"),function(){q(d,g)},function(){b("Arbiter").inform("BrowserPushInstall/installed")},f).then(function(){p(d),l("install",c)})["catch"](function(a){p(d),b("PushRegistration").pushPermissionIsDenied()?(b("ReactDOM").render(b("React").createElement(b("NotificationPermissionNotice.react"),{onHide:function(){b("ReactDOM").unmountComponentAtNode(d)},browserName:e}),d),l("deny",c)):l("install_ignore",c),n(c)})}a={setLogExtraData:function(a){i=a},setQEUniverseName:function(a){j=a},requestThenInstallWebNotifications:function(a,b,c,d,e,f){m(),this._showRequestPermissions({appID:a,baseElement:b,browserName:c,hasEnoughFriendsToRequestPush:d,sampleNotificationAvatarURI:f,sampleNotificationMessage:e,showSpinnerWhileRequesting:!0,isWebNotifications:!0,onAcceptCallback:this._getOnWebNotificationsDialogAccept({appID:a,callback:function(c){c==="granted"?(l("install",a),h.emitRemote("complete"),p(b),o(a)):(l("deny",a),n(a))}})})},requestThenInstallPush:function(a,c,d,e,f,g,h,i,j,k,l,n,o){__p&&__p();var p=this,s=b("PushRegistration").get(a,c);e=s.isPushRegistered(e,b("XPushRegisterServiceWorkerController"),b("XBrowserPushDisabledController"),b("AsyncRequest"),!!g,function(){q(d,s)},i);b("Promise").all([e,b("incognito")()]).then(function(e){var g=e[0];e=e[1];if(g||e)return;m();b("PushRegistration").pushPermissionIsPending()?p._showRequestPermissions({appID:c,baseElement:d,hasEnoughFriendsToRequestPush:j,isWebNotifications:!1,onAcceptCallback:p._getOnPushNotificationsAccept({appID:c,baseElement:d,browserName:h,path:a,workerIsForPushOnly:i}),sampleNotificationAvatarURI:l,sampleNotificationMessage:k,showSpinnerWhileRequesting:n,wasXOuted:f,hideSecondStep:o}):!f&&b("PushRegistration").pushPermissionIsOn()&&r(a,c,d,h,i)})["catch"](function(){b("PushRegistration").pushPermissionIsDenied()&&m()})},installPush:function(a,c,d,e,f,g,h,i,j,k,n,o){__p&&__p();var s=this;k===void 0&&(k="default");n===void 0&&(n=0);o===void 0&&(o=0);var t=typeof k==="string"&&k!=="default",u=b("PushRegistration").get(a,c);e=u.isPushRegistered(e,b("XPushRegisterServiceWorkerController"),b("XBrowserPushDisabledController"),b("AsyncRequest"),!!g,function(){q(d,u)},i);b("Promise").all([e,b("incognito")()]).then(function(e){__p&&__p();var g=e[0];e=e[1];if(g||e)return;m();if(b("PushRegistration").pushPermissionIsPending()){if(!j||f)return;b("QE2Logger").logExposureForUser("chrome_push_custom_prompt_experiments");t?(b("ReactDOM").render(b("React").createElement(b("NotificationPermissionDummyRequest.react"),{promptTitleIndex:n,promptBodyIndex:o,onNotNow:function(){s._recordUserDummyPromptAction("dummy_prompt_not_now",c),p(d)},onAccept:function(){s._recordUserDummyPromptAction("dummy_prompt_accept",c),s._renderDefaultPushRequest({path:a,appID:c,baseElement:d,browserName:h,workerIsForPushOnly:i})},onIgnore:function(){s._recordUserDummyPromptAction("dummy_prompt_dismissed",c),p(d)},isBinary:k==="binary"}),d),l("dummy_prompt_request",c,"dummy_prompt")):s._renderDefaultPushRequest({path:a,appID:c,baseElement:d,browserName:h,workerIsForPushOnly:i})}else f||r(a,c,d,h,i)})["catch"](function(){b("PushRegistration").pushPermissionIsDenied()&&m()})},_recordUserDummyPromptAction:function(a,c){l(a,c,"dummy_prompt");c=b("XBrowserPushDummyPromptActionController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({user_action:a}).setMethod("POST").send()},_renderDefaultPushRequest:function(a){var c=a.path,d=a.appID,e=a.baseElement,f=a.browserName;a=a.workerIsForPushOnly;b("ReactDOM").render(b("React").createElement(b("NotificationPermissionRequest.react"),{onHide:function(){p(e)}}),e);r(c,d,e,f,a)},_showRequestPermissions:function(a){var c=a.appID,d=a.baseElement,e=a.hasEnoughFriendsToRequestPush,f=a.isWebNotifications,g=a.onAcceptCallback,i=a.sampleNotificationAvatarURI,j=a.sampleNotificationMessage,k=a.showSpinnerWhileRequesting,m=a.wasXOuted;a=a.hideSecondStep;h.once("complete",function(a){p(d),l("twostep_suppressed",c)});if(!e||m)return;l("twostep_request",c);b("ReactDOM").render(b("React").createElement(b("NotificationPermissionRequestWithPreview.react"),{isWebNotifications:f,notificationImage:i||void 0,notificationMessage:j||void 0,onAccept:g,onClose:function(){l("twostep_notnow",c),h.emitRemote("complete"),n(c),p(d)},showSpinnerWhileRequesting:k,hideSecondStep:a}),d)},_getOnPushNotificationsAccept:function(a){var c=a.appID,d=a.baseElement,e=a.browserName,f=a.callback,g=a.path,i=a.workerIsForPushOnly;return function(){l("twostep_accept",c),h.emitRemote("complete"),b("promiseDone")(r(g,c,d,e,i).then(f,f))}},_getOnWebNotificationsDialogAccept:function(a){var b=this,c=a.appID,d=a.callback;return function(){l("twostep_accept",c),b._requestWebNotificationsFromBrowser(c,d)}},_requestWebNotificationsFromBrowser:function(a,b){l("turn_on",a),g.requestPermission(b)}};e.exports=a}),null);
__d("XBrowserPushMuteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/mute/",{appid:{type:"Int",required:!0},push_endpoint:{type:"String",required:!0},surface:{type:"Enum",required:!0,enumType:1},mute_for:{type:"Enum",enumType:0},__asyncDialog:{type:"Int"}})}),null);
__d("BrowserPushMuteOptionsLink",["fbt","regeneratorRuntime","AsyncRequest","PushRegistration","React","ReactDOM","XBrowserPushMuteController","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a,c,d){c=b("PushRegistration").get(c,d);b("promiseDone")(c.getPushSubscription(),function(c){if(c){c=b("XBrowserPushMuteController").getURIBuilder().setEnum("surface","jewel").setString("push_endpoint",c.endpoint).setInt("appid",d).getURI();new(b("AsyncRequest"))().setURI(c).setRelativeTo(a).send()}})}a={showMuteOptions:function(a,c,d){__p&&__p();var e,f;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=b("PushRegistration").get(c,d);i.prev=1;i.next=4;return b("regeneratorRuntime").awrap(e.getPushSubscription());case 4:f=i.sent;i.next=10;break;case 7:i.prev=7,i.t0=i["catch"](1),f=null;case 10:if(!(!b("PushRegistration").pushPermissionIsOn()||!f)){i.next=12;break}return i.abrupt("return");case 12:b("ReactDOM").render(b("React").createElement("a",{href:"#",onClick:function(){h(a,c,d)}},g._("Silenciar")),a);case 13:case"end":return i.stop()}},null,this,[[1,7]])}};e.exports=a}),null);