import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import SearchScreen from './src/Screens/SearchScreen'
import ResultScreen from './src/Screens/ResultScreen'
const navigator = createStackNavigator ({
   Search: SearchScreen,
   Results: ResultScreen
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator) 