module.exports = {
	'env': {
		'browser': true,
		'jest': true,
		'mocha': true,
	},
	'extends': 'liferay',
	'globals': {
		'$': true,
		'AUI': true,
		'CKEDITOR': true,
		'Liferay': true,
		'_': true,
		'alert': true,
		'confirm': true,
		'submitForm': true,
		'themeDisplay': true,
		'tinyMCE': true,
	},
	'rules': {
		'lines-around-comment': ['error', {
			'afterBlockComment': false,
			'afterLineComment': true,
			'beforeBlockComment': false,
			'beforeLineComment': false,
		}],
		'padding-line-between-statements': [
			'error',
			{'blankLine': 'always', 'prev': '*', 'next': 'return'},
			{'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
			{'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
		],
	},
};
