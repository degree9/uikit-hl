// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.text');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.text._STAR_lead_STAR_ = null;
uikit_hl.text._STAR_meta_STAR_ = null;
uikit_hl.text._STAR_small_STAR_ = null;
uikit_hl.text._STAR_large_STAR_ = null;
uikit_hl.text._STAR_bold_STAR_ = null;
uikit_hl.text._STAR_uppercase_STAR_ = null;
uikit_hl.text._STAR_capitalize_STAR_ = null;
uikit_hl.text._STAR_lowercase_STAR_ = null;
uikit_hl.text._STAR_muted_STAR_ = null;
uikit_hl.text._STAR_primary_STAR_ = null;
uikit_hl.text._STAR_success_STAR_ = null;
uikit_hl.text._STAR_warning_STAR_ = null;
uikit_hl.text._STAR_danger_STAR_ = null;
uikit_hl.text._STAR_background_STAR_ = null;
uikit_hl.text._STAR_left_STAR_ = null;
uikit_hl.text._STAR_right_STAR_ = null;
uikit_hl.text._STAR_center_STAR_ = null;
uikit_hl.text._STAR_justify_STAR_ = null;
uikit_hl.text._STAR_top_STAR_ = null;
uikit_hl.text._STAR_middle_STAR_ = null;
uikit_hl.text._STAR_bottom_STAR_ = null;
uikit_hl.text._STAR_baseline_STAR_ = null;
uikit_hl.text._STAR_truncate_STAR_ = null;
uikit_hl.text._STAR_break_STAR_ = null;
uikit_hl.text._STAR_nowrap_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.text.text = (function() { 
var uikit_hl$text$text__delegate = function (args__9094__auto__){
var vec__10506 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__10506,(0),null);
var kids = cljs.core.nth.call(null,vec__10506,(1),null);
var lead = new cljs.core.Keyword(null,"lead","lead",1214038903).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_lead_STAR_);
var meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_meta_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_large_STAR_);
var bold = new cljs.core.Keyword(null,"bold","bold",-116809535).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_bold_STAR_);
var uppercase = new cljs.core.Keyword(null,"uppercase","uppercase",2080890922).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_uppercase_STAR_);
var capitalize = new cljs.core.Keyword(null,"capitalize","capitalize",511160605).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_capitalize_STAR_);
var lowercase = new cljs.core.Keyword(null,"lowercase","lowercase",41029539).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_lowercase_STAR_);
var muted = new cljs.core.Keyword(null,"muted","muted",1275109029).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_muted_STAR_);
var primary = new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_primary_STAR_);
var success = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_success_STAR_);
var warning = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_warning_STAR_);
var danger = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_danger_STAR_);
var background = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_background_STAR_);
var left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_left_STAR_);
var right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_right_STAR_);
var center = new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_center_STAR_);
var justify = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_justify_STAR_);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_top_STAR_);
var bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_bottom_STAR_);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_middle_STAR_);
var baseline = new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_baseline_STAR_);
var truncate = new cljs.core.Keyword(null,"truncate","truncate",-1327322939).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_truncate_STAR_);
var break$ = new cljs.core.Keyword(null,"break","break",126570225).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_break_STAR_);
var nowrap = new cljs.core.Keyword(null,"nowrap","nowrap",457264988).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.text._STAR_nowrap_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"capitalize","capitalize",511160605),new cljs.core.Keyword(null,"lowercase","lowercase",41029539),new cljs.core.Keyword(null,"muted","muted",1275109029),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"truncate","truncate",-1327322939),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"nowrap","nowrap",457264988));
return hoplon.core.p.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uk-text-baseline","uk-text-baseline",194322528),new cljs.core.Keyword(null,"uk-text-left","uk-text-left",-672353791),new cljs.core.Keyword(null,"uk-text-right","uk-text-right",549048929),new cljs.core.Keyword(null,"uk-text-truncate","uk-text-truncate",-939850458),new cljs.core.Keyword(null,"uk-text-break","uk-text-break",1251477607),new cljs.core.Keyword(null,"uk-text-top","uk-text-top",-1272691352),new cljs.core.Keyword(null,"uk-text-background","uk-text-background",-48373046),new cljs.core.Keyword(null,"uk-text-uppercase","uk-text-uppercase",-1824366580),new cljs.core.Keyword(null,"uk-text-bold","uk-text-bold",1068777550),new cljs.core.Keyword(null,"uk-text-muted","uk-text-muted",-1335723730),new cljs.core.Keyword(null,"uk-text-middle","uk-text-middle",-1869775186),new cljs.core.Keyword(null,"uk-text-lowercase","uk-text-lowercase",533149872),new cljs.core.Keyword(null,"uk-text-danger","uk-text-danger",1042081040),new cljs.core.Keyword(null,"uk-text-justify","uk-text-justify",-1120770159),new cljs.core.Keyword(null,"uk-text-nowrap","uk-text-nowrap",9929235),new cljs.core.Keyword(null,"uk-text-small","uk-text-small",35536723),new cljs.core.Keyword(null,"uk-text-large","uk-text-large",-1394703756),new cljs.core.Keyword(null,"uk-text-primary","uk-text-primary",-13236906),new cljs.core.Keyword(null,"uk-text-center","uk-text-center",-1684510858),new cljs.core.Keyword(null,"uk-text-capitalize","uk-text-capitalize",-2070154249),new cljs.core.Keyword(null,"uk-text-meta","uk-text-meta",-1102187368),new cljs.core.Keyword(null,"uk-text-bottom","uk-text-bottom",1723039928),new cljs.core.Keyword(null,"uk-text-lead","uk-text-lead",-202068294),new cljs.core.Keyword(null,"uk-text-success","uk-text-success",671805307),new cljs.core.Keyword(null,"uk-text-warning","uk-text-warning",38298172)],[baseline,left,right,truncate,break$,top,background,uppercase,bold,muted,middle,lowercase,danger,justify,nowrap,small,large,primary,center,capitalize,meta,bottom,lead,success,warning])),kids);
};
var uikit_hl$text$text = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__10509__i = 0, G__10509__a = new Array(arguments.length -  0);
while (G__10509__i < G__10509__a.length) {G__10509__a[G__10509__i] = arguments[G__10509__i + 0]; ++G__10509__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__10509__a,0,null);
} 
return uikit_hl$text$text__delegate.call(this,args__9094__auto__);};
uikit_hl$text$text.cljs$lang$maxFixedArity = 0;
uikit_hl$text$text.cljs$lang$applyTo = (function (arglist__10510){
var args__9094__auto__ = cljs.core.seq(arglist__10510);
return uikit_hl$text$text__delegate(args__9094__auto__);
});
uikit_hl$text$text.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$text$text__delegate;
return uikit_hl$text$text;
})()
;

//# sourceMappingURL=text.js.map