import React, {useEffect, useRef} from 'react'

import { useField } from '@unform/core'

function Textarea({name, ...rest}){
    const textareaRef = useRef(null);
    const { fieldName, registerField, /*defaultValue, error*/}= useField(name);
    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value'
        })
    },[fieldName, registerField]);
    return(
        <textarea ref={ textareaRef} {...rest}   />
    );
}

export default Textarea