import { render, fireEvent } from '@testing-library/react';
import App from '../components/app/App';

describe('<Box />', () => {
	test('player changes with each click', () => {
		const wrapper = render(<App />);

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
		fireEvent.click(box2);
		fireEvent.click(box3);
		fireEvent.click(box4);
		fireEvent.click(box5);
		fireEvent.click(box6);
		fireEvent.click(box7);
		fireEvent.click(box8);
		fireEvent.click(box9);

		expect(box1.textContent).toBe('X');
		expect(box2.textContent).toBe('O');
		expect(box3.textContent).toBe('X');
		expect(box4.textContent).toBe('O');
		expect(box5.textContent).toBe('X');
		expect(box6.textContent).toBe('O');
		expect(box7.textContent).toBe('X');
		expect(box8.textContent).toBe('O');
		expect(box9.textContent).toBe('X');
	});
	// test each box responds to click and can only be clicked once
	test('box 1 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-1');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 2 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-2');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 3 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-3');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 4 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-2');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 5 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-5');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 6 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-6');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 7 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-7');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 8 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-8');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});

	test('box 9 click works', () => {
		const wrapper = render(<App />);
		const box = wrapper.getByTestId('box-9');

		fireEvent.click(box);
		expect(box.textContent).toBe('X');
		fireEvent.click(box);
		expect(box.textContent).toBe('X');
	});
});
