import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import Beach from '../components/search/beach/Beach';
import Mountain from '../components/search/mountain/Mountain';
import Camping from '../components/search/camping/Camping';
import SeachBar from '../components/search/search-bar/SearchBar';

const BEACH = 'BEACH';
const MOUNTAIN = 'MOUNTAIN';
const CAMPING = 'CAMPING';

export default function Search() {
    const [page, setPage] = useState<any>(BEACH);

    const renderPage = () => {
        switch (page) {
            case BEACH:
                return <Beach />;
            case MOUNTAIN:
                return <Mountain />;
            case CAMPING:
                return <Camping />;
            default:
                return <Beach />;
        }
    };

    return (
        <View style={styles.container}>
            {/* 1 Search-menu */}
            <View style={styles.searchBarContainer}>
                <SeachBar />
            </View>
            {/* 2 nav option */}
            <View style={styles.navMenuContainer}>
                <NavMenu page={page} setPage={setPage} />
            </View>
            {/* 3 Render Box Image */}
            <View style={styles.renderBox}>{renderPage()}</View>
        </View>
    );
}

const NavMenu = ({ page, setPage }: any) => {
    return (
        <View style={styles.navMenu}>
            <TouchableOpacity style={styles.navItem} onPress={() => setPage(BEACH)}>
                <MaterialCommunityIcons name="beach" size={24} color="black" />
                <Text>Beach</Text>
                {page == BEACH ? <View style={styles.activeTabIndicator}></View> : null}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => setPage(MOUNTAIN)}>
                <FontAwesome6 name="mountain" size={20} color="black" />
                <Text>Mountain</Text>
                {page == MOUNTAIN ? <View style={styles.activeTabIndicator}></View> : null}
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => setPage(CAMPING)}>
                <FontAwesome6 name="house-flag" size={20} color="black" />
                <Text>Camping</Text>
                {page == CAMPING ? <View style={styles.activeTabIndicator}></View> : null}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebfdff',
        flex: 1
    },
    searchBarContainer: {
        padding: 20
    },
    navMenuContainer: {
        height: 60,
        width: '100%'
    },
    renderBox: {
        height: '80%',
        width: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    navMenu: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navItem: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeTabIndicator: {
        width: '100%',
        height: 2,
        backgroundColor: '#49c2d1',
        position: 'absolute',
        bottom: 0
    }
});
