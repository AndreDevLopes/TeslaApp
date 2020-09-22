import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    width:100%;
    height:100%;
    background:${Colors.darkness};
    
  
`;
export const Logo = styled.View `   
    align-items:center;
    padding:50px;
`;
export const Row = styled.View `
    height: 100px;
    align-items: center;   
`;
export const RowImg = styled.View `
    flex:1;
   
`;
export const Img = styled.Image `
    width:100%;

`;

export const Title = styled.Text `
    font-size:28px;
    color:${Colors.white}
`;

export const ItemTitle = styled.Text `
    font-size:32px;
    color:${Colors.white};
    margin-left:20px;
`;

export const RowInfo = styled.View `
    flex-direction: row;
    justify-content: space-evenly;

`;
export const TitleInfo = styled.Text `
    color:${Colors.white};
    font-size:28px;

`;
export const SubTitleInfo  = styled.Text `
    color:${Colors.white}

`;
export const Box = styled.View `
    width:100px;
    align-items:center;
`;
export const Div  = styled.View `
    background:${Colors.darkgrey};
    width:2px;
`;
