import { useEffect } from 'react';

export function Name() {
  useEffect(() => {
    document.cookie = 'name=John';

    return () => {
      document.cookie = '';
    };
  });

  return <div>John</div>;
}
