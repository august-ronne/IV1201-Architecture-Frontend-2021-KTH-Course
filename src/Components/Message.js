import React from "react";
import T from "../translation";

const Message = (props) => {
    return <div>{T(props.message)}</div>;
};

export default Message;
