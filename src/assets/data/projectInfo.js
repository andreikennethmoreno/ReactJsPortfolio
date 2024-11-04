import PomoImg from  "../img/proj/pomodorify-thumb.png"
import BookOwlImg from "../img/proj/bookowl-thumb.png"
import GetMP3Img from "../img/proj/mp3-thumb.png"
import ShoutImg from "../img/proj/Shoutout-thumb.png"

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
        title: 'ShoutOut 📢',
        description: 'A deployed full-stack app for sign-up and login, displaying all users upon signing in with JWT authentication and DaisyUI.',
        imgSrc: ShoutImg,
        codeLink: 'https://github.com/andreikennethmoreno/-jwt-deployment-pass.git',
        demoLink: 'https://shoutout-smoky.vercel.app/',
        technologies: ['Node', 'React', 'Postgre', 'Tailwind']
    },
    {
        id: 3,
        navId: "3",
        title: 'Pomodorify 🍅',
        description: 'Task management app with React Countdown timers, Howler.js sound alerts, and DaisyUI styling.',
        imgSrc: PomoImg,
        codeLink: 'https://github.com/andreikennethmoreno/Pomodorify.git',
        demoLink: 'https://pomodorifybydreikenn.netlify.app/',
        technologies: ['React', 'Redux', 'Tailwind']
    },
    {
        id: 4,
        navId: "4",
        title: 'GetMp3 🎶',
        description: 'Download your favorite tracks effortlessly with our MP3 Downloader, powered by the YouTube API using ytdl-core and yt-search.>',
        imgSrc: GetMP3Img,
        codeLink: 'https://github.com/andreikennethmoreno/GetMP3-Music',
        demoLink: 'https://drive.google.com/file/d/146yCIQo_V7a2oTLCIHD327O7Gxe8X_iT/view?usp=sharing',
        technologies: ['Node', 'EJS', 'API']
    },
   
];



export default projects;
