import { createBottomTabNavigator } from 'react-navigation';
import ReservationsScreen from '../screens/Reservation/ReservationScreen';

export default createBottomTabNavigator({
  ReservationsScreen: {
    screen: ReservationsScreen,
    navigationOptions: {
      tabBarLabel: 'Reservaciones',
    },
  },
  InviteScreen: {
    screen: ReservationsScreen,
    navigationOptions: {
      tabBarLabel: 'Invitados',
    },
  },
  ProfileScreen: {
    screen: ReservationsScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  },
}, {
  initialRouteName: 'ReservationsScreen',
});
