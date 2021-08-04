export {}
interface Usertype{
    name: string,
    age: number,
    address:string
}

let user:Usertype={
    name:'Peter',
    age:30,
    address:"karachi"
}


let user1:any={
    name:'Peter',
    age:30,
    address:"karachi"
}
user.name="kirish"
user1.age="kkk"
console.log(user)
console.log(user1)