export interface IProperty {
	id: number;
	address: string;
	size: string;
	rooms: number;
	utilities: string;
	tenantName: string;
}

export enum ButtonTypes {
	Primary = 'primary',
	Danger = 'danger',
}
