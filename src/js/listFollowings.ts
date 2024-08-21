import {Octokit} from "@octokit/core";
import {GH_TOKEN} from "../config";
import {GH_USER} from "../config";
const user : string = GH_USER
const apiRouteUsers: string = 'https://api.github.com/users/'

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: GH_TOKEN
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