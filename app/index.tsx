import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-amber-900">
      <ScrollView className="flex-1 px-6">
        <View className="flex-row gap-8 justify-center items-center mt-4 mb-8">
          <View>
            <Text className="text-4xl text-center font-bold text-yellow-400">MOCKSHA</Text>
            <Text className="text-orange-300 text-sm mt-1">Ignorantia juris non excusat</Text>
          </View>
          <View className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Text className="text-black text-xl font-bold">👤</Text>
          </View>
        </View>

        {/* Know Your Rights Section */}
        <View className="mb-8">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-white text-4xl font-bold leading-tight">
              Know Your{'\n'}Rights
            </Text>
            <View className="flex items-center justify-center">
              <View className="w-20 h-20 border-4 border-purple-600 rounded-full flex items-center justify-center">
                <Text className="text-green-400 text-2xl font-bold">30%</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-full self-start">
            <Text className="text-black font-bold text-lg">ज्ञान शक्ति है</Text>
          </TouchableOpacity>
        </View>

        {/* Game On Section */}
        <View className="mb-6">
          <Text className="text-green-400 text-4xl font-bold mb-4">Game On!</Text>
          
          <TouchableOpacity className="bg-purple-800 rounded-2xl p-6 mb-6">
            <View className="flex-row items-center mb-4">
              <View className="mr-4">
                <Text className="text-6xl">📄</Text>
                <Text className="text-2xl absolute top-4 left-8">✏️</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-2xl font-bold">Negotiate</Text>
                <Text className="text-white text-2xl font-bold">or Perish</Text>
              </View>
            </View>
            
            <TouchableOpacity className="bg-orange-500 px-6 py-3 rounded-full self-center">
              <Text className="text-black font-bold text-lg">START GAME</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Select Trials Section */}
        <View className="mb-8">
          <Text className="text-orange-300 text-lg mb-2">देवायाची चित्र (Under Litigation)</Text>
          <Text className="text-white text-3xl font-bold mb-6">Select Trials</Text>
          
          <View className="flex-row justify-between mb-6">
            <TouchableOpacity className="bg-amber-900 border-2 border-orange-500 rounded-2xl p-6 flex-1 mr-3 items-center">
              <Text className="text-6xl mb-2">⚖️</Text>
              <Text className="text-white text-xl font-bold">Mock Trials</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-purple-800 rounded-2xl p-6 flex-1 ml-3 items-center">
              <View className="mb-2">
                <Text className="text-4xl">📄</Text>
                <Text className="text-2xl absolute top-0 left-6">✏️</Text>
              </View>
              <Text className="text-white text-xl font-bold">Will Wars</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity className="bg-green-500 px-8 py-4 rounded-full self-center">
            <Text className="text-black font-bold text-lg">VIEW ALL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
