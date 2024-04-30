class TiposPokemon {
    // Constructor
    constructor() {
        this.hacerSolicitudAjax('https://pokeapi.co/api/v2/type/');
    }

    // Método para hacer la solicitud AJAX y construir los botones de tipo de Pokémon
    hacerSolicitudAjax(url) {
        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json',
            success: function (data) {
                const container = document.getElementById('btnTypes');

                // Función para asignar colores a botones según el tipo de Pokémon
                function asignarColorTipoPokemon(tipo) {
                    switch (tipo) {
                        case 'normal':
                            return {
                                class: 'btn-info',
                                colorFondo: '#E8E2EB',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/1/'
                            };
                        case 'fighting':
                            return {
                                class: 'btn-info',
                                colorFondo: '#000',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/2/'
                            };
                        case 'flying':
                            return {
                                class: 'btn-info',
                                colorFondo: '#6f42c1',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/3/'
                            };
                        case 'poison':
                            return {
                                class: 'btn-info',
                                colorFondo: '#d63384',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/4/'
                            };
                        case 'ground':
                            return {
                                class: 'btn-danger',
                                colorFondo: '#3F310F',
                                colorTexto: '#C79213',
                                url: 'https://pokeapi.co/api/v2/type/5/'
                            };
                        case 'rock':
                            return {
                                class: 'btn-warning',
                                colorFondo: '#5C584C',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/6/' 
                            };
                        case 'bug':
                            return {
                                class: 'btn-warning',
                                colorFondo: '#185505',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/7/' 
                            };
                        case 'ghost':
                            return {
                                class: 'btn-success',
                                colorFondo: '#092A5E',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/8/'
                            };
                        case 'steel':
                            return {
                                class: 'btn-info',
                                colorFondo: '#39414E',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/9/'
                            };
                        case 'fire':
                            return {
                                class: 'btn-info',
                                colorFondo: '#CA0707',
                                colorTexto: '##F6C508',
                                url: 'https://pokeapi.co/api/v2/type/10/' 
                            };
                        case 'water':
                            return {
                                class: 'btn-info',
                                colorFondo: '#0A9CCE',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/11/' 
                            };
                        case 'grass':
                            return {
                                class: 'btn-info',
                                colorFondo: '#93CD81',
                                colorTexto: '#105706',
                                url: 'https://pokeapi.co/api/v2/type/12/' 
                            };
                        case 'electric':
                            return {
                                class: 'btn-info',
                                colorFondo: '#E1CF43',
                                colorTexto: '#F9F9F9',
                                url: 'https://pokeapi.co/api/v2/type/13/' 
                            };
                        case 'psychic':
                            return {
                                class: 'btn-info',
                                colorFondo: '#0dcaf0',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/14/' 
                            };
                        case 'ice':
                            return {
                                class: 'btn-info',
                                colorFondo: '#A3FBF9',
                                colorTexto: '#1A7876',
                                url: 'https://pokeapi.co/api/v2/type/15/' 
                            };
                        case 'dragon':
                            return {
                                class: 'btn-info',
                                colorFondo: '#10120F',
                                colorTexto: '#37AD07',
                                url: 'https://pokeapi.co/api/v2/type/16/' 
                            };
                        case 'dark':
                            return {
                                class: 'btn-info',
                                colorFondo: '#200434',
                                colorTexto: '#CAB5D9',
                                url: 'https://pokeapi.co/api/v2/type/17/' 
                            };
                        case 'fairy':
                            return {
                                class: 'btn-info',
                                colorFondo: '#E3D6EC',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/18/' 
                            };
                        case 'unknown':
                            return {
                                class: 'btn-info',
                                colorFondo: '#D6ECD6',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/19/' 
                            };
                        case 'shadow':
                            return {
                                class: 'btn-secondary',
                                colorFondo: '#999B99',
                                colorTexto: '#000',
                                url: 'https://pokeapi.co/api/v2/type/20/' 
                            }
                        // Agrega casos para otros tipos de Pokémon...
                        default:
                            return {
                                class: 'btn-secondary',
                                colorFondo: '#6c757d',
                                colorTexto: '#fff',
                                url: 'https://pokeapi.co/api/v2/type/'
                            };
                    }
                }
        
                // Iterar sobre cada objeto en el array 'results'
                data.results.forEach(function (element) {
                    const nombreTipoPokemon = element.name;

                    // Crear un botón para cada tipo de Pokémon
                    const button = document.createElement('button');
                    button.classList.add('btn', 'mr-8', 'mb-2');
                    button.textContent = nombreTipoPokemon;

                    // Asignar un color al botón según el tipo de Pokémon
                    const color = asignarColorTipoPokemon(nombreTipoPokemon);
                    button.classList.add(color.class);
                    button.style.backgroundColor = color.colorFondo;
                    button.style.color = color.colorTexto;

                    // Agregar un evento listener al botón para manejar el clic
                    button.addEventListener('click', function () {
                        // Aquí me gustaria agregar la funcionalidad de mostar

                        // Obtener el color del botón para obtener la URL asociada al tipo de Pokémon
                        const color = asignarColorTipoPokemon(nombreTipoPokemon);
                        const url = color.url;

                        // Hacer una nueva solicitud AJAX para obtener los Pokémon del tipo seleccionado
                        $.ajax({
                            type: 'GET',
                            url: url,
                            contentType: 'application/json',
                            success: function (data) {
                                // Limpiar el contenedor de tarjetas antes de agregar nuevas tarjetas
                                const container = document.getElementById('pokemonCards');
                                container.innerHTML = '';

                                // Iterar sobre cada Pokémon recibido en la respuesta
                                data.pokemon.forEach(function (pokemon) {
                                    // Crear una nueva tarjeta para el Pokémon
                                    const card = document.createElement('div');
                                    card.classList.add('card');

                                    // Obtener el nombre del Pokémon
                                    const pokemonName = pokemon.pokemon.name;

                                    // Crear la estructura interna de la tarjeta utilizando HTML
                                    card.innerHTML = `
                                            <div class="card-body">
                                            
                                                <h5 class="card-title">${pokemonName}</h5>
                                            </div>
                                        `;

                                    // Agregar la tarjeta al contenedor
                                    container.appendChild(card);
                                });
                            },
                            error: function (error) {
                                console.error('Error al obtener los Pokémon del tipo seleccionado:', error);
                            }
                        });

                        console.log('click Pokémon:', nombreTipoPokemon);
                    });

                    // Agregar el botón al contenedor
                    container.appendChild(button);
                });
            },
            error: function (error) {
                console.error('Error al hacer la solicitud AJAX:', error);
            }
        });
    }
}

// Crear una instancia de la clase TiposPokemon para iniciar la solicitud AJAX
let pokemonUno = new TiposPokemon();














