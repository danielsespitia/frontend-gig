function YouTubeService({ youtubeId, startTime, endTime }) {
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
