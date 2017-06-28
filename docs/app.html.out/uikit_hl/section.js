// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.section');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.section._STAR_uk_section_STAR_ = "";
uikit_hl.section._STAR_default_STAR_ = null;
uikit_hl.section._STAR_muted_STAR_ = null;
uikit_hl.section._STAR_primary_STAR_ = null;
uikit_hl.section._STAR_secondary_STAR_ = null;
uikit_hl.section._STAR_media_STAR_ = null;
uikit_hl.section._STAR_xsmall_STAR_ = null;
uikit_hl.section._STAR_small_STAR_ = null;
uikit_hl.section._STAR_large_STAR_ = null;
uikit_hl.section._STAR_xlarge_STAR_ = null;
uikit_hl.section._STAR_overlap_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.section.section = (function() { 
var uikit_hl$section$section__delegate = function (args__9094__auto__){
var vec__9873 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9873,(0),null);
var kids = cljs.core.nth.call(null,vec__9873,(1),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_default_STAR_);
var muted = new cljs.core.Keyword(null,"muted","muted",1275109029).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_muted_STAR_);
var primary = new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_primary_STAR_);
var secondary = new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_secondary_STAR_);
var media = new cljs.core.Keyword(null,"media","media",-1066138403).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_media_STAR_);
var xsmall = new cljs.core.Keyword(null,"xsmall","xsmall",2002280988).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_xsmall_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_large_STAR_);
var xlarge = new cljs.core.Keyword(null,"xlarge","xlarge",-905930014).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_xlarge_STAR_);
var overlap = new cljs.core.Keyword(null,"overlap","overlap",-1673335644).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.section._STAR_overlap_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"muted","muted",1275109029),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"xsmall","xsmall",2002280988),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),new cljs.core.Keyword(null,"overlap","overlap",-1673335644));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uk-section-media","uk-section-media",-1654993919),new cljs.core.Keyword(null,"uk-section-large","uk-section-large",-707333598),new cljs.core.Keyword(null,"uk-section-small","uk-section-small",-1502766811),new cljs.core.Keyword(null,"uk-section-overlap","uk-section-overlap",-382037432),new cljs.core.Keyword(null,"uk-section-xsmall","uk-section-xsmall",-878607608),new cljs.core.Keyword(null,"uk-section-secondary","uk-section-secondary",1221322218),new cljs.core.Keyword(null,"uk-section","uk-section",-626897262),new cljs.core.Keyword(null,"uk-section-xlarge","uk-section-xlarge",-1886320365),new cljs.core.Keyword(null,"uk-section-muted","uk-section-muted",-2082049677),new cljs.core.Keyword(null,"uk-section-primary","uk-section-primary",395814458),new cljs.core.Keyword(null,"uk-section-default","uk-section-default",1008371547)],[media,large,small,overlap,xsmall,secondary,true,xlarge,muted,primary,default$])),kids);
};
var uikit_hl$section$section = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9876__i = 0, G__9876__a = new Array(arguments.length -  0);
while (G__9876__i < G__9876__a.length) {G__9876__a[G__9876__i] = arguments[G__9876__i + 0]; ++G__9876__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9876__a,0,null);
} 
return uikit_hl$section$section__delegate.call(this,args__9094__auto__);};
uikit_hl$section$section.cljs$lang$maxFixedArity = 0;
uikit_hl$section$section.cljs$lang$applyTo = (function (arglist__9877){
var args__9094__auto__ = cljs.core.seq(arglist__9877);
return uikit_hl$section$section__delegate(args__9094__auto__);
});
uikit_hl$section$section.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$section$section__delegate;
return uikit_hl$section$section;
})()
;

//# sourceMappingURL=section.js.map