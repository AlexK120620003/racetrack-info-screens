export interface BestLap {
  time: string;
  racerName: string;
}

export interface RaceSession {
  id: string;
  name: string;
  racerNames: string[];
  startTime: string;
  endTime: string;
  bestLap?: BestLap;
}

export type RaceMode =
  | 'idle'
  | 'safe'
  | 'hazard'
  | 'danger'
  | 'finish'
  | 'ended';

export type NewSessionData = Omit<RaceSession, 'id' | 'bestLap'>;

export interface Participant {
  carNumber: number;
  driverName: string;
  laps: number;
  bestLapTime: number | null;
}

export interface SessionPreview {
  sessionId: string;
  sessionName: string;
  participants: Array<{ carNumber: number; driverName: string }>;
}

export interface LastRace {
  sessionId: string;
  sessionName: string;
  leaderboard: Participant[];
  endedAt: string | null;
}

export interface RaceState {
  sessionId: string | null;
  status: RaceMode;
  timer: number | null;
  flagStatus: 'safe' | 'hazard' | 'danger' | 'finish';
  participants: Participant[];
  leaderboard: Participant[];
  nextRace: SessionPreview | null;
  lastRace: LastRace | null;
  callToPaddock: boolean;
}

export type Role = 'receptionist' | 'safety' | 'observer';
