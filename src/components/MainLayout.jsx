import {React, useEffect} from 'react';
import NavigationPanel from './NavigationPanel'

import GalleryViewer from './GalleryViewer';
import CenterPanel from './CenterPanel';

import carBg from '../assets/images/backgrounds/car_bg1.jpg';
import chibiBg from '../assets/images/backgrounds/cute-bg1.jpg';
import chibiSound from '../assets/audio/bip.mp3'
import carStartSound from '../assets/audio/car_rev.mp3'

const MainLayout = ({ category, theme }) => {
    const backgroundImage = category === 'cars' ? carBg : chibiBg;
    const audioFile = category === 'cars' ? carStartSound : chibiSound
    useEffect(() => {
        const audio = new Audio(audioFile)
        audio.play().catch((err) => {
        console.log("Audio playback failed: ",err);
    })
    }, [category])
    

    
    return (
        <div className={`min-h-screen bg-cover bg-center text-${theme}-900`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundBlendMode: 'overlay',
                backgroundColor: `rgba(255, 255, 255, 0.4)`}} >
            {/* Top navigation */}
            <NavigationPanel category={category} theme={theme} />

            {/* Main layout: Music + CenterPanel + Gallery */}
            <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Center: Message + Grid */}
                <div className="md:w-2/4 flex items-center justify-center min-h-screen">
                    <CenterPanel category={category} theme={theme} />
                </div>

                {/* Right side: Gallery */}
                <div className="md:w-1/4">
                    <GalleryViewer category={category} />
                </div>
            </div>
        </div>
    );
    
};


export default MainLayout;