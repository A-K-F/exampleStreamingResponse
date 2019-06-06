'use strict';

const axios = require('axios');

const httpAdapter = require('axios/lib/adapters/http');

async function test() {
	const response = await axios({
		method: 'GET',
		url: 'http://LOCALHOST:3000/api/streaming',
		responseType: 'stream',
		adapter: httpAdapter,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	});

	const stream = response.data;

	var payloadPart = '';

	stream.on('data', (chunk) => {
		console.log(Buffer.from(chunk).toString('utf8'));
	});

	stream.on('end', () => {
		// PLACEHOLDER
	});
};

test();
