// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9671 = [];
var len__8295__auto___9690 = arguments.length;
var i__8296__auto___9691 = (0);
while(true){
if((i__8296__auto___9691 < len__8295__auto___9690)){
args9671.push((arguments[i__8296__auto___9691]));

var G__9692 = (i__8296__auto___9691 + (1));
i__8296__auto___9691 = G__9692;
continue;
} else {
}
break;
}

var G__9677 = args9671.length;
switch (G__9677) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9671.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9678 = cljs.core.seq.call(null,kvs);
var chunk__9680 = null;
var count__9681 = (0);
var i__9682 = (0);
while(true){
if((i__9682 < count__9681)){
var vec__9684 = cljs.core._nth.call(null,chunk__9680,i__9682);
var k = cljs.core.nth.call(null,vec__9684,(0),null);
var v = cljs.core.nth.call(null,vec__9684,(1),null);
var k_9694__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9694__$1);
} else {
e.attr(k_9694__$1,((cljs.core._EQ_.call(null,true,v))?k_9694__$1:v));
}

var G__9695 = seq__9678;
var G__9696 = chunk__9680;
var G__9697 = count__9681;
var G__9698 = (i__9682 + (1));
seq__9678 = G__9695;
chunk__9680 = G__9696;
count__9681 = G__9697;
i__9682 = G__9698;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9678);
if(temp__4657__auto__){
var seq__9678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9678__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9678__$1);
var G__9699 = cljs.core.chunk_rest.call(null,seq__9678__$1);
var G__9700 = c__8001__auto__;
var G__9701 = cljs.core.count.call(null,c__8001__auto__);
var G__9702 = (0);
seq__9678 = G__9699;
chunk__9680 = G__9700;
count__9681 = G__9701;
i__9682 = G__9702;
continue;
} else {
var vec__9687 = cljs.core.first.call(null,seq__9678__$1);
var k = cljs.core.nth.call(null,vec__9687,(0),null);
var v = cljs.core.nth.call(null,vec__9687,(1),null);
var k_9703__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9703__$1);
} else {
e.attr(k_9703__$1,((cljs.core._EQ_.call(null,true,v))?k_9703__$1:v));
}

var G__9704 = cljs.core.next.call(null,seq__9678__$1);
var G__9705 = null;
var G__9706 = (0);
var G__9707 = (0);
seq__9678 = G__9704;
chunk__9680 = G__9705;
count__9681 = G__9706;
i__9682 = G__9707;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9672){
var G__9673 = cljs.core.first.call(null,seq9672);
var seq9672__$1 = cljs.core.next.call(null,seq9672);
var G__9674 = cljs.core.first.call(null,seq9672__$1);
var seq9672__$2 = cljs.core.next.call(null,seq9672__$1);
var G__9675 = cljs.core.first.call(null,seq9672__$2);
var seq9672__$3 = cljs.core.next.call(null,seq9672__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9673,G__9674,G__9675,seq9672__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9708 = [];
var len__8295__auto___9725 = arguments.length;
var i__8296__auto___9726 = (0);
while(true){
if((i__8296__auto___9726 < len__8295__auto___9725)){
args9708.push((arguments[i__8296__auto___9726]));

var G__9727 = (i__8296__auto___9726 + (1));
i__8296__auto___9726 = G__9727;
continue;
} else {
}
break;
}

var G__9714 = args9708.length;
switch (G__9714) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9708.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9715 = cljs.core.seq.call(null,kvs);
var chunk__9716 = null;
var count__9717 = (0);
var i__9718 = (0);
while(true){
if((i__9718 < count__9717)){
var vec__9719 = cljs.core._nth.call(null,chunk__9716,i__9718);
var k = cljs.core.nth.call(null,vec__9719,(0),null);
var v = cljs.core.nth.call(null,vec__9719,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9729 = seq__9715;
var G__9730 = chunk__9716;
var G__9731 = count__9717;
var G__9732 = (i__9718 + (1));
seq__9715 = G__9729;
chunk__9716 = G__9730;
count__9717 = G__9731;
i__9718 = G__9732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9715);
if(temp__4657__auto__){
var seq__9715__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9715__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9715__$1);
var G__9733 = cljs.core.chunk_rest.call(null,seq__9715__$1);
var G__9734 = c__8001__auto__;
var G__9735 = cljs.core.count.call(null,c__8001__auto__);
var G__9736 = (0);
seq__9715 = G__9733;
chunk__9716 = G__9734;
count__9717 = G__9735;
i__9718 = G__9736;
continue;
} else {
var vec__9722 = cljs.core.first.call(null,seq__9715__$1);
var k = cljs.core.nth.call(null,vec__9722,(0),null);
var v = cljs.core.nth.call(null,vec__9722,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9737 = cljs.core.next.call(null,seq__9715__$1);
var G__9738 = null;
var G__9739 = (0);
var G__9740 = (0);
seq__9715 = G__9737;
chunk__9716 = G__9738;
count__9717 = G__9739;
i__9718 = G__9740;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9709){
var G__9710 = cljs.core.first.call(null,seq9709);
var seq9709__$1 = cljs.core.next.call(null,seq9709);
var G__9711 = cljs.core.first.call(null,seq9709__$1);
var seq9709__$2 = cljs.core.next.call(null,seq9709__$1);
var G__9712 = cljs.core.first.call(null,seq9709__$2);
var seq9709__$3 = cljs.core.next.call(null,seq9709__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9710,G__9711,G__9712,seq9709__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9741 = [];
var len__8295__auto___9744 = arguments.length;
var i__8296__auto___9745 = (0);
while(true){
if((i__8296__auto___9745 < len__8295__auto___9744)){
args9741.push((arguments[i__8296__auto___9745]));

var G__9746 = (i__8296__auto___9745 + (1));
i__8296__auto___9745 = G__9746;
continue;
} else {
}
break;
}

var G__9743 = args9741.length;
switch (G__9743) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9741.length)].join('')));

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
var args9748 = [];
var len__8295__auto___9751 = arguments.length;
var i__8296__auto___9752 = (0);
while(true){
if((i__8296__auto___9752 < len__8295__auto___9751)){
args9748.push((arguments[i__8296__auto___9752]));

var G__9753 = (i__8296__auto___9752 + (1));
i__8296__auto___9752 = G__9753;
continue;
} else {
}
break;
}

var G__9750 = args9748.length;
switch (G__9750) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9748.length)].join('')));

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
var G__9755__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9755 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9756__i = 0, G__9756__a = new Array(arguments.length -  2);
while (G__9756__i < G__9756__a.length) {G__9756__a[G__9756__i] = arguments[G__9756__i + 2]; ++G__9756__i;}
  args = new cljs.core.IndexedSeq(G__9756__a,0,null);
} 
return G__9755__delegate.call(this,elem,_,args);};
G__9755.cljs$lang$maxFixedArity = 2;
G__9755.cljs$lang$applyTo = (function (arglist__9757){
var elem = cljs.core.first(arglist__9757);
arglist__9757 = cljs.core.next(arglist__9757);
var _ = cljs.core.first(arglist__9757);
var args = cljs.core.rest(arglist__9757);
return G__9755__delegate(elem,_,args);
});
G__9755.cljs$core$IFn$_invoke$arity$variadic = G__9755__delegate;
return G__9755;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9758 = cljs.core.seq.call(null,clmap);
var chunk__9759 = null;
var count__9760 = (0);
var i__9761 = (0);
while(true){
if((i__9761 < count__9760)){
var vec__9762 = cljs.core._nth.call(null,chunk__9759,i__9761);
var c = cljs.core.nth.call(null,vec__9762,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9762,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9768 = seq__9758;
var G__9769 = chunk__9759;
var G__9770 = count__9760;
var G__9771 = (i__9761 + (1));
seq__9758 = G__9768;
chunk__9759 = G__9769;
count__9760 = G__9770;
i__9761 = G__9771;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9758);
if(temp__4657__auto__){
var seq__9758__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9758__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9758__$1);
var G__9772 = cljs.core.chunk_rest.call(null,seq__9758__$1);
var G__9773 = c__8001__auto__;
var G__9774 = cljs.core.count.call(null,c__8001__auto__);
var G__9775 = (0);
seq__9758 = G__9772;
chunk__9759 = G__9773;
count__9760 = G__9774;
i__9761 = G__9775;
continue;
} else {
var vec__9765 = cljs.core.first.call(null,seq__9758__$1);
var c = cljs.core.nth.call(null,vec__9765,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9765,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9776 = cljs.core.next.call(null,seq__9758__$1);
var G__9777 = null;
var G__9778 = (0);
var G__9779 = (0);
seq__9758 = G__9776;
chunk__9759 = G__9777;
count__9760 = G__9778;
i__9761 = G__9779;
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