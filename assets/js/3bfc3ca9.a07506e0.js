"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[2425],{4943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"node/grpc","title":"gRPC proxy for your Oasis node","description":"gRPC proxy for Oasis node","source":"@site/docs/node/grpc.mdx","sourceDirName":"node","slug":"/node/grpc","permalink":"/node/grpc","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/node/grpc.mdx","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{"description":"gRPC proxy for Oasis node"},"sidebar":"operators","previous":{"title":"Web3 Gateway","permalink":"/node/web3"}}');var o=t(4848),r=t(8453),i=t(547),a=t(4117);const l={description:"gRPC proxy for Oasis node"},c="gRPC proxy for your Oasis node",d={},h=[{value:"gRPC Proxy with Envoy",id:"envoy",level:2},{value:"Tunnel Unix socket via SSH",id:"tunnel-unix-socket-via-ssh",level:2},{value:"See also",id:"see-also",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"grpc-proxy-for-your-oasis-node",children:"gRPC proxy for your Oasis node"})}),"\n",(0,o.jsxs)(n.p,{children:["The Oasis node API is exposed via the ",(0,o.jsx)(n.a,{href:"/core/oasis-node/rpc",children:"gRPC protocol"}),". It enables communication\nwith external applications such as the Oasis CLI, dApps running in your browser\nthat need to perform actions on the consensus layer or a ParaTime, services for\nmonitoring and controlling your node and similar."]}),"\n",(0,o.jsx)(n.admonition,{title:"Web3 gateway",type:"tip",children:(0,o.jsxs)(n.p,{children:["The Oasis gRPC ",(0,o.jsx)(n.strong,{children:"is not related to the standardized Web3 JSON-RPC API"}),". For\nEVM-compatible dApps configure a ",(0,o.jsx)(n.a,{href:"/node/web3",children:"Web3 gateway"})," instead which is also compatible\nwith other Ethereum tooling."]})}),"\n",(0,o.jsx)(n.p,{children:"The gRPC proxy may perform the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"makes gRPC available to in-browser applications via gRPC-Web,"}),"\n",(0,o.jsx)(n.li,{children:"filters out control methods such as shutting down your node,"}),"\n",(0,o.jsx)(n.li,{children:"authentication,"}),"\n",(0,o.jsx)(n.li,{children:"load balances the traffic to multiple Oasis nodes."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This chapter will show you how to set up a ",(0,o.jsx)(n.strong,{children:"public"})," gRPC endpoint using Envoy\nso that it exposes only a ",(0,o.jsxs)(n.strong,{children:["safe subset of the ",(0,o.jsx)(n.a,{href:"/core/oasis-node/rpc#services",children:"Oasis RPC services"})]}),". The\nfinal section presents an alternative approach to communicate with your node by\n",(0,o.jsx)(n.strong,{children:"securely tunnelling the Unix socket over the network"}),", so it can safely be\nused by the client, but ",(0,o.jsx)(n.strong,{children:"does not filter out any services"}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"Never expose the UNIX socket directly!",type:"danger",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"oasis-node"})," deliberately exposes the RPC interface only via an AF_LOCAL\nsocket called ",(0,o.jsx)(n.code,{children:"internal.sock"})," located in the node's data directory.\nThis socket should ",(0,o.jsx)(n.strong,{children:"never be directly exposed over the network"})," as it has no\nauthentication and allows full control\u2014including shutting down your node."]})}),"\n",(0,o.jsx)(n.h2,{id:"envoy",children:"gRPC Proxy with Envoy"}),"\n",(0,o.jsxs)(n.p,{children:["Let's set up a typical public Oasis endpoint using the ",(0,o.jsx)(n.a,{href:"https://www.envoyproxy.io/",children:"Envoy HTTP proxy"})," with\nthe following behavior:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"whitelisted methods for checking the network status, performing queries and\nsubmitting transactions,"}),"\n",(0,o.jsx)(n.li,{children:"no control methods allowed and no queries that are CPU or I/O intensive,"}),"\n",(0,o.jsxs)(n.li,{children:["lives on ",(0,o.jsx)(n.code,{children:"grpc.example.com"})," with TLS-enabled connection and certificates\nthat you already have from Let's Encrypt,"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"internal.sock"})," of the Oasis node is accessible at ",(0,o.jsx)(n.code,{children:"/node/data/internal.sock"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Example hostnames",type:"info",children:(0,o.jsxs)(n.p,{children:["This chapter uses various hostnames under the ",(0,o.jsx)(n.code,{children:"example.com"})," domain. These only\nserve as an example and in a real deployment you should replace them with your\nown domain."]})}),"\n",(0,o.jsxs)(n.p,{children:["Envoy already has built-in support for gRPC so after installing Envoy, simply\nput the configuration below inside your ",(0,o.jsx)(n.code,{children:"envoy.yaml"})," and then execute the proxy\nwith ",(0,o.jsx)(n.code,{children:"envoy -c envoy.yaml"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="envoy.yaml"',children:'# Envoy gRPC-web proxy configuration\n---\nadmin:\n  address:\n    socket_address:\n      address: "127.0.0.1"\n      port_value: 10000\nstatic_resources:\n  listeners:\n    - name: listener_0\n      address:\n        socket_address:\n          address: "0.0.0.0"\n          port_value: 443\n      filter_chains:\n        - filters:\n            - name: envoy.filters.network.http_connection_manager\n              typed_config:\n                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\n                codec_type: AUTO\n                stat_prefix: ingress_http\n                access_log:\n                  - name: envoy.file_access_log\n                    typed_config:\n                      "@type": type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog\n                      path: /dev/stdout\n                route_config:\n                  virtual_hosts:\n                    - name: vh_0\n                      domains:\n                        - "*"\n                      routes:\n                        - match:\n                            safe_regex:\n                              regex: "\\\n/oasis-core\\\\.(\\\n  Beacon/(\\\n    ConsensusParameters|\\\n    GetBaseEpoch|\\\n    GetBeacon|\\\n    GetEpoch|\\\n    GetEpochBlock|\\\n    GetFutureEpoch)|\\\n  Consensus/(\\\n    EstimateGas|\\\n    GetBlock|\\\n    GetChainContext|\\\n    GetGenesisDocument|\\\n    GetNextBlockState|\\\n    GetParameters|\\\n    GetSignerNonce|\\\n    GetStatus|\\\n    GetTransactions|\\\n    GetTransactionsWithResults|\\\n    GetUnconfirmedTransactions|\\\n    MinGasPrice|\\\n    SubmitTx)|\\\n  Governance/(\\\n    ActiveProposals|\\\n    ConsensusParameters|\\\n    GetEvents|\\\n    PendingUpgrades|\\\n    Proposal|\\\n    Proposals|\\\n    Votes)|\\\n  NodeController/(\\\n    GetStatus)|\\\n  Registry/(\\\n    ConsensusParameters|\\\n    GetEntity|\\\n    GetEvents|\\\n    GetNode|\\\n    GetNodeByConsensusAddress|\\\n    GetNodeStatus|\\\n    GetRuntime|\\\n    GetRuntimes)|\\\n  RootHash/(\\\n    ConsensusParameters|\\\n    GetEvents|\\\n    GetGenesisBlock|\\\n    GetLastRoundResults|\\\n    GetLatestBlock|\\\n    GetRuntimeState)|\\\n  RuntimeClient/(\\\n    CheckTx|\\\n    GetBlock|\\\n    GetEvents|\\\n    GetGenesisBlock|\\\n    GetLastRetainedBlock|\\\n    GetTransactions|\\\n    GetTransactionsWithResults|\\\n    Query|\\\n    SubmitTx|\\\n    SubmitTxMeta|\\\n    SubmitTxNoWait|\\\n    WatchBlocks)|\\\n  Scheduler/(\\\n    ConsensusParameters|\\\n    GetCommittees|\\\n    GetValidators)|\\\n  Staking/(\\\n    Account|\\\n    Allowance|\\\n    CommonPool|\\\n    ConsensusParameters|\\\n    DebondingDelegationInfosFor|\\\n    DebondingDelegationsFor|\\\n    DebondingDelegationsTo|\\\n    DelegationInfosFor|\\\n    DelegationsFor|\\\n    DelegationsTo|\\\n    GetEvents|\\\n    GovernanceDeposits|\\\n    LastBlockFees|\\\n    Threshold|\\\n    TokenSymbol|\\\n    TokenValueExponent|\\\n    TotalSupply))\\\n"\n                          route:\n                            cluster: oasis_node_grpc\n                            timeout: "0s"\n                            max_stream_duration:\n                              grpc_timeout_header_max: "0s"\n                        - match:\n                            prefix: /oasis-core\n                          direct_response:\n                            status: 404\n                            body:\n                              inline_string: Only some methods are allowed on this proxy.\n                      typed_per_filter_config:\n                        envoy.filters.http.cors:\n                          "@type": type.googleapis.com/envoy.extensions.filters.http.cors.v3.CorsPolicy\n                          expose_headers: grpc-status,grpc-message,grpc-status-details-bin\n                          allow_origin_string_match:\n                            - exact: \'*\'\n                          allow_headers: content-type,x-grpc-web,x-user-agent\n                          max_age: \'1728000\'\n                http_filters:\n                  - name: envoy.health_check\n                    typed_config:\n                      "@type": type.googleapis.com/envoy.extensions.filters.http.health_check.v3.HealthCheck\n                      pass_through_mode: false\n                      headers:\n                        - name: :path\n                          string_match:\n                            exact: /health\n                  - name: envoy.filters.http.grpc_web\n                    typed_config:\n                      "@type": type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb\n                  - name: envoy.filters.http.cors\n                    typed_config:\n                      "@type": type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors\n                  - name: envoy.filters.http.router\n                    typed_config:\n                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\n          transport_socket:\n            name: envoy.transport_sockets.tls\n            typed_config:\n              "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext\n              common_tls_context:\n                alpn_protocols:\n                  - h2,http/1.1\n                tls_certificates:\n                  - certificate_chain:\n                      filename: /etc/letsencrypt/live/grpc.example.com/fullchain.pem\n                    private_key:\n                      filename: /etc/letsencrypt/live/grpc.example.com/privkey.pem\n  clusters:\n    - name: oasis_node_grpc\n      connect_timeout: 0.25s\n      load_assignment:\n        cluster_name: cluster_0\n        endpoints:\n          - lb_endpoints:\n              - endpoint:\n                  address:\n                    pipe:\n                      path: /node/data/internal.sock\n      typed_extension_protocol_options:\n        envoy.extensions.upstreams.http.v3.HttpProtocolOptions:\n          "@type": type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\n          explicit_http_config:\n            http2_protocol_options: {}\nlayered_runtime:\n  layers:\n    - name: static\n      static_layer:\n        re2:\n          max_program_size:\n            error_level: 1000000\n'})}),"\n",(0,o.jsx)(n.h2,{id:"tunnel-unix-socket-via-ssh",children:"Tunnel Unix socket via SSH"}),"\n",(0,o.jsxs)(n.p,{children:["SSH supports forwarding a Unix socket over a secure layer. The command below\nwill establish a secure shell to the ",(0,o.jsx)(n.code,{children:"example.com"})," server and then tunnel\nthe ",(0,o.jsx)(n.code,{children:"internal.sock"})," file inside the data directory to a Unix socket inside your\nhome folder:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ssh oasis@example.com -L /home/user/oasis-node-internal.sock:/node/data/internal.sock\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"/home/user/oasis-node-internal.sock"})," can now be used to safely connect to\nthe Oasis node ",(0,o.jsx)(n.strong,{children:"as if it was running locally without filtering any services"}),".\nFor example, using the ",(0,o.jsx)(n.a,{href:"/general/manage-tokens/cli/network#add-local",children:"Oasis CLI"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis network add-local my-oasis-node unix:/home/user/oasis-node-internal.sock\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"oasis network status --network my-oasis-node\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"Permanent SSH channel",type:"tip",children:(0,o.jsxs)(n.p,{children:["To make a tunneled Unix socket over SSH permanent, consider using ",(0,o.jsx)(n.a,{href:"https://www.harding.motd.ca/autossh/",children:"autossh"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(i.A,{items:[(0,a.$)("/node/run-your-node/"),(0,a.$)("/node/web3")]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},4405:(e,n,t)=>{t.d(n,{A:()=>x});t(6540);var s=t(4164),o=t(6289),r=t(3751),i=t(1430),a=t(2887),l=t(539),c=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(4848);function p(e){let{href:n,children:t}=e;return(0,h.jsx)(o.A,{href:n,className:(0,s.A)("card padding--lg",d.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:o,description:r}=e;return(0,h.jsxs)(p,{href:n,children:[(0,h.jsxs)(c.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:o,children:[t," ",o]}),r&&(0,h.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(e){let{item:n}=e;const t=(0,r.Nr)(n),s=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,h.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function g(e){let{item:n}=e;const t=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(n.docId??void 0);return(0,h.jsx)(u,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(g,{item:n});case"category":return(0,h.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}},547:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164),o=t(3751),r=t(4405),i=t(4848);function a(e){let{className:n}=e;const t=(0,o.$S)();return(0,i.jsx)(l,{items:t.items,className:n})}function l(e){const{items:n,className:t}=e;if(!n)return(0,i.jsx)(a,{...e});const l=(0,o.d1)(n);return(0,i.jsx)("section",{className:(0,s.A)("row",t),children:l.map(((e,n)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(r.A,{item:e})},n)))})}},1430:(e,n,t)=>{t.d(n,{W:()=>c});var s=t(6540),o=t(797);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const o=t.select(n),r=t.pluralForms.indexOf(o);return s[Math.min(r,s.length-1)]}(t,n,e)}}},4117:(e,n,t)=>{t.d(n,{$:()=>i});var s=t(1858),o=t(797);function r(e){for(const n of e){const e=n.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=n),"category"===n.type&&r(n.items)}}function i(e){const{siteConfig:n,siteMetadata:t}=(0,o.A)(),i=(0,s.r)();if(!i)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in i.docsSidebars)r(i.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e]){if(console.log(`Item ${e} not found. Registered sidebar items:`),console.log(globalThis.sidebarItemsMap),"throw"==n.onBrokenMarkdownLinks)throw new Error(`Unexpected: sidebar item with href ${e} does not exist.`);return globalThis.sidebarItemsMap["/general/"]}return globalThis.sidebarItemsMap[e]}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);