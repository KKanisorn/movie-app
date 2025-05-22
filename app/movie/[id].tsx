import {View, Text, ActivityIndicator, ScrollView, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useLocalSearchParams} from "expo-router";
import useFetch from "@/services/useFetch";
import {fetchMovieDetails} from "@/services/api";
import colors from "tailwindcss/colors";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";



const MovieDetails = () => {
    // const [picturePath, setPicturePath] = useState("");

    let picturePath =""
    const {id} = useLocalSearchParams()

    // @ts-ignore
    const {data: movie, loading, error} = useFetch(() => fetchMovieDetails({ query : id as number}));



    if(loading){
        <ActivityIndicator size="large" color="#fffff"/>
        // console.log("Loading")
    }


    picturePath = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    // console.log(picturePath);
    console.log(movie);
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <ScrollView className="gap-3">
                <Image source={{uri: picturePath}} resizeMode="stretch" className="rounded-lg mr-3 mb-3 w-full h-[420px]"/>
                <View className="px-5 mt-3 gap-3">
                    <Text className="text-white text-lg font-bold">{movie?.title}</Text>
                    <View className="flex flex-row">
                        <Text className="text-white">{movie?.release_date.slice(0,4)} • </Text>
                        <Text className="text-white">{Math.round(movie?.runtime/60)}h {Math.round(movie?.runtime%60)}m</Text>
                    </View>

                    <View className="flex flex-row gap-5">
                        <View className="flex flex-row">
                            <Image source={icons.star} />
                            <Text className="text-white">{movie?.vote_average}/10</Text>
                            <Text className="text-white">({movie?.vote_count}k)</Text>
                        </View>
                        <View>
                            <Text className="text-white">Data</Text>
                        </View>
                    </View>

                    <Text className="text-white">Overview</Text>
                    <Text className="text-white">{movie?.overview}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


export default MovieDetails;