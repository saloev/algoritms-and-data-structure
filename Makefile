i:
	npm install

start:
	npm run dev

build:
	npm run build

lint:
	npm run lint

lint--fix:
	npm run lint ./src/*.ts --fix

test:
	npm run test 

test--watch:
	npm run test --watch

test--debug:
	node --inspect-brk node_modules/.bin/jest --runInBand
