import React, { useState } from 'react';
import MessageBoard from './MessageBoard';
import GridPanel from './GridPanel';

const CenterPanel = ({ category, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carMessages = ["Speed is life!", "Fuel your dreams!", "Burning rubber!"];
    const chibiMessages = ["birtday surprise!😊", "bestie!😁", "miss you👉👈!", "I hope your birthday comes twice a year🤞", "take care of yourself🤦‍♂️", "cause you're the only one I have😑", "I hope a graet and bright future😋","including me in it😎", "Thank you very much for being in my life🥱","That was","Embarrassing as duck but can't help!😭😭","I just have to wait for another 364 days🥲","I'll always be loyal and obidient towards you🥱🥱", "Never gonna leave you alone😝😝","Otherwise it'll be paradise🧚‍♀️","without me annoying you😁😝"];
    const messages = category === "cars" ? carMessages : chibiMessages;

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className='relative'>
            <MessageBoard
                category={category}
                messages={messages}
                index={currentIndex}
                setIndex={setCurrentIndex}  
            />
            </div>
            <GridPanel
                theme={theme}
                messages={messages}
                currentIndex={currentIndex}
                category={category}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    );
};

export default CenterPanel;
