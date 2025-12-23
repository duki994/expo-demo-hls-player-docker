import { useEvent } from 'expo';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';


type Props = {
  videoSource: VideoSource;
  pauseButtonTitle?: string;
  playButtonTitle?: string;
}

export default function VideoPlayer({ videoSource: source, pauseButtonTitle = "Pause", playButtonTitle = "Play" }: Props) {
  const player = useVideoPlayer(source, player => {
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  }, [isPlaying, player]);

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? pauseButtonTitle : playButtonTitle}
          onPress={handlePlayPause}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
