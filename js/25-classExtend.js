console.clear();

class Pet {
    constructor(color, name) {
        this.name = name;
        this.color = color;
        this.gender = true;
        this.type = '';
        this.sound = 'Miau au';
    }

    updateGender() {
        this.gender = !this.gender;
    }

    voice() {
        return `${this.name} says: ${this.sound}!`;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(color, name);
        this.type = 'dog';
        this.sound = 'Au au';
    }

    voice() {
        return `${this.name}, who is a ${this.type}, says: ${this.sound}!`;
    }
}

class Cat extends Pet {
    constructor(name, color) {
        super(color, name);
        this.type = 'cat';
        this.sound = 'Miau miau';
    }

    sudauzyti(daiktas) {
        return `${this.name} katik sudauze ${daiktas}`;
    }
}


const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const siaubas = new Pet('keista', 'Siaubas');

console.log(rex.voice());
console.log(rainis.voice());
console.log(siaubas.voice());


/*
Animal:
    Pet:
        - Cat
        - Dog
    Bird:
        - Parrot
        - Sparrow
    Fish:
        - Shark
        - Shirmp
*/

// class Animal { }
// class Pet extends Animal { }
// class Bird extends Animal { }
// class Cat extends Pet { }
// class Dog extends Pet { }
// class Parrot extends Bird { }
// class Sparrow extends Bird { }

/*
Transporto priemone:
    Automobilis:
        - Lengvoji
        - Sunkvezimis
    Motociklas:
        - Motociklas su lopseliu
        - Ziedinis Motociklas
    Lektuvas:
        - lengvasis
        - sklandituvas
        - keleivimis
*/

/*
Zmogus:
    - vyras
    - moteris
*/

/*
Zmogus:
    Medikas:
        - slaugytojas
        - medikas
        - vyr medikas
    Gaisrininkas:
        - ...
        - ...
    Karininkas:
        - eilinis
        - leitenantas
*/

/*
Vartotojas:
    Neregistruotas
    Registruotas
        - paprastas
        - Admin:
            - paprastas
            - super
*/