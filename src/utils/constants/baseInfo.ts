import { consoleSettings } from './consoleColors';
import { randomTextColor } from '../randomColors';
import { style } from '../style';

export const baseInfoSentence = [
    [
        style('Who am i?', {
            styles: [consoleSettings.styles.Bold, consoleSettings.styles.Underline],
            textColor: randomTextColor(),
        }),
    ],
    [
        'Ciao my name is',
        style('Gigione', { textColor: randomTextColor() }),
    ],
    [
        'And i am a',
        style('Senior Software Engineer', { textColor: randomTextColor() }),
    ],
];

