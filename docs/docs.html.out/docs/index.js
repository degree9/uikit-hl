// Compiled by ClojureScript 1.9.542 {}
goog.provide('docs.index');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('uikit_hl.core');
goog.require('uikit_hl.container');
goog.require('uikit_hl.offcanvas');
goog.require('uikit_hl.nav');
goog.require('uikit_hl.navbar');
goog.require('uikit_hl.section');
goog.require('uikit_hl.sticky');
goog.require('docs.components');
docs.index.route = (function (){var r = hoplon.core.route_cell.call(null,"#");
return javelin.core.formula.call(null,((function (r){
return (function (G__10239,G__10238){
return G__10238.call(null,G__10239);
});})(r))
).call(null,r,clojure.string.lower_case);
})();
javelin.core.formula.call(null,(function (G__10240){
return console.log(G__10240);
})).call(null,docs.index.route);
docs.index.components_list = javelin.core.cell.call(null,cljs.core.PersistentVector.fromArray(["Accordion","Alert","Align","Animation","Article","Background","Badge","Base","Breadcrumb","Button","Card","Close","Column","Comment","Container","Countdown","Cover","Description List","Divider","Dotnav","Drop","Dropdown","Flex","Form","Grid","Grid Parallax","Heading","Icon","Iconnav","Inverse","Label","Link","List","Margin","Marker","Modal","Nav","Navbar","Notification","Off-Canvas","Overlay","Padding","Pagination","Parallax","Placeholder","Position","Print","Progress","Scroll","Scrollspy","Search","Section","Slidenav","Sortable","Spinner","Sticky","Subnav","Switcher","Tab","Table","Text","Tile","Toggle","Tooltip","Totop","Transition","Upload","Utility","Visibility","Width"], true));
hoplon.core.html.call(null,hoplon.core.head.call(null,uikit_hl.core.include_css.call(null),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/theme.css")),hoplon.core.body.call(null,uikit_hl.offcanvas.content.call(null,uikit_hl.navbar.container.call(null,new cljs.core.Keyword(null,"uk-sticky","uk-sticky",-1824121267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),(960)], null),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-navbar-container","tm-navbar-container",-2050402459)], null),uikit_hl.container.container.call(null,new cljs.core.Keyword(null,"expand","expand",595248157),true,uikit_hl.navbar.navbar.call(null,uikit_hl.navbar.left.call(null,hoplon.core.a.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),new cljs.core.Keyword(null,"uk-logo","uk-logo",893787764)], null),"UIkit for Hoplon")),uikit_hl.navbar.right.call(null,uikit_hl.navbar.nav.call(null,uikit_hl.navbar.nav_item.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),true,new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/degree9/uikit-hl",new cljs.core.Keyword(null,"title","title",636505583),"View on Github")))))),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-sidebar-left","tm-sidebar-left",-2137347302)], null),hoplon.core.h3.call(null,"Documentation"),uikit_hl.nav.nav.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-nav","tm-nav",-1306610820)], null),uikit_hl.nav.header.call(null,"Getting Started"),uikit_hl.nav.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Introduction",new cljs.core.Keyword(null,"href","href",-793805698),"#"),uikit_hl.nav.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Attribute Providers",new cljs.core.Keyword(null,"href","href",-793805698),"#attributes")),uikit_hl.nav.nav.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-nav","tm-nav",-1306610820)], null),uikit_hl.nav.header.call(null,"Components"),hoplon.core.loop_tpl_STAR_.call(null,docs.index.components_list,(function (item__9124__auto__){
var vec__10241 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,(function (component){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null);
})).call(null,item__9124__auto__));
var component = cljs.core.nth.call(null,vec__10241,(0),null);
return uikit_hl.nav.item.call(null,new cljs.core.Keyword(null,"title","title",636505583),component,new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,component))].join(''));
})))),uikit_hl.section.section.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-main","tm-main",551297074)], null),uikit_hl.container.container.call(null,new cljs.core.Keyword(null,"small","small",2133478704),true,hoplon.core.div.call(null,(function (){var G__10244 = (new cljs.core.Delay((function (){
return docs.components.index.call(null);
}),null));
var G__10245 = (new cljs.core.Delay(((function (G__10244){
return (function (){
return docs.components.attributes.call(null);
});})(G__10244))
,null));
var G__10246 = (new cljs.core.Delay(((function (G__10244,G__10245){
return (function (){
return docs.components.accordion.call(null);
});})(G__10244,G__10245))
,null));
var G__10247 = (new cljs.core.Delay(((function (G__10244,G__10245,G__10246){
return (function (){
return docs.components.alert.call(null);
});})(G__10244,G__10245,G__10246))
,null));
var G__10248 = (new cljs.core.Delay(((function (G__10244,G__10245,G__10246,G__10247){
return (function (){
return docs.components.align.call(null);
});})(G__10244,G__10245,G__10246,G__10247))
,null));
var G__10249 = (new cljs.core.Delay(((function (G__10244,G__10245,G__10246,G__10247,G__10248){
return (function (){
return docs.components.animation.call(null);
});})(G__10244,G__10245,G__10246,G__10247,G__10248))
,null));
var G__10250 = (new cljs.core.Delay(((function (G__10244,G__10245,G__10246,G__10247,G__10248,G__10249){
return (function (){
return docs.components.article.call(null);
});})(G__10244,G__10245,G__10246,G__10247,G__10248,G__10249))
,null));
var G__10251 = (new cljs.core.Delay(((function (G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250){
return (function (){
return null;
});})(G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250))
,null));
var tpl__9157__auto__ = ((function (G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250,G__10251){
return (function (expr__9158__auto__){
return cljs.core.deref.call(null,(function (){var or__7182__auto__ = (function (){var G__10253 = expr__9158__auto__;
switch (G__10253) {
case "#":
return G__10244;

break;
case "#attributes":
return G__10245;

break;
case "#accordion":
return G__10246;

break;
case "#alert":
return G__10247;

break;
case "#align":
return G__10248;

break;
case "#animation":
return G__10249;

break;
case "#article":
return G__10250;

break;
default:
return G__10251;

}
})();
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(G__10244,G__10245,G__10246,G__10247,G__10248,G__10249,G__10250,G__10251))
;
return javelin.core.formula.call(null,tpl__9157__auto__).call(null,docs.index.route);
})()),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tm-sidebar-right","tm-sidebar-right",300717952)], null),hoplon.core.div.call(null,new cljs.core.Keyword(null,"uk-sticky","uk-sticky",-1824121267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(160)], null))))),uikit_hl.offcanvas.offcanvas.call(null))));

//# sourceMappingURL=index.js.map