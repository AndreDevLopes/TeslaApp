import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
export const Container = styled.SafeAreaView`
    background:${Colors.metalgrey};
    width:100%;
`;

export const Row = styled.View `
   margin-top:30px;

`;

export const Title = styled.Text `
    font-size:22px;
    color:${Colors.textgray};
    margin-left:20px;
`;

export const Img = styled.Image `
    width:100%;
    height:245px;
 

`;

export const RowInfo = styled.View `
    flex-direction: row;
    justify-content: space-around;
`;

export const Box = styled.View `
    background: white;
    height: 300px;
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    margin-top:40px;

`;



export const BoxTitle = styled.Text `
    font-size: 24px;
    color:${({color})=>color};

`;
export const Money = styled.Text `
    font-size: 20px;
    color:${({color})=>color};
`;

export const InfoTitle = styled.Text `
    font-size:30px;
    font-weight: bold;
`;
export const Div = styled.View `
    background:${Colors.metalgrey};
    width:3px;
    margin-left:25px;
`;

export const RowBox  = styled.View `
    align-items: center;
`;

export const RowInfoBox = styled.View `
    flex-direction: row;
    justify-content: space-evenly;
    margin-top:40px;
`;

export const SubTitle = styled.Text `
    color:${Colors.textgray};

`;

export const SubTitleBox = styled.View `
    margin-top:40px;
    padding-left:20px;
`;
export const RowBoxMoney = styled.View `
    flex-direction: row;
    margin-top:30px;
    justify-content: space-around;
    align-items:center;

`;
export const Button = styled.TouchableOpacity `
    border: solid ${Colors.candy};
    width:130px;
    height:40px;
    border-radius:37px;
    align-items:center;
    justify-content: center;

`;
export const ButtonText = styled.Text `
    font-size:18px;
`;