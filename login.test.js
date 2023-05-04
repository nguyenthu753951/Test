

const {Login} = require ('./login')

test('submitting the form calls onSubmit with username and password', () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Login onSubmit={onSubmit} />);

  fireEvent.change(getByLabelText(/username/i), { target: { value: 'chuck mmmm' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'norris' } });
  fireEvent.click(getByText(/submit/i));

  expect(onSubmit).toHaveBeenCalledWith({
    username: 'chuck mmmm',
    password: 'norris',
  });
});