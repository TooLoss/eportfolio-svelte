export function getIconLanguages(lang: string): string {
    const icons: Record<string, string> = {
        HTML: 'https://www.svgrepo.com/show/373669/html.svg',
        CSS: 'https://www.svgrepo.com/show/373535/css.svg',
        Svelte: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
        JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        JupyterNotebook: "https://www.svgrepo.com/show/373718/jupyter.svg",
        Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    }
    return icons[lang] || '';
}