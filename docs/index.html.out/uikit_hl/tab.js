// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.tab');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.tab._STAR_uk_tab_STAR_ = "";
uikit_hl.tab._STAR_bottom_STAR_ = null;
uikit_hl.tab._STAR_active_STAR_ = null;
uikit_hl.tab._STAR_disabled_STAR_ = null;
uikit_hl.tab._STAR_title_STAR_ = null;
uikit_hl.tab._STAR_href_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-tab","uk-tab",-657707886),(function (elem,_,v){
return UIkit.tab(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.tab.tab = (function() { 
var uikit_hl$tab$tab__delegate = function (args__9094__auto__){
var vec__9865 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9865,(0),null);
var kids = cljs.core.nth.call(null,vec__9865,(1),null);
var tab = new cljs.core.Keyword(null,"uk-tab","uk-tab",-657707886).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_uk_tab_STAR_);
var bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_bottom_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-tab","uk-tab",-657707886),tab),new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-tab","uk-tab",-657707886),true,new cljs.core.Keyword(null,"uk-tab-bottom","uk-tab-bottom",775299754),bottom], null)),kids);
};
var uikit_hl$tab$tab = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9868__i = 0, G__9868__a = new Array(arguments.length -  0);
while (G__9868__i < G__9868__a.length) {G__9868__a[G__9868__i] = arguments[G__9868__i + 0]; ++G__9868__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9868__a,0,null);
} 
return uikit_hl$tab$tab__delegate.call(this,args__9094__auto__);};
uikit_hl$tab$tab.cljs$lang$maxFixedArity = 0;
uikit_hl$tab$tab.cljs$lang$applyTo = (function (arglist__9869){
var args__9094__auto__ = cljs.core.seq(arglist__9869);
return uikit_hl$tab$tab__delegate(args__9094__auto__);
});
uikit_hl$tab$tab.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$tab$tab__delegate;
return uikit_hl$tab$tab;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.tab.item = (function() { 
var uikit_hl$tab$item__delegate = function (args__9094__auto__){
var vec__9873 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9873,(0),null);
var kids = cljs.core.nth.call(null,vec__9873,(1),null);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_active_STAR_);
var disabled = new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_disabled_STAR_);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_title_STAR_);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.tab._STAR_href_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"href","href",-793805698));
return hoplon.core.li.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,title),kids], null));
};
var uikit_hl$tab$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9876__i = 0, G__9876__a = new Array(arguments.length -  0);
while (G__9876__i < G__9876__a.length) {G__9876__a[G__9876__i] = arguments[G__9876__i + 0]; ++G__9876__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9876__a,0,null);
} 
return uikit_hl$tab$item__delegate.call(this,args__9094__auto__);};
uikit_hl$tab$item.cljs$lang$maxFixedArity = 0;
uikit_hl$tab$item.cljs$lang$applyTo = (function (arglist__9877){
var args__9094__auto__ = cljs.core.seq(arglist__9877);
return uikit_hl$tab$item__delegate(args__9094__auto__);
});
uikit_hl$tab$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$tab$item__delegate;
return uikit_hl$tab$item;
})()
;

//# sourceMappingURL=tab.js.map