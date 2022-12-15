import { randomColorString, randomTextColor } from '../randomColors';
import { style } from '../style';
import { consoleSettings } from './consoleColors';

export const repoSentence = [
    [
        style('Do you want to build Something like this? check the source code at:', {
            styles: [consoleSettings.styles.Bold, consoleSettings.styles.Underline],
            textColor: randomTextColor(),
        }),
    ],
    [
        `${randomColorString('Repo')}: https://github.com/MrCode1997/iamgigione`,
    ],
];