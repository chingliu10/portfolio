export function loadProjects() {
    return [
        {
            id: 1,
            name: "Natours", 
            description: "Back end e front end da aplicação Natours, projeto desenvolvido no curso Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 do professor Jonas Schmedtmann na Udemy. O back end foi desenvolvido em Node e Express, utilizando como banco de dados o MongoDB. O front end foi desenvolvido em Pug. A aplicação possui tours, usuários e reviews.",
            link: "https://natours-app-malu.herokuapp.com/",
            github: "https://github.com/comarialuiza/natours-front",
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
            name: "Github Overview",
            description: "Aplicação que consome a API do GitHub. O usuário pode pesquisar por usernames e a aplicação retorna o avatar, username, followers e repositórios. Também é possível ver quatro repositórios do usuário. Há um alerta caso o usuário digite um username que não é válido. A aplicação possui uma versão light e outra dark, e a opção selecionada fica salva no local storage.",
            link: "https://github-overview.netlify.app/",
            github: "https://github.com/comarialuiza/github-overview",
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
            name: "Weather Overview: Simple",
            description: "Aplicação que consome a API do Weatherstack. O usuário digita o nome de uma cidade e a aplicação retorna a descrição do clima, temperatura atual, e um ícone que representa o mesmo. Há um load durante o carregamento. O background do card muda de acordo com o clima, para uma cor que remeta à temperatura e descrição do mesmo. O background da aplicação inteira muda dependendo de caso seja dia ou noite na cidade em questão.",
            link: "https://weather-simple.netlify.app/",
            github: "https://github.com/comarialuiza/weather-overview",
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
            name: "Weather Overview: Complex",
            description: "Aplicação que consome a API do LocationIQ e Open Weather Map. O usuário digita o nome de uma cidade e a aplicação retorna a descrição do clima, temperatura agora, e um ícone que representa o mesmo. Além disso, retorna a sensação térmica, o UV index, velocidade do vento, humidade, nível de nuvens e pressão. Também há um overview dos próximos sete dias da semana, com ícone e temperatura máxima e mínima.",
            link: "https://weather-overview.netlify.app/",
            github: "https://github.com/comarialuiza/weather-overview-complete",
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