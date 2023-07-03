import { styled } from "styled-components";

export const Container = styled.div`
    margin: 24px 0px;

    display: flex;
    justify-content: space-between;
`

export const Option = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ selected }) => selected ? "#075FF9" : "#B0B0B0"};

    &:nth-child(2) {
        &:before {
            content: '|';
            color: #B0B0B0;
            display: inline-block;
            margin-left: -4px;
            margin-right: 15px;
        }
    }

    div {
        background: ${({ selected }) => selected ? "#075FF9" : "#B0B0B0"};
        color: #FFFFFF;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 15px;
        height: 15px;
        padding: 1px 2px;
        margin-left: 6px;
    }
`