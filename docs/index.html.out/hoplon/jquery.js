// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9751 = [];
var len__8295__auto___9770 = arguments.length;
var i__8296__auto___9771 = (0);
while(true){
if((i__8296__auto___9771 < len__8295__auto___9770)){
args9751.push((arguments[i__8296__auto___9771]));

var G__9772 = (i__8296__auto___9771 + (1));
i__8296__auto___9771 = G__9772;
continue;
} else {
}
break;
}

var G__9757 = args9751.length;
switch (G__9757) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9751.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9758 = cljs.core.seq.call(null,kvs);
var chunk__9760 = null;
var count__9761 = (0);
var i__9762 = (0);
while(true){
if((i__9762 < count__9761)){
var vec__9764 = cljs.core._nth.call(null,chunk__9760,i__9762);
var k = cljs.core.nth.call(null,vec__9764,(0),null);
var v = cljs.core.nth.call(null,vec__9764,(1),null);
var k_9774__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9774__$1);
} else {
e.attr(k_9774__$1,((cljs.core._EQ_.call(null,true,v))?k_9774__$1:v));
}

var G__9775 = seq__9758;
var G__9776 = chunk__9760;
var G__9777 = count__9761;
var G__9778 = (i__9762 + (1));
seq__9758 = G__9775;
chunk__9760 = G__9776;
count__9761 = G__9777;
i__9762 = G__9778;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9758);
if(temp__4657__auto__){
var seq__9758__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9758__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9758__$1);
var G__9779 = cljs.core.chunk_rest.call(null,seq__9758__$1);
var G__9780 = c__8001__auto__;
var G__9781 = cljs.core.count.call(null,c__8001__auto__);
var G__9782 = (0);
seq__9758 = G__9779;
chunk__9760 = G__9780;
count__9761 = G__9781;
i__9762 = G__9782;
continue;
} else {
var vec__9767 = cljs.core.first.call(null,seq__9758__$1);
var k = cljs.core.nth.call(null,vec__9767,(0),null);
var v = cljs.core.nth.call(null,vec__9767,(1),null);
var k_9783__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9783__$1);
} else {
e.attr(k_9783__$1,((cljs.core._EQ_.call(null,true,v))?k_9783__$1:v));
}

var G__9784 = cljs.core.next.call(null,seq__9758__$1);
var G__9785 = null;
var G__9786 = (0);
var G__9787 = (0);
seq__9758 = G__9784;
chunk__9760 = G__9785;
count__9761 = G__9786;
i__9762 = G__9787;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9752){
var G__9753 = cljs.core.first.call(null,seq9752);
var seq9752__$1 = cljs.core.next.call(null,seq9752);
var G__9754 = cljs.core.first.call(null,seq9752__$1);
var seq9752__$2 = cljs.core.next.call(null,seq9752__$1);
var G__9755 = cljs.core.first.call(null,seq9752__$2);
var seq9752__$3 = cljs.core.next.call(null,seq9752__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9753,G__9754,G__9755,seq9752__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9788 = [];
var len__8295__auto___9805 = arguments.length;
var i__8296__auto___9806 = (0);
while(true){
if((i__8296__auto___9806 < len__8295__auto___9805)){
args9788.push((arguments[i__8296__auto___9806]));

var G__9807 = (i__8296__auto___9806 + (1));
i__8296__auto___9806 = G__9807;
continue;
} else {
}
break;
}

var G__9794 = args9788.length;
switch (G__9794) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9788.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9795 = cljs.core.seq.call(null,kvs);
var chunk__9796 = null;
var count__9797 = (0);
var i__9798 = (0);
while(true){
if((i__9798 < count__9797)){
var vec__9799 = cljs.core._nth.call(null,chunk__9796,i__9798);
var k = cljs.core.nth.call(null,vec__9799,(0),null);
var v = cljs.core.nth.call(null,vec__9799,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9809 = seq__9795;
var G__9810 = chunk__9796;
var G__9811 = count__9797;
var G__9812 = (i__9798 + (1));
seq__9795 = G__9809;
chunk__9796 = G__9810;
count__9797 = G__9811;
i__9798 = G__9812;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9795);
if(temp__4657__auto__){
var seq__9795__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9795__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9795__$1);
var G__9813 = cljs.core.chunk_rest.call(null,seq__9795__$1);
var G__9814 = c__8001__auto__;
var G__9815 = cljs.core.count.call(null,c__8001__auto__);
var G__9816 = (0);
seq__9795 = G__9813;
chunk__9796 = G__9814;
count__9797 = G__9815;
i__9798 = G__9816;
continue;
} else {
var vec__9802 = cljs.core.first.call(null,seq__9795__$1);
var k = cljs.core.nth.call(null,vec__9802,(0),null);
var v = cljs.core.nth.call(null,vec__9802,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9817 = cljs.core.next.call(null,seq__9795__$1);
var G__9818 = null;
var G__9819 = (0);
var G__9820 = (0);
seq__9795 = G__9817;
chunk__9796 = G__9818;
count__9797 = G__9819;
i__9798 = G__9820;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9789){
var G__9790 = cljs.core.first.call(null,seq9789);
var seq9789__$1 = cljs.core.next.call(null,seq9789);
var G__9791 = cljs.core.first.call(null,seq9789__$1);
var seq9789__$2 = cljs.core.next.call(null,seq9789__$1);
var G__9792 = cljs.core.first.call(null,seq9789__$2);
var seq9789__$3 = cljs.core.next.call(null,seq9789__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9790,G__9791,G__9792,seq9789__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9821 = [];
var len__8295__auto___9824 = arguments.length;
var i__8296__auto___9825 = (0);
while(true){
if((i__8296__auto___9825 < len__8295__auto___9824)){
args9821.push((arguments[i__8296__auto___9825]));

var G__9826 = (i__8296__auto___9825 + (1));
i__8296__auto___9825 = G__9826;
continue;
} else {
}
break;
}

var G__9823 = args9821.length;
switch (G__9823) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9821.length)].join('')));

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
var args9828 = [];
var len__8295__auto___9831 = arguments.length;
var i__8296__auto___9832 = (0);
while(true){
if((i__8296__auto___9832 < len__8295__auto___9831)){
args9828.push((arguments[i__8296__auto___9832]));

var G__9833 = (i__8296__auto___9832 + (1));
i__8296__auto___9832 = G__9833;
continue;
} else {
}
break;
}

var G__9830 = args9828.length;
switch (G__9830) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9828.length)].join('')));

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
var G__9835__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9835 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9836__i = 0, G__9836__a = new Array(arguments.length -  2);
while (G__9836__i < G__9836__a.length) {G__9836__a[G__9836__i] = arguments[G__9836__i + 2]; ++G__9836__i;}
  args = new cljs.core.IndexedSeq(G__9836__a,0,null);
} 
return G__9835__delegate.call(this,elem,_,args);};
G__9835.cljs$lang$maxFixedArity = 2;
G__9835.cljs$lang$applyTo = (function (arglist__9837){
var elem = cljs.core.first(arglist__9837);
arglist__9837 = cljs.core.next(arglist__9837);
var _ = cljs.core.first(arglist__9837);
var args = cljs.core.rest(arglist__9837);
return G__9835__delegate(elem,_,args);
});
G__9835.cljs$core$IFn$_invoke$arity$variadic = G__9835__delegate;
return G__9835;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9838 = cljs.core.seq.call(null,clmap);
var chunk__9839 = null;
var count__9840 = (0);
var i__9841 = (0);
while(true){
if((i__9841 < count__9840)){
var vec__9842 = cljs.core._nth.call(null,chunk__9839,i__9841);
var c = cljs.core.nth.call(null,vec__9842,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9842,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9848 = seq__9838;
var G__9849 = chunk__9839;
var G__9850 = count__9840;
var G__9851 = (i__9841 + (1));
seq__9838 = G__9848;
chunk__9839 = G__9849;
count__9840 = G__9850;
i__9841 = G__9851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9838);
if(temp__4657__auto__){
var seq__9838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9838__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9838__$1);
var G__9852 = cljs.core.chunk_rest.call(null,seq__9838__$1);
var G__9853 = c__8001__auto__;
var G__9854 = cljs.core.count.call(null,c__8001__auto__);
var G__9855 = (0);
seq__9838 = G__9852;
chunk__9839 = G__9853;
count__9840 = G__9854;
i__9841 = G__9855;
continue;
} else {
var vec__9845 = cljs.core.first.call(null,seq__9838__$1);
var c = cljs.core.nth.call(null,vec__9845,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9845,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9856 = cljs.core.next.call(null,seq__9838__$1);
var G__9857 = null;
var G__9858 = (0);
var G__9859 = (0);
seq__9838 = G__9856;
chunk__9839 = G__9857;
count__9840 = G__9858;
i__9841 = G__9859;
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