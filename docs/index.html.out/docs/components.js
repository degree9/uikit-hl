// Compiled by ClojureScript 1.9.542 {}
goog.provide('docs.components');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('uikit_hl.accordion');
goog.require('uikit_hl.tab');
goog.require('uikit_hl.table');
goog.require('uikit_hl.text');
goog.require('uikit_hl.switcher');
/**
 * @param {...*} var_args
 */
docs.components.index = (function() { 
var docs$components$index__delegate = function (args__9094__auto__){
var vec__10099 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10099,(0),null);
var kids = cljs.core.nth.call(null,vec__10099,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Introduction"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Get started using UIkit with Hoplon."),uikit_hl.text.text.call(null,"First of all you need to add uikit-hl to your dependencies.\n                This will enable you to use prefabricated Hoplon elements already styled with UIkit."));
};
var docs$components$index = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10102__i = 0, G__10102__a = new Array(arguments.length -  0);
while (G__10102__i < G__10102__a.length) {G__10102__a[G__10102__i] = arguments[G__10102__i + 0]; ++G__10102__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10102__a,0,null);
} 
return docs$components$index__delegate.call(this,args__9094__auto__);};
docs$components$index.cljs$lang$maxFixedArity = 0;
docs$components$index.cljs$lang$applyTo = (function (arglist__10103){
var args__9094__auto__ = cljs.core.seq(arglist__10103);
return docs$components$index__delegate(args__9094__auto__);
});
docs$components$index.cljs$core$IFn$_invoke$arity$variadic = docs$components$index__delegate;
return docs$components$index;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.demo = (function() { 
var docs$components$demo__delegate = function (args__9094__auto__){
var vec__10107 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10107,(0),null);
var kids = cljs.core.nth.call(null,vec__10107,(1),null);
var example = new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(attr);
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(attr);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-position-relative","uk-position-relative",-682101171),new cljs.core.Keyword(null,"uk-margin-medium","uk-margin-medium",-1185035103)], null),uikit_hl.tab.tab.call(null,new cljs.core.Keyword(null,"uk-switcher","uk-switcher",314485333),cljs.core.PersistentArrayMap.EMPTY,uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Demo"),uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Source")),uikit_hl.switcher.switcher.call(null,uikit_hl.switcher.item.call(null,example),uikit_hl.switcher.item.call(null,hoplon.core.pre.call(null,hoplon.core.code.call(null,cljs.core.map.call(null,hoplon.core.span,source))))));
};
var docs$components$demo = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10110__i = 0, G__10110__a = new Array(arguments.length -  0);
while (G__10110__i < G__10110__a.length) {G__10110__a[G__10110__i] = arguments[G__10110__i + 0]; ++G__10110__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10110__a,0,null);
} 
return docs$components$demo__delegate.call(this,args__9094__auto__);};
docs$components$demo.cljs$lang$maxFixedArity = 0;
docs$components$demo.cljs$lang$applyTo = (function (arglist__10111){
var args__9094__auto__ = cljs.core.seq(arglist__10111);
return docs$components$demo__delegate(args__9094__auto__);
});
docs$components$demo.cljs$core$IFn$_invoke$arity$variadic = docs$components$demo__delegate;
return docs$components$demo;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.accordion = (function() { 
var docs$components$accordion__delegate = function (args__9094__auto__){
var vec__10115 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10115,(0),null);
var kids = cljs.core.nth.call(null,vec__10115,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Accordion"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Create a list of items that can be shown individually by clicking an item's header."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"The Accordion component consists of a parent container and item(s), with a title and child elements for each accordion item."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),hoplon.core.code.call(null,":title"),"Text for the item header."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),"","Child elements are used for item content."], null)], null))),hoplon.core.p.call(null),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.accordion.accordion.call(null,uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Item","my content.",new cljs.core.Keyword(null,"active","active",1895962068),true),uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Second Item","my other content.")),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.accordion :refer [accordion item]])) \n\n","(accordion \n","  (item :title \"My Item\" \"my content.\") \n","  (item :title \"My Second Item\" \"my other content.\"))"], null)));
};
var docs$components$accordion = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10118__i = 0, G__10118__a = new Array(arguments.length -  0);
while (G__10118__i < G__10118__a.length) {G__10118__a[G__10118__i] = arguments[G__10118__i + 0]; ++G__10118__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10118__a,0,null);
} 
return docs$components$accordion__delegate.call(this,args__9094__auto__);};
docs$components$accordion.cljs$lang$maxFixedArity = 0;
docs$components$accordion.cljs$lang$applyTo = (function (arglist__10119){
var args__9094__auto__ = cljs.core.seq(arglist__10119);
return docs$components$accordion__delegate(args__9094__auto__);
});
docs$components$accordion.cljs$core$IFn$_invoke$arity$variadic = docs$components$accordion__delegate;
return docs$components$accordion;
})()
;

//# sourceMappingURL=components.js.map