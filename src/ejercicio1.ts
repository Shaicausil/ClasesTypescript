class Persona{
    nombre: string;
    edad: number;
    documentoIdentidad: number;

    constructor(nombre: string, edad: number, documentoIdentidad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.documentoIdentidad = documentoIdentidad;
    }

    caminar(): void{
        console.log(`${this.nombre} está caminando.`)
    }

    hablar(): void{
        console.log(`${this.nombre} está hablando.`)
    }

    comer(): void{
        console.log(`${this.nombre} está comiendo.`)
    }


}

const persona1 = new Persona("Sebastian", 22, 1088852287);
const persona2 = new Persona("Johan", 22, 1275821987);
const persona3 = new Persona("Shaira", 20, 1287564298);

persona1.caminar();
persona1.hablar();
persona1.comer();

persona2.caminar();
persona2.hablar();
persona2.comer();

persona3.caminar();
persona3.hablar();
persona3.comer();