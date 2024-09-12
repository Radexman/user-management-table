import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_API_URL: 'https://jsonplaceholder.typicode.com/users',
  },
});

afterEach(() => {
  cleanup();
});
