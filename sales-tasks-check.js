const http = require('http');

// Sales Manager agent info
const agentId = 'f83c96f5-75f3-4d4d-a67b-dbfe59ceaccc';
const companyId = '7f75017f-bf26-46e4-bd97-cb508f831442';
const apiUrl = '127.0.0.1';
const apiPort = 3100;

// Query issues assigned to me
const path = '/api/companies/' + companyId + '/issues?assigneeAgentId=' + agentId + '&status=todo,in_progress,blocked';

const options = {
  hostname: apiUrl,
  port: apiPort,
  path: path,
  method: 'GET',
  headers: {
    'x-agent-id': agentId,
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.end();
