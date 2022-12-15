import { style } from './style';
import { consoleSettings } from './constants/consoleColors';

export const colorTesting = () => {
    const { styles, textColors, bgColors } = consoleSettings;

    const stylesToPrint = Object.entries(styles).map(([key, value]) => `${key}: ${style('Style!123', { styles: [value] })}`);
    const textColorsToPrint = Object.entries(textColors).map(([key, value]) => `${key}: ${style('TextColor!123', { textColor: value })}`);
    const bgColorsToPrint = Object.entries(bgColors).map(([key, value]) => `${key}: ${style('BgColor!123', { bgColor: value })}`);

    console.log(stylesToPrint.join('\n'));
    console.log();
    console.log(textColorsToPrint.join('\n'));
    console.log();
    console.log(bgColorsToPrint.join('\n'));
};
