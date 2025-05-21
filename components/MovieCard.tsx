import { View, Text } from 'react-native';

const MovieCard = ({item} : any) => {

    return (
        <View >
            <Text className="text-sm text-white">{item.title}</Text>
        </View>
    )

}

export default MovieCard;