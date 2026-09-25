'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SavedContextType {
  savedSlugs: string[];
  isSaved: (slug: string) => boolean;
  toggleSave: (slug: string) => void;
  removeSave: (slug: string) => void;
  count: number;
}

const SavedContext = createContext<SavedContextType>({
  savedSlugs: [],
  isSaved: () => false,
  toggleSave: () => {},
  removeSave: () => {},
  count: 0,
});

const STORAGE_KEY = 'tramites_pe_saved';

export function SavedTramitesProvider({ children }: { children: ReactNode }) {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedSlugs(parsed);
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
    setIsMounted(true);
  }, []);

  const toggleSave = (slug: string) => {
    setSavedSlugs((prev) => {
      let updated: string[];
      if (prev.includes(slug)) {
        updated = prev.filter((s) => s !== slug);
      } else {
        updated = [...prev, slug];
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  const removeSave = (slug: string) => {
    setSavedSlugs((prev) => {
      const updated = prev.filter((s) => s !== slug);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  const isSaved = (slug: string) => {
    if (!isMounted) return false;
    return savedSlugs.includes(slug);
  };

  return (
    <SavedContext.Provider
      value={{
        savedSlugs,
        isSaved,
        toggleSave,
        removeSave,
        count: isMounted ? savedSlugs.length : 0,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSavedTramites() {
  return useContext(SavedContext);
}
