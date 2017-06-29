// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9763 = [];
var len__8295__auto___9782 = arguments.length;
var i__8296__auto___9783 = (0);
while(true){
if((i__8296__auto___9783 < len__8295__auto___9782)){
args9763.push((arguments[i__8296__auto___9783]));

var G__9784 = (i__8296__auto___9783 + (1));
i__8296__auto___9783 = G__9784;
continue;
} else {
}
break;
}

var G__9769 = args9763.length;
switch (G__9769) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9763.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9770 = cljs.core.seq.call(null,kvs);
var chunk__9772 = null;
var count__9773 = (0);
var i__9774 = (0);
while(true){
if((i__9774 < count__9773)){
var vec__9776 = cljs.core._nth.call(null,chunk__9772,i__9774);
var k = cljs.core.nth.call(null,vec__9776,(0),null);
var v = cljs.core.nth.call(null,vec__9776,(1),null);
var k_9786__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9786__$1);
} else {
e.attr(k_9786__$1,((cljs.core._EQ_.call(null,true,v))?k_9786__$1:v));
}

var G__9787 = seq__9770;
var G__9788 = chunk__9772;
var G__9789 = count__9773;
var G__9790 = (i__9774 + (1));
seq__9770 = G__9787;
chunk__9772 = G__9788;
count__9773 = G__9789;
i__9774 = G__9790;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9770);
if(temp__4657__auto__){
var seq__9770__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9770__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9770__$1);
var G__9791 = cljs.core.chunk_rest.call(null,seq__9770__$1);
var G__9792 = c__8001__auto__;
var G__9793 = cljs.core.count.call(null,c__8001__auto__);
var G__9794 = (0);
seq__9770 = G__9791;
chunk__9772 = G__9792;
count__9773 = G__9793;
i__9774 = G__9794;
continue;
} else {
var vec__9779 = cljs.core.first.call(null,seq__9770__$1);
var k = cljs.core.nth.call(null,vec__9779,(0),null);
var v = cljs.core.nth.call(null,vec__9779,(1),null);
var k_9795__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9795__$1);
} else {
e.attr(k_9795__$1,((cljs.core._EQ_.call(null,true,v))?k_9795__$1:v));
}

var G__9796 = cljs.core.next.call(null,seq__9770__$1);
var G__9797 = null;
var G__9798 = (0);
var G__9799 = (0);
seq__9770 = G__9796;
chunk__9772 = G__9797;
count__9773 = G__9798;
i__9774 = G__9799;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9764){
var G__9765 = cljs.core.first.call(null,seq9764);
var seq9764__$1 = cljs.core.next.call(null,seq9764);
var G__9766 = cljs.core.first.call(null,seq9764__$1);
var seq9764__$2 = cljs.core.next.call(null,seq9764__$1);
var G__9767 = cljs.core.first.call(null,seq9764__$2);
var seq9764__$3 = cljs.core.next.call(null,seq9764__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9765,G__9766,G__9767,seq9764__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9800 = [];
var len__8295__auto___9817 = arguments.length;
var i__8296__auto___9818 = (0);
while(true){
if((i__8296__auto___9818 < len__8295__auto___9817)){
args9800.push((arguments[i__8296__auto___9818]));

var G__9819 = (i__8296__auto___9818 + (1));
i__8296__auto___9818 = G__9819;
continue;
} else {
}
break;
}

var G__9806 = args9800.length;
switch (G__9806) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9800.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9807 = cljs.core.seq.call(null,kvs);
var chunk__9808 = null;
var count__9809 = (0);
var i__9810 = (0);
while(true){
if((i__9810 < count__9809)){
var vec__9811 = cljs.core._nth.call(null,chunk__9808,i__9810);
var k = cljs.core.nth.call(null,vec__9811,(0),null);
var v = cljs.core.nth.call(null,vec__9811,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9821 = seq__9807;
var G__9822 = chunk__9808;
var G__9823 = count__9809;
var G__9824 = (i__9810 + (1));
seq__9807 = G__9821;
chunk__9808 = G__9822;
count__9809 = G__9823;
i__9810 = G__9824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9807);
if(temp__4657__auto__){
var seq__9807__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9807__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9807__$1);
var G__9825 = cljs.core.chunk_rest.call(null,seq__9807__$1);
var G__9826 = c__8001__auto__;
var G__9827 = cljs.core.count.call(null,c__8001__auto__);
var G__9828 = (0);
seq__9807 = G__9825;
chunk__9808 = G__9826;
count__9809 = G__9827;
i__9810 = G__9828;
continue;
} else {
var vec__9814 = cljs.core.first.call(null,seq__9807__$1);
var k = cljs.core.nth.call(null,vec__9814,(0),null);
var v = cljs.core.nth.call(null,vec__9814,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9829 = cljs.core.next.call(null,seq__9807__$1);
var G__9830 = null;
var G__9831 = (0);
var G__9832 = (0);
seq__9807 = G__9829;
chunk__9808 = G__9830;
count__9809 = G__9831;
i__9810 = G__9832;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9801){
var G__9802 = cljs.core.first.call(null,seq9801);
var seq9801__$1 = cljs.core.next.call(null,seq9801);
var G__9803 = cljs.core.first.call(null,seq9801__$1);
var seq9801__$2 = cljs.core.next.call(null,seq9801__$1);
var G__9804 = cljs.core.first.call(null,seq9801__$2);
var seq9801__$3 = cljs.core.next.call(null,seq9801__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9802,G__9803,G__9804,seq9801__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9833 = [];
var len__8295__auto___9836 = arguments.length;
var i__8296__auto___9837 = (0);
while(true){
if((i__8296__auto___9837 < len__8295__auto___9836)){
args9833.push((arguments[i__8296__auto___9837]));

var G__9838 = (i__8296__auto___9837 + (1));
i__8296__auto___9837 = G__9838;
continue;
} else {
}
break;
}

var G__9835 = args9833.length;
switch (G__9835) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9833.length)].join('')));

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
var args9840 = [];
var len__8295__auto___9843 = arguments.length;
var i__8296__auto___9844 = (0);
while(true){
if((i__8296__auto___9844 < len__8295__auto___9843)){
args9840.push((arguments[i__8296__auto___9844]));

var G__9845 = (i__8296__auto___9844 + (1));
i__8296__auto___9844 = G__9845;
continue;
} else {
}
break;
}

var G__9842 = args9840.length;
switch (G__9842) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9840.length)].join('')));

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
var G__9847__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9847 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9848__i = 0, G__9848__a = new Array(arguments.length -  2);
while (G__9848__i < G__9848__a.length) {G__9848__a[G__9848__i] = arguments[G__9848__i + 2]; ++G__9848__i;}
  args = new cljs.core.IndexedSeq(G__9848__a,0,null);
} 
return G__9847__delegate.call(this,elem,_,args);};
G__9847.cljs$lang$maxFixedArity = 2;
G__9847.cljs$lang$applyTo = (function (arglist__9849){
var elem = cljs.core.first(arglist__9849);
arglist__9849 = cljs.core.next(arglist__9849);
var _ = cljs.core.first(arglist__9849);
var args = cljs.core.rest(arglist__9849);
return G__9847__delegate(elem,_,args);
});
G__9847.cljs$core$IFn$_invoke$arity$variadic = G__9847__delegate;
return G__9847;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9850 = cljs.core.seq.call(null,clmap);
var chunk__9851 = null;
var count__9852 = (0);
var i__9853 = (0);
while(true){
if((i__9853 < count__9852)){
var vec__9854 = cljs.core._nth.call(null,chunk__9851,i__9853);
var c = cljs.core.nth.call(null,vec__9854,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9854,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9860 = seq__9850;
var G__9861 = chunk__9851;
var G__9862 = count__9852;
var G__9863 = (i__9853 + (1));
seq__9850 = G__9860;
chunk__9851 = G__9861;
count__9852 = G__9862;
i__9853 = G__9863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9850);
if(temp__4657__auto__){
var seq__9850__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9850__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9850__$1);
var G__9864 = cljs.core.chunk_rest.call(null,seq__9850__$1);
var G__9865 = c__8001__auto__;
var G__9866 = cljs.core.count.call(null,c__8001__auto__);
var G__9867 = (0);
seq__9850 = G__9864;
chunk__9851 = G__9865;
count__9852 = G__9866;
i__9853 = G__9867;
continue;
} else {
var vec__9857 = cljs.core.first.call(null,seq__9850__$1);
var c = cljs.core.nth.call(null,vec__9857,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9857,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9868 = cljs.core.next.call(null,seq__9850__$1);
var G__9869 = null;
var G__9870 = (0);
var G__9871 = (0);
seq__9850 = G__9868;
chunk__9851 = G__9869;
count__9852 = G__9870;
i__9853 = G__9871;
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