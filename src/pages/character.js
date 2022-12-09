import getHash from '../utils/getHash';
import getData from '../utils/getData';

const character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${character.data.image}" alt="name">
                <h2>${character.data.name}</h2>
            </article>
            <article class="characters-card">
                <h3>Episodes: <span>${character.data.episode.length}</span></h3>
                <h3>Status: <span>${character.data.status}</span></h3>
                <h3>Species: <span>${character.data.species}</span></h3>
                <h3>Gender: <span>${character.data.gender}</span></h3>
                <h3>Origin: <span>${character.data.origin.name}</span></h3>
                <h3>Last Location: ${character.data.location.name}</h3>
            </article>
        </div>
    `
    return view;
}
export default character