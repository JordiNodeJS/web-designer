'use client';

import { useCallback } from 'react';
import { useCursorControl } from '@/components/cursor-context';

export const CursorToggle: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { enabled, setEnabled } = useCursorControl();

  const toggle = useCallback(() => {
    if (!setEnabled) return;
    setEnabled(!enabled);
  }, [enabled, setEnabled]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={
        'text-muted-foreground hover:bg-background/60 hidden items-center justify-center rounded-full bg-transparent px-2 py-1 text-xs md:inline-flex ' +
        className
      }
      aria-pressed={!enabled}
      title={enabled ? 'Desactivar cursor custom' : 'Activar cursor custom'}
    >
      <span className="sr-only">Toggle custom cursor</span>
      <span
        className="inline-block h-3 w-3 rounded-full"
        aria-hidden
        style={{
          backgroundColor: enabled ? 'var(--muted-foreground)' : 'transparent',
          border: enabled ? 'none' : '1px solid var(--muted-foreground)',
        }}
      />
    </button>
  );
};
