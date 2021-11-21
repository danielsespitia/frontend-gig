// Context
import { useAppContext } from '../context/app-context';

// Utils
import { startTimeGen, endTimeGen, youtubeParser } from '../utils';

function YouTubeService() {
  const {
    state: { userData },
  } = useAppContext();

  const { video, videoStartMin, videoStartSec } = userData;

  const youtubeId = youtubeParser(video);
  const startTime = startTimeGen(videoStartMin, videoStartSec);
  const endTime = endTimeGen(startTime);

  return (
    <iframe
      title="userVideo"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default YouTubeService;
