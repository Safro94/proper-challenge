import { IAddress, IDawaResponse } from '../types';

const mapDawaResponse = (data: IDawaResponse[]): IAddress[] => {
	return data.map(item => ({
		text: item.tekst,
		type: item.type,
	}));
};

export { mapDawaResponse };
