"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{9259:function(n,e,r){r.d(e,{au:function(){return l},n5:function(){return p}});var t,a,o,i,u=r(168),s=r(5705),c=r(6487),l=c.ZP.form(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n"]))),p=(c.ZP.label(a||(a=(0,u.Z)(["\n  font-size: 15px;\n  margin-bottom: 5px;\n"]))),(0,c.ZP)(s.gN)(o||(o=(0,u.Z)(["\n  height: 40px;\n  padding-right: 12px;\n  padding-left: 12px;\n  background-color: rgba(127, 86, 217, 0.04);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  border: 1px solid #d8d8d8;\n  font-size: 14px;\n  line-height: 1.75;\n\n  &:focus {\n    outline: 1px solid #7f56d9;\n  }\n"]))),c.ZP.div(i||(i=(0,u.Z)(["\n  margin-bottom: 120px;\n"]))))},1974:function(n,e,r){r.r(e),r.d(e,{default:function(){return gn}});var t,a,o=r(168),i=r(6487),u=i.ZP.li(t||(t=(0,o.Z)(["\n  font-size: 18px;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),s=i.ZP.button(a||(a=(0,o.Z)(["\n  margin-left: 12px;\n  background-color: #7f56d9;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n\n  &:hover {\n    background-color: #27408b;\n  }\n"]))),c=r(9434),l=r(3634),p=function(n){return n.contacts.items},d=function(n){return n.contacts.isLoading},h=r(184),f=function(n){var e=n.id,r=n.name,t=n.number,a=(0,c.v9)(d),o=(0,c.I0)();return(0,h.jsxs)(u,{children:[r,": ",t,(0,h.jsx)(s,{type:"button",disabled:a,onClick:function(){return o((0,l.GK)(e))},children:"Delete"})]})},m="NOT_FOUND";var v=function(n,e){return n===e};function g(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,a=void 0===t?v:t,o=r.maxSize,i=void 0===o?1:o,u=r.resultEqualityCheck,s=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,a=0;a<t;a++)if(!n(e[a],r[a]))return!1;return!0}}(a),c=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:m},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var a=r[t];return t>0&&(r.splice(t,1),r.unshift(a)),a.value}return m}return{get:t,put:function(e,a){t(e)===m&&(r.unshift({key:e,value:a}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,s);function l(){var e=c.get(arguments);if(e===m){if(e=n.apply(null,arguments),u){var r=c.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function y(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},s=t.pop();if("object"===typeof s&&(u=s,s=t.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=u,l=c.memoizeOptions,p=void 0===l?r:l,d=Array.isArray(p)?p:[p],h=x(t),f=n.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,r=0;r<e;r++)n.push(h[r].apply(null,arguments));return o=f.apply(null,n)}));return Object.assign(m,{resultFunc:s,memoizedResultFunc:f,dependencies:h,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return a}var b=y(g),Z=function(n){return n.filter},j=b([p,Z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),C=function(){var n=(0,c.v9)(j);return(0,h.jsx)("ul",{children:n.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,h.jsx)(f,{id:e,name:r,number:t},e)}))})},w=r(1273),k=r(8372),P=function(){var n=(0,c.v9)(Z),e=(0,c.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(k.Z,{id:"outlined-basic",label:"Search",variant:"outlined",color:"secondary",type:"text",name:"filter",value:n,onChange:function(n){return e((0,w.M)(n.target.value.toLowerCase()))},size:"small"})})},B=r(2791),z=r(9439),N=r(8022),A=r(237),S=r(7462),M=r(3366),R=r(3733),W=r(2421),T=r(104),q=r(3433),E=r(2466),F=r(7416),_=["sx"];function I(n){var e,r=n.sx,t=function(n){var e,r,t={systemProps:{},otherProps:{}},a=null!=(e=null==n||null==(r=n.theme)?void 0:r.unstable_sxConfig)?e:F.Z;return Object.keys(n).forEach((function(e){a[e]?t.systemProps[e]=n[e]:t.otherProps[e]=n[e]})),t}((0,M.Z)(n,_)),a=t.systemProps,o=t.otherProps;return e=Array.isArray(r)?[a].concat((0,q.Z)(r)):"function"===typeof r?function(){var n=r.apply(void 0,arguments);return(0,E.P)(n)?(0,S.Z)({},a,n):a}:(0,S.Z)({},a,r),(0,S.Z)({},o,{sx:e})}var L=r(418),O=["className","component"];var V=r(5902),D=r(7107),G=r(988),K=(0,D.Z)(),H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.themeId,r=n.defaultTheme,t=n.defaultClassName,a=void 0===t?"MuiBox-root":t,o=n.generateClassName,i=(0,W.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(T.Z),u=B.forwardRef((function(n,t){var u=(0,L.Z)(r),s=I(n),c=s.className,l=s.component,p=void 0===l?"div":l,d=(0,M.Z)(s,O);return(0,h.jsx)(i,(0,S.Z)({as:p,ref:t,className:(0,R.Z)(c,o?o(a):a),theme:e&&u[e]||u},d))}));return u}({themeId:G.Z,defaultTheme:K,defaultClassName:"MuiBox-root",generateClassName:V.Z.generate}),J=H,U=r(4419),$=r(6934),Q=r(1402),X=r(4036),Y=r(5878),nn=r(1217);function en(n){return(0,nn.Z)("MuiTypography",n)}(0,Y.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var rn=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],tn=(0,$.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e["align".concat((0,X.Z)(r.align))],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((function(n){var e=n.theme,r=n.ownerState;return(0,S.Z)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),an={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},on={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},un=B.forwardRef((function(n,e){var r=(0,Q.Z)({props:n,name:"MuiTypography"}),t=function(n){return on[n]||n}(r.color),a=I((0,S.Z)({},r,{color:t})),o=a.align,i=void 0===o?"inherit":o,u=a.className,s=a.component,c=a.gutterBottom,l=void 0!==c&&c,p=a.noWrap,d=void 0!==p&&p,f=a.paragraph,m=void 0!==f&&f,v=a.variant,g=void 0===v?"body1":v,x=a.variantMapping,y=void 0===x?an:x,b=(0,M.Z)(a,rn),Z=(0,S.Z)({},a,{align:i,color:t,className:u,component:s,gutterBottom:l,noWrap:d,paragraph:m,variant:g,variantMapping:y}),j=s||(m?"p":y[g]||an[g])||"span",C=function(n){var e=n.align,r=n.gutterBottom,t=n.noWrap,a=n.paragraph,o=n.variant,i=n.classes,u={root:["root",o,"inherit"!==n.align&&"align".concat((0,X.Z)(e)),r&&"gutterBottom",t&&"noWrap",a&&"paragraph"]};return(0,U.Z)(u,en,i)}(Z);return(0,h.jsx)(tn,(0,S.Z)({as:j,ref:e,ownerState:Z,className:(0,R.Z)(C.root,u)},b))})),sn=r(5705),cn=r(6727),ln=r(9259),pn=cn.Ry().shape({name:cn.Z_().required("Required!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:cn.Z_().required("Required!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"        Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),dn=function(){var n=(0,c.v9)(p),e=(0,c.I0)(),r=(0,sn.TA)({initialValues:{name:"",number:""},validationSchema:pn,onSubmit:function(n,r){if(console.log("Hi"),n.name=n.name.trim(),t(n))return alert("".concat(n.name," is already in contacts."));e((0,l.uK)(n)),r.resetForm()}}),t=function(e){return n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))};return(0,h.jsxs)(ln.au,{onSubmit:r.handleSubmit,children:[(0,h.jsx)(k.Z,{type:"text",name:"name",label:"Name",value:r.values.name,variant:"outlined",onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name,placeholder:"Please enter the name",color:"secondary",required:!0,sx:{marginBottom:"15px"}}),(0,h.jsx)(k.Z,{type:"tel",name:"number",label:"Number",value:r.values.number,variant:"outlined",onChange:r.handleChange,error:r.touched.number&&Boolean(r.errors.number),helperText:r.touched.number&&r.errors.number,placeholder:"Please enter the number",color:"secondary",required:!0,sx:{marginBottom:"15px"}}),(0,h.jsx)(N.Z,{type:"submit",variant:"contained",color:"secondary",children:"Create"})]})},hn=r(9823),fn=r(2151),mn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:465,bgcolor:"background.paper",boxShadow:24,p:4,outline:"none"},vn=function(){var n=(0,B.useState)(!1),e=(0,z.Z)(n,2),r=e[0],t=e[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(N.Z,{variant:"contained",color:"secondary",onClick:function(){return t(!0)},children:[(0,h.jsx)(fn.Z,{sx:{marginRight:"7px"}}),"Add"]}),(0,h.jsx)(A.Z,{open:r,onClose:function(){return t(!1)},children:(0,h.jsxs)(J,{sx:mn,children:[(0,h.jsx)(N.Z,{onClick:function(){return t(!1)},variant:"contained",color:"secondary",sx:{marginLeft:"365px",marginBottom:"10px","& ":{minWidth:"0px",padding:"3px 5px"}},children:(0,h.jsx)(hn.Z,{})}),(0,h.jsx)(un,{variant:"h4",gutterBottom:!0,align:"center",children:"Add New Contact"}),(0,h.jsx)(dn,{})]})})]})},gn=function(){var n=(0,c.I0)();return(0,B.useEffect)((function(){n((0,l.yF)())}),[n]),(0,h.jsxs)(J,{sx:{padding:"25px 0"},children:[(0,h.jsx)(un,{variant:"h4",component:"h1",sx:{fontWeight:600},children:"Contacts"}),(0,h.jsx)(vn,{}),(0,h.jsx)(P,{}),(0,h.jsx)(C,{})]})}},9823:function(n,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=i},2151:function(n,e,r){var t=r(4836);e.Z=void 0;var a=t(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95zm4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17z"}),"GroupAdd");e.Z=i}}]);
//# sourceMappingURL=974.cf1de3cd.chunk.js.map