import React from 'react';
import { Image } from 'react-native';

import { Logo} from './styles';

const LogoHome = () => {
  return(<Logo>
      <Image source={require('../../assets/logo1.png')} />
  </Logo>);
}

export default LogoHome;