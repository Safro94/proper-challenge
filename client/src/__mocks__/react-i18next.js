module.exports = {
	useTranslation: jest.fn(namespace => ({
		t: property => `${namespace}-${property}`,
		i18n: {
			changeLanguage: jest.fn(),
		},
	})),
};
