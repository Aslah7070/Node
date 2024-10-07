const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Fetch data from external API
        http.get('http://jsonplaceholder.typicode.com/posts', (apiRes) => {
            let data = '';

            // Collect data chunks
            apiRes.on('data', (chunk) => {
                data += chunk;
            });

            // When all data is received
            apiRes.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);

                    // Write an HTML page to display the data
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<title>API Data</title>');
                    res.write('<h1>Posts Data from API</h1><ul>');

                    // Loop through the data and display each post title
                    parsedData.forEach((post) => {
                        res.write(`<li><strong>Title:</strong> ${post.title}</li>`);
                    });

                    res.write('</ul></body></html>');
                    res.end();
                } catch (e) {
                    console.error('Error parsing JSON:', e.message);
                    res.end('Error parsing data');
                }
            });
        }).on('error', (err) => {
            console.error('Request error:', err.message);
            res.end('Error fetching data');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
