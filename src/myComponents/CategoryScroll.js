import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CategoryScroll = () => {
    const [activeCategory, setActiveCategory] = useState('Design')
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={activeCategory === 'Design' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Design')}}>
                <Icon name="home-city" size={20} color="black" />
                <Text>Design</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Icons' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Icons')}}>
                <Icon name="ticket" size={20} color="black" />
                <Text>Icons</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Islands' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Islands')}}>
                <Icon name="island" size={20} color="black" />
                <Text>Islands</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'OMG!' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('OMG!')}}>
                <Icon name="ufo-outline" size={20} color="black" />
                <Text>OMG!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Earth Homes' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Earth Homes')}}>
                <Icon name="flower-tulip" size={20} color="black" />
                <Text>Earth Homes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Surfing' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Surfing')}}>
                <Icon name="surfing" size={20} color="black" />
                <Text>Surfing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Amazing Views' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Amazing Views')}}>
                <Icon name="window-open-variant" size={20} color="black" />
                <Text>Amazing Views</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Farms' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Farms')}}>
                <Icon name="barn" size={20} color="black" />
                <Text>Farms</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Farms' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Farms')}}>
                <Icon name="barn" size={20} color="black" />
                <Text>Farms</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Top Cities' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Top Cities')}}>
                <Icon name="eiffel-tower" size={20} color="black" />
                <Text>Top Cities</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Trending' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Trending')}}>
                <Icon name="fire" size={20} color="black" />
                <Text>Trending</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Castles' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Castles')}}>
                <Icon name="castle" size={20} color="black" />
                <Text>Castles</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Beachfront' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Beachfront')}}>
                <Icon name="beach" size={20} color="black" />
                <Text>Beachfront</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'Amazing Pools' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('Amazing Pools')}}>
                <Icon name="pool" size={20} color="black" />
                <Text>Amazing Pools</Text>
                </TouchableOpacity>

                <TouchableOpacity style={activeCategory === 'New' ? styles.activeCategory : styles.categoryItem} onPress={() => {setActiveCategory('New')}}>
                <Icon name="key-plus" size={20} color="black" />
                <Text>New</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default CategoryScroll

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        padding: 10,
        gap: 10,
    },
    categoryItem: {
        padding: 10,
        alignItems: 'center',
        gap:5,
    },
    activeCategory: {
        padding: 10,
        borderBottomColor: '$primary500',
        borderBottomWidth: 2,   
        alignItems: 'center',
        gap:5,
    }
    
})