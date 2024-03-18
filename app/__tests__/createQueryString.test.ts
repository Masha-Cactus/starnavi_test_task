import { createQueryString } from '@/lib/createQueryString';

describe('createQueryString', () => {
  test(`should return the correct query string when searchParams is null`, () => {
    const searchParams = null;
    const name = 'param1';
    const value = 'value1';
    const expectedOutput = 'param1=value1';
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe(expectedOutput);
  });

  test('should return an empty string when value is null', () => {
    const searchParams = null;
    const name = 'param2';
    const value = null;
    const expectedOutput = '';
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe(expectedOutput);
  });

  test(`should return the correct query string when searchParams is null and value is not null`, () => {
    const searchParams = null;
    const name = 'param3';
    const value = 'value3';
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe('param3=value3');
  });

  test(`should return the correct query string when searchParams is null and value is not null`, () => {
    const searchParams = null;
    const name = 'param4';
    const value = 'value4';
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe('param4=value4');
  });

  test('should return an empty string when value is null', () => {
    const searchParams = null;
    const name = 'param5';
    const value = null;
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe('');
  });

  test(`should append query string to existing searchParams when`, () => {
    const searchParams = new URLSearchParams('param0=value0');
    const name = 'param1';
    const value = 'value1';
    const expectedOutput = 'param0=value0&param1=value1';
    const result = createQueryString(searchParams, name, value);

    expect(result).toBe(expectedOutput);
  });
});