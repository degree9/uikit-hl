// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9847 = [];
var len__8295__auto___9866 = arguments.length;
var i__8296__auto___9867 = (0);
while(true){
if((i__8296__auto___9867 < len__8295__auto___9866)){
args9847.push((arguments[i__8296__auto___9867]));

var G__9868 = (i__8296__auto___9867 + (1));
i__8296__auto___9867 = G__9868;
continue;
} else {
}
break;
}

var G__9853 = args9847.length;
switch (G__9853) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9847.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9854 = cljs.core.seq.call(null,kvs);
var chunk__9856 = null;
var count__9857 = (0);
var i__9858 = (0);
while(true){
if((i__9858 < count__9857)){
var vec__9860 = cljs.core._nth.call(null,chunk__9856,i__9858);
var k = cljs.core.nth.call(null,vec__9860,(0),null);
var v = cljs.core.nth.call(null,vec__9860,(1),null);
var k_9870__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9870__$1);
} else {
e.attr(k_9870__$1,((cljs.core._EQ_.call(null,true,v))?k_9870__$1:v));
}

var G__9871 = seq__9854;
var G__9872 = chunk__9856;
var G__9873 = count__9857;
var G__9874 = (i__9858 + (1));
seq__9854 = G__9871;
chunk__9856 = G__9872;
count__9857 = G__9873;
i__9858 = G__9874;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9854);
if(temp__4657__auto__){
var seq__9854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9854__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9854__$1);
var G__9875 = cljs.core.chunk_rest.call(null,seq__9854__$1);
var G__9876 = c__8001__auto__;
var G__9877 = cljs.core.count.call(null,c__8001__auto__);
var G__9878 = (0);
seq__9854 = G__9875;
chunk__9856 = G__9876;
count__9857 = G__9877;
i__9858 = G__9878;
continue;
} else {
var vec__9863 = cljs.core.first.call(null,seq__9854__$1);
var k = cljs.core.nth.call(null,vec__9863,(0),null);
var v = cljs.core.nth.call(null,vec__9863,(1),null);
var k_9879__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_9879__$1);
} else {
e.attr(k_9879__$1,((cljs.core._EQ_.call(null,true,v))?k_9879__$1:v));
}

var G__9880 = cljs.core.next.call(null,seq__9854__$1);
var G__9881 = null;
var G__9882 = (0);
var G__9883 = (0);
seq__9854 = G__9880;
chunk__9856 = G__9881;
count__9857 = G__9882;
i__9858 = G__9883;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9848){
var G__9849 = cljs.core.first.call(null,seq9848);
var seq9848__$1 = cljs.core.next.call(null,seq9848);
var G__9850 = cljs.core.first.call(null,seq9848__$1);
var seq9848__$2 = cljs.core.next.call(null,seq9848__$1);
var G__9851 = cljs.core.first.call(null,seq9848__$2);
var seq9848__$3 = cljs.core.next.call(null,seq9848__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9849,G__9850,G__9851,seq9848__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9884 = [];
var len__8295__auto___9901 = arguments.length;
var i__8296__auto___9902 = (0);
while(true){
if((i__8296__auto___9902 < len__8295__auto___9901)){
args9884.push((arguments[i__8296__auto___9902]));

var G__9903 = (i__8296__auto___9902 + (1));
i__8296__auto___9902 = G__9903;
continue;
} else {
}
break;
}

var G__9890 = args9884.length;
switch (G__9890) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args9884.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8314__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9891 = cljs.core.seq.call(null,kvs);
var chunk__9892 = null;
var count__9893 = (0);
var i__9894 = (0);
while(true){
if((i__9894 < count__9893)){
var vec__9895 = cljs.core._nth.call(null,chunk__9892,i__9894);
var k = cljs.core.nth.call(null,vec__9895,(0),null);
var v = cljs.core.nth.call(null,vec__9895,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9905 = seq__9891;
var G__9906 = chunk__9892;
var G__9907 = count__9893;
var G__9908 = (i__9894 + (1));
seq__9891 = G__9905;
chunk__9892 = G__9906;
count__9893 = G__9907;
i__9894 = G__9908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9891);
if(temp__4657__auto__){
var seq__9891__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9891__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9891__$1);
var G__9909 = cljs.core.chunk_rest.call(null,seq__9891__$1);
var G__9910 = c__8001__auto__;
var G__9911 = cljs.core.count.call(null,c__8001__auto__);
var G__9912 = (0);
seq__9891 = G__9909;
chunk__9892 = G__9910;
count__9893 = G__9911;
i__9894 = G__9912;
continue;
} else {
var vec__9898 = cljs.core.first.call(null,seq__9891__$1);
var k = cljs.core.nth.call(null,vec__9898,(0),null);
var v = cljs.core.nth.call(null,vec__9898,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__9913 = cljs.core.next.call(null,seq__9891__$1);
var G__9914 = null;
var G__9915 = (0);
var G__9916 = (0);
seq__9891 = G__9913;
chunk__9892 = G__9914;
count__9893 = G__9915;
i__9894 = G__9916;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9885){
var G__9886 = cljs.core.first.call(null,seq9885);
var seq9885__$1 = cljs.core.next.call(null,seq9885);
var G__9887 = cljs.core.first.call(null,seq9885__$1);
var seq9885__$2 = cljs.core.next.call(null,seq9885__$1);
var G__9888 = cljs.core.first.call(null,seq9885__$2);
var seq9885__$3 = cljs.core.next.call(null,seq9885__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9886,G__9887,G__9888,seq9885__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9917 = [];
var len__8295__auto___9920 = arguments.length;
var i__8296__auto___9921 = (0);
while(true){
if((i__8296__auto___9921 < len__8295__auto___9920)){
args9917.push((arguments[i__8296__auto___9921]));

var G__9922 = (i__8296__auto___9921 + (1));
i__8296__auto___9921 = G__9922;
continue;
} else {
}
break;
}

var G__9919 = args9917.length;
switch (G__9919) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9917.length)].join('')));

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
var args9924 = [];
var len__8295__auto___9927 = arguments.length;
var i__8296__auto___9928 = (0);
while(true){
if((i__8296__auto___9928 < len__8295__auto___9927)){
args9924.push((arguments[i__8296__auto___9928]));

var G__9929 = (i__8296__auto___9928 + (1));
i__8296__auto___9928 = G__9929;
continue;
} else {
}
break;
}

var G__9926 = args9924.length;
switch (G__9926) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9924.length)].join('')));

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
var G__9931__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9931 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9932__i = 0, G__9932__a = new Array(arguments.length -  2);
while (G__9932__i < G__9932__a.length) {G__9932__a[G__9932__i] = arguments[G__9932__i + 2]; ++G__9932__i;}
  args = new cljs.core.IndexedSeq(G__9932__a,0,null);
} 
return G__9931__delegate.call(this,elem,_,args);};
G__9931.cljs$lang$maxFixedArity = 2;
G__9931.cljs$lang$applyTo = (function (arglist__9933){
var elem = cljs.core.first(arglist__9933);
arglist__9933 = cljs.core.next(arglist__9933);
var _ = cljs.core.first(arglist__9933);
var args = cljs.core.rest(arglist__9933);
return G__9931__delegate(elem,_,args);
});
G__9931.cljs$core$IFn$_invoke$arity$variadic = G__9931__delegate;
return G__9931;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9934 = cljs.core.seq.call(null,clmap);
var chunk__9935 = null;
var count__9936 = (0);
var i__9937 = (0);
while(true){
if((i__9937 < count__9936)){
var vec__9938 = cljs.core._nth.call(null,chunk__9935,i__9937);
var c = cljs.core.nth.call(null,vec__9938,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9938,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9944 = seq__9934;
var G__9945 = chunk__9935;
var G__9946 = count__9936;
var G__9947 = (i__9937 + (1));
seq__9934 = G__9944;
chunk__9935 = G__9945;
count__9936 = G__9946;
i__9937 = G__9947;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9934);
if(temp__4657__auto__){
var seq__9934__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9934__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__9934__$1);
var G__9948 = cljs.core.chunk_rest.call(null,seq__9934__$1);
var G__9949 = c__8001__auto__;
var G__9950 = cljs.core.count.call(null,c__8001__auto__);
var G__9951 = (0);
seq__9934 = G__9948;
chunk__9935 = G__9949;
count__9936 = G__9950;
i__9937 = G__9951;
continue;
} else {
var vec__9941 = cljs.core.first.call(null,seq__9934__$1);
var c = cljs.core.nth.call(null,vec__9941,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9941,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9952 = cljs.core.next.call(null,seq__9934__$1);
var G__9953 = null;
var G__9954 = (0);
var G__9955 = (0);
seq__9934 = G__9952;
chunk__9935 = G__9953;
count__9936 = G__9954;
i__9937 = G__9955;
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