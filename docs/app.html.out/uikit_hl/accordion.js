// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.accordion');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.accordion._STAR_uk_accordion_STAR_ = "";
uikit_hl.accordion._STAR_title_STAR_ = "";
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-accordion","uk-accordion",1349353876),(function (elem,_,v){
return UIkit.accordion(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.accordion.accordion = (function() { 
var uikit_hl$accordion$accordion__delegate = function (args__9094__auto__){
var vec__10484 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10484,(0),null);
var kids = cljs.core.nth.call(null,vec__10484,(1),null);
var accordion = new cljs.core.Keyword(null,"uk-accordion","uk-accordion",1349353876).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.accordion._STAR_uk_accordion_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-accordion","uk-accordion",1349353876),accordion);
return hoplon.core.ul.call(null,attr__$1,kids);
};
var uikit_hl$accordion$accordion = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10487__i = 0, G__10487__a = new Array(arguments.length -  0);
while (G__10487__i < G__10487__a.length) {G__10487__a[G__10487__i] = arguments[G__10487__i + 0]; ++G__10487__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10487__a,0,null);
} 
return uikit_hl$accordion$accordion__delegate.call(this,args__9094__auto__);};
uikit_hl$accordion$accordion.cljs$lang$maxFixedArity = 0;
uikit_hl$accordion$accordion.cljs$lang$applyTo = (function (arglist__10488){
var args__9094__auto__ = cljs.core.seq(arglist__10488);
return uikit_hl$accordion$accordion__delegate(args__9094__auto__);
});
uikit_hl$accordion$accordion.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$accordion$accordion__delegate;
return uikit_hl$accordion$accordion;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.accordion.item = (function() { 
var uikit_hl$accordion$item__delegate = function (args__9094__auto__){
var vec__10494 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10494,(0),null);
var kids = cljs.core.nth.call(null,vec__10494,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.accordion._STAR_title_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"title","title",636505583));
return hoplon.core.li.call(null,attr__$1,hoplon.core.h3.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-accordion-title","uk-accordion-title",-39944961)], null),(function (){var t__9193__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__9193__auto__,title,attr__$1,vec__10494,attr,kids){
return (function (G__10497,G__10498){
return G__10497.nodeValue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10498)].join('');
});})(t__9193__auto__,title,attr__$1,vec__10494,attr,kids))
).call(null,t__9193__auto__,title);

return t__9193__auto__;
})()),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-accordion-content","uk-accordion-content",-1043575573)], null),kids));
};
var uikit_hl$accordion$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10499__i = 0, G__10499__a = new Array(arguments.length -  0);
while (G__10499__i < G__10499__a.length) {G__10499__a[G__10499__i] = arguments[G__10499__i + 0]; ++G__10499__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10499__a,0,null);
} 
return uikit_hl$accordion$item__delegate.call(this,args__9094__auto__);};
uikit_hl$accordion$item.cljs$lang$maxFixedArity = 0;
uikit_hl$accordion$item.cljs$lang$applyTo = (function (arglist__10500){
var args__9094__auto__ = cljs.core.seq(arglist__10500);
return uikit_hl$accordion$item__delegate(args__9094__auto__);
});
uikit_hl$accordion$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$accordion$item__delegate;
return uikit_hl$accordion$item;
})()
;

//# sourceMappingURL=accordion.js.map