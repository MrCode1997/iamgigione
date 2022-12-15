import { consoleSettings, ConsoleSettings } from './constants/consoleColors';

interface ICustomOptions {
    styles?: ConsoleSettings['styles'][],
    textColor?: ConsoleSettings['textColors'];
    bgColor?: ConsoleSettings['bgColors'];
}

type Style = (str: string, customOptions?: ICustomOptions) => string;

export const style: Style = (str, customOptions) => {
    const defaaulOptions = {
        styles: [],
        textColor: '',
        bgColor: '',
    };
    const options = {
        ...defaaulOptions,
        ...customOptions,
    };

    const strToLog = [
        options.styles.join(''),
        options.bgColor,
        options.textColor,
        str,
        consoleSettings.styles.Reset,
    ].join('');

    return strToLog.trim();
};