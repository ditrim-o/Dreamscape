import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import DreamList from '../DreamList/DreamList';
import { Dimensions } from 'react-native';
import AddDream from '../AddDream/AddDream';
import AddDreamMenu from '../AddDreamMenu/AddDreamMenu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearDreams, getDreamsFromLS } from '../../store/actions/dreamsActions';
const wwidth = Dimensions.get("window").width;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomePage = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getDreamsFromLS()(dispatch)
        //clearDreams()
    }, [])


    return (
        <Drawer.Navigator
            initialRouteName="DreamList"
            screenOptions={{
                drawerStyle: { width: wwidth * 0.25, },
                headerShown: false,
                gestureEnabled: false
            }}
            drawerContent={props => <HomeSidebar {...props} />}>
            <Drawer.Screen name="DreamList" component={DreamList} />
            <Drawer.Screen name="AddDreamMenu" component={AddDreamMenu} />
            <Drawer.Screen name="Article" component={DreamList} />
        </Drawer.Navigator>

    )

}

export default HomePage