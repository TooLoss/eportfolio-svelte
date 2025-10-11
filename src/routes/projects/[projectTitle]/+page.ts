import type { PageLoad } from './$types';
import projects from '$data/showcase-repo.json';

export const load: PageLoad = ({ params }) => {
    const project = projects.find((p: any) => p.projectTitle === params.projectTitle);
    return { project };
};
