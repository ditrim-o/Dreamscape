import { ScrollView, Text, TextInput, View } from "react-native"
import DreamListItem from "../../components/DreamListItem/DreamListItem"
import styles from './DreamList.styles'
import SeacrhBarSearch from './../../assets/images/icon_search.svg';
import { useState } from "react";

const DreamList = () => {
    const [SearchString, setSearchString] = useState('');
    return (
        <View style={styles.body_list}>

            <View style={styles.search_container}>
                <SeacrhBarSearch style={styles.searchbar_btn} />
                <TextInput
                    style={styles.searchbar_text}
                    value={SearchString}
                    onChangeText={(SearchString) => { setSearchString(SearchString) }}
                    placeholder={'Search here...'}
                    placeholderTextColor={'rgba(200,200,200,0.35)'}
                    cursorColor={'white'}
                />
            </View>

            <ScrollView style={styles.body_list_content} fadingEdgeLength={50}>
                <DreamListItem />
                <DreamListItem />
            </ScrollView>
        </View>
    )
}

export default DreamList