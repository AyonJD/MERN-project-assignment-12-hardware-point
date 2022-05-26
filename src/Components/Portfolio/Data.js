import ProfilePic from "../../Assets/Images/mem-1.png";
import Badges from "../../Assets/Images/mem-2.png";
const CVData = {
    personalData: {
        name: "Pirghaye Fabian",
        title: "Junior - Front End - Web Developer",
        alias: "* Valden *",
        image: ProfilePic,
        badges: Badges,
        contacts: [
            {
                type: "Mail",
                value: "ayonjodder177@gmail.com"
            },
            {
                type: "Mobile",
                value: "0499/33.23.35"
            },
            //{ type: 'website', value: 'example.com' },
            {
                type: "Linkedin",
                value: "linkedin.com/in/valdenbe/"
            },
            //{ type: 'twitter', value: 'twitter.com/404' },
            {
                type: "Github",
                value: "github.com/valdenbe"
            }
        ],
        desc: [
            {
                type: "text",
                title: "Career Profile",
                content:
                    "Développeur Web Junior en fin de formation. Je recherche un stage afin de me former en entreprise."
            }
        ]
    },

    school: {
        title: "Mes Formations ",
        items: [
            {
                title: "Junior Web Developer",
                authority: "Becode Liège",
                authorityWebSite: "Becode.org",
                rightSide: "Mai 2019 - Décembre 2019"
            }
        ]
    },

    work: {
        title: "Mon Experience",
        items: [
            {
                title: "Magasinier Cariste",
                company: "Dreamland & LACHS",
                description: "/",
                companyWebSite: "/",
                datesBetween: "2018-2019"
            },
            {
                title: "Ouvrier en aménagement extérieur",
                company: "Maton Sport",
                description: "/",
                companyWebSite: "/",
                datesBetween: "2018"
            },
            {
                title: "Opérateur de production",
                company: "Sprimoglass, Belourthe & Pere Olive",
                description: "/",
                companyWebSite: "/",
                datesBetween: "2011 - 2017"
            }
        ]
    },

    skills: [
        {
            type: "Javascript",
            level: 80,
            range: 2
        },
        {
            type: "React",
            level: 80,
            range: 2
        },
        {
            type: "Express",
            level: 60,
            range: 1
        },
        {
            type: "NodeJs",
            level: 70,
            range: 1
        },
        {
            type: "MongoDB",
            level: 70,
            range: 2
        }
    ],
    colors: {
        bar: "red",
        title: {
            text: "#fff",
            background: "green"
        }
    },

    softSkills: [
        {
            title: "Mes Soft Skills",
            items: ["Communication", "Gestion du stress", "Motivation", "Curiosité"]
        }
    ],
    hobies: [
        {
            title: "Mes Hobbies",
            items: ["Jeux vidéos", "Musique", "Informatique", "Technologie"]
        }
    ]
};
export default CVData;
