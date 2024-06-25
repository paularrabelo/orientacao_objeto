function Atletas(nome, esporte, altura, peso){
    this.nome = nome;
    this.esporte = esporte;
    this.altura = altura;
    this.peso = peso;
}

function Futebol(nome, altura, peso) {
    Atletas.call(this, nome, "Futebol", altura, peso);
}

function Natacao(nome, altura, peso) {
    Atletas.call(this, nome, "Natação", altura, peso);
}

const atleta1 = new Atletas("João", "Esgrima", 1.77, 65);
const atleta2 = new Futebol("Francisco", 1.65, 60);
const atleta3 = new Natacao("Bricia", 1.72, 70);

console.log(atleta1);
console.log(atleta2);
console.log(atleta3);