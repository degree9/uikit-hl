// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__9240_SHARP_,p2__9241_SHARP_){
return cljs.core.assoc.call(null,p1__9240_SHARP_,p2__9241_SHARP_.getAttribute("static-id"),p2__9241_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args9242 = [];
var len__8295__auto___9245 = arguments.length;
var i__8296__auto___9246 = (0);
while(true){
if((i__8296__auto___9246 < len__8295__auto___9245)){
args9242.push((arguments[i__8296__auto___9246]));

var G__9247 = (i__8296__auto___9246 + (1));
i__8296__auto___9246 = G__9247;
continue;
} else {
}
break;
}

var G__9244 = args9242.length;
switch (G__9244) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9242.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__9255 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__9256 = cljs.core.seq.call(null,vec__9255);
var first__9257 = cljs.core.first.call(null,seq__9256);
var seq__9256__$1 = cljs.core.next.call(null,seq__9256);
var f = first__9257;
var more = seq__9256__$1;
var vec__9258 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__9258,(0),null);
var f2 = cljs.core.nth.call(null,vec__9258,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("173458c7993544dcb8b32f843141a05e")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__9261_SHARP_){
return cljs.core.zipmap.call(null,p1__9261_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__7182__auto__ = (function (){var and__7170__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__7170__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__7170__auto__;
}
})();
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
var G__9262 = (i + (1));
var G__9263 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__9262;
ret = G__9263;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args9264 = [];
var len__8295__auto___9267 = arguments.length;
var i__8296__auto___9268 = (0);
while(true){
if((i__8296__auto___9268 < len__8295__auto___9267)){
args9264.push((arguments[i__8296__auto___9268]));

var G__9269 = (i__8296__auto___9268 + (1));
i__8296__auto___9268 = G__9269;
continue;
} else {
}
break;
}

var G__9266 = args9264.length;
switch (G__9266) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9264.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_.call(null,hoplon.core.vflatten.call(null,tree,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count.call(null,tree);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,l)){
return ret;
} else {
var x = cljs.core.nth.call(null,tree,i);
if(!(cljs.core.sequential_QMARK_.call(null,x))){
cljs.core.conj_BANG_.call(null,ret,x);
} else {
hoplon.core.vflatten.call(null,x,ret);
}

var G__9271 = (i + (1));
i = G__9271;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core.node[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$);
} else {
var m__7851__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return hoplon.core.$text.call(null,this$);
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
return hoplon.core.$text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__9275_SHARP_,p2__9274_SHARP_){
if((p2__9274_SHARP_ == null)){
return p1__9275_SHARP_;
} else {
return cljs.core.conj.call(null,p1__9275_SHARP_,p2__9274_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__9302 = new$__$1;
var vec__9304 = G__9302;
var seq__9305 = cljs.core.seq.call(null,vec__9304);
var first__9306 = cljs.core.first.call(null,seq__9305);
var seq__9305__$1 = cljs.core.next.call(null,seq__9305);
var x = first__9306;
var xs = seq__9305__$1;
var G__9303 = hoplon.core.child_vec.call(null,this$);
var vec__9307 = G__9303;
var seq__9308 = cljs.core.seq.call(null,vec__9307);
var first__9309 = cljs.core.first.call(null,seq__9308);
var seq__9308__$1 = cljs.core.next.call(null,seq__9308);
var k = first__9309;
var ks = seq__9308__$1;
var kids = vec__9307;
var G__9302__$1 = G__9302;
var G__9303__$1 = G__9303;
while(true){
var vec__9310 = G__9302__$1;
var seq__9311 = cljs.core.seq.call(null,vec__9310);
var first__9312 = cljs.core.first.call(null,seq__9311);
var seq__9311__$1 = cljs.core.next.call(null,seq__9311);
var x__$1 = first__9312;
var xs__$1 = seq__9311__$1;
var vec__9313 = G__9303__$1;
var seq__9314 = cljs.core.seq.call(null,vec__9313);
var first__9315 = cljs.core.first.call(null,seq__9314);
var seq__9314__$1 = cljs.core.next.call(null,seq__9314);
var k__$1 = first__9315;
var ks__$1 = seq__9314__$1;
var kids__$1 = vec__9313;
if(cljs.core.truth_((function (){var or__7182__auto__ = x__$1;
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return k__$1;
}
})())){
var G__9316 = xs__$1;
var G__9317 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__9302__$1 = G__9316;
G__9303__$1 = G__9317;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_9318 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_9318;

hoplon.core.do_watch.call(null,kids_9318,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not.call(null,hoplon.core.native_QMARK_.call(null,elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_9321 = kidfn.call(null,parent);
var i_9322 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_9321));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_9321,i_9322,child__$1){
return (function (p1__9320_SHARP_,p2__9319_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_9321,cljs.core.assoc,i_9322,p2__9319_SHARP_);
});})(kids_9321,i_9322,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_9321,cljs.core.assoc,i_9322,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__7170__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7170__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__7170__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7170__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7170__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__7170__auto__;
}
})())){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_.call(null,this$__$1))){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.call(null,"Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("hoplon.core","unexpected-child-type","hoplon.core/unexpected-child-type",1756641127),new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"native?","native?",-1916990868),hoplon.core.native_QMARK_.call(null,child),new cljs.core.Keyword(null,"managed?","managed?",-1222195407),hoplon.core.managed_QMARK_.call(null,child),new cljs.core.Keyword(null,"this","this",-611633625),this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__9323_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__9323_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__9324_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__9324_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__9325_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__9325_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_9326 = cljs.core.keyword.call(null,k);
var attr_9327 = attrfn.call(null,this$__$1);
var has_QMARK__9328 = (function (){var and__7170__auto__ = attr_9327;
if(cljs.core.truth_(and__7170__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_9327),kk_9326);
} else {
return and__7170__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__9328)){
cljs.core.swap_BANG_.call(null,attr_9327,cljs.core.assoc,kk_9326,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__9329_SHARP_){
return p1__9329_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__9330_SHARP_){
return p1__9330_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__9331_SHARP_){
return p1__9331_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__9332_SHARP_){
return p1__9332_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,kvs);
} else {
var m__7851__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,kvs);
} else {
var m__7851__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,child);
} else {
var m__7851__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,child);
} else {
var m__7851__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,new$,existing);
} else {
var m__7851__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,new$,existing);
} else {
var m__7851__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args9333 = [];
var len__8295__auto___9340 = arguments.length;
var i__8296__auto___9341 = (0);
while(true){
if((i__8296__auto___9341 < len__8295__auto___9340)){
args9333.push((arguments[i__8296__auto___9341]));

var G__9342 = (i__8296__auto___9341 + (1));
i__8296__auto___9341 = G__9342;
continue;
} else {
}
break;
}

var G__9339 = args9333.length;
switch (G__9339) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9333.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9334){
var G__9335 = cljs.core.first.call(null,seq9334);
var seq9334__$1 = cljs.core.next.call(null,seq9334);
var G__9336 = cljs.core.first.call(null,seq9334__$1);
var seq9334__$2 = cljs.core.next.call(null,seq9334__$1);
var G__9337 = cljs.core.first.call(null,seq9334__$2);
var seq9334__$3 = cljs.core.next.call(null,seq9334__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9335,G__9336,G__9337,seq9334__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args9344 = [];
var len__8295__auto___9351 = arguments.length;
var i__8296__auto___9352 = (0);
while(true){
if((i__8296__auto___9352 < len__8295__auto___9351)){
args9344.push((arguments[i__8296__auto___9352]));

var G__9353 = (i__8296__auto___9352 + (1));
i__8296__auto___9352 = G__9353;
continue;
} else {
}
break;
}

var G__9350 = args9344.length;
switch (G__9350) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9344.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq9345){
var G__9346 = cljs.core.first.call(null,seq9345);
var seq9345__$1 = cljs.core.next.call(null,seq9345);
var G__9347 = cljs.core.first.call(null,seq9345__$1);
var seq9345__$2 = cljs.core.next.call(null,seq9345__$1);
var G__9348 = cljs.core.first.call(null,seq9345__$2);
var seq9345__$3 = cljs.core.next.call(null,seq9345__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9346,G__9347,G__9348,seq9345__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__7850__auto__ = (((this$ == null))?null:this$);
var m__7851__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7850__auto__)]);
if(!((m__7851__auto__ == null))){
return m__7851__auto__.call(null,this$,elem,value);
} else {
var m__7851__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7851__auto____$1 == null))){
return m__7851__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__9358_SHARP_,p2__9357_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__9357_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core.on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core.do_BANG_.call(null,elem,this$__$1,value);

}
}
});
hoplon.core.is_ie8 = cljs.core.not.call(null,goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__9359_SHARP_){
return p1__9359_SHARP_.head;
}):(function (p1__9360_SHARP_){
return p1__9360_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9361_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__9361_SHARP_);
}catch (e9362){if((e9362 instanceof Error)){
var _ = e9362;
return null;
} else {
throw e9362;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9363_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__9363_SHARP_);
}catch (e9364){if((e9364 instanceof Error)){
var _ = e9364;
return null;
} else {
throw e9364;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args9365 = [];
var len__8295__auto___9369 = arguments.length;
var i__8296__auto___9370 = (0);
while(true){
if((i__8296__auto___9370 < len__8295__auto___9369)){
args9365.push((arguments[i__8296__auto___9370]));

var G__9371 = (i__8296__auto___9370 + (1));
i__8296__auto___9370 = G__9371;
continue;
} else {
}
break;
}

var G__9367 = args9365.length;
switch (G__9367) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9365.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e9368){if((e9368 instanceof Error)){
var _ = e9368;
return not_found;
} else {
throw e9368;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args9373 = [];
var len__8295__auto___9376 = arguments.length;
var i__8296__auto___9377 = (0);
while(true){
if((i__8296__auto___9377 < len__8295__auto___9376)){
args9373.push((arguments[i__8296__auto___9377]));

var G__9378 = (i__8296__auto___9377 + (1));
i__8296__auto___9377 = G__9378;
continue;
} else {
}
break;
}

var G__9375 = args9373.length;
switch (G__9375) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9373.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return f.call(null);
}),(0));
} else {
var temp__4655__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__4655__auto__){
return (function (){
return ((function (temp__4655__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__4655__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__4655__auto__))
,(20));
} else {
var seq__9392_9396 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__9393_9397 = null;
var count__9394_9398 = (0);
var i__9395_9399 = (0);
while(true){
if((i__9395_9399 < count__9394_9398)){
var f_9400__$1 = cljs.core._nth.call(null,chunk__9393_9397,i__9395_9399);
f_9400__$1.call(null);

var G__9401 = seq__9392_9396;
var G__9402 = chunk__9393_9397;
var G__9403 = count__9394_9398;
var G__9404 = (i__9395_9399 + (1));
seq__9392_9396 = G__9401;
chunk__9393_9397 = G__9402;
count__9394_9398 = G__9403;
i__9395_9399 = G__9404;
continue;
} else {
var temp__4657__auto___9405 = cljs.core.seq.call(null,seq__9392_9396);
if(temp__4657__auto___9405){
var seq__9392_9406__$1 = temp__4657__auto___9405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9392_9406__$1)){
var c__8001__auto___9407 = cljs.core.chunk_first.call(null,seq__9392_9406__$1);
var G__9408 = cljs.core.chunk_rest.call(null,seq__9392_9406__$1);
var G__9409 = c__8001__auto___9407;
var G__9410 = cljs.core.count.call(null,c__8001__auto___9407);
var G__9411 = (0);
seq__9392_9396 = G__9408;
chunk__9393_9397 = G__9409;
count__9394_9398 = G__9410;
i__9395_9399 = G__9411;
continue;
} else {
var f_9412__$1 = cljs.core.first.call(null,seq__9392_9406__$1);
f_9412__$1.call(null);

var G__9413 = cljs.core.next.call(null,seq__9392_9406__$1);
var G__9414 = null;
var G__9415 = (0);
var G__9416 = (0);
seq__9392_9396 = G__9413;
chunk__9393_9397 = G__9414;
count__9394_9398 = G__9415;
i__9395_9399 = G__9416;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__4655__auto__))
.call(null);
});})(temp__4655__auto__))
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__9433 = args;
var vec__9434 = G__9433;
var seq__9435 = cljs.core.seq.call(null,vec__9434);
var first__9436 = cljs.core.first.call(null,seq__9435);
var seq__9435__$1 = cljs.core.next.call(null,seq__9435);
var arg = first__9436;
var args__$1 = seq__9435__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__9433__$1 = G__9433;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9437 = G__9433__$1;
var seq__9438 = cljs.core.seq.call(null,vec__9437);
var first__9439 = cljs.core.first.call(null,seq__9438);
var seq__9438__$1 = cljs.core.next.call(null,seq__9438);
var arg__$1 = first__9439;
var args__$2 = seq__9438__$1;
if(cljs.core.not.call(null,(function (){var or__7182__auto__ = arg__$1;
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__9440 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__9433__$1,attr__$2,kids__$2,vec__9437,seq__9438,first__9439,seq__9438__$1,arg__$1,args__$2,attr,kids,G__9433,vec__9434,seq__9435,first__9436,seq__9435__$1,arg,args__$1){
return (function (p1__9417_SHARP_,p2__9418_SHARP_,p3__9419_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__9417_SHARP_,p2__9418_SHARP_,p3__9419_SHARP_);
});})(attr__$1,kids__$1,G__9433__$1,attr__$2,kids__$2,vec__9437,seq__9438,first__9439,seq__9438__$1,arg__$1,args__$2,attr,kids,G__9433,vec__9434,seq__9435,first__9436,seq__9435__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__9441 = kids__$2;
var G__9442 = args__$2;
attr__$1 = G__9440;
kids__$1 = G__9441;
G__9433__$1 = G__9442;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__9443 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__9444 = kids__$2;
var G__9445 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__9443;
kids__$1 = G__9444;
G__9433__$1 = G__9445;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__9446 = attr__$2;
var G__9447 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9448 = args__$2;
attr__$1 = G__9446;
kids__$1 = G__9447;
G__9433__$1 = G__9448;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__9449 = attr__$2;
var G__9450 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__9451 = args__$2;
attr__$1 = G__9449;
kids__$1 = G__9450;
G__9433__$1 = G__9451;
continue;
} else {
var G__9452 = attr__$2;
var G__9453 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__9454 = args__$2;
attr__$1 = G__9452;
kids__$1 = G__9453;
G__9433__$1 = G__9454;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv.call(null,(function (p1__9456_SHARP_,p2__9455_SHARP_,p3__9457_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__9455_SHARP_,p1__9456_SHARP_,p3__9457_SHARP_);

return p1__9456_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__9458){
var vec__9466 = p__9458;
var seq__9467 = cljs.core.seq.call(null,vec__9466);
var first__9468 = cljs.core.first.call(null,seq__9467);
var seq__9467__$1 = cljs.core.next.call(null,seq__9467);
var child_cell = first__9468;
var _ = seq__9467__$1;
var kids = vec__9466;
var this$__$1 = this$;
var seq__9469_9473 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__9470_9474 = null;
var count__9471_9475 = (0);
var i__9472_9476 = (0);
while(true){
if((i__9472_9476 < count__9471_9475)){
var x_9477 = cljs.core._nth.call(null,chunk__9470_9474,i__9472_9476);
var temp__4657__auto___9478 = hoplon.core.__GT_node.call(null,x_9477);
if(cljs.core.truth_(temp__4657__auto___9478)){
var x_9479__$1 = temp__4657__auto___9478;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9479__$1);
} else {
}

var G__9480 = seq__9469_9473;
var G__9481 = chunk__9470_9474;
var G__9482 = count__9471_9475;
var G__9483 = (i__9472_9476 + (1));
seq__9469_9473 = G__9480;
chunk__9470_9474 = G__9481;
count__9471_9475 = G__9482;
i__9472_9476 = G__9483;
continue;
} else {
var temp__4657__auto___9484 = cljs.core.seq.call(null,seq__9469_9473);
if(temp__4657__auto___9484){
var seq__9469_9485__$1 = temp__4657__auto___9484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9469_9485__$1)){
var c__8001__auto___9486 = cljs.core.chunk_first.call(null,seq__9469_9485__$1);
var G__9487 = cljs.core.chunk_rest.call(null,seq__9469_9485__$1);
var G__9488 = c__8001__auto___9486;
var G__9489 = cljs.core.count.call(null,c__8001__auto___9486);
var G__9490 = (0);
seq__9469_9473 = G__9487;
chunk__9470_9474 = G__9488;
count__9471_9475 = G__9489;
i__9472_9476 = G__9490;
continue;
} else {
var x_9491 = cljs.core.first.call(null,seq__9469_9485__$1);
var temp__4657__auto___9492__$1 = hoplon.core.__GT_node.call(null,x_9491);
if(cljs.core.truth_(temp__4657__auto___9492__$1)){
var x_9493__$1 = temp__4657__auto___9492__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9493__$1);
} else {
}

var G__9494 = cljs.core.next.call(null,seq__9469_9485__$1);
var G__9495 = null;
var G__9496 = (0);
var G__9497 = (0);
seq__9469_9473 = G__9494;
chunk__9470_9474 = G__9495;
count__9471_9475 = G__9496;
i__9472_9476 = G__9497;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__9530__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9499 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9499,(0),null);
var kids = cljs.core.nth.call(null,vec__9499,(1),null);
var G__9502 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9502,attr);

hoplon.core.add_children_BANG_.call(null,G__9502,kids);

return G__9502;
};
var G__9530 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9531__i = 0, G__9531__a = new Array(arguments.length -  1);
while (G__9531__i < G__9531__a.length) {G__9531__a[G__9531__i] = arguments[G__9531__i + 1]; ++G__9531__i;}
  args = new cljs.core.IndexedSeq(G__9531__a,0,null);
} 
return G__9530__delegate.call(this,self__,args);};
G__9530.cljs$lang$maxFixedArity = 1;
G__9530.cljs$lang$applyTo = (function (arglist__9532){
var self__ = cljs.core.first(arglist__9532);
var args = cljs.core.rest(arglist__9532);
return G__9530__delegate(self__,args);
});
G__9530.cljs$core$IFn$_invoke$arity$variadic = G__9530__delegate;
return G__9530;
})()
;

Element.prototype.apply = (function (self__,args9498){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9498)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9533__delegate = function (args){
var this$ = this;
var vec__9503 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9503,(0),null);
var kids = cljs.core.nth.call(null,vec__9503,(1),null);
var G__9506 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9506,attr);

hoplon.core.add_children_BANG_.call(null,G__9506,kids);

return G__9506;
};
var G__9533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9534__i = 0, G__9534__a = new Array(arguments.length -  0);
while (G__9534__i < G__9534__a.length) {G__9534__a[G__9534__i] = arguments[G__9534__i + 0]; ++G__9534__i;}
  args = new cljs.core.IndexedSeq(G__9534__a,0,null);
} 
return G__9533__delegate.call(this,args);};
G__9533.cljs$lang$maxFixedArity = 0;
G__9533.cljs$lang$applyTo = (function (arglist__9535){
var args = cljs.core.seq(arglist__9535);
return G__9533__delegate(args);
});
G__9533.cljs$core$IFn$_invoke$arity$variadic = G__9533__delegate;
return G__9533;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9507 = cljs.core.seq.call(null,kvs);
var chunk__9509 = null;
var count__9510 = (0);
var i__9511 = (0);
while(true){
if((i__9511 < count__9510)){
var vec__9513 = cljs.core._nth.call(null,chunk__9509,i__9511);
var k = cljs.core.nth.call(null,vec__9513,(0),null);
var v = cljs.core.nth.call(null,vec__9513,(1),null);
var k_9536__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_9536__$1);
} else {
e.setAttribute(k_9536__$1,((cljs.core._EQ_.call(null,true,v))?k_9536__$1:v));
}

var G__9537 = seq__9507;
var G__9538 = chunk__9509;
var G__9539 = count__9510;
var G__9540 = (i__9511 + (1));
seq__9507 = G__9537;
chunk__9509 = G__9538;
count__9510 = G__9539;
i__9511 = G__9540;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9507);
if(temp__4657__auto__){
var seq__9507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9507__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9507__$1);
var G__9541 = cljs.core.chunk_rest.call(null,seq__9507__$1);
var G__9542 = c__8001__auto__;
var G__9543 = cljs.core.count.call(null,c__8001__auto__);
var G__9544 = (0);
seq__9507 = G__9541;
chunk__9509 = G__9542;
count__9510 = G__9543;
i__9511 = G__9544;
continue;
} else {
var vec__9516 = cljs.core.first.call(null,seq__9507__$1);
var k = cljs.core.nth.call(null,vec__9516,(0),null);
var v = cljs.core.nth.call(null,vec__9516,(1),null);
var k_9545__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_9545__$1);
} else {
e.setAttribute(k_9545__$1,((cljs.core._EQ_.call(null,true,v))?k_9545__$1:v));
}

var G__9546 = cljs.core.next.call(null,seq__9507__$1);
var G__9547 = null;
var G__9548 = (0);
var G__9549 = (0);
seq__9507 = G__9546;
chunk__9509 = G__9547;
count__9510 = G__9548;
i__9511 = G__9549;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9519 = cljs.core.seq.call(null,kvs);
var chunk__9520 = null;
var count__9521 = (0);
var i__9522 = (0);
while(true){
if((i__9522 < count__9521)){
var vec__9523 = cljs.core._nth.call(null,chunk__9520,i__9522);
var k = cljs.core.nth.call(null,vec__9523,(0),null);
var v = cljs.core.nth.call(null,vec__9523,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9550 = seq__9519;
var G__9551 = chunk__9520;
var G__9552 = count__9521;
var G__9553 = (i__9522 + (1));
seq__9519 = G__9550;
chunk__9520 = G__9551;
count__9521 = G__9552;
i__9522 = G__9553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9519);
if(temp__4657__auto__){
var seq__9519__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9519__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9519__$1);
var G__9554 = cljs.core.chunk_rest.call(null,seq__9519__$1);
var G__9555 = c__8001__auto__;
var G__9556 = cljs.core.count.call(null,c__8001__auto__);
var G__9557 = (0);
seq__9519 = G__9554;
chunk__9520 = G__9555;
count__9521 = G__9556;
i__9522 = G__9557;
continue;
} else {
var vec__9526 = cljs.core.first.call(null,seq__9519__$1);
var k = cljs.core.nth.call(null,vec__9526,(0),null);
var v = cljs.core.nth.call(null,vec__9526,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9558 = cljs.core.next.call(null,seq__9519__$1);
var G__9559 = null;
var G__9560 = (0);
var G__9561 = (0);
seq__9519 = G__9558;
chunk__9520 = G__9559;
count__9521 = G__9560;
i__9522 = G__9561;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e9529){if((e9529 instanceof Error)){
var _ = e9529;
return null;
} else {
throw e9529;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__9568__delegate = function (args){
var vec__9565 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__9565,(0),null);
var kids = cljs.core.nth.call(null,vec__9565,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__9568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9569__i = 0, G__9569__a = new Array(arguments.length -  0);
while (G__9569__i < G__9569__a.length) {G__9569__a[G__9569__i] = arguments[G__9569__i + 0]; ++G__9569__i;}
  args = new cljs.core.IndexedSeq(G__9569__a,0,null);
} 
return G__9568__delegate.call(this,args);};
G__9568.cljs$lang$maxFixedArity = 0;
G__9568.cljs$lang$applyTo = (function (arglist__9570){
var args = cljs.core.seq(arglist__9570);
return G__9568__delegate(args);
});
G__9568.cljs$core$IFn$_invoke$arity$variadic = G__9568__delegate;
return G__9568;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__9574__delegate = function (rest__9571_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__9571_SHARP_);
};
var G__9574 = function (var_args){
var rest__9571_SHARP_ = null;
if (arguments.length > 0) {
var G__9575__i = 0, G__9575__a = new Array(arguments.length -  0);
while (G__9575__i < G__9575__a.length) {G__9575__a[G__9575__i] = arguments[G__9575__i + 0]; ++G__9575__i;}
  rest__9571_SHARP_ = new cljs.core.IndexedSeq(G__9575__a,0,null);
} 
return G__9574__delegate.call(this,rest__9571_SHARP_);};
G__9574.cljs$lang$maxFixedArity = 0;
G__9574.cljs$lang$applyTo = (function (arglist__9576){
var rest__9571_SHARP_ = cljs.core.seq(arglist__9576);
return G__9574__delegate(rest__9571_SHARP_);
});
G__9574.cljs$core$IFn$_invoke$arity$variadic = G__9574__delegate;
return G__9574;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__9577__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e9573){if((e9573 instanceof Error)){
var _ = e9573;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e9573;

}
}};
var G__9577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9578__i = 0, G__9578__a = new Array(arguments.length -  0);
while (G__9578__i < G__9578__a.length) {G__9578__a[G__9578__i] = arguments[G__9578__i + 0]; ++G__9578__i;}
  args = new cljs.core.IndexedSeq(G__9578__a,0,null);
} 
return G__9577__delegate.call(this,args);};
G__9577.cljs$lang$maxFixedArity = 0;
G__9577.cljs$lang$applyTo = (function (arglist__9579){
var args = cljs.core.seq(arglist__9579);
return G__9577__delegate(args);
});
G__9577.cljs$core$IFn$_invoke$arity$variadic = G__9577__delegate;
return G__9577;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__8302__auto__ = [];
var len__8295__auto___9581 = arguments.length;
var i__8296__auto___9582 = (0);
while(true){
if((i__8296__auto___9582 < len__8295__auto___9581)){
args__8302__auto__.push((arguments[i__8296__auto___9582]));

var G__9583 = (i__8296__auto___9582 + (1));
i__8296__auto___9582 = G__9583;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((0) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__8303__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq9580){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9580));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,hoplon.core._head_STAR_.call(null,document));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,document.body);
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor.call(null,"multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.picture = hoplon.core.make_elem_ctor.call(null,"picture");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.shadow = hoplon.core.make_elem_ctor.call(null,"shadow");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.template = hoplon.core.make_elem_ctor.call(null,"template");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__9584_SHARP_){
return document.createTextNode(p1__9584_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__9585_SHARP_){
return document.createComment(p1__9585_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__9586_SHARP_){
var e = p1__9586_SHARP_.target;
if(cljs.core.truth_((function (){var or__7182__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__9586_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8119__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__,hierarchy__8119__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__,hierarchy__8119__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8119__auto__,method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__8115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8119__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__,hierarchy__8119__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__,hierarchy__8119__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8119__auto__,method_table__8115__auto__,prefer_table__8116__auto__,method_cache__8117__auto__,cached_hierarchy__8118__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__9598,G__9599){
return G__9598.call(null,G__9599);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__9587_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__9602,G__9601,G__9600){
return G__9600.call(null,G__9601,G__9602);
});})(on_deck,items_seq))
).call(null,p1__9587_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__9588_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__9588_SHARP_));
cljs.core.swap_BANG_.call(null,p1__9588_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__9603 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__9604 = null;
var count__9605 = (0);
var i__9606 = (0);
while(true){
if((i__9606 < count__9605)){
var i = cljs.core._nth.call(null,chunk__9604,i__9606);
var e_9607 = (function (){var or__7182__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9607);

var G__9608 = seq__9603;
var G__9609 = chunk__9604;
var G__9610 = count__9605;
var G__9611 = (i__9606 + (1));
seq__9603 = G__9608;
chunk__9604 = G__9609;
count__9605 = G__9610;
i__9606 = G__9611;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9603);
if(temp__4657__auto__){
var seq__9603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9603__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9603__$1);
var G__9612 = cljs.core.chunk_rest.call(null,seq__9603__$1);
var G__9613 = c__8001__auto__;
var G__9614 = cljs.core.count.call(null,c__8001__auto__);
var G__9615 = (0);
seq__9603 = G__9612;
chunk__9604 = G__9613;
count__9605 = G__9614;
i__9606 = G__9615;
continue;
} else {
var i = cljs.core.first.call(null,seq__9603__$1);
var e_9616 = (function (){var or__7182__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9616);

var G__9617 = cljs.core.next.call(null,seq__9603__$1);
var G__9618 = null;
var G__9619 = (0);
var G__9620 = (0);
seq__9603 = G__9617;
chunk__9604 = G__9618;
count__9605 = G__9619;
i__9606 = G__9620;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__8105__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8105__auto__)){
var e_9621 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_9621);

var G__9622 = (_ + (1));
_ = G__9622;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__8302__auto__ = [];
var len__8295__auto___9631 = arguments.length;
var i__8296__auto___9632 = (0);
while(true){
if((i__8296__auto___9632 < len__8295__auto___9631)){
args__8302__auto__.push((arguments[i__8296__auto___9632]));

var G__9633 = (i__8296__auto___9632 + (1));
i__8296__auto___9632 = G__9633;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((0) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__8303__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9624){
var vec__9625 = p__9624;
var default$ = cljs.core.nth.call(null,vec__9625,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__9625,default$){
return (function (G__9628,G__9630,G__9629){
var or__7182__auto__ = (function (){var and__7170__auto__ = G__9628.call(null,G__9629);
if(cljs.core.truth_(and__7170__auto__)){
return G__9629;
} else {
return and__7170__auto__;
}
})();
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return G__9630;
}
});})(c,vec__9625,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__9625,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__9625,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq9623){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9623));
});


//# sourceMappingURL=core.js.map