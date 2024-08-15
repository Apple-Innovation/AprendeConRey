import{r as u,j as i,c as C,u as D,a as I,R as T,b as k}from"./index-CfpVBV_M.js";import{f as B,P as j,z as v,u as U,a as $,C as F,b as Z,c as q,d as W,F as y,L as X,B as R,e as Q,t as G}from"./FormInput-W8MPtJR1.js";function H(e,t,{checkForDefaultPrevented:s=!0}={}){return function(r){if(e==null||e(r),s===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Y(e,t=[]){let s=[];function o(l,c){const n=u.createContext(c),d=s.length;s=[...s,c];function f(a){const{scope:p,children:b,...m}=a,x=(p==null?void 0:p[e][d])||n,g=u.useMemo(()=>m,Object.values(m));return i.jsx(x.Provider,{value:g,children:b})}function h(a,p){const b=(p==null?void 0:p[e][d])||n,m=u.useContext(b);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${a}\` must be used within \`${l}\``)}return f.displayName=l+"Provider",[f,h]}const r=()=>{const l=s.map(c=>u.createContext(c));return function(n){const d=(n==null?void 0:n[e])||l;return u.useMemo(()=>({[`__scope${e}`]:{...n,[e]:d}}),[n,d])}};return r.scopeName=e,[o,J(r,...t)]}function J(...e){const t=e[0];if(e.length===1)return t;const s=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(l){const c=o.reduce((n,{useScope:d,scopeName:f})=>{const a=d(l)[`__scope${f}`];return{...n,...a}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return s.scopeName=t.scopeName,s}function P(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...s)=>{var o;return(o=t.current)==null?void 0:o.call(t,...s)},[])}function K({prop:e,defaultProp:t,onChange:s=()=>{}}){const[o,r]=V({defaultProp:t,onChange:s}),l=e!==void 0,c=l?e:o,n=P(s),d=u.useCallback(f=>{if(l){const a=typeof f=="function"?f(e):f;a!==e&&n(a)}else r(f)},[l,e,r,n]);return[c,d]}function V({defaultProp:e,onChange:t}){const s=u.useState(e),[o]=s,r=u.useRef(o),l=P(t);return u.useEffect(()=>{r.current!==o&&(l(o),r.current=o)},[o,r,l]),s}function ee(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var te=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function se(e){const[t,s]=u.useState(void 0);return te(()=>{if(e){s({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const l=r[0];let c,n;if("borderBoxSize"in l){const d=l.borderBoxSize,f=Array.isArray(d)?d[0]:d;c=f.inlineSize,n=f.blockSize}else c=e.offsetWidth,n=e.offsetHeight;s({width:c,height:n})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else s(void 0)},[e]),t}var w="Switch",[re,de]=Y(w),[oe,ne]=re(w),N=u.forwardRef((e,t)=>{const{__scopeSwitch:s,name:o,checked:r,defaultChecked:l,required:c,disabled:n,value:d="on",onCheckedChange:f,...h}=e,[a,p]=u.useState(null),b=B(t,S=>p(S)),m=u.useRef(!1),x=a?!!a.closest("form"):!0,[g=!1,M]=K({prop:r,defaultProp:l,onChange:f});return i.jsxs(oe,{scope:s,checked:g,disabled:n,children:[i.jsx(j.button,{type:"button",role:"switch","aria-checked":g,"aria-required":c,"data-state":L(g),"data-disabled":n?"":void 0,disabled:n,value:d,...h,ref:b,onClick:H(e.onClick,S=>{M(z=>!z),x&&(m.current=S.isPropagationStopped(),m.current||S.stopPropagation())})}),x&&i.jsx(ce,{control:a,bubbles:!m.current,name:o,value:d,checked:g,required:c,disabled:n,style:{transform:"translateX(-100%)"}})]})});N.displayName=w;var _="SwitchThumb",E=u.forwardRef((e,t)=>{const{__scopeSwitch:s,...o}=e,r=ne(_,s);return i.jsx(j.span,{"data-state":L(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:t})});E.displayName=_;var ce=e=>{const{control:t,checked:s,bubbles:o=!0,...r}=e,l=u.useRef(null),c=ee(s),n=se(t);return u.useEffect(()=>{const d=l.current,f=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(f,"checked").set;if(c!==s&&a){const p=new Event("click",{bubbles:o});a.call(d,s),d.dispatchEvent(p)}},[c,s,o]),i.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...r,tabIndex:-1,ref:l,style:{...e.style,...n,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function L(e){return e?"checked":"unchecked"}var O=N,ae=E;const A=u.forwardRef(({className:e,...t},s)=>i.jsx(O,{className:C("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800",e),...t,ref:s,children:i.jsx(ae,{className:C("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950")})}));A.displayName=O.displayName;const ie=v.object({username:v.string({required_error:"ZOD_REQUERIDO"}).min(3,{message:"ZOD_MIN minimo 3 caracteres"}).max(20,{message:"ZOD_MAX máximo 3 caracteres"}),password:v.string({required_error:"ZOD_REQUERIDO"}).min(3,{message:"ZOD_MIN minimo 3 caracteres"}).max(20,{message:"ZOD_MAX máximo 3 caracteres"})});function fe(){var f,h;const{t:e}=U(),t=D(),{register:s,handleSubmit:o,formState:{errors:r}}=$({defaultValues:{username:"",password:""},resolver:G(ie)}),{updateUser:l,login:c,userAuth:n}=I(a=>({updateUser:a.updateUser,login:a.login,userAuth:a.user.auth})),d=async a=>{l(a),c(a)};return T.useEffect(()=>{n&&t(k.DASHBOARD,{replace:!0})},[n,t]),i.jsxs(F,{className:"w-fit border-none bg-gray-100 ",children:[i.jsx(Z,{className:"dark:bg-slate-950 bg-blue-400 rounded-t-md",children:i.jsx(q,{className:"text-center text-gray-50",children:e("nsLoginRegister.login.title")})}),i.jsx(W,{className:"py-6",children:i.jsx("form",{onSubmit:o(d),children:i.jsxs("div",{className:"grid w-full items-center gap-4",children:[i.jsx(y,{label:e("nsLoginRegister.login.username"),inputType:"text",inputId:"username",inputPlaceholder:e("nsLoginRegister.login.usernamePlaceholder"),inputAutoComplete:"username",error:(f=r.username)==null?void 0:f.message,...s("username")}),i.jsx(y,{label:e("nsLoginRegister.login.password"),inputType:"password",inputId:"password",inputPlaceholder:e("nsLoginRegister.login.password"),inputAutoComplete:"current-password",error:(h=r.password)==null?void 0:h.message,...s("password")}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(A,{id:"remember-me",defaultChecked:!0}),i.jsx(X,{htmlFor:"remember-me",children:e("nsLoginRegister.login.rememberMe")})]}),i.jsx("div",{className:"flex justify-center",children:i.jsx(R,{type:"submit",className:"bg-orange-400 px-10 shadow-lg border-4 border-white outline outline-1 outline-gray-200",style:{transform:"perspective(300px) rotateY(-30deg)"},children:e("nsLoginRegister.login.enter")})})]})})}),i.jsxs(Q,{className:"flex flex-col gap-4 justify-center",children:[i.jsx("p",{className:"text-blue-400",children:e("nsLoginRegister.login.forgotPassword")}),i.jsx(R,{className:"bg-blue-400 text-gray-50",onClick:a=>{a.preventDefault(),t(k.SIGNUP,{replace:!0})},children:e("nsLoginRegister.login.register")})]})]})}export{fe as Login,ie as loginSchema};
