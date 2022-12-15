import { randomColorString, randomTextColor } from '../randomColors';
import { style } from '../style';
import { consoleSettings } from './consoleColors';

const skills = {
    Vue: 'I Worked on Vue for 3 years, i love it and his Reactivity system',
    Nuxt: 'I Worked on Nuxt for 3 year, really good framework to work with as a Vue developer',
    React: 'Nowadays i\'m in love with React, i really appreciate the flexibility and freedom given to the developer',
    Next: 'The best choice for enterprise React Applications',
    NodeJS: 'As a Frontend Engineer, NodeJS is the main thing you should know',
    Typescript: 'Come on, who doesn\'t like Typescript?! :D',
};

export const skillsSentence = [
    [
        style('My Skills', {
            styles: [consoleSettings.styles.Bold, consoleSettings.styles.Underline],
            textColor: randomTextColor(),
        }),
    ],
    ...Object.entries(skills).map(([key, value]) => [`- ${randomColorString(key)} ${value}`]),
];
