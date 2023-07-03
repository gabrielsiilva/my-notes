import { styled } from "styled-components";

export const Container = styled.div`
    width: 365px;
    height: 800px;

    background: #F9F9F9;
    border-radius: 24px;
    box-shadow: -6px 15px 132px 11px rgba(0, 0, 0, 0.16);
    padding: 40px 24px;
    overflow: hidden;
`

export const Content = styled.div`
    display: grid;
    gap: 16px;

    overflow-y: auto;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;

    h1 {
        margin: 0;
        margin-left: -4px;
    }

    span {
        color: #B0B0B0;
        font-weight: 400;
    }
`

export const Button = styled.button`
    background: #E2EBFA;
    border: 0;
    padding: 10px 20px;
    border-radius: 8px;

    color: #0064E3;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;

    cursor: pointer;

    transition: background 0.2s;

    &:hover {
        background: #cadcf9;
    }
`