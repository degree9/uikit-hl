// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9753 = [];
var len__8295__auto___9772 = arguments.length;
var i__8296__auto___9773 = (0);
while(true){
if((i__8296__auto___9773 < len__8295__auto___9772)){
args9753.push((arguments[i__8296__auto___9773]));

var G__9774 = (i__8296__auto___9773 + (1));
i__8296__auto___9773 = G__9774;
continue;
} else {
}
break;
}

var G__9759 = args9753.length;
switch (G__9759) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9753.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9760 = cljs.core.seq.call(null,kvs);
var chunk__9762 = null;
var count__9763 = (0);
var i__9764 = (0);
while(true){
if((i__9764 < count__9763)){
var vec__9766 = cljs.core._nth.call(null,chunk__9762,i__9764);
var k = cljs.core.nth.call(null,vec__9766,(0),null);
var v = cljs.core.nth.call(null,vec__9766,(1),null);
var k_9776__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9776__$1);
} else {
e.attr(k_9776__$1,((cljs.core._EQ_.call(null,true,v))?k_9776__$1:v));
}

var G__9777 = seq__9760;
var G__9778 = chunk__9762;
var G__9779 = count__9763;
var G__9780 = (i__9764 + (1));
seq__9760 = G__9777;
chunk__9762 = G__9778;
count__9763 = G__9779;
i__9764 = G__9780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9760);
if(temp__4657__auto__){
var seq__9760__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9760__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9760__$1);
var G__9781 = cljs.core.chunk_rest.call(null,seq__9760__$1);
var G__9782 = c__8001__auto__;
var G__9783 = cljs.core.count.call(null,c__8001__auto__);
var G__9784 = (0);
seq__9760 = G__9781;
chunk__9762 = G__9782;
count__9763 = G__9783;
i__9764 = G__9784;
continue;
} else {
var vec__9769 = cljs.core.first.call(null,seq__9760__$1);
var k = cljs.core.nth.call(null,vec__9769,(0),null);
var v = cljs.core.nth.call(null,vec__9769,(1),null);
var k_9785__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9785__$1);
} else {
e.attr(k_9785__$1,((cljs.core._EQ_.call(null,true,v))?k_9785__$1:v));
}

var G__9786 = cljs.core.next.call(null,seq__9760__$1);
var G__9787 = null;
var G__9788 = (0);
var G__9789 = (0);
seq__9760 = G__9786;
chunk__9762 = G__9787;
count__9763 = G__9788;
i__9764 = G__9789;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9754){
var G__9755 = cljs.core.first.call(null,seq9754);
var seq9754__$1 = cljs.core.next.call(null,seq9754);
var G__9756 = cljs.core.first.call(null,seq9754__$1);
var seq9754__$2 = cljs.core.next.call(null,seq9754__$1);
var G__9757 = cljs.core.first.call(null,seq9754__$2);
var seq9754__$3 = cljs.core.next.call(null,seq9754__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9755,G__9756,G__9757,seq9754__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9790 = [];
var len__8295__auto___9807 = arguments.length;
var i__8296__auto___9808 = (0);
while(true){
if((i__8296__auto___9808 < len__8295__auto___9807)){
args9790.push((arguments[i__8296__auto___9808]));

var G__9809 = (i__8296__auto___9808 + (1));
i__8296__auto___9808 = G__9809;
continue;
} else {
}
break;
}

var G__9796 = args9790.length;
switch (G__9796) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9790.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9797 = cljs.core.seq.call(null,kvs);
var chunk__9798 = null;
var count__9799 = (0);
var i__9800 = (0);
while(true){
if((i__9800 < count__9799)){
var vec__9801 = cljs.core._nth.call(null,chunk__9798,i__9800);
var k = cljs.core.nth.call(null,vec__9801,(0),null);
var v = cljs.core.nth.call(null,vec__9801,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9811 = seq__9797;
var G__9812 = chunk__9798;
var G__9813 = count__9799;
var G__9814 = (i__9800 + (1));
seq__9797 = G__9811;
chunk__9798 = G__9812;
count__9799 = G__9813;
i__9800 = G__9814;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9797);
if(temp__4657__auto__){
var seq__9797__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9797__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9797__$1);
var G__9815 = cljs.core.chunk_rest.call(null,seq__9797__$1);
var G__9816 = c__8001__auto__;
var G__9817 = cljs.core.count.call(null,c__8001__auto__);
var G__9818 = (0);
seq__9797 = G__9815;
chunk__9798 = G__9816;
count__9799 = G__9817;
i__9800 = G__9818;
continue;
} else {
var vec__9804 = cljs.core.first.call(null,seq__9797__$1);
var k = cljs.core.nth.call(null,vec__9804,(0),null);
var v = cljs.core.nth.call(null,vec__9804,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9819 = cljs.core.next.call(null,seq__9797__$1);
var G__9820 = null;
var G__9821 = (0);
var G__9822 = (0);
seq__9797 = G__9819;
chunk__9798 = G__9820;
count__9799 = G__9821;
i__9800 = G__9822;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9791){
var G__9792 = cljs.core.first.call(null,seq9791);
var seq9791__$1 = cljs.core.next.call(null,seq9791);
var G__9793 = cljs.core.first.call(null,seq9791__$1);
var seq9791__$2 = cljs.core.next.call(null,seq9791__$1);
var G__9794 = cljs.core.first.call(null,seq9791__$2);
var seq9791__$3 = cljs.core.next.call(null,seq9791__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9792,G__9793,G__9794,seq9791__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9823 = [];
var len__8295__auto___9826 = arguments.length;
var i__8296__auto___9827 = (0);
while(true){
if((i__8296__auto___9827 < len__8295__auto___9826)){
args9823.push((arguments[i__8296__auto___9827]));

var G__9828 = (i__8296__auto___9827 + (1));
i__8296__auto___9827 = G__9828;
continue;
} else {
}
break;
}

var G__9825 = args9823.length;
switch (G__9825) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9823.length)].join('')));

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
var args9830 = [];
var len__8295__auto___9833 = arguments.length;
var i__8296__auto___9834 = (0);
while(true){
if((i__8296__auto___9834 < len__8295__auto___9833)){
args9830.push((arguments[i__8296__auto___9834]));

var G__9835 = (i__8296__auto___9834 + (1));
i__8296__auto___9834 = G__9835;
continue;
} else {
}
break;
}

var G__9832 = args9830.length;
switch (G__9832) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9830.length)].join('')));

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
var G__9837__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9837 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9838__i = 0, G__9838__a = new Array(arguments.length -  2);
while (G__9838__i < G__9838__a.length) {G__9838__a[G__9838__i] = arguments[G__9838__i + 2]; ++G__9838__i;}
  args = new cljs.core.IndexedSeq(G__9838__a,0,null);
} 
return G__9837__delegate.call(this,elem,_,args);};
G__9837.cljs$lang$maxFixedArity = 2;
G__9837.cljs$lang$applyTo = (function (arglist__9839){
var elem = cljs.core.first(arglist__9839);
arglist__9839 = cljs.core.next(arglist__9839);
var _ = cljs.core.first(arglist__9839);
var args = cljs.core.rest(arglist__9839);
return G__9837__delegate(elem,_,args);
});
G__9837.cljs$core$IFn$_invoke$arity$variadic = G__9837__delegate;
return G__9837;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9840 = cljs.core.seq.call(null,clmap);
var chunk__9841 = null;
var count__9842 = (0);
var i__9843 = (0);
while(true){
if((i__9843 < count__9842)){
var vec__9844 = cljs.core._nth.call(null,chunk__9841,i__9843);
var c = cljs.core.nth.call(null,vec__9844,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9844,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9850 = seq__9840;
var G__9851 = chunk__9841;
var G__9852 = count__9842;
var G__9853 = (i__9843 + (1));
seq__9840 = G__9850;
chunk__9841 = G__9851;
count__9842 = G__9852;
i__9843 = G__9853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9840);
if(temp__4657__auto__){
var seq__9840__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9840__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9840__$1);
var G__9854 = cljs.core.chunk_rest.call(null,seq__9840__$1);
var G__9855 = c__8001__auto__;
var G__9856 = cljs.core.count.call(null,c__8001__auto__);
var G__9857 = (0);
seq__9840 = G__9854;
chunk__9841 = G__9855;
count__9842 = G__9856;
i__9843 = G__9857;
continue;
} else {
var vec__9847 = cljs.core.first.call(null,seq__9840__$1);
var c = cljs.core.nth.call(null,vec__9847,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9847,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9858 = cljs.core.next.call(null,seq__9840__$1);
var G__9859 = null;
var G__9860 = (0);
var G__9861 = (0);
seq__9840 = G__9858;
chunk__9841 = G__9859;
count__9842 = G__9860;
i__9843 = G__9861;
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