const fs = require('fs/promises');

const fileName = 'homework.txt';

async function fileOperations() {
    try {
        // Create and write to file
        await fs.writeFile(fileName, 'Homework 02 in Basic Node\n');
        console.log('File created and text written.');

        // Append text
        await fs.appendFile(fileName, 'FINISHED!\n');
        console.log('Text appended.');

        // Read and print content
        const content = await fs.readFile(fileName, 'utf-8');
        console.log('File Content:\n', content);
    } catch (error) {
        console.error('Error:', error);
    }
}

fileOperations();
