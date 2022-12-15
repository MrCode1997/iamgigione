import { baseInfoSentence } from './utils/constants/baseInfo';
import { skillsSentence } from './utils/constants/skills';
import { passionsSentece } from './utils/constants/passions';
import { linksSentece } from './utils/constants/links';
import { repoSentence } from './utils/constants/repo';

const log = console.log;

export const iamgigione = () => {
    baseInfoSentence.forEach((phrase: string[]) => log(phrase.join(' ')));
    log('\n');
    skillsSentence.forEach((phrase: string[]) => log(phrase.join(' ')));
    log('\n');
    passionsSentece.forEach((phrase: string[]) => log(phrase.join(' ')));
    log('\n');
    linksSentece.forEach((phrase: string[]) => log(phrase.join(' ')));
    log('\n');
    repoSentence.forEach((phrase: string[]) => log(phrase.join(' ')));
}