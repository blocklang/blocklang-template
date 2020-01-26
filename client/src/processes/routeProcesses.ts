import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory } from './utils';
import { ChangeRoutePayload } from './interfaces';

const changeRouteCommand = commandFactory<ChangeRoutePayload>(({ get, path, payload: { outlet, context } }) => {
	const currentOutlet = get(path('routing', 'outlet'));
	console.log('current outlet:', currentOutlet);
	return [
		// 记录当前路由信息
		replace(path('routing', 'outlet'), outlet),
		replace(path('routing', 'params'), context.params)

		// 清空路由级的变量，设置为 undefined
	];
});

export const changeRouteProcess = createProcess('change-route', [changeRouteCommand]);
