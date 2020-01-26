export interface Routing {
	outlet: string;
	params: { [index: string]: string };
}

export interface State {
	routing: Routing;
}
