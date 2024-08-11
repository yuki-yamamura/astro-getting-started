import { useEffect } from 'react';

export function Name() {
  useEffect(() => {
    document.cookie = 'name=Bob';

    return () => {
      document.cookie = '';
    };
  });

  // return <div>John</div>;
  return <div>this page is revised by Bob.</div>;
}
