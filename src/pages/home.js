import getData from "../utils/getData";

const home = async () => {
    let characters = await getData();
    const view = `
        <div class="characters">
            ${characters.data.results.map(character => `
                <article class="character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `
    return view
}
export default home;