import{c as g,f as x}from"./utils-Bjs6aQ11.js";import{R as e,r as w}from"./index-CDs2tPxN.js";import"./index-DuM-I7-B.js";function m({className:t}){return e.createElement("svg",{className:t,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",stroke:"#828282",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M21.0004 20.9984L16.6504 16.6484",stroke:"#828282",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}m.__docgenInfo={description:"",methods:[],displayName:"SearchIcon",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function n({name:t,...r}){switch(t){case"search":return e.createElement(m,{...r})}}n.displayName="Icon";n.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"literal",value:"'search'"},description:""}}};const i=e.forwardRef(({className:t,type:r,onClickSearch:o,...a},u)=>{const[c,f]=w.useState("");return r==="search"&&(a.placeholder="검색어를 입력하세요"),e.createElement("div",{className:"relative",style:{width:a.width?`${a.width}px`:"200px"}},e.createElement("input",{ref:u,type:r,className:g("flex h-[44px] w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-[44px]",t),onChange:h=>f(h.target.value),value:c,...a}),r==="search"?e.createElement(n,{name:"search",className:"absolute top-0 right-0 mr-4 mt-[10px]",onClick:()=>o==null?void 0:o(c)}):null)});i.displayName="Input";i.__docgenInfo={description:"",methods:[],displayName:"Input"};const y={title:"Zicdding-UI/Input",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClickSearch:x(),type:"search",placeholder:"검색어를 입력하세요"}},s={args:{}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,y as default};