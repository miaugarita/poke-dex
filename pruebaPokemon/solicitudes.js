const AjaxTarjetas = async () => {
    try {
        const response = await $.ajax({
            type: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/',
            contentType: 'application/json'
        });

        const resultados = response.results;
        for (const result of resultados) {
            const data2 = await $.ajax({
                type: 'GET',
                url: result.url,
                contentType: 'application/json'
            });

            mostrarPokemon(data2);
        }
    } catch (error) {
        console.log(error);
    }
}

const mostrarPokemon = (data) => {

    const tipos = data.types.map((element) => element.type.name).join(", ");

    const habilidades = data.abilities.map((element) => element.ability.name).join(", ");
    const peso = data.weight;
    const altura = data.height;

    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `
    <div class="card-body">
        <div class="card card-widget widget-user" style="background-color: #000; color: #ffff">
            <div class="widget-user-header bg-dark">
                <h4 class="widget-user-username">${data.name}</h4>
                <p class="widget-user-desc">${tipos}</p>
            </div>
            <center>
                <div class="widget-user-image">
                    <img class="img-circle elevation-2" src="${data.sprites.front_default /*|| 'D:\JS\PracticasJS\POO\ajaxPokedex\pruebaPokemon\noImage.jpg'*/}  " alt="${data.name}" style="width: 100px; height: 100px" alt="User Avatar">
                </div>
                <hr>
                <div class="card-footer">
                    <div class="row">
                        <div class="col border-right">
                            <div class="description-block">
                                <h5 class="description-header">${peso}</h5>
                                <span class="description-text">hg</span>
                            </div>
                        </div>
                        <div class="col border-right">
                            <div class="description-block">
                                <h5 class="description-header">${altura}</h5>
                                <span class="description-text">dam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
`;

    const container = document.getElementById('pokemonCards');
    container.appendChild(div);
}

const obtenerYmostrarPokemon = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById('pokemonCards');
        container.innerHTML = '';
        data.pokemon.forEach(pokemon => {
            fetch(pokemon.pokemon.url)
                .then(response => response.json())
                .then(data => mostrarPokemon(data));

        });
    } catch (error) {
        console.error('Error al obtener los Pokémon del tipo seleccionado:', error);
    }
};

const fetchPokemonTypes = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');
        const data = await response.json();

        return data.results.map(result => ({ name: result.name, url: result.url }));
    } catch (error) {
        console.error('Error al obtener los tipos de Pokémon:', error);
        return [];
    }
};

const addPokemonTypeButtons = async () => {
    try {
        const pokemonTypes = await fetchPokemonTypes();
        const container = document.getElementById('btnPokemonType');
        const pokemonTypeColors = {
            "normal": "#A8A77A",
            "fighting": "#C22E28",
            "flying": "#A98FF3",
            "poison": "#A33EA1",
            "ground": "#E2BF65",
            "rock": "#B6A136",
            "bug": "#A6B91A",
            "ghost": "#735797",
            "steel": "#B7B7CE",
            "fire": "#EE8130",
            "water": "#6390F0",
            "grass": "#7AC74C",
            "electric": "#F7D02C",
            "psychic": "#F95587",
            "ice": "#96D9D6",
            "dragon": "#6F35FC",
            "dark": "#705746",
            "fairy": "#D685AD",
            "shadow": "#493963",
            "unknown": "#68A090"
        };

        for (const type of pokemonTypes) {
            const button = document.createElement("button");
            button.classList.add("btn", "m-1");
            button.innerText = type.name;
            button.style.backgroundColor = pokemonTypeColors[type.name];

            button.onclick = () => {
                obtenerYmostrarPokemon(type.url);
            };

            container.appendChild(button);
        }
    } catch (error) {
        console.error('Error al agregar los botones de tipo de Pokémon:', error);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await addPokemonTypeButtons();
        await AjaxTarjetas();
    } catch (error) {
        console.error('Error al cargar la página:', error);
    }
});