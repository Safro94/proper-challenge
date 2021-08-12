const getTenants = async (req, res) => {
	res.json('get all');
};

const getTenantById = async (req, res) => {
	const { id } = req.params;
	res.json('gett by id');
};

const addTenant = async (req, res) => {
	res.json('add');
};

const deleteTenant = async (req, res) => {
	const { id } = req.params;
	res.json('delete');
};

module.exports = { getTenants, getTenantById, addTenant, deleteTenant };
