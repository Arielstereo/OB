const listaCompras = ["leche", "azúcar", "gaseosa", "pan", "arroz"];

listaCompras.push("aceite de girasol");
console.log(listaCompras);

listaCompras.splice(5,1);
console.log(listaCompras);

const listaPeliculas = [
  {titulo:"Hombre en llamas" , director:"Tony Scott" , fecha: 2004 },
  {titulo: "Batman" , director:"Matt Reeves" , fecha: 2022 },
  {titulo: "Dia de la independencia" , director: "Rolan Emmerich" , fecha: 1996 },
]

const listaFilter = listaPeliculas.filter(value => value.fecha > 2010);
console.log(listaFilter);

const directores = listaPeliculas.map(value => value.director);
console.log(directores);

const titulos = listaPeliculas.map(value => value.titulo);
console.log(titulos);

const concat = directores.concat(titulos);
console.log(concat);

const propag = [...titulos,...directores];
console.log(propag);