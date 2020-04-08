import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs((props) => ({
    teste: props.found,
}))`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    ${(props) =>
        !props.found &&
        css`
            input {
                flex: 1;
                border: 1px solid #e44;
                padding: 10px 15px;
                border-radius: 4px;
                font-size: 16px;
            }
        `}
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7159c1;
    border: 0;
    padding: 10px 10px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const ListRepositories = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: center;
        justify-content: space-between;

        & + li {
            border-top: 1px solid #eee;
        }

        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;
