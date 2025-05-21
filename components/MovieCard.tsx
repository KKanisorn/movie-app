import {View, Text, Image, Pressable} from 'react-native';
import {useRouter} from "expo-router";

const MovieCard = ({item} : any) => {
    const router = useRouter();
    const picturePath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    return (
        <Pressable
            onPress={() => {
                console.log("Clicked")
            }}
        >
            {({pressed}) =>(
                <View
                    style={{
                        opacity: pressed ? 0.6 : 1,
                        transform: [{scale : pressed ? 0.97 : 1}]
                    }}
                >
                    {/*<Text className="text-sm text-white">{item.title}+</Text>*/}
                    <Image source={{uri : picturePath}} resizeMode="cover" style={{ width: 150, height: 250 }}  className="mr-3"/>
                </View>
            )}
        </Pressable>
    )

}

export default MovieCard;