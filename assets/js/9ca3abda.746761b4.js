"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[3547],{7751:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"build/opl/hyperlane/relayer","title":"Relayer","description":"Run a Hyperlane Relayer","source":"@site/docs/build/opl/hyperlane/relayer.md","sourceDirName":"build/opl/hyperlane","slug":"/build/opl/hyperlane/relayer","permalink":"/build/opl/hyperlane/relayer","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/build/opl/hyperlane/relayer.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{"description":"Run a Hyperlane Relayer"},"sidebar":"developers","previous":{"title":"Hyperlane CLI","permalink":"/build/opl/hyperlane/cli"},"next":{"title":"Ping Pong Example","permalink":"/build/opl/hyperlane/pingpong-example"}}');var s=r(4848),t=r(8453);const i={description:"Run a Hyperlane Relayer"},l="Relayer",o={},c=[{value:"Run a Relayer",id:"run-a-relayer",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"relayer",children:"Relayer"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.hyperlane.xyz/docs/protocol/agents/relayer",children:"Relayers"})," are off-chain agents that transport messages between chains."]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-relayer",children:"Run a Relayer"}),"\n",(0,s.jsxs)(n.p,{children:["The easiest way to run a relayer is with the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.hyperlane.xyz/docs/reference/cli",children:"Hyperlane CLI"})}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Export your private key to be used with the CLI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export HYP_KEY='<YOUR_PRIVATE_KEY>'\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start a relayer which watches ",(0,s.jsx)(n.code,{children:"Arbitrum Sepolia"})," & ",(0,s.jsx)(n.code,{children:"SapphireTestnet"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"hyperlane relayer --chains sapphiretestnet,arbitrumsepolia\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Chain Configs",type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Sapphire Testnet"})," is registered in the ",(0,s.jsx)(n.em,{children:"Hyperlane Registry"}),", if you deploy\nthe ",(0,s.jsx)(n.em,{children:"Hyperlane Core"})," on ",(0,s.jsx)(n.code,{children:"Sapphire Testnet"})," yourself, make sure you have\n",(0,s.jsx)(n.em,{children:"Hyperlane"})," config files similar to the ones below in\n",(0,s.jsx)(n.code,{children:"$HOME/.hyperlane/chains/sapphiretestnet"}),"."]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:" metadata.yaml "}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# yaml-language-server: $schema=../schema.json\nblockExplorers:\n  - apiUrl: https://nexus.oasis.io/v1/\n    family: other\n    name: Oasis Explorer\n    url: https://explorer.oasis.io/testnet/sapphire\nchainId: 23295\ndisplayName: Sapphire Testnet\ndomainId: 23295\nisTestnet: true\nname: sapphiretestnet\nnativeToken:\n  decimals: 18\n  name: TEST\n  symbol: TEST\nprotocol: ethereum\nrpcUrls:\n  - http: https://testnet.sapphire.oasis.io\ntechnicalStack: other\n"})})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:" addresses.yaml "}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'domainRoutingIsmFactory: "0x3497967f8E5041f486eC559E6B760d8f051A034C"\ninterchainAccountIsm: "0xD84DE931A0EDA06Af3944a4e9933c24f3B56DCaC"\ninterchainAccountRouter: "0xFdca43771912CE5F5B4D869B0c05df0b6eF8aEFc"\nmailbox: "0x79d3ECb26619B968A68CE9337DfE016aeA471435"\nproxyAdmin: "0x5Ed8004e3352df333901b0B2E98Bd98C3B4AA59A"\nstaticAggregationHookFactory: "0x212c232Ee07E187CF9b4497A30A3a4D034aAC4D6"\nstaticAggregationIsmFactory: "0xE25A539AdCa1Aac56549997f2bB88272c5D9498c"\nstaticMerkleRootMultisigIsmFactory: "0x9851EC4C62943E9974370E87E93CE552abE7705E"\nstaticMerkleRootWeightedMultisigIsmFactory: "0x688dE6d0aBcb60a711f149c274014c865446b49D"\nstaticMessageIdMultisigIsmFactory: "0xFE0937b1369Bbba59211c4119B91984FF450ccf1"\nstaticMessageIdWeightedMultisigIsmFactory: "0x1de05675c8cd512A30c17Ea0a3491d74eF290994"\ntestRecipient: "0x7bf548104F8f500C563Aa6DC7FbF3b1ad93E4E03"\nvalidatorAnnounce: "0xB119f96a106919489b6495128f30e7088e55B05c"\n'})})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Agents",type:"tip",children:(0,s.jsxs)(n.p,{children:["For a more complex validator and relayer setup, check Hyperlane's ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.hyperlane.xyz/docs/guides/deploy-hyperlane-local-agents",children:"Local Agents guide"})}),"\nor the more production ready ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.hyperlane.xyz/docs/operate/overview-agents",children:"Agent Operators guide"})}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var a=r(6540);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);