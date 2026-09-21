'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const MotionContext = createContext({ mode: 0, setMode: () => {} });

export function useMotion() {
  return useContext(MotionContext);
}

export default function MotionProvider({ children }) {
  const [mode, setMode] = useState(0);
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}
