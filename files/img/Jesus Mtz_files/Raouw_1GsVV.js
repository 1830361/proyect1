if (self.CavalryLogger) { CavalryLogger.start_js(["GPFob"]); }

__d("TranslationRating",[],(function(a,b,c,d,e,f){e.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5}}),null);
__d("ProfileBrowserLink",["URI"],(function(a,b,c,d,e,f){var g="/ajax/browser/dialog/",h="/browse/",i=function(a,c,d){return new(b("URI"))(a+c).setQueryData(d)};a={constructPageURI:function(a,b){return i(h,a,b)},constructDialogURI:function(a,b){return i(g,a,b)}};e.exports=a}),null);
__d("ProfileBrowserTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({LIKES:"likes",FRIEND_CHECKINS:"friendcheckins",FRIENDED_FANS_OF:"friended_fans_of",GROUP_ADMINS:"group_admins",GROUP_MEMBERS:"group_members",GROUP_FRIEND_MEMBERS:"group_friend_members",GROUP_MESSAGE_VIEWERS:"group_message_viewers",LIVE_VIDEO_VIEWERS:"live_video_viewers",MUTUAL_FRIENDS:"mutual_friends",TODO_LIST_ASSIGNEES:"todo_list_assignees",GROUP_JOIN_REQUESTERS_FRIENDS_IN_GROUP:"group_join_requesters_friends_in_group",PAGE_FEATURED_ADMINS:"featured_admins",EXTERNALTASK_SUBSCRIBERS:"task_subscribers",WORK_ADMIN_GROUP_MEMBERS:"work_admin_group_members",WORK_ADMIN_GROUP_ADMINS:"work_admin_group_admins"});e.exports=a}),null);
__d("TranslationContentLabel",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({POST:"post",GENERIC:"generic"})}),null);
__d("ContentTranslationStrings",["fbt","TranslationContentLabel","TranslationRating"],(function(a,b,c,d,e,f,g){__p&&__p();a={SEE_TRANSLATION:g._("Ver traducci\u00f3n"),SEE_TRANSLATION_TIP:g._("Traducir este comentario"),NO_TRANSLATION_AVAILABLE:g._("No hay ninguna traducci\u00f3n disponible"),AUTOMATICALLY_TRANSLATED:g._("Traducido autom\u00e1ticamente"),HIDE_ORIGINAL:g._("Ocultar original"),SEE_ORIGINAL:g._("Ver original"),SEE_ORIGINAL_LINK:g._("Ver original"),UNDO:g._("Deshacer"),CANCEL:g._("Cancelar"),SUBMIT:g._("Enviar"),DONE:g._("Cerrar"),CLOSE:g._("Cerrar"),SEARCH:g._("Buscar"),ENTER_TRANSLATION:g._("Escribe aqu\u00ed tu traducci\u00f3n"),EDIT_TRANSLATION_THANKS:g._("\u00a1Gracias! Tus comentarios nos ayudan a mejorar la calidad de nuestras traducciones."),EDIT_TRANSLATION_DIALOG_TITLE_ERROR:g._("Error en el env\u00edo"),EDIT_TRANSLATION_MENU:g._("Tengo una propuesta de traducci\u00f3n mejor"),RATE_TRANSLATION:g._("Calificar esta traducci\u00f3n"),I_DONT_KNOW:g._("No lo s\u00e9"),NO_MATCHING_LANGUAGES:g._("No hay coincidencias de idiomas"),LANGUAGE_SETTINGS:g._("Configuraci\u00f3n de idioma"),CLICK_TO_RATE:g._("Haz clic en una estrella para calificar"),TAP_TO_RATE:g._("Toca una estrella para calificarla"),ORIGINAL_TEXT:g._("Texto original:"),YOUR_TRANSLATION:g._("Tu traducci\u00f3n:"),SETTINGS_SAVED:g._("La configuraci\u00f3n de idioma se guard\u00f3 correctamente."),REPORT_LANGUAGE_THANKS_FACEBOOK:g._("Gracias por reportar este error. Tus comentarios ayudan a mejorar las traducciones para todos en Facebook."),REPORT_LANGUAGE_THANKS_WORKPLACE:g._("Gracias por avisarnos sobre este error. Tus comentarios mejoran la traducci\u00f3n para todos en Workplace."),LANGUAGE_SETTINGS_REMINDER:g._("Puedes cambiar esto cuando quieras en las configuraciones de idioma."),CROWDSOURCING_TARGET_DIALECT_DIALOG:g._("Configuraci\u00f3n"),TRANSLATE_ALL_TEXT:g._("Traducir todos los comentarios"),NUM_TRANSLATIONS_TEXT:g._("traducciones"),getTranslatedFromTo:function(a,b){return g._("Traducci\u00f3n del {source language} al {target language}",[g._param("source language",a),g._param("target language",b)])},getTranslatedFrom:function(a){return g._("Traducido del {source language}",[g._param("source language",a)])},getReportLanguageDialogBody:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("\u00bfSeguro que este contenido no estaba en {language}?",[g._param("language",a)]):g._("\u00bfSeguro que esta publicaci\u00f3n no estaba en {language}?",[g._param("language",a)])},getReportLanguage:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("El contenido no estaba escrita en {language}",[g._param("language",a)]):g._("La publicaci\u00f3n no estaba escrita en {language}",[g._param("language",a)])},getReportLanguageSelector:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("Este contenido ya estaba en: {language selector}",[g._param("language selector",a)]):g._("Esta publicaci\u00f3n ya estaba en: {language selector}",[g._param("language selector",a)])},getNeverTranslate:function(a){return g._("No traducir nunca contenido en {language}",[g._param("language",a)])},getNeverTranslateDialog:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("\u00bfSeguro? El contenido en {language} no se traducir\u00e1.",[g._param("language",a)]):g._("\u00bfSeguro? Las publicaciones en {language} no se traducir\u00e1n.",[g._param("language",a)])},getDisableAutoTranslate:function(a){return g._("Desactivar la traducci\u00f3n autom\u00e1tica para {dialect}",[g._param("dialect",a)])},getDisableAutoTranslateDialog:function(a,c){c===void 0&&(c=null);return c===b("TranslationContentLabel").GENERIC?g._("\u00bfSeguro? El contenido en {language} no se traducir\u00e1n autom\u00e1ticamente.",[g._param("language",a)]):g._("\u00bfSeguro? Las publicaciones en {dialect} no se traducir\u00e1n autom\u00e1ticamente.",[g._param("dialect",a)])},getUserFeedbackTitleForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("Muy mala.");case b("TranslationRating").BAD:return g._("Mala.");case b("TranslationRating").OK:return g._("Aceptable.");case b("TranslationRating").GOOD:return g._("Buena.");case b("TranslationRating").VERY_GOOD:return g._("Muy buena.");default:return null}},getUserFeedbackDescriptionForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("No se entiende nada.");case b("TranslationRating").BAD:return g._("No se entiende casi nada.");case b("TranslationRating").OK:return g._("Se entiende lo suficiente.");case b("TranslationRating").GOOD:return g._("Se entiende casi todo.");case b("TranslationRating").VERY_GOOD:return g._("Se entiende todo.");default:return null}}};e.exports=a}),null);
__d("XLtgPostTranslationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/see_translation/",{ftid:{type:"String",required:!0},text_size:{type:"Enum",defaultValue:"medium",enumType:1},data_ft:{type:"String"},tn:{type:"String"}})}),null);
__d("highlight",["Animation","Style"],(function(a,b,c,d,e,f){function a(a,c,d,e){new(b("Animation"))(a).from("background",e||"#fff9d7").to("background",d||"#fff").ease(b("Animation").ease.both).duration(2e3).ondone(function(){b("Style").set(a,"background",""),c&&c()}).go()}e.exports=a}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","UFIUIEvents","XLtgPostTranslationController","collectDataAttributes","ge","highlight"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={_renderTranslation:function(a,c){if(!a||!a.parentNode)return;var d=b("DOM").create("div",{className:"_63tb"},c||b("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);b("DOM").replace(a,d);c&&b("highlight")(d)},bindListener:function(a,c){__p&&__p();var d=this;b("Event").listen(a,"click",function(e){__p&&__p();e.prevent();var f=b("ge")("translationSpinnerPlaceholder_"+c);f&&b("ReactDOM").render(b("React").createElement(b("LoadingIndicator.react"),{size:"small",color:"white"}),f);f=e.getTarget();e=b("collectDataAttributes")(f,["ft"]);f=b("XLtgPostTranslationController").getURIBuilder().setString("ftid",c).setString("data_ft",JSON.stringify(e.ft)).getURI();new(b("AsyncRequest"))().setURI(f).setHandler(function(c){c=c.getPayload();d._renderTranslation(a,c&&c.text);b("Arbiter").inform(b("UFIUIEvents").TranslationRendered)}).setErrorHandler(function(){d._renderTranslation(a,null)}).send()})}};e.exports=a}),null);
__d("TranslationTrigger",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion",TRANSLATE_ALL:"translate_all",LOGGED_OUT_AUTO_TRANSLATION:"logged_out_auto_translation",SEE_TRANSLATION_WITH_ORIGINAL_TOGGLE:"see_translation_with_original_toggle",SEE_TRANSLATION_WITHOUT_ORIGINAL_TOGGLE:"see_translation_without_original_toggle",NONE:"none"})}),null);
__d("UserHovercardLocation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INVALID:"unknown",NONE:"none",HC_FRIEND_BROWSER:"hc_friend_browser",HC_FRIENDS_TAB:"hc_friends_tab",HC_PROFILE_BROWSER:"hc_profile_browser",HC_STREAM:"hc_stream",HC_TIMELINE:"hc_timeline",HC_UFI:"hc_ufi",HC_REMINDER_POKE:"hc_reminder_poke",HC_REMINDER_BIRTHDAY:"hc_reminder_birthday",HC_EVENT_GUEST:"hc_event_guest",HC_UNKNOWN:"hc_unknown",HC_NUX:"hc_nux_page_suggestion",FRIEND_BROWSER:"friend_browser",FRIENDS_TAB:"friends_tab",PROFILE_BROWSER:"profile_browser",STREAM:"stream",TIMELINE:"timeline",UFI:"ufi",UFI_ADMIN:"ufi_admin",REMINDER_POKE:"reminder_poke",REMINDER_BIRTHDAY:"reminder_birthday",REMINDER_FACEVERSARY:"reminder_faceversary",REMINDER_NAMEDAY:"reminder_nameday",REMINDER_WORK_ANNIVERSARY:"reminder_work_anniversary",EVENT_GUEST:"event_guest",NUX_PAGE_SUGGESTION:"hc_nux_page_suggestion",TIMELINE_FRIENDS_BOX:"tl_fr_box",CHAT:"chat",GROUP:"group",GROUP_DIALOG:"group_dialog",MARKETPLACE_HOVERCARD:"marketplace_hovercard"})}),null);
__d("NFXURI",["ActorURI","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){c===void 0&&(c=null);a=new(b("URI"))("/ajax/nfx/start_dialog").setQueryData({context:a});c!=null&&(a=b("ActorURI").create(a,c));return a}function c(a){var c=a.reportable_ent_token,d=a.story_location,e=a.tracking;a=a.actor_id;d=new(b("URI"))("/ajax/nfx/start_dialog").setQueryData({story_location:d,reportable_ent_token:c});e!==null&&d.addQueryData({tracking:e});a!=null&&(d=b("ActorURI").create(d,a));return d}d={withContextString:a,withEntReportable:c};e.exports=d}),null);