'use client';

import React from 'react';
import { useCursorControl } from '@/components/cursor-context';
import { CursorToggle } from './cursor-toggle';

export const ClientOnlyCursorToggle: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { showToggle } = useCursorControl();

  if (!showToggle) return null;
  return <CursorToggle className={className} />;
};
