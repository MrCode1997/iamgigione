import { randomColorString, randomTextColor } from '../randomColors';
import { style } from '../style';
import { consoleSettings } from './consoleColors';

const links = {
    GitHub: 'https://github.com/MrCode1997',
    LinkedIn: 'https://www.linkedin.com/in/luigi-piserchia-5a0221157/',
};

export const linksSentece = [
    [
        style('Reach me on:', {
            styles: [consoleSettings.styles.Bold, consoleSettings.styles.Underline],
            textColor: randomTextColor(),
        }),
    ],
    ...Object.entries(links).map(([key, value]) => [`- ${randomColorString(key)} ${value}`]),
];