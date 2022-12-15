import { randomColorString, randomTextColor } from '../randomColors';
import { style } from '../style';
import { consoleSettings } from './consoleColors';

const passions = {
    'Problem Solving': 'I like to use all my mind thinkig how to solve problems in the best way possible',
    'Data Structures': 'Totally in love with Graph, Stacks, Linked List, and so on',
    'Algorithms': 'No A* no party i would say',
};

export const passionsSentece = [
    [
        style('My Passions!', {
            styles: [consoleSettings.styles.Bold, consoleSettings.styles.Underline],
            textColor: randomTextColor(),
        }),
    ],
    ...Object.entries(passions).map(([key, value]) => [`- ${randomColorString(key)} ${value}`]),
];