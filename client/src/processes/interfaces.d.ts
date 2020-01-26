import { OutletContext } from '@dojo/framework/routing/interfaces';

export interface ChangeRoutePayload {
	outlet: string;
	context: OutletContext;
}
