import { createWriteStream } from 'fs';

//const alphabet = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`;
console.log(process.argv);

const lengthToGen = parseInt(process.argv[2], 10) ?? 5;
const alphabet = process.argv[3] ?? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fileStream = createWriteStream('./input.txt');

console.log({ lengthToGen, alphabet })
const generateMaxString = alphabet[0].repeat(lengthToGen);

const generateIteration = (str, l) => {
    if (l === lengthToGen) {
        return true;
    }
    const copyStr = str.split('');

    for (let x = 0; x < alphabet.length; x++) {
        copyStr[l] = alphabet[x];
        const joined = copyStr.join('');

        fileStream.write(`${joined}\n`);
        generateIteration(joined, l + 1);
    }
}

generateIteration(generateMaxString, 0);