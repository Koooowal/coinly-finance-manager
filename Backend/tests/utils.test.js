import { calculateBudgetStatus, calculateGoalProgress, calculateNetBalance } from '../utils/financeUtils.js';
import { formatResponse, formatPaginatedResponse } from '../utils/responseFormatter.js';
import { generateToken, verifyToken, decodeToken } from '../utils/jwt.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';

// ─── financeUtils ────────────────────────────────────────────────────────────

describe('calculateBudgetStatus', () => {
  test('returns "ok" when under 80% used', () => {
    expect(calculateBudgetStatus(500, 1000)).toBe('ok');
    expect(calculateBudgetStatus(790, 1000)).toBe('ok');
  });

  test('returns "warning" at exactly 80%', () => {
    expect(calculateBudgetStatus(800, 1000)).toBe('warning');
  });

  test('returns "warning" between 80% and 100%', () => {
    expect(calculateBudgetStatus(950, 1000)).toBe('warning');
  });

  test('returns "exceeded" when over the limit', () => {
    expect(calculateBudgetStatus(1001, 1000)).toBe('exceeded');
    expect(calculateBudgetStatus(1500, 1000)).toBe('exceeded');
  });

  test('returns "invalid" for a zero or negative limit', () => {
    expect(calculateBudgetStatus(100, 0)).toBe('invalid');
    expect(calculateBudgetStatus(100, -50)).toBe('invalid');
  });
});

describe('calculateGoalProgress', () => {
  test('returns correct percentage', () => {
    expect(calculateGoalProgress(250, 1000)).toBe(25);
    expect(calculateGoalProgress(1000, 1000)).toBe(100);
  });

  test('caps at 100 even when current exceeds target', () => {
    expect(calculateGoalProgress(1500, 1000)).toBe(100);
  });

  test('returns 0 for a zero or negative target', () => {
    expect(calculateGoalProgress(500, 0)).toBe(0);
    expect(calculateGoalProgress(500, -100)).toBe(0);
  });
});

describe('calculateNetBalance', () => {
  test('returns income minus expenses', () => {
    expect(calculateNetBalance(1000, 600)).toBe(400);
    expect(calculateNetBalance(500, 800)).toBe(-300);
    expect(calculateNetBalance(1000, 1000)).toBe(0);
  });

  test('treats null and undefined as zero', () => {
    expect(calculateNetBalance(null, 100)).toBe(-100);
    expect(calculateNetBalance(null, null)).toBe(0);
    expect(calculateNetBalance(undefined, undefined)).toBe(0);
  });
});

// ─── responseFormatter ───────────────────────────────────────────────────────

describe('formatResponse', () => {
  test('includes success flag and message', () => {
    const res = formatResponse(true, 'Created');
    expect(res.success).toBe(true);
    expect(res.message).toBe('Created');
  });

  test('omits data key when data is null', () => {
    const res = formatResponse(false, 'Not found', null);
    expect(res).not.toHaveProperty('data');
  });

  test('includes data when provided', () => {
    const res = formatResponse(true, 'OK', { id: 1 });
    expect(res.data).toEqual({ id: 1 });
  });
});

describe('formatPaginatedResponse', () => {
  test('returns correct pagination metadata', () => {
    const res = formatPaginatedResponse([1, 2, 3], 1, 10, 25);
    expect(res.success).toBe(true);
    expect(res.data.pagination.totalPages).toBe(3);
    expect(res.data.pagination.hasMore).toBe(true);
  });

  test('hasMore is false on the last page', () => {
    const res = formatPaginatedResponse([], 3, 10, 25);
    expect(res.data.pagination.hasMore).toBe(false);
  });
});

// ─── jwt ─────────────────────────────────────────────────────────────────────

describe('generateToken / verifyToken / decodeToken', () => {
  test('generates a token and verifies it successfully', () => {
    const token = generateToken('user-1', 'test@coinly.pl', 'testuser');
    const payload = verifyToken(token);
    expect(payload.id).toBe('user-1');
    expect(payload.email).toBe('test@coinly.pl');
    expect(payload.username).toBe('testuser');
  });

  test('decodeToken returns payload without verifying signature', () => {
    const token = generateToken('user-2', 'a@b.com', 'alice');
    const decoded = decodeToken(token);
    expect(decoded.id).toBe('user-2');
  });

  test('verifyToken throws on a tampered token', () => {
    expect(() => verifyToken('this.is.not.valid')).toThrow();
  });
});

// ─── bcrypt ──────────────────────────────────────────────────────────────────

describe('hashPassword / comparePassword', () => {
  test('hashed password is not equal to the original', async () => {
    const hash = await hashPassword('mypassword123');
    expect(hash).not.toBe('mypassword123');
  });

  test('comparePassword returns true for the correct password', async () => {
    const hash = await hashPassword('securepass');
    const result = await comparePassword('securepass', hash);
    expect(result).toBe(true);
  });

  test('comparePassword returns false for a wrong password', async () => {
    const hash = await hashPassword('securepass');
    const result = await comparePassword('wrongpass', hash);
    expect(result).toBe(false);
  });
});
