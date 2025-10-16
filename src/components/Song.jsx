import React, { useState, useRef } from 'react';
import { audio, cover } from '../assets/assets.js';
import { FaPlay, FaPause, FaSearch } from 'react-icons/fa';

const Song = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
      }
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  const filteredSongs = cover.map((item, index) => ({
    cover: item,
    audio: audio[index],
    title: `Song ${index + 1}`,
  })).filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen w-full bg-gradient-to-b to-black p-5">
      <h1 className="text-white text-3xl font-bold text-center mb-8">🎵 Top Trending Songs</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search songs..."
            className="w-full py-2 pl-10 pr-4 rounded-xl bg-white text-gray-800 focus:outline-none shadow-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* List of Songs */}
      <div className="space-y-6">
        {filteredSongs.map((song, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 hover:bg-gray-100 transition duration-200"
          >
            <img
              src={song.cover}
              alt={`Cover for ${song.title}`}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-blue-900">{song.title}</h2>
            </div>
            <button
              onClick={() => handlePlayPause(index)}
              className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full flex items-center justify-center"
            >
              {playingIndex === index ? <FaPause /> : <FaPlay />}
            </button>

            {/* Hidden Audio Element */}
            <audio
              src={song.audio}
              ref={(el) => (audioRefs.current[index] = el)}
              onEnded={() => setPlayingIndex(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Song;
