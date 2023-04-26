import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './app.css';
import { subtract } from './utils';

import CommonLayout from './components/layout/CommonLayout';

function App() {
	return (
		<div className="App">
			<CommonLayout>
				<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
					<div class="shrink-0">
						<img
							class="h-12 w-12"
							src="https://picsum.photos/id/237/200/300"
							alt="ChitChat Logo"
						/>
					</div>
					<div>
						<div class="text-xl font-medium text-black">ChitChat</div>
						<p class="text-slate-500">You have a new message!</p>
					</div>
				</div>
			</CommonLayout>
		</div>
	);
}

export default App;
