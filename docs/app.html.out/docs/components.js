// Compiled by ClojureScript 1.9.542 {}
goog.provide('docs.components');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('uikit_hl.accordion');
goog.require('uikit_hl.alert');
goog.require('uikit_hl.tab');
goog.require('uikit_hl.table');
goog.require('uikit_hl.text');
goog.require('uikit_hl.switcher');
/**
 * @param {...*} var_args
 */
docs.components.index = (function() { 
var docs$components$index__delegate = function (args__9094__auto__){
var vec__10109 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10109,(0),null);
var kids = cljs.core.nth.call(null,vec__10109,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Introduction"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Get started using UIkit with Hoplon."),uikit_hl.text.text.call(null,"First of all you need to add uikit-hl to your dependencies.\n                This will enable you to use prefabricated Hoplon elements already styled with UIkit."));
};
var docs$components$index = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10112__i = 0, G__10112__a = new Array(arguments.length -  0);
while (G__10112__i < G__10112__a.length) {G__10112__a[G__10112__i] = arguments[G__10112__i + 0]; ++G__10112__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10112__a,0,null);
} 
return docs$components$index__delegate.call(this,args__9094__auto__);};
docs$components$index.cljs$lang$maxFixedArity = 0;
docs$components$index.cljs$lang$applyTo = (function (arglist__10113){
var args__9094__auto__ = cljs.core.seq(arglist__10113);
return docs$components$index__delegate(args__9094__auto__);
});
docs$components$index.cljs$core$IFn$_invoke$arity$variadic = docs$components$index__delegate;
return docs$components$index;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.attributes = (function() { 
var docs$components$attributes__delegate = function (args__9094__auto__){
var vec__10117 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10117,(0),null);
var kids = cljs.core.nth.call(null,vec__10117,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Attribute Providers"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"uikit-hl is a great example of Hoplon Attribute Providers."),uikit_hl.text.text.call(null,"Many components within uikit-hl are attribute providers. This means they have a custom\n                attribute which applies specific behaviours to Hoplon elements."),uikit_hl.text.text.call(null,"Any attribute providers are documented on their component pages."));
};
var docs$components$attributes = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10120__i = 0, G__10120__a = new Array(arguments.length -  0);
while (G__10120__i < G__10120__a.length) {G__10120__a[G__10120__i] = arguments[G__10120__i + 0]; ++G__10120__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10120__a,0,null);
} 
return docs$components$attributes__delegate.call(this,args__9094__auto__);};
docs$components$attributes.cljs$lang$maxFixedArity = 0;
docs$components$attributes.cljs$lang$applyTo = (function (arglist__10121){
var args__9094__auto__ = cljs.core.seq(arglist__10121);
return docs$components$attributes__delegate(args__9094__auto__);
});
docs$components$attributes.cljs$core$IFn$_invoke$arity$variadic = docs$components$attributes__delegate;
return docs$components$attributes;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.demo = (function() { 
var docs$components$demo__delegate = function (args__9094__auto__){
var vec__10125 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10125,(0),null);
var kids = cljs.core.nth.call(null,vec__10125,(1),null);
var example = new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(attr);
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(attr);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-position-relative","uk-position-relative",-682101171),new cljs.core.Keyword(null,"uk-margin-medium","uk-margin-medium",-1185035103)], null),uikit_hl.tab.tab.call(null,new cljs.core.Keyword(null,"uk-switcher","uk-switcher",314485333),cljs.core.PersistentArrayMap.EMPTY,uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Demo"),uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Source")),uikit_hl.switcher.switcher.call(null,uikit_hl.switcher.item.call(null,example),uikit_hl.switcher.item.call(null,hoplon.core.pre.call(null,hoplon.core.code.call(null,cljs.core.map.call(null,hoplon.core.span,source))))));
};
var docs$components$demo = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10128__i = 0, G__10128__a = new Array(arguments.length -  0);
while (G__10128__i < G__10128__a.length) {G__10128__a[G__10128__i] = arguments[G__10128__i + 0]; ++G__10128__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10128__a,0,null);
} 
return docs$components$demo__delegate.call(this,args__9094__auto__);};
docs$components$demo.cljs$lang$maxFixedArity = 0;
docs$components$demo.cljs$lang$applyTo = (function (arglist__10129){
var args__9094__auto__ = cljs.core.seq(arglist__10129);
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
var vec__10133 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10133,(0),null);
var kids = cljs.core.nth.call(null,vec__10133,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Accordion"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Create a list of items that can be shown individually by clicking an item's header."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"The Accordion component consists of a parent container and item(s), with a title and child elements for each accordion item."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),hoplon.core.code.call(null,":title"),"Text for the item header."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),"","Child elements are used for item content."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.accordion.accordion.call(null,uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Item","my content.",new cljs.core.Keyword(null,"active","active",1895962068),true),uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Second Item","my other content.")),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.accordion :refer [accordion item]])) \n\n","(accordion \n","  (item :title \"My Item\" \"my content.\") \n","  (item :title \"My Second Item\" \"my other content.\"))"], null)));
};
var docs$components$accordion = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10136__i = 0, G__10136__a = new Array(arguments.length -  0);
while (G__10136__i < G__10136__a.length) {G__10136__a[G__10136__i] = arguments[G__10136__i + 0]; ++G__10136__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10136__a,0,null);
} 
return docs$components$accordion__delegate.call(this,args__9094__auto__);};
docs$components$accordion.cljs$lang$maxFixedArity = 0;
docs$components$accordion.cljs$lang$applyTo = (function (arglist__10137){
var args__9094__auto__ = cljs.core.seq(arglist__10137);
return docs$components$accordion__delegate(args__9094__auto__);
});
docs$components$accordion.cljs$core$IFn$_invoke$arity$variadic = docs$components$accordion__delegate;
return docs$components$accordion;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.alert = (function() { 
var docs$components$alert__delegate = function (args__9094__auto__){
var vec__10141 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10141,(0),null);
var kids = cljs.core.nth.call(null,vec__10141,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Alert"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Display success, warning and error messages."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,""),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"alert"),"","Child elements are used for item content."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.alert.alert.call(null,"Message content."),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.alert :refer [alert]])) \n\n","(alert/alert \"Message content.\") \n"], null)));
};
var docs$components$alert = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10144__i = 0, G__10144__a = new Array(arguments.length -  0);
while (G__10144__i < G__10144__a.length) {G__10144__a[G__10144__i] = arguments[G__10144__i + 0]; ++G__10144__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10144__a,0,null);
} 
return docs$components$alert__delegate.call(this,args__9094__auto__);};
docs$components$alert.cljs$lang$maxFixedArity = 0;
docs$components$alert.cljs$lang$applyTo = (function (arglist__10145){
var args__9094__auto__ = cljs.core.seq(arglist__10145);
return docs$components$alert__delegate(args__9094__auto__);
});
docs$components$alert.cljs$core$IFn$_invoke$arity$variadic = docs$components$alert__delegate;
return docs$components$alert;
})()
;

//# sourceMappingURL=components.js.map