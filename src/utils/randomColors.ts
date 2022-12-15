import { consoleSettings, ConsoleSettings } from './constants/consoleColors';
import { style } from './style';

export const randomTextColor = (): ConsoleSettings['textColors'] => {
    const { textColors } = consoleSettings;
    const textColorsArray = Object.values(textColors);

    return textColorsArray[Math.floor(Math.random() * textColorsArray.length)];
};

export const randomBgColor = (): ConsoleSettings['bgColors'] => {
    const { bgColors } = consoleSettings;
    const bgColorsArray = Object.values(bgColors);

    return bgColorsArray[Math.floor(Math.random() * bgColorsArray.length)];
};

export const randomColorString = (str: string): string => style(str, { textColor: randomTextColor() });