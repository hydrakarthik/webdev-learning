console.log(" i am a tutroial")

let a = 1;


for (let i = 0; i < 100; i++) {
    console.log(a+i);
}
    
let obj = {
    name: "karthik"
    role: "devops"
    company: "ai builds"
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    
    console.log(element)
}