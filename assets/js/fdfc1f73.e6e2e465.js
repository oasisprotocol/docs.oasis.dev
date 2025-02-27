"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[2035],{9469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"node/run-your-node/prerequisites/system-configuration","title":"System Configuration","description":"This page outlines the modifications necessary that should be made to the","source":"@site/docs/node/run-your-node/prerequisites/system-configuration.mdx","sourceDirName":"node/run-your-node/prerequisites","slug":"/node/run-your-node/prerequisites/system-configuration","permalink":"/node/run-your-node/prerequisites/system-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/system-configuration.mdx","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{},"sidebar":"operators","previous":{"title":"Install the Oasis Node","permalink":"/node/run-your-node/prerequisites/oasis-node"},"next":{"title":"Set up Trusted Execution Environment (TEE)","permalink":"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee"}}');var t=s(4848),i=s(8453),o=s(5537),a=s(9329);const l={},c="System Configuration",d={},u=[{value:"Create a user",id:"create-a-user",level:2},{value:"Increase file descriptor limit",id:"increase-file-descriptor-limit",level:2},{value:"AppArmor profiles",id:"apparmor-profiles",level:2},{value:"Example snippets for different setups",id:"example-snippets-for-different-setups",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"system-configuration",children:"System Configuration"})}),"\n",(0,t.jsx)(n.p,{children:"This page outlines the modifications necessary that should be made to the\nconfiguration of the system where you are running an Oasis Node instance. To\nprepare the system for running an Oasis Node, we will guide you through the\nprocess of creating a dedicated user account, increasing the file descriptor\nlimit and optional AppArmor profiles."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-user",children:"Create a user"}),"\n",(0,t.jsxs)(n.p,{children:["Nothing in Oasis Node requires elevated privileges, so running the Oasis Node\nwith root privileges is not allowed. Attempting to run the ",(0,t.jsx)(n.code,{children:"oasis-node"})," process\nas the root user will terminate immediately on startup. You will need to\ncreate a dedicated user account to manage the Oasis Node processes."]}),"\n",(0,t.jsx)(n.p,{children:"To create a new user run as root:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"adduser oasis\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have an existing data directory, change its ownership to the ",(0,t.jsx)(n.code,{children:"oasis"}),"\nuser. If not, you may skip this step."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chown -R oasis /node/data\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Adjust the user as appropriate to your setup. For example, setting the ",(0,t.jsx)(n.code,{children:"oasis"}),"\nuser's Shell to ",(0,t.jsx)(n.code,{children:"/usr/sbin/nologin"})," prevents (accidentally) logging in as this\nuser. See the following examples on how to create a user on different systems."]}),(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(a.A,{value:"Ubuntu",children:[(0,t.jsx)(n.p,{children:"As root, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"adduser --system oasis --shell /usr/sbin/nologin\n"})})]}),(0,t.jsxs)(a.A,{value:"Fedora",children:[(0,t.jsx)(n.p,{children:"As root, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"useradd -r -s /usr/sbin/nologin\n"})})]}),(0,t.jsxs)(a.A,{value:"Ansible",children:[(0,t.jsx)(n.p,{children:"Add the following task to your playbook:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"- name: Create oasis user\n  ansible.builtin.user:\n    name: oasis\n    comment: Oasis Services user\n    system: yes\n    shell: /usr/sbin/nologin\n"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"increase-file-descriptor-limit",children:"Increase file descriptor limit"}),"\n",(0,t.jsx)(n.p,{children:"Make sure that the user under which you are running your Oasis Node has a\nhigh-enough file descriptor limit as the databases can have many opened files.\nRunning out of file descriptors can lead to the node stopping unexpectedly."}),"\n",(0,t.jsx)(n.p,{children:"You can check the file descriptor limit by running the following as the same\nuser that will run the Oasis Node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ulimit -n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If this number is lower than 102400 you should consider increasing it by\nupdating your system configuration. You can configure ",(0,t.jsx)(n.em,{children:"temporary"})," limits by\nrunning:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ulimit -n 102400\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This limit will only apply to any processes started from the same shell after\nthe command was executed. If you want to make the change ",(0,t.jsx)(n.em,{children:"permanent"}),", you have\nthe following options:"]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(a.A,{value:"systemd",children:[(0,t.jsxs)(n.p,{children:["In case you are running your Oasis Node process via\n",(0,t.jsx)(n.a,{href:"https://systemd.io/",children:"systemd"}),", you can add the following directive under the\n",(0,t.jsx)(n.code,{children:"[Service]"})," section:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"LimitNOFILE=102400\n"})})]}),(0,t.jsxs)(a.A,{value:"Docker",children:[(0,t.jsxs)(n.p,{children:["If you are running the Oasis Node via ",(0,t.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," you can\npass the following option to ",(0,t.jsx)(n.code,{children:"docker run"})," in order to increase the limit to\ndesired values:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"--ulimit nofile=102400:1048576\n"})})]}),(0,t.jsxs)(a.A,{value:"limits.conf",children:[(0,t.jsxs)(n.p,{children:["As ",(0,t.jsx)(n.code,{children:"root"}),", create a system-wide ",(0,t.jsx)(n.em,{children:"resource limits"})," configuration File in\n",(0,t.jsx)(n.code,{children:"/etc/security/limits.d/99-oasis-node.conf"})," with content similar to the\nfollowing example:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"*        soft    nofile    102400\n*        hard    nofile    1048576\n"})}),(0,t.jsxs)(n.p,{children:["You can replace ",(0,t.jsx)(n.code,{children:"*"})," with the name of the user that is running the Oasis Node in\ncase you only want to change the limits for that particular user."]}),(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The change above will increase the limit for all processes and not just the\nOasis Node."})}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"In order for the changes to take effect a system restart may be required."})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"apparmor-profiles",children:"AppArmor profiles"}),"\n",(0,t.jsx)(n.p,{children:"In case your system is using AppArmor and is restricting unprivileged user namespace\ncreation, you may need to allow them for Bubblewrap (the sandbox that Oasis Node is\nusing to execute runtimes)."}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following policy in ",(0,t.jsx)(n.code,{children:"/etc/apparmor.d/bwrap"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"abi <abi/4.0>,\ninclude <tunables/global>\n\nprofile bwrap /usr/bin/bwrap flags=(unconfined) {\n  userns,\n\n  # Site-specific additions and overrides. See local/README for details.\n  include if exists <local/bwrap>\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then reload AppArmor policies by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl reload apparmor.service\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-snippets-for-different-setups",children:"Example snippets for different setups"}),"\n",(0,t.jsxs)(n.p,{children:["You may find the following snippets helpful in case you are running ",(0,t.jsx)(n.code,{children:"oasis-node"}),"\nprocess with systemd, Docker or runit."]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(a.A,{value:"systemd",children:[(0,t.jsxs)(n.p,{children:["Add a ",(0,t.jsxs)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.exec.html#User=",children:[(0,t.jsx)(n.code,{children:"User"})," directive"]})," to the Oasis service's systemd unit file:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\nUser=oasis\n...\n"})}),(0,t.jsxs)(n.p,{children:["Below can be found a simple systemd unit file for ",(0,t.jsx)(n.code,{children:"oasis-node"})," that can be used\nas a starting point."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[Unit]\nDescription=Oasis Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=oasis\nWorkingDirectory=/node/data\nExecStart=/node/bin/oasis-node --config /node/etc/config.yml\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=1024000\n\n[Install]\nWantedBy=multi-user.target\n"})})]}),(0,t.jsxs)(a.A,{value:"Docker",children:[(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#user",children:[(0,t.jsx)(n.code,{children:"USER"})," instruction"]})," to your Oasis service's Dockerfile:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\nUSER oasis\n...\n"})})]}),(0,t.jsxs)(a.A,{value:"runit",children:[(0,t.jsxs)(n.p,{children:["Wrap the invocation in a ",(0,t.jsxs)(n.a,{href:"http://smarden.org/runit/chpst.8.html",children:[(0,t.jsx)(n.code,{children:"chpst"})," command"]}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chpst -u oasis oasis-node ...\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,n,s)=>{s.d(n,{A:()=>o});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var i=s(4848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,o),hidden:s,children:n})}},5537:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(6540),t=s(4164),i=s(5627),o=s(6347),a=s(372),l=s(604),c=s(1861),d=s(8749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:s,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=s(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(4848);function y(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=a[s].value;t!==r&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);