export {}

let message;
message="abc";
let endswith=(<string>message).endsWith('c')
let alternate=(message as string).endsWith('c')
console.log(alternate)
console.log(endswith)
