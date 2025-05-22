import {View, Text, Image, Pressable} from 'react-native';
import {useRouter} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({item} : any) => {
    const router = useRouter();
    const picturePath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    return (
        <View className="gap-1">
            <Pressable
                onPress={() => {
                    // console.log(item.title)
                    router.push(`/movie/${item.id}`)
                }}
            >
                {({pressed}) =>(
                    <View
                        style={{
                            opacity: pressed ? 0.9 : 1,
                            transform: [{scale : pressed ? 0.97 : 1}]
                        }}
                    >
                        <Image source={{uri : item.poster_path  ? picturePath : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",}} resizeMode="cover"   className="rounded-lg mr-3 w-40 h-56"/>
                        {/*<Text></Text>*/}
                    </View>
                )}
            </Pressable>
            <Text className="text-sm text-white font-semibold" numberOfLines={1}>
                {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
            </Text>
            <View className="flex flex-row gap-2 items-center">
                <Image source={icons.star} className="size-4" />
                <Text className="text-white text-sm font-semibold ">{Math.round(item.vote_average/2)}</Text>
            </View>
            <Text className="text-gray-500 text-xs font-medium">Movie</Text>
        </View>
    )

}

export default MovieCard;