const encoder = new TextEncoder();
const decoder = new TextDecoder();
const greetText = encoder.encode(`Hello World \nI'm Yash!`);

await Deno.writeFile("greet.txt", greetText);

const readText = await Deno.readFile("greet.txt");
const decodedText = decoder.decode(readText);

console.log(decodedText);