install:
		npm ci

lint:
		npx eslint .

lint-fix:
		npx eslint . --fix

test:
		npm run test

test-coverage:
		npm run test:coverage