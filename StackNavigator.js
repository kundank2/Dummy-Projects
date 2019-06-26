import { createStackNavigator, createAppContainer } from 'react-navigation';

import profile from './src/profile';
import home from './src/home';
import PlaneTicket from './src/PlaneTicket';
import Tours from './src/Tours'


const Stack = createStackNavigator({
   
    home: {
        screen: home,
        navigationOptions: {
          header: null,
        }
    },
    PlaneTicket: {
        screen: PlaneTicket,
        navigationOptions: {
          header: null,
        }
    },
    profile: {
        screen: profile,
        navigationOptions: {
            header: null,
        }
    },
    Tours: {
        screen: Tours,
        navigationOptions: {
            header: null,
        }
    }
})

const AppContainer = createAppContainer(Stack);

export default AppContainer;