'use strict';

// LOAD LIBS
const router = require('express').Router();

function promiseTimeout(timeout) {
 	return new Promise((resolve, reject) => {
 		setTimeout(() => {resolve()}, timeout);
 	});
};

router.get('/', async (req, res, next) => {
	res.set({
		'Content-Type': 'text/plain',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive'
	});

	res.write('Immediate');

	await promiseTimeout(1000)

	res.write('\n1 seconds elapsed...');

	await promiseTimeout(1000)

	res.write('\n2 seconds elapsed...');

	await promiseTimeout(1000)

	res.write('\n3 seconds elapsed...');

	res.end();
})

module.exports = router
