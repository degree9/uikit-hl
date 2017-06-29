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
var vec__9927 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9927,(0),null);
var kids = cljs.core.nth.call(null,vec__9927,(1),null);
var navbar = new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_uk_navbar_STAR_);
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_container_STAR_);
var transparent = new cljs.core.Keyword(null,"transparent","transparent",-2073609949).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_transparent_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),navbar);
return hoplon.core.nav.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),container,new cljs.core.Keyword(null,"uk-navbar-transparent","uk-navbar-transparent",283367525),transparent], null)),kids);
};
var uikit_hl$navbar$navbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9930__i = 0, G__9930__a = new Array(arguments.length -  0);
while (G__9930__i < G__9930__a.length) {G__9930__a[G__9930__i] = arguments[G__9930__i + 0]; ++G__9930__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9930__a,0,null);
} 
return uikit_hl$navbar$navbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$navbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$navbar.cljs$lang$applyTo = (function (arglist__9931){
var args__9094__auto__ = cljs.core.seq(arglist__9931);
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
var vec__9935 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9935,(0),null);
var kids = cljs.core.nth.call(null,vec__9935,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),true], null)),kids);
};
var uikit_hl$navbar$container = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9938__i = 0, G__9938__a = new Array(arguments.length -  0);
while (G__9938__i < G__9938__a.length) {G__9938__a[G__9938__i] = arguments[G__9938__i + 0]; ++G__9938__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9938__a,0,null);
} 
return uikit_hl$navbar$container__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$container.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$container.cljs$lang$applyTo = (function (arglist__9939){
var args__9094__auto__ = cljs.core.seq(arglist__9939);
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
var vec__9943 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9943,(0),null);
var kids = cljs.core.nth.call(null,vec__9943,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-left","uk-navbar-left",1555483865),true], null)),kids);
};
var uikit_hl$navbar$left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9946__i = 0, G__9946__a = new Array(arguments.length -  0);
while (G__9946__i < G__9946__a.length) {G__9946__a[G__9946__i] = arguments[G__9946__i + 0]; ++G__9946__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9946__a,0,null);
} 
return uikit_hl$navbar$left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$left.cljs$lang$applyTo = (function (arglist__9947){
var args__9094__auto__ = cljs.core.seq(arglist__9947);
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
var vec__9951 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9951,(0),null);
var kids = cljs.core.nth.call(null,vec__9951,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center","uk-navbar-center",-1061086752),true], null)),kids);
};
var uikit_hl$navbar$center = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9954__i = 0, G__9954__a = new Array(arguments.length -  0);
while (G__9954__i < G__9954__a.length) {G__9954__a[G__9954__i] = arguments[G__9954__i + 0]; ++G__9954__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9954__a,0,null);
} 
return uikit_hl$navbar$center__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center.cljs$lang$applyTo = (function (arglist__9955){
var args__9094__auto__ = cljs.core.seq(arglist__9955);
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
var vec__9959 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9959,(0),null);
var kids = cljs.core.nth.call(null,vec__9959,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-left","uk-navbar-center-left",-602371230),true], null)),kids);
};
var uikit_hl$navbar$center_left = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9962__i = 0, G__9962__a = new Array(arguments.length -  0);
while (G__9962__i < G__9962__a.length) {G__9962__a[G__9962__i] = arguments[G__9962__i + 0]; ++G__9962__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9962__a,0,null);
} 
return uikit_hl$navbar$center_left__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_left.cljs$lang$applyTo = (function (arglist__9963){
var args__9094__auto__ = cljs.core.seq(arglist__9963);
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
var vec__9967 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9967,(0),null);
var kids = cljs.core.nth.call(null,vec__9967,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-right","uk-navbar-center-right",-2136573693),true], null)),kids);
};
var uikit_hl$navbar$center_right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9970__i = 0, G__9970__a = new Array(arguments.length -  0);
while (G__9970__i < G__9970__a.length) {G__9970__a[G__9970__i] = arguments[G__9970__i + 0]; ++G__9970__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9970__a,0,null);
} 
return uikit_hl$navbar$center_right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$center_right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_right.cljs$lang$applyTo = (function (arglist__9971){
var args__9094__auto__ = cljs.core.seq(arglist__9971);
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
var vec__9975 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9975,(0),null);
var kids = cljs.core.nth.call(null,vec__9975,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-right","uk-navbar-right",1559569510),true], null)),kids);
};
var uikit_hl$navbar$right = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9978__i = 0, G__9978__a = new Array(arguments.length -  0);
while (G__9978__i < G__9978__a.length) {G__9978__a[G__9978__i] = arguments[G__9978__i + 0]; ++G__9978__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9978__a,0,null);
} 
return uikit_hl$navbar$right__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$right.cljs$lang$applyTo = (function (arglist__9979){
var args__9094__auto__ = cljs.core.seq(arglist__9979);
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
var vec__9983 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9983,(0),null);
var kids = cljs.core.nth.call(null,vec__9983,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-nav","uk-navbar-nav",-1857985721),true], null)),kids);
};
var uikit_hl$navbar$nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9986__i = 0, G__9986__a = new Array(arguments.length -  0);
while (G__9986__i < G__9986__a.length) {G__9986__a[G__9986__i] = arguments[G__9986__i + 0]; ++G__9986__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9986__a,0,null);
} 
return uikit_hl$navbar$nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav.cljs$lang$applyTo = (function (arglist__9987){
var args__9094__auto__ = cljs.core.seq(arglist__9987);
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
var vec__9991 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9991,(0),null);
var kids = cljs.core.nth.call(null,vec__9991,(1),null);
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
var G__9994__i = 0, G__9994__a = new Array(arguments.length -  0);
while (G__9994__i < G__9994__a.length) {G__9994__a[G__9994__i] = arguments[G__9994__i + 0]; ++G__9994__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9994__a,0,null);
} 
return uikit_hl$navbar$nav_item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$nav_item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav_item.cljs$lang$applyTo = (function (arglist__9995){
var args__9094__auto__ = cljs.core.seq(arglist__9995);
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
var vec__9999 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9999,(0),null);
var kids = cljs.core.nth.call(null,vec__9999,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-subtitle","uk-navbar-subtitle",-357285536),true], null)),kids);
};
var uikit_hl$navbar$subtitle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10002__i = 0, G__10002__a = new Array(arguments.length -  0);
while (G__10002__i < G__10002__a.length) {G__10002__a[G__10002__i] = arguments[G__10002__i + 0]; ++G__10002__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10002__a,0,null);
} 
return uikit_hl$navbar$subtitle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$subtitle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$subtitle.cljs$lang$applyTo = (function (arglist__10003){
var args__9094__auto__ = cljs.core.seq(arglist__10003);
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
var vec__10007 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10007,(0),null);
var kids = cljs.core.nth.call(null,vec__10007,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),true], null)),kids);
};
var uikit_hl$navbar$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10010__i = 0, G__10010__a = new Array(arguments.length -  0);
while (G__10010__i < G__10010__a.length) {G__10010__a[G__10010__i] = arguments[G__10010__i + 0]; ++G__10010__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10010__a,0,null);
} 
return uikit_hl$navbar$item__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$item.cljs$lang$applyTo = (function (arglist__10011){
var args__9094__auto__ = cljs.core.seq(arglist__10011);
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
var vec__10015 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10015,(0),null);
var kids = cljs.core.nth.call(null,vec__10015,(1),null);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar-toggle-icon","uk-navbar-toggle-icon",1696225935),"");
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-toggle","uk-navbar-toggle",1322725901),true], null)),kids);
};
var uikit_hl$navbar$toggle = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10018__i = 0, G__10018__a = new Array(arguments.length -  0);
while (G__10018__i < G__10018__a.length) {G__10018__a[G__10018__i] = arguments[G__10018__i + 0]; ++G__10018__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10018__a,0,null);
} 
return uikit_hl$navbar$toggle__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$toggle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$toggle.cljs$lang$applyTo = (function (arglist__10019){
var args__9094__auto__ = cljs.core.seq(arglist__10019);
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
var vec__10023 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10023,(0),null);
var kids = cljs.core.nth.call(null,vec__10023,(1),null);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_width_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"width","width",-384071477),width);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropdown","uk-navbar-dropdown",211658428),true], null)),kids);
};
var uikit_hl$navbar$dropdown = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10026__i = 0, G__10026__a = new Array(arguments.length -  0);
while (G__10026__i < G__10026__a.length) {G__10026__a[G__10026__i] = arguments[G__10026__i + 0]; ++G__10026__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10026__a,0,null);
} 
return uikit_hl$navbar$dropdown__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown.cljs$lang$applyTo = (function (arglist__10027){
var args__9094__auto__ = cljs.core.seq(arglist__10027);
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
var vec__10031 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10031,(0),null);
var kids = cljs.core.nth.call(null,vec__10031,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),true,new cljs.core.Keyword(null,"uk-navbar-dropdown-nav","uk-navbar-dropdown-nav",1435986110),true], null)),kids);
};
var uikit_hl$navbar$dropdown_nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10034__i = 0, G__10034__a = new Array(arguments.length -  0);
while (G__10034__i < G__10034__a.length) {G__10034__a[G__10034__i] = arguments[G__10034__i + 0]; ++G__10034__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10034__a,0,null);
} 
return uikit_hl$navbar$dropdown_nav__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropdown_nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropdown_nav.cljs$lang$applyTo = (function (arglist__10035){
var args__9094__auto__ = cljs.core.seq(arglist__10035);
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
var vec__10039 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10039,(0),null);
var kids = cljs.core.nth.call(null,vec__10039,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropbar","uk-navbar-dropbar",-226656757),true], null)),kids);
};
var uikit_hl$navbar$dropbar = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10042__i = 0, G__10042__a = new Array(arguments.length -  0);
while (G__10042__i < G__10042__a.length) {G__10042__a[G__10042__i] = arguments[G__10042__i + 0]; ++G__10042__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10042__a,0,null);
} 
return uikit_hl$navbar$dropbar__delegate.call(this,args__9094__auto__);};
uikit_hl$navbar$dropbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropbar.cljs$lang$applyTo = (function (arglist__10043){
var args__9094__auto__ = cljs.core.seq(arglist__10043);
return uikit_hl$navbar$dropbar__delegate(args__9094__auto__);
});
uikit_hl$navbar$dropbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropbar__delegate;
return uikit_hl$navbar$dropbar;
})()
;

//# sourceMappingURL=navbar.js.map