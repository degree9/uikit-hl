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
var vec__10049 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10049,(0),null);
var kids = cljs.core.nth.call(null,vec__10049,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-offcanvas-content","uk-offcanvas-content",-796821258),true], null)),kids);
};
var uikit_hl$offcanvas$content = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10052__i = 0, G__10052__a = new Array(arguments.length -  0);
while (G__10052__i < G__10052__a.length) {G__10052__a[G__10052__i] = arguments[G__10052__i + 0]; ++G__10052__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10052__a,0,null);
} 
return uikit_hl$offcanvas$content__delegate.call(this,args__9094__auto__);};
uikit_hl$offcanvas$content.cljs$lang$maxFixedArity = 0;
uikit_hl$offcanvas$content.cljs$lang$applyTo = (function (arglist__10053){
var args__9094__auto__ = cljs.core.seq(arglist__10053);
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
var vec__10057 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10057,(0),null);
var kids = cljs.core.nth.call(null,vec__10057,(1),null);
var offcanvas = new cljs.core.Keyword(null,"uk-offcanvas","uk-offcanvas",97881009).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.offcanvas._STAR_uk_offcanvas_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-offcanvas","uk-offcanvas",97881009),offcanvas);
return hoplon.core.div.call(null,attr__$1,kids);
};
var uikit_hl$offcanvas$offcanvas = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10060__i = 0, G__10060__a = new Array(arguments.length -  0);
while (G__10060__i < G__10060__a.length) {G__10060__a[G__10060__i] = arguments[G__10060__i + 0]; ++G__10060__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10060__a,0,null);
} 
return uikit_hl$offcanvas$offcanvas__delegate.call(this,args__9094__auto__);};
uikit_hl$offcanvas$offcanvas.cljs$lang$maxFixedArity = 0;
uikit_hl$offcanvas$offcanvas.cljs$lang$applyTo = (function (arglist__10061){
var args__9094__auto__ = cljs.core.seq(arglist__10061);
return uikit_hl$offcanvas$offcanvas__delegate(args__9094__auto__);
});
uikit_hl$offcanvas$offcanvas.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$offcanvas$offcanvas__delegate;
return uikit_hl$offcanvas$offcanvas;
})()
;

//# sourceMappingURL=offcanvas.js.map