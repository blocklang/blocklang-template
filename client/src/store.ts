import Registry from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import Store from '@dojo/framework/stores/Store';
import createStoreMiddleware from '@dojo/framework/core/middleware/store';
import routesConfig from './routes';
import { State } from './interfaces';
import { changeRouteProcess } from './processes/routeProcesses';

export const registry = new Registry();
const router = registerRouterInjector(routesConfig, registry);

export default createStoreMiddleware<State>((store: Store) => {
	// 当切换路由时，清除页面级的数据，这样就可以每次刷新页面时重新请求数据。
	// TODO: 为页面增加 onLoad 事件和 onUnload 事件，分别用于初始化数据和销毁数据。
	router.on('nav', ({ outlet, context }: any) => {
		changeRouteProcess(store)({ outlet, context });
	});
});
