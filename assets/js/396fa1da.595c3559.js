"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[3884],{3986:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"build/opl/router-protocol/approve","title":"Approving the Fee Payer","description":"Approving fee payer in Router Protocol","source":"@site/docs/build/opl/router-protocol/approve.md","sourceDirName":"build/opl/router-protocol","slug":"/build/opl/router-protocol/approve","permalink":"/build/opl/router-protocol/approve","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/build/opl/router-protocol/approve.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{"description":"Approving fee payer in Router Protocol"},"sidebar":"developers","previous":{"title":"Router Interfaces","permalink":"/build/opl/router-protocol/interface"},"next":{"title":"OPL SDK","permalink":"/build/opl/opl-sdk/"}}');var n=o(4848),s=o(8453);const i={description:"Approving fee payer in Router Protocol"},c="Approving the Fee Payer",l={},a=[{value:"Obtaining Test Tokens",id:"obtaining-test-tokens",level:2},{value:"Approving Contracts in Router Explorer",id:"approving-contracts-in-router-explorer",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"approving-the-fee-payer",children:"Approving the Fee Payer"})}),"\n",(0,n.jsxs)(t.p,{children:["According to Router Protocol's ",(0,n.jsx)(t.a,{href:"https://docs.routerprotocol.com/develop/message-transfer-via-crosstalk/key-concepts/fee-management",children:"fee management"})," system, cross-chain requests\ninitiated by a dApp are paid for by the dApp's corresponding fee payer account\non the Router Chain. This fee payer is registered by calling the\n",(0,n.jsx)(t.code,{children:"setDappMetadata"})," function on the gateway contract."]}),"\n",(0,n.jsx)(t.h2,{id:"obtaining-test-tokens",children:"Obtaining Test Tokens"}),"\n",(0,n.jsxs)(t.p,{children:["To interact with the Router Protocol testnet, you'll need ",(0,n.jsx)(t.code,{children:"ROUTE"})," test tokens.\nFollow these steps to obtain them from the Router Faucet:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://faucet.routerprotocol.com/",children:"Router Faucet"})," website."]}),"\n",(0,n.jsx)(t.li,{children:"Connect your MetaMask wallet."}),"\n",(0,n.jsx)(t.li,{children:"Add the Router Test Network to your MetaMask if prompted."}),"\n",(0,n.jsx)(t.li,{children:"Enter your account address in the provided field."}),"\n",(0,n.jsxs)(t.li,{children:["Click the ",(0,n.jsx)(t.code,{children:"Get Test Tokens"})," button."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Router Test Faucet",src:o(1374).A+"",width:"917",height:"666"})}),"\n",(0,n.jsx)(t.h2,{id:"approving-contracts-in-router-explorer",children:"Approving Contracts in Router Explorer"}),"\n",(0,n.jsx)(t.p,{children:"After deploying your contracts, you need to approve the fee payer for each of\nthem. Here's how to do it using the Router Explorer:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.a,{href:"https://testnet.routerscan.io/feePayer",children:"Router Explorer"}),"."]}),"\n",(0,n.jsx)(t.li,{children:'Connect your wallet by clicking the "Connect Wallet" button.'}),"\n",(0,n.jsx)(t.li,{children:"Once connected, you'll see a list of pending approvals for your deployed\ncontracts."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Router Approvals",src:o(7671).A+"",width:"1284",height:"479"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["For each contract listed, click the ",(0,n.jsx)(t.code,{children:"Approve"})," button."]}),"\n",(0,n.jsx)(t.li,{children:"Follow the prompts in your wallet to sign the approval message."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If you don't see your deployed contracts in the list, it's possible you used an\nincorrect gateway address for the chain during deployment. Verify the current\ngateway addresses in the ",(0,n.jsx)(t.a,{href:"https://docs.routerprotocol.com/networks/supported-chains#for-testnet",children:"Router Protocol documentation"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"If you encounter any issues during the approval process, consider the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure you have sufficient ROUTE test tokens in your wallet."}),"\n",(0,n.jsx)(t.li,{children:"Verify that you're connected to the correct network in MetaMask."}),"\n",(0,n.jsx)(t.li,{children:"Double-check that the contracts were deployed with the correct gateway\naddresses."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7671:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/router-approve-347250e4e8428788465b26ca94997659.png"},1374:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/router-faucet-de090092cd541c0232091e5a7a7b1c4f.png"},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var r=o(6540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);