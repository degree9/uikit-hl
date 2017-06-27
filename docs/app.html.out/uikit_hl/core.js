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
var len__8295__auto___10175 = arguments.length;
var i__8296__auto___10176 = (0);
while(true){
if((i__8296__auto___10176 < len__8295__auto___10175)){
args__8302__auto__.push((arguments[i__8296__auto___10176]));

var G__10177 = (i__8296__auto___10176 + (1));
i__8296__auto___10176 = G__10177;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((1) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((1)),(0),null)):null);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8303__auto__);
});

uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic = (function (attr,p__10166){
var vec__10167 = p__10166;
var pre = cljs.core.nth.call(null,vec__10167,(0),null);
var post = cljs.core.nth.call(null,vec__10167,(1),null);
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr);
return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (class$,vec__10167,pre,post){
return (function (G__10172,G__10171,G__10170,G__10173,G__10174){
return G__10170.call(null,G__10171,G__10172.call(null,G__10173),G__10174);
});})(class$,vec__10167,pre,post))
).call(null,hoplon.core.normalize_class,pre,cljs.core.merge,class$,post));
});

uikit_hl.core.assoc_class.cljs$lang$maxFixedArity = (1);

uikit_hl.core.assoc_class.cljs$lang$applyTo = (function (seq10164){
var G__10165 = cljs.core.first.call(null,seq10164);
var seq10164__$1 = cljs.core.next.call(null,seq10164);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic(G__10165,seq10164__$1);
});

uikit_hl.core.if_assoc = (function uikit_hl$core$if_assoc(pred,map,k1,v1,k2,v2){
if(cljs.core.truth_(pred)){
return cljs.core.assoc.call(null,map,k1,v1);
} else {
return cljs.core.assoc.call(null,map,k2,v2);
}
});
uikit_hl.core.select_class = (function uikit_hl$core$select_class(var_args){
var args10180 = [];
var len__8295__auto___10183 = arguments.length;
var i__8296__auto___10184 = (0);
while(true){
if((i__8296__auto___10184 < len__8295__auto___10183)){
args10180.push((arguments[i__8296__auto___10184]));

var G__10185 = (i__8296__auto___10184 + (1));
i__8296__auto___10184 = G__10185;
continue;
} else {
}
break;
}

var G__10182 = args10180.length;
switch (G__10182) {
case 2:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10180.length)].join('')));

}
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2 = (function (class$,clist){
return uikit_hl.core.select_class.call(null,cljs.core.PersistentArrayMap.EMPTY,class$,clist);
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3 = (function (map,class$,clist){
return cljs.core.reduce.call(null,(function (p1__10179_SHARP_,p2__10178_SHARP_){
return uikit_hl.core.if_assoc.call(null,cljs.core._EQ_.call(null,p2__10178_SHARP_,class$),p1__10179_SHARP_,p2__10178_SHARP_,true,p2__10178_SHARP_,false);
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