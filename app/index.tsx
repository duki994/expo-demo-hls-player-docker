import VideoPlayer from "@/components/video-player";
import { VideoSource } from "expo-video";
import { View } from "react-native";

export default function Index() {
  const videoSource: VideoSource = {
    contentType: 'hls',
    uri: "http://localhost:8080/demo-traffic.m3u8",
    useCaching: false,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VideoPlayer videoSource={videoSource} />
    </View>
  );
}
