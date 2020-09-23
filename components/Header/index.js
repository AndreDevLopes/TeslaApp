import React , {useState , useEffect}  from 'react';
import { View } from 'react-native';

import { Container , Box , Text , Row} from './styles';
import Logo from '../Logo';

const Header = ({screenId}) => {
    const [border,setBorder] = useState([false,false,false,false]);
    const [color, setColor] = useState([false,false,false,false]);
   
    useEffect(()=>{
        const test = () =>{
            if(screenId == '0'){
                setBorder([true,false,false,false]);
                setColor([true,false,false,false]);
            }
            if(screenId == '1'){
              setBorder([false,true,false,false]);  
              setColor([true,true,false,false]);
            }
            if(screenId == '2'){
                setBorder([false,false,true,false]); 
                setColor([true,true,true,false]);

            }
            if(screenId == '3'){
                setBorder([false,false,false,true]);  
                setColor([true,true,true,true]);
            }
          
        }
        test();
        
    },[])
    
  return (<Container>
      <Logo />
      <Row>
        <Box border={border[0]}>
            <Text color={color[0]}>1.Car</Text>
        </Box>
        <Box border={border[1]}>
            <Text color={color[1]}>2.Exterior</Text>
        </Box>
        <Box border={border[2]}>
            <Text color={color[2]}>3.Interior</Text>
        </Box>
        <Box border={border[3]}>
            <Text color={color[3]}>4.Autopilot</Text>
        </Box>   
      </Row>
      
  </Container>);
}

export default Header;