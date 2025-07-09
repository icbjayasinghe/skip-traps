import { StyleSheet, Appearance, ColorSchemeName, 
    Platform, SafeAreaView, ScrollView, FlatList,
    Image, View, Text, Pressable } 
from "react-native";
import { Colors } from "@/constants/Colors";
// import { MENU_ITEMS } from "@/constants/MenuItems";
import MenuImages from "@/constants/MenuImages";
import { useRouter } from "expo-router"; // Import useRouter
import { useEffect, useState } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';



// Ensure MenuImages is typed as an array
const MenuImagesArray: any[] = Object.values(MenuImages);

export default function MenuScreen() {

    const [menuItems, setMenuItems] = useState<any[]>([]);

    useEffect(() => {
    async function loadData() {
      const items = await fetchData();
      setMenuItems(items);
    };
    loadData();
  }, []);

    const router = useRouter();
    const handleItemPress = (item: { id: number; title: string; description: string; steps: [{title: string, points: []}]; image_url: string; },
        image: Object) => {
        router.push({
          pathname: "/item",
          params: { id: item.id, title: item.title, description: item.description, steps: JSON.stringify(item.steps), image: item.image_url },
        });
      };

    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme); 
    const separatorComp =  <View style={styles.separator} />;
    const footerComp = <Text style={{ color: theme.text}}>End of Menu</Text>;
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList data={menuItems}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No Item</Text>}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handleItemPress(item, MenuImagesArray[item.id - 1])}>
                        <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image source={ {uri: item.image_url}} 
                                style = {styles.menuImage}/>

                        {/* <Image source={MenuImages[item.id - 1]} /> */}
                        </View>
                    </Pressable>
                    
                    

                )}
                />

            
        </Container>
    )
    }

async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "skip-trap"));
    const items: any[] = [];
    querySnapshot.forEach((doc) => {
      console.log(`${JSON.stringify(doc.id)} => ${doc.data().item}`);
      items.push(doc.data().item);
    });
    console.log("Fetched Items:", items[0]);
    return items[0];
}

function createStyles(theme: { text?: string; background: any; headerBackground?: string; tint?: string; icon?: string; tabIconDefault?: string; tabIconSelected?: string; },
                     colorScheme: ColorSchemeName) {
        return StyleSheet.create({
            contentContainer: {
                paddingTop: 10,
                paddingBottom: 20,
                paddingHorizontal: 12,
                backgroundColor: theme.background,
            },
            separator: {
                height: 1,
                backgroundColor: colorScheme === "dark" ? 'papayawhip' : "#000",
                width: "50%",
                maxWidth: 300,
                marginHorizontal: "auto",
                marginBottom: 10,
            },
            footerComp: {
                marginHorizontal: "auto",
            },
            row: {
                flexDirection: "row",
                width: "100%",
                maxWidth: 600,
                height: 100,
                marginBottom: 10,
                borderStyle: "solid",
                borderColor: colorScheme === "dark" ? 'papayawhip' : "#000",
                borderWidth: 1,
                borderRadius: 20,
                overflow: "hidden",
                marginHorizontal: "auto",
            },
            menuTextRow: {
                width: "65%",
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 5,
                flexGrow: 1,
            },
            menuItemTitle: {
                fontSize: 18,
                textDecorationLine: "underline",
            },
            menuItemText: {
                // fontSize: 16,
                color: theme.text,
            },
            menuImage: {
                width: 100,
                height: 100,
            }

        });
    }