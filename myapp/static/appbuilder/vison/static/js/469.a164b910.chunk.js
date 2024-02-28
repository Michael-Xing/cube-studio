"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[469],{45117:function(e,n,i){i.d(n,{C:function(){return a},T:function(){return o}});var t=i(16030),o=function(){return(0,t.I0)()},a=t.v9},34469:function(e,n,i){i.r(n),i.d(n,{default:function(){return H}});var t=i(29439),o=i(72791),a=i(59332),s=i(82728),l=i(46933),d=i(23629),r=i(93657),c=i(29093),p=i(47535),m=i(61460),u=i(29618),h=i(70927),f=i(56756),x=i(4026),g=i(53997),y=i(18511),v=i(61020),w=i(64011),j=i(45117),b=i(84806),k=i.n(b),S=i(18323),C={sectionStyles:(0,S.y)({marginBottom:16,padding:"0 10px 24px 10px",borderBottom:"1px solid #dadada",selectors:{".subtitle":{marginBottom:20,height:24,lineHeight:"1.1",fontSize:20,fontWeight:"bold",fontFamily:'"Raleway","Helvetica Neue",Helvetica,Arial,sans-serif;'},".expand-button":{color:"#005cd2",marginRight:24,fontSize:14,marginBottom:12}}}),sampleStyles:(0,S.y)({minHeight:186,position:"relative",display:"flex",flexWrap:"wrap"}),sampleHide:(0,S.y)({height:186,overflow:"hidden"}),sampleCardStyle:(0,S.y)({width:200,marginRight:24,marginBottom:24}),cardContainer:(0,S.y)({width:200,height:124,borderRadius:2,display:"flex",flexDirection:"column",cursor:"pointer",backgroundColor:"#fff",border:"1px solid #dadada",selectors:{":hover":{boxShadow:"rgb(0 0 0 / 18%) 0px 6.4px 14.4px 0px, rgb(0 0 0 / 22%) 0px 1.2px 3.6px 0px"}}}),addIconStyles:(0,S.y)({fontSize:38,padding:"42px 0 29px",cursor:"pointer",textAlign:"center",color:"#005cd2"}),sampleImgStyles:(0,S.y)({height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",selectors:{img:{width:"100%",height:"100%"}}}),cardTitleStyles:(0,S.y)({marginTop:16,textAlign:"center",cursor:"pointer",whiteSpace:"nowrap",display:"flex",flexFlow:"column nowrap",width:"auto",height:"auto",textOverflow:"ellipsis"}),videoPlayerStyles:(0,S.y)({backgroundColor:"#000",width:800,height:500})},_=i(39230),N=i(80184),W=function(e){var n=(0,j.T)(),i=(0,o.useState)(!1),s=(0,t.Z)(i,2),l=s[0],d=s[1],r=(0,o.useState)(!1),c=(0,t.Z)(r,2),p=c[0],m=c[1],u=(0,o.useState)(""),h=(0,t.Z)(u,2),f=h[0],x=h[1],b=(0,o.useState)(void 0),S=(0,t.Z)(b,2),W=S[0],T=S[1],K=(0,j.C)(w.zr),Z=(0,_.$G)(),z=Z.t,H=Z.i18n;console.log("i18n.language",H.language);return(0,o.useEffect)((function(){p&&f&&setTimeout((function(){var e=new(k())({id:"video-player",url:f,width:800,height:500});T(e)}),0),p&&W&&(W.destroy(),T(void 0))}),[p,f]),(0,o.useEffect)((function(){}),[W]),(0,N.jsxs)(a.K,{className:C.sectionStyles,children:[(0,N.jsxs)(a.K,{className:"flex-section",horizontal:!0,horizontalAlign:"space-between",children:[(0,N.jsx)("div",{className:"subtitle",children:e.name}),(0,N.jsx)("div",{className:"expand-button",onClick:function(){d(!l)},children:z(l?"\u6298\u53e0":"\u66f4\u591a")})]}),(0,N.jsxs)("div",{className:"".concat(C.sampleStyles," ").concat(l?"":C.sampleHide),children:[e.first?(0,N.jsxs)("div",{className:C.sampleCardStyle,onClick:function(){g.Z.pipeline_modelview_add({describe:"new-pipeline-".concat(Date.now()),name:"".concat(K,"-pipeline-").concat(Date.now()),node_selector:"cpu=true,train=true",schedule_type:"once",image_pull_policy:"Always",parallelism:1,project:7}).then((function(e){if(0===(null===e||void 0===e?void 0:e.status)&&"success"===(null===e||void 0===e?void 0:e.message)){var n,i="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e||null===(n=e.result)||void 0===n?void 0:n.id);window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(i)),"bank")}})).catch((function(e){e.response&&n((0,w.L$)({msg:e.response.data.message}))}))},children:[(0,N.jsx)("div",{className:C.cardContainer,children:(0,N.jsx)(y.J,{iconName:"Add",className:C.addIconStyles})}),(0,N.jsx)("div",{className:C.cardTitleStyles,children:(0,N.jsx)("span",{children:z("\u65b0\u5efa\u6d41\u6c34\u7ebf")})})]}):null,e.data.map((function(e,n){return e.img?(0,N.jsxs)("div",{className:C.sampleCardStyle,onClick:function(){!function(e){var n="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e?void 0:e.id);switch(e.type){case"link":window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(n)),"bank");break;case"outside":window.open(e.url,"_blank");break;case"video":m(!0),x(e.url)}}(e)},children:[(0,N.jsx)("div",{className:C.cardContainer,children:(0,N.jsx)("div",{className:C.sampleImgStyles,children:(0,N.jsx)("img",{src:e.img,alt:e.name})})}),(0,N.jsx)("div",{className:C.cardTitleStyles,children:(0,N.jsx)("span",{children:e.name})})]},n):null}))]}),(0,N.jsx)(v.u,{isOpen:p,onDismiss:function(){return m(!1)},children:(0,N.jsx)("div",{id:"video-player",className:C.videoPlayerStyles})})]})},T=i(48636),K={root:{width:"100%",height:"100%",overflow:"hidden"}},Z={dropdown:{width:100,marginLeft:10,marginRight:20}},z=[{key:"10",text:"10"},{key:"25",text:"25"},{key:"50",text:"50"},{key:"100",text:"100"}],H=function(){var e=(0,j.T)(),n=(0,j.C)(T.cJ),i=(0,j.C)(T.td),y=(0,o.useState)([]),v=(0,t.Z)(y,2),w=v[0],b=v[1],k=(0,o.useState)([]),S=(0,t.Z)(k,2),C=S[0],H=S[1],R=(0,o.useState)([]),I=(0,t.Z)(R,2),O=I[0],A=I[1],B=(0,o.useState)(0),D=(0,t.Z)(B,2),L=D[0],M=D[1],E=(0,o.useState)(10),J=(0,t.Z)(E,2),P=J[0],F=J[1],G=(0,o.useState)(!1),U=(0,t.Z)(G,2),$=U[0],V=U[1],q=(0,o.useState)(!1),Q=(0,t.Z)(q,2),X=Q[0],Y=Q[1],ee=(0,_.$G)(),ne=ee.t,ie=(ee.i18n,[{key:"id",name:"ID",fieldName:"id",minWidth:50,maxWidth:100,data:"number"},{key:"name",name:ne("\u4efb\u52a1\u6d41"),fieldName:"name",minWidth:200,maxWidth:350,data:"string",onRender:function(e){return(0,N.jsx)("span",{style:{textDecoration:"underline",color:"#005ccb",cursor:"pointer"},onClick:function(){te(e)},dangerouslySetInnerHTML:{__html:e.name}})}},{key:"describe",name:ne("\u63cf\u8ff0"),fieldName:"describe",minWidth:200,maxWidth:300,data:"string"},{key:"changed_on",name:ne("\u4fee\u6539\u65f6\u95f4"),fieldName:"changed_on",minWidth:200,maxWidth:300,data:"string"},{key:"project_id",name:ne("\u9879\u76ee\u7ec4"),minWidth:150,maxWidth:200,onRender:function(e){return(0,N.jsx)("div",{children:O[e.project_id].name})}}]),te=function(e){var n="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e?void 0:e.id);window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(n)),"bank")};return(0,o.useEffect)((function(){b([{name:ne("\u65b0\u4eba\u5236\u4f5c\u4e00\u4e2apipeline"),img:"/static/assets/images/ad/video-cover1-thumb.png",url:"https://cube-studio.oss-cn-hangzhou.aliyuncs.com/cube-studio.mp4",type:"video"}]),g.Z.pipeline_modelview_demo().then((function(e){if(0===e.status){var n=e.result.map((function(e){return{id:e.id,name:e.describe,img:JSON.parse(e.parameter).img||"",type:"link"}}));H(n)}})),g.Z.project_all().then((function(n){if(0===n.status){V(!0);var i=[];n.result.data.forEach((function(e){e.id&&(i[e.id]=e)})),console.log("list",i),A(i),e((0,T.JO)())}}))}),[]),(0,o.useEffect)((function(){$&&e((0,T.Jd)({page:L,page_size:P}))}),[P,$,L]),(0,o.useEffect)((function(){i&&Y(i.length<P)}),[i]),(0,N.jsx)(a.K,{className:"home-container",styles:K,children:(0,N.jsxs)(a.K,{as:"main",grow:!0,verticalFill:!0,styles:{root:{padding:"8px 14px",overflow:"scroll"}},children:[(0,N.jsx)(W,{name:ne("\u5e73\u53f0\u4e3b\u8981\u529f\u80fd"),data:C,first:!0}),(0,N.jsx)(W,{name:ne("\u65b0\u624b\u89c6\u9891"),data:w}),(0,N.jsxs)(a.K,{styles:{root:{marginTop:"16px !important",padding:"0 10px 24px"}},children:[(0,N.jsx)(a.K,{className:"flex-section",horizontal:!0,horizontalAlign:"space-between",children:(0,N.jsx)("div",{className:"subtitle",style:{marginBottom:8,height:24,lineHeight:"1.1",fontSize:20,fontWeight:"bold"},children:ne("\u6d41\u6c34\u7ebf")})}),(0,N.jsxs)(s.o,{"aria-label":"Basic Pivot Example",defaultSelectedKey:"1",children:[(0,N.jsx)(l.M,{headerText:ne("\u6211\u7684"),headerButtonProps:{"data-order":1,"data-title":"My Files Title"},itemKey:"1",children:(0,N.jsx)("div",{children:(0,N.jsx)(d.W,{items:n,columns:ie.concat({key:"action",name:ne("\u64cd\u4f5c"),minWidth:200,maxWidth:300,onRender:function(n){return(0,N.jsx)("div",{children:(0,N.jsx)(r.G,{content:ne("\u5220\u9664"),children:(0,N.jsx)(c.h,{onClick:function(){!function(n){null!==n&&void 0!==n&&n.id&&g.Z.pipeline_modelview_delete(n.id).then((function(n){0===n.status&&e((0,T.JO)())}))}(n)},iconProps:{iconName:"Delete",styles:{root:{color:"red"}}}})})})}}),selectionMode:p.oW.none,setKey:"none",layoutMode:m.Oh.fixedColumns,isHeaderVisible:!0,compact:!0,styles:{headerWrapper:{".ms-DetailsHeader":{paddingTop:0}},contentWrapper:{lineHeight:"32px"}}})})}),(0,N.jsx)(l.M,{headerText:ne("\u534f\u4f5c"),itemKey:"2",children:(0,N.jsxs)("div",{children:[(0,N.jsx)(u.J,{setKey:"none",isHeaderVisible:!0,items:i||[],columns:ie,compact:!!i,selectionMode:p.oW.none,layoutMode:m.Oh.fixedColumns,enableShimmer:!i,detailsListStyles:{headerWrapper:{".ms-DetailsHeader":{paddingTop:0}},contentWrapper:{lineHeight:"32px"}},listProps:{renderedWindowsAhead:0,renderedWindowsBehind:0}}),(0,N.jsxs)(a.K,{horizontal:!0,reversed:!0,verticalAlign:"center",styles:{root:{marginTop:20}},children:[(0,N.jsx)(h.K,{text:ne("\u4e0b\u4e00\u9875"),styles:{root:{marginRight:10}},disabled:X,onClick:function(){!X&&i&&M(L+1)}}),(0,N.jsx)(h.K,{text:ne("\u4e0a\u4e00\u9875"),styles:{root:{marginRight:10}},disabled:0===L,onClick:function(){0!==L&&i&&M(L-1)}}),(0,N.jsx)(f.L,{defaultSelectedKey:"10",placeholder:ne("\u9009\u62e9\u9875\u6570"),options:z,styles:Z,onChange:function(e,n){M(0),(null===n||void 0===n?void 0:n.key)&&F(+n.key)}}),(0,N.jsx)(x.x,{styles:{root:{fontSize:14,fontWeight:600}},children:ne("\u9009\u62e9\u9875\u6570")})]})]})})]})]})]})})}}}]);