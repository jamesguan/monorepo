
import { Navigation } from "react-native-navigation";
import Home from './Home';
import MapScreen from './MapScreen';

Navigation.registerComponent('com.myApp.Home', () => Home);
Navigation.registerComponent('com.myApp.MapScreen', () => MapScreen);