export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    phone: string;
};

export type ImageType = {
	id: number;
	alt: string;
	src: string;
};


export enum AlertType {
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
	INFO = 'info'
}

export type AlertMessageType = {
	alertType: AlertType;
	alertText: string;
};

export type EnterKeyHintType =
	| 'search'
	| 'enter'
	| 'done'
	| 'go'
	| 'next'
	| 'previous'
	| 'send'
	| null
	| undefined;

// Type for prettifying an object type
export type PrettifyType<T> = {
	[K in keyof T]: T[K];
} & Record<string, never>;
