import type { Files } from '@/types/files';

export const sortFiles = (a: Files, b: Files) => {
  if (a.type !== b.type) {
    return a.type === 'directory' ? -1 : 1;
  }

  return a.name.localeCompare(b.name);
};
