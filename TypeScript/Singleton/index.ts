import { Singleton } from "./Singleton";

const singletonA = Singleton.CreateInstance();
const singletonB = Singleton.CreateInstance();

singletonA.value.push(3);
singletonB.value.push(6);
singletonA.value.push(9);

if(singletonA === singletonB)
{
    console.log("The two singletons are the same. Singleton A = "+singletonA.value+" Singleton B = "+singletonB.value);
}
else
{
    console.log("The two singletons are different. Singleton A = "+singletonA.value+" Singleton B = "+singletonB.value);
}