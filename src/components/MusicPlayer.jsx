import React, { useEffect, useState, useRef } from 'react';

const songs = [
    {
        title: 'Let It Be',
        artist: 'The Beatles',
        src: '/music/letitbe.mp3', // Place in public/music/
    },
    {
        title: 'Imagine',
        artist: 'John Lennon',
        src: '/music/imagine.mp3',
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        src: '/music/bohemian.mp3',
    },
];

const MusicPlayer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [lyrics, setLyrics] = useState('Fetching lyrics...');
    const audioRef = useRef(null);

    const currentSong = songs[currentIndex];

    // Play/Pause audio
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying, currentIndex]);

    // Fetch lyrics
    useEffect(() => {
        const fetchLyrics = async () => {
            setLyrics('Fetching lyrics...');
            try {
                const artist = currentSong.artist.toLowerCase().replace(/ /g, '%20');
                const title = currentSong.title.toLowerCase().replace(/ /g, '%20');
                const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
                const data = await res.json();
                if (data.lyrics) {
                    setLyrics(data.lyrics);
                } else {
                    setLyrics('Lyrics not found.');
                }
            } catch (err) {
                setLyrics('Failed to fetch lyrics.');
            }
        };

        fetchLyrics();
    }, [currentIndex]);

    const nextSong = () => {
        setCurrentIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(true);
    };

    const prevSong = () => {
        setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <div className="bg-white shadow-md rounded p-4 w-full h-auto max-h-[70vh] flex flex-col">
            <h2 className="text-xl font-bold mb-2">{currentSong.title}</h2>
            <p className="text-gray-600 mb-4">{currentSong.artist}</p>

            {/* Audio Element */}
            <audio ref={audioRef} src={currentSong.src} />

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-4">
                <button
                    onClick={prevSong}
                    className="px-3 py-1 rounded bg-blue-100 hover:bg-blue-300 transition"
                >
                    ⏮️ Prev
                </button>
                <button
                    onClick={togglePlay}
                    className="px-3 py-1 rounded bg-green-100 hover:bg-green-300 transition"
                >
                    {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <button
                    onClick={nextSong}
                    className="px-3 py-1 rounded bg-blue-100 hover:bg-blue-300 transition"
                >
                    ⏭️ Next
                </button>
            </div>

            {/* Scrollable Lyrics */}
            <div className="overflow-y-auto max-h-60 p-2 bg-gray-50 border rounded text-sm whitespace-pre-wrap text-gray-700">
                {lyrics}
            </div>
        </div>
    );
};

export default MusicPlayer;
