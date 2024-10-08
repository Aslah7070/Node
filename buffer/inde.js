const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('largefile.txt');

// Listen for data events
readStream.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk.length} bytes`);
    // Here, `chunk` is a buffer
});

// Listen for the end of the stream
readStream.on('end', () => {
    console.log('Finished reading the file.');
});

// Handle errors
readStream.on('error', (err) => {
    console.error('Error:', err);
});
