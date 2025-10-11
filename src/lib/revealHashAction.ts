import {generateHashedText} from "$lib/hashFunctions";

export function revealText(node: HTMLElement, {duration = 1000} = {}) {
    const defaultText = node.textContent;
    node.textContent = generateHashedText(defaultText);

    let startTime: number;
    const progress = 0;

    const animate = (time: number) => {
        if (!startTime) startTime = time;
        const deltaTime = time - startTime;
        const easeCubic = (t: number): number => 1 - Math.pow(1-t, 3);
        const progress = easeCubic(Math.min(deltaTime / duration, 1)); // animation do not exced 1

        const revealLength = Math.floor(defaultText.length * progress);
        node.textContent = defaultText.slice(0, revealLength) +
            generateHashedText(defaultText.slice(revealLength));

        if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return;
}