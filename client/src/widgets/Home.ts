import { v, create } from '@dojo/framework/core/vdom';

import * as css from './styles/Home.m.css';

const factory = create();

export default factory(function Profile() {
	return v('div', { classes: [css.root] }, [
		v('h1', { styles: { textAlign: 'center', marginTop: '40vh' } }, [`Hello World`])
	]);
});
