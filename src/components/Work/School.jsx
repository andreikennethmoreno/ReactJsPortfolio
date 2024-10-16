import EducItem from "./EducItem";


function School() {
    const educationData = [
        {
            logoSrc: "https://media.designrush.com/inspiration_images/131656/conversions/_1523460223_965_Harvard-Wreath-Logo_ab2ece9fbd52-desktop.jpg",
            title: "CS50x Harvard",
            duration: "2/23 - 5/23",
            link: "https://certificates.cs50.io/dab0986a-5bf5-4568-89bf-ce526b8a5cb1.pdf?size=letter"
        },
        {
            logoSrc: "https://media.designrush.com/inspiration_images/131656/conversions/_1523460223_965_Harvard-Wreath-Logo_ab2ece9fbd52-desktop.jpg",
            title: "CS50w Harvard",
            duration: "12/23 - 6/24",
            link: "https://certificates.cs50.io/07cf8951-7096-4a72-9245-fcba75963f94.pdf?size=letter"
        },
        {
            logoSrc: "https://freelogopng.com/images/all_img/1683006968udemy-icon-png.png",
            title: "WebDev Udemy",
            duration: "2/24 - 8/24",
            link: "https://udemy-certificate.s3.amazonaws.com/image/UC-39cc4dc6-2efe-4bb3-8903-c60993ba2cd7.jpg?v=1724748463000"
        },
        {
            logoSrc: "https://upload.wikimedia.org/wikipedia/en/d/d2/Cavite_State_University_%28CvSU%29.png",
            title: "CompSci CVSU",
            duration: "8/2022 - Present",
            link: "#"
        }
    ];

    return (
        <div className="row my-5 flexed center-container px-3">
            {educationData.map((item, index) => (
                <EducItem 
                    key={index}
                    logoSrc={item.logoSrc}
                    title={item.title}
                    duration={item.duration}
                    link={item.link}
                />
            ))}
        </div>
    );
}

export default School;