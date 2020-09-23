import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    width:100%;
    height:100%;
    background:${Colors.darkness};
    
  
`;

export const Row = styled.View `
    height: 100px;
    align-items: center; 
    margin-top:20px;  
`;
export const RowImg = styled.View `
    
    margin-bottom:10px;
    margin-top:20px;
   
`;
export const Img = styled.Image `
    width:100%;
    height:350px;


`;

export const Title = styled.Text `
    font-size:28px;
    color:${Colors.white}
`;

export const ItemTitle = styled.Text `
    color:${props => props.color};
    font-size:${props => props.size } ;
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
export const RowDesc = styled.View `
    margin-top:40px;
    align-items:center;

`;
export const DescBox = styled.View `
    flex-direction: row;
    margin-top:10px;
`;
export const DescTitle = styled.Text `
    color:${Colors.textgray};
`;
export const DescText = styled.Text `
    color:${Colors.white}
`;
export const RowButton = styled.View `
    height:70px;
    margin-top:20px;
    align-items:center;
    justify-content:center;
`;
export const Button = styled.TouchableOpacity `
    border: solid ${Colors.candy};
    align-items:center;
    justify-content:center;
    width:300px;
    height:54px;
    border-radius: 100px;
`;
export const BntText = styled.Text `
    color:${Colors.white};
    font-size: 18px;
`;
export const ButtonItem  = styled.TouchableOpacity `
    margin-top:10px;
    height:50px;
    width:160px;
    justify-content:center;
    align-items:center;
    
`;