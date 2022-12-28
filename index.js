import { appendFileSync } from 'node:fs';

if (process.argv.length < 3) {
  console.log('Atleast 1 search domain is needed');
  process.exit(1);
}

const searchString = process.argv.slice(2).join(' ');

try {
  appendFileSync('/etc/resolv.conf', `\nsearch ${searchString}`);
  console.log(`search domains set successfully : ${searchString}`);
} catch (err) {
  console.error(err);
}
