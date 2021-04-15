//obj
class obj {
    constructor(property1) {
        this.property1 = property1;
    }
}

obj1 = new obj("thing")

console.log(obj1.property1)

console.log(typeof obj1)

//dict

obj2 = {
    property1: obj1.property1
}

console.log(obj2.property1);
console.log(typeof obj2);