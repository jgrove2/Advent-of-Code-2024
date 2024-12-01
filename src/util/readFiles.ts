import fs from 'fs';
import readline from 'readline';

export async function readFile<T>(path: string, callback: (line: string) => any) {

    const fileStream = fs.createReadStream(path);
    let returnArr: any[] = [];

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        returnArr.push(callback(line));
    });

    await new Promise<void>((resolve) => {
        rl.on('close', () => {
            resolve();
        });
    });

    return returnArr;
}    