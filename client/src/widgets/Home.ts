import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/Home.m.css';

export default class Home extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root, 'd-flex justify-content-center align-items-center'] }, [
			v('h1', { classes: ['shadow-lg p-5 rounded w-100 text-center bg-warning text-white'] }, [
				`Hello World`,
				v('small', { classes: ['badge badge-pill badge-light ml-4 text-muted'] }, ['v0.1.0'])
			])
		]);
	}
}
