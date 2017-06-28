// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9636 = [];
var len__8295__auto___9655 = arguments.length;
var i__8296__auto___9656 = (0);
while(true){
if((i__8296__auto___9656 < len__8295__auto___9655)){
args9636.push((arguments[i__8296__auto___9656]));

var G__9657 = (i__8296__auto___9656 + (1));
i__8296__auto___9656 = G__9657;
continue;
} else {
}
break;
}

var G__9642 = args9636.length;
switch (G__9642) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9636.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9643 = cljs.core.seq.call(null,kvs);
var chunk__9645 = null;
var count__9646 = (0);
var i__9647 = (0);
while(true){
if((i__9647 < count__9646)){
var vec__9649 = cljs.core._nth.call(null,chunk__9645,i__9647);
var k = cljs.core.nth.call(null,vec__9649,(0),null);
var v = cljs.core.nth.call(null,vec__9649,(1),null);
var k_9659__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9659__$1);
} else {
e.attr(k_9659__$1,((cljs.core._EQ_.call(null,true,v))?k_9659__$1:v));
}

var G__9660 = seq__9643;
var G__9661 = chunk__9645;
var G__9662 = count__9646;
var G__9663 = (i__9647 + (1));
seq__9643 = G__9660;
chunk__9645 = G__9661;
count__9646 = G__9662;
i__9647 = G__9663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9643);
if(temp__4657__auto__){
var seq__9643__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9643__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9643__$1);
var G__9664 = cljs.core.chunk_rest.call(null,seq__9643__$1);
var G__9665 = c__8001__auto__;
var G__9666 = cljs.core.count.call(null,c__8001__auto__);
var G__9667 = (0);
seq__9643 = G__9664;
chunk__9645 = G__9665;
count__9646 = G__9666;
i__9647 = G__9667;
continue;
} else {
var vec__9652 = cljs.core.first.call(null,seq__9643__$1);
var k = cljs.core.nth.call(null,vec__9652,(0),null);
var v = cljs.core.nth.call(null,vec__9652,(1),null);
var k_9668__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9668__$1);
} else {
e.attr(k_9668__$1,((cljs.core._EQ_.call(null,true,v))?k_9668__$1:v));
}

var G__9669 = cljs.core.next.call(null,seq__9643__$1);
var G__9670 = null;
var G__9671 = (0);
var G__9672 = (0);
seq__9643 = G__9669;
chunk__9645 = G__9670;
count__9646 = G__9671;
i__9647 = G__9672;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9637){
var G__9638 = cljs.core.first.call(null,seq9637);
var seq9637__$1 = cljs.core.next.call(null,seq9637);
var G__9639 = cljs.core.first.call(null,seq9637__$1);
var seq9637__$2 = cljs.core.next.call(null,seq9637__$1);
var G__9640 = cljs.core.first.call(null,seq9637__$2);
var seq9637__$3 = cljs.core.next.call(null,seq9637__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9638,G__9639,G__9640,seq9637__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9673 = [];
var len__8295__auto___9690 = arguments.length;
var i__8296__auto___9691 = (0);
while(true){
if((i__8296__auto___9691 < len__8295__auto___9690)){
args9673.push((arguments[i__8296__auto___9691]));

var G__9692 = (i__8296__auto___9691 + (1));
i__8296__auto___9691 = G__9692;
continue;
} else {
}
break;
}

var G__9679 = args9673.length;
switch (G__9679) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9673.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9680 = cljs.core.seq.call(null,kvs);
var chunk__9681 = null;
var count__9682 = (0);
var i__9683 = (0);
while(true){
if((i__9683 < count__9682)){
var vec__9684 = cljs.core._nth.call(null,chunk__9681,i__9683);
var k = cljs.core.nth.call(null,vec__9684,(0),null);
var v = cljs.core.nth.call(null,vec__9684,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9694 = seq__9680;
var G__9695 = chunk__9681;
var G__9696 = count__9682;
var G__9697 = (i__9683 + (1));
seq__9680 = G__9694;
chunk__9681 = G__9695;
count__9682 = G__9696;
i__9683 = G__9697;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9680);
if(temp__4657__auto__){
var seq__9680__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9680__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9680__$1);
var G__9698 = cljs.core.chunk_rest.call(null,seq__9680__$1);
var G__9699 = c__8001__auto__;
var G__9700 = cljs.core.count.call(null,c__8001__auto__);
var G__9701 = (0);
seq__9680 = G__9698;
chunk__9681 = G__9699;
count__9682 = G__9700;
i__9683 = G__9701;
continue;
} else {
var vec__9687 = cljs.core.first.call(null,seq__9680__$1);
var k = cljs.core.nth.call(null,vec__9687,(0),null);
var v = cljs.core.nth.call(null,vec__9687,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9702 = cljs.core.next.call(null,seq__9680__$1);
var G__9703 = null;
var G__9704 = (0);
var G__9705 = (0);
seq__9680 = G__9702;
chunk__9681 = G__9703;
count__9682 = G__9704;
i__9683 = G__9705;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9674){
var G__9675 = cljs.core.first.call(null,seq9674);
var seq9674__$1 = cljs.core.next.call(null,seq9674);
var G__9676 = cljs.core.first.call(null,seq9674__$1);
var seq9674__$2 = cljs.core.next.call(null,seq9674__$1);
var G__9677 = cljs.core.first.call(null,seq9674__$2);
var seq9674__$3 = cljs.core.next.call(null,seq9674__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9675,G__9676,G__9677,seq9674__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9706 = [];
var len__8295__auto___9709 = arguments.length;
var i__8296__auto___9710 = (0);
while(true){
if((i__8296__auto___9710 < len__8295__auto___9709)){
args9706.push((arguments[i__8296__auto___9710]));

var G__9711 = (i__8296__auto___9710 + (1));
i__8296__auto___9710 = G__9711;
continue;
} else {
}
break;
}

var G__9708 = args9706.length;
switch (G__9708) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9706.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args9713 = [];
var len__8295__auto___9716 = arguments.length;
var i__8296__auto___9717 = (0);
while(true){
if((i__8296__auto___9717 < len__8295__auto___9716)){
args9713.push((arguments[i__8296__auto___9717]));

var G__9718 = (i__8296__auto___9717 + (1));
i__8296__auto___9717 = G__9718;
continue;
} else {
}
break;
}

var G__9715 = args9713.length;
switch (G__9715) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9713.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__9720__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9720 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9721__i = 0, G__9721__a = new Array(arguments.length -  2);
while (G__9721__i < G__9721__a.length) {G__9721__a[G__9721__i] = arguments[G__9721__i + 2]; ++G__9721__i;}
  args = new cljs.core.IndexedSeq(G__9721__a,0,null);
} 
return G__9720__delegate.call(this,elem,_,args);};
G__9720.cljs$lang$maxFixedArity = 2;
G__9720.cljs$lang$applyTo = (function (arglist__9722){
var elem = cljs.core.first(arglist__9722);
arglist__9722 = cljs.core.next(arglist__9722);
var _ = cljs.core.first(arglist__9722);
var args = cljs.core.rest(arglist__9722);
return G__9720__delegate(elem,_,args);
});
G__9720.cljs$core$IFn$_invoke$arity$variadic = G__9720__delegate;
return G__9720;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9723 = cljs.core.seq.call(null,clmap);
var chunk__9724 = null;
var count__9725 = (0);
var i__9726 = (0);
while(true){
if((i__9726 < count__9725)){
var vec__9727 = cljs.core._nth.call(null,chunk__9724,i__9726);
var c = cljs.core.nth.call(null,vec__9727,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9727,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9733 = seq__9723;
var G__9734 = chunk__9724;
var G__9735 = count__9725;
var G__9736 = (i__9726 + (1));
seq__9723 = G__9733;
chunk__9724 = G__9734;
count__9725 = G__9735;
i__9726 = G__9736;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9723);
if(temp__4657__auto__){
var seq__9723__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9723__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9723__$1);
var G__9737 = cljs.core.chunk_rest.call(null,seq__9723__$1);
var G__9738 = c__8001__auto__;
var G__9739 = cljs.core.count.call(null,c__8001__auto__);
var G__9740 = (0);
seq__9723 = G__9737;
chunk__9724 = G__9738;
count__9725 = G__9739;
i__9726 = G__9740;
continue;
} else {
var vec__9730 = cljs.core.first.call(null,seq__9723__$1);
var c = cljs.core.nth.call(null,vec__9730,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9730,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9741 = cljs.core.next.call(null,seq__9723__$1);
var G__9742 = null;
var G__9743 = (0);
var G__9744 = (0);
seq__9723 = G__9741;
chunk__9724 = G__9742;
count__9725 = G__9743;
i__9726 = G__9744;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map