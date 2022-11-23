"use strict";(self.webpackChunkmobile_wallet_protocol=self.webpackChunkmobile_wallet_protocol||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Making requests",slug:"rn-making-requests",category:"633d1d37bc7103008654c123"},i=void 0,l={unversionedId:"client-sdk/rn-making-requests",id:"client-sdk/rn-making-requests",title:"Making requests",description:"Requests to Coinbase Wallet can be made using the exported WalletMobileSDKEVMProvider. Supported RPC methods are listed in the API Reference.",source:"@site/docs/client-sdk/rn-making-requests.md",sourceDirName:"client-sdk",slug:"/client-sdk/rn-making-requests",permalink:"/wallet-mobile-sdk/docs/client-sdk/rn-making-requests",draft:!1,tags:[],version:"current",frontMatter:{title:"Making requests",slug:"rn-making-requests",category:"633d1d37bc7103008654c123"},sidebar:"clientSdk",previous:{title:"Establishing a connection",permalink:"/wallet-mobile-sdk/docs/client-sdk/rn-establishing-a-connection"},next:{title:"API Reference",permalink:"/wallet-mobile-sdk/docs/client-sdk/rn-api-reference"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Requests to Coinbase Wallet can be made using the exported ",(0,a.kt)("inlineCode",{parentName:"p"},"WalletMobileSDKEVMProvider"),". Supported RPC methods are listed in the ",(0,a.kt)("a",{parentName:"p",href:"/wallet-mobile-sdk/docs/client-sdk/rn-api-reference"},"API Reference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const provider = new WalletMobileSDKEVMProvider({\n  jsonRpcUrl: JSON_RPC_URL,\n});\n\nconst signature = await provider.request({\n  method: "personal_sign",\n  params: [\n    "0x686f6c61206d756e646f",\n    "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",\n  ],\n});\n')),(0,a.kt)("p",null,"An example request is provided in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/wallet-mobile-sdk/blob/b87e05cd936fd873fe4dd2eb79b2dc81aa1be4cf/react-native/client/example/App.js#L82-L95"},"sample application"),"."))}u.isMDXComponent=!0}}]);