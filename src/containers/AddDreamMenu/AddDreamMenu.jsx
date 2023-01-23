
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddDream from '../AddDream/AddDream';
import AddDreamSettings from '../AddDreamSettings/AddDreamSettings';
import BottomBarAddDream from '../BottomBarAddDream/BottomBarAddDream';


const BottomBar = createMaterialTopTabNavigator();

const AddDreamMenu = () => {
    return (
        <BottomBar.Navigator backBehavior={'none'} tabBarPosition={'bottom'} initialRouteName="AddDream" tabBar={props => <BottomBarAddDream {...props} />}>
            <BottomBar.Screen name="AddDream" component={AddDream} options={{ animationEnabled: false, key: '1', presentation: 'containedtransparentModal' }} />
            <BottomBar.Screen name="DreamSettings" component={AddDreamSettings} options={{ animationEnabled: false, key: '2', presentation: 'containedtransparentModal' }} />
        </BottomBar.Navigator>
    )
};

export default AddDreamMenu

