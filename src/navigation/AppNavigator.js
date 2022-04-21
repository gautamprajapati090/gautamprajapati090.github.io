import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AdminRootNavigator, AuthStack, RootNavigator, UserRootNavigator } from './MainNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    // Auth: AuthStack,
    // AdminRoot: AdminRootNavigator,
    UserRoot: RootNavigator,
},
    {
        initialRouteName: 'AuthLoading'
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
