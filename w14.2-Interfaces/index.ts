interface Address{
    city: string,
}

interface User{
    name :string;
    age:number;
    address : Address
}

let user: User = {
    name : '"Priyanshu "',
    age: 15,
    address: {
        city: 'Jaunpur'
    }

}

interface People{
    name: string;
    age: number,
    isLegal: () => boolean;
}

class Manager implements People{
    name : string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal() {
        return this.age> 18
    }
}