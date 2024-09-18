import reverse from '../src/index';

test('запуск теста функции реверс', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
})