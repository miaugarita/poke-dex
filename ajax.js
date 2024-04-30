//contenedor de tarjetas
const cards = document.getElementById("pokemonCards");

const pokemonCards = () => {

    //METODO AJAX PARA OBTENER DATOS DE POKEMONES
    $.ajax({
        type: 'GET', //acceder a la web, peticion de recursos o datos
        url: 'https://pokeapi.co/api/v2/pokemon', //url ejemplo de peticion de datos
        contentType: 'application/json', //tipo de contenido 
        // async: true,
        //ESTADOS DE LA PETICION
        beforeSend: function () {
        },
        success: function (data) {
            //parametro
            console.log(data);
            //contador de tarjetas
            let counter = 0;
            let maxCards = 15;
            for (x of data.results) {
                //console.log(x.name + ' ' + x.url);

                $.ajax({
                    type: 'GET', //acceder a la web, peticion de recursos o datos
                    url: x.url, //url ejemplo de peticion de datos
                    contentType: 'application/json', //tipo de contenido 

                    //ESTADOS DE LA PETICION
                    beforeSend: function () {
                        // console.log('CREANDO SOLICITUD :D')
                    },
                    success: function (data2) {

                        // Tipos
                        let str_types = "";
                        data2.types.forEach((element) => {
                            const typeName = element.type.name; // Obtener el nombre del tipo
                            // console.log("tipo:", typeName); // Imprimir el nombre del tipo
                            str_types += typeName + ", ";
                        });

                        // habilidad
                        let str_habilidad = "";
                        data2.abilities.forEach((element) => {
                            const typeName = element.ability.name; // Obtener el nombre del tipo
                            // console.log("habilidad:", typeName); // Imprimir el nombre del tipo
                            str_habilidad += typeName + ", ";
                        });

                        // Crea un nuevo elemento de tarjeta
                        const card = document.createElement('div');
                        card.classList.add('card');

                        // Crea la estructura interna de la tarjeta utilizando HTML
                        card.innerHTML = `
                                
                                    <img src="${data2.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data2.name}" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h4 class="card-title">${data2.name}</h4>
                                        <p class="card-text"><b>Tipo:</b> ${str_types}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>Habilidad:</b> ${str_habilidad}</li>
                                    </ul>
                                    `;

                        // Agrega la tarjeta al contenedor deseado
                        // Por ejemplo, si tienes un contenedor con el id "container", puedes hacer lo siguiente:
                        const container = document.getElementById('pokemonCards');
                        container.appendChild(card);

                    },
                    error: function (error) {
                        console.log(error); //imprimir posible error por consola
                    }
                });
            }

        },
        error: function (error) {
            console.log(error); //imprimir posible error por consola
        }
    });
};

//FUNCION DEL EVENTO DE CARGA
$(document).ready(function ($) {
    //llamar lista de pokemones
    pokemonCards();
});