import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import DreamList from '../DreamList/DreamList';
import { Dimensions } from 'react-native';
const wwidth = Dimensions.get("window").width;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomePage = ({ navigation }) => {

    return (
        <Drawer.Navigator
            initialRouteName="DreamList"
            screenOptions={{
                drawerStyle: { width: wwidth * 0.25, },
                headerShown: false
            }}
            drawerContent={props => <HomeSidebar {...props} />}>
            <Drawer.Screen name="DreamList" component={DreamList} />
            <Drawer.Screen name="Article" component={DreamList} />
        </Drawer.Navigator>

    )

}

export default HomePage