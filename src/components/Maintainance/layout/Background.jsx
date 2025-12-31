const Background = ({ theme, activeData }) => {
    const gradient = activeData?.bgAccent || 'from-gray-900 to-black';
    return <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'car' ? gradient : 'from-pink-50 to-white'}`} />;
};

export default Background;