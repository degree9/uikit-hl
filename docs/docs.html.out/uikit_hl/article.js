// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.article');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.article._STAR_title_STAR_ = "";
uikit_hl.article._STAR_meta_STAR_ = "";
/**
 * @param {...*} var_args
 */
uikit_hl.article.article = (function() { 
var uikit_hl$article$article__delegate = function (args__9094__auto__){
var vec__10165 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10165,(0),null);
var kids = cljs.core.nth.call(null,vec__10165,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.article._STAR_title_STAR_);
var meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.article._STAR_meta_STAR_);
var attr__$1 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-article","uk-article",1828696099)], null));
return hoplon.core.article.call(null,attr__$1,hoplon.core.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-article-title","uk-article-title",520359586)], null),title),hoplon.core.p.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-article-meta","uk-article-meta",-1912398953)], null),meta),hoplon.core.p.call(null,kids));
};
var uikit_hl$article$article = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10168__i = 0, G__10168__a = new Array(arguments.length -  0);
while (G__10168__i < G__10168__a.length) {G__10168__a[G__10168__i] = arguments[G__10168__i + 0]; ++G__10168__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10168__a,0,null);
} 
return uikit_hl$article$article__delegate.call(this,args__9094__auto__);};
uikit_hl$article$article.cljs$lang$maxFixedArity = 0;
uikit_hl$article$article.cljs$lang$applyTo = (function (arglist__10169){
var args__9094__auto__ = cljs.core.seq(arglist__10169);
return uikit_hl$article$article__delegate(args__9094__auto__);
});
uikit_hl$article$article.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$article$article__delegate;
return uikit_hl$article$article;
})()
;

//# sourceMappingURL=article.js.map