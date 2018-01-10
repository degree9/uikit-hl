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
var len__8295__auto___9707 = arguments.length;
var i__8296__auto___9708 = (0);
while(true){
if((i__8296__auto___9708 < len__8295__auto___9707)){
args__8302__auto__.push((arguments[i__8296__auto___9708]));

var G__9709 = (i__8296__auto___9708 + (1));
i__8296__auto___9708 = G__9709;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((1) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((1)),(0),null)):null);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8303__auto__);
});

uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic = (function (attr,p__9698){
var vec__9699 = p__9698;
var pre = cljs.core.nth.call(null,vec__9699,(0),null);
var post = cljs.core.nth.call(null,vec__9699,(1),null);
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr);
return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (class$,vec__9699,pre,post){
return (function (G__9704,G__9703,G__9702,G__9705,G__9706){
return G__9702.call(null,G__9703,G__9704.call(null,G__9705),G__9706);
});})(class$,vec__9699,pre,post))
).call(null,hoplon.core.normalize_class,pre,cljs.core.merge,class$,post));
});

uikit_hl.core.assoc_class.cljs$lang$maxFixedArity = (1);

uikit_hl.core.assoc_class.cljs$lang$applyTo = (function (seq9696){
var G__9697 = cljs.core.first.call(null,seq9696);
var seq9696__$1 = cljs.core.next.call(null,seq9696);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic(G__9697,seq9696__$1);
});

uikit_hl.core.if_assoc = (function uikit_hl$core$if_assoc(pred,map,k1,v1,k2,v2){
if(cljs.core.truth_(pred)){
return cljs.core.assoc.call(null,map,k1,v1);
} else {
return cljs.core.assoc.call(null,map,k2,v2);
}
});
uikit_hl.core.select_class = (function uikit_hl$core$select_class(var_args){
var args9712 = [];
var len__8295__auto___9715 = arguments.length;
var i__8296__auto___9716 = (0);
while(true){
if((i__8296__auto___9716 < len__8295__auto___9715)){
args9712.push((arguments[i__8296__auto___9716]));

var G__9717 = (i__8296__auto___9716 + (1));
i__8296__auto___9716 = G__9717;
continue;
} else {
}
break;
}

var G__9714 = args9712.length;
switch (G__9714) {
case 2:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9712.length)].join('')));

}
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2 = (function (class$,clist){
return uikit_hl.core.select_class.call(null,cljs.core.PersistentArrayMap.EMPTY,class$,clist);
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3 = (function (map,class$,clist){
return cljs.core.reduce.call(null,(function (p1__9711_SHARP_,p2__9710_SHARP_){
return uikit_hl.core.if_assoc.call(null,cljs.core._EQ_.call(null,p2__9710_SHARP_,class$),p1__9711_SHARP_,p2__9710_SHARP_,true,p2__9710_SHARP_,false);
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
uikit_hl.core.class_EQ_ = (function uikit_hl$core$class_EQ_(class$){
return javelin.core.formula.call(null,(function (G__9721,G__9722){
return G__9721.call(null,G__9722);
})).call(null,hoplon.core.normalize_class,class$);
});
/**
 * @param {...*} var_args
 */
uikit_hl.core.extelem = (function() { 
var uikit_hl$core$extelem__delegate = function (args__9094__auto__){
var vec__9726 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9726,(0),null);
var kids = cljs.core.nth.call(null,vec__9726,(1),null);
var extend = new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$2(attr,hoplon.core.div);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"extend","extend",1836484006));
return extend.call(null,attr__$1,kids);
};
var uikit_hl$core$extelem = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9729__i = 0, G__9729__a = new Array(arguments.length -  0);
while (G__9729__i < G__9729__a.length) {G__9729__a[G__9729__i] = arguments[G__9729__i + 0]; ++G__9729__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9729__a,0,null);
} 
return uikit_hl$core$extelem__delegate.call(this,args__9094__auto__);};
uikit_hl$core$extelem.cljs$lang$maxFixedArity = 0;
uikit_hl$core$extelem.cljs$lang$applyTo = (function (arglist__9730){
var args__9094__auto__ = cljs.core.seq(arglist__9730);
return uikit_hl$core$extelem__delegate(args__9094__auto__);
});
uikit_hl$core$extelem.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$core$extelem__delegate;
return uikit_hl$core$extelem;
})()
;

//# sourceMappingURL=core.js.map