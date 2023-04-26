import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';
import './app.css';

describe('App tests', () => {
	it('should contains the heading 1', () => {
		render(<App />);
		const heading = screen.getByText('Hello world! I am using React');
		expect(heading).toBeInTheDocument();
	});
});
