// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.goog');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.style');
goog.require('hoplon.core');
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function (elem,_,v){
return goog.dom.forms.setValue(elem,v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var seq__11182 = cljs.core.seq.call(null,hoplon.core.normalize_class.call(null,kvs));
var chunk__11183 = null;
var count__11184 = (0);
var i__11185 = (0);
while(true){
if((i__11185 < count__11184)){
var vec__11186 = cljs.core._nth.call(null,chunk__11183,i__11185);
var c = cljs.core.nth.call(null,vec__11186,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11186,(1),null);
goog.dom.classlist.enable(elem,cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11192 = seq__11182;
var G__11193 = chunk__11183;
var G__11194 = count__11184;
var G__11195 = (i__11185 + (1));
seq__11182 = G__11192;
chunk__11183 = G__11193;
count__11184 = G__11194;
i__11185 = G__11195;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11182);
if(temp__4657__auto__){
var seq__11182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11182__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__11182__$1);
var G__11196 = cljs.core.chunk_rest.call(null,seq__11182__$1);
var G__11197 = c__8001__auto__;
var G__11198 = cljs.core.count.call(null,c__8001__auto__);
var G__11199 = (0);
seq__11182 = G__11196;
chunk__11183 = G__11197;
count__11184 = G__11198;
i__11185 = G__11199;
continue;
} else {
var vec__11189 = cljs.core.first.call(null,seq__11182__$1);
var c = cljs.core.nth.call(null,vec__11189,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__11189,(1),null);
goog.dom.classlist.enable(elem,cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__11200 = cljs.core.next.call(null,seq__11182__$1);
var G__11201 = null;
var G__11202 = (0);
var G__11203 = (0);
seq__11182 = G__11200;
chunk__11183 = G__11201;
count__11184 = G__11202;
i__11185 = G__11203;
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
return goog.style.setElementShown(elem,cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
return cljs.core.comp.call(null,(cljs.core.truth_(v)?goog.fx.dom.swipe(elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),goog.style.getSize(elem)):goog.fx.dom.swipe(elem,goog.style.getSize(elem),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))),goog.style.setElementShown(elem,cljs.core.boolean$.call(null,v)));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return goog.fx.dom.fadeInAndShow(elem,(200));
} else {
return goog.fx.dom.fadeOutAndHide(elem,(200));
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return goog.events.dispatchEvent(elem,goog.events.EventType.FOCUS);
} else {
return goog.events.dispatchEvent(elem,goog.events.EventType.FOCUSOUT);
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return goog.events.dispatchEvent(elem,goog.events.EventType.SELECT);
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
return goog.dom.setTextContent(elem,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return cljs.core.comp.call(null,goog.dom.removeChildren(elem),goog.dom.appendChild(elem,goog.dom.safeHtmlToNode(v)));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
return goog.style.scrollContinerIntoView(elem,goog.dom.getDocument());
} else {
return null;
}
}));

//# sourceMappingURL=goog.js.map