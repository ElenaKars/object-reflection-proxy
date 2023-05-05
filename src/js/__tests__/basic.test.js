import orderByProps from '../basic';

test('should return an array of ordered and unordered properties', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const order = ['name', 'level'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
  ]);
});

test('should handle objects with unordered properties', () => {
  const obj = {d: 1, b: 2, a: 3, c: 4};
  const order = ['a', 'b', 'c'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    {key: 'a', value: 3},
    {key: 'b', value: 2},
    {key: 'c', value: 4},
    {key: 'd', value: 1},
  ]);
});

test('should handle objects with missing ordered properties', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const order = ['name', 'level', 'speed'];

  const result = orderByProps(obj, order);

  expect(result).toEqual([
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10},
  ]);
});

test('should handle empty objects', () => {
  const obj = {};
  const order = [];

  const result = orderByProps(obj, order);

  expect(result).toEqual([]);
});
