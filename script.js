const playlists = {
  happy: ["song1.mp3", "song2.mp3"],
  sad: ["song3.mp3", "song4.mp3"],
  relax: ["song5.mp3", "song6.mp3"],
  focus: ["song7.mp3", "song8.mp3"]
};

function showPlaylist() {
  const mood = document.getElementById('mood').value;
  const playlistEl = document.getElementById('playlist');
  playlistEl.innerHTML = '';

  if (!mood) return;

  playlists[mood].forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `${song} <audio controls src="${song}"></audio>`;
    playlistEl.appendChild(li);
  });
}
