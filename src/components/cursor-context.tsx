'use client';

import React from 'react';

export type CursorConfig = {
  hoverScale: number;
  enabled: boolean;
  setEnabled?: (v: boolean) => void;
  showToggle?: boolean;
  setShowToggle?: (v: boolean) => void;
};

const CursorContext = React.createContext<CursorConfig>({
  hoverScale: 1.5,
  enabled: true,
});

export const CursorProvider: React.FC<{
  children: React.ReactNode;
  hoverScale?: number;
  enabled?: boolean;
}> = ({ children, hoverScale = 1.5, enabled = true }) => {
  const [isEnabled, setIsEnabled] = React.useState(enabled);
  const [showToggle, setShowToggle] = React.useState(false);

  return (
    <CursorContext.Provider
      value={{
        hoverScale,
        enabled: isEnabled,
        setEnabled: setIsEnabled,
        showToggle,
        setShowToggle,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursorConfig = () => React.useContext(CursorContext);

export const useCursorControl = () => {
  const ctx = React.useContext(CursorContext);
  return {
    enabled: ctx.enabled,
    setEnabled: ctx.setEnabled,
    hoverScale: ctx.hoverScale,
    showToggle: ctx.showToggle,
    setShowToggle: ctx.setShowToggle,
  } as {
    enabled: boolean;
    setEnabled?: (v: boolean) => void;
    hoverScale: number;
    showToggle?: boolean;
    setShowToggle?: (v: boolean) => void;
  };
};
