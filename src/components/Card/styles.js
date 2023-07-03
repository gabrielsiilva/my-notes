import { styled } from "styled-components";

export const Container = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 15px;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #B0B0B052;
`

export const Content = styled.div`
    > p {
        font-size: 18px;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.72px;
        margin: 0 0 4px 0;
    }

    > span {
        font-size: 12px;
        color: #A0A0A0;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.48px;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DateInformation = styled.div`
    span {
        font-size: 12px;
        color: #A0A0A0;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.48px;
    }

    span:last-child {
        margin-left: 10px;
    }
`

export const CheckButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: ${({ done = false }) => done ? "#fff" : "#075FF9"};
    border: 2px solid ${({ done = false }) => done ? "#fff" : "#075FF9"};
    background: ${({ done = false }) => done ? "#075FF9" : "#fff"};
    cursor: pointer;
`

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    border: 3px solid #fff;
    background: #a2bce9;
    cursor: pointer;

    margin-left: -17px;
`
