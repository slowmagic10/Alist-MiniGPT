import{cz as $,e as t,ab as l,K as k,r as h,aJ as b,cR as m,S as f,aG as w,b_ as j,as as p,ai as y,ar as A,b0 as a,c2 as S,ck as C,aI as v,a as z,k as d,w as I,cS as O,cT as P,cU as M,D as u,E,a0 as L,a3 as T}from"./index.a8009550.js";import{b as B}from"./Folder.471ac552.js";import{u as D}from"./index.ff27852b.js";import{p as _}from"./index.e24abda6.js";import{g as F,O as G}from"./icon.bef8c7f0.js";import"./Layout.9f1afaab.js";import"./index.1a912499.js";import"./FolderTree.d2aa629a.js";import"./video_box.94354504.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.cc88ae3a.js";import"./index.6acab693.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],H=e=>{const{isHide:s}=$();if(s(e.obj))return null;const{setPathAs:c}=D(),{show:o}=B({id:1});return t(v.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:k()}},as:_,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),o(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(p,{class:"icon",boxSize:"$6",get color(){return y()},get as(){return F(e.obj)},mr:"$1","on:click":r=>{e.obj.type===G.IMAGE&&(r.stopPropagation(),r.preventDefault(),A.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return S(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=z(),[s,c]=d(),[o,r]=d(!1);I(()=>{s()&&O(s(),o())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===s()?r(!o()):h(()=>{c(i.name),r(!1)})}});return t(T,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return P()},get indeterminate(){return M()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(E,{get each(){return L.objs},children:(i,x)=>t(H,{obj:i,get index(){return x()}})})]}})};export{ee as default};
