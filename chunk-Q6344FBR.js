import{a as p,b as g}from"./chunk-5SCSDTMC.js";import{Z as i,aa as l,ga as c,vb as s,xc as a}from"./chunk-OAEZ3XNU.js";var n={production:!1,API_AUTH:"https://ecommerce2024-backend-production.up.railway.app/api"};var A=(()=>{class o{constructor(){this.userLoggedSignal=s({_id:"",email:"",emailVerified:!1,img:"",name:"",role:[]}),this.userLoggedComputed=a(()=>this.userLoggedSignal()),this.logoutSignal=s(!1),this.logoutComputed=a(()=>this.logoutSignal()),this.http=c(g)}loginUser(t){let e=new p({"Content-Type":"application/json"}),r={email:t.email,password:t.password};return this.http.post(`${n.API_AUTH}/auth/login`,r,{headers:e}).pipe(i(m=>{localStorage.setItem("token",m.token)}))}loginGoogle(t){return this.http.post(`${n.API_AUTH}/auth/login-google`,{token:t}).pipe(i(e=>{localStorage.setItem("token",e.token)}))}reggisterUser(t){let e=new p({"Content-Type":"application/json"});return this.http.post(`${n.API_AUTH}/auth/register`,t,{headers:e}).pipe(i(r=>{localStorage.setItem("token",r.token)}))}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{A as a};
