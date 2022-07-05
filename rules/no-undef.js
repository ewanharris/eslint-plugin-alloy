'use strict';

const ruleComposer = require('eslint-rule-composer');
const eslint = require('eslint');
const noUndef = new eslint.Linter().getRules().get('no-undef');

module.exports = ruleComposer.filterReports(
	noUndef,
	(problem, metadata) => {
		const filename = metadata.filename;
		if (problem.node && problem.node.name === 'migration') {
			return !filename.includes('migrations');
		}
	}
);
