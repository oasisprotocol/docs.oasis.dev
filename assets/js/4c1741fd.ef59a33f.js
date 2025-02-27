"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[7419],{2217:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"build/opl/README","title":"Oasis Privacy Layer (OPL)","description":"Integrating privacy into dApps on other blockchains","source":"@site/docs/build/opl/README.mdx","sourceDirName":"build/opl","slug":"/build/opl/","permalink":"/build/opl/","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/build/opl/README.mdx","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{"description":"Integrating privacy into dApps on other blockchains"},"sidebar":"developers","previous":{"title":"Resources","permalink":"/build/rofl/resources"},"next":{"title":"Hyperlane Protocol","permalink":"/build/opl/hyperlane/"}}');var t=s(4848),i=s(8453),o=(s(4405),s(547)),l=s(4117);const a={description:"Integrating privacy into dApps on other blockchains"},c="Oasis Privacy Layer (OPL)",d={},h=[{value:"How OPL Works",id:"how-opl-works",level:2},{value:"Message Bridges",id:"message-bridges",level:2},{value:"Comparison",id:"comparison",level:3},{value:"Recommendation",id:"recommendation",level:3},{value:"Development &amp; Testing",id:"development--testing",level:4},{value:"Production",id:"production",level:4},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"oasis-privacy-layer-opl",children:"Oasis Privacy Layer (OPL)"})}),"\n",(0,t.jsx)(r.p,{children:"The Oasis Privacy Layer (OPL) is a powerful solution that enables developers\nto integrate privacy features into their decentralized applications (dApps)\nacross multiple EVM-compatible networks."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Privacy-First"}),": OPL leverages the ",(0,t.jsx)(r.a,{href:"/build/sapphire/",children:"Sapphire"}),"'s privacy features to ensure\nthat contract data and computation remains confidential."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Cross-Chain Compatibility"}),": OPL is compatible with multiple blockchains\nthrough message bridging protocols, making it easy to integrate privacy\nregardless of the chain your dApp is built on."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["For more information about OPL and to catch the latest news, please visit the\n",(0,t.jsx)(r.a,{href:"https://oasisprotocol.org/opl",children:"official OPL page"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"how-opl-works",children:"How OPL Works"}),"\n",(0,t.jsx)(r.p,{children:"The OPL is made possible through message bridges, which enable secure\ncommunication between OPL-enabled contracts on Sapphire and smart contracts on\nother chains. This allows dApps to access privacy-preserving capabilities while\nkeeping their main logic on their primary chain."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Oasis Privacy Layer diagram",src:s(9638).A+"",width:"1081",height:"1081"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["For how to use use signed messages with the GSN to trigger a cross-chain\nmessages, please visit our ",(0,t.jsx)(r.a,{href:"/build/sapphire/develop/gasless",children:"Gasless Transactions chapter"}),"."]})}),"\n",(0,t.jsx)(r.h2,{id:"message-bridges",children:"Message Bridges"}),"\n",(0,t.jsx)(r.p,{children:"You can integrate messaging bridges into your dApps using one of these four\nmethods:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/hyperlane/",children:"Hyperlane Protocol"})}),": A permissionless interoperability\nprotocol that enables seamless cross-chain communication for developers."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/router-protocol/",children:"Router Protocol CrossTalk"})}),": An extensible cross-chain framework\nthat enables seamless state transitions across multiple chains."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/opl-sdk/",children:"OPL SDK"})}),": A wrapper provided by the Oasis Protocol that simplifies the\nintegration of message bridging with Oasis\u2019s privacy features."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/celer/",children:"Celer Inter-Chain Messaging (IM)"})}),": A generalized message bridging\nsolution by Celer, which lets you build more complex solutions."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"comparison",children:"Comparison"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Protocol"}),(0,t.jsx)(r.th,{children:"Validator Network"}),(0,t.jsx)(r.th,{children:"Relayer"}),(0,t.jsx)(r.th,{children:"Fees"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/hyperlane/",children:"Hyperlane"})})}),(0,t.jsxs)(r.td,{children:["Self-hosted or",(0,t.jsx)("br",{}),"run by Hyperlane"]}),(0,t.jsxs)(r.td,{children:["Self-hosted or ",(0,t.jsx)("br",{}),"run by Hyperlane"]}),(0,t.jsx)(r.td,{children:"Interchain Gas Payments on origin chain"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/router-protocol/",children:"Router Protocol"})})}),(0,t.jsx)(r.td,{children:"Orchestrators (Router Chain)"}),(0,t.jsx)(r.td,{children:"Relayer (run by 3rd party)"}),(0,t.jsx)(r.td,{children:"Paid by the approved feepayer on the Routerchain"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/opl-sdk/",children:"OPL SDK"})})}),(0,t.jsx)(r.td,{children:"SGN (Celer)"}),(0,t.jsxs)(r.td,{children:["Executor (self-hosted or ",(0,t.jsx)("br",{}),"hosted service by Celer)"]}),(0,t.jsxs)(r.td,{children:["SGN Fee: Paid via ",(0,t.jsx)(r.code,{children:"msg.value"})," ",(0,t.jsx)("br",{})," Executor Fee: Charged externally (Free on testnet)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/celer/",children:"Celer IM"})})}),(0,t.jsx)(r.td,{children:"SGN (Celer)"}),(0,t.jsxs)(r.td,{children:["Executor (self-hosted or ",(0,t.jsx)("br",{}),"hosted service by Celer)"]}),(0,t.jsxs)(r.td,{children:["SGN Fee: Paid via ",(0,t.jsx)(r.code,{children:"msg.value"})," ",(0,t.jsx)("br",{})," Executor Fee: Charged externally (Free on testnet)"]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"recommendation",children:"Recommendation"}),"\n",(0,t.jsx)(r.h4,{id:"development--testing",children:"Development & Testing"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/hyperlane/",children:"Hyperlane"})}),": Due to its permissionless nature, Hyperlane\nintegrates well with other testnets, and you can easily run your own Relayer.\nHyperlane's flexibility is great for hackathons, early-stage development and\ntesting environments."]}),"\n",(0,t.jsx)(r.h4,{id:"production",children:"Production"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/build/opl/router-protocol/",children:"Router Protocol"})}),": Battle-tested by ecosystem dApps like Neby and\nfeatures the most active token pairs. Router provides a highly reliable,\nsolution for cross-chain communication, making it a top recommendation\nfor production-ready environments."]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(o.A,{items:[(0,l.$)("/build/opl/opl-sdk/ping-example"),(0,l.$)("/build/opl/celer/ping-example"),(0,l.$)("/build/opl/hyperlane/pingpong-example"),(0,l.$)("/build/opl/router-protocol/pingpong-example")]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4405:(e,r,s)=>{s.d(r,{A:()=>g});s(6540);var n=s(4164),t=s(6289),i=s(3751),o=s(1430),l=s(2887),a=s(539),c=s(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=s(4848);function p(e){let{href:r,children:s}=e;return(0,h.jsx)(t.A,{href:r,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function u(e){let{href:r,icon:s,title:t,description:i}=e;return(0,h.jsxs)(p,{href:r,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:t,children:[s," ",t]}),i&&(0,h.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:r}=e;const s=(0,i.Nr)(r),n=function(){const{selectMessage:e}=(0,o.W)();return r=>e(r,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return s?(0,h.jsx)(u,{href:s,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??n(r.items.length)}):null}function x(e){let{item:r}=e;const s=(0,l.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(r.docId??void 0);return(0,h.jsx)(u,{href:r.href,icon:s,title:r.label,description:r.description??n?.description})}function g(e){let{item:r}=e;switch(r.type){case"link":return(0,h.jsx)(x,{item:r});case"category":return(0,h.jsx)(m,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}},547:(e,r,s)=>{s.d(r,{A:()=>a});s(6540);var n=s(4164),t=s(3751),i=s(4405),o=s(4848);function l(e){let{className:r}=e;const s=(0,t.$S)();return(0,o.jsx)(a,{items:s.items,className:r})}function a(e){const{items:r,className:s}=e;if(!r)return(0,o.jsx)(l,{...e});const a=(0,t.d1)(r);return(0,o.jsx)("section",{className:(0,n.A)("row",s),children:a.map(((e,r)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(i.A,{item:e})},r)))})}},1430:(e,r,s)=>{s.d(r,{W:()=>c});var n=s(6540),t=s(797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((r=>e.includes(r)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,t.A)();return(0,n.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:o(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(r,s)=>function(e,r,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const t=s.select(r),i=s.pluralForms.indexOf(t);return n[Math.min(i,n.length-1)]}(s,r,e)}}},4117:(e,r,s)=>{s.d(r,{$:()=>o});var n=s(1858),t=s(797);function i(e){for(const r of e){const e=r.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=r),"category"===r.type&&i(r.items)}}function o(e){const{siteConfig:r,siteMetadata:s}=(0,t.A)(),o=(0,n.r)();if(!o)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in o.docsSidebars)i(o.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e]){if(console.log(`Item ${e} not found. Registered sidebar items:`),console.log(globalThis.sidebarItemsMap),"throw"==r.onBrokenMarkdownLinks)throw new Error(`Unexpected: sidebar item with href ${e} does not exist.`);return globalThis.sidebarItemsMap["/general/"]}return globalThis.sidebarItemsMap[e]}},9638:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/privacy-layer-diagram-5b87a6dff417d5a4074bd6fdee9dce7e.png"},8453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var n=s(6540);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);