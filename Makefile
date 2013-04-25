PATH := $(PATH):./node_modules/.bin

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test:
	@jshint --config .jshintrc index.js test/
	@mocha -R spec test

.PHONY: clean test
