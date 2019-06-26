import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import login from './src/login';
import signup from './src/signup';
import signin from './src/signin';
import dashboard from './src/dashboard';


const BottomNavigator = createBottomTabNavigator({
   
    login: {
      screen: login
    },
    signup: {
      screen: signup,
    
    },
    signin: {
      screen: signin,
      
    },
    dashboard: {
      screen: dashboard
    }

   
  })

  const TabContainer = createAppContainer(BottomNavigator);

  export default TabContainer;