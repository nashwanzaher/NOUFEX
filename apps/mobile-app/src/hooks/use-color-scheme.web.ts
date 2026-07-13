import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the
 * client side for web. The initial server-rendered value is "light" so the
 * markup matches the first client paint; after hydration we switch to the
 * real system color scheme.
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // The one-time flag flip is intentional and only runs once on the client
    // after hydration. The new `react-hooks/set-state-in-effect` rule flags
    // this idiom but it remains the recommended approach for hydration
    // detection in the official Expo template.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
