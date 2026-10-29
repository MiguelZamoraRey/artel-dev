import { describe, expect, it } from 'vitest';
import { clamp01, progressFor } from './draw';

describe('clamp01', () => {
  it('clamps values to the 0..1 range', () => {
    expect(clamp01(-0.5)).toBe(0);
    expect(clamp01(0.25)).toBe(0.25);
    expect(clamp01(1.5)).toBe(1);
  });
});

describe('progressFor', () => {
  it('is 0 when the element enters at the bottom of the viewport', () => {
    expect(progressFor(1000, 500, 1000)).toBe(0);
  });

  it('is 1 when the element has left through the top', () => {
    expect(progressFor(-500, 500, 1000)).toBe(1);
  });

  it('is 0.5 at the midpoint', () => {
    expect(progressFor(250, 500, 1000)).toBe(0.5);
  });

  it('changes with the viewport height', () => {
    expect(progressFor(250, 500, 500)).toBe(0.25);
  });

  it('clamps positions outside the range', () => {
    expect(progressFor(2000, 500, 1000)).toBe(0);
    expect(progressFor(-2000, 500, 1000)).toBe(1);
  });
});
