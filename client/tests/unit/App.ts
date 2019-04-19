const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';

import Home from '../../src/widgets/Home';

import App from '../../src/App';
import * as css from '../../src/App.m.css';

describe('App', () => {
	it('default renders correctly', () => {
		const h = harness(() => w(App, {}));
		h.expect(() =>
			v('div', { classes: [css.root] }, [
				v('div', [
					w(Outlet, { key: 'home', id: 'home', renderer: () => w(Home, {}) })
				])
			])
		);
	});
});
