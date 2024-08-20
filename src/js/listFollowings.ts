import {Octokit} from "@octokit/core";


const ghToken: string = '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';
const user : string = 'mrfabridev'
const apiRouteUsers: string = 'https://api.github.com/users/'

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: ghToken
});

async function listFollowings()   {
    // necesito la ruta de la api completa
    try {
        const response = await octokit.request(`GET ${apiRouteUsers}+${user}/following`, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log(response);
    } catch (error) {
        console.error('Error fetching followers:', error);
    }
}

listFollowings().then(r => console.log(r));