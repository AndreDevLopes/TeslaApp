
import styled from 'styled-components/native';

export const Container = styled.View`
    width:100%;
    margin-top:20px;
    
`;
export const Row = styled.View `
    flex-direction:row;
    justify-content: space-around;
    margin-left:-60px;
   
`;
export const Box = styled.View `
    height:36px;
    align-items:center;
    justify-content: center;
    border-bottom-color: ${({border})=> border ? '#D01000':'#FFFFFF'};
    border-bottom-width: 2px; 
`;
export const Text = styled.Text `
    font-size:16px;
    color:${({color})=>color ? '#000000' : '#E9E9E9'}
`;
