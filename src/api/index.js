require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');
const properties = require('./routes/properties');
const sequelize = require('../db');

const app = express();
const port = process.env.PORT || 5000;

const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 30,
});

const speedLimiter = slowDown({
	windowMs: 60 * 1000,
	delayAfter: 30,
	delayMs: 500,
});

const corsOptions = {
	origin: process.env.CLIENT_URL,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(limiter);
app.use(speedLimiter);
app.use(compression());
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				...helmet.contentSecurityPolicy.getDefaultDirectives(),
				'script-src': ["'self'", "'unsafe-inline'", process.env.APP_URL],
				'connect-src': ["'self'", process.env.DAWA_API],
			},
		},
	})
);
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../client/build')));

// Routes
app.use('/api/properties', properties);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

// Not found
app.use(notFound);

// Error handler
app.use(errorHandler);

sequelize.sync({ force: true }).then(() => {
	app.listen(port, () => console.log(`Server running on port ${port}`));
});
