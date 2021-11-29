type Student = {
    name: string,
    age: number,
    gender: string
}

interface User {
    name: string;
    age: number;
}

interface User {
    gender: string;
    play():void;
}

const u: User = {
    name: "Nicholas Zakas",
    age: 18,
    gender: "male",
    play(){
        console.log("playing basketball");
    }
};


class User implements User {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) { 
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    play(){
        console.log("playing football");
    }
}


const p1 = new User("Hanmeimei",16,"female");
p1.play();