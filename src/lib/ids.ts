let sequence = 0;

export const nextId = (prefix: string): string => `${prefix}-${++sequence}`;
