"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[172],{6172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(5043),i=n(7391),r=n(5865),l=n(1906),o=n(8903),s=n(2110),c=n(6591),d=n(6494),h=n(35),p=n(6600),x=n(5316),j=n(191),g=n(9347),u=n(9555),A=n(8988),m=n(7392),f=n(6213),k=n(1387),C=n(3560),v=n(579);const b=()=>{const[e,t]=(0,a.useState)([]),[n,b]=(0,a.useState)(!1),[P,S]=(0,a.useState)({title:"",description:"",image:"",link:""}),[w,y]=(0,a.useState)(null),[B,U]=(0,a.useState)(null),[W,D]=(0,a.useState)(null);(0,a.useEffect)((()=>{f.A.get("http://localhost:5000/api/projects").then((e=>{t(e.data.data)}))}),[]);const F=()=>b(!0),R=()=>{b(!1),S({title:"",description:"",image:"",link:""}),y(null)},T=e=>{const{name:t,value:n}=e.target;S({...P,[t]:n})},z=()=>U(null);return(0,v.jsxs)(i.A,{sx:{padding:"80px 20px"},id:"projects",children:[(0,v.jsx)(r.A,{variant:"h2",align:"center",gutterBottom:!0,sx:{marginBottom:"40px"},children:"My Projects"}),(0,v.jsx)(l.A,{variant:"contained",color:"primary",onClick:F,sx:{marginBottom:"20px"},children:"Add New Project"}),(0,v.jsx)(o.Ay,{container:!0,spacing:4,children:e.map(((e,t)=>(0,v.jsx)(o.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsxs)(s.A,{onContextMenu:t=>((e,t)=>{e.preventDefault(),U(e.currentTarget),D(t)})(t,e),children:[(0,v.jsx)(c.A,{component:"img",height:"400",image:e.image,alt:e.title}),(0,v.jsxs)(d.A,{children:[(0,v.jsx)(r.A,{variant:"h5",children:e.title}),(0,v.jsx)(r.A,{children:e.description}),(0,v.jsx)(l.A,{variant:"contained",href:e.link,target:"_blank",sx:{marginTop:"10px"},children:"View Project"})]})]})},t)))}),(0,v.jsxs)(h.A,{open:n,onClose:R,children:[(0,v.jsx)(p.A,{children:w?"Update Project":"Add New Project"}),(0,v.jsxs)(x.A,{children:[(0,v.jsx)(j.A,{margin:"dense",label:"Title",name:"title",fullWidth:!0,value:P.title,onChange:T}),(0,v.jsx)(j.A,{margin:"dense",label:"Description",name:"description",fullWidth:!0,value:P.description,onChange:T}),(0,v.jsx)(j.A,{margin:"dense",label:"Image URL",name:"image",fullWidth:!0,value:P.image,onChange:T}),(0,v.jsx)(j.A,{margin:"dense",label:"Project Link",name:"link",fullWidth:!0,value:P.link,onChange:T})]}),(0,v.jsxs)(g.A,{children:[(0,v.jsx)(l.A,{onClick:R,children:"Cancel"}),(0,v.jsx)(l.A,{onClick:w?()=>{f.A.put(`http://localhost:5000/api/projects/${P.id}`,P).then((n=>{const a=e.map((e=>e.id===n.data.data.id?n.data.data:e));t(a),R()})).catch((e=>{console.error(e),alert("Failed to update project")}))}:()=>{f.A.post("http://localhost:5000/api/projects",P).then((n=>{t([...e,n.data.data]),R()})).catch((e=>{console.error(e),alert("Failed to add project")}))},variant:"contained",color:"primary",children:w?"Update":"Add"})]})]}),(0,v.jsxs)(u.A,{anchorEl:B,open:Boolean(B),onClose:z,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,v.jsxs)(A.A,{onClick:()=>{f.A.delete(`http://localhost:5000/api/projects/${W.id}`).then((()=>{t(e.filter((e=>e.id!==W.id))),z()})).catch((e=>{console.error(e),alert("Failed to delete project")}))},sx:{color:"red","&:hover":{backgroundColor:"#f8d7da"}},children:[(0,v.jsx)(m.A,{edge:"start",color:"inherit",sx:{marginRight:"10px"},children:(0,v.jsx)(k.A,{})}),"Delete Project"]}),(0,v.jsxs)(A.A,{onClick:()=>{y(W),S(W),F(),z()},sx:{color:"blue","&:hover":{backgroundColor:"#cce5ff"}},children:[(0,v.jsx)(m.A,{edge:"start",color:"inherit",sx:{marginRight:"10px"},children:(0,v.jsx)(C.A,{})}),"Update Project"]})]})]})}}}]);
//# sourceMappingURL=172.7aaf445c.chunk.js.map