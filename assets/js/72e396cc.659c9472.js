"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[9743],{5900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"node/run-your-node/sentry-node","title":"Sentry Node","description":"This guide provides instructions for a deployment using the Sentry node architecture to protect validator nodes from being directly exposed on the public network.","source":"@site/docs/node/run-your-node/sentry-node.md","sourceDirName":"node/run-your-node","slug":"/node/run-your-node/sentry-node","permalink":"/node/run-your-node/sentry-node","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/sentry-node.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{},"sidebar":"operators","previous":{"title":"Upgrading Key Managers","permalink":"/node/run-your-node/keymanager-node/key-manager-upgrade"},"next":{"title":"Maintenance","permalink":"/node/run-your-node/maintenance"}}');var o=s(4848),t=s(8453);const r={},d="Sentry Node",a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring the Oasis Sentry Node",id:"configuring-the-oasis-sentry-node",level:2},{value:"Initializing Sentry Node",id:"initializing-sentry-node",level:3},{value:"Configuring Sentry Node",id:"configuring-sentry-node",level:3},{value:"Configuring the Oasis Validator Node",id:"configuring-the-oasis-validator-node",level:2},{value:"Initializing Validator Node",id:"initializing-validator-node",level:3},{value:"Configuring the Validator Node",id:"configuring-the-validator-node",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"sentry-node",children:"Sentry Node"})}),"\n",(0,o.jsx)(n.p,{children:"This guide provides instructions for a deployment using the Sentry node architecture to protect validator nodes from being directly exposed on the public network."}),"\n",(0,o.jsxs)(n.p,{children:["This guide assumes a setup where an Oasis validator node is only accessible over a private network, with sentry nodes having access to it. The guide does not cover setting this infrastructure up. Knowledge of ",(0,o.jsx)(n.a,{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",children:"Tendermint's Sentry Node architecture"})," is assumed as well."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"This is only an example of a Sentry node deployment, and we take no responsibility for mistakes contained therein. Make sure you understand what you are doing."})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Before following this guide, make sure you've read the ",(0,o.jsx)(n.a,{href:"/node/run-your-node/prerequisites/oasis-node",children:"Prerequisites"})," and ",(0,o.jsx)(n.a,{href:"/node/run-your-node/validator-node",children:"Running a Node on the Network"})," guides and created your Entity."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-oasis-sentry-node",children:"Configuring the Oasis Sentry Node"}),"\n",(0,o.jsx)(n.h3,{id:"initializing-sentry-node",children:"Initializing Sentry Node"}),"\n",(0,o.jsx)(n.p,{children:"Sentry node identity keys can be initialized with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"oasis-node identity init --datadir /node/data\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuring-sentry-node",children:"Configuring Sentry Node"}),"\n",(0,o.jsxs)(n.p,{children:["An Oasis node can be configured to run as a sentry node by setting the ",(0,o.jsx)(n.code,{children:"worker.sentry.enabled"})," flag. The ",(0,o.jsx)(n.code,{children:"tendermint.sentry.upstream_address"})," flag can be used to configure a list of nodes that will be protected by the sentry node."]}),"\n",(0,o.jsxs)(n.p,{children:["An example of full ",(0,o.jsx)(n.code,{children:"YAML"})," configuration of a sentry node is below."]}),"\n",(0,o.jsx)(n.p,{children:"Before using this configuration you should collect the following information to replace the  variables present in the configuration file:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"{{ external_address }}"}),": This is the external IP on which sentry node will be reachable."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"{{ seed_node_address }}"}),": This the seed node address of the form ",(0,o.jsx)(n.code,{children:"ID@IP:port"}),". You can find the current Oasis Seed Node address in the Network Parameters page (",(0,o.jsx)(n.a,{href:"/node/mainnet/",children:"Mainnet"}),", ",(0,o.jsx)(n.a,{href:"/node/testnet/",children:"Testnet"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ validator_tendermint_id }}"}),": This is the Tendermint ID (address) of the Oasis validator node that will be protected by the sentry node. This address can be obtained by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"oasis-node identity tendermint show-node-address --datadir /node/data\n"})}),"\n",(0,o.jsx)(n.p,{children:"on the validator node."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ validator_private_address }}"}),": This is the (presumably) private address on which validator should be reachable from the sentry node."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ validator_sentry_client_grpc_public_key }}"}),": This is the public TLS key of the Oasis validator node that will be protected by the sentry node. This public key can be obtained by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" oasis-node identity show-sentry-client-pubkey --datadir /node/data\n"})}),"\n",(0,o.jsxs)(n.p,{children:["on the validator node. Note that the above command is only available in ",(0,o.jsx)(n.code,{children:"oasis-node"})," from version 20.8.1 onward."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'mode: client\ncommon:\n    data_dir: /node/data\n    log:\n        format: JSON\n        level:\n            cometbft: warn\n            cometbft/context: error\n            # Per-module log levels. Longest prefix match will be taken. Fallback to\n            # "default", if no match.\n            default: debug\n            # By default logs are output to stdout. If you\'re running this in docker \n            # keep the default\n            #file: /var/log/oasis-node.log\nconsensus:\n    external_address: tcp://{{ external_address }}:26656\n    listen_address: tcp://0.0.0.0:26656\n    sentry_upstream_addresses:\n        - {{ validator_tendermint_id }}@{{ validator_private_address }}:26656\ngenesis:\n    # Path to the genesis file for the current version of the network.\n    file: /node/etc/genesis.json\np2p:\n    seeds:\n        # List of seed nodes to connect to.\n        # NOTE: You can add additional seed nodes to this list if you want.\n        - {{ seed_node_address }}\nsentry:\n    # Port used by validator nodes to query sentry node for registry\n    # information.\n    # IMPORTANT: Only validator nodes protected by the sentry node should have\n    # access to this port. This port should not be exposed on the public\n    # network.\n    control:\n        authorized_pubkeys:\n            - {{ validator_sentry_client_grpc_public_key }}\n        port: 9009\n    enabled: true\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Multiple sentry nodes can be provisioned following the above steps."})}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-oasis-validator-node",children:"Configuring the Oasis Validator Node"}),"\n",(0,o.jsx)(n.p,{children:"In this setup the Oasis validator node should not be exposed directly on the public network. The Oasis validator only needs to be able to connect to its sentry nodes, preferably via a private network."}),"\n",(0,o.jsx)(n.h3,{id:"initializing-validator-node",children:"Initializing Validator Node"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If your validator node is already registered and running in a non-sentry setup, this step can be skipped as the Oasis validator will update its address in the Registry automatically once we redeploy it with new configuration."})}),"\n",(0,o.jsxs)(n.p,{children:["When you are ",(0,o.jsx)(n.a,{href:"/node/run-your-node/validator-node#configuration",children:"initializing a validator node"}),", you should use the sentry node's external address and Consensus ID in the ",(0,o.jsx)(n.code,{children:"node.consensus_address"})," flag. If you are running multiple sentry nodes, you can specify the ",(0,o.jsx)(n.code,{children:"node.consensus_address"})," flag multiple times."]}),"\n",(0,o.jsxs)(n.p,{children:["To initialize a validator node with 2 sentry nodes, run the following commands from the ",(0,o.jsx)(n.code,{children:"/localhostdir/node"})," directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export SENTRY1_CONSENSUS_ID=<YOUR_SENTRY1_CONSENSUS_ID_B64>\nexport SENTRY1_STATIC_IP=<YOUR_SENTRY1_STATIC_IP>\nexport SENTRY2_CONSENSUS_ID=<YOUR_SENTRY2_CONSENSUS_ID_B64>\nexport SENTRY2_STATIC_IP=<YOUR_SENTRY2_STATIC_IP>\noasis-node registry node init \\\n  --signer.backend file \\\n  --signer.dir /localhostdir/entity \\\n  --node.consensus_address $SENTRY1_CONSENSUS_ID@$SENTRY1_STATIC_IP:26656 \\\n  --node.consensus_address $SENTRY2_CONSENSUS_ID@$SENTRY2_STATIC_IP:26656 \\\n  --node.is_self_signed \\\n  --node.role validator\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SENTRY_CONSENSUS_ID"}),": This is the Consensus ID of the sentry node in base64 format. This ID can be obtained from ",(0,o.jsx)(n.code,{children:"consensus_pub.pem"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sed -n 2p /node/data/consensus_pub.pem\n"})}),(0,o.jsx)(n.p,{children:"on the sentry node."})]}),"\n",(0,o.jsx)(n.h3,{id:"configuring-the-validator-node",children:"Configuring the Validator Node"}),"\n",(0,o.jsx)(n.p,{children:"There are some configuration changes needed for the Oasis validator node to enable proxying through its sentry node. Most of these flags should be familiar from the Tendermint sentry node architecture."}),"\n",(0,o.jsxs)(n.p,{children:["Since the validator node will not have an external address, the ",(0,o.jsx)(n.code,{children:"consensus.tendermint.core.external_address"})," flag should be skipped. Similarly, the ",(0,o.jsx)(n.code,{children:"consensus.tendermint.p2p.seed"})," flag can be skipped, as the ",(0,o.jsx)(n.code,{children:"oasis-node"})," won't be directly connecting to any of the seed nodes."]}),"\n",(0,o.jsxs)(n.p,{children:["Tendermint Peer Exchange should be disabled on the validator with the ",(0,o.jsx)(n.code,{children:"consensus.tendermint.p2p.disable_peer_exchange"})," flag."]}),"\n",(0,o.jsxs)(n.p,{children:["Sentry nodes can also be configured as Tendermint Persistent-Peers with the ",(0,o.jsx)(n.code,{children:"consensus.tendermint.p2p.persistent_peer"})," flag."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the familiar Tendermint setup above, the node needs to be configured to query sentry nodes for external addresses every time the validator performs a re-registration. This is configured with the ",(0,o.jsx)(n.code,{children:"worker.sentry.address"})," flag."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"worker.sentry.address"})," flag is of format: ",(0,o.jsx)(n.code,{children:"<pubkey>@ip:port"})," where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<pubkey>"}),": Is the sentry node's TLS public key."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ip:port"}),": Is the (private) address of the sentry node's control endpoint."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Putting it all together, an example configuration of a validator node in the sentry node architecture is given below."}),"\n",(0,o.jsxs)(n.p,{children:["Before using this configuration you should collect the following information to replace the ",(0,o.jsx)(n.code,{children:"{{ var_name }}"})," variables present in the configuration file:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ sentry_node_private_ip }}"}),": This is the private IP address of the sentry node over which sentry node should be accessible to the validator."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ sentry_node_grpc_public_key }}"}),": This is the sentry node's control endpoint TLS public key. This ID can be obtained by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" oasis-node identity show-tls-pubkey --datadir /node/data\n"})}),"\n",(0,o.jsxs)(n.p,{children:["on the sentry node. Note that the above command is only available in ",(0,o.jsx)(n.code,{children:"oasis-node"})," from version 20.8.1 onward."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ sentry_node_tendermint_id }}"}),": This is the Tendermint ID (address) of the sentry node that will be configured as a Persistent Peer. This ID can be obtained by running:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"oasis-node identity tendermint show-node-address --datadir /node/data\n"})}),"\n",(0,o.jsx)(n.p,{children:"on the sentry node."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{{ entity_id }}"}),": This is node's entity ID from ",(0,o.jsx)(n.code,{children:"entity.json"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'mode: validator\ncommon:\n    data_dir: /node/data\n    log:\n        format: JSON\n        level:\n            cometbft: warn\n            cometbft/context: error\n            # Per-module log levels. Longest prefix match will be taken.\n            # Fallback to "default", if no match.\n            default: debug\n        # By default logs are output to stdout. If you\'re running this in docker keep\n        # the default\n        #file: /var/log/oasis-node.log\n\nconsensus:\n    listen_address: tcp://0.0.0.0:26656\n    p2p:\n        disable_peer_exchange: true\n        persistent_peers:\n            - {{ sentry_node_tendermint_id }}@{{ sentry_node_private_ip }}:26656\n\ngenesis:\n    # Path to the genesis file for the current version of the network.\n    file: /node/etc/genesis.json\n\nregistration:\n    # In order for the node to register itself, the entity ID must be set.\n    entity_id: {{ entity_id }}\n\nsentry:\n    address:\n        - {{ sentry_node_grpc_public_key }}@{{ sentry_node_private_ip }}:9009\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Make sure the ",(0,o.jsx)(n.code,{children:"consensus"})," port (default: ",(0,o.jsx)(n.code,{children:"26656"}),") and ",(0,o.jsx)(n.code,{children:"p2p.port"})," (default: ",(0,o.jsx)(n.code,{children:"9200"}),") are exposed and publicly\naccessible on the internet (for ",(0,o.jsx)(n.code,{children:"TCP"})," and ",(0,o.jsx)(n.code,{children:"UDP"})," traffic)."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);