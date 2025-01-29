async function fetchData(){
	try{
		let pokemonName= document.getElementById("inp1").value.toLowerCase();

		const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

		if(!response.ok){
			throw new Error("Fetch failed");
		}

		const data= await response.json();
		document.getElementById("h11").textContent= `${data.name}`;
	}
	catch{
		console.error(error);
	}
}