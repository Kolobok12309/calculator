import App from './App.svelte';
import './logic/core';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
