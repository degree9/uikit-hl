// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.offcanvas');
goog.require('cljs.core');
goog.require('cljsjs.uikit');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.offcanvas._STAR_uk_offcanvas_STAR_ = "";
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-offcanvas","uk-offcanvas",97881009),(function (elem,_,v){
return UIkit.offcanvas(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.offcanvas.content = (function() { 
var uikit_hl$offcanvas$content__delegate = function (args__9094__auto__){
var vec__10037 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10037,(0),null);
var kids = cljs.core.nth.call(null,vec__10037,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-offcanvas-content","uk-offcanvas-content",-796821258),true], null)),kids);
};
var uikit_hl$offcanvas$content = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10040__i = 0, G__10040__a = new Array(arguments.length -  0);
while (G__10040__i < G__10040__a.length) {G__10040__a[G__10040__i] = arguments[G__10040__i + 0]; ++G__10040__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10040__a,0,null);
} 
return uikit_hl$offcanvas$content__delegate.call(this,args__9094__auto__);};
uikit_hl$offcanvas$content.cljs$lang$maxFixedArity = 0;
uikit_hl$offcanvas$content.cljs$lang$applyTo = (function (arglist__10041){
var args__9094__auto__ = cljs.core.seq(arglist__10041);
return uikit_hl$offcanvas$content__delegate(args__9094__auto__);
});
uikit_hl$offcanvas$content.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$offcanvas$content__delegate;
return uikit_hl$offcanvas$content;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.offcanvas.offcanvas = (function() { 
var uikit_hl$offcanvas$offcanvas__delegate = function (args__9094__auto__){
var vec__10045 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10045,(0),null);
var kids = cljs.core.nth.call(null,vec__10045,(1),null);
var offcanvas = new cljs.core.Keyword(null,"uk-offcanvas","uk-offcanvas",97881009).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.offcanvas._STAR_uk_offcanvas_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-offcanvas","uk-offcanvas",97881009),offcanvas);
return hoplon.core.div.call(null,attr__$1,kids);
};
var uikit_hl$offcanvas$offcanvas = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10048__i = 0, G__10048__a = new Array(arguments.length -  0);
while (G__10048__i < G__10048__a.length) {G__10048__a[G__10048__i] = arguments[G__10048__i + 0]; ++G__10048__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10048__a,0,null);
} 
return uikit_hl$offcanvas$offcanvas__delegate.call(this,args__9094__auto__);};
uikit_hl$offcanvas$offcanvas.cljs$lang$maxFixedArity = 0;
uikit_hl$offcanvas$offcanvas.cljs$lang$applyTo = (function (arglist__10049){
var args__9094__auto__ = cljs.core.seq(arglist__10049);
return uikit_hl$offcanvas$offcanvas__delegate(args__9094__auto__);
});
uikit_hl$offcanvas$offcanvas.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$offcanvas$offcanvas__delegate;
return uikit_hl$offcanvas$offcanvas;
})()
;

//# sourceMappingURL=offcanvas.js.map