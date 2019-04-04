if (self.CavalryLogger) { CavalryLogger.start_js(["tGBia"]); }

__d("ProfileFunFactsStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={SINGLE_PROMPT_ANSWER_QUESTION:g._("Agregar respuesta"),SINGLE_PROMPT_ANSWER_QUESTION_SHORT:g._("Responder"),SINGLE_PROMPT_ASK_QUESTION_PLACEHOLDER:g._("\u00bfPor qu\u00e9 sientes curiosidad?"),SINGLE_PROMPT_ASK_NOTICE:g._("Tu pregunta se agregar\u00e1 a una lista de preguntas que cualquier persona en Facebook puede responder. La privacidad de tu publicaci\u00f3n no cambiar\u00e1."),SINGLE_PROMPT_ASK_NUX:g._("Crea preguntas para que tus amigos o cualquier persona en Facebook las respondan"),SINGLE_PROMPT_DIALOG_TITLE:g._("\u00bfLo sab\u00edas?"),SINGLE_PROMPT_BACK_BUTTON:g._("Anterior"),SINGLE_PROMPT_NEXT_BUTTON:g._("Siguiente"),SINGLE_PROMPT_SAVE_AND_TAG:g._("Guardar y etiquetar amigos"),MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT:g._("Ya no estar\u00e1 disponible para que las personas la respondan y tu nombre se eliminar\u00e1 de las publicaciones existentes. No podr\u00e1s deshacer esta acci\u00f3n."),MANAGE_QUESTIONS_DELETE_DIALOG_TITLE:g._("\u00bfArchivar esta pregunta?"),MANAGE_QUESTIONS_DELETE_BUTTON_TEXT:g._("Archivar"),MANAGE_QUESTIONS_NULL_STATE_TITLE:g._("Todav\u00eda no hay preguntas"),MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT:g._("Crea preguntas para que tus amigos o cualquier persona en Facebook las respondan."),MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT:g._("Crear pregunta"),QUESTION_OF_THE_DAY_LABEL:g._("PREGUNTA DEL D\u00cdA"),MTOUCH_SINGLE_PROMPT_COMPOSER_BUTTON:g._("Agrega tu respuesta..."),MTOUCH_SINGLE_PROMPT_BACK_BUTTON:g._("ANTERIOR"),MTOUCH_SINGLE_PROMPT_NEXT_BUTTON:g._("SIGUIENTE")};e.exports=a}),null);
__d("XProfileFunFactsSelectorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/selector/",{entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},group_id:{type:"FBID"},pinned_prompt_id:{type:"FBID"},show_ask_tagger:{type:"Exists",defaultValue:!1},skip_selector:{type:"Bool",defaultValue:!1}})}),null);
__d("XProfileFunFactsUserPromptDisableController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/user_prompt/disable/",{prompt_id:{type:"FBID",required:!0}})}),null);
__d("XProfileFunFactsUserPromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/user_prompt/fetch/",{})}),null);
__d("FunFactManagePromptsComponent.react",["ix","cx","AsyncRequest","CurrentUser","FacebookAppIDs","FBConfirmDialog.react","FDSButton.react","FlexLayout.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","React","ScrollableArea.react","ShimButton.react","Text.react","TextWithEmoticons.react","XProfileFunFactsSelectorController","XProfileFunFactsUserPromptDisableController","XProfileFunFactsUserPromptFetchController","XUISpinner.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=277;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isDisabling:!1,isLoading:!1,prompts:[],selectedPrompt:null,showConfirmDialog:!1},d.$2=function(){__p&&__p();var a=d.state.selectedPrompt;if(!a)return;d.setState({isDisabling:!0,showConfirmDialog:!1});var c=b("XProfileFunFactsUserPromptDisableController").getURIBuilder().setFBID("prompt_id",a.id.toString()).getURI();new(b("AsyncRequest"))(c).setHandler(function(){var c=d.state.prompts.filter(function(b){return b.id!==a.id});d.setState({isDisabling:!1,prompts:c});new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("delete").setItemType("ask_prompt").setAppID(b("FacebookAppIDs").WWW).log()}).setErrorHandler(function(){d.setState({isDisabling:!1})}).send()},d.$3=function(){d.setState({selectedPrompt:null,showConfirmDialog:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a=this,c=b("XProfileFunFactsUserPromptFetchController").getURIBuilder().getURI();this.setState({isLoading:!0});new(b("AsyncRequest"))(c).setHandler(function(b){a.setState({isLoading:!1,prompts:b.getPayload()})}).send()};d.$4=function(a){this.setState({selectedPrompt:a,showConfirmDialog:!0})};d.$5=function(){var a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",b("ProfileFunFactsEntryPoint").COLLECTION).setExists("show_ask_tagger",!0).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))(a).send()};d.componentDidMount=function(){this.$1(),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface("unknown").setEngagementType("enter").setItemType("manage_tab").setAppID(b("FacebookAppIDs").WWW).log()};d.render=function(){var a=this;if(this.state.isLoading)return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_1oen",direction:"vertical",justify:"center"},b("React").createElement(b("XUISpinner.react"),{size:"large"}));if(this.state.prompts.length===0)return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_1oen",direction:"vertical",justify:"center"},b("React").createElement(b("XUIText.react"),{size:"header2"},b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_TITLE),b("React").createElement(b("XUIText.react"),{className:"_3-96 _3-8w _2pib _52jv",size:"body1"},b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_TEXT),b("React").createElement(b("FDSButton.react"),{label:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT,onClick:this.$5}));var c=null;this.state.showConfirmDialog&&(c=b("React").createElement(b("FBConfirmDialog.react"),{confirmButtonText:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_BUTTON_TEXT,content:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_DIALOG_CONTENT,onCancel:this.$3,onConfirm:this.$2,shown:!0,title:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_DELETE_DIALOG_TITLE}));return b("React").createElement("div",{className:"_3e-y"},b("React").createElement(b("ScrollableArea.react"),{height:i},this.state.prompts.map(function(c){return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_4d8w _2ph_",justify:"all",key:c.id},b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("TextWithEmoticons.react"),{size:20,text:c.emoji}),b("React").createElement(b("Text.react"),{className:"_4d8x _3-9a"},c.title)),a.state.isDisabling&&a.state.selectedPrompt===c?b("React").createElement(b("XUISpinner.react"),{className:"_3-8_"}):b("React").createElement(b("ShimButton.react"),{className:"_1oeo",onClick:a.$4.bind(a,c)},b("React").createElement(b("Image.react"),{src:g("493879")})))})),c)};return c}(b("React").Component);e.exports=a}),null);
__d("ProfileFunFactsTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COLLECTION_ENTRY_POINT:"profile_fun_facts_collection_entry",COMPOSER_TAGGER:"profile_fun_facts_composer_tagger",DIALOG:"profile_fun_facts_dialog",SELECTOR_RANDOMIZE:"profile_fun_facts_selector_randomize",SELECTOR_SELECT:"profile_fun_facts_selector_select"})}),null);
__d("FunFactSinglePromptSelectorActionBar.react",["ix","cx","FlexLayout.react","Image.react","ProfileFunFactsEntryPoint","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION||a.entryPoint===b("ProfileFunFactsEntryPoint").PERMALINK;return b("React").createElement(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),disabled:a.backButtonDisabled||a.disabled,image:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("533029"):g("513239")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_BACK_BUTTON,labelIsHidden:c,onClick:a.onUndo,size:"large"})}function j(a){var c=a.entryPoint===b("ProfileFunFactsEntryPoint").COLLECTION||a.entryPoint===b("ProfileFunFactsEntryPoint").PERMALINK;return b("React").createElement(b("XUIButton.react"),{className:"_1c71"+(c?"":" _43_y"),"data-testid":b("ProfileFunFactsTestIDs").SELECTOR_RANDOMIZE,disabled:a.disabled,imageRight:b("React").createElement(b("Image.react"),{src:a.hasBackgroundStyle?g("514459"):g("408315")}),label:b("ProfileFunFactsStrings").SINGLE_PROMPT_NEXT_BUTTON,labelIsHidden:c,onClick:a.onRandomize,size:"large"})}function k(a){return b("React").createElement(b("XUIButton.react"),{className:"_4ysf","data-testid":b("ProfileFunFactsTestIDs").SELECTOR_SELECT,disabled:a.disabled,label:b("ProfileFunFactsStrings").SINGLE_PROMPT_ANSWER_QUESTION_SHORT,onClick:a.onSelect,size:"large",use:"confirm"})}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.hasBackgroundStyle;return b("React").createElement(b("FlexLayout.react"),{className:(a?"_1c72":"")+" _2ph_",justify:"all"},b("React").createElement(i,this.props),b("React").createElement(k,this.props),b("React").createElement(j,this.props))};return c}(b("React").Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorBody.react",["cx","FlexLayout.react","React","ShimButton.react","TextWithEmoticons.react","XUISpinner.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){var c=a.prompt;a=a.onSelect;return b("React").createElement("div",{className:c.backgroundStyle?"_3ljc":""},b("React").createElement(b("ShimButton.react"),{className:"_3dlu",onClick:a},b("React").createElement("div",null,b("React").createElement(b("TextWithEmoticons.react"),{key:"emoji",size:32,text:c.emoji}),b("React").createElement(b("XUIText.react"),{className:"_3gi9 _3-8y",display:"block",size:"header1"},c.title),c.isCrowdsourced?b("React").createElement(b("XUIText.react"),{className:"_68km _3-8w",display:"block"},c.attribution):null)))}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.prompt;a=a.onSelect;return b("React").createElement(b("FlexLayout.react"),{align:c?"stretch":"center",className:"_3gia",direction:"vertical",justify:"center"},c?b("React").createElement(h,{onSelect:a,prompt:c}):b("React").createElement(b("XUISpinner.react"),{size:"large"}))};return c}(b("React").Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorHeader.react",["ix","cx","CurrentUser","FacebookAppIDs","FlexLayout.react","Image.react","ProfileEngagementTypedLogger","ProfileFunFactsStrings","React","ShimButton.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a){a=a.prompt;if(!a.isQuestionOfTheDay)return null;a=a.backgroundStyle?g("489589"):g("507318");return b("React").createElement(b("FlexLayout.react"),{align:"center",justify:"center"},b("React").createElement(b("Image.react"),{className:"_2d1b",src:a}),b("React").createElement(b("XUIText.react"),{className:"_2d1c _3-8s",weight:"bold"},b("ProfileFunFactsStrings").QUESTION_OF_THE_DAY_LABEL),b("React").createElement(b("Image.react"),{className:"_68g4",src:a}))}function j(a){a=a.prompt.timeRemaining;return!a?null:b("React").createElement(b("FlexLayout.react"),{justify:"center"},b("React").createElement(b("XUIText.react"),{className:"_68g6"},a))}function k(a){var c=a.prompt,d=a.entryPoint,e=c.socialProof;if(!e)return null;var f=function(){var f=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(a.isGroup?"group":"unknown").setEngagementType("tap").setItemType("social_proof").setEventMetadata({entry_point:d,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay?"true":"false"}).setAppID(b("FacebookAppIDs").WWW),g=null;e.friendsAnswersFeedURI?(f.setItemSubtype("friends_answers_feed"),g=e.friendsAnswersFeedURI):e.answerPermalinkURI?(f.setItemSubtype("permalink"),g=e.answerPermalinkURI):f.setItemSubtype("text");f.log();g!==null&&window.open(g)},g=e.friendsAnswersFeedURI||e.answerPermalinkURI;return b("React").createElement(b("ShimButton.react"),{className:"_68g8"+(g?" _4wzw":""),onClick:f},b("React").createElement(b("FlexLayout.react"),{align:"start",className:"_2pin _2pit",direction:"vertical"},e.label))}a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!!this.props.prompt.backgroundStyle;return b("React").createElement("div",{className:(a?"_2eqj":"")+" _3-8n"},b("React").createElement(i,this.props),b("React").createElement(j,this.props),b("React").createElement(k,this.props))};return c}(b("React").Component);e.exports=a}),null);
__d("XProfileFunFactsSinglePromptFetchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/fun_facts/single_prompt/fetch/",{cursor:{type:"String"},entry_point:{type:"Enum",defaultValue:"unknown",enumType:1},fun_fact_prompt_types:{type:"EnumVector",defaultValue:[],enumType:{member:1}},fetch_amount:{type:"Int"},pinned_prompt_id:{type:"FBID"},random_seed:{type:"Int"}})}),null);
__d("FunFactSinglePromptSelector.react",["cx","AsyncRequest","CurrentUser","FacebookAppIDs","FlexLayout.react","FunFactSinglePromptSelectorActionBar.react","FunFactSinglePromptSelectorBody.react","FunFactSinglePromptSelectorHeader.react","ProfileEngagementTypedLogger","Random","React","XProfileFunFactsSinglePromptFetchController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=10;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={cursor:null,isLoading:!0,prompts:[],selectedIndex:-1},d.$1=b("Random").uint32(),d.$2=null,d.$5=function(){var a=d.state.selectedIndex;a<d.state.prompts.length-1?d.setState({selectedIndex:a+1}):d.state.cursor?d.$3():d.setState({selectedIndex:0});d.$4("refresh",d.state.prompts[a])},d.$6=function(){var a=d.state.selectedIndex;if(a<=0)return;d.setState({selectedIndex:a-1});d.$4("undo",d.state.prompts[a])},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$3(this.props.pinnedPromptID)};d.componentWillUnmount=function(){this.$2&&this.$2.abandon()};d.componentDidUpdate=function(a,b){this.state.selectedIndex!==b.selectedIndex&&this.$4("impression",this.state.prompts[this.state.selectedIndex])};d.$4=function(a,c){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType(a).setItemType("question_prompt").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,prompt_id:c.id,is_qotd:c.isQuestionOfTheDay?"true":"false"}).setAppID(b("FacebookAppIDs").WWW).log()};d.$7=function(a){this.props.onSelect(this.state.prompts[this.state.selectedIndex],a),new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType("exit").setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint,tap_target:"add_content"}).setAppID(b("FacebookAppIDs").WWW).log()};d.$3=function(a){var c=this,d=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setInt("fetch_amount",h).setInt("random_seed",this.$1);a&&d.setFBID("pinned_prompt_id",a.toString());this.state.cursor&&d.setString("cursor",this.state.cursor);this.setState({isLoading:!0});this.$2=new(b("AsyncRequest"))(d.getURI()).setHandler(function(a){a=a.getPayload();var b=c.state.selectedIndex+1,d=c.state.prompts.concat(a.prompts);c.setState({cursor:a.cursor,isLoading:!1,prompts:d,selectedIndex:b})});this.$2.send()};d.$8=function(){return this.state.isLoading&&this.state.selectedIndex<0?null:this.state.prompts[this.state.selectedIndex].backgroundStyle};d.render=function(){var a=this.state.isLoading?null:this.state.prompts[this.state.selectedIndex],c=b("React").createElement("div",null);a!==null&&(c=b("React").createElement(b("FunFactSinglePromptSelectorHeader.react"),{entryPoint:this.props.entryPoint,isGroup:this.props.isGroup,prompt:a}));return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_2nz1",direction:"vertical",justify:"all",style:this.$8()||void 0},c,b("React").createElement(b("FunFactSinglePromptSelectorBody.react"),{onSelect:this.$7.bind(this,"card"),prompt:a}),b("React").createElement(b("FunFactSinglePromptSelectorActionBar.react"),{backButtonDisabled:this.state.selectedIndex===0,disabled:this.state.isLoading,entryPoint:this.props.entryPoint,hasBackgroundStyle:!!this.$8(),onRandomize:this.$5,onSelect:this.$7.bind(this,"add_answer_footer"),onUndo:this.$6}))};return c}(b("React").Component);e.exports=a}),null);
__d("FunFactSinglePromptSelectorContainer.react",["cx","AsyncRequest","FunFactSinglePromptSelector.react","React","XProfileFunFactsSelectorController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",d.props.entryPoint).setFBID("pinned_prompt_id",a.id.toString()).setBool("skip_selector",!0).getURI();new(b("AsyncRequest"))().setURI(a).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:"_64nu"},b("React").createElement(b("FunFactSinglePromptSelector.react"),{entryPoint:this.props.entryPoint,onSelect:this.$1,pinnedPromptID:this.props.pinnedPromptID}))};return c}(b("React").Component);e.exports=a}),null);