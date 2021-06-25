import styled, { css } from 'styled-components'
import { Button } from "../button";

export const CopyButton = styled(Button)`
display: none;
    position: absolute;
    padding: 8px;
    right: 8px;
    top: 16px;
`

export const CopyContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    &:hover{
        ${CopyButton} {
            display: block;
        }
    }   
`
