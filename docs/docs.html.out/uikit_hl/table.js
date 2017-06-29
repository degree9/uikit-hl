// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.table');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('uikit_hl.core');
uikit_hl.table._STAR_caption_STAR_ = null;
uikit_hl.table._STAR_headers_STAR_ = null;
uikit_hl.table._STAR_footers_STAR_ = null;
uikit_hl.table._STAR_divider_STAR_ = null;
uikit_hl.table._STAR_striped_STAR_ = null;
uikit_hl.table._STAR_hover_STAR_ = null;
uikit_hl.table._STAR_small_STAR_ = null;
uikit_hl.table._STAR_justify_STAR_ = null;
uikit_hl.table._STAR_middle_STAR_ = null;
uikit_hl.table._STAR_responsive_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.table.table = (function() { 
var uikit_hl$table$table__delegate = function (args__9094__auto__){
var vec__9707 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9707,(0),null);
var kids = cljs.core.nth.call(null,vec__9707,(1),null);
var caption = new cljs.core.Keyword(null,"caption","caption",-855383902).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_caption_STAR_);
var headers = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_headers_STAR_);
var body = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(attr,kids);
var footers = new cljs.core.Keyword(null,"footers","footers",-893416378).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_footers_STAR_);
var divider = new cljs.core.Keyword(null,"divider","divider",1265972657).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_divider_STAR_);
var striped = new cljs.core.Keyword(null,"striped","striped",-628686784).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_striped_STAR_);
var hover = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_hover_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_small_STAR_);
var justify = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_justify_STAR_);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_middle_STAR_);
var responsive = new cljs.core.Keyword(null,"responsive","responsive",-1606632318).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.table._STAR_responsive_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"footers","footers",-893416378),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"striped","striped",-628686784),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"middle","middle",-701029031));
return hoplon.core.table.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"uk-table","uk-table",447781878),true,new cljs.core.Keyword(null,"uk-table-divider","uk-table-divider",-1212826205),divider,new cljs.core.Keyword(null,"uk-table-striped","uk-table-striped",1959583208),striped,new cljs.core.Keyword(null,"uk-table-hover","uk-table-hover",2130175128),hover,new cljs.core.Keyword(null,"uk-table-small","uk-table-small",-703594530),small,new cljs.core.Keyword(null,"uk-table-justify","uk-table-justify",-1798653466),justify,new cljs.core.Keyword(null,"uk-table-middle","uk-table-middle",-1369626858),middle,new cljs.core.Keyword(null,"uk-table-responsive","uk-table-responsive",-614544783),responsive], null)),hoplon.core.caption.call(null,caption),hoplon.core.thead.call(null,hoplon.core.loop_tpl_STAR_.call(null,headers,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto__){
var vec__9710 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (h){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null);
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto__));
var h = cljs.core.nth.call(null,vec__9710,(0),null);
return hoplon.core.tr.call(null,hoplon.core.loop_tpl_STAR_.call(null,javelin.core.formula.call(null,((function (vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (G__9713){
return G__9713;
});})(vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,h),((function (vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto____$1){
var vec__9714 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (data){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null);
});})(vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto____$1));
var data = cljs.core.nth.call(null,vec__9714,(0),null);
return hoplon.core.th.call(null,data);
});})(vec__9710,h,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
));
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
)),hoplon.core.tbody.call(null,hoplon.core.loop_tpl_STAR_.call(null,body,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto__){
var vec__9717 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (b){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null);
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto__));
var b = cljs.core.nth.call(null,vec__9717,(0),null);
return hoplon.core.tr.call(null,hoplon.core.loop_tpl_STAR_.call(null,javelin.core.formula.call(null,((function (vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (G__9720){
return G__9720;
});})(vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,b),((function (vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto____$1){
var vec__9721 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (data){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null);
});})(vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto____$1));
var data = cljs.core.nth.call(null,vec__9721,(0),null);
return hoplon.core.td.call(null,data);
});})(vec__9717,b,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
));
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
)),hoplon.core.tfoot.call(null,hoplon.core.loop_tpl_STAR_.call(null,footers,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto__){
var vec__9724 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto__));
var f = cljs.core.nth.call(null,vec__9724,(0),null);
return hoplon.core.tr.call(null,hoplon.core.loop_tpl_STAR_.call(null,javelin.core.formula.call(null,((function (vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (G__9727){
return G__9727;
});})(vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,f),((function (vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (item__9124__auto____$1){
var vec__9728 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids){
return (function (data){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null);
});})(vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
).call(null,item__9124__auto____$1));
var data = cljs.core.nth.call(null,vec__9728,(0),null);
return hoplon.core.td.call(null,data);
});})(vec__9724,f,caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
));
});})(caption,headers,body,footers,divider,striped,hover,small,justify,middle,responsive,attr__$1,vec__9707,attr,kids))
)));
};
var uikit_hl$table$table = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9731__i = 0, G__9731__a = new Array(arguments.length -  0);
while (G__9731__i < G__9731__a.length) {G__9731__a[G__9731__i] = arguments[G__9731__i + 0]; ++G__9731__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9731__a,0,null);
} 
return uikit_hl$table$table__delegate.call(this,args__9094__auto__);};
uikit_hl$table$table.cljs$lang$maxFixedArity = 0;
uikit_hl$table$table.cljs$lang$applyTo = (function (arglist__9732){
var args__9094__auto__ = cljs.core.seq(arglist__9732);
return uikit_hl$table$table__delegate(args__9094__auto__);
});
uikit_hl$table$table.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$table$table__delegate;
return uikit_hl$table$table;
})()
;

//# sourceMappingURL=table.js.map