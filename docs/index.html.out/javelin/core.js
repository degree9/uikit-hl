// Compiled by ClojureScript 1.9.542 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null);
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.call(null,new$,old)){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);

var sinks_8644 = next.sinks;
var n__8105__auto___8645 = sinks_8644.length;
var i_8646 = (0);
while(true){
if((i_8646 < n__8105__auto___8645)){
goog.array.binaryInsert(pri_map,(sinks_8644[i_8646]),javelin.core.cmp_rank);

var G__8647 = (i_8646 + (1));
i_8646 = G__8647;
continue;
} else {
}
break;
}
} else {
}

var G__8648 = pri_map;
pri_map = G__8648;
continue;
} else {
return null;
}
break;
}
});
/**
 * If x is a Cell dereferences x and returns the value, otherwise returns x.
 */
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.call(null,a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8650){if((e8650 instanceof Error)){
var _ = e8650;
return null;
} else {
throw e8650;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8653 = c;
javelin.core.add_sync_BANG_.call(null,G__8653);

return G__8653;
} else {
var G__8654 = c;
javelin.core.propagate_STAR_.call(null,[G__8654]);

return G__8654;
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args8656 = [];
var len__8295__auto___8659 = arguments.length;
var i__8296__auto___8660 = (0);
while(true){
if((i__8296__auto___8660 < len__8295__auto___8659)){
args8656.push((arguments[i__8296__auto___8660]));

var G__8661 = (i__8296__auto___8660 + (1));
i__8296__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var G__8658 = args8656.length;
switch (G__8658) {
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8656.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.call(null,this$,null);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keep_watches_QMARK_){
var srcs = this$.sources;
this$.sources = [];

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;

this$.numwatches = (0);
}

var n__8105__auto__ = srcs.length;
var i = (0);
while(true){
if((i < n__8105__auto__)){
var temp__4657__auto___8663 = javelin.core.cell_QMARK_.call(null,(srcs[i]));
if(cljs.core.truth_(temp__4657__auto___8663)){
var c_8664 = temp__4657__auto___8663;
goog.array.removeIf(c_8664.sinks,((function (i,c_8664,temp__4657__auto___8663,n__8105__auto__,srcs){
return (function (p1__8655_SHARP_){
return cljs.core._EQ_.call(null,p1__8655_SHARP_,this$);
});})(i,c_8664,temp__4657__auto___8663,n__8105__auto__,srcs))
);
} else {
}

var G__8665 = (i + (1));
i = G__8665;
continue;
} else {
return null;
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;

javelin.core.set_formula_BANG__STAR_ = (function javelin$core$set_formula_BANG__STAR_(this$,f,sources,updatefn){
if(cljs.core.truth_(f)){
this$.constant = true;

this$.sources = (function (){var G__8667 = sources;
G__8667.push(f);

return G__8667;
})();

var n__8105__auto___8668 = this$.sources.length;
var i_8669 = (0);
while(true){
if((i_8669 < n__8105__auto___8668)){
var source_8670 = (this$.sources[i_8669]);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8670))){
if(cljs.core.truth_((function (){var and__7170__auto__ = this$.constant;
if(cljs.core.truth_(and__7170__auto__)){
return cljs.core.not.call(null,source_8670.constant);
} else {
return and__7170__auto__;
}
})())){
this$.constant = false;
} else {
}

source_8670.sinks.push(this$);

if((source_8670.rank > this$.rank)){
var q_8671 = [source_8670];
while(true){
var temp__4657__auto___8672 = q_8671.shift();
if(cljs.core.truth_(temp__4657__auto___8672)){
var dep_8673 = temp__4657__auto___8672;
dep_8673.rank = javelin.core.next_rank.call(null);

var G__8674 = q_8671.concat(dep_8673.sinks);
q_8671 = G__8674;
continue;
} else {
}
break;
}
} else {
}
} else {
}

var G__8675 = (i_8669 + (1));
i_8669 = G__8675;
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_.call(null,argv.pop());
var n__8105__auto___8676 = argv.length;
var i_8677 = (0);
while(true){
if((i_8677 < n__8105__auto___8676)){
(argv[i_8677] = javelin.core.deref_STAR_.call(null,(argv[i_8677])));

var G__8678 = (i_8677 + (1));
i_8677 = G__8678;
continue;
} else {
}
break;
}

return this$.state = f__$1.apply(null,argv);
});

this$.update = updatefn;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args8679 = [];
var len__8295__auto___8682 = arguments.length;
var i__8296__auto___8683 = (0);
while(true){
if((i__8296__auto___8683 < len__8295__auto___8682)){
args8679.push((arguments[i__8296__auto___8683]));

var G__8684 = (i__8296__auto___8683 + (1));
i__8296__auto___8683 = G__8684;
continue;
} else {
}
break;
}

var G__8681 = args8679.length;
switch (G__8681) {
case 1:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8679.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.call(null,this$,true);

return javelin.core.set_formula_BANG__STAR_.call(null,this$,f,cljs.core.into_array.call(null,sources),updatefn);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.constant = constant;
this.numwatches = numwatches;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#object [javelin.core.Cell ",cljs.core.pr_str.call(null,self__.state),"]");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update,self__.constant,self__.numwatches));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
var seq__8686 = cljs.core.seq.call(null,self__.watches);
var chunk__8687 = null;
var count__8688 = (0);
var i__8689 = (0);
while(true){
if((i__8689 < count__8688)){
var vec__8690 = cljs.core._nth.call(null,chunk__8687,i__8689);
var key = cljs.core.nth.call(null,vec__8690,(0),null);
var f = cljs.core.nth.call(null,vec__8690,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8696 = seq__8686;
var G__8697 = chunk__8687;
var G__8698 = count__8688;
var G__8699 = (i__8689 + (1));
seq__8686 = G__8696;
chunk__8687 = G__8697;
count__8688 = G__8698;
i__8689 = G__8699;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8686);
if(temp__4657__auto__){
var seq__8686__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686__$1)){
var c__8001__auto__ = cljs.core.chunk_first.call(null,seq__8686__$1);
var G__8700 = cljs.core.chunk_rest.call(null,seq__8686__$1);
var G__8701 = c__8001__auto__;
var G__8702 = cljs.core.count.call(null,c__8001__auto__);
var G__8703 = (0);
seq__8686 = G__8700;
chunk__8687 = G__8701;
count__8688 = G__8702;
i__8689 = G__8703;
continue;
} else {
var vec__8693 = cljs.core.first.call(null,seq__8686__$1);
var key = cljs.core.nth.call(null,vec__8693,(0),null);
var f = cljs.core.nth.call(null,vec__8693,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8704 = cljs.core.next.call(null,seq__8686__$1);
var G__8705 = null;
var G__8706 = (0);
var G__8707 = (0);
seq__8686 = G__8704;
chunk__8687 = G__8705;
count__8688 = G__8706;
i__8689 = G__8707;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"constant","constant",1260922224,null),new cljs.core.Symbol(null,"numwatches","numwatches",2058987374,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7793__auto__,writer__7794__auto__,opt__7795__auto__){
return cljs.core._write.call(null,writer__7794__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__7170__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7170__auto__)){
return c.thunk;
} else {
return and__7170__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__7170__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7170__auto__)){
return c.update;
} else {
return and__7170__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__7170__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7170__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__7170__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__7170__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__7170__auto__)){
return c.constant;
} else {
return and__7170__auto__;
}
})())){
return c;
} else {
return null;
}
});
/**
 * Converts c to an input cell in place, setting its contents to x. It's okay
 *   if c was already an input cell. Changes will be propagated to any cells that
 *   depend on c.
 */
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
/**
 * Returns a function that returns a formula cell with f as its formula, and
 *   if updatefn is provided the returned cell is a lens.
 * 
 *   See also: the javelin.core/cell= macro.
 * 
 *    (def x (cell 100))
 *    (def y (cell 200))
 * 
 *    (def z1 (cell= (+ x y)))
 *    (def z2 ((formula +) x y))
 * 
 *   The formula cells z1 and z2 are equivalent.
 */
javelin.core.formula = (function javelin$core$formula(var_args){
var args8708 = [];
var len__8295__auto___8711 = arguments.length;
var i__8296__auto___8712 = (0);
while(true){
if((i__8296__auto___8712 < len__8295__auto___8711)){
args8708.push((arguments[i__8296__auto___8712]));

var G__8713 = (i__8296__auto___8712 + (1));
i__8296__auto___8712 = G__8713;
continue;
} else {
}
break;
}

var G__8710 = args8708.length;
switch (G__8710) {
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args8708.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.call(null,f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
return javelin.core.set_formula_BANG__STAR_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
return javelin.core.formula.call(null,cljs.core.identity,f).call(null,c);
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
var args8715 = [];
var len__8295__auto___8723 = arguments.length;
var i__8296__auto___8724 = (0);
while(true){
if((i__8296__auto___8724 < len__8295__auto___8723)){
args8715.push((arguments[i__8296__auto___8724]));

var G__8725 = (i__8296__auto___8724 + (1));
i__8296__auto___8724 = G__8725;
continue;
} else {
}
break;
}

var G__8719 = args8715.length;
switch (G__8719) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__8314__auto__ = (new cljs.core.IndexedSeq(args8715.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8720){
var map__8721 = p__8720;
var map__8721__$1 = ((((!((map__8721 == null)))?((((map__8721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8721):map__8721);
var meta = cljs.core.get.call(null,map__8721__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8716){
var G__8717 = cljs.core.first.call(null,seq8716);
var seq8716__$1 = cljs.core.next.call(null,seq8716);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8717,seq8716__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

/**
 * This function is deprecated, please use #'javelin.core/formula instead.
 */
javelin.core.lift = javelin.core.formula;
/**
 * Calls the thunk with no arguments within a transaction. Propagation of
 *   updates to formula cells is deferred until the transaction is complete.
 *   Input cells *will* update during the transaction. Transactions may be
 *   nested.
 * 
 *   See also: the javelin.core/dosync macro.
 */
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
var _STAR_tx_STAR_8729 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = [];

try{thunk.call(null);

var tx = javelin.core._STAR_tx_STAR_;
var _STAR_tx_STAR_8730 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8730;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8729;
}}
});
/**
 * Given a number of cells, returns a formula cell whose value is a seq of
 *   values from cells that changed in the last update. Note that multiple cells
 *   may update atomically, which is why the formula's value is a seq.
 * 
 *   Consider:
 * 
 *    (def a (cell {:x 1 :y 2}))
 *    (def x (cell= (:x a)))
 *    (def y (cell= (:y a)))
 *    (def z (alts! x y))
 * 
 *   then,
 * 
 *    (deref z) ;=> (1 2)
 * 
 *    (swap! a assoc :x 42)
 *    (deref z) ;=> (42)
 * 
 *    (reset! a {:x 10 :y 20})
 *    (deref z) ;=> (10 20)
 *   
 */
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__8302__auto__ = [];
var len__8295__auto___8737 = arguments.length;
var i__8296__auto___8738 = (0);
while(true){
if((i__8296__auto___8738 < len__8295__auto___8737)){
args__8302__auto__.push((arguments[i__8296__auto___8738]));

var G__8739 = (i__8296__auto___8738 + (1));
i__8296__auto___8738 = G__8739;
continue;
} else {
}
break;
}

var argseq__8303__auto__ = ((((0) < args__8302__auto__.length))?(new cljs.core.IndexedSeq(args__8302__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8303__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8731_SHARP_,p2__8732_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8731_SHARP_,p2__8732_SHARP_),p2__8732_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8734_SHARP_,p2__8733_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8734_SHARP_,p2__8733_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8740__delegate = function (rest__8735_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8735_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8735_SHARP_);

return news;
};
var G__8740 = function (var_args){
var rest__8735_SHARP_ = null;
if (arguments.length > 0) {
var G__8741__i = 0, G__8741__a = new Array(arguments.length -  0);
while (G__8741__i < G__8741__a.length) {G__8741__a[G__8741__i] = arguments[G__8741__i + 0]; ++G__8741__i;}
  rest__8735_SHARP_ = new cljs.core.IndexedSeq(G__8741__a,0,null);
} 
return G__8740__delegate.call(this,rest__8735_SHARP_);};
G__8740.cljs$lang$maxFixedArity = 0;
G__8740.cljs$lang$applyTo = (function (arglist__8742){
var rest__8735_SHARP_ = cljs.core.seq(arglist__8742);
return G__8740__delegate(rest__8735_SHARP_);
});
G__8740.cljs$core$IFn$_invoke$arity$variadic = G__8740__delegate;
return G__8740;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8736){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8736));
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8743_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8743_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   calls f for side effects once for each item in c, passing one argument: a
 *   formula cell equivalent to (cell= (nth c i)) for the ith item in c. Whenever
 *   c grows beyond its previous maximum size f is called as above for each item
 *   beyond the maximum size. Nothing happens when c shrinks.
 * 
 *   See also: the javelin.core/cell-doseq macro.
 * 
 *   Consider:
 * 
 *    (def things (cell [:a :b :c]))
 *    (cell-doseq*
 *      things
 *      (fn doit [x]
 *        (prn :creating @x)
 *        (add-watch x nil #(prn :updating %3 %4))))
 * 
 *    ;; the following is printed:
 * 
 *    :creating :a
 *    :creating :b
 *    :creating :c
 * 
 *   Shrink things by removing the last item:
 * 
 *    (swap! things pop)
 * 
 *    ;; the following is printed (because the 3rd item in things is now nil,
 *    ;; since things only contains 2 items) -- note that the doit function is
 *    ;; not called (or we would see a :creating message):
 * 
 *    :updating :c nil
 * 
 *   Grow things such that it is one item larger than it ever was:
 * 
 *    (swap! things into [:u :v])
 * 
 *    ;; the following is printed (because things now has 4 items, so the 3rd
 *    ;; item is now :u and the max size increases by one with the new item :v):
 * 
 *    :updating nil :u
 *    :creating :v
 * 
 *   A weird imagination is most useful to gain full advantage of all the features.
 */
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(c,f){
var pool_size = cljs.core.atom.call(null,(0));
return javelin.core.formula.call(null,((function (pool_size){
return (function (items){
var cnt = cljs.core.count.call(null,items);
if((cljs.core.deref.call(null,pool_size) < cnt)){
var n__8105__auto___8744 = (cnt - cljs.core.deref.call(null,pool_size));
var i_8745 = (0);
while(true){
if((i_8745 < n__8105__auto___8744)){
f.call(null,javelin.core.formula.call(null,javelin.core.safe_nth).call(null,c,(i_8745 + cljs.core.deref.call(null,pool_size))));

var G__8746 = (i_8745 + (1));
i_8745 = G__8746;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_.call(null,pool_size,cnt);
} else {
return null;
}
});})(pool_size))
).call(null,c);
});

//# sourceMappingURL=core.js.map