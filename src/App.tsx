import './App.css';
import { Application } from './components/application/Application';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiMode';
import { Skills } from './components/skills/Skills';
import { AppProviders } from './providers/AppProviders';

function App() {
	return (
		<div className='App'>
			<AppProviders>
				<div className='App'>
					<MuiMode />
					{/* <Application />
					<Skills skills={['HTML', 'CSS']} />
					<Counter /> */}
				</div>
			</AppProviders>
		</div>
	);
}

export default App;
