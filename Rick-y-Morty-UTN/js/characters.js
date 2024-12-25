let info;
const mostrarData=async()=>{
    await fetch("https://rickandmortyapi.com/api/character")
     .then((resp)=>{return resp.json()})//pasos a seguir si la promesa se cumple
     .then((data)=>{info=data;})
     .catch((error)=>console.log("error:" +error));
 
     console.log(info)
     mostrarInfo(info.results)
 
 }
 
 const mostrarInfo = (lista) => {
    let section = document.querySelector("section");

    for (let item of lista) {
        // Crea un nuevo elemento <p> para cada propiedad
        let texto = document.createElement("p");
        texto.textContent = item.name;
        section.appendChild(texto);

        texto = document.createElement("p");
        texto.textContent = item.status;
        section.appendChild(texto);

        texto = document.createElement("p");
        texto.textContent = item.gender;
        section.appendChild(texto);

        texto = document.createElement("p");
        texto.textContent = item.origin;
        section.appendChild(texto);

        texto = document.createElement("p");
        texto.textContent = item.species;
        section.appendChild(texto);
    }
}
 mostrarData()
 