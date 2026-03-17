declare module '*.jsx' {
  import type { FC } from 'react';
  const Component: FC<Record<string, unknown>>;
  export default Component;
}
