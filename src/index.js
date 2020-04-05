import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';
import {ContactList} from './components/ContactList';
import {ContactDetails} from './components/ContactDetails';

Icon.loadFont();

Navigation.registerComponent('ContactList', () => ContactList);
Navigation.registerComponent('ContactDetails', () => ContactDetails);

export default () =>
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'ContactList',
                options: {
                  topBar: {
                    title: {
                      text: 'Contacts',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
