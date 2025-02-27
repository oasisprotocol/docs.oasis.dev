"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[6698],{674:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"node/mainnet/previous-upgrades/cobalt-upgrade","title":"Cobalt Upgrade","description":"This document provides an overview of the proposed criteria and changes for the Cobalt Mainnet upgrade. This has been reviewed and approved by community members and validators of the Oasis Network and is being reproduced and summarized here for easy access.","source":"@site/docs/node/mainnet/previous-upgrades/cobalt-upgrade.md","sourceDirName":"node/mainnet/previous-upgrades","slug":"/node/mainnet/previous-upgrades/cobalt-upgrade","permalink":"/node/mainnet/previous-upgrades/cobalt-upgrade","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/docs/edit/main/docs/node/mainnet/previous-upgrades/cobalt-upgrade.md","tags":[],"version":"current","lastUpdatedAt":1740674219000,"frontMatter":{},"sidebar":"operators","previous":{"title":"Damask Upgrade","permalink":"/node/mainnet/previous-upgrades/damask-upgrade"},"next":{"title":"Upgrade to Mainnet","permalink":"/node/mainnet/previous-upgrades/mainnet-upgrade"}}');var r=s(4848),t=s(8453);const o={},a="Cobalt Upgrade",d={},c=[{value:"Major Features",id:"major-features",level:2},{value:"Mechanics of the Upgrade",id:"mechanics-of-the-upgrade",level:2},{value:"Proposed State Changes",id:"proposed-state-changes",level:2},{value:"<strong>General</strong>",id:"general",level:3},{value:"<strong>Epoch Time</strong>",id:"epoch-time",level:3},{value:"<strong>Registry</strong>",id:"registry",level:3},{value:"<strong>Root Hash</strong>",id:"root-hash",level:3},{value:"<strong>Staking</strong>",id:"staking",level:3},{value:"<strong>Committee Scheduler</strong>",id:"committee-scheduler",level:3},{value:"<strong>Random Beacon</strong>",id:"random-beacon",level:3},{value:"<strong>Governance</strong>",id:"governance",level:3},{value:"<strong>Consensus</strong>",id:"consensus",level:3},{value:"Other",id:"other",level:3},{value:"Runtime State Root Migration",id:"runtime-state-root-migration",level:3},{value:"Launch Support",id:"launch-support",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cobalt-upgrade",children:"Cobalt Upgrade"})}),"\n",(0,r.jsxs)(n.p,{children:["This document provides an overview of the proposed criteria and changes for the Cobalt Mainnet upgrade. This has been ",(0,r.jsx)(n.a,{href:"https://github.com/oasisprotocol/community/discussions/18",children:"reviewed and approved by community members and validators of the Oasis Network"})," and is being reproduced and summarized here for easy access."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"As proposed by the community, the Cobalt upgrade on Mainnet will kick off around April 28, 2021 at 16:00 UTC."})}),"\n",(0,r.jsx)(n.h2,{id:"major-features",children:"Major Features"}),"\n",(0,r.jsxs)(n.p,{children:["All features for the Cobalt upgrade are implemented as part of ",(0,r.jsx)(n.strong,{children:"Oasis Core 21.1.1"})," which is a protocol-breaking release. Summary of the major features is as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Light Clients and Checkpoint Sync"}),": In order to make bootstrapping of new network nodes much faster, the upgrade will introduce support for light clients and restoring state from checkpoints provided by other nodes in the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Random Beacon"}),": The random beacon is used by the consensus layer for ParaTime committee elections and is a critical component in providing security for ParaTimes with an open admission policy. The improved random beacon implementation is based on SCRAPE and provides unbiased output as long as at least one participant is honest."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"On-Chain Governance"}),": The new on-chain governance service provides a simple framework for submitting governance proposals, validators voting on proposals and once an upgrade proposal passes, having a way to perform the upgrade in a controlled manner which minimizes downtime."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Support for Beneficiary Allowances"}),": Each account is able to configure beneficiaries which are allowed to withdraw tokens from it in addition to the account owner."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ROSE Transfers Between the consensus layer and ParaTimes"}),": The proposed upgrade introduces a mechanism where ParaTimes can emit messages as part of processing any ParaTime block. These messages can trigger operations in the consensus layer on the ParaTime's behalf. ParaTimes get their own accounts in the consensus layer which can hold ROSE and ParaTimes are able to request them be transferred to other accounts or to withdraw from other accounts when allowed via the allowances mechanism."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"A Path Towards Self-Governing ParaTimes"}),": By building on the ParaTime messages mechanism, the proposed upgrade extends ParaTime governance options and enables a path towards ParaTimes that can define their own governance mechanisms."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the specified additional features we also propose the validator set size to be increased from the current 80 to 100 validators as ",(0,r.jsx)(n.a,{href:"https://github.com/oasisprotocol/community/discussions/5#discussioncomment-282746",children:"suggested earlier by the community"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"mechanics-of-the-upgrade",children:"Mechanics of the Upgrade"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This section will be updated with more details as we get closer to the upgrade."})}),"\n",(0,r.jsx)(n.p,{children:"Upgrading the Mainnet will require a coordinated upgrade of the Network. All nodes will need to configure a new genesis file that they can generate or verify independently and reset/archive any state from Mainnet. Once enough (representing 2/3+ of stake) nodes have taken this step, the upgraded network will start."}),"\n",(0,r.jsxs)(n.p,{children:["For the actual steps that node operators need to make on their nodes, see the ",(0,r.jsx)(n.a,{href:"/node/mainnet/upgrade-log#cobalt-upgrade",children:"Upgrade Log"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"proposed-state-changes",children:"Proposed State Changes"}),"\n",(0,r.jsx)(n.p,{children:"The following parts of the genesis document will be updated:"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For a more detailed explanation of the parameters below, see the ",(0,r.jsx)(n.a,{href:"/node/genesis-doc#parameters",children:"Genesis Document"})," docs."]})}),"\n",(0,r.jsx)(n.h3,{id:"general",children:(0,r.jsx)(n.strong,{children:"General"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"height"})})," will be set to the height of the Mainnet state dump + 1, i.e.",(0,r.jsx)(n.code,{children:"3027601"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"genesis_time"})})," will be set to",(0,r.jsx)(n.code,{children:"2021-04-28T16:00:00Z"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"chain_id"})})," will be set to ",(0,r.jsx)(n.code,{children:"oasis-2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"halt_epoch"})})," will be set to",(0,r.jsx)(n.code,{children:"13807"}),"(approximately 1 year from the Cobalt upgrade)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"epoch-time",children:(0,r.jsx)(n.strong,{children:"Epoch Time"})}),"\n",(0,r.jsxs)(n.p,{children:["The **",(0,r.jsx)(n.code,{children:"epochtime"}),"**object will be removed since it became obsolete with the new ",(0,r.jsx)(n.a,{href:"/adrs/0007-improved-random-beacon",children:"improved random beacon"}),". It will be replaced with the new ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon"})})," object described ",(0,r.jsx)(n.a,{href:"/node/mainnet/previous-upgrades/cobalt-upgrade#random-beacon",children:"below"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"registry",children:(0,r.jsx)(n.strong,{children:"Registry"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["**",(0,r.jsx)(n.code,{children:"registry.params.enable_runtime_governance_models"})," ** is a new parameter that specifies the set of ",(0,r.jsx)(n.a,{href:"/core/consensus/services/registry#runtimes",children:"runtime governance models"})," that are allowed to be used when creating/updating registrations. It will be set to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "entity": true,\n  "runtime": true\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.runtimes"})})," list contains the registered runtimes' descriptors. In the Cobalt upgrade, it will be migrated from a list of ",(0,r.jsx)(n.em,{children:"signed"})," runtime descriptors to a list of runtime descriptors. The migration will be done automatically with the ",(0,r.jsx)(n.code,{children:"oasis-node debug fix-genesis"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.suspended_runtimes"})})," list contains the suspended registered runtimes' descriptors. In the Cobalt upgrade, it will be migrated from a list of ",(0,r.jsx)(n.em,{children:"signed"})," suspended runtime descriptors to a list of suspended runtime descriptors. The migration will be done automatically with the ",(0,r.jsx)(n.code,{children:"oasis-node debug fix-genesis"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Inactive registered entities in ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.entities"})})," (and their corresponding nodes in ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.nodes"})}),") that don't pass the ",(0,r.jsx)(n.a,{href:"/node/genesis-doc#staking-thresholds",children:"minimum staking thresholds"})," will be removed. The removal will be done automatically with the ",(0,r.jsx)(n.code,{children:"oasis-node debug fix-genesis"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Removing entities from ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.entities"})})," will effectively deregister them but the entities' accounts in ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"staking.ledger"})})," will remain intact."]}),(0,r.jsxs)(n.p,{children:["Deregistered entities can always re-register by submitting the ",(0,r.jsx)(n.a,{href:"/node/run-your-node/validator-node#entity-registration",children:"entity registration transaction"})," after the upgrade."]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.node_statuses"})})," object contains the registered nodes' statuses. In the Cobalt upgrade, each node's status will get a new parameter: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"election_eligible_after"})}),". This parameter specifies at which epoch a node is eligible to be ",(0,r.jsx)(n.a,{href:"/core/consensus/services/scheduler",children:"scheduled into various committees"}),". All nodes will have the parameter set to ",(0,r.jsx)(n.code,{children:"0"})," which means they are immediately eligible. The migration will be done automatically with the ",(0,r.jsx)(n.code,{children:"oasis-node debug fix-genesis"})," command."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"root-hash",children:(0,r.jsx)(n.strong,{children:"Root Hash"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["**",(0,r.jsx)(n.code,{children:"roothash.params.max_runtime_messages"})," ** is a new parameter that specifies the global limit on the number of ",(0,r.jsx)(n.a,{href:"/core/runtime/messages",children:"messages"})," that can be emitted in each round by the runtime. It will be set to ",(0,r.jsx)(n.code,{children:"256"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"roothash.params.max_evidence_age"})})," is a new parameter that specifies the maximum age (in the number of rounds) of submitted evidence for ",(0,r.jsx)(n.a,{href:"/adrs/0005-runtime-compute-slashing",children:"compute node slashing"}),". It will be set to ",(0,r.jsx)(n.code,{children:"100"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"staking",children:(0,r.jsx)(n.strong,{children:"Staking"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["**",(0,r.jsx)(n.code,{children:"staking.governance_deposits"})," ** are the tokens collected from governance proposal deposits. The initial balance will be set to ",(0,r.jsx)(n.code,{children:'"0"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"staking.params.allow_escrow_messages"})})," is a new parameter indicating whether to enable support for the newly added ",(0,r.jsx)(n.code,{children:"AddEscrow"})," and ",(0,r.jsx)(n.code,{children:"ReclaimEscrow"})," ",(0,r.jsx)(n.a,{href:"/core/runtime/messages",children:"runtime messages"})," . It will be set to",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"staking.params.slashing.0"})})," will be renamed to ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"staking.params.slashing.consensus-equivocation"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"staking.params.slashing.consensus-light-client-attack.amount"})})," is a new parameter controlling how much to slash for light client attack. It will be set to ",(0,r.jsx)(n.code,{children:'"100000000000"'})," (i.e. 100,000,000,000 base units, or 100 ROSE tokens)."]}),"\n",(0,r.jsxs)(n.li,{children:["**",(0,r.jsx)(n.code,{children:"staking.params.slashing.consensus-light-client-attack.freeze_interval"})," ** is a new parameter controlling the duration (in epochs) for which a node that has been slashed for light client attack is \u201cfrozen,\u201d or barred from participating in the network's consensus committee. It will be set to ",(0,r.jsx)(n.code,{children:"18446744073709551615"})," (i.e. the maximum value for a 64-bit unsigned integer) which means that any node slashed for light client attack will be, in effect, permanently banned from the network."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"committee-scheduler",children:(0,r.jsx)(n.strong,{children:"Committee Scheduler"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"scheduler.params.max_validators"})})," is the maximum size of the consensus committee (i.e. the validator set). It will be increased from ",(0,r.jsx)(n.code,{children:"80"})," to",(0,r.jsx)(n.code,{children:"100"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"random-beacon",children:(0,r.jsx)(n.strong,{children:"Random Beacon"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon"})})," object contains parameters controlling the new ",(0,r.jsx)(n.a,{href:"/adrs/0007-improved-random-beacon",children:"improved random beacon"})," introduced in the Cobalt upgrade."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.base"})})," is the network's starting epoch. It will be set to the epoch of Mainnet's state dump + 1, i.e. ",(0,r.jsx)(n.code,{children:"5047"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.backend"})})," configures the random beacon backend to use. It will be set to ",(0,r.jsx)(n.code,{children:'"pvss"'})," indicating that the beacon implementing a ",(0,r.jsx)(n.a,{href:"/adrs/0007-improved-random-beacon",children:"PVSS (publicly verifiable secret sharing) scheme"})," should be used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.pvss_parameters.participants"})})," is the number of participants to be selected for each beacon generation protocol round. It will be set to ",(0,r.jsx)(n.code,{children:"20"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.pvss_parameters.threshold"})})," is the minimum number of participants which must successfully contribute entropy for the final output to be considered valid. It will be set to ",(0,r.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.pvss_parameters.commit_interval"})})," is the duration of the Commit phase (in blocks). It will be set to ",(0,r.jsx)(n.code,{children:"400"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.pvss_parameters.reveal_interval"})})," is the duration of the Reveal phase (in blocks). It will be set to ",(0,r.jsx)(n.code,{children:"196"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"beacon.params.pvss_parameters.transition_delay"})})," is the duration of the post Reveal phase (in blocks). It will be set to ",(0,r.jsx)(n.code,{children:"4"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"governance",children:(0,r.jsx)(n.strong,{children:"Governance"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance"})})," object contains parameters controlling the network's ",(0,r.jsx)(n.a,{href:"/core/consensus/services/governance",children:"on-chain governance"})," introduced in the Cobalt upgrade**.**"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.min_proposal_deposit"})})," is the amount of tokens (in base units) that are deposited when creating a new proposal. It will be set to  ",(0,r.jsx)(n.code,{children:'"10000000000000"'})," (i.e. 10,000,000,000,000 base units, or 10,000 ROSE tokens)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.voting_period"})})," is the number of epochs after which the voting for a proposal is closed and the votes are tallied. It will be set to ",(0,r.jsx)(n.code,{children:"168"}),", which is expected to be approximately 7 days."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.quorum"})})," is the minimum percentage of voting power that needs to be cast on a proposal for the result to be valid. It will be set to ",(0,r.jsx)(n.code,{children:"75"})," (i.e. 75%)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.threshold"})})," is the minimum percentage of ",(0,r.jsx)(n.code,{children:"VoteYes"})," votes in order for a proposal to be accepted. It will be set to ",(0,r.jsx)(n.code,{children:"90"}),"(i.e. 90%)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.upgrade_min_epoch_diff"})})," is the minimum number of epochs between the current epoch and the proposed upgrade epoch for the upgrade proposal to be valid. Additionally, it specifies the minimum number of epochs between two consecutive pending upgrades."]}),"\n",(0,r.jsxs)(n.p,{children:["It will be set to ",(0,r.jsx)(n.code,{children:"336"}),", which is expected to be approximately 14 days."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"governance.params.upgrade_cancel_min_epoch_diff"})})," is the minimum number of epochs between the current epoch and the proposed upgrade epoch for the upgrade cancellation proposal to be valid. It will be set to",(0,r.jsx)(n.code,{children:"192"}),", which is expected to be approximately 8 days."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"consensus",children:(0,r.jsx)(n.strong,{children:"Consensus"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.max_evidence_num"})})," parameter will be removed and replaced by the"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.max_evidence_size"})})," parameter."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.max_evidence_size"})})," is a new parameter specifying the maximum evidence size in bytes. It replaces the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.max_evidence_num"})})," parameter and will be set to",(0,r.jsx)(n.code,{children:"51200"})," (51,200 bytes, or 50 kB)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.state_checkpoint_interval"})})," parameter controls the interval (in blocks) on which state checkpoints should be taken. It will be set to ",(0,r.jsx)(n.code,{children:"10000"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.state_checkpoint_num_kept"})})," parameter specifies the number of past state checkpoints to keep. It will be set to ",(0,r.jsx)(n.code,{children:"2"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"consensus.params.state_checkpoint_chunk_size"})})," parameters controls the chunk size (in bytes) that should be used when creating state checkpoints. It will be set to ",(0,r.jsx)(n.code,{children:"8388608"})," (8,388,608 bytes, or 8 MB)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"extra_data"})})," will be set back to the value in the ",(0,r.jsx)(n.a,{href:"https://github.com/oasisprotocol/mainnet-artifacts/releases/tag/2020-11-18",children:"Mainnet genesis file"})," to include the Oasis network's genesis quote: ",(0,r.jsx)(n.em,{children:"\u201d"}),(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Quis_custodiet_ipsos_custodes%3F",children:(0,r.jsx)(n.em,{children:"Quis custodiet ipsos custodes?"})}),(0,r.jsx)(n.em,{children:"\u201d [submitted by Oasis Community Member Daniyar Borangaziyev]:"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"extra_data": {\n  "quote": "UXVpcyBjdXN0b2RpZXQgaXBzb3MgY3VzdG9kZXM/IFtzdWJtaXR0ZWQgYnkgT2FzaXMgQ29tbXVuaXR5IE1lbWJlciBEYW5peWFyIEJvcmFuZ2F6aXlldl0="\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"runtime-state-root-migration",children:"Runtime State Root Migration"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, each runtime's state root will need to be updated for the ",(0,r.jsx)(n.a,{href:"/node/mainnet/upgrade-log#runtime-operators",children:"runtime storage migration"})," that is performed during this upgrade."]}),"\n",(0,r.jsxs)(n.p,{children:["At this time, there is only one active runtime on the Mainnet, namely Second State's Oasis Ethereum ParaTime with ID (Base64-encoded) ",(0,r.jsx)(n.code,{children:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wM="}),"."]}),"\n",(0,r.jsx)(n.p,{children:"After completing the runtime storage migration, Second State will communicate the new state root of their runtime and the genesis document needs to be updated as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"roothash.runtime_states.<RUNTIME-ID>.state_root"})})," will be set to the (Base64-encoded) migrated state root."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.runtimes.[id=<RUNTIME-ID>].genesis.state_root"})})," will be set to the (Base64-encoded) migrated state root."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.runtimes.[id=<RUNTIME-ID>].genesis.state"})})," will be set to ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"registry.runtimes.[id=<RUNTIME-ID>].genesis.round"})})," will be set to the same value as ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"roothash.runtime_states.<RUNTIME-ID>.round"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"launch-support",children:"Launch Support"}),"\n",(0,r.jsx)(n.p,{children:"The Oasis team will be offering live video support during the Cobalt upgrade. Video call link and calendar details will be shared with node operators via email and Slack."}),"\n",(0,r.jsxs)(n.p,{children:["For any additional support, please reach out via the ",(0,r.jsxs)(n.a,{href:"/get-involved/",children:[(0,r.jsx)(n.strong,{children:"#nodeoperators"})," Oasis Community Slack channel"]})," with your questions, comments, and feedback related to Cobalt upgrade."]}),"\n",(0,r.jsxs)(n.p,{children:["To follow the network, please use one of the many ",(0,r.jsx)(n.a,{href:"https://github.com/oasisprotocol/docs/blob/0aeeb93a6e7c9001925923661e4eb3340ec4fb4b/docs/general/community-resources/community-made-resources.md#block-explorers--validator-leaderboards-block-explorers-validator-leaderboards",children:"community block explorers"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);