import{a as lt,b as I,c as dt}from"./chunk-B2ZYCDO3.js";import"./chunk-2YCC375J.js";import{a as J,b,c as K,d as Q,e as tt}from"./chunk-PD6XVARN.js";import{C as st,D as rt,c as Z,d as W,e as Y,f as X,g as q,m as ot,s as it,u as nt,z as at}from"./chunk-U4PCL6EG.js";import{A as n,B as et,C as i,d as x,n as V,v as r,w as l,z as e}from"./chunk-PD7WX2AY.js";import{Aa as P,Ab as N,Ja as L,Jb as u,Kb as C,La as F,Lb as v,Sb as B,_,aa as h,ab as k,cb as D,da as $,dc as j,fa as w,ga as p,gb as z,ja as M,jb as E,jc as H,ka as R,ub as y,wc as U,xa as T,yc as G}from"./chunk-HXQ2DSG7.js";var mt=(a,o)=>{let t=p(b);return localStorage.getItem("token")?!0:(t.navigateByUrl("/home"),!1)};var ct=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-L2HACWPL.js").then(a=>a.HomeComponent)},{path:"product/:id",loadComponent:()=>import("./chunk-UJKYR7ZS.js").then(a=>a.ProductComponent)},{path:"cart",loadComponent:()=>import("./chunk-BX7K2DLO.js").then(a=>a.CartComponent)},{path:"profile",canActivate:[mt],loadComponent:()=>import("./chunk-43OYQI33.js").then(a=>a.ProfileComponent)},{path:"register",loadComponent:()=>import("./chunk-MRSLUQNW.js").then(a=>a.RegisterComponent)},{path:"**",redirectTo:"/home"}];var Bt="@",jt=(()=>{class a{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=p(T,{optional:!0});loadingSchedulerFn=p(Ht,{optional:!0});_engine;constructor(t,s,d,f,g){this.doc=t,this.delegate=s,this.zone=d,this.animationType=f,this.moduleImpl=g}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-GXVHY75V.js").then(d=>d),s;return this.loadingSchedulerFn?s=this.loadingSchedulerFn(t):s=t(),s.catch(d=>{throw new _(5300,!1)}).then(({\u0275createEngine:d,\u0275AnimationRendererFactory:f})=>{this._engine=d(this.animationType,this.doc);let g=new f(this.delegate,this._engine,this.zone);return this.delegate=g,g})}createRenderer(t,s){let d=this.delegate.createRenderer(t,s);if(d.\u0275type===0)return d;typeof d.throwOnSyntheticProps=="boolean"&&(d.throwOnSyntheticProps=!1);let f=new O(d);return s?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Nt=g.createRenderer(t,s);f.use(Nt),this.scheduler?.notify(11)}).catch(g=>{f.use(d)}),f}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(s){D()};static \u0275prov=h({token:a,factory:a.\u0275fac})}return a})(),O=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,s,d){this.delegate.insertBefore(o,t,s,d)}removeChild(o,t,s){this.delegate.removeChild(o,t,s)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,s,d){this.delegate.setAttribute(o,t,s,d)}removeAttribute(o,t,s){this.delegate.removeAttribute(o,t,s)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,s,d){this.delegate.setStyle(o,t,s,d)}removeStyle(o,t,s){this.delegate.removeStyle(o,t,s)}setProperty(o,t,s){this.shouldReplay(t)&&this.replay.push(d=>d.setProperty(o,t,s)),this.delegate.setProperty(o,t,s)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,s){return this.shouldReplay(t)&&this.replay.push(d=>d.listen(o,t,s)),this.delegate.listen(o,t,s)}shouldReplay(o){return this.replay!==null&&o.startsWith(Bt)}},Ht=new $("");function A(a="animations"){return F("NgAsyncAnimations"),M([{provide:z,useFactory:(o,t,s)=>new jt(o,t,s,a),deps:[x,X,P]},{provide:L,useValue:a==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pt=(()=>{class a{constructor(t){this._document=t,this.appInitializer()}show(){let t=this._document.body.getElementsByClassName("splashScreen")[0];t.classList.add("splashShow"),t.classList.remove("splashHide"),document.body.classList.add("no-scrollbar")}hide(){let t=this._document.body.getElementsByClassName("splashScreen")[0];t.classList.add("splashHide"),t.classList.remove("splashShow"),document.body.classList.remove("no-scrollbar")}appInitializer(){this.show(),setTimeout(()=>{this.hide()},1500)}static{this.\u0275fac=function(s){return new(s||a)(w(x))}}static{this.\u0275prov=h({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var ft={providers:[Q(ct),Z(Y(),W([])),R(()=>p(pt)),A(),A()]};var gt=(()=>{class a{constructor(){this.collapsedSidenavSignal=y(!1),this.collapsedSidenavComputed=U(()=>this.collapsedSidenavSignal())}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275prov=h({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var m=(()=>{class a{static{this.standard="cubic-bezier(0.4, 0.0, 0.2, 1)"}static{this.deceleration="cubic-bezier(0.0, 0.0, 0.2, 1)"}static{this.acceleration="cubic-bezier(0.4, 0.0, 1, 1)"}static{this.sharp="cubic-bezier(0.4, 0.0, 0.6, 1)"}}return a})(),c=(()=>{class a{static{this.complex="375ms"}static{this.entering="225ms"}static{this.exiting="195ms"}}return a})();var ht=r("expandCollapse",[n("void, collapsed",e({height:"0"})),n("*, expanded",e("*")),i("void <=> false, collapsed <=> false, expanded <=> false",[]),i("void <=> *, collapsed <=> expanded",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]);var ut=r("fadeIn",[n("void",e({opacity:0})),n("*",e({opacity:1})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),vt=r("fadeInTop",[n("void",e({opacity:0,transform:"translate3d(0, -100%, 0)"})),n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),yt=r("fadeInBottom",[n("void",e({opacity:0,transform:"translate3d(0, 100%, 0)"})),n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),Ct=r("fadeInLeft",[n("void",e({opacity:0,transform:"translate3d(-100%, 0, 0)"})),n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),xt=r("fadeInRight",[n("void",e({opacity:0,transform:"translate3d(100%, 0, 0)"})),n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),bt=r("fadeOut",[n("*",e({opacity:1})),n("void",e({opacity:0})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),It=r("fadeOutTop",[n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),n("void",e({opacity:0,transform:"translate3d(0, -100%, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),Ot=r("fadeOutBottom",[n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),n("void",e({opacity:0,transform:"translate3d(0, 100%, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),St=r("fadeOutLeft",[n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),n("void",e({opacity:0,transform:"translate3d(-100%, 0, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),At=r("fadeOutRight",[n("*",e({opacity:1,transform:"translate3d(0, 0, 0)"})),n("void",e({opacity:0,transform:"translate3d(100%, 0, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]);var _t=r("shake",[i("void => false",[]),i("void => *, * => true",[l("{{timings}}",et([e({transform:"translate3d(0, 0, 0)",offset:0}),e({transform:"translate3d(-10px, 0, 0)",offset:.1}),e({transform:"translate3d(10px, 0, 0)",offset:.2}),e({transform:"translate3d(-10px, 0, 0)",offset:.3}),e({transform:"translate3d(10px, 0, 0)",offset:.4}),e({transform:"translate3d(-10px, 0, 0)",offset:.5}),e({transform:"translate3d(10px, 0, 0)",offset:.6}),e({transform:"translate3d(-10px, 0, 0)",offset:.7}),e({transform:"translate3d(10px, 0, 0)",offset:.8}),e({transform:"translate3d(-10px, 0, 0)",offset:.9}),e({transform:"translate3d(0, 0, 0)",offset:1})]))],{params:{timings:"0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)"}})]);var $t=r("slideInTop",[n("void",e({transform:"translate3d(0, -100%, 0)"})),n("*",e({transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),wt=r("slideInBottom",[n("void",e({transform:"translate3d(0, 100%, 0)"})),n("*",e({transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),Mt=r("slideInLeft",[n("void",e({transform:"translate3d(-100%, 0, 0)"})),n("*",e({transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),Rt=r("slideInRight",[n("void",e({transform:"translate3d(100%, 0, 0)"})),n("*",e({transform:"translate3d(0, 0, 0)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),Tt=r("slideOutTop",[n("*",e({transform:"translate3d(0, 0, 0)"})),n("void",e({transform:"translate3d(0, -100%, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),Pt=r("slideOutBottom",[n("*",e({transform:"translate3d(0, 0, 0)"})),n("void",e({transform:"translate3d(0, 100%, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),Lt=r("slideOutLeft",[n("*",e({transform:"translate3d(0, 0, 0)"})),n("void",e({transform:"translate3d(-100%, 0, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]),Ft=r("slideOutRight",[n("*",e({transform:"translate3d(0, 0, 0)"})),n("void",e({transform:"translate3d(100%, 0, 0)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]);var kt=r("zoomIn",[n("void",e({opacity:0,transform:"scale(0.5)"})),n("*",e({opacity:1,transform:"scale(1)"})),i("void => false",[]),i("void => *",l("{{timings}}"),{params:{timings:`${c.entering} ${m.deceleration}`}})]),Dt=r("zoomOut",[n("*",e({opacity:1,transform:"scale(1)"})),n("void",e({opacity:0,transform:"scale(0.5)"})),i("false => void",[]),i("* => void",l("{{timings}}"),{params:{timings:`${c.exiting} ${m.acceleration}`}})]);var zt=[ht,ut,vt,yt,Ct,xt,bt,It,Ot,St,At,_t,$t,wt,Mt,Rt,Tt,Pt,Lt,Ft,kt,Dt];var Et=(()=>{class a{constructor(){this.title="Zona Tecno",this.switchTheme=new ot(!1),this.darkMode=y(!1),this.collapsed=y(!1),this.withSidenav="143px",this.withSidenavContent="0px",this.deviceType=p(lt),this.sharedSignalSvc=p(gt),this._matDialog=p(at),this._router=p(b),this._helperSvc=p(I),this.deviceTypeChange=G(()=>{this.collapsed()?(this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed()),this.withSidenav="143px"):(this.sharedSignalSvc.collapsedSidenavSignal.set(this.collapsed()),this.withSidenav="0px")})}clickOnContent(){this.collapsed()&&this.collapsed.set(!this.collapsed())}openLogin(){localStorage.getItem("token")?this._router.navigate(["/profile"]):(this._matDialog.open(dt,{panelClass:"login-dialog",data:{name:"Login"}}),this._helperSvc.fixErrorFocus())}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275cmp=E({type:a,selectors:[["app-root"]],features:[H([I])],decls:13,vars:1,consts:[[1,"header","mat-elevation-z3"],["src","assets/logo/logo.webp","alt","",1,"imgLogo"],[1,"logoAndTitle"],[3,"routerLink"],[1,"buttons"],["mat-icon-button",""],["src","assets/icons/cart.svg","alt","cart-icon"],["mat-icon-button","",3,"click"],["src","assets/icons/user.svg","alt","user-icon"],["src","assets/icons/search.svg","alt","user-icon"]],template:function(s,d){s&1&&(u(0,"mat-toolbar",0),v(1,"img",1),u(2,"div",2)(3,"h1",3),j(4," Zona Tecno "),C()(),u(5,"div",4)(6,"button",5),v(7,"img",6),C(),u(8,"button",7),B("click",function(){return d.openLogin()}),v(9,"img",8),C(),u(10,"button",5),v(11,"img",9),C()()(),v(12,"router-outlet")),s&2&&(k(3),N("routerLink","/home"))},dependencies:[J,rt,nt,st,it,V,tt,K],styles:['@charset "UTF-8";mat-toolbar[_ngcontent-%COMP%]{position:relative;z-index:5;display:flex;justify-content:space-between}mat-toolbar[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:18px}.logoAndTitle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:absolute;right:40%}.logoAndTitle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:auto}mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}.sideNav[_ngcontent-%COMP%]{box-shadow:5px 0 5px -1px #00000070;-webkit-box-shadow:5px 0px 5px -1px rgba(0,0,0,.44);-moz-box-shadow:5px 0px 5px -1px rgba(0,0,0,.44);border-radius:0}mat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.sidenavOpen[_ngcontent-%COMP%]:before{content:"";position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#00000080;z-index:999}.header[_ngcontent-%COMP%]{background-color:#000;color:#fff}.buttons[_ngcontent-%COMP%]{position:absolute;right:2%}.imgLogo[_ngcontent-%COMP%]{position:absolute;width:126px;left:-24px}'],data:{animation:zt}})}}return a})();q(Et,ft).catch(a=>console.error(a));
