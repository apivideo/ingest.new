import React, { useEffect, useRef, useState } from 'react'
import Clipboard from 'clipboard'

import * as C from './style'

const CopyCode = ({code}) => {
    const buttonSelector = useRef(null);
    const [isCopied, setCopied] = useState(false)
    useEffect(() => {
        const clipboardData = new Clipboard(buttonSelector.current)
        clipboardData.on('success', function (e) {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 3000);
        })
        return () => {
            clipboardData.destroy()
        }
    }, [])
    return (
        <C.CopyContainer>
            <pre className={"line-numbers"}>
            <code className="language-html">
                {code}
            </code>
            </pre>
            <C.CopyButton ref={buttonSelector} data-clipboard-text={code}>
                {isCopied ? 'COPIED' : 'COPY'}
            </C.CopyButton>
        </C.CopyContainer>
    );
};

export default CopyCode;