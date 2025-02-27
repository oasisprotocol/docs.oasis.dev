"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[1927],{9849:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"general/manage-tokens/cli/addressbook","title":"Address book","description":"Storing your blockchain contacts for future use","source":"@site/docs/general/manage-tokens/cli/addressbook.md","sourceDirName":"general/manage-tokens/cli","slug":"/general/manage-tokens/cli/addressbook","permalink":"/general/manage-tokens/cli/addressbook","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/cli/edit/master/docs/addressbook.md","tags":[],"version":"current","lastUpdatedAt":1739958268000,"frontMatter":{"title":"Address book","description":"Storing your blockchain contacts for future use"},"sidebar":"general","previous":{"title":"Transaction","permalink":"/general/manage-tokens/cli/transaction"},"next":{"title":"ROFL","permalink":"/general/manage-tokens/cli/rofl"}}');var o=s(4848),r=s(8453);const d={title:"Address book",description:"Storing your blockchain contacts for future use"},t="Address Book",i={},c=[{value:"Add a New Entry",id:"add",level:2},{value:"List Entries",id:"list",level:2},{value:"Show Entry Details",id:"show",level:2},{value:"Rename an Entry",id:"rename",level:2},{value:"Remove an Entry",id:"remove",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"address-book",children:"Address Book"})}),"\n",(0,o.jsxs)(n.p,{children:["If you repeatedly transfer tokens to the same recipients or if you just want to\nstore an arbitrary address for future use, you can use the ",(0,o.jsx)(n.code,{children:"addressbook"}),"\ncommand to ",(0,o.jsx)(n.strong,{children:"name the address and store it in your address book"}),". Entries\nin your address book are behaving similarly to the\n",(0,o.jsx)(n.a,{href:"/general/manage-tokens/cli/wallet",children:"accounts stored in your wallet"}),", for example when checking the balance\nof the account or sending tokens to. Of course, you cannot sign any\ntransactions with the address stored in your address book since you do not\npossess the private key of that account. Both the Oasis native and the\nEthereum-compatible addresses can be stored."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"The name of the address book entry may not clash with any of the account names\nin your wallet. The Oasis CLI will prevent you from doing so."})}),"\n",(0,o.jsx)(n.h2,{id:"add",children:"Add a New Entry"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"addressbook add <name> <address>"})," to name the address and store it in your\naddress book."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook add mike oasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook add meghan 0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, you can for example use the entry name in you address book to send the\ntokens to. In this case, we're sending ",(0,o.jsx)(n.code,{children:"2.5 TEST"})," to ",(0,o.jsx)(n.code,{children:"meghan"})," on Sapphire\nTestnet:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis account transfer 2.5 meghan\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"You are about to sign the following transaction:\nFormat: plain\nMethod: accounts.Transfer\nBody:\n  To: meghan (oasis1qrjzcve7y6qp3nqs3n7ghavw68vkdh3epcv64ega)\n  Amount: 2.5 ROSE\nAuthorized signer(s):\n  1. ArEjDxsPfDvfeLlity4mjGzy8E/nI4umiC8vYQh+eh/c (secp256k1eth)\n     Nonce: 0\nFee:\n  Amount: 0.0002316 ROSE\n  Gas limit: 2316\n  (gas price: 0.0000001 ROSE per gas unit)\n\nNetwork:  mainnet\nParaTime: emerald\nAccount:  eugene\n"})}),"\n",(0,o.jsx)(n.h2,{id:"list",children:"List Entries"}),"\n",(0,o.jsxs)(n.p,{children:["You can list all entries in your address book by invoking ",(0,o.jsx)(n.code,{children:"addressbook list"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook list\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NAME  \tADDRESS                                        \nmeghan\t0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1    \t\nmike  \toasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\t\n"})}),"\n",(0,o.jsx)(n.h2,{id:"show",children:"Show Entry Details"}),"\n",(0,o.jsxs)(n.p,{children:["You can check the details such as the native Oasis address of the Ethereum\naccount or simply check, if an entry exists in the address book, by running\n",(0,o.jsx)(n.code,{children:"addressbook show <name>"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook show meghan\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Name:             meghan\nEthereum address: 0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1\nNative address:   oasis1qrjzcve7y6qp3nqs3n7ghavw68vkdh3epcv64ega\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook show mike\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Name:             mike\nNative address:   oasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\n"})}),"\n",(0,o.jsx)(n.h2,{id:"rename",children:"Rename an Entry"}),"\n",(0,o.jsxs)(n.p,{children:["You can always rename the entry in your address book by using\n",(0,o.jsx)(n.code,{children:"addressbook rename <old_name> <new_name>"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook list\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NAME  \tADDRESS                                        \nmeghan\t0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1    \t\nmike  \toasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\t\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook rename mike mark\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook list\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NAME  \tADDRESS                                        \nmark  \toasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\t\nmeghan\t0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1    \t\n"})}),"\n",(0,o.jsx)(n.h2,{id:"remove",children:"Remove an Entry"}),"\n",(0,o.jsxs)(n.p,{children:["To delete an entry from your address book invoke\n",(0,o.jsx)(n.code,{children:"addressbook remove <name>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook list\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NAME  \tADDRESS                                        \nmeghan\t0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1    \t\nmike  \toasis1qrtrpg56l6y2cfudwtgfuxmq5e5cyhffcsfpdqvw\t\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook remove mike\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis addressbook list\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NAME  \tADDRESS                                    \nmeghan\t0xBe8B38ED9b0794e7ab9EbEfC1e710b4F4EC6F6C1\t\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var a=s(6540);const o={},r=a.createContext(o);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);