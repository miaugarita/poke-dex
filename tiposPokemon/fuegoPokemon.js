//SOLICITUD CON FETCH

async function hacerSolicitudFetch(x) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        for (const pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            if (!pokemonResponse.ok) {
                throw new Error('Network response was not ok for URL: ' + pokemon.url);
            }
            const data2 = await pokemonResponse.json();

            // Tipos
            let str_types = "";
            data2.types.forEach((element) => {
                const typeName = element.type.name; // Obtener el nombre del tipo
                str_types += typeName + ", ";
            });

            // habilidad
            let str_habilidad = "";
            data2.abilities.forEach((element) => {
                const typeName = element.ability.name; // Obtener el nombre del tipo
                str_habilidad += typeName + ", ";
            });

            // Crea un nuevo elemento de tarjeta
            const button = document.createElement('div');
            button.classList.add('button');

            // Crea la estructura interna de la tarjeta utilizando HTML
            button.innerHTML = `
                    <p class="card-text"><b>Tipo:</b> ${data2.name}</p>
            `;

            // Agrega la tarjeta al contenedor deseado
            const container = document.getElementById('element');
            container.appendChild(button);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}