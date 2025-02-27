"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[3667],{4222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"adrs/0022-keymanager-master-secrets","title":"ADR 0022: Forward-Secret Master Secrets","description":"Component","source":"@site/docs/adrs/0022-keymanager-master-secrets.md","sourceDirName":"adrs","slug":"/adrs/0022-keymanager-master-secrets","permalink":"/adrs/0022-keymanager-master-secrets","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/adrs/edit/main/0022-keymanager-master-secrets.md","tags":[],"version":"current","lastUpdatedAt":1710755515000,"frontMatter":{},"sidebar":"adrs","previous":{"title":"ADR 0021: Forward-Secret Ephemeral Secrets","permalink":"/adrs/0021-keymanager-ephemeral-secrets"},"next":{"title":"ADR 0024: Runtime Off-chain Logic (ROFL)","permalink":"/adrs/0024-off-chain-runtime-logic"}}');var r=t(4848),i=t(8453);const c={},a="ADR 0022: Forward-Secret Master Secrets",l={},o=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Key manager status",id:"key-manager-status",level:3},{value:"Enclave init response",id:"enclave-init-response",level:3},{value:"Master secrets",id:"master-secrets",level:3},{value:"Checksums",id:"checksums",level:3},{value:"Master secret transaction",id:"master-secret-transaction",level:3},{value:"Setup",id:"setup",level:3},{value:"Generation",id:"generation",level:3},{value:"Replication",id:"replication",level:3},{value:"Rotation",id:"rotation",level:3},{value:"Confirmation",id:"confirmation",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"adr-0022-forward-secret-master-secrets",children:"ADR 0022: Forward-Secret Master Secrets"})}),"\n",(0,r.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,r.jsx)(n.p,{children:"Oasis Core"}),"\n",(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2023-04-17: Initial proposal"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.p,{children:"Proposed"}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsx)(n.p,{children:"The network needs forward-secret master secrets that are generated periodically\nand distributed amongst enclave executors."}),"\n",(0,r.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,r.jsx)(n.h3,{id:"key-manager-status",children:"Key manager status"}),"\n",(0,r.jsx)(n.p,{children:"Key manager status will be extended with the following fields:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'type Status struct {\n  ...\n\n  // Generation is the generation of the latest master secret.\n  Generation uint64 `json:"generation,omitempty"`\n\n  // RotationEpoch is the epoch of the last master secret rotation.\n  RotationEpoch beacon.EpochTime `json:"rotation_epoch,omitempty"`\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"enclave-init-response",children:"Enclave init response"}),"\n",(0,r.jsx)(n.p,{children:"Key manager enclave init response will be extended with the following fields:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'type InitResponse struct {\n  ...\n  \n  NextChecksum []byte               `json:"next_checksum,omitempty"`\n  NextRSK      *signature.PublicKey `json:"next_rsk,omitempty"`\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"master-secrets",children:"Master secrets"}),"\n",(0,r.jsx)(n.p,{children:"The key manager enclave will gain the following additional local RPC methods:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'const (\n  GenerateMasterSecret = "generate_master_secret"\n  LoadMasterSecret     = "load_master_secret"\n)\n\ntype GenerateMasterSecretRequest struct {\n  Generation uint64           `json:"generation"`\n  Epoch      beacon.EpochTime `json:"epoch"`\n}\n\ntype GenerateMasterSecretResponse struct {\n  SignedSecret SignedEncryptedMasterSecret `json:"signed_secret"`\n}\n\ntype LoadMasterSecretRequest struct {\n  SignedSecret SignedEncryptedMasterSecret `json:"signed_secret"`\n}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Remote RPC method for replicating master secret will be extended to support\nreplication of generations and to return a Merkle proof for secret verification."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"pub struct ReplicateMasterSecretRequest {\n  ...\n\n  /// Generation.\n  #[cbor(optional)]\n  pub generation: u64,\n}\n\npub struct ReplicateMasterSecretResponse {\n  ... \n\n  /// Checksum of the preceding master secret.\n  #[cbor(optional)]\n  pub checksum: Vec<u8>,\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Master secret generation will return a signed and encrypted master secret\nfor the requested generation and epoch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'type EncryptedMasterSecret struct {\n  // ID is the runtime ID of the key manager.\n  ID common.Namespace `json:"runtime_id"`\n\n  // Generation is the generation of the secret.\n  Generation uint64 `json:"generation"`\n\n  // Epoch is the epoch in which the secret was created.\n  Epoch beacon.EpochTime `json:"epoch"`\n\n  // Secret is the encrypted secret.\n  Secret EncryptedSecret `json:"secret"`\n}\n\ntype SignedEncryptedMasterSecret struct {\n  // Secret is the encrypted master secret.\n  Secret EncryptedMasterSecret `json:"secret"`\n\n  // Signature is a signature of the master secret.\n  Signature signature.RawSignature `json:"signature"`\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"checksums",children:"Checksums"}),"\n",(0,r.jsx)(n.p,{children:"Checksum computation will be extended with hash chains:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"checksum_0 = KMAC(generation_0, runtime_id)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"checksum_N = KMAC(generation_N, checksum_(N-1)) for N > 0"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Hash chains allow us to use the previous checksum as a Merkle proof.\nGiven a verified checksum and a proof, a master secret can be verified\nusing the following formula:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"next_checksum = KMAC(secret, prev_checksum)"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"master-secret-transaction",children:"Master secret transaction"}),"\n",(0,r.jsxs)(n.p,{children:["Key manager application will be augmented with a ",(0,r.jsx)(n.code,{children:"PublishMasterSecret"}),"\ntransaction which will accept the proposal for the next generation of the master\nsecret if the following conditions are met:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The proposal's master secret generation number is one greater than the last\naccepted generation, or 0 if no secrets have been accepted so far."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The proposal is intended to be accepted in the upcoming epoch."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Master secret hasn't been proposed in the current epoch."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The rotation period will either expire in the upcoming epoch or has already\nexpired."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The first master secret (generation 0) can be proposed immediately and even\nif the rotation interval is set to 0."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the rotation interval is set to 0, rotations are disabled and secrets\ncannot be proposed anymore. To enable them again, update the rotation\ninterval in the policy."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The master secret is encrypted to the majority of the enclaves that form\nthe committee."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The node proposing the secret is a member of the key manager committee."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If accepted, the next secret can be proposed after the rotation interval\nexpires. Otherwise, the next secret can be proposed in the next epoch."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'MethodPublishMasterSecret = transaction.NewMethodName(\n  ModuleName, "PublishMasterSecret", SignedEncryptedMasterSecret{}\n)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"The key manager is initialized with an empty checksum and no nodes.\nEvery node needs to register with an empty checksum to be included\nin the key manager committee. Only members of the committee are\nallowed to generate master secrets and will be able to decrypt\nthe proposals."}),"\n",(0,r.jsx)(n.h3,{id:"generation",children:"Generation"}),"\n",(0,r.jsx)(n.p,{children:"Each keymanager will, at a random time in a given epoch:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check to see if rotation period has expired. If not, go to step 5."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check to see if another instance has published a proposal for the upcoming\nepoch. If yes, go to step 5."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Execute a local ",(0,r.jsx)(n.code,{children:"generate_master_secret"})," RPC call. The enclave will,\nin-order:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the master secret generation number."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Randomly select a secret."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the light client to query the members of the committee."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Encrypt and checksum the selected secret."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.code,{children:"GenerateMasterSecretResponse"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"On failure, go to step 1."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Read ",(0,r.jsx)(n.code,{children:"SignedEncryptedMasterSecret"})," from the response and publish it\nin the consensus layer using ",(0,r.jsx)(n.code,{children:"PublishMasterSecret"})," transaction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This key manager instance is DONE."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"replication",children:"Replication"}),"\n",(0,r.jsx)(n.p,{children:"Each key manager will listen for the publication of new master secret proposals\nand will, when a new secret is proposed:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cancel master secret generation scheduled for the current epoch."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Forward the proposal to the enclave."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The enclave will verify that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The proposal was published in the consensus layer."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The secret can be decrypted with the enclave's REK key."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The master secret generation number is one greater than the last known\ngeneration."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The checksum computed from the decrypted secret and the last known\nchecksum matches the one in the proposal."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If all verifications pass, the enclave will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Decrypt the secret, encrypt it with SGX sealing key and store\nthe ciphertext locally."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Derive the RSK key for the proposed secret and store it in the memory\ntogether with the computed checksum."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Otherwise, go to step 5."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request enclave to initialize again and use the response to register\nwith the forthcoming checksum and RSK key derived from the proposal."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This key manager instance is DONE."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"rotation",children:"Rotation"}),"\n",(0,r.jsx)(n.p,{children:"Key manager application will try to rotate the master secret every epoch\nas part of the key manager status generation as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fetch the latest master secret proposal.\nOn failure, go to step 6."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the master secret generation number and epoch of the proposal.\nOn failure, go to step 6."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The rotation period is not verified here as it is already checked when\nthe secret is proposed. Optionally, we can add this check to cover\nthe case when the policy changes after the secret is proposed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Count how many nodes have stored the proposal locally."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Compare the checksum of the proposal to the ",(0,r.jsx)(n.code,{children:"next_checksum"})," field in\nthe init response."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Accept the proposal if the majority of the nodes have replicated\nthe proposed secret and announced ",(0,r.jsx)(n.code,{children:"next_checksum"})," in their init status."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Increment the master secret generation number by 1."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update the last rotation epoch."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update the checksum."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Broadcast the new status."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the master secret generation number has advanced, the enclaves will\ntry to apply the proposal they stored locally."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Key manager application is DONE."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"confirmation",children:"Confirmation"}),"\n",(0,r.jsx)(n.p,{children:"Each key manager will listen for the key manager status updates and will,\nwhen the master secret generation number advances:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Send the key manager status to the enclave."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The enclave will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check that the master secret generation number is one greater than\nthe last known generation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Load locally stored proposal for the next master secret or replicate it\nfrom another enclave."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the proposal to compute the next checksum."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the computed checksum against the latest key manager status."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If checksum matches, the enclave will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Encrypt the secret with SGX sealing key using master secret generation\nnumber as additional data and store the ciphertext locally."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update the last known generation number."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update the latest checksum and RSK key."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Otherwise, go to step 1."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Request enclave to initialize again and use the response to register\nwith the latest checksum and RSK key while leaving the forthcoming\nchecksum and RSK key empty."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This key manager instance is DONE."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,r.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Runtimes can periodically or on demand re-encrypt their state using\nthe latest generation of the master secret."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Compromise of an enclave cannot reveal master secrets generated after its\nupgrade or obsolescence."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If enclave initialization is interrupted or aborted, the subsequent\ninitialization will resume from where the previous one left off.\nThis means that any secrets that have already been replicated and\nverified will not be fetched again."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When compared to Merkle trees, hash chains provide a straightforward way\nto transition from the current checksum implementation and also enable\nthe use of simpler proofs that can be validated in constant time."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Initialization takes time as all master secrets need to be replicated."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Number of secrets"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Replication time"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"45 sec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"100"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"52 sec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"1000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"2 min 45 sec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"10000"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"21 min 17 sec"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Table 1: Local machine benchmarks (without any network overhead)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Master secret replication response must contain a Merkle proof for secret\nverification."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Newly accepted master secrets cannot be used immediately to derive runtime\nkeys because key manager enclaves need to confirm them first. When using\nTendermint as a backend, this delay is even greater as the verifier is one\nblock behind."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"neutral",children:"Neutral"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Master secrets need to be replicated in reverse order to ensure all\nsecrets are verified against checksum published in the consensus layer."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);