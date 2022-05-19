#!/usr/bin/env node

const { basename } = require('path');
console.log('My name is:', basename(process.argv[1]));
