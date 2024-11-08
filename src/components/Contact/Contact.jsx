import Header from "../SubComponents/Header";
import ContactItem from "./ContactItem";
import MyResume from '../../assets/MyResume.pdf'; // Ensure this path is correct
import { LocationIcon, GmailIcon, YoutubeIcon, ResumeIcon } from "../SubComponents/Icons";

function Contact() {
    const pdfFile = MyResume;

    const openPdfInNewTab = () => {
        window.open(pdfFile, '_blank');
    };

    const sendEmail = () => {
        const recipient = "kennonirom@gmail.com"; // Replace with the recipient's email
        const subject = ""; 
        const body = "Hello, "; 
        
        // Create the Gmail link
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the Gmail compose window
        window.open(gmailLink, '_blank'); // Use '_blank' to open in a new tab
    };

    // Updated contactData
    const contactData = [
        {
            id: 1,
            icon: <ResumeIcon />,
            title: "Resume",
            detail: (<a onClick={openPdfInNewTab} className="plink">View PDF</a>
            ),
        },
        {
            id: 2,
            icon: <GmailIcon />,
            title: "Gmail",
            detail: (<a onClick={sendEmail} className="plink">kennonirom@gmail.com</a>),
        },
        {
            id: 3,
            icon: <YoutubeIcon />,
            title: "Youtube",
            detail: "Kenn Onirom",
            link: "https://www.youtube.com/@KennOnirom"
        },
        {
            id: 4,
            icon: <LocationIcon />,
            title: "Location",
            detail: "Cavite Philippines",
            link: "https://www.google.com/maps/place/Cavite/@13.865414,120.4799785,8.25z/data=!4m6!3m5!1s0x3397d4eae8163c71:0xf0c4d0843bdde727!8m2!3d14.2456329!4d120.8785658!16zL20vMDFmNnF3?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
        },
    ];

    return (
        <section className="off-white" id="contact">
            <div className="about container col-xl-10 col-xxl-8 px-5 py-5 mt-5 start">
                <div className="row flex-lg-row align-items-center g-lg-5 py-5">
                    <Header activeTitle="CONTACT" h2Title="Don't be shy! Hit me up! 👇"/>
                    <div className="row px-5 align-items-start">
                        {contactData.map(item => (
                            <ContactItem
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                detail={item.detail}
                                link={item.link} // Now this will render the button
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
