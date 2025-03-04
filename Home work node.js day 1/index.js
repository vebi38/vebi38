import fs from "fs/promises";

const file = "homework.txt";

async function manageFile() {
    await fs.writeFile(file, "Homework 02 in Basic Node\n");
    await fs.appendFile(file, "FINISHED!\n");
    const data = await fs.readFile(file, "utf-8");
    console.log(data);
}

manageFile();