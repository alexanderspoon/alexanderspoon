const toolNames = [
    "blender", "bootstrap", "csharp", "css", "express",
    "figma", "git", "github", "html5", "js", "mongodb",
    "mysql", "nodejs", "react", "redux", "trello",
    "unity", "aws", "aseprite", "audacity", "drive",
    "lightroom", "office", "photoshop", "premiere",
    "slack", "unreal", "xd", "zoom",
];
const projectNames = [
    "cat", "dice", "game", "room", "fortunefire",
    "greentide", "alexa", "trelloboard", "fategithub",
    "TSZvideo", "arc", "discord", "portfolio",
    "hades", "hollowknight", "interactiveComic",
    "PB", "photogrammetery", "raven",
    "truck", "gamification", "beamtours", "commission",
    "fate", "motorpool", "venturecollege", "cello",
];

const tls = {};
toolNames.forEach(tool => {
    tls[tool] = require(`../Images/Tools/${tool}.svg`);
});

const pjs = {};
projectNames.forEach(project => {
    try {
        pjs[project] = require(`../Images/Portfolio/${project}.png`);
    } catch (error) {
        try {
            pjs[project] = require(`../Images/Portfolio/${project}.PNG`);
        } catch (error) {
            console.error(error);
        }
    }
});

const projectData = [
    {
        category: "Art",
        p1: `
            Art, both traditional and digital, has been an integral part of my creative journey. My exploration began with traditional 2D art classes in middle school, followed by 3D modeling for engineering projects in high school. College then provided the opportunity to further develop my skills in various digital art forms.
        `,
        p2: `
            My strongest areas of expertise lie in 3D modeling and procedural shaders. I tend to gravitate towards highly realistic or low-poly styles, depending on the project's requirements.
        `,
        p3: `
            Photography is another artistic medium that has captured my interest, and I often group it together with the other art forms I've explored. It's currently my favorite creative outlet, allowing me to capture and preserve moments through a lens.
        `,
        skills: ["3D Modeling", "2D Art & UI/UX", "Shaders & Texturing", "Rendering", "Rigging & Animation"],
        skillPercents: [100, 80, 90, 70, 60],
        tools: [tls.blender, tls.aseprite, tls.lightroom, tls.photoshop, tls.premiere, tls.xd],
        portfolio: [
            {
                image: pjs.cat,
                title: "Shadow",
                subTitle: "Photography 2024",
                description: "",
            },
            {
                image: pjs.dice,
                title: "Metal dice",
                subTitle: "Photography 2023",
                description: "",
            },
            {
                image: pjs.room,
                title: "3D modeled room",
                subTitle: "3D Modeling 2023",
                description: "This is my first experiments with rendering in Blender. The room was created for a VR game I created called Kurikaesu.",
            },
            {
                image: pjs.hades,
                title: "Styx",
                subTitle: "Blender 2023",
                description: "Low poly model, texture, and render of the river Styx from Greek Mythology.",
            },
            {
                image: pjs.hollowknight,
                title: "Book nook",
                subTitle: "Blender 2023",
                description: "First time using Blender. Modeled, textured, and rendered a book nook inspired by Hollow Knight.",
            },
            {
                image: pjs.cello,
                title: "Cello Shader",
                subTitle: "Blender 2024",
                description: "Blender procedural shader for Cello used in music history project for the Boise State University Stein Luminary. Original model created by Blake Hilton, then modified by me.",
            },
            {
                image: pjs.arc,
                title: "Arc reactor",
                subTitle: "3D Modeling 2019",
                description: "Arc reactor I 3D modeled in High School using Inventor 2019.",
            },
            {
                image: pjs.discord,
                title: "UX/UI Design",
                subTitle: "UX/UI Design 2022",
                description: "Redesigned the Discord app for my UX/UI design class, focusing on improving user experience and visual appeal.",
            },

            {
                image: pjs.photogrammetery,
                title: "Mimic",
                subTitle: "Photogrammetery 2021",
                description: "Photogrammetery of a mimic dice box.",
            },
            {
                image: pjs.raven,
                title: "Raven",
                subTitle: "Mixed Media 2019",
                description: "Traditional mixed media art using pastels, colored pencil, and charcoal.",
            },
            {
                image: pjs.truck,
                title: "Alien Truck",
                subTitle: "Photoshop 2021",
                description: "Digital concept art made for a game. Received specifications from game designed and drew concept art from the description.",
            },
        ]
    }, 
    {
        category: "Game Development",
        p1: `
            Game development has been a significant part of my life for the past few years, ever since high school. It all started when my Latin teacher gamified the course content, and that experience completely transformed my perception of learning.
        `,
        p2: `
            One of the primary reasons I pursue game development is to explore the gamification of education. While creating entertaining games is enjoyable, it's incredibly important to me that what I create has benefits beyond mere entertainment.
        `,
        p3: `
            Throughout my studies, I've had the opportunity to develop games across various platforms, including augmented reality (AR), virtual reality (VR), desktop applications, mobile apps, and websites. While I've created the most VR games using Unity, I tend to have a preference for 2D game development.
        `,
        skills: ["Unity", "Asset Creation", "Systems Design", "Project Architecture", "AR/VR Development"],
        skillPercents: [90, 80, 100, 70, 80],
        tools: [tls.csharp, tls.github, tls.unity, tls.unreal, tls.audacity],
        portfolio: [
            {
                image: pjs.game,
                title: "Kurikaesu",
                subTitle: "VR tabletop strategy game",
                description: "Kurikaesu is a VR tabletop strategy game I have workshoped over two years in college. It's a roguelike where you use different combinations of units on a variety of maps to eliminate the enemy pieces in battle. The combat is inspired by the Civilization game series.",
            },
            {
                image: pjs.fortunefire,
                title: "Fortune Fire",
                subTitle: "Competitive blacksmithing game",
                description: "Fortune Fire is a couch co-op competitive blacksmithing game inspired by Plate Up. I created it with a team of 4. My primary role was programming object behaviors and experimenting with Unity's render pipeline to make a pixel art shader.",
            },
            {
                image: pjs.greentide,
                title: "GreenTide",
                subTitle: "AR tomodachi like game",
                description: "GreenTide is a choose your own adventure AR game inspired by Reigns. I created it in a team of 4 where I was the programmer. The city on the top dynamically changes size and the number of buildings depending on your choices in the game.",
            },
            {
                image: pjs.alexa,
                title: "IOT Alexa App",
                subTitle: "Language learning game for Echo Frames",
                description: "This is a game I created in a group of 4 that is used for language learning through Amazon Echo Frames. We created an Alexa app inspired by the game Japanese game Shiritori. You say a word, then Alexa replies with a new word where the first letter is the last letter of the word you said. This purpose of this game was to create fun way to study vocabulary. We added vocab sets from English, German, Latin, Italian, and Japanese.",
            },
            {
                image: pjs.TSZvideo,
                title: "360 Video Game",
                subTitle: "Choose your own adventure 360 video game",
                description: "This was my first experience using Unity. It's a 360 video VR choose your own adventure game.",
            },
            {
                image: pjs.interactiveComic,
                title: "Interactive comic",
                subTitle: "Comic for understanding physics concepts",
                description: "This was my first game I made as a group. It was made in Adobe Animate. It's an interactive comic explaining the empty space inside an atom.",
            },
            {
                image: pjs.PB,
                title: "Peanutbutter Mysteries",
                subTitle: "First game",
                description: "This was my first time programming, animating, and creating a game. It's a point and click adventure game created in Adobe Animate. This was made for one of my classes in my first semester of college.",
            },
        ]
    }, 
    {
        category: "Leadership Opportunities",
        p1: `
            I've had the opportunity to lead a couple of client projects, taking on the role of team lead. For an escape room project at Boise State's Luminary, I led a team of 12 GIMM students in creating an interactive experience utilizing their touch screen walls. Additionally, I served as the technology officer, leading a web development client projects for the GIMM Works development team.
        `,
        p2: `
            In GIMM Works, my responsibilities included developing code and database architecture, communicating new features and timelines with the team, and researching potential solutions to client problems. For the escape room project, I took on more of a team lead role, acting as the project's face, interacting with clients, managing work with other university departments, and hosting meetings to lead the production process in an agile environment.
        `,
        p3: `
            I enjoyed my leadership roles and found great value in mentoring new hires for the GIMM Works team, an experience that benefited both myself and the new team members.
        `,
        skills: ["Project Management", "Product Management", "Decision Making", "Conflict Resolution", "Client Communication"],
        skillPercents: [60, 90, 100, 70, 90],
        tools: [tls.trello, tls.github, tls.office, tls.drive, tls.slack, tls.zoom],
        portfolio: [
            {
                image: pjs.trelloboard,
                title: "Trello Board",
                subTitle: "Board of tasks for Escape Room Game",
                description: "I was the team lead for creating an escape room in the Stein Luminary at Boise State University. The project manager Heaven Rust and I used Trello and agile methodology to manage the team.",
            },
            {
                image: pjs.fategithub,
                title: "Github Issues",
                subTitle: "Github board for GIMM Works project",
                description: "This is the task board for a full stack web development project I did on the GIMM Works development team.",
            },
        ]
    }, 
    {
        category: "Website Development",
        p1: `
            Web development has become an unexpected passion of mine. I first learned it during my sophomore year of college, and now, three years later, I'm eager to pursue a career in the industry. While I originally chose my major for game development, the process of building websites has captured my heart more than I anticipated.
        `,
        p2: `
            My specialization lies in creating content management systems for websites, especially those related to education. I've independently designed and implemented the full production pipeline, hosting my sites through AWS. Managing and maintaining security on these websites is also within my realm of expertise.
        `,
        p3: `
            I'm constantly driven to expand my knowledge, learning new languages and frameworks for web development. Currently, I'm studying Python and Django, while continuously working on best practices and finding better ways to refactor my old code.
        `,
        skills: ["Frontend", "Backend", "Deployment", "Code Architecture", "Database Design"],
        skillPercents: [80, 100, 70, 90, 90],
        tools: [tls.html5, tls.css, tls.js, tls.mongodb, tls.mysql, tls.nodejs, tls.express, tls.react, tls.redux, tls.figma, tls.bootstrap, tls.github, tls.git, tls.aws],
        portfolio: [
            {
                image: pjs.gamification,
                title: "Project Ludus",
                subTitle: "CMS website for a college level course",
                description: "Worked with one faculty member and forty students over one year to design and develop a website for the gamification of a college-level course. The website focuses on encouraging student engagement in an asynchronous learning environment using game concepts such as experience points, badges, and quest lines. Reduced instructor workload and created opportunities for the college to create different kinds of educational content. ",
            },
            {
                image: pjs.beamtours,
                title: "Beam Tours",
                subTitle: "Campus tour and route planning website",
                description: "Created an admin portal for an app about planning campus tours. Used Google Maps API with custom location to generate a tour path.",
            },
            {
                image: pjs.fate,
                title: "F.A.T.E.",
                subTitle: "Website for evaluating faculty members of colleges",
                description: "Created a website for committees to critique and grade professor portfolios against a rubric. Critiqued designs from our UI/UX designer, then converted UI/UX designs into responsive and user-friendly interfaces. Discussed design systems with clients and created timelines for new or potential features",
            },
            {
                image: pjs.motorpool,
                title: "Motorpool",
                subTitle: "Website to take driver certification quizzes",
                description: "Inherited codebase for Boise State MotorPool website to help commercialize driving certifications. Continued development using a DevOps structure and implemented UX testing results and redesigns",
            },
            {
                image: pjs.venturecollege,
                title: "Venture College",
                subTitle: "Pitch competition website made for events",
                description: "Full stack web developer for website made for managing events/judge's scored to questions.",
            },
            {
                image: pjs.commission,
                title: "Commission Portfolio",
                subTitle: "Commisioned portfolio website for Brendon Whitford",
                description: "Portfolio website by designed by Brendon Whitford, one of my friends and peers in college. Created a code replica of his design from Figma. Website is located at https://brendonwhitford.com.",
            },
            {
                image: pjs.portfolio,
                title: "Personal Portfolio Website",
                subTitle: "Personal website to showcase projects",
                description: "Created this website with React hosted on github pages to showcase previous projects and provide an example of my code. Project can be found at: https://github.com/alexanderspoon/alexanderspoon ",
            },
        ]
    }, 
]

export default projectData