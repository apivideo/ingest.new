import styled, { css } from 'styled-components'
import theme from '../../theme/default'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    color: '';
    border: 1px solid ${({ theme }) => theme.colors.grey[100]};
    cursor: pointer;
    font-weight: 500;
    font-size: ${({ theme }) => theme.text.base};
    padding: 16px 24px;
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    ${({ color }) =>
        color === 'dark' &&
        css`
            border: none;
            background: ${({ theme }) => theme.colors.grey[900]};
            color: ${({white}) => theme.colors.white};
            &:hover {
                background: ${({ theme }) => theme.colors.blue[600]};
            }
            &:disabled {
                background: ${({ theme }) => theme.colors.blue[300]};
            }
            &:active,
            &:focus {
                background: ${({ theme }) => theme.colors.blue[500]};
            }
        `}
    ${({ color }) =>
        color === 'grey' &&
        css`
        border: none;
        background: ${({ theme }) => theme.colors.grey[100]};
        color: ${({ theme }) => theme.colors.blue[600]};
        &:hover{
            background: ${({ theme }) => theme.colors.grey[100]};
            color: ${({ theme }) => theme.colors.blue[600]};
        }
        &:disabled{
            background: ${({ theme }) => theme.colors.grey[50]};
            color: ${({ theme }) => theme.colors.grey[100]};
        }
        &:active,
        &:focus{
            background: ${({ theme }) => theme.colors.blue[200]};
        }
    `}
    ${({ color }) =>
        color === 'orange' &&
        css`
        border: none;
        background: ${({ theme }) => theme.colors.orange[400]};
        color: ${({white}) => theme.colors.white};
        &:hover{
            background: ${({ theme }) => theme.colors.orange[500]};
        }
        &:disabled{
            background: ${({ theme }) => theme.colors.grey[50]};
            color: ${({ theme }) => theme.colors.grey[100]};
        }
        &:active,
        &:focus{
            background: ${({ theme }) => theme.colors.orange[500]};
        }
    `}
    ${({ shadow }) =>
        shadow &&
        css`
            ${shadow === 'all' &&
            css`
                box-shadow: ${({ theme }) => theme.shadow.regular};
            `}
            ${(shadow === 'all' || shadow === 'hover') &&
            css`
                &:hover {
                    box-shadow: ${({ theme }) => theme.shadow.medium};
                }
            `}
        `}

    ${({ size }) =>
        size === 'small' &&
        css`
            font-size: ${({ theme }) => theme.text.xs};
            padding: ${({ theme }) =>
                `${theme.spacing.xs2} ${theme.spacing.xs}`};
        `}
    &:disabled {
        box-shadow: none;
        cursor: not-allowed;
    }
`