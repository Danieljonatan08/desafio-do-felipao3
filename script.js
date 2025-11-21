
class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    
    }
    attack(){
        if(this.type == "mago"){
            console.log(`O ${this.type} atacou usando magia`)
        }else if(this.type == "guerreiro"){
            console.log(`O ${this.type} atacou usando espada`)
        }else if(this.type == "monge"){
            console.log(`O ${this.type} atacou usando artes marciais`)
        }else if(this.type == "ninja"){
            console.log(`O ${this.type} atacou usando shuriken`)
        }
      
    }
    
}

let warrior = new hero("Guerreiro", 60, "guerreiro")
console.log(warrior);
warrior.attack()

let marge = new hero("Merlin", 1500, "mago");
console.log(marge);
marge.attack()