// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.alert');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.alert._STAR_uk_alert_STAR_ = "";
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-alert","uk-alert",-1370764525),(function (elem,_,v){
return UIkit.alert(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.alert.alert = (function() { 
var uikit_hl$alert$alert__delegate = function (args__9094__auto__){
var vec__10155 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10155,(0),null);
var kids = cljs.core.nth.call(null,vec__10155,(1),null);
var alert = new cljs.core.Keyword(null,"uk-alert","uk-alert",-1370764525).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.alert._STAR_uk_alert_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-alert","uk-alert",-1370764525),alert);
return hoplon.core.div.call(null,attr__$1,kids);
};
var uikit_hl$alert$alert = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10158__i = 0, G__10158__a = new Array(arguments.length -  0);
while (G__10158__i < G__10158__a.length) {G__10158__a[G__10158__i] = arguments[G__10158__i + 0]; ++G__10158__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10158__a,0,null);
} 
return uikit_hl$alert$alert__delegate.call(this,args__9094__auto__);};
uikit_hl$alert$alert.cljs$lang$maxFixedArity = 0;
uikit_hl$alert$alert.cljs$lang$applyTo = (function (arglist__10159){
var args__9094__auto__ = cljs.core.seq(arglist__10159);
return uikit_hl$alert$alert__delegate(args__9094__auto__);
});
uikit_hl$alert$alert.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$alert$alert__delegate;
return uikit_hl$alert$alert;
})()
;

//# sourceMappingURL=alert.js.map