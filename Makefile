JS = $$(find index.js test/index.js)
PATH := $(PATH):./node_modules/.bin

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: validate
	@./node_modules/.bin/mocha -R spec test

validate:
	@./node_modules/.bin/jshint --config .jshintrc $(JS)

.PHONY: clean test
