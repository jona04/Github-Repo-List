import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: blue;
        text-decoration: none;
    }
    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        max-width: 400px;
        color: #666;
    }
`;

export const IssuesList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 15px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: blue;
                }
            }

            span {
                background: #eee;
                color: #333;
                border-radius: 3px;
                font-size: 12px;
                padding: 3px 3px;
                margin-left: 10px;
            }
        }

        p {
            margin-top: 5px;
            color: #333;
        }
    }
`;
