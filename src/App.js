import { useEffect } from 'react';

import logo from './logo.svg';

function App() {
	useEffect(() => {
		const elem = document.querySelector('#find');

		elem.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header"></header>
			<div style={{ height: 1200 }}></div>
			<div
				id="find"
				style={{ height: 400, width: 400, backgroundColor: 'green' }}
			></div>
		</div>
	);
}

export default App;
