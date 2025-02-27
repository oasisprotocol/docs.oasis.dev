"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[5961],{3818:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"build/tools/other-paratimes/cipher/prerequisites","title":"Prerequisites","description":"How to build your first smart contract on Oasis","source":"@site/docs/build/tools/other-paratimes/cipher/prerequisites.md","sourceDirName":"build/tools/other-paratimes/cipher","slug":"/build/tools/other-paratimes/cipher/prerequisites","permalink":"/build/tools/other-paratimes/cipher/prerequisites","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/contract/prerequisites.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{"description":"How to build your first smart contract on Oasis"},"sidebar":"developers","previous":{"title":"Cipher ParaTime","permalink":"/build/tools/other-paratimes/cipher/"},"next":{"title":"Network Information","permalink":"/build/tools/other-paratimes/cipher/network"}}');var n=s(4848),o=s(8453);const r={description:"How to build your first smart contract on Oasis"},l="Prerequisites",a={},h=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Rust",id:"rust",level:3},{value:"Rust Toolchain Version",id:"rust-toolchain-version",level:4},{value:"(OPTIONAL) Go",id:"optional-go",level:3},{value:"Oasis CLI Installation",id:"oasis-cli-installation",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"prerequisites",children:"Prerequisites"})}),"\n",(0,n.jsx)(t.p,{children:"This chapter will guide you how to install the software required for developing\nsmart contracts using the Oasis SDK. After successfully completing all the\ndescribed steps you will be able to start building your first smart contract\non Oasis!"}),"\n",(0,n.jsxs)(t.p,{children:["If you already have everything set up, feel free to skip to the ",(0,n.jsx)(t.a,{href:"/build/tools/other-paratimes/cipher/hello-world",children:"next\nchapter"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,n.jsx)(t.p,{children:"The following is a list of prerequisites required to start developing using the\nOasis SDK:"}),"\n",(0,n.jsx)(t.h3,{id:"rust",children:(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})}),"\n",(0,n.jsxs)(t.p,{children:["We follow ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust upstream's recommendation"})," on using\n",(0,n.jsx)(t.a,{href:"https://rustup.rs/",children:"rustup"})," to install and manage Rust versions."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"rustup cannot be installed alongside a distribution packaged Rust version. You\nwill need to remove it (if it's present) before you can start using rustup."})}),"\n",(0,n.jsx)(t.p,{children:"Install it by running:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If you want to avoid directly executing a shell script fetched the\ninternet, you can also ",(0,n.jsxs)(t.a,{href:"https://rust-lang.github.io/rustup/installation/other.html",children:["download ",(0,n.jsx)(t.code,{children:"rustup-init"})," executable for your platform"]}),"\nand run it manually."]})}),"\n",(0,n.jsxs)(t.p,{children:["This will run ",(0,n.jsx)(t.code,{children:"rustup-init"})," which will download and install the latest stable\nversion of Rust on your system."]}),"\n",(0,n.jsx)(t.h4,{id:"rust-toolchain-version",children:"Rust Toolchain Version"}),"\n",(0,n.jsxs)(t.p,{children:["The version of the Rust toolchain we use in the Oasis SDK is specified in the\n",(0,n.jsx)(t.a,{href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/rust-toolchain.toml",children:(0,n.jsx)(t.code,{children:"rust-toolchain.toml"})})," file."]}),"\n",(0,n.jsxs)(t.p,{children:["The rustup-installed versions of ",(0,n.jsx)(t.code,{children:"cargo"}),", ",(0,n.jsx)(t.code,{children:"rustc"})," and other tools will\n",(0,n.jsx)(t.a,{href:"https://github.com/rust-lang/rustup/blob/master/README.md#override-precedence",children:"automatically detect this file and use the appropriate version of the Rust\ntoolchain"}),". When you are building applications that\nuse the SDK, it is recommended that you copy the same ",(0,n.jsx)(t.a,{href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/rust-toolchain.toml",children:(0,n.jsx)(t.code,{children:"rust-toolchain.toml"})}),"\nfile to your project's top-level directory as well."]}),"\n",(0,n.jsx)(t.p,{children:"To install the appropriate version of the Rust toolchain, make sure you are\nin the project directory and run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"rustup show\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will automatically install the appropriate Rust toolchain (if not\npresent) and output something similar to:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"...\n\nactive toolchain\n----------------\n\nnightly-2022-08-22-x86_64-unknown-linux-gnu (overridden by '/code/rust-toolchain')\nrustc 1.65.0-nightly (c0941dfb5 2022-08-21)\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"optional-go",children:["(OPTIONAL) ",(0,n.jsx)(t.a,{href:"https://golang.org",children:"Go"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Required if you want to use the Go Client SDK."})}),"\n",(0,n.jsxs)(t.p,{children:["At least version ",(0,n.jsx)(t.strong,{children:"1.20.2"})," is required. If your distribution provides a\nnew-enough version of Go, just use that."]}),"\n",(0,n.jsx)(t.p,{children:"Otherwise:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"install the Go version provided by your distribution,"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.a,{href:"https://tip.golang.org/doc/code.html#GOPATH",children:["ensure ",(0,n.jsx)(t.code,{children:"$GOPATH/bin"})," is in your ",(0,n.jsx)(t.code,{children:"PATH"})]}),","]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://golang.org/doc/install#extra_versions",children:"install the desired version of Go"}),", e.g. 1.20.5, with2"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"go get golang.org/dl/go1.20.2\ngo1.20.5 downloa2\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"oasis-cli-installation",children:"Oasis CLI Installation"}),"\n",(0,n.jsxs)(t.p,{children:["The rest of the guide uses the Oasis CLI as an easy way to interact with the\nsmart contract. You can use ",(0,n.jsx)(t.a,{href:"https://github.com/oasisprotocol/cli/releases",children:"one of the binary releases"})," or\n",(0,n.jsx)(t.a,{href:"https://github.com/oasisprotocol/cli/blob/master/README.md",children:"compile it yourself"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);