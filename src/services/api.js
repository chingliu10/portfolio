export function loadProjects() {
    return [
        {
            id: 1,
            name: "My Portfolio", 
            description: "This is my portfolio website build with react, styled components and node.",
            link: "https://www.dicksonbagenzi.tech/",
            github: "https://github.com/chingTheCoder/portfolio",
            image: "portfolio.png",
            stack: [
                { 
                    id: 1,
                    name: "Node",
                    icon: "node.svg",
                    link: "https://nodejs.org/"
                },
                {
                    id: 2,
                    name: "React",
                    icon: "react.svg",
                    link: "https://reactjs.org/"
                },
                {
                    id: 3,
                    name: "Styled components",
                    icon: "styled-components.png",
                    link: "https://styled-components.com/"
                }
            ]
        },
        {
            id: 2,
            name: "MovBies",
            description: "A web app that shows movies and series built with react, and tmdb movie Api.",
            link: "https://movbies.netlify.app/",
            github: "https://github.com",
            image: "movbies.png",
            stack: [
                { 
                    id: 1,
                    name: "Node",
                    icon: "node.svg",
                    link: "https://nodejs.org/"
                },
                {
                    id: 2,
                    name: "React",
                    icon: "react.svg",
                    link: "https://reactjs.org/"
                }
            ]
        },
        {
            id: 3,
            name: "Abc Emporio",
            description: "A portfolio website for a client, the website showcase's the sanitary products at abc, The website is built using HTML, CSS, JavaScript and PHP.",
            link: "https://abcemporio.co.tz/",
            github: "https://github.com",
            image: "abc.png",
            stack: [
                { 
                    id: 1,
                    name: "Php",
                    icon: "php.svg",
                    link: "https://php.net/"
                },
                { 
                    id: 2,
                    name: "JavaScript",
                    icon: "javascript.svg",
                    link: "https://https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                },
            ]
        },
        {
            id: 4,
            name: "Neb Construction",
            description: "A construction website for a client. The website is built using HTML, CSS, JavaScript and PHP. The website is responsive and has a contact form that sends an email to the client.",
            link: "https://nebconstruction.co.tz/",
            github: "https://github.com",
            image: "neb.png",
            stack: [
                { 
                    id: 1,
                    name: "Php",
                    icon: "php.svg",
                    link: "https://php.net/"
                },
                { 
                    id: 2,
                    name: "JavaScript",
                    icon: "javascript.svg",
                    link: "https://https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
                },
            ]
        }
    ]
}