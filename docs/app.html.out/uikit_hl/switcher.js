// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.switcher');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.switcher._STAR_uk_switcher_STAR_ = "";
uikit_hl.switcher._STAR_bottom_STAR_ = null;
uikit_hl.switcher._STAR_title_STAR_ = null;
uikit_hl.switcher._STAR_href_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-switcher","uk-switcher",314485333),(function (elem,_,v){
return UIkit.switcher(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.switcher.switcher = (function() { 
var uikit_hl$switcher$switcher__delegate = function (args__9094__auto__){
var vec__9837 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9837,(0),null);
var kids = cljs.core.nth.call(null,vec__9837,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-switcher","uk-switcher",314485333),true], null)),kids);
};
var uikit_hl$switcher$switcher = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9840__i = 0, G__9840__a = new Array(arguments.length -  0);
while (G__9840__i < G__9840__a.length) {G__9840__a[G__9840__i] = arguments[G__9840__i + 0]; ++G__9840__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9840__a,0,null);
} 
return uikit_hl$switcher$switcher__delegate.call(this,args__9094__auto__);};
uikit_hl$switcher$switcher.cljs$lang$maxFixedArity = 0;
uikit_hl$switcher$switcher.cljs$lang$applyTo = (function (arglist__9841){
var args__9094__auto__ = cljs.core.seq(arglist__9841);
return uikit_hl$switcher$switcher__delegate(args__9094__auto__);
});
uikit_hl$switcher$switcher.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$switcher$switcher__delegate;
return uikit_hl$switcher$switcher;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.switcher.item = (function() { 
var uikit_hl$switcher$item__delegate = function (args__9094__auto__){
var vec__9845 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9845,(0),null);
var kids = cljs.core.nth.call(null,vec__9845,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.switcher._STAR_title_STAR_);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.switcher._STAR_href_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"href","href",-793805698));
return hoplon.core.li.call(null,attr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,title),kids], null));
};
var uikit_hl$switcher$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9848__i = 0, G__9848__a = new Array(arguments.length -  0);
while (G__9848__i < G__9848__a.length) {G__9848__a[G__9848__i] = arguments[G__9848__i + 0]; ++G__9848__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9848__a,0,null);
} 
return uikit_hl$switcher$item__delegate.call(this,args__9094__auto__);};
uikit_hl$switcher$item.cljs$lang$maxFixedArity = 0;
uikit_hl$switcher$item.cljs$lang$applyTo = (function (arglist__9849){
var args__9094__auto__ = cljs.core.seq(arglist__9849);
return uikit_hl$switcher$item__delegate(args__9094__auto__);
});
uikit_hl$switcher$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$switcher$item__delegate;
return uikit_hl$switcher$item;
})()
;

//# sourceMappingURL=switcher.js.map