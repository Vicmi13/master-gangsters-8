function showPokemons(pokemon) {
	//Seleccionar el contenedor
	const main = document.querySelector('main');

	//Contenedor principal
	var flipCard = document.createElement('div');
	flipCard.className = "flip-card my-1";
	main.appendChild(flipCard);

	//Contenedor principal
	var flipCardInner = document.createElement('div');
	flipCardInner.className = "flip-card-inner";
	flipCard.appendChild(flipCardInner);

	
	//Crear el poke card front
	var pokeCardFront = document.createElement('div');
	pokeCardFront.className = "card col-3 bg-primary m-1 flip-card-front d-flex align-items-center justify-content-center";
	flipCardInner.appendChild(pokeCardFront);
	
	//Contenido poke card front
	var cardFrontImage = document.createElement('img');
	cardFrontImage.src = pokemon.image_url;
	pokeCardFront.appendChild(cardFrontImage);

	let pokeNombreFront = document.createElement('h3');
	pokeNombreFront.innerHTML = pokemon.name;
	pokeNombreFront.className = "card-title text-center";
	pokeCardFront.appendChild(pokeNombreFront);

	//Crear el poke card back
	var pokeCard = document.createElement('div');
	pokeCard.className = "card col-3 bg-info m-1 px-2 flip-card-back";
	flipCardInner.appendChild(pokeCard);
	




	
	//Crear imagen de pokemon
	let pokeImage = document.createElement('img');
	pokeImage.className = "card-img-top";
	pokeImage.src= pokemon.image_url;
	pokeCard.appendChild(pokeImage);

	//Crear titulo de pokemon
	let pokeNombre = document.createElement('h3');
	pokeNombre.innerHTML = pokemon.name;
	pokeNombre.className = "card-title";
	pokeCard.appendChild(pokeNombre);

	//Crear descripción
	let pokeDescription = document.createElement('p');
	pokeDescription.innerHTML = pokemon.description;
	pokeDescription.className = "card-text";
	pokeCard.appendChild(pokeDescription);

	//Evoluciones título
	let pokeEvolutionTitle = document.createElement('h5');
	pokeEvolutionTitle.innerHTML = 'Evolutions';
	pokeCard.appendChild(pokeEvolutionTitle);

	//Evoluciones lista contenedor
	let pokeEvolutionList = document.createElement('ul');
	pokeCard.appendChild(pokeEvolutionList);

	// Evoluciones elemento de lista-contenido
	let arrayEvolutions = pokemon.evolutions;
	for (let i = 0; i < arrayEvolutions.length; i++) {
		let evolveGroup = arrayEvolutions[i];
		let evol = document.createElement('li');
		evol.innerHTML = evolveGroup.to;
		pokeEvolutionList.appendChild(evol)
	}

	//Types título
	let pokeTypeTitle = document.createElement('h5');
	pokeTypeTitle.innerHTML = 'Type';
	pokeCard.appendChild(pokeTypeTitle);

	//Evoluciones lista contenedor
	let pokeTypesList = document.createElement('ul');
	pokeCard.appendChild(pokeTypesList);

	// Tipos elemento de lista-contenido
	let arrayTypes = pokemon.types;
	for (let i = 0; i < arrayTypes.length; i++) {
		let typesGroup = arrayTypes[i];
		let type = document.createElement('li');
		type.innerHTML = typesGroup;
		pokeTypesList.appendChild(type)
	}

}

// Loop para mostrar información
pokemons.forEach(pokemon => {
	showPokemons(pokemon);
});