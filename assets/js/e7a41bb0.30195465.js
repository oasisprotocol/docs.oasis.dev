"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[5523],{8495:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"build/rofl/resources","title":"Resources","description":"Each containerized ROFL app must define what kind of resources it needs for its","source":"@site/docs/build/rofl/resources.md","sourceDirName":"build/rofl","slug":"/build/rofl/resources","permalink":"/build/rofl/resources","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/rofl/resources.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{},"sidebar":"developers","previous":{"title":"Features","permalink":"/build/rofl/features"},"next":{"title":"Oasis Privacy Layer (OPL)","permalink":"/build/opl/"}}');var r=s(4848),o=s(8453);const t={},d="Resources",c={},a=[{value:"Memory (<code>memory</code>)",id:"memory-memory",level:2},{value:"vCPU Count (<code>cpus</code>)",id:"vcpu-count-cpus",level:2},{value:"Storage (<code>storage</code>)",id:"storage-storage",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"resources",children:"Resources"})}),"\n",(0,r.jsx)(n.p,{children:"Each containerized ROFL app must define what kind of resources it needs for its\nexecution. This includes the number of assigned vCPUs, amount of memory, storage\nrequirements, GPUs, etc."}),"\n",(0,r.jsxs)(n.p,{children:["Resources are specified in the app manifest file under the ",(0,r.jsx)(n.code,{children:"resources"})," section\nas follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"resources:\n  memory: 512\n  cpus: 1\n  storage:\n    kind: disk-persistent\n    size: 512\n"})}),"\n",(0,r.jsx)(n.p,{children:"This chapter describes the set of supported resources."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Changing the requested resources will result in a different enclave identity of\nthe ROFL app and will require the policy to be updated!"})}),"\n",(0,r.jsxs)(n.h2,{id:"memory-memory",children:["Memory (",(0,r.jsx)(n.code,{children:"memory"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["The amount of memory is specified in megabytes. By default the this value is\ninitialized to ",(0,r.jsx)(n.code,{children:"512"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"vcpu-count-cpus",children:["vCPU Count (",(0,r.jsx)(n.code,{children:"cpus"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["The number of vCPUs allocated to the VM. By default this value is initialized to\n",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"storage-storage",children:["Storage (",(0,r.jsx)(n.code,{children:"storage"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Each ROFL app can request different storage options, depending on its use case.\nThe storage kind is specified in the ",(0,r.jsx)(n.code,{children:"kind"})," field with the following values\ncurrently supported:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"disk-persistent"})," provisions a persistent disk of the given size. The disk is\nencrypted and authenticated using a key derived by the decentralized on-chain\nkey management system after successful attestation."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"disk-ephemeral"})," provisions an ephemeral disk of the given size. The disk is\nencrypted and authenticated using an ephemeral key randomly generated on each\nboot."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ram"})," provisions an ephemeral filesystem entirely contained in encrypted\nmemory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"none"})," does not provision any kind of storage. Specifying this option will not\nwork for containerized apps."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"size"})," argument defines the amount of storage to provision in megabytes."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);