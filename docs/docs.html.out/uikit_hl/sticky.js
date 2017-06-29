// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.sticky');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.sticky._STAR_uk_sticky_STAR_ = "";
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-sticky","uk-sticky",-1824121267),(function (elem,_,v){
return UIkit.sticky(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.sticky.sticky = (function() { 
var uikit_hl$sticky$sticky__delegate = function (args__9094__auto__){
var vec__9746 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9746,(0),null);
var kids = cljs.core.nth.call(null,vec__9746,(1),null);
var sticky = new cljs.core.Keyword(null,"uk-sticky","uk-sticky",-1824121267).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.sticky._STAR_uk_sticky_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-sticky","uk-sticky",-1824121267),sticky);
return hoplon.core.div.call(null,attr__$1,kids);
};
var uikit_hl$sticky$sticky = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9749__i = 0, G__9749__a = new Array(arguments.length -  0);
while (G__9749__i < G__9749__a.length) {G__9749__a[G__9749__i] = arguments[G__9749__i + 0]; ++G__9749__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9749__a,0,null);
} 
return uikit_hl$sticky$sticky__delegate.call(this,args__9094__auto__);};
uikit_hl$sticky$sticky.cljs$lang$maxFixedArity = 0;
uikit_hl$sticky$sticky.cljs$lang$applyTo = (function (arglist__9750){
var args__9094__auto__ = cljs.core.seq(arglist__9750);
return uikit_hl$sticky$sticky__delegate(args__9094__auto__);
});
uikit_hl$sticky$sticky.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$sticky$sticky__delegate;
return uikit_hl$sticky$sticky;
})()
;

//# sourceMappingURL=sticky.js.map