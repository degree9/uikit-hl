// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.core');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljsjs.uikit');
uikit_hl.core.include_css = (function uikit_hl$core$include_css(){
return hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/css/uikit.min.css");
});
uikit_hl.core.assoc_class = (function uikit_hl$core$assoc_class(var_args){
var args__8302__auto__ = [];
var len__8295__auto___9647 = arguments.length;
var i__8296__auto___9648 = (0);
while(true){
if((i__8296__auto___9648 < len__8295__auto___9647)){
args__8302__auto__.push((arguments[i__8296__auto___9648]));

var G__9649 = (i__8296__auto___9648 + (1));
i__8296__auto___9648 = G__9649;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((1) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((1)),(0),null)):null);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8303__auto__);
});

uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic = (function (attr,p__9638){
var vec__9639 = p__9638;
var pre = cljs.core.nth.call(null,vec__9639,(0),null);
var post = cljs.core.nth.call(null,vec__9639,(1),null);
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr);
return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (class$,vec__9639,pre,post){
return (function (G__9644,G__9643,G__9642,G__9645,G__9646){
return G__9642.call(null,G__9643,G__9644.call(null,G__9645),G__9646);
});})(class$,vec__9639,pre,post))
).call(null,hoplon.core.normalize_class,pre,cljs.core.merge,class$,post));
});

uikit_hl.core.assoc_class.cljs$lang$maxFixedArity = (1);

uikit_hl.core.assoc_class.cljs$lang$applyTo = (function (seq9636){
var G__9637 = cljs.core.first.call(null,seq9636);
var seq9636__$1 = cljs.core.next.call(null,seq9636);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic(G__9637,seq9636__$1);
});

uikit_hl.core.if_assoc = (function uikit_hl$core$if_assoc(pred,map,k1,v1,k2,v2){
if(cljs.core.truth_(pred)){
return cljs.core.assoc.call(null,map,k1,v1);
} else {
return cljs.core.assoc.call(null,map,k2,v2);
}
});
uikit_hl.core.select_class = (function uikit_hl$core$select_class(var_args){
var args9652 = [];
var len__8295__auto___9655 = arguments.length;
var i__8296__auto___9656 = (0);
while(true){
if((i__8296__auto___9656 < len__8295__auto___9655)){
args9652.push((arguments[i__8296__auto___9656]));

var G__9657 = (i__8296__auto___9656 + (1));
i__8296__auto___9656 = G__9657;
continue;
} else {
}
break;
}

var G__9654 = args9652.length;
switch (G__9654) {
case 2:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9652.length)].join('')));

}
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2 = (function (class$,clist){
return uikit_hl.core.select_class.call(null,cljs.core.PersistentArrayMap.EMPTY,class$,clist);
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3 = (function (map,class$,clist){
return cljs.core.reduce.call(null,(function (p1__9651_SHARP_,p2__9650_SHARP_){
return uikit_hl.core.if_assoc.call(null,cljs.core._EQ_.call(null,p2__9650_SHARP_,class$),p1__9651_SHARP_,p2__9650_SHARP_,true,p2__9650_SHARP_,false);
}),map,clist);
});

uikit_hl.core.select_class.cljs$lang$maxFixedArity = 3;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("uikit","update","uikit/update",956068618),(function (elem,_,v){
if(cljs.core.truth_(v)){
return elem.$update();
} else {
return null;
}
}));

//# sourceMappingURL=core.js.map