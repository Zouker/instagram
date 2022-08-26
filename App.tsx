import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Entypo, Feather, FontAwesome5, Fontisto, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';

const storiesData = [
    {
        id: 1,
        title: 'Your story',
        src: require('./assets/img/ava1.jpg'),
    },
    {
        id: 2,
        title: 'sergey',
        src: require('./assets/img/ava2.jpg'),
    },
    {
        id: 3,
        title: 'mr.dee',
        src: require('./assets/img/ava3.jpg'),
    },
    {
        id: 4,
        title: 'challenge',
        src: require('./assets/img/ava4.jpg'),
    },
    {
        id: 5,
        title: 'react-lover',
        src: require('./assets/img/ava5.jpg'),
    },
    {
        id: 6,
        title: 'rn_4ever',
        src: require('./assets/img/ava6.jpg'),
    },
    {
        id: 7,
        title: 'monkey',
        src: require('./assets/img/ava7.png'),
    },
    {
        id: 8,
        title: 'insta-girl',
        src: require('./assets/img/ava8.jpg'),
    },
    {
        id: 9,
        title: 'anna',
        src: require('./assets/img/ava9.png'),
    },
    {
        id: 10,
        title: 'yulchik',
        src: require('./assets/img/ava10.jpg'),
    },
]

const contentData = [
    {
        id: 1,
        title: 'pashtetio',
        src: require('./assets/img/content1.jpg'),
    },
    {
        id: 2,
        title: 'milaya_zlodeyka',
        src: require('./assets/img/content2.jpg'),
    },
    {
        id: 3,
        title: 'hollymarry',
        src: require('./assets/img/content3.jpg'),
    },
    {
        id: 4,
        title: 'kisaktl',
        src: require('./assets/img/content4.jpg'),
    },
    {
        id: 5,
        title: 'traektoria_boardshop',
        src: require('./assets/img/content5.jpg'),
    },
    {
        id: 6,
        title: 'jorgemaryano',
        src: require('./assets/img/content6.jpg'),
    },
    {
        id: 7,
        title: 'neringa',
        src: require('./assets/img/content7.jpg'),
    },
]

type DataType = {
    id: number
    title: string
    src: any
}

export default function App() {
    const renderStories: ListRenderItem<DataType> = ({item}) => {
        return <View key={item.id} style={{marginLeft: 10, paddingLeft: 3, paddingRight: 3}}>
            <Image source={item.src} style={styles.story}/>
            <Text style={{textAlign: 'center'}}>{item.title}</Text>
        </View>
    }

    const renderContent: ListRenderItem<DataType> = ({item}) => {
        return <View style={styles.item} key={item.id}>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Image source={item.src} style={{width: '100%', height: 400}}/>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequatur dicta, earum
                explicabo maxime, nisi nostrum porro quibusdam quisquam, quo reiciendis sed sequi? Dicta facilis maxime
                molestiae optio sapiente.</Text>

        </View>
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: 390}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./assets/img/logo.png')} style={{width: 140, height: 50}}/>
                    <TouchableOpacity>
                        <Entypo name="chevron-small-down" size={24} color="black" style={{top: 16, flex: 1}}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <FontAwesome5 name="facebook-messenger" size={24} color="black" style={{top: 10, flex: 1}}/>
                </TouchableOpacity>
            </View>

            <FlatList horizontal={true}
                      data={storiesData}
                      renderItem={renderStories}
                      contentContainerStyle={{height: 120}}
                      showsHorizontalScrollIndicator={false}
            />

            <FlatList
                data={contentData}
                renderItem={renderContent}
                showsVerticalScrollIndicator={false}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <TouchableOpacity style={{flex: 1}}>
                    <MaterialCommunityIcons name="home-variant" size={40} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Fontisto name="search" size={40} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Octicons name="diff-added" size={40} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Feather name="heart" size={40} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/img/ava1.jpg')}
                           style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'black'}}/>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    item: {
        width: 405,
        height: 505,
        padding: 5,
        margin: 5,
    },
    story: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        padding: 0,
        margin: 0,
        borderRadius: 50,
        borderStyle: 'solid',
    }
});
