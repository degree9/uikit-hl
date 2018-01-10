// Compiled by ClojureScript 1.9.542 {}
goog.provide('docs.components');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('uikit_hl.accordion');
goog.require('uikit_hl.alert');
goog.require('uikit_hl.article');
goog.require('uikit_hl.tab');
goog.require('uikit_hl.table');
goog.require('uikit_hl.text');
goog.require('uikit_hl.switcher');
/**
 * @param {...*} var_args
 */
docs.components.index = (function() { 
var docs$components$index__delegate = function (args__9094__auto__){
var vec__10175 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10175,(0),null);
var kids = cljs.core.nth.call(null,vec__10175,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Introduction"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Get started using UIkit with Hoplon."),uikit_hl.text.text.call(null,"First of all you need to add uikit-hl to your dependencies.\n                This will enable you to use prefabricated Hoplon elements already styled with UIkit."));
};
var docs$components$index = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10178__i = 0, G__10178__a = new Array(arguments.length -  0);
while (G__10178__i < G__10178__a.length) {G__10178__a[G__10178__i] = arguments[G__10178__i + 0]; ++G__10178__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10178__a,0,null);
} 
return docs$components$index__delegate.call(this,args__9094__auto__);};
docs$components$index.cljs$lang$maxFixedArity = 0;
docs$components$index.cljs$lang$applyTo = (function (arglist__10179){
var args__9094__auto__ = cljs.core.seq(arglist__10179);
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
var vec__10183 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10183,(0),null);
var kids = cljs.core.nth.call(null,vec__10183,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Attribute Providers"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"uikit-hl is a great example of Hoplon Attribute Providers."),uikit_hl.text.text.call(null,"Many components within uikit-hl are attribute providers. This means they have a custom\n                attribute which applies specific behaviours to Hoplon elements."),uikit_hl.text.text.call(null,"Any attribute providers are documented on their component pages."));
};
var docs$components$attributes = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10186__i = 0, G__10186__a = new Array(arguments.length -  0);
while (G__10186__i < G__10186__a.length) {G__10186__a[G__10186__i] = arguments[G__10186__i + 0]; ++G__10186__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10186__a,0,null);
} 
return docs$components$attributes__delegate.call(this,args__9094__auto__);};
docs$components$attributes.cljs$lang$maxFixedArity = 0;
docs$components$attributes.cljs$lang$applyTo = (function (arglist__10187){
var args__9094__auto__ = cljs.core.seq(arglist__10187);
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
var vec__10191 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10191,(0),null);
var kids = cljs.core.nth.call(null,vec__10191,(1),null);
var example = new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(attr);
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(attr);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-position-relative","uk-position-relative",-682101171),new cljs.core.Keyword(null,"uk-margin-medium","uk-margin-medium",-1185035103)], null),uikit_hl.tab.tab.call(null,new cljs.core.Keyword(null,"uk-switcher","uk-switcher",314485333),cljs.core.PersistentArrayMap.EMPTY,uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Demo"),uikit_hl.tab.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Source")),uikit_hl.switcher.switcher.call(null,uikit_hl.switcher.item.call(null,example),uikit_hl.switcher.item.call(null,hoplon.core.pre.call(null,hoplon.core.code.call(null,cljs.core.map.call(null,hoplon.core.span,source))))));
};
var docs$components$demo = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10194__i = 0, G__10194__a = new Array(arguments.length -  0);
while (G__10194__i < G__10194__a.length) {G__10194__a[G__10194__i] = arguments[G__10194__i + 0]; ++G__10194__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10194__a,0,null);
} 
return docs$components$demo__delegate.call(this,args__9094__auto__);};
docs$components$demo.cljs$lang$maxFixedArity = 0;
docs$components$demo.cljs$lang$applyTo = (function (arglist__10195){
var args__9094__auto__ = cljs.core.seq(arglist__10195);
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
var vec__10199 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10199,(0),null);
var kids = cljs.core.nth.call(null,vec__10199,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Accordion"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Create a list of items that can be shown individually by clicking an item's header."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"The Accordion component consists of a parent container and item(s), with a title and child elements for each accordion item."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),hoplon.core.code.call(null,":title"),"Text for the item header."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"item"),"","Child elements are used for item content."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.accordion.accordion.call(null,uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Item","my content.",new cljs.core.Keyword(null,"active","active",1895962068),true),uikit_hl.accordion.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"My Second Item","my other content.")),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.accordion :refer [accordion item]])) \n\n","(accordion \n","  (item :title \"My Item\" \"my content.\") \n","  (item :title \"My Second Item\" \"my other content.\"))"], null)));
};
var docs$components$accordion = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10202__i = 0, G__10202__a = new Array(arguments.length -  0);
while (G__10202__i < G__10202__a.length) {G__10202__a[G__10202__i] = arguments[G__10202__i + 0]; ++G__10202__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10202__a,0,null);
} 
return docs$components$accordion__delegate.call(this,args__9094__auto__);};
docs$components$accordion.cljs$lang$maxFixedArity = 0;
docs$components$accordion.cljs$lang$applyTo = (function (arglist__10203){
var args__9094__auto__ = cljs.core.seq(arglist__10203);
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
var vec__10207 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10207,(0),null);
var kids = cljs.core.nth.call(null,vec__10207,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Alert"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Display success, warning and error messages."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,""),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"alert"),"","Child elements are used for item content."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.alert.alert.call(null,"Message content."),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.alert :refer [alert]])) \n\n","(alert \"Message content.\") \n"], null)));
};
var docs$components$alert = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10210__i = 0, G__10210__a = new Array(arguments.length -  0);
while (G__10210__i < G__10210__a.length) {G__10210__a[G__10210__i] = arguments[G__10210__i + 0]; ++G__10210__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10210__a,0,null);
} 
return docs$components$alert__delegate.call(this,args__9094__auto__);};
docs$components$alert.cljs$lang$maxFixedArity = 0;
docs$components$alert.cljs$lang$applyTo = (function (arglist__10211){
var args__9094__auto__ = cljs.core.seq(arglist__10211);
return docs$components$alert__delegate(args__9094__auto__);
});
docs$components$alert.cljs$core$IFn$_invoke$arity$variadic = docs$components$alert__delegate;
return docs$components$alert;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.align = (function() { 
var docs$components$align__delegate = function (args__9094__auto__){
var vec__10215 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10215,(0),null);
var kids = cljs.core.nth.call(null,vec__10215,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Align"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Control the alignment of inline elements depending on the viewport size."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"To align images or other elements with spacing between the text and the element, add one of these attributes."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":uk-align"),"A map of alignments."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-left"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-left-s"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-left-m"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-left-l"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-left-xl"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-right"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-right-s"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-right-m"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-right-l"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-right-xl"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":align-center"),"A convenience attribute."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.align])) \n\n","(div :align-left true \"Content.\") \n"], null)));
};
var docs$components$align = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10218__i = 0, G__10218__a = new Array(arguments.length -  0);
while (G__10218__i < G__10218__a.length) {G__10218__a[G__10218__i] = arguments[G__10218__i + 0]; ++G__10218__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10218__a,0,null);
} 
return docs$components$align__delegate.call(this,args__9094__auto__);};
docs$components$align.cljs$lang$maxFixedArity = 0;
docs$components$align.cljs$lang$applyTo = (function (arglist__10219){
var args__9094__auto__ = cljs.core.seq(arglist__10219);
return docs$components$align__delegate(args__9094__auto__);
});
docs$components$align.cljs$core$IFn$_invoke$arity$variadic = docs$components$align__delegate;
return docs$components$align;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.animation = (function() { 
var docs$components$animation__delegate = function (args__9094__auto__){
var vec__10223 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10223,(0),null);
var kids = cljs.core.nth.call(null,vec__10223,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Animation"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"A collection of smooth animations to use within your page."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"Add one of the animation classes to any element. The animation is\n                shown when the class is added, so usually immediately on page load. To show the animation at another point,\n                toggle the animation with a cell."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":uk-animation"),"A map of animations."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-fade"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-scale-up"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-scale-down"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-top"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-bottom"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-left"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-right"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-top-small"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-bottom-small"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-left-small"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-right-small"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-top-medium"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-bottom-medium"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-left-medium"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-slide-right-medium"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-kenburns"),"A convenience attribute."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,":animation-shake"),"A convenience attribute."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.PersistentVector.EMPTY));
};
var docs$components$animation = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10226__i = 0, G__10226__a = new Array(arguments.length -  0);
while (G__10226__i < G__10226__a.length) {G__10226__a[G__10226__i] = arguments[G__10226__i + 0]; ++G__10226__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10226__a,0,null);
} 
return docs$components$animation__delegate.call(this,args__9094__auto__);};
docs$components$animation.cljs$lang$maxFixedArity = 0;
docs$components$animation.cljs$lang$applyTo = (function (arglist__10227){
var args__9094__auto__ = cljs.core.seq(arglist__10227);
return docs$components$animation__delegate(args__9094__auto__);
});
docs$components$animation.cljs$core$IFn$_invoke$arity$variadic = docs$components$animation__delegate;
return docs$components$animation;
})()
;
/**
 * @param {...*} var_args
 */
docs.components.article = (function() { 
var docs$components$article__delegate = function (args__9094__auto__){
var vec__10231 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10231,(0),null);
var kids = cljs.core.nth.call(null,vec__10231,(1),null);
return hoplon.core.div.call(null,hoplon.core.h1.call(null,"Article"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"lead","lead",1214038903),true,"Create articles within your page."),hoplon.core.h3.call(null,"Usage"),uikit_hl.text.text.call(null,"The article component consists of the article itself, a title and meta data."),hoplon.core.div.call(null,uikit_hl.table.table.call(null,new cljs.core.Keyword(null,"divider","divider",1265972657),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Element","Attribute","Description"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"article"),":title","Article title."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"article"),":meta","Article meta data."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.code.call(null,"article"),"","Child elements are used for article content."], null)], null))),docs.components.demo.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),uikit_hl.article.article.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Title",new cljs.core.Keyword(null,"meta","meta",1499536964),"Meta Data","Message content."),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(ns app.index \n","  (:require [uikit-hl.article :refer [article]])) \n\n","(article :title \"Title\" :meta \"Meta Data\" \"Message content.\") \n"], null)));
};
var docs$components$article = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10234__i = 0, G__10234__a = new Array(arguments.length -  0);
while (G__10234__i < G__10234__a.length) {G__10234__a[G__10234__i] = arguments[G__10234__i + 0]; ++G__10234__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10234__a,0,null);
} 
return docs$components$article__delegate.call(this,args__9094__auto__);};
docs$components$article.cljs$lang$maxFixedArity = 0;
docs$components$article.cljs$lang$applyTo = (function (arglist__10235){
var args__9094__auto__ = cljs.core.seq(arglist__10235);
return docs$components$article__delegate(args__9094__auto__);
});
docs$components$article.cljs$core$IFn$_invoke$arity$variadic = docs$components$article__delegate;
return docs$components$article;
})()
;

//# sourceMappingURL=components.js.map