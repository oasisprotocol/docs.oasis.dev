"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[1376],{2722:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"adrs/0012-runtime-message-results","title":"ADR 0012: Runtime Message Results","description":"Component","source":"@site/docs/adrs/0012-runtime-message-results.md","sourceDirName":"adrs","slug":"/adrs/0012-runtime-message-results","permalink":"/adrs/0012-runtime-message-results","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/adrs/edit/main/0012-runtime-message-results.md","tags":[],"version":"current","lastUpdatedAt":1710755515000,"frontMatter":{},"sidebar":"adrs","previous":{"title":"ADR 0011: Incoming Runtime Messages","permalink":"/adrs/0011-incoming-runtime-messages"},"next":{"title":"ADR 0013: Runtime Upgrade Improvements","permalink":"/adrs/0013-runtime-upgrades"}}');var i=n(4848),r=n(8453);const o={},a="ADR 0012: Runtime Message Results",c={},l=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Message Execution Results",id:"message-execution-results",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"adr-0012-runtime-message-results",children:"ADR 0012: Runtime Message Results"})}),"\n",(0,i.jsx)(s.h2,{id:"component",children:"Component"}),"\n",(0,i.jsx)(s.p,{children:"Oasis Core"}),"\n",(0,i.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"2021-12-04: Initial version"}),"\n",(0,i.jsx)(s.li,{children:"2021-12-10: Extend the implementation section"}),"\n",(0,i.jsx)(s.li,{children:"2022-01-27: Update the concrete result types"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(s.p,{children:"Accepted"}),"\n",(0,i.jsx)(s.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(s.p,{children:["Currently, the results of emitted runtime messages are ",(0,i.jsx)(s.code,{children:"MessageEvent"}),"s, which\nonly provide information whether the message execution was successful or not.\nFor various use-cases additional information about message results would be\nuseful."]}),"\n",(0,i.jsxs)(s.p,{children:["One of such is supporting staking by runtimes. Currently, a runtime can emit an\n",(0,i.jsx)(s.code,{children:"AddEscrow"})," message, but is unaware of the actual amount of shares it obtained\nas a result of the added escrow. For some use-cases (e.g. runtime staking user\ndeposited funds) this information is crucial for accounting."]}),"\n",(0,i.jsxs)(s.p,{children:["Similarly, for ",(0,i.jsx)(s.code,{children:"ReclaimEscrow"}),", the runtime doesn't have the direct information\nat which epoch the stake gets debonded."]}),"\n",(0,i.jsx)(s.p,{children:"The only way to currently obtain this data is to subscribe to consensus events,\nsomething which runtime doesn't have access to."}),"\n",(0,i.jsxs)(s.p,{children:["Adding results to ",(0,i.jsx)(s.code,{children:"MessageEvent"})," solves both of the mentioned use cases:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["for ",(0,i.jsx)(s.code,{children:"AddEscrow"})," the result should contain amount of shares obtained with the\nescrow"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["for ",(0,i.jsx)(s.code,{children:"ReclaimEscrow"})," the result should contain the amount of shares and epoch\nat which the stake gets debonded"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(s.p,{children:["Implement support for arbitrary result data in ",(0,i.jsx)(s.code,{children:"MessageEvent"})," runtime message\nresults."]}),"\n",(0,i.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Result field is added to ",(0,i.jsx)(s.code,{children:"roothash.MessageEvent"})," struct:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:'// MessageEvent is a runtime message processed event.\ntype MessageEvent struct {\n        Module string `json:"module,omitempty"`\n        Code   uint32 `json:"code,omitempty"`\n        Index  uint32 `json:"index,omitempty"`\n\n        // Result contains message execution results for successfully executed messages.\n        Result cbor.RawMessage `json:"result,omitempty"\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Result"})," field is runtime message specific and is present only when the\nmessage execution was successful (",(0,i.jsx)(s.code,{children:"Code"})," is ",(0,i.jsx)(s.code,{children:"errors.CodeNoError"}),")."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ExecuteMessage"})," method in ",(0,i.jsx)(s.code,{children:"MessageSubscriber"})," interface is updated to include\na response:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:"// MessageSubscriber is a message subscriber interface.\ntype MessageSubscriber interface {\n        // ExecuteMessage executes a given message.\n        ExecuteMessage(ctx *Context, kind, msg interface{}) (interface{}, error)\n}\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Publish"})," method of the ",(0,i.jsx)(s.code,{children:"MessageDispatcher"})," interface is updated to include\nthe response:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:"// MessageDispatcher is a message dispatcher interface.\ntype MessageDispatcher interface {\n        // Publish publishes a message of a given kind by dispatching to all subscribers.\n        // Subscribers can return a result, but at most one subscriber should return a\n        // non-nil result to any published message. Panics in case more than one subscriber\n        // returns a non-nil result.\n        //\n        // In case there are no subscribers ErrNoSubscribers is returned.\n        Publish(ctx *Context, kind, msg interface{}) (interface{}, error)\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["In case the ",(0,i.jsx)(s.code,{children:"Publish"})," ",(0,i.jsx)(s.code,{children:"error"})," is ",(0,i.jsx)(s.code,{children:"nil"})," the Roothash backend propagates the\nresult to the emitted ",(0,i.jsx)(s.code,{children:"MessageEvent"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["With these changes the runtime is able to obtain message execution results via\n",(0,i.jsx)(s.code,{children:"MessageEvents"})," in ",(0,i.jsx)(s.code,{children:"RoundResults"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"message-execution-results",children:"Message Execution Results"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"AddEscrow"})," message execution result is the ",(0,i.jsx)(s.code,{children:"AddEscrowResult"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:'type AddEscrowResult struct {\n        Owner     Address           `json:"owner"`\n        Escrow    Address           `json:"escrow"`\n        Amount    quantity.Quantity `json:"amount"`\n        NewShares quantity.Quantity `json:"new_shares"`\n}\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ReclaimEscrow"})," message execution result is the\n",(0,i.jsx)(s.code,{children:"ReclaimEscrowResult"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:'type ReclaimEscrowResult struct {\n        Owner           Address           `json:"owner"`\n        Escrow          Address           `json:"escrow"`\n        Amount          quantity.Quantity `json:"amount"`\n        DebondingShares quantity.Quantity `json:"debonding_shares"`\n        RemainingShares quantity.Quantity `json:"remaining_shares"`\n        DebondEndTime   beacon.EpochTime  `json:"debond_end_time"`\n}\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Transfer"})," message execution result is the ",(0,i.jsx)(s.code,{children:"TransferResult"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:'type TransferResult struct {\n        From   Address           `json:"from"`\n        To     Address           `json:"to"`\n        Amount quantity.Quantity `json:"amount"`\n}\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Withdraw"})," message execution result is the ",(0,i.jsx)(s.code,{children:"WithdrawResult"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-golang",children:'type WithdrawResult struct {\n        Owner        Address           `json:"owner"`\n        Beneficiary  Address           `json:"beneficiary"`\n        Allowance    quantity.Quantity `json:"allowance"`\n        AmountChange quantity.Quantity `json:"amount_change"`\n}\n'})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"UpdateRuntime"})," message execution result is the registry ",(0,i.jsx)(s.code,{children:"Runtime"})," descriptor."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(s.h3,{id:"positive",children:"Positive"}),"\n",(0,i.jsx)(s.p,{children:"All the functionality for runtimes to support staking is implemented."}),"\n",(0,i.jsx)(s.h3,{id:"negative",children:"Negative"}),"\n",(0,i.jsx)(s.p,{children:"Requires breaking changes."}),"\n",(0,i.jsx)(s.h3,{id:"neutral",children:"Neutral"}),"\n",(0,i.jsx)(s.h3,{id:"alternatives-considered",children:"Alternatives considered"}),"\n",(0,i.jsx)(s.p,{children:"Add support to runtimes for subscribing to consensus events. A more heavyweight\nsolution, that can still be implemented in future if desired. Decided against it\ndue to simplicity of the message events solution for the present use cases."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);