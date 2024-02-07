class herois{
    constructor(tipo, ataque, nome,idade){
        this.tipo = tipo
        this.ataque = ataque
        this.nome = nome
        this.idade = idade
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

    
}

let mago = new herois("mago","usou magia")
let guerreiro = new herois ("guerreiro", "espada")
let monge  = new herois ("monge", "artes marciais")
let ninja = new herois ("ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()



mago.atacar()