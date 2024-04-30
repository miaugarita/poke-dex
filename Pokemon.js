class Pokemon {
    //atributos
    pokeId;
    pokeName;
    pokExp;
    pokeHeight;
    pokeWeight;
    //constructor
    constructor(id, name, height, weight, experience) {
        this.pokeId = id;
        this.pokeName = name;
        this.pokExp = experience
        this.pokeHeight = height;
        this.pokeWeight = weight;
    }

    hacerSolicitudAjax(x) {
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

                            // peso
                            let str_peso = "";
                            data2.abilities.forEach((element) => {
                                const typeName = element.weight; // Obtener el nombre del tipo
                                // console.log("peso:", typeName); // Imprimir el nombre del tipo
                                str_peso += typeName + ", ";
                            });

                            // Crea un nuevo elemento de tarjeta
                            const div = document.createElement('div');
                            div.classList.add('div');

                            // Crea la estructura interna de la tarjeta utilizando HTML
                            div.innerHTML = `
                                <div class="card card-widget widget-user" style="background-color: #000; color: #ffff">
                                    <div class="widget-user-header bg-dark">
                                        <h4 class="widget-user-username" >${data2.name}</h4>
                                        <p class="widget-user-desc">${str_types}</p>
                                    </div>
                                    <center>
                                        <div class="widget-user-image">
                                            <img class="img-circle elevation-2" src="${data2.sprites.other.dream_world.front_default}"  alt="${data2.name}" style=" width: 100px; height: 100px" alt="User Avatar">
                                        </div>
                                        <hr>
                                        <div class="card-footer">
                                            <div class="row">
                                                <div class="col border-right">
                                                    <div class="description-block">
                                                        <h5 class="description-header">${data2.weight}</h5>
                                                        <span class="description-text">hg</span>
                                                    </div>
                                                </div>
                                                <div class="col border-right">
                                                    <div class="description-block">
                                                        <h5 class="description-header">${data2.height}</h5>
                                                        <span class="description-text">dam</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">An item</li>
                                        
                                    </ul>
                                </div>                                                          
                                        `;

                            // Agrega la tarjeta al contenedor deseado
                            // Por ejemplo, si tienes un contenedor con el id "container", puedes hacer lo siguiente:
                            const container = document.getElementById('pokemonCards');
                            container.appendChild(div);

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
    }
}



let pokemonUno = new Pokemon();

// Llamar al método para hacer la solicitud AJAX
pokemonUno.hacerSolicitudAjax('https://pokeapi.co/api/v2/pokemon');
/*
class Pokemon {
    pokeName;
    pokeTypes;
    pokeImg;
    constructor(name, types, spriteUrl) {
        this.pokeName = name;
        this.pokeTypes = types;
        this.pokeImg = spriteUrl;
    }

    // Otros métodos de la clase Pokemon, si los necesitas
}

function obtenerPokemonesPorTipo(tipo) {
    $.ajax({
        type: 'GET',
        url: `https://pokeapi.co/api/v2/type/${tipo}`,
        contentType: 'application/json',
        success: function(data) {
            const pokemones = data.pokemon;
            for (let i = 0; i < pokemones.length; i++) {
                const pokemon = pokemones[i].pokemon;
                const pokemonUrl = pokemon.url;
                obtenerDatosPokemon(pokemonUrl);
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function obtenerDatosPokemon(url) {
    $.ajax({
        type: 'GET',
        url: url,
        contentType: 'application/json',
        success: function(data) {
            const nombre = data.name;
            const tipos = data.types.map(type => type.type.name);
            const spriteUrl = data.sprites.front_default;

            const nuevoPokemon = new Pokemon(nombre, tipos, spriteUrl);
            
            // Aquí podrías hacer algo con el nuevo Pokemon, como mostrarlo en la interfaz de usuario
            mostrarPokemon(nuevoPokemon);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

// Función para mostrar un Pokemon en la interfaz de usuario
function mostrarPokemon(pokemon) {
    // Aquí puedes usar los datos del Pokemon para hacer lo que necesites, como crear una tarjeta en HTML y agregarla a la página
    console.log("Nombre:", pokemon.name);
    console.log("Tipos:", pokemon.types);
    console.log("URL del sprite:", pokemon.spriteUrl);
}

// Ejemplo de cómo usar la función para obtener todos los Pokémon de un tipo específico (por ejemplo, "water")
obtenerPokemonesPorTipo('water');
*/













