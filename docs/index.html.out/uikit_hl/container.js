// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.container');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.container._STAR_uk_container_STAR_ = "";
uikit_hl.container._STAR_small_STAR_ = null;
uikit_hl.container._STAR_large_STAR_ = null;
uikit_hl.container._STAR_expand_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.container.container = (function() { 
var uikit_hl$container$container__delegate = function (args__9094__auto__){
var vec__9915 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9915,(0),null);
var kids = cljs.core.nth.call(null,vec__9915,(1),null);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.container._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.container._STAR_large_STAR_);
var expand = new cljs.core.Keyword(null,"expand","expand",595248157).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.container._STAR_expand_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"expand","expand",595248157));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uk-container","uk-container",1325873966),true,new cljs.core.Keyword(null,"uk-container-small","uk-container-small",1080390782),small,new cljs.core.Keyword(null,"uk-container-large","uk-container-large",-1603789166),large,new cljs.core.Keyword(null,"uk-container-expand","uk-container-expand",1513482519),expand], null)),kids);
};
var uikit_hl$container$container = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9918__i = 0, G__9918__a = new Array(arguments.length -  0);
while (G__9918__i < G__9918__a.length) {G__9918__a[G__9918__i] = arguments[G__9918__i + 0]; ++G__9918__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9918__a,0,null);
} 
return uikit_hl$container$container__delegate.call(this,args__9094__auto__);};
uikit_hl$container$container.cljs$lang$maxFixedArity = 0;
uikit_hl$container$container.cljs$lang$applyTo = (function (arglist__9919){
var args__9094__auto__ = cljs.core.seq(arglist__9919);
return uikit_hl$container$container__delegate(args__9094__auto__);
});
uikit_hl$container$container.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$container$container__delegate;
return uikit_hl$container$container;
})()
;

//# sourceMappingURL=container.js.map