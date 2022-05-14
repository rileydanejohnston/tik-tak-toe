import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../components/app/App';

afterAll(cleanup);

test('reset button', () => {
	const wrapper = render(<App />);
	wrapper.debug();

	const box1 = wrapper.getByTestId('box-1');
	const box2 = wrapper.getByTestId('box-2');
	const box3 = wrapper.getByTestId('box-3');
	const box4 = wrapper.getByTestId('box-4');
	const box5 = wrapper.getByTestId('box-5');
	const box6 = wrapper.getByTestId('box-6');
	const box7 = wrapper.getByTestId('box-7');
	const box8 = wrapper.getByTestId('box-8');
	const box9 = wrapper.getByTestId('box-9');

	fireEvent.click(box1);
	expect(box1.textContent).toBe('X');
	fireEvent.click(box2);
	expect(box2.textContent).toBe('O');
	fireEvent.click(box3);
	expect(box3.textContent).toBe('X');
	fireEvent.click(box4);
	expect(box4.textContent).toBe('O');
	fireEvent.click(box5);
	expect(box5.textContent).toBe('X');
	fireEvent.click(box6);
	expect(box6.textContent).toBe('O');
	fireEvent.click(box7);
	expect(box7.textContent).toBe('X');
	fireEvent.click(box8);
	expect(box8.textContent).toBe('O');
	fireEvent.click(box9);
	expect(box9.textContent).toBe('X');

	const resetButton = wrapper.getByTestId('reset-button');
	expect(resetButton.textContent).toBe('Reset Game');

	fireEvent.click(resetButton);
	expect(box1.textContent).toBe('');
	expect(box2.textContent).toBe('');
	expect(box3.textContent).toBe('');
	expect(box4.textContent).toBe('');
	expect(box5.textContent).toBe('');
	expect(box6.textContent).toBe('');
	expect(box7.textContent).toBe('');
	expect(box8.textContent).toBe('');
	expect(box9.textContent).toBe('');
});