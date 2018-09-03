import styled from 'styled-components';

export const Container = styled.div`
    postion:relative;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height:50px;
    align-self:flex-end;
`;

export const Bar = styled.div`
    position:relative;
    display:flex;
    min-width:50%;
    height:70px;
    background-color:rgb(125,125,125,0.6);
    margin-bottom:${({ displayMenu }) => displayMenu ? 0 : '-80px'};
    border-radius:3px;
    transition: margin-bottom 0.1s ease-in-out;
`;