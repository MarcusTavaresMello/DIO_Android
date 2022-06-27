import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text, 
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/106188178?v=4';

const urlToMyGithub = 'https://github.com/MarcusTavaresMello'

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle = "light-content" />
            <View style={style.content}>
                <Image 
                    accessibilityLabel = "Marcus Mello in background blue" 
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}} 
                />
                <Text
                    accessibilityLabel="Nome: Marcus Mello"
                    style={[style.defaultText, style.name]}>
                    Marcus Mello
                </Text>
                <Text
                    accessibilityLabel="Nickname: @marcus_mello"
                    style={[style.defaultText, style.nickname]}>
                    @marcus_mello
                </Text>  
                <Text
                    accessibilityLabel="Descrição: Desenvolvedor FullStack | C# | Python"
                    style={[style.defaultText, style.description]}>
                    Desenvolvedor FullStack | C# | Python
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 10,
        fontWeight: 'bold', 
        fontSize: 24,
    },
    nickname: {
        marginBottom: 15,
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWright: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        borderRadius: 15,
        padding: 10,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});