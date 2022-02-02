import React from 'react';
import Input from "../Input/Input";
import Textarea from "../Input/Textarea";

function Forms() {
    return (
        <div>
            <Input placeholder={"ваше имя"} />
            <Input placeholder={"+7 (977) 777-77-77"} />
            <Textarea />
        </div>
    );
}

export default Forms;