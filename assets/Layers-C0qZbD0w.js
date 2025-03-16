import{r as m,q as F,p as P,j as e,C as L,I as _,E as R,G as T,H as I,S as j,T as b,B as S,J as k,K as v,A as B,F as H,D as M,L as O}from"./index-COEmp62u.js";import{i as $,j as C,M as D,k as z,T as G,l as V,b as J,d as K,e as U,A as W,g as q,m as Q,h as X}from"./AutoSubmit-CFr04VNH.js";import{C as Y,A,G as w,L as Z,a as ee,S as te,b as se,c as re}from"./LightSourceForm-BADexdXM.js";const oe=({image:o,layer:n})=>{const[r,i]=m.useState(),[h,c]=m.useState(!1);return m.useEffect(()=>{if(!o)return;const t=new Image;c(!0),t.onload=async()=>{if(!t||t.width===0||t.height===0)return;const u=await F(t,n);if(!u)return;const l=P(t),d=l.getContext("2d");d&&(d.drawImage(t,0,0),d.globalCompositeOperation="source-over",d.drawImage(u,0,0),i(l==null?void 0:l.toDataURL("image/png")),c(!1))},t.src=o},[n]),o?h?e.jsx(L,{}):e.jsx("img",{src:r,style:{width:"100%"}}):"No image"},ne=({image:o,layer:n,onDelete:r})=>e.jsxs("div",{style:{width:"100%",height:"100%",overflow:"hidden",position:"relative"},children:[e.jsx(oe,{image:o,layer:n}),e.jsx(_,{title:n.name,actionPosition:"right",actionIcon:e.jsx(R,{edge:"end","aria-label":"delete",onClick:i=>{i.stopPropagation(),confirm("Are you sure you want to delete this layer?")&&r()},children:e.jsx(T,{})})})]}),ie=({image:o,form:{setFieldValue:n},field:{value:r,name:i}})=>{var x;const{t:h}=I(),[c,t]=m.useState(),[u,l]=m.useState(),[d,y]=m.useState(!1),{getFieldMeta:p}=$();return m.useEffect(()=>{if(!o)return;const s=new Image;y(!0),s.onload=async()=>{if(!s||s.width===0||s.height===0)return;const a=await F(s,r);if(!a)return;const g=a.getContext("2d");g&&(g.globalCompositeOperation="destination-over",g.drawImage(s,0,0),l(a==null?void 0:a.toDataURL("image/png")),y(!1))},s.src=o},[r.polygon,r.lightSources,r.color]),o?e.jsxs(j,{sx:{width:"100%",height:"100%"},spacing:4,children:[e.jsxs(j,{direction:"row",spacing:1,children:[e.jsx(b,{variant:"caption",children:h("floor.layer.color.label")}),e.jsx(C,{name:`${i}.color`,children:({field:s,form:a})=>e.jsx(Y,{label:h("floor.layer.color.label"),value:s.value,onChange:g=>a.setFieldValue(`${i}.color`,g)})})]}),e.jsxs(j,{direction:"column",sx:{width:"100%"},spacing:1,children:[e.jsxs(j,{direction:"row",sx:{width:"100%"},spacing:1,alignItems:"center",children:[e.jsx(b,{children:h("floor.layer.light_sources")}),e.jsx(S,{variant:"contained",onClick:()=>{n(`${i}.lightSources`,[...r.lightSources,{id:k(),polygon:[],name:"",border:25,color:[255,255,255,0],radius:5,shadowRelease:1}]),t(r.lightSources.length)},children:e.jsx(A,{})})]}),e.jsx(w,{container:!0,spacing:2,children:r.lightSources.map((s,a)=>e.jsx(w,{size:{xs:6,sm:6,md:4,lg:3},sx:{maxHeight:"15vh",border:p(`${i}.lightSources.${a}`).error?"1px solid red":"none"},onClick:()=>t(a),children:e.jsx(Z,{lightSource:s,image:o,onDelete:()=>{n(`${i}.lightSources`,r.lightSources.filter((g,f)=>f!==a))}},a)},s.name+"_"+a))})]}),e.jsx(D,{fullScreen:!0,title:h("layer.light_source.modal.title",{name:(x=r.lightSources[c])==null?void 0:x.name}),open:c!==void 0&&!!r.lightSources[c],onClose:()=>t(void 0),children:e.jsx(C,{name:`${i}.lightSources.${c}`,children:s=>e.jsx(ee,{...s,image:o})})}),e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:d&&!u?e.jsx(L,{}):e.jsx("img",{src:u,style:{maxWidth:"100%"}})})]}):"No image"},ae=({image:o,...n})=>{var p,x;const{t:r}=I(),{getFieldMeta:i}=$(),h=[{key:"name",label:"Name"},{key:"settings",label:"Settings"}],c=((p=i(`${n.field.name}.name`))==null?void 0:p.error)||!n.field.value.name,t=(x=i(`${n.field.name}.polygon`))==null?void 0:x.error,u=c?0:1,[l,d]=m.useState(u),y=l===0?!c:l===1&&!t;return e.jsxs(j,{sx:{height:"100%"},spacing:1,children:[e.jsx(te,{activeStep:l,children:h.map(({key:s,label:a},g)=>{let f=!1;g===0&&n.field.value.name&&(f=!0),g===1&&(f=!0),!t&&g===2&&(f=!0);const E={completed:f},N={};return e.jsx(se,{...E,children:e.jsx(re,{...N,onClick:()=>d(g),children:a})},s)})}),l===0&&e.jsx(v,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},children:e.jsx(C,{name:`${n.field.name}.name`,children:({field:s,meta:a})=>e.jsxs(z,{style:{height:"100%",width:"100%",flex:1,display:"flex",alignItems:"center",justifyContent:"center"},error:!!a.error,variant:"standard",children:[e.jsx(G,{...s,error:!!a.error,autoFocus:!0,onKeyDown:g=>{g.key==="Enter"&&d(f=>f+1)},size:"small",label:"Name"}),e.jsx(V,{children:a.error})]})})}),l===1&&e.jsx(ie,{...n,image:o}),e.jsxs(j,{direction:"row",sx:{justifyContent:"space-between"},children:[e.jsx(S,{variant:"outlined",onClick:()=>d(s=>s-1),disabled:l===0,children:r("actions.previous")}),e.jsx(S,{variant:"contained",onClick:()=>d(s=>s+1),disabled:l===h.length-1||!y,children:r("actions.next")})]})]})};let le=[];for(let o in localStorage)if(o.startsWith("__state_"))try{le.push(JSON.parse(localStorage.getItem(o)))}catch{localStorage.removeItem(o)}const ge=()=>{const{floorId:o}=B(),{t:n}=I(),r=m.useContext(H),[i,h]=m.useState(),c=M(o??"");return c?e.jsx(v,{children:e.jsx(J,{initialValues:c,onSubmit:t=>r==null?void 0:r.onChange(t),validationSchema:K.toFormikValidationSchema(X),validateOnChange:!0,validateOnMount:!0,children:({values:t,getFieldMeta:u})=>{var l;return e.jsxs(U,{children:[e.jsx(W,{}),e.jsx(q,{}),e.jsx(D,{fullScreen:!0,title:n("layer.modal.title",{name:(l=t==null?void 0:t.layers[i])==null?void 0:l.name}),open:i!==void 0&&!!(t!=null&&t.layers[i]),onClose:()=>h(void 0),children:e.jsx(C,{name:`layers.${i}`,children:d=>e.jsx(ae,{...d,image:c.base64})})}),e.jsx(O,{sx:{margin:"1rem 0"},severity:"info",children:n("floor.layer.list.description")}),e.jsx(Q,{name:"layers",render:({push:d,remove:y})=>e.jsxs(j,{spacing:2,children:[e.jsxs(j,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(b,{variant:"subtitle1",children:n("floor.layer.list")}),e.jsx(S,{variant:"contained",onClick:()=>{d({id:k(),color:[255,255,255,0],name:"",lightSources:[]}),h(t.lightSources.length-1)},children:e.jsx(A,{})})]}),e.jsx(w,{container:!0,spacing:2,children:t.layers.map((p,x)=>e.jsx(w,{size:{xs:6,sm:6,md:4,lg:3},sx:{maxHeight:"20vh",border:u(`layers.${x}`).error?"1px solid red":"none"},onClick:()=>h(x),children:e.jsx(ne,{image:c.base64,layer:p,onDelete:()=>{i===x&&h(void 0),y(x)}})},p.id))})]})})]})}})}):"No floor ?"};export{ge as Layers};
