'use strict';

import { readdirSync } from 'fs';
// const fs = require('fs');
const dir = 'bases';
const arr = readdirSync(dir);
console.log(arr);

