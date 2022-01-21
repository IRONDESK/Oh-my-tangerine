import React from "react";

import ChatMsgOther from "../../Components/Chat/ChatMsgOther";
import ChatMsgMe from "../../Components/Chat/ChatMsgMe";

function ChatMsg({
    orderMsg,
    Role,
    UserMsg,
    MsgTime}) {
    if (Role === "other") {
        return (
            <ChatMsgOther 
            orderMsg = {orderMsg}
            UserMsg = {UserMsg}
            MsgTime = {MsgTime} />
        );
    }
    else if (Role === "me") {
        return (
            <ChatMsgMe 
            orderMsg = {orderMsg}
            UserMsg = {UserMsg}
            MsgTime = {MsgTime} />
        );
    }
};



export default ChatMsg;