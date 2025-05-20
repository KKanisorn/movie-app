import {View, Text, Image, TextInput} from "react-native";
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({onPress, placeholder}: Props) => {
    return (
        <View className="items-center flex flex-row bg-[#0F0D23] px-5 py-4 rounded-full">
            <Image source={icons.search} className="size-5" tintColor="#ab8bff"/>
            <TextInput
                className="bg-[#0F0D23] flex-1 ml-2 text-white"
                placeholder={placeholder}
                onPress={onPress}
                value=""
                onChangeText={() => {}}
            />
        </View>
    );
}

export default SearchBar;