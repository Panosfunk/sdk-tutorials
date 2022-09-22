(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{734:function(e,t,s){"use strict";s.r(t);var o=s(0),g=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compose-complex-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compose-complex-transactions"}},[e._v("#")]),e._v(" Compose Complex Transactions")]),e._v(" "),s("HighlightBox",{attrs:{type:"learning"}},[s("p",[e._v("In Cosmos, a transaction is able to encapsulate multiple messages.\n"),s("br"),s("br"),e._v("\nIn this section, you will:")]),e._v(" "),s("ul",[s("li",[e._v("Send multiple tokens in a single transaction.")]),e._v(" "),s("li",[e._v("Sign and broadcast.")]),e._v(" "),s("li",[e._v("Assemble multiple messages.")])])]),e._v(" "),s("h2",{attrs:{id:"send-multiple-tokens-using-sendtokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-multiple-tokens-using-sendtokens"}},[e._v("#")]),e._v(" Send multiple tokens using "),s("code",[e._v("sendTokens")])]),e._v(" "),s("p",[e._v("In the "),s("RouterLink",{attrs:{to:"/tutorials/6-cosmjs/2-first-steps.html"}},[e._v("previous exercise")]),e._v(", you had Alice send tokens back to the faucet. To refresh your memory, this is what the "),s("code",[e._v("sendTokens")]),e._v(" function takes as input:")],1),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"cHVibGljIGFzeW5jIHNlbmRUb2tlbnMoCiAgICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsCiAgICByZWNpcGllbnRBZGRyZXNzOiBzdHJpbmcsCiAgICBhbW91bnQ6IHJlYWRvbmx5IENvaW5bXSwKICAgIGZlZTogU3RkRmVlIHwgJnF1b3Q7YXV0byZxdW90OyB8IG51bWJlciwKICAgIG1lbW8gPSAmcXVvdDsmcXVvdDssCik6IFByb21pc2UmbHQ7RGVsaXZlclR4UmVzcG9uc2UmZ3Q7Owo=",url:"https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L217-L223"}}),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/a14662d/src/cosmos/base/v1beta1/coin.ts#L13-L16",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("Coin")]),s("OutboundLink")],1),e._v(" allows Alice to send not just "),s("code",[e._v("stake")]),e._v(" but also any number of other coins as long as she owns them. So she can:")]),e._v(" "),s("CodeGroup",[s("CodeGroupItem",{attrs:{title:"Send one token type",active:""}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zZW5kVG9rZW5zKAogICAgYWxpY2UsCiAgICBmYXVjZXQsCiAgICBbCiAgICAgICAgeyBkZW5vbTogJnF1b3Q7dWF0b20mcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAwJnF1b3Q7IH0sCiAgICBdLAogICAgewogICAgICAgIGFtb3VudDogW3sgZGVub206ICZxdW90O3VhdG9tJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzUwMCZxdW90OyB9XSwKICAgICAgICBnYXM6ICZxdW90OzIwMDAwMCZxdW90OywKICAgIH0sCikK"}})],1),e._v(" "),s("CodeGroupItem",{attrs:{title:"Send two token types"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zZW5kVG9rZW5zKAogICAgYWxpY2UsCiAgICBmYXVjZXQsCiAgICBbCiAgICAgICAgeyBkZW5vbTogJnF1b3Q7dWF0b20mcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAwJnF1b3Q7IH0sCiAgICAgICAgeyBkZW5vbTogJnF1b3Q7dG9rZW4mcXVvdDssIGFtb3VudDogJnF1b3Q7MTImcXVvdDsgfSwKICAgIF0sCiAgICB7CiAgICAgICAgYW1vdW50OiBbeyBkZW5vbTogJnF1b3Q7dWF0b20mcXVvdDssIGFtb3VudDogJnF1b3Q7NTAwJnF1b3Q7IH1dLAogICAgICAgIGdhczogJnF1b3Q7MjAwMDAwJnF1b3Q7LAogICAgfSwKKQo="}})],1)],1),e._v(" "),s("p",[e._v("However, there are limitations. First, Alice "),s("strong",[e._v("can only target a single recipient per transaction")]),e._v(", "),s("code",[e._v("faucet")]),e._v(" in the previous examples. If she wants to send tokens to multiple recipients, then she needs to create as many transactions as there are recipients. Multiple transactions cost slightly more than packing transfers into the array because of transaction overhead. Additionally, in some cases it is considered a bad user experience to make users sign multiple transactions.")]),e._v(" "),s("p",[e._v("The second limitation is that "),s("strong",[e._v("separate transfers are not atomic")]),e._v(". It is possible that Alice wants to send tokens to two recipients and it is important that either they both receive them or neither of them receive anything.")]),e._v(" "),s("p",[e._v("Fortunately, there is a way to atomically send tokens to multiple recipients.")]),e._v(" "),s("h2",{attrs:{id:"introducing-signandbroadcast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introducing-signandbroadcast"}},[e._v("#")]),e._v(" Introducing "),s("code",[e._v("signAndBroadcast")])]),e._v(" "),s("p",[s("code",[e._v("SigningStargateClient")]),e._v(" has the "),s("code",[e._v("signAndBroadcast")]),e._v(" function:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"cHVibGljIGFzeW5jIHNpZ25BbmRCcm9hZGNhc3QoCiAgICBzaWduZXJBZGRyZXNzOiBzdHJpbmcsCiAgICBtZXNzYWdlczogcmVhZG9ubHkgRW5jb2RlT2JqZWN0W10sCiAgICBmZWU6IFN0ZEZlZSB8ICZxdW90O2F1dG8mcXVvdDsgfCBudW1iZXIsCiAgICBtZW1vID0gJnF1b3Q7JnF1b3Q7LAopOiBQcm9taXNlJmx0O0RlbGl2ZXJUeFJlc3BvbnNlJmd0OzsK",url:"https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L317-L322"}}),e._v(" "),s("p",[e._v("The basic components of a transaction are the "),s("code",[e._v("signerAddress")]),e._v(", the "),s("code",[e._v("messages")]),e._v(" that it contains, as well as the "),s("code",[e._v("fee")]),e._v(" and an optional "),s("code",[e._v("memo")]),e._v(". As such, "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("Cosmos transactions")]),e._v(" can indeed be composed of multiple "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"token-transfer-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-transfer-messages"}},[e._v("#")]),e._v(" Token transfer messages")]),e._v(" "),s("p",[e._v("In order to use "),s("code",[e._v("signAndBroadcast")]),e._v(" to send tokens, you need to figure out what messages go into the "),s("code",[e._v("messages: readonly EncodeObject[]")]),e._v(". Examine the "),s("code",[e._v("sendTokens")]),e._v(" function body:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3Qgc2VuZE1zZzogTXNnU2VuZEVuY29kZU9iamVjdCA9IHsKICAgIHR5cGVVcmw6ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDssCiAgICB2YWx1ZTogewogICAgICBmcm9tQWRkcmVzczogc2VuZGVyQWRkcmVzcywKICAgICAgdG9BZGRyZXNzOiByZWNpcGllbnRBZGRyZXNzLAogICAgICBhbW91bnQ6IFsuLi5hbW91bnRdLAogICAgfSwKICB9OwpyZXR1cm4gdGhpcy5zaWduQW5kQnJvYWRjYXN0KHNlbmRlckFkZHJlc3MsIFtzZW5kTXNnXSwgZmVlLCBtZW1vKTsK",url:"https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L224-L232"}}),e._v(" "),s("p",[e._v("Therefore, when sending back to the faucet, instead of calling:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zZW5kVG9rZW5zKAogICAgYWxpY2UsCiAgICBmYXVjZXQsCiAgICBbeyBkZW5vbTogJnF1b3Q7dWF0b20mcXVvdDssIGFtb3VudDogJnF1b3Q7MTAwMDAwJnF1b3Q7IH1dLAogICAgewogICAgICAgIGFtb3VudDogW3sgZGVub206ICZxdW90O3VhdG9tJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzUwMCZxdW90OyB9XSwKICAgICAgICBnYXM6ICZxdW90OzIwMDAwMCZxdW90OywKICAgIH0sCikK"}}),e._v(" "),s("p",[e._v("Alice calls:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zaWduQW5kQnJvYWRjYXN0KAogICAgLy8gdGhlIHNpZ25lckFkZHJlc3MKICAgIGFsaWNlLAogICAgLy8gdGhlIG1lc3NhZ2UocykKICAgIFsKICAgICAgICB7CiAgICAgICAgICAgIHR5cGVVcmw6ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDssCiAgICAgICAgICAgIHZhbHVlOiB7CiAgICAgICAgICAgICAgICBmcm9tQWRkcmVzczogYWxpY2UsCiAgICAgICAgICAgICAgICB0b0FkZHJlc3M6IGZhdWNldCwKICAgICAgICAgICAgICAgIGFtb3VudDogWwogICAgICAgICAgICAgICAgICAgIHsgZGVub206ICZxdW90O3VhdG9tJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzEwMDAwMCZxdW90OyB9LAogICAgICAgICAgICAgICAgXSwKICAgICAgICAgICAgfSwKICAgICAgICAgIH0sCiAgICBdLAogICAgLy8gdGhlIGZlZQogICAgewogICAgICAgIGFtb3VudDogW3sgZGVub206ICZxdW90O3VhdG9tJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzUwMCZxdW90OyB9XSwKICAgICAgICBnYXM6ICZxdW90OzIwMDAwMCZxdW90OywKICAgIH0sCikK"}}),e._v(" "),s("p",[e._v("Confirm this by making the change in your "),s("code",[e._v("experiment.ts")]),e._v(" from the previous section, and running it again.")]),e._v(" "),s("HighlightBox",{attrs:{type:"tip"}},[s("p",[e._v("Building a transaction in this way is recommended. "),s("code",[e._v("SigningStargateClient")]),e._v(" offers you convenience methods such as "),s("code",[e._v("sendTokens")]),e._v(" for simple use cases only.")])]),e._v(" "),s("h2",{attrs:{id:"what-is-this-long-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-this-long-string"}},[e._v("#")]),e._v(" What is this long string?")]),e._v(" "),s("p",[e._v("As a reminder from the previous tutorial, the "),s("code",[e._v('typeUrl: "/cosmos.bank.v1beta1.MsgSend"')]),e._v(" string comes from the "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(" definitions and is a mixture of:")],1),e._v(" "),s("ol",[s("li",[s("p",[e._v("The "),s("code",[e._v("package")]),e._v(" where "),s("code",[e._v("MsgSend")]),e._v(" is initially declared:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"cGFja2FnZSBjb3Ntb3MuYmFuay52MWJldGExOwo=",url:"https://github.com/cosmos/cosmos-sdk/blob/3a1027c/proto/cosmos/bank/v1beta1/tx.proto#L2"}})],1),e._v(" "),s("li",[s("p",[e._v("And the name of the message itself, "),s("code",[e._v("MsgSend")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dTZW5kIHsKICAgIC4uLgp9Cg==",url:"https://github.com/cosmos/cosmos-sdk/blob/3a1027c/proto/cosmos/bank/v1beta1/tx.proto#L22"}})],1)]),e._v(" "),s("HighlightBox",{attrs:{type:"info"}},[s("p",[e._v("To learn how to make your own types for your own blockchain project, head to "),s("RouterLink",{attrs:{to:"/tutorials/6-cosmjs/5-create-custom.html"}},[e._v("Create Custom CosmJS Interfaces")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"multiple-token-transfer-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-token-transfer-messages"}},[e._v("#")]),e._v(" Multiple token transfer messages")]),e._v(" "),s("p",[e._v("From here, you add an extra message for a token transfer from Alice to someone else:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zaWduQW5kQnJvYWRjYXN0KAogICAgLy8gc2lnbmVyQWRkcmVzcwogICAgYWxpY2UsCiAgICBbCiAgICAgICAgLy8gbWVzc2FnZSAxCiAgICAgICAgewogICAgICAgICAgICB0eXBlVXJsOiAmcXVvdDsvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kJnF1b3Q7LAogICAgICAgICAgICB2YWx1ZTogewogICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IGFsaWNlLAogICAgICAgICAgICAgICAgdG9BZGRyZXNzOiBmYXVjZXQsCiAgICAgICAgICAgICAgICBhbW91bnQ6IFsKICAgICAgICAgICAgICAgICAgICB7IGRlbm9tOiAmcXVvdDt1YXRvbSZxdW90OywgYW1vdW50OiAmcXVvdDsxMDAwMDAmcXVvdDsgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9LAogICAgICAgIC8vIG1lc3NhZ2UgMgogICAgICAgIHsKICAgICAgICAgICAgdHlwZVVybDogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAgICAgdmFsdWU6IHsKICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzOiBhbGljZSwKICAgICAgICAgICAgICAgIHRvQWRkcmVzczogc29tZV9vdGhlcl9hZGRyZXNzLAogICAgICAgICAgICAgICAgYW1vdW50OiBbCiAgICAgICAgICAgICAgICAgICAgeyBkZW5vbTogJnF1b3Q7dG9rZW4mcXVvdDssIGFtb3VudDogJnF1b3Q7MTAmcXVvdDsgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9LAogICAgXSwKICAgIC8vIHRoZSBmZWUKICAgICZxdW90O2F1dG8mcXVvdDssCikK"}}),e._v(" "),s("p",[e._v("Note how the custom fee input was replaced with the "),s("code",[e._v("auto")]),e._v(" input, which simulates the transaction to estimate the fee for you. In order to make that work well, you need to define the "),s("code",[e._v("gasPrice")]),e._v(" you are willing to pay and its "),s("code",[e._v("prefix")]),e._v(" when setting up your "),s("code",[e._v("signingClient")]),e._v(". You replace your original line of code with:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3Qgc2lnbmluZ0NsaWVudCA9IGF3YWl0IFNpZ25pbmdTdGFyZ2F0ZUNsaWVudC5jb25uZWN0V2l0aFNpZ25lcigKICAgIHJwYywKICAgIGFsaWNlU2lnbmVyLAogICAgewogICAgICAgIHByZWZpeDogJnF1b3Q7Y29zbW9zJnF1b3Q7LAogICAgICAgIGdhc1ByaWNlOiBHYXNQcmljZS5mcm9tU3RyaW5nKCZxdW90OzAuMDAyNXVhdG9tJnF1b3Q7KQogICAgfQopCg=="}}),e._v(" "),s("h2",{attrs:{id:"mixing-other-message-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixing-other-message-types"}},[e._v("#")]),e._v(" Mixing other message types")]),e._v(" "),s("p",[e._v("The above example shows you two token-transfer messages in a single transaction. You can see this with their "),s("code",[e._v('typeUrl: "/cosmos.bank.v1beta1.MsgSend"')]),e._v(".")]),e._v(" "),s("p",[e._v("Neither Cosmos nor CosmJS limits you to combining messages of the same type. You can decide to combine other message types together with a token transfer. For instance, in one transaction Alice could:")]),e._v(" "),s("ol",[s("li",[e._v("Send tokens to the faucet.")]),e._v(" "),s("li",[e._v("Delegate some of her tokens to a validator.")])]),e._v(" "),s("p",[e._v("How would Alice create the second message? The "),s("code",[e._v("SigningStargateClient")]),e._v(" contains a predefined list of "),s("code",[e._v("typeUrls")]),e._v(" that are supported by default, because they're considered to be the most commonly used messages in the Cosmos SDK. One is "),s("code",[e._v("MsgDelegate")]),e._v(", and that is exactly what you need. Click the source link below to see the rest of the "),s("code",[e._v("typeUrls")]),e._v(" that come with "),s("code",[e._v("SigningStargateClient")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ICAgIFsmcXVvdDsvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dEZWxlZ2F0ZSZxdW90OywgTXNnRGVsZWdhdGVdLAo=",url:"https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L94"}}),e._v(" "),s("p",[e._v("Click through to the type definition, and the "),s("code",[e._v("cosmjs-types")]),e._v(" repository:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBNc2dEZWxlZ2F0ZSB7CiAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmc7CiAgICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7CiAgICBhbW91bnQ/OiBDb2luOwp9Cg==",url:"https://github.com/confio/cosmjs-types/blob/a14662d/src/cosmos/staking/v1beta1/tx.ts#L46-L50"}}),e._v(" "),s("p",[e._v("Now that you know the "),s("code",[e._v("typeUrl")]),e._v(" for delegating some tokens is "),s("code",[e._v("/cosmos.staking.v1beta1.MsgDelegate")]),e._v(", you need to find a validator's address that Alice can delegate to. Find a list of validators in the "),s("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet explorer"),s("OutboundLink")],1),e._v(". Select a validator and set their address as a variable:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgdmFsaWRhdG9yOiBzdHJpbmcgPSAmcXVvdDtjb3Ntb3N2YWxvcGVyMTc4aDRzNmF0NXY5Y2Q4bTluN2V3M2hnN2s5ZWgwczZ3cHR4cGNuJnF1b3Q7IC8vMDFub2RlCg=="}}),e._v(" "),s("p",[e._v("Use this variable in the following script, which you can copy to replace your original token transfer:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5zaWduQW5kQnJvYWRjYXN0KAogICAgYWxpY2UsCiAgICBbCiAgICAgICAgewogICAgICAgICAgICB0eXBlVXJsOiAmcXVvdDsvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kJnF1b3Q7LAogICAgICAgICAgICB2YWx1ZTogewogICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IGFsaWNlLAogICAgICAgICAgICAgICAgdG9BZGRyZXNzOiBmYXVjZXQsCiAgICAgICAgICAgICAgICBhbW91bnQ6IFsKICAgICAgICAgICAgICAgICAgICB7IGRlbm9tOiAmcXVvdDt1YXRvbSZxdW90OywgYW1vdW50OiAmcXVvdDsxMDAwMDAmcXVvdDsgfSwKICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgIH0sCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgIHR5cGVVcmw6ICZxdW90Oy9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0RlbGVnYXRlJnF1b3Q7LAogICAgICAgICAgICB2YWx1ZTogewogICAgICAgICAgICAgICAgZGVsZWdhdG9yQWRkcmVzczogYWxpY2UsCiAgICAgICAgICAgICAgICB2YWxpZGF0b3JBZGRyZXNzOiB2YWxpZGF0b3IsCiAgICAgICAgICAgICAgICBhbW91bnQ6IHsgZGVub206ICZxdW90O3VhdG9tJnF1b3Q7LCBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDssIH0sCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9LAogICAgXSwKICAgIHsKICAgICAgICBhbW91bnQ6IFt7IGRlbm9tOiAmcXVvdDt1YXRvbSZxdW90OywgYW1vdW50OiAmcXVvdDs1MDAmcXVvdDsgfV0sCiAgICAgICAgZ2FzOiAmcXVvdDsyMDAwMDAmcXVvdDssCiAgICB9CikK"}}),e._v(" "),s("p",[e._v("When you create "),s("RouterLink",{attrs:{to:"/tutorials/6-cosmjs/5-create-custom.html"}},[e._v("your own message types in CosmJS")]),e._v(", they have to follow this format and be declared in the same fashion.")],1),e._v(" "),s("HighlightBox",{attrs:{type:"synopsis"}},[s("p",[e._v("To summarize, this section has explored:")]),e._v(" "),s("ul",[s("li",[e._v("How to move past the one-transaction-one-recipient limitations of the previous exercise, which could compel a user to sign potentially many transactions at a time, and denies the possibility of sending "),s("em",[e._v("atomic")]),e._v(" transactions to multiple recipients (for example, a situation in which either all recipients receive tokens or none of them do).")]),e._v(" "),s("li",[e._v("How to include two token-transfer messages in a single transaction, and how to combine messages of different types in a single transaction (for example, sending tokens to the faucet "),s("em",[e._v("and")]),e._v(" delegating tokens to a validator).")])])])],1)}),[],!1,null,null,null);t.default=g.exports}}]);