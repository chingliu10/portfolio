import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container } from './styles';

export default function About() {
    return(
        <Container>
            <div className="visual">
                <img src="./images/apps.svg" alt="Logo" />
            </div>
            <div className="descriptive">
                <h1>Dickson Bagenzi</h1>
                <h3>Full stack Developer</h3>

                <p>
                "I am a web and mobile developer with expertise in React, Node.js, React Native, and JavaScript. With experience building applications using these technologies, I am capable of developing both frontend and backend systems
                </p>

                <div className="links">
                    <a href="https://linkedin.com/in/bagenzi/" target="_blank" rel="noopener noreferrer"><FiLinkedin />Linkedin</a>
                    <a href="https://github.com/chingTheCoder" target="_blank" rel="noopener noreferrer"><FiGithub /> Github</a>
                </div>
            </div>
        </Container>
    );
}