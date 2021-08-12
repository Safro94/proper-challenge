module.exports = {
	roots: ['<rootDir>/src'],
	coverageReporters: ['text', 'html'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['**/*.js'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/utils/test-utils.js',
		'<rootDir>/src/db/',
		'<rootDir>/src/models/',
		'<rootDir>/src/api/routes/',
		'<rootDir>/src/api/index.js',
	],
};
