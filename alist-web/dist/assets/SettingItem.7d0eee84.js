import{a as h,e as t,S as c,bi as d,at as i,as as m,Z as y,aw as b,$ as g,I as f,cj as S,T as k,bk as C,bl as T,bm as w,bn as O,bo as v,bp as x,bq as o,E as D,br as I,bs as $,bt as E,F,bu as L}from"./index.a8009550.js";import{F as u}from"./index.93809949.js";import{T as a}from"./item_type.be442da4.js";import{o as A}from"./index.e24abda6.js";const P=e=>{const l=h();return t(L,{get w(){var n;return(n=e.w)!=null?n:"100%"},display:"flex",flexDirection:"column",get children(){return[t(c,{get when(){return!e.hideLabel},get children(){return t(d,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[i(()=>l(`settings.${e.key}`)),t(c,{get when(){return e.flag===u.DEPRECATED},get children(){return t(m,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}})}}),t(y,{get fallback(){return t(b,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(f,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(S,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(k,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(C,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(T,{get children(){return[t(w,{get children(){return l("global.choose")}}),t(O,{}),t(v,{})]}}),t(x,{get children(){return t(o,{get children(){return t(D,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(I,{value:n,get children(){return[t($,{get children(){return l(`settings.${e.key}s.${n}`)}}),t(E,{})]}})})}})}})]}})}})]}}),t(F,{get children(){return i(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{P as I};
