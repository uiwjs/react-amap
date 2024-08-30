(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4472],{256:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=256,e.exports=t},4563:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var n=r(7804),o=r(8228),i=r(3235),l=r(2886),s=r(9424);const a=i.Ay.div`
  padding: 20px 23px 60px 23px;
  a {
    color: #ced1d4;
    text-decoration: none;
    transition: color 0.3s;
    margin: 0 3px;
    &:hover {
      color: black;
    }
    & + a {
      margin-left: 10px;
    }
    &::after {
      content: ' ';
      height: 13px;
      width: 1px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
      background-color: #e5e9ec;
    }
    &:last-child::after {
      display: none;
    }
  }
`,d=e=>{const{editorUrl:t}=e||{};return(0,s.jsxs)(a,{children:[t&&(0,s.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:`https://github.com/uiwjs/react-amap/edit/master${t}`,children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap",children:"GitHub"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-baidu-map",children:"\u767e\u5ea6\u5730\u56fe React \u7248\u672c"})]})};const c=i.I4.nav`
  ul,
  ul li {
    list-style: none;
    padding-left: 0;
  }
`,u=i.I4.aside`
  position: sticky;
  right: 0;
  top: 0px;
  z-index: 999;
  max-height: calc(100vh - 6px);
  overflow: auto;
  li {
    height: 22px;
    line-height: 22px;
  }
  .active::before {
    content: ' ';
    display: block;
    background-color: #f38701;
    border-radius: 2px;
    height: 18px;
    margin-top: 3px;
    position: absolute;
    transition: top 0.3s;
    width: 5px;
  }
`;const h=e=>{let{dom:t,mdStr:r}=e;!function(e){const{dom:t,mdStr:r}=e;(0,n.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.querySelectorAll('a.anchor[href^="#"]');e&&e.length>0&&e.forEach((e=>{e.onclick=t=>{t.preventDefault();const r=e.parentElement.id;var n;r&&(null===(n=document.querySelector(`#${r}`))||void 0===n||n.scrollIntoView({behavior:"smooth"}))}}))}),[t,r])}({dom:t,mdStr:r});const o=(0,n.useRef)(null),i=function(e){const[t,r]=n.useState([]);return n.useEffect((()=>{const e=Array.from(document.querySelectorAll("h2, h3, h4, h5, h6")).filter((e=>e.id)).map((e=>{var t;return{id:e.id,text:null!==(t=e.textContent)&&void 0!==t?t:"",level:Number(e.tagName.substring(1))}}));r(e)}),[e]),t}(r),l=function(e,t){const[r,o]=n.useState(),i=n.useRef();return n.useEffect((()=>{var r;const n=e.map((e=>document.getElementById(e)));return null===(r=i.current)||void 0===r||r.disconnect(),i.current=new IntersectionObserver((e=>{e.forEach((e=>{null!==e&&void 0!==e&&e.isIntersecting&&o(e.target.id)}))}),t),n.forEach((e=>{var t;e&&(null===(t=i.current)||void 0===t||t.observe(e))})),()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.disconnect()}}),[e,t]),r}(i.map((e=>{let{id:t}=e;return t})),{rootMargin:"0% 0% -50% 0%",threshold:1});return(0,s.jsx)(c,{ref:o,className:"toc",children:(0,s.jsxs)(u,{children:[(0,s.jsx)("h2",{children:"\u76ee\u5f55"}),(0,s.jsx)("ul",{children:i.map((e=>(0,s.jsx)("li",{className:l===e.id?"active":"",children:(0,s.jsx)("a",{style:{marginLeft:e.level-2+"em",fontWeight:l===e.id?"bold":"normal"},href:`#${e.id}`,onClick:t=>{var r;t.preventDefault(),console.log("heading.id",l,e.id),null===(r=document.querySelector(`#${e.id}`))||void 0===r||r.scrollIntoView({behavior:"smooth"})},children:e.text})},e.id)))})]})})},p=i.Ay.div`
  width: 100%;
  height: 100%;
  position: relative;
`,f=(0,i.Ay)(o.A)`
  max-width: none;
  margin: inherit;
  box-shadow: 0 0 0;
  border: 0;
  pre[data-type='rehyp'] {
    overflow: initial;
  }
`,m=i.Ay.main`
  padding: 20px 30px 120px 30px;
  display: grid;
  grid-template-columns: minmax(0, 3.5fr) 240px;
  grid-template-areas: 'main toc';
  border: 0;
  &::after,
  &::before {
    content: none;
  }
`;function x(e){const t=(0,n.useRef)(null),[r,o]=(0,n.useState)(""),[i,a]=(0,n.useState)(),c=e.path;return(0,n.useEffect)((()=>{c&&c().then((e=>{o(e.default.source),a(e.default)}))}),[c]),(0,s.jsxs)(p,{ref:t,children:[r&&(0,s.jsxs)(m,{children:[(0,s.jsx)(f,{source:r||"",data:i}),(0,s.jsx)(h,{dom:t.current,mdStr:r})]}),(0,s.jsx)(l.A,{style:{float:"right"},children:"Top"}),(0,s.jsx)(d,{editorUrl:e.editorUrl})]})}class g extends n.Component{constructor(){super(...arguments),this.editorUrl=void 0,this.getMdStr=void 0}componentDidMount(){this.getMdStr&&this.getMdStr().then((e=>{this.setState({data:e.default,mdStr:e.default.source})}))}render(){return(0,s.jsx)(x,{path:this.getMdStr,editorUrl:this.editorUrl})}}},8181:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4563);class o extends n.A{constructor(){super(...arguments),this.editorUrl="/packages/mouse-tool/README.md",this.getMdStr=()=>Promise.all([r.e(8014),r.e(9773)]).then(r.bind(r,9773))}}}}]);
//# sourceMappingURL=4472.3b18feb5.chunk.js.map