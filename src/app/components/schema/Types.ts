export type CounterProps = {
	target: number;
	className: string;
};

export type headerDataProps = {
	url: string;
	title?: any;
};

export interface HeaderProps {
	headerData: headerDataProps[];
}

export interface FooterProps {
	footerData: headerDataProps[];
}

export interface AddContentProps {
	display: boolean;
}
