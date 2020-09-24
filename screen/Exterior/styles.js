import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.SafeAreaView `
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
    margin-top:10px;
    margin-bottom:10px;
    
`;

export const BoxTitle = styled.Text `
    font-size: 24px;
    color:${({color})=>color};
    margin-left:20px;

`;
export const Money = styled.Text `
    font-size: 20px;
    color:${({color})=>color};
    margin-left:20px;
`;

export const RowCores = styled.View `
    align-items:center;
    margin-top:10px;

`;

export const ButtonCor = styled.TouchableOpacity `
    height:60px;
    width:60px;
    border-radius:35px;
    margin:14px;
   
    background: ${({color})=> color};
    border: solid ${({border, color})=> {
        if(border){
            if(color == 'red'){
                return 'white';
            }else{
                return 'red';
            }
        }
        if(!border){
            return '#E5E5E5';
        }
    }} 3px;

`;

export const Div = styled.View `
    height:2px;
    width:320px;
    background:${Colors.titlegray};
    margin-top:30px;
    margin-bottom:30px;
`;
export const Text = styled.Text `
    font-size:18px;
    margin: 5px 20px;

`;
export const BoxRow = styled.View `
    background:white;
    height:120px;
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    margin-top:40px;
    flex-direction: row;
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