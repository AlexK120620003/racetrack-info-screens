import { useEffect, useState } from 'react';
import { socket } from '../services/socket';
import type { RaceState } from '../types/types';

export function useRaceState(authKey?: string | null, role?: string) {
  const [raceState, setRaceState] = useState<RaceState | null>(null);

  useEffect(() => {
    if (role && !authKey) return;

    if (role && authKey) {
      socket.auth = { key: authKey, role };
    } else {
      socket.auth = {};
    }

    socket.connect();

    const handler = (data: RaceState) => {
      setRaceState(data);
    };

    socket.on('race:state', handler);
    socket.on('race:updated', handler);

    return () => {
      socket.off('race:state', handler);
      socket.off('race:updated', handler);
      socket.disconnect();
    };
  }, [authKey, role]);

  return raceState;
}
