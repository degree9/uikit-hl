// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.navbar');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.navbar._STAR_uk_navbar_STAR_ = "";
uikit_hl.navbar._STAR_transparent_STAR_ = null;
uikit_hl.navbar._STAR_container_STAR_ = null;
uikit_hl.navbar._STAR_parent_STAR_ = null;
uikit_hl.navbar._STAR_active_STAR_ = null;
uikit_hl.navbar._STAR_title_STAR_ = null;
uikit_hl.navbar._STAR_href_STAR_ = null;
uikit_hl.navbar._STAR_width_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),(function (elem,_,v){
return UIkit.navbar(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.navbar = (function() { 
var uikit_hl$navbar$navbar__delegate = function (args__9094__auto__){
var vec__9915 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9915,(0),null);
var kids = cljs.core.nth.call(null,vec__9915,(1),null);
var navbar = new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_uk_navbar_STAR_);
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_container_STAR_);
var transparent = new cljs.core.Keyword(null,"transparent","transparent",-2073609949).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_transparent_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),navbar);
return hoplon.core.nav.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),container,new cljs.core.Keyword(null,"uk-navbar-transparent","uk-navbar-transparent",283367525),transparent], null)),kids);
};
var uikit_hl$navbar$navbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9918__i = 0, G__9918__a = new Array(arguments.length -  0);
while (G__9918__i < G__9918__a.length) {G__9918__a[G__9918__i] = arguments[G__9918__i + 0]; ++G__9918__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9918__a,0,null);
} 
return uikit_hl$navbar$navbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$navbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$navbar.cljs$lang$applyTo = (function (arglist__9919){
var args__9094__auto__ = cljs.core.seq(arglist__9919);
return uikit_hl$navbar$navbar__delegate(args__9094__auto__);
});
uikit_hl$navbar$navbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$navbar__delegate;
return uikit_hl$navbar$navbar;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.container = (function() { 
var uikit_hl$navbar$container__delegate = function (args__9094__auto__){
var vec__9923 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9923,(0),null);
var kids = cljs.core.nth.call(null,vec__9923,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),true], null)),kids);
};
var uikit_hl$navbar$container = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9926__i = 0, G__9926__a = new Array(arguments.length -  0);
while (G__9926__i < G__9926__a.length) {G__9926__a[G__9926__i] = arguments[G__9926__i + 0]; ++G__9926__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9926__a,0,null);
} 
return uikit_hl$navbar$container__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$container.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$container.cljs$lang$applyTo = (function (arglist__9927){
var args__9094__auto__ = cljs.core.seq(arglist__9927);
return uikit_hl$navbar$container__delegate(args__9094__auto__);
});
uikit_hl$navbar$container.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$container__delegate;
return uikit_hl$navbar$container;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.left = (function() { 
var uikit_hl$navbar$left__delegate = function (args__9094__auto__){
var vec__9931 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9931,(0),null);
var kids = cljs.core.nth.call(null,vec__9931,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-left","uk-navbar-left",1555483865),true], null)),kids);
};
var uikit_hl$navbar$left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9934__i = 0, G__9934__a = new Array(arguments.length -  0);
while (G__9934__i < G__9934__a.length) {G__9934__a[G__9934__i] = arguments[G__9934__i + 0]; ++G__9934__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9934__a,0,null);
} 
return uikit_hl$navbar$left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$left.cljs$lang$applyTo = (function (arglist__9935){
var args__9094__auto__ = cljs.core.seq(arglist__9935);
return uikit_hl$navbar$left__delegate(args__9094__auto__);
});
uikit_hl$navbar$left.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$left__delegate;
return uikit_hl$navbar$left;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center = (function() { 
var uikit_hl$navbar$center__delegate = function (args__9094__auto__){
var vec__9939 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9939,(0),null);
var kids = cljs.core.nth.call(null,vec__9939,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center","uk-navbar-center",-1061086752),true], null)),kids);
};
var uikit_hl$navbar$center = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9942__i = 0, G__9942__a = new Array(arguments.length -  0);
while (G__9942__i < G__9942__a.length) {G__9942__a[G__9942__i] = arguments[G__9942__i + 0]; ++G__9942__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9942__a,0,null);
} 
return uikit_hl$navbar$center__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center.cljs$lang$applyTo = (function (arglist__9943){
var args__9094__auto__ = cljs.core.seq(arglist__9943);
return uikit_hl$navbar$center__delegate(args__9094__auto__);
});
uikit_hl$navbar$center.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center__delegate;
return uikit_hl$navbar$center;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center_left = (function() { 
var uikit_hl$navbar$center_left__delegate = function (args__9094__auto__){
var vec__9947 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9947,(0),null);
var kids = cljs.core.nth.call(null,vec__9947,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-left","uk-navbar-center-left",-602371230),true], null)),kids);
};
var uikit_hl$navbar$center_left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9950__i = 0, G__9950__a = new Array(arguments.length -  0);
while (G__9950__i < G__9950__a.length) {G__9950__a[G__9950__i] = arguments[G__9950__i + 0]; ++G__9950__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9950__a,0,null);
} 
return uikit_hl$navbar$center_left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_left.cljs$lang$applyTo = (function (arglist__9951){
var args__9094__auto__ = cljs.core.seq(arglist__9951);
return uikit_hl$navbar$center_left__delegate(args__9094__auto__);
});
uikit_hl$navbar$center_left.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center_left__delegate;
return uikit_hl$navbar$center_left;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center_right = (function() { 
var uikit_hl$navbar$center_right__delegate = function (args__9094__auto__){
var vec__9955 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9955,(0),null);
var kids = cljs.core.nth.call(null,vec__9955,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-right","uk-navbar-center-right",-2136573693),true], null)),kids);
};
var uikit_hl$navbar$center_right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9958__i = 0, G__9958__a = new Array(arguments.length -  0);
while (G__9958__i < G__9958__a.length) {G__9958__a[G__9958__i] = arguments[G__9958__i + 0]; ++G__9958__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9958__a,0,null);
} 
return uikit_hl$navbar$center_right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_right.cljs$lang$applyTo = (function (arglist__9959){
var args__9094__auto__ = cljs.core.seq(arglist__9959);
return uikit_hl$navbar$center_right__delegate(args__9094__auto__);
});
uikit_hl$navbar$center_right.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center_right__delegate;
return uikit_hl$navbar$center_right;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.right = (function() { 
var uikit_hl$navbar$right__delegate = function (args__9094__auto__){
var vec__9963 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9963,(0),null);
var kids = cljs.core.nth.call(null,vec__9963,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-right","uk-navbar-right",1559569510),true], null)),kids);
};
var uikit_hl$navbar$right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9966__i = 0, G__9966__a = new Array(arguments.length -  0);
while (G__9966__i < G__9966__a.length) {G__9966__a[G__9966__i] = arguments[G__9966__i + 0]; ++G__9966__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9966__a,0,null);
} 
return uikit_hl$navbar$right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$right.cljs$lang$applyTo = (function (arglist__9967){
var args__9094__auto__ = cljs.core.seq(arglist__9967);
return uikit_hl$navbar$right__delegate(args__9094__auto__);
});
uikit_hl$navbar$right.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$right__delegate;
return uikit_hl$navbar$right;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.nav = (function() { 
var uikit_hl$navbar$nav__delegate = function (args__9094__auto__){
var vec__9971 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9971,(0),null);
var kids = cljs.core.nth.call(null,vec__9971,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-nav","uk-navbar-nav",-1857985721),true], null)),kids);
};
var uikit_hl$navbar$nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9974__i = 0, G__9974__a = new Array(arguments.length -  0);
while (G__9974__i < G__9974__a.length) {G__9974__a[G__9974__i] = arguments[G__9974__i + 0]; ++G__9974__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9974__a,0,null);
} 
return uikit_hl$navbar$nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav.cljs$lang$applyTo = (function (arglist__9975){
var args__9094__auto__ = cljs.core.seq(arglist__9975);
return uikit_hl$navbar$nav__delegate(args__9094__auto__);
});
uikit_hl$navbar$nav.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$nav__delegate;
return uikit_hl$navbar$nav;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.nav_item = (function() { 
var uikit_hl$navbar$nav_item__delegate = function (args__9094__auto__){
var vec__9979 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9979,(0),null);
var kids = cljs.core.nth.call(null,vec__9979,(1),null);
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_parent_STAR_);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_active_STAR_);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_title_STAR_);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_href_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"href","href",-793805698));
return hoplon.core.li.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-parent","uk-parent",-2114518338),parent,new cljs.core.Keyword(null,"uk-active","uk-active",1648067307),active], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,title),kids], null));
};
var uikit_hl$navbar$nav_item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9982__i = 0, G__9982__a = new Array(arguments.length -  0);
while (G__9982__i < G__9982__a.length) {G__9982__a[G__9982__i] = arguments[G__9982__i + 0]; ++G__9982__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9982__a,0,null);
} 
return uikit_hl$navbar$nav_item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav_item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav_item.cljs$lang$applyTo = (function (arglist__9983){
var args__9094__auto__ = cljs.core.seq(arglist__9983);
return uikit_hl$navbar$nav_item__delegate(args__9094__auto__);
});
uikit_hl$navbar$nav_item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$nav_item__delegate;
return uikit_hl$navbar$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.subtitle = (function() { 
var uikit_hl$navbar$subtitle__delegate = function (args__9094__auto__){
var vec__9987 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9987,(0),null);
var kids = cljs.core.nth.call(null,vec__9987,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-subtitle","uk-navbar-subtitle",-357285536),true], null)),kids);
};
var uikit_hl$navbar$subtitle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9990__i = 0, G__9990__a = new Array(arguments.length -  0);
while (G__9990__i < G__9990__a.length) {G__9990__a[G__9990__i] = arguments[G__9990__i + 0]; ++G__9990__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9990__a,0,null);
} 
return uikit_hl$navbar$subtitle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$subtitle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$subtitle.cljs$lang$applyTo = (function (arglist__9991){
var args__9094__auto__ = cljs.core.seq(arglist__9991);
return uikit_hl$navbar$subtitle__delegate(args__9094__auto__);
});
uikit_hl$navbar$subtitle.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$subtitle__delegate;
return uikit_hl$navbar$subtitle;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.item = (function() { 
var uikit_hl$navbar$item__delegate = function (args__9094__auto__){
var vec__9995 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9995,(0),null);
var kids = cljs.core.nth.call(null,vec__9995,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),true], null)),kids);
};
var uikit_hl$navbar$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9998__i = 0, G__9998__a = new Array(arguments.length -  0);
while (G__9998__i < G__9998__a.length) {G__9998__a[G__9998__i] = arguments[G__9998__i + 0]; ++G__9998__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9998__a,0,null);
} 
return uikit_hl$navbar$item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$item.cljs$lang$applyTo = (function (arglist__9999){
var args__9094__auto__ = cljs.core.seq(arglist__9999);
return uikit_hl$navbar$item__delegate(args__9094__auto__);
});
uikit_hl$navbar$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$item__delegate;
return uikit_hl$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.toggle = (function() { 
var uikit_hl$navbar$toggle__delegate = function (args__9094__auto__){
var vec__10003 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10003,(0),null);
var kids = cljs.core.nth.call(null,vec__10003,(1),null);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar-toggle-icon","uk-navbar-toggle-icon",1696225935),"");
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-toggle","uk-navbar-toggle",1322725901),true], null)),kids);
};
var uikit_hl$navbar$toggle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10006__i = 0, G__10006__a = new Array(arguments.length -  0);
while (G__10006__i < G__10006__a.length) {G__10006__a[G__10006__i] = arguments[G__10006__i + 0]; ++G__10006__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10006__a,0,null);
} 
return uikit_hl$navbar$toggle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$toggle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$toggle.cljs$lang$applyTo = (function (arglist__10007){
var args__9094__auto__ = cljs.core.seq(arglist__10007);
return uikit_hl$navbar$toggle__delegate(args__9094__auto__);
});
uikit_hl$navbar$toggle.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$toggle__delegate;
return uikit_hl$navbar$toggle;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.dropdown = (function() { 
var uikit_hl$navbar$dropdown__delegate = function (args__9094__auto__){
var vec__10011 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10011,(0),null);
var kids = cljs.core.nth.call(null,vec__10011,(1),null);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_width_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"width","width",-384071477),width);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropdown","uk-navbar-dropdown",211658428),true], null)),kids);
};
var uikit_hl$navbar$dropdown = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10014__i = 0, G__10014__a = new Array(arguments.length -  0);
while (G__10014__i < G__10014__a.length) {G__10014__a[G__10014__i] = arguments[G__10014__i + 0]; ++G__10014__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10014__a,0,null);
} 
return uikit_hl$navbar$dropdown__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown.cljs$lang$applyTo = (function (arglist__10015){
var args__9094__auto__ = cljs.core.seq(arglist__10015);
return uikit_hl$navbar$dropdown__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropdown.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropdown__delegate;
return uikit_hl$navbar$dropdown;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.dropdown_nav = (function() { 
var uikit_hl$navbar$dropdown_nav__delegate = function (args__9094__auto__){
var vec__10019 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10019,(0),null);
var kids = cljs.core.nth.call(null,vec__10019,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),true,new cljs.core.Keyword(null,"uk-navbar-dropdown-nav","uk-navbar-dropdown-nav",1435986110),true], null)),kids);
};
var uikit_hl$navbar$dropdown_nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10022__i = 0, G__10022__a = new Array(arguments.length -  0);
while (G__10022__i < G__10022__a.length) {G__10022__a[G__10022__i] = arguments[G__10022__i + 0]; ++G__10022__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10022__a,0,null);
} 
return uikit_hl$navbar$dropdown_nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown_nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown_nav.cljs$lang$applyTo = (function (arglist__10023){
var args__9094__auto__ = cljs.core.seq(arglist__10023);
return uikit_hl$navbar$dropdown_nav__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropdown_nav.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropdown_nav__delegate;
return uikit_hl$navbar$dropdown_nav;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.dropbar = (function() { 
var uikit_hl$navbar$dropbar__delegate = function (args__9094__auto__){
var vec__10027 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10027,(0),null);
var kids = cljs.core.nth.call(null,vec__10027,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropbar","uk-navbar-dropbar",-226656757),true], null)),kids);
};
var uikit_hl$navbar$dropbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10030__i = 0, G__10030__a = new Array(arguments.length -  0);
while (G__10030__i < G__10030__a.length) {G__10030__a[G__10030__i] = arguments[G__10030__i + 0]; ++G__10030__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10030__a,0,null);
} 
return uikit_hl$navbar$dropbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropbar.cljs$lang$applyTo = (function (arglist__10031){
var args__9094__auto__ = cljs.core.seq(arglist__10031);
return uikit_hl$navbar$dropbar__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropbar__delegate;
return uikit_hl$navbar$dropbar;
})()
;

//# sourceMappingURL=navbar.js.map