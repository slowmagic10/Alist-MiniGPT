import{a as _,b as y,aR as B,b4 as u,k as v,cA as p,e,ab as h,B as o,a6 as T,cB as F,cC as R,cD as b,E as m,cE as f,cF as x,cG as s,b5 as g,n as $,a3 as D,c1 as P,aA as A,aB as E,ad as H}from"./index.a8009550.js";import{n as I}from"./index.1a912499.js";import{D as L}from"./DeletePopover.86223cb5.js";import{W as M}from"./Wether.e7c691e2.js";const W=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(P,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},z=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:A,children:(a,d)=>e(E,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(H.can(n.user,d()))}})}})})}})},j=()=>{const n=_();I("manage.sidemenu.users");const{to:t}=y(),[i,a]=B(()=>u.get("/admin/user/list")),[d,k]=v([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[C,S]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(D,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(F,{highlightOnHover:!0,dense:!0,get children(){return[e(R,{get children(){return e(b,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(f,{get children(){return n(`users.${r}`)}})}),e(f,{get children(){return n("global.operations")}})]}})}}),e(x,{get children(){return e(m,{get each(){return d()},children:r=>e(b,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(W,{get role(){return r.role}})}}),e(s,{get children(){return e(z,{user:r})}}),e(s,{get children(){return e(M,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(L,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{j as default};
