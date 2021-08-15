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

export enum RequestStatus {
	Pending = 'pending',
	Resolved = 'resolved',
	Rejected = 'rejected',
}

export enum RequestMethods {
	GET = 'get',
	POST = 'post',
	DELETE = 'delete',
}

export enum SupportedLanguages {
	EN = 'en',
	ES = 'es',
}

export interface IDawaResponse {
	type: string;
	tekst: string;
	caretpos: number;
	forslagstekst: number;
	data: any;
}

export interface IAddress {
	type: string;
	text: string;
}
