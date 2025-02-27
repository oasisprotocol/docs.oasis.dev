"use strict";(self.webpackChunkdocs_oasis_io=self.webpackChunkdocs_oasis_io||[]).push([[5797],{6211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"adrs/0021-keymanager-ephemeral-secrets","title":"ADR 0021: Forward-Secret Ephemeral Secrets","description":"Component","source":"@site/docs/adrs/0021-keymanager-ephemeral-secrets.md","sourceDirName":"adrs","slug":"/adrs/0021-keymanager-ephemeral-secrets","permalink":"/adrs/0021-keymanager-ephemeral-secrets","draft":false,"unlisted":false,"editUrl":"https://github.com/oasisprotocol/adrs/edit/main/0021-keymanager-ephemeral-secrets.md","tags":[],"version":"current","lastUpdatedAt":1710755515000,"frontMatter":{},"sidebar":"adrs","previous":{"title":"ADR 0020: Governance Support for Delegator Votes","permalink":"/adrs/0020-governance-delegator-votes"},"next":{"title":"ADR 0022: Forward-Secret Master Secrets","permalink":"/adrs/0022-keymanager-master-secrets"}}');var s=t(4848),i=t(8453);const c={},a="ADR 0021: Forward-Secret Ephemeral Secrets",l={},o=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Runtime encryption key (REK)",id:"runtime-encryption-key-rek",level:3},{value:"Ephemeral secrets",id:"ephemeral-secrets",level:3},{value:"Ephemeral secret transaction",id:"ephemeral-secret-transaction",level:3},{value:"Generation",id:"generation",level:3},{value:"Replication",id:"replication",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"adr-0021-forward-secret-ephemeral-secrets",children:"ADR 0021: Forward-Secret Ephemeral Secrets"})}),"\n",(0,s.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,s.jsx)(n.p,{children:"Oasis Core"}),"\n",(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["2023-02-17:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rename ephemeral entropy to ephemeral secret"}),"\n",(0,s.jsx)(n.li,{children:"Update types and methods, add method for loading a secret"}),"\n",(0,s.jsx)(n.li,{children:"Define publish ephemeral secret transaction"}),"\n",(0,s.jsx)(n.li,{children:"Split instructions for generation and replication in two sections"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"2022-12-01: Initial proposal"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(n.p,{children:"Accepted"}),"\n",(0,s.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:"The network needs forward-secret ephemeral secrets that are distributed\namongst enclave executors. Because of the forward-secrecy requirements,\nusing the current key manager master secret is not workable."}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(n.h3,{id:"runtime-encryption-key-rek",children:"Runtime encryption key (REK)"}),"\n",(0,s.jsxs)(n.p,{children:["Let the per-enclave ",(0,s.jsx)(n.code,{children:"node.CapabilityTEE"})," structure and related helpers be\nammeded as follows, to faciliate the addition of a X25519 public key held\nby the enclave, so that encrypted data can be published on-chain to an\nenclave instance."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// Note: This could also be done via the keymanager InitResponse, but\n// it is the author's opinion that having a general mechanism for this\n// may be useful in other contexts.\n\n// CapabilityTEE represents the node's TEE capability.\ntype CapabilityTEE struct {\n  ...\n\n  // Runtime encryption key.\n  REK *x25519.PublicKey `json:\"rek,omitempty\"`\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ephemeral-secrets",children:"Ephemeral secrets"}),"\n",(0,s.jsx)(n.p,{children:"The key manger enclave will gain the following additional RPC methods:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'const (\n  // Local RPC methods (plaintext).\n  GenerateEphemeralSecret  = "generate_ephemeral_secret"\n  LoadEphemeralSecret      = "load_ephemeral_secret"\n\n  // Remote RPC method (Noise session).\n  ReplicateEphemeralSecret = "replicate_ephemeral_secret"\n)\n\ntype GenerateEphemeralSecretRequest struct {\n  Epoch beacon.EpochTime `json:"epoch"`\n}\n\ntype ReplicateEphemeralSecretRequest struct {\n  Epoch beacon.EpochTime `json:"epoch"`\n}\n\ntype LoadEphemeralSecretRequest struct {\n  SignedSecret SignedEncryptedEphemeralSecret `json:"signed_secret"`\n}\n\ntype GenerateEphemeralSecretResponse struct {\n  SignedSecret SignedEncryptedEphemeralSecret `json:"signed_secret"`\n}\n\ntype ReplicateEphemeralSecretResponse struct {\n  // The request and this response are considered confidential,\n  // so the channel handles authentication and confidentiality.\n  EphemeralSecret [32]byte `json:"ephemeral_secret"`\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ephemeral secret generation will return a signed and encrypted ephemeral secret\nfor the requested epoch."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'type EncryptedSecret struct {\n  // Checksum is the secret verification checksum.\n  Checksum []byte `json:"checksum"`\n\n  // PubKey is the public key used to derive the symmetric key for decryption.\n  PubKey x25519.PublicKey `json:"pub_key"`\n\n  // Nonce is the nonce used to decrypt the secret.\n  Nonce []byte `json:"nonce"`\n\n  // Ciphertexts is the map of REK encrypted ephemeral secrets for all known key manager enclaves.\n  Ciphertexts map[x25519.PublicKey][]byte `json:"ciphertexts"`\n}\n\ntype EncryptedEncryptedSecret struct {\n  // ID is the runtime ID of the key manager.\n  ID common.Namespace `json:"runtime_id"`\n\n  // Epoch is the epoch to which the secret belongs.\n  Epoch beacon.EpochTime `json:"epoch"`\n\n  // Secret is the encrypted secret.\n  Secret EncryptedSecret `json:"secret"`\n}\n\ntype SignedEncryptedEphemeralSecret struct {\n  // Secret is the encrypted ephemeral secret.\n  Secret EncryptedEphemeralSecret `json:"secret"`\n\n  // Signature is a signature of the ephemeral secret.\n  Signature signature.RawSignature `json:"signature"`\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ephemeral-secret-transaction",children:"Ephemeral secret transaction"}),"\n",(0,s.jsxs)(n.p,{children:["Key manager application will be augmented with a ",(0,s.jsx)(n.code,{children:"PublishEphemeralSecret"}),"\ntransaction that will accept the first published secret for an epoch and\ndiscard the others."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'MethodPublishEphemeralSecret = transaction.NewMethodName(\n  ModuleName, "PublishEphemeralSecret", SignedEncryptedEphemeralSecret{}\n)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"generation",children:"Generation"}),"\n",(0,s.jsx)(n.p,{children:"Each keymanager will, at a random time in a given epoch:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check to see if another instance has published the next epoch's ephemeral\nsecret. If yes, go to step 4."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Execute a local ",(0,s.jsx)(n.code,{children:"generate_ephemeral_secret"})," RPC call. The enclave will,\nin-order, use the light client to query the members of the committee,\ngenerate secret, and return a ",(0,s.jsx)(n.code,{children:"GenerateEphemeralSecretResponse"}),".\nOn failure, go to step 1."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Publish ",(0,s.jsx)(n.code,{children:"SignedEncryptedEphemeralSecret"})," to consensus via\na ",(0,s.jsx)(n.code,{children:"PublishEphemeralSecret"})," transaction."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This key manager instance is DONE."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"replication",children:"Replication"}),"\n",(0,s.jsx)(n.p,{children:"Each key manager will:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Listen to the publications of new ephemeral secrets and forward them to\nthe enclave."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enclave will validate the secret and verify that it was published in the\nconsensus. Iff verification succeeds and there is a corresponding REK entry\nin the ",(0,s.jsx)(n.code,{children:"Ciphertexts"})," map, decrypt the secret and go to step 4."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Until a successful response is obtained, iterate through the enclaves\nin the ephemeral secret ",(0,s.jsx)(n.code,{children:"Ciphertexts"})," map, issuing\n",(0,s.jsx)(n.code,{children:"replicate_ephemeral_secret"})," RPC calls. On failure, repeat step 3."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This key manager instance is DONE."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It will be possible to publish ephemeral encrypted data to enclave\ninstances on-chain."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There will be ephemeral secret per key manager committee."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enclave compromise can not go back to previous epochs to compromise\nthe ephemeral secrets."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ephemeral secrets are never encrypted with SGX sealing key nor stored in\ncold storage."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If enough key manager workers restart at the wrong time, the epoch's\nephemeral secret will be lost, and it will take until the next epoch\nto recover."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Forward-secrecy is imperfect due to the epoch granular nature of the\nephemeral secret."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);