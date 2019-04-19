import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';

import Home from './widgets/Home';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root] }, [
			v('div', [
				w(Outlet, { key: 'home', id: 'home', renderer: () => w(Home, {}) })
			])
		]);
	}
}
