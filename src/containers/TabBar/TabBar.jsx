import { TouchableOpacity, View } from 'react-native';
import styles from './TabBar.styles'
import TabBarBtn from '../../components/TabBarBtn/TabBarBtn';


function TabBar({ state, descriptors, navigation, position }) {
    const onPress = (route) => {
        navigation.navigate(route.name, { screen: "Home" });
        //route.name === "Main" ? navigation.navigate(route.name, { screen: "DreamList" }) : navigation.navigate("AddDreamMenu")
    }

    const onLongPress = (route) => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };
    return (
        <View style={styles.TabBar__View}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                if (index != 0) {
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={(e) => { onPress(route) }}
                            onLongPress={() => { onLongPress(route) }}
                            style={styles.MainMenuButtonLegit}
                            key={index}
                        >
                            <TabBarBtn
                                isFocused={isFocused}
                                index={index}
                            />
                        </TouchableOpacity>
                    );
                }


            })}
        </View>
    );
}

export default TabBar