import { Image, ImageBackground, View } from "react-native"
import { ProgressBar, Text } from "react-native-paper"

interface ComponentProps {
    progress: number
}

export const SplashLoading: React.FC<ComponentProps> = ({ progress }) => {
    return (
        <View style={{ backgroundColor: "#12572B", flex: 1 }}>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../assets/splash.png")}>
                <ProgressBar
                    progress={progress}
                    color={"white"}
                    style={{ width: "70%", height: 10, alignSelf: "center", marginTop: 550, borderRadius: 5 }}
                />
            </ImageBackground>
        </View>
    )
}
