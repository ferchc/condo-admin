import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from './appNavigator';

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
  },
  {
    initialRouteName: 'App',
  }
)

export default createAppContainer(RootNavigator);
