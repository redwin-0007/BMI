// import navigation

import {createAppContainer} from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'

// import screens
import Home from './screens/Home'
import Heightclculator from './screens/Heightclculator'
import BMIhome from './screens/BMIhome'
import weight from './screens/weight'
import exercise from './screens/exercise'


const MainNavigator = createStackNavigator(
  {
    Home:{screen:Home},
    Heightclculator:{screen:Heightclculator},
    BMIhome:{screen:BMIhome},
    weight:{screen:weight},
    exercise:{screen:exercise},
    
   

  },{
    defaultNavigationOption:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:"#b83227"
      },
      headerTintStyle:{
        color:'#fff'
      }
    }
  }
)
const App= createAppContainer(MainNavigator)
export default App
