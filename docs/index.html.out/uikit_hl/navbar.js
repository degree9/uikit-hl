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
var vec__17719 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17719,(0),null);
var kids = cljs.core.nth.call(null,vec__17719,(1),null);
var navbar = new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_uk_navbar_STAR_);
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_container_STAR_);
var transparent = new cljs.core.Keyword(null,"transparent","transparent",-2073609949).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_transparent_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),navbar);
return hoplon.core.nav.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),container,new cljs.core.Keyword(null,"uk-navbar-transparent","uk-navbar-transparent",283367525),transparent], null)),kids);
};
var uikit_hl$navbar$navbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17722__i = 0, G__17722__a = new Array(arguments.length -  0);
while (G__17722__i < G__17722__a.length) {G__17722__a[G__17722__i] = arguments[G__17722__i + 0]; ++G__17722__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17722__a,0,null);
} 
return uikit_hl$navbar$navbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$navbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$navbar.cljs$lang$applyTo = (function (arglist__17723){
var args__9094__auto__ = cljs.core.seq(arglist__17723);
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
var vec__17727 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17727,(0),null);
var kids = cljs.core.nth.call(null,vec__17727,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),true], null)),kids);
};
var uikit_hl$navbar$container = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17730__i = 0, G__17730__a = new Array(arguments.length -  0);
while (G__17730__i < G__17730__a.length) {G__17730__a[G__17730__i] = arguments[G__17730__i + 0]; ++G__17730__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17730__a,0,null);
} 
return uikit_hl$navbar$container__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$container.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$container.cljs$lang$applyTo = (function (arglist__17731){
var args__9094__auto__ = cljs.core.seq(arglist__17731);
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
var vec__17735 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17735,(0),null);
var kids = cljs.core.nth.call(null,vec__17735,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-left","uk-navbar-left",1555483865),true], null)),kids);
};
var uikit_hl$navbar$left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17738__i = 0, G__17738__a = new Array(arguments.length -  0);
while (G__17738__i < G__17738__a.length) {G__17738__a[G__17738__i] = arguments[G__17738__i + 0]; ++G__17738__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17738__a,0,null);
} 
return uikit_hl$navbar$left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$left.cljs$lang$applyTo = (function (arglist__17739){
var args__9094__auto__ = cljs.core.seq(arglist__17739);
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
var vec__17743 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17743,(0),null);
var kids = cljs.core.nth.call(null,vec__17743,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center","uk-navbar-center",-1061086752),true], null)),kids);
};
var uikit_hl$navbar$center = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17746__i = 0, G__17746__a = new Array(arguments.length -  0);
while (G__17746__i < G__17746__a.length) {G__17746__a[G__17746__i] = arguments[G__17746__i + 0]; ++G__17746__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17746__a,0,null);
} 
return uikit_hl$navbar$center__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center.cljs$lang$applyTo = (function (arglist__17747){
var args__9094__auto__ = cljs.core.seq(arglist__17747);
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
var vec__17751 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17751,(0),null);
var kids = cljs.core.nth.call(null,vec__17751,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-left","uk-navbar-center-left",-602371230),true], null)),kids);
};
var uikit_hl$navbar$center_left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17754__i = 0, G__17754__a = new Array(arguments.length -  0);
while (G__17754__i < G__17754__a.length) {G__17754__a[G__17754__i] = arguments[G__17754__i + 0]; ++G__17754__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17754__a,0,null);
} 
return uikit_hl$navbar$center_left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_left.cljs$lang$applyTo = (function (arglist__17755){
var args__9094__auto__ = cljs.core.seq(arglist__17755);
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
var vec__17759 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17759,(0),null);
var kids = cljs.core.nth.call(null,vec__17759,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-right","uk-navbar-center-right",-2136573693),true], null)),kids);
};
var uikit_hl$navbar$center_right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17762__i = 0, G__17762__a = new Array(arguments.length -  0);
while (G__17762__i < G__17762__a.length) {G__17762__a[G__17762__i] = arguments[G__17762__i + 0]; ++G__17762__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17762__a,0,null);
} 
return uikit_hl$navbar$center_right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_right.cljs$lang$applyTo = (function (arglist__17763){
var args__9094__auto__ = cljs.core.seq(arglist__17763);
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
var vec__17767 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17767,(0),null);
var kids = cljs.core.nth.call(null,vec__17767,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-right","uk-navbar-right",1559569510),true], null)),kids);
};
var uikit_hl$navbar$right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17770__i = 0, G__17770__a = new Array(arguments.length -  0);
while (G__17770__i < G__17770__a.length) {G__17770__a[G__17770__i] = arguments[G__17770__i + 0]; ++G__17770__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17770__a,0,null);
} 
return uikit_hl$navbar$right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$right.cljs$lang$applyTo = (function (arglist__17771){
var args__9094__auto__ = cljs.core.seq(arglist__17771);
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
var vec__17775 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17775,(0),null);
var kids = cljs.core.nth.call(null,vec__17775,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-nav","uk-navbar-nav",-1857985721),true], null)),kids);
};
var uikit_hl$navbar$nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17778__i = 0, G__17778__a = new Array(arguments.length -  0);
while (G__17778__i < G__17778__a.length) {G__17778__a[G__17778__i] = arguments[G__17778__i + 0]; ++G__17778__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17778__a,0,null);
} 
return uikit_hl$navbar$nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav.cljs$lang$applyTo = (function (arglist__17779){
var args__9094__auto__ = cljs.core.seq(arglist__17779);
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
var vec__17783 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17783,(0),null);
var kids = cljs.core.nth.call(null,vec__17783,(1),null);
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
var G__17786__i = 0, G__17786__a = new Array(arguments.length -  0);
while (G__17786__i < G__17786__a.length) {G__17786__a[G__17786__i] = arguments[G__17786__i + 0]; ++G__17786__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17786__a,0,null);
} 
return uikit_hl$navbar$nav_item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav_item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav_item.cljs$lang$applyTo = (function (arglist__17787){
var args__9094__auto__ = cljs.core.seq(arglist__17787);
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
var vec__17791 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17791,(0),null);
var kids = cljs.core.nth.call(null,vec__17791,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-subtitle","uk-navbar-subtitle",-357285536),true], null)),kids);
};
var uikit_hl$navbar$subtitle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17794__i = 0, G__17794__a = new Array(arguments.length -  0);
while (G__17794__i < G__17794__a.length) {G__17794__a[G__17794__i] = arguments[G__17794__i + 0]; ++G__17794__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17794__a,0,null);
} 
return uikit_hl$navbar$subtitle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$subtitle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$subtitle.cljs$lang$applyTo = (function (arglist__17795){
var args__9094__auto__ = cljs.core.seq(arglist__17795);
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
var vec__17799 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17799,(0),null);
var kids = cljs.core.nth.call(null,vec__17799,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),true], null)),kids);
};
var uikit_hl$navbar$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17802__i = 0, G__17802__a = new Array(arguments.length -  0);
while (G__17802__i < G__17802__a.length) {G__17802__a[G__17802__i] = arguments[G__17802__i + 0]; ++G__17802__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17802__a,0,null);
} 
return uikit_hl$navbar$item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$item.cljs$lang$applyTo = (function (arglist__17803){
var args__9094__auto__ = cljs.core.seq(arglist__17803);
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
var vec__17807 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17807,(0),null);
var kids = cljs.core.nth.call(null,vec__17807,(1),null);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar-toggle-icon","uk-navbar-toggle-icon",1696225935),"");
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-toggle","uk-navbar-toggle",1322725901),true], null)),kids);
};
var uikit_hl$navbar$toggle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17810__i = 0, G__17810__a = new Array(arguments.length -  0);
while (G__17810__i < G__17810__a.length) {G__17810__a[G__17810__i] = arguments[G__17810__i + 0]; ++G__17810__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17810__a,0,null);
} 
return uikit_hl$navbar$toggle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$toggle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$toggle.cljs$lang$applyTo = (function (arglist__17811){
var args__9094__auto__ = cljs.core.seq(arglist__17811);
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
var vec__17815 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17815,(0),null);
var kids = cljs.core.nth.call(null,vec__17815,(1),null);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_width_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"width","width",-384071477),width);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropdown","uk-navbar-dropdown",211658428),true], null)),kids);
};
var uikit_hl$navbar$dropdown = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17818__i = 0, G__17818__a = new Array(arguments.length -  0);
while (G__17818__i < G__17818__a.length) {G__17818__a[G__17818__i] = arguments[G__17818__i + 0]; ++G__17818__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17818__a,0,null);
} 
return uikit_hl$navbar$dropdown__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown.cljs$lang$applyTo = (function (arglist__17819){
var args__9094__auto__ = cljs.core.seq(arglist__17819);
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
var vec__17823 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17823,(0),null);
var kids = cljs.core.nth.call(null,vec__17823,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),true,new cljs.core.Keyword(null,"uk-navbar-dropdown-nav","uk-navbar-dropdown-nav",1435986110),true], null)),kids);
};
var uikit_hl$navbar$dropdown_nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17826__i = 0, G__17826__a = new Array(arguments.length -  0);
while (G__17826__i < G__17826__a.length) {G__17826__a[G__17826__i] = arguments[G__17826__i + 0]; ++G__17826__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17826__a,0,null);
} 
return uikit_hl$navbar$dropdown_nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown_nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown_nav.cljs$lang$applyTo = (function (arglist__17827){
var args__9094__auto__ = cljs.core.seq(arglist__17827);
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
var vec__17831 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__17831,(0),null);
var kids = cljs.core.nth.call(null,vec__17831,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropbar","uk-navbar-dropbar",-226656757),true], null)),kids);
};
var uikit_hl$navbar$dropbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__17834__i = 0, G__17834__a = new Array(arguments.length -  0);
while (G__17834__i < G__17834__a.length) {G__17834__a[G__17834__i] = arguments[G__17834__i + 0]; ++G__17834__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__17834__a,0,null);
} 
return uikit_hl$navbar$dropbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropbar.cljs$lang$applyTo = (function (arglist__17835){
var args__9094__auto__ = cljs.core.seq(arglist__17835);
return uikit_hl$navbar$dropbar__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropbar__delegate;
return uikit_hl$navbar$dropbar;
})()
;

//# sourceMappingURL=navbar.js.map