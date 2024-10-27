class Pelicula {
    titulo: string;
    duracion: number; 
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }

    mostrarInformacion(): void {
        console.log(`Título: ${this.titulo}, Duración: ${this.duracion} min, Director: ${this.director}`);
    }
}

class CatalogoPeliculas {
    private peliculas: Pelicula[] = [];

    agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(pelicula => pelicula.director.toLowerCase() === director.toLowerCase());
    }

    mostrarCatalogo(): void {
        console.log("Catálogo de Películas:");
        this.peliculas.forEach(pelicula => pelicula.mostrarInformacion());
    }
}

const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula("La idea de ti", 153, "Michael Showalter");
const pelicula2 = new Pelicula("Corazones Malheridos", 100, "Elizabeth Allen");
const pelicula3 = new Pelicula("Hola, Adios y todo lo que paso ayer", 88, " Michael lewen");

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);

catalogo.mostrarCatalogo();

const buscarTitulo = "La idea de ti";
const resultadoBusqueda = catalogo.buscarPorTitulo(buscarTitulo);
if (resultadoBusqueda) {
    console.log(`Resultado de búsqueda para "${buscarTitulo}":`);
    resultadoBusqueda.mostrarInformacion();
} else {
    console.log(`No se encontró la película con título "${buscarTitulo}".`);
}

const directorFiltro = "Elizabeth allen";
console.log(`Películas dirigidas por ${directorFiltro}:`);
const peliculasPorDirector = catalogo.filtrarPorDirector(directorFiltro);
peliculasPorDirector.forEach(pelicula => pelicula.mostrarInformacion());