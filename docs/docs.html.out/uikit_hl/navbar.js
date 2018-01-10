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
var vec__9981 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9981,(0),null);
var kids = cljs.core.nth.call(null,vec__9981,(1),null);
var navbar = new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_uk_navbar_STAR_);
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_container_STAR_);
var transparent = new cljs.core.Keyword(null,"transparent","transparent",-2073609949).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_transparent_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),navbar);
return hoplon.core.nav.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),container,new cljs.core.Keyword(null,"uk-navbar-transparent","uk-navbar-transparent",283367525),transparent], null)),kids);
};
var uikit_hl$navbar$navbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9984__i = 0, G__9984__a = new Array(arguments.length -  0);
while (G__9984__i < G__9984__a.length) {G__9984__a[G__9984__i] = arguments[G__9984__i + 0]; ++G__9984__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9984__a,0,null);
} 
return uikit_hl$navbar$navbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$navbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$navbar.cljs$lang$applyTo = (function (arglist__9985){
var args__9094__auto__ = cljs.core.seq(arglist__9985);
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
var vec__9989 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9989,(0),null);
var kids = cljs.core.nth.call(null,vec__9989,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),true], null)),kids);
};
var uikit_hl$navbar$container = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9992__i = 0, G__9992__a = new Array(arguments.length -  0);
while (G__9992__i < G__9992__a.length) {G__9992__a[G__9992__i] = arguments[G__9992__i + 0]; ++G__9992__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9992__a,0,null);
} 
return uikit_hl$navbar$container__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$container.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$container.cljs$lang$applyTo = (function (arglist__9993){
var args__9094__auto__ = cljs.core.seq(arglist__9993);
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
var vec__9997 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9997,(0),null);
var kids = cljs.core.nth.call(null,vec__9997,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-left","uk-navbar-left",1555483865),true], null)),kids);
};
var uikit_hl$navbar$left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10000__i = 0, G__10000__a = new Array(arguments.length -  0);
while (G__10000__i < G__10000__a.length) {G__10000__a[G__10000__i] = arguments[G__10000__i + 0]; ++G__10000__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10000__a,0,null);
} 
return uikit_hl$navbar$left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$left.cljs$lang$applyTo = (function (arglist__10001){
var args__9094__auto__ = cljs.core.seq(arglist__10001);
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
var vec__10005 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10005,(0),null);
var kids = cljs.core.nth.call(null,vec__10005,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center","uk-navbar-center",-1061086752),true], null)),kids);
};
var uikit_hl$navbar$center = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10008__i = 0, G__10008__a = new Array(arguments.length -  0);
while (G__10008__i < G__10008__a.length) {G__10008__a[G__10008__i] = arguments[G__10008__i + 0]; ++G__10008__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10008__a,0,null);
} 
return uikit_hl$navbar$center__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center.cljs$lang$applyTo = (function (arglist__10009){
var args__9094__auto__ = cljs.core.seq(arglist__10009);
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
var vec__10013 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10013,(0),null);
var kids = cljs.core.nth.call(null,vec__10013,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-left","uk-navbar-center-left",-602371230),true], null)),kids);
};
var uikit_hl$navbar$center_left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10016__i = 0, G__10016__a = new Array(arguments.length -  0);
while (G__10016__i < G__10016__a.length) {G__10016__a[G__10016__i] = arguments[G__10016__i + 0]; ++G__10016__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10016__a,0,null);
} 
return uikit_hl$navbar$center_left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_left.cljs$lang$applyTo = (function (arglist__10017){
var args__9094__auto__ = cljs.core.seq(arglist__10017);
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
var vec__10021 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10021,(0),null);
var kids = cljs.core.nth.call(null,vec__10021,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-right","uk-navbar-center-right",-2136573693),true], null)),kids);
};
var uikit_hl$navbar$center_right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10024__i = 0, G__10024__a = new Array(arguments.length -  0);
while (G__10024__i < G__10024__a.length) {G__10024__a[G__10024__i] = arguments[G__10024__i + 0]; ++G__10024__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10024__a,0,null);
} 
return uikit_hl$navbar$center_right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_right.cljs$lang$applyTo = (function (arglist__10025){
var args__9094__auto__ = cljs.core.seq(arglist__10025);
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
var vec__10029 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10029,(0),null);
var kids = cljs.core.nth.call(null,vec__10029,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-right","uk-navbar-right",1559569510),true], null)),kids);
};
var uikit_hl$navbar$right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10032__i = 0, G__10032__a = new Array(arguments.length -  0);
while (G__10032__i < G__10032__a.length) {G__10032__a[G__10032__i] = arguments[G__10032__i + 0]; ++G__10032__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10032__a,0,null);
} 
return uikit_hl$navbar$right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$right.cljs$lang$applyTo = (function (arglist__10033){
var args__9094__auto__ = cljs.core.seq(arglist__10033);
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
var vec__10037 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10037,(0),null);
var kids = cljs.core.nth.call(null,vec__10037,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-nav","uk-navbar-nav",-1857985721),true], null)),kids);
};
var uikit_hl$navbar$nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10040__i = 0, G__10040__a = new Array(arguments.length -  0);
while (G__10040__i < G__10040__a.length) {G__10040__a[G__10040__i] = arguments[G__10040__i + 0]; ++G__10040__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10040__a,0,null);
} 
return uikit_hl$navbar$nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav.cljs$lang$applyTo = (function (arglist__10041){
var args__9094__auto__ = cljs.core.seq(arglist__10041);
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
var vec__10045 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10045,(0),null);
var kids = cljs.core.nth.call(null,vec__10045,(1),null);
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
var G__10048__i = 0, G__10048__a = new Array(arguments.length -  0);
while (G__10048__i < G__10048__a.length) {G__10048__a[G__10048__i] = arguments[G__10048__i + 0]; ++G__10048__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10048__a,0,null);
} 
return uikit_hl$navbar$nav_item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav_item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav_item.cljs$lang$applyTo = (function (arglist__10049){
var args__9094__auto__ = cljs.core.seq(arglist__10049);
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
var vec__10053 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10053,(0),null);
var kids = cljs.core.nth.call(null,vec__10053,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-subtitle","uk-navbar-subtitle",-357285536),true], null)),kids);
};
var uikit_hl$navbar$subtitle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10056__i = 0, G__10056__a = new Array(arguments.length -  0);
while (G__10056__i < G__10056__a.length) {G__10056__a[G__10056__i] = arguments[G__10056__i + 0]; ++G__10056__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10056__a,0,null);
} 
return uikit_hl$navbar$subtitle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$subtitle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$subtitle.cljs$lang$applyTo = (function (arglist__10057){
var args__9094__auto__ = cljs.core.seq(arglist__10057);
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
var vec__10061 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10061,(0),null);
var kids = cljs.core.nth.call(null,vec__10061,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),true], null)),kids);
};
var uikit_hl$navbar$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10064__i = 0, G__10064__a = new Array(arguments.length -  0);
while (G__10064__i < G__10064__a.length) {G__10064__a[G__10064__i] = arguments[G__10064__i + 0]; ++G__10064__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10064__a,0,null);
} 
return uikit_hl$navbar$item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$item.cljs$lang$applyTo = (function (arglist__10065){
var args__9094__auto__ = cljs.core.seq(arglist__10065);
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
var vec__10069 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10069,(0),null);
var kids = cljs.core.nth.call(null,vec__10069,(1),null);
return hoplon.core.a.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-toggle","uk-navbar-toggle",1322725901),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.span.call(null,new cljs.core.Keyword(null,"uk-navbar-toggle-icon","uk-navbar-toggle-icon",1696225935),""),kids], null));
};
var uikit_hl$navbar$toggle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10072__i = 0, G__10072__a = new Array(arguments.length -  0);
while (G__10072__i < G__10072__a.length) {G__10072__a[G__10072__i] = arguments[G__10072__i + 0]; ++G__10072__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10072__a,0,null);
} 
return uikit_hl$navbar$toggle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$toggle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$toggle.cljs$lang$applyTo = (function (arglist__10073){
var args__9094__auto__ = cljs.core.seq(arglist__10073);
return uikit_hl$navbar$toggle__delegate(args__9094__auto__);
});
uikit_hl$navbar$toggle.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$toggle__delegate;
return uikit_hl$navbar$toggle;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.dropbar = (function() { 
var uikit_hl$navbar$dropbar__delegate = function (args__9094__auto__){
var vec__10077 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10077,(0),null);
var kids = cljs.core.nth.call(null,vec__10077,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropbar","uk-navbar-dropbar",-226656757),true], null)),kids);
};
var uikit_hl$navbar$dropbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10080__i = 0, G__10080__a = new Array(arguments.length -  0);
while (G__10080__i < G__10080__a.length) {G__10080__a[G__10080__i] = arguments[G__10080__i + 0]; ++G__10080__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10080__a,0,null);
} 
return uikit_hl$navbar$dropbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropbar.cljs$lang$applyTo = (function (arglist__10081){
var args__9094__auto__ = cljs.core.seq(arglist__10081);
return uikit_hl$navbar$dropbar__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropbar__delegate;
return uikit_hl$navbar$dropbar;
})()
;

//# sourceMappingURL=navbar.js.map