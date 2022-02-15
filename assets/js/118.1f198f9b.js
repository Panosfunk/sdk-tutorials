(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{715:function(e,t,a){"use strict";a.r(t);var o=a(0),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ibc-foreign-token-wager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-foreign-token-wager"}},[e._v("#")]),e._v(" IBC Foreign Token Wager")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("messages")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/2-main-concepts/ibc.html"}},[e._v("IBC")]),e._v(".")],1),e._v(" "),a("li",[e._v("Have Go installed.")]),e._v(" "),a("li",[e._v("The checkers blockchain codebase up to the "),a("em",[e._v("can play")]),e._v(" query. You can get there by following the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/can-play.html"}},[e._v("previous steps")]),e._v(" or checking out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/can-play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("p",[e._v("When you "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-wager.html"}},[e._v("introduced a wager")]),e._v(" you enabled players to play a game and bet in the outcome using the base staking token of your blockchain. What if your players want to play with other "),a("em",[e._v("currencies")]),e._v("? Your blockchain can represent a token from any other blockchain connected to your chain by using the Inter-Blockchain Communication Protocol (IBC).")],1),e._v(" "),a("p",[e._v("Your checkers application will be agnostic to tokens and relayers. Your only task is to enable the use of "),a("em",[e._v("foreign")]),e._v(" tokens.")]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("Instead of defaulting to "),a("code",[e._v('"stake"')]),e._v(", let players decide what string represents their token. So update:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The stored game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIHRva2VuID0gMTM7IC8vIERlbm9taW5hdGlvbiBvZiB0aGUgd2FnZXIuCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/proto/checkers/stored_game.proto#L21"}})],1),e._v(" "),a("li",[a("p",[e._v("The message to create a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIHRva2VuID0gNTsgLy8gRGVub21pbmF0aW9uIG9mIHRoZSB3YWdlci4KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/proto/checkers/tx.proto#L46"}})],1)]),e._v(" "),a("p",[e._v("For Starport and Protobuf to recompile both files you can use:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzdGFycG9ydCBnZW5lcmF0ZSBwcm90by1nbwo="}}),e._v(" "),a("p",[e._v("To avoid surprises down the road, also update the "),a("code",[e._v("MsgCreateGame")]),e._v(" constructor:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdNc2dDcmVhdGVHYW1lKGNyZWF0b3Igc3RyaW5nLCByZWQgc3RyaW5nLCBibGFjayBzdHJpbmcsIHdhZ2VyIHVpbnQ2NCwgdG9rZW4gc3RyaW5nKSAqTXNnQ3JlYXRlR2FtZSB7CiAgICByZXR1cm4gJmFtcDtNc2dDcmVhdGVHYW1lewogICAgICAgIC4uLgogICAgICAgIFRva2VuOiB0b2tlbiwKICAgIH0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/x/checkers/types/message_create_game.go#L16"}}),e._v(" "),a("p",[e._v("This data will be emitted during game creation, so add a new event key as a constant:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgU3RvcmVkR2FtZUV2ZW50VG9rZW4gPSAmcXVvdDtUb2tlbiZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/x/checkers/types/keys.go#L56"}}),e._v(" "),a("h2",{attrs:{id:"additional-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-handling"}},[e._v("#")]),e._v(" Additional handling")]),e._v(" "),a("p",[e._v("The token denomination has been integrated into the relevant data structures. Now the proper values need to be inserted in the right locations:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the helper function to create the "),a("code",[e._v("Coin")]),e._v(" in "),a("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0V2FnZXJDb2luKCkgKHdhZ2VyIHNkay5Db2luKSB7CiAgICByZXR1cm4gc2RrLk5ld0NvaW4oc3RvcmVkR2FtZS5Ub2tlbiwgc2RrLk5ld0ludChpbnQ2NChzdG9yZWRHYW1lLldhZ2VyKSkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/x/checkers/types/full_game.go#L71-L73"}})],1),e._v(" "),a("li",[a("p",[e._v("In the handler that instantiates a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSA6PSB0eXBlcy5TdG9yZWRHYW1lewogICAgLi4uCiAgICBUb2tlbjogICAgIG1zZy5Ub2tlbiwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/x/checkers/keeper/msg_server_create_game.go#L30"}}),e._v(" "),a("p",[e._v("Not to forget where it emits an event:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICAuLi4KICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLlN0b3JlZEdhbWVFdmVudFRva2VuLCBtc2cuVG9rZW4pLAogICAgKQopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/9799e2cee1a0541932ec19d5cfdcdd955be0390f/x/checkers/keeper/msg_server_create_game.go#L54"}})],1)]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/migration.html"}},[e._v("next section")]),e._v(" you will learn how to conduct chain upgrades through migrations.")],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);