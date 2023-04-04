import { Image, View } from "react-native"
import styles from './TabBarBtn.styles'
import MMButton1 from './../../assets/images/mm_home.svg';
import MMButton2 from './../../assets/images/mm_compendium.svg';
import MMButton3 from './../../assets/images/mm_ds.svg';
import MMButton4 from './../../assets/images/mm_community.svg';
import MMButton5 from './../../assets/images/mm_settings.svg';
import { Asset } from 'expo-asset';

const TabBarBtn = ({ isFocused, index }) => {
    let opacity = index == 3 ? 0.5 : 1;
    const renderImg = () => {
        switch (index) {
            case 1:
                return <MMButton1 />
            case 2:
                return <MMButton2 />
            case 3:
                return <MMButton3 />
            case 4:
                return <MMButton4 />
            case 5:
                return <MMButton5 />
        }
    }

    return (<View style={{ opacity: opacity, ...styles.mmbutton }}>
        {renderImg()}
        {isFocused ? <Image source={{ uri: Asset.fromModule(require("./../../assets/images/mm_glow.png")).uri, }} style={{ ...styles.mmbuttonGlow }} /> : null}
    </View>)
}

export default TabBarBtn