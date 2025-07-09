import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Appearance, Platform, SafeAreaView,
     ScrollView, Text, View, ColorSchemeName, 
     StyleSheet, FlatList, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
// import { FlatList } from "react-native-gesture-handler";

// import { useRouter } from "expo-router";



export default function ItemScreen() {
    const router = useLocalSearchParams();
    // const { id, title, description } = router; // Access the passed parameters
    console.log("Item ID:", router);

    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme); 

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    const steps = JSON.parse(router.steps as string);
    const image = router.image as string;

    console.log("Steps:", image);

   

    return (
        <Container style={styles.contentContainer}>
            <Image
                source={{ uri: image }}
                style={styles.headerImage}
                // resizeMode="cover"
                // placeholder={{ blurhash }}
                // contentFit="cover"
                // transition={1000}
            />
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{router.title}</ThemedText>
            </ThemedView>
            <ThemedText type="defaultSemiBold">{router.description}</ThemedText>
            <FlatList
                    data={steps}
                    keyExtractor={(item) => item.title.toString()}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={styles.contentContainer}
                    renderItem={({ item }) => (
                        <Collapsible title={item.title}>
                            <ThemedView>
                            {/* <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text> */}
                            <FlatList
                                data={item.points}
                                keyExtractor={(point) => point.toString()}
                                renderItem={({ item }) => (
                                    <ThemedText style={styles.pointsText}>{item}</ThemedText>
                                    
                                )}
                            />
                            {/* <Text>{item.points}</Text> */}
                            </ThemedView>
                        </Collapsible>
                        
                    )}
                />

            <View>
                {/* <View style={styles.contentContainer}>
                    <Text style={styles.menuItemTitle}>{router.title}</Text>
                    <Text style={styles.menuItemText}>{router.description}</Text>
                </View> */}
                
               
                {/* <Text>{router.steps}</Text> */}
                {/* <Text>{router.steps[0].title}</Text> */}
                {/* <Text>{router.steps[0].points}</Text> */}

            </View>
            
        </Container>
    )
}

function createStyles(theme: { text?: string; background: any; headerBackground?: string; tint?: string; icon?: string; tabIconDefault?: string; tabIconSelected?: string; },
                     colorScheme: ColorSchemeName) {
        return StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                
                // alignItems: 'center',
              },
            contentContainer: {
                
                paddingTop: 10,
                paddingBottom: 20,
                paddingHorizontal: 1,
                paddingLeft: 20,
                backgroundColor: theme.background,
                height: '100%',
                width: '100%',

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
                color: theme.text,
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
            },
            pointsText: {
                fontSize: 16,
                color: theme.text,
                paddingLeft: 10, // Add padding to simulate list indentation
                marginLeft: 10,

                
            },

            headerImage: {
                color: '#808080',
                
                // position: 'absolute',
                height: 200,
                width: '100%',
                opacity: 0.5,
                paddingBottom: 10,
              },
              titleContainer: {
                flexDirection: 'row',
                gap: 8,
              },

        });
    }