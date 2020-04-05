import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';
import {ContactList} from './components/ContactList';

Icon.loadFont();

Navigation.registerComponent('ContactList', () => ContactList);

export default () =>
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'ContactList',
              },
            },
          ],
        },
      },
    });
  });
