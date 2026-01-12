const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/leads',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

function makeRequest(i) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`Request ${i}: Status ${res.statusCode}`);
        resolve(res.statusCode);
      });
    });

    req.on('error', (e) => {
        // If connection refused, we know server is down
        console.error(`Request ${i} Failed: ${e.message}`);
        resolve(null);
    });

    // Send empty object, should trigger 400 from API but 200/400 from Middleware perspective (passed through)
    req.write(JSON.stringify({}));
    req.end();
  });
}

async function run() {
  console.log("Starting Rate Limit Verification...");
  for (let i = 1; i <= 6; i++) {
    await makeRequest(i);
    // Small delay to ensure sequential processing just in case, typical for real traffic
    await new Promise(r => setTimeout(r, 100));
  }
}

run();
