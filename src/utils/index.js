import { surpremiseMePromts } from '../constants';


export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpremiseMePromts.length);
    const randomPrompt = surpremiseMePromts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}
