export const startTimeGen = (videoStartMin, videoStartSec) =>
  videoStartMin * 60 + videoStartSec;

export const endTimeGen = (startTime) => startTime + 15;

export const youtubeParser = (url) => {
  if (url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);

    return match && match[7].length === 11 ? match[7] : false;
  }
  return;
};
