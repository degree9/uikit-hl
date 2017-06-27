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
var vec__15771 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__15771,(0),null);
var kids = cljs.core.nth.call(null,vec__15771,(1),null);
var accordion = new cljs.core.Keyword(null,"uk-accordion","uk-accordion",1349353876).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.accordion._STAR_uk_accordion_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-accordion","uk-accordion",1349353876),accordion);
return hoplon.core.ul.call(null,attr__$1,kids);
};
var uikit_hl$accordion$accordion = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__15774__i = 0, G__15774__a = new Array(arguments.length -  0);
while (G__15774__i < G__15774__a.length) {G__15774__a[G__15774__i] = arguments[G__15774__i + 0]; ++G__15774__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__15774__a,0,null);
} 
return uikit_hl$accordion$accordion__delegate.call(this,args__9094__auto__);};
uikit_hl$accordion$accordion.cljs$lang$maxFixedArity = 0;
uikit_hl$accordion$accordion.cljs$lang$applyTo = (function (arglist__15775){
var args__9094__auto__ = cljs.core.seq(arglist__15775);
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
var vec__15781 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__15781,(0),null);
var kids = cljs.core.nth.call(null,vec__15781,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.accordion._STAR_title_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"title","title",636505583));
return hoplon.core.li.call(null,attr__$1,hoplon.core.h3.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-accordion-title","uk-accordion-title",-39944961)], null),(function (){var t__9193__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__9193__auto__,title,attr__$1,vec__15781,attr,kids){
return (function (G__15784,G__15785){
return G__15784.nodeValue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15785)].join('');
});})(t__9193__auto__,title,attr__$1,vec__15781,attr,kids))
).call(null,t__9193__auto__,title);

return t__9193__auto__;
})()),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-accordion-content","uk-accordion-content",-1043575573)], null),kids));
};
var uikit_hl$accordion$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__15786__i = 0, G__15786__a = new Array(arguments.length -  0);
while (G__15786__i < G__15786__a.length) {G__15786__a[G__15786__i] = arguments[G__15786__i + 0]; ++G__15786__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__15786__a,0,null);
} 
return uikit_hl$accordion$item__delegate.call(this,args__9094__auto__);};
uikit_hl$accordion$item.cljs$lang$maxFixedArity = 0;
uikit_hl$accordion$item.cljs$lang$applyTo = (function (arglist__15787){
var args__9094__auto__ = cljs.core.seq(arglist__15787);
return uikit_hl$accordion$item__delegate(args__9094__auto__);
});
uikit_hl$accordion$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$accordion$item__delegate;
return uikit_hl$accordion$item;
})()
;

//# sourceMappingURL=accordion.js.map