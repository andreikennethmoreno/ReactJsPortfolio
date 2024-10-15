import CryptoProjImg from "../img/proj/crypto-thumb.png"
import BookOwlImg from "../img/proj/bookowl-thumb.png"
import GetMP3Img from "../img/proj/mp3-thumb.png"
import SimplePortImg  from "../img/proj/portf-thumb.png"
import McRoImg from "../img/proj/mcro-thumb.png" 
import GemBotImg from "../img/proj/gembot100-thumb.png"

// bOOK WHITE NODE
// MP3 BlACKK NODE
// PORTF WHITE REACT
// CRYPTO BLACK NODE
// NIKE WHITE DJANGO 
// GEMBOT BLACK GODOT


const projects = [
    {
        id: 1,
        navId: "1",
        title: 'BookOwl 📚',
        description: 'Track your favorite books with BookOwl, using the Google Books API and secure access via JWT and Google OAuth.',
        imgSrc: BookOwlImg,
        codeLink: 'https://github.com/andreikennethmoreno/BookOwl',
        demoLink: 'https://youtu.be/CcioVdIVKcg',
        technologies: ['Node', 'EJS', 'Postgre', 'API']
    },
    {
        id: 2,
        navId: "2",
        title: 'GetMp3 🎶',
        description: 'Download your favorite tracks effortlessly with our MP3 Downloader, powered by the YouTube API using ytdl-core and yt-search.',
        imgSrc: GetMP3Img,
        codeLink: 'https://github.com/andreikennethmoreno/GetMP3-Music',
        demoLink: 'https://drive.google.com/file/d/146yCIQo_V7a2oTLCIHD327O7Gxe8X_iT/view?usp=sharing',
        technologies: ['Node', 'EJS', 'API']
    },
    {
        id: 3,
        navId: "3",
        title: 'SimplePortfolio 🖼️',
        description: 'A quick and easy to build portfolio with a contact page via Email.js and mobile responsiveness using Bootstrap.',
        imgSrc: SimplePortImg,
        codeLink: 'https://github.com/andreikennethmoreno/SimplePortfolio',
        demoLink: 'https://youtu.be/xTZEn_xfzNA?si=1yEju07g2nCCjzkT',
        technologies: ['React', 'Bootstrap']
    },
    {
        id: 4,
        navId: "4",
        title: 'CoinQuest 💸',
        description: 'Explore the world of digital assets with our Conquest website, powered by real-time data from the CoinGecko API.',
        imgSrc: CryptoProjImg,
        codeLink: 'https://github.com/andreikennethmoreno/CoinQuest-Crypto.git',
        demoLink: 'https://example.com/',
        technologies: ['Node', 'EJS', 'API']
    },
    {
        id: 5,
        navId: "5",
        title: 'McRos 🥗',
        description: 'Order your favorite fast food online with our site, complete with a PDFKit-powered receipt generator for easy tracking.',
        imgSrc: McRoImg,
        codeLink: 'https://github.com/andreikennethmoreno/McRos-POS/',
        demoLink: 'https://www.youtube.com/watch?v=gPXh0QrvyXI',
        technologies: ['Flask', 'Jinja' , 'SQLite']
    },
    {
        id: 6,
        navId: "6",
        title: 'GemBot100 👾',
        description: "Join Gembot in an adventure, where you collect 100 gems to win! Enjoy vibrant pixel art made in Aseprite and Photoshop.",
        imgSrc: GemBotImg,
        codeLink: 'https://github.com/andreikennethmoreno/McRos-POS/',
        demoLink: 'https://youtu.be/r49kK69Ze2g?si=HLGn53LE-2IYQtmY',
        technologies: ['Godot', 'GD Script']
    },
];



export default projects;
