import { test } from 'node:test';
import assert from 'node:assert';
import { foo } from '../src/index.js';


test('1st test', () => {
  const a = foo();
  assert.strictEqual(a, 1);
});