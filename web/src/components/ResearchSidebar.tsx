import React, { useState, useEffect } from 'react';
import { X, Trash2, FolderOpen } from 'lucide-react';
import type { SavedItem } from '../types';

export default function ResearchSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  useEffect(() => {
    // Load saved items from localStorage
    const loadSavedItems = () => {
      const saved = localStorage.getItem('horizon_saved_research');
      if (saved) {
        setSavedItems(JSON.parse(saved));
      }
    };

    loadSavedItems();

    // Listen for toggle events
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-research', handleToggle);

    // Listen for updates to saved items
    const handleUpdate = () => loadSavedItems();
    window.addEventListener('saved-items-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('toggle-research', handleToggle);
      window.removeEventListener('saved-items-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleRemoveItem = (id: string) => {
    const saved = savedItems.filter(i => i.id !== id);
    localStorage.setItem('horizon_saved_research', JSON.stringify(saved));
    setSavedItems(saved);
    window.dispatchEvent(new Event('saved-items-updated'));
  };

  const handleNavigate = (id: string, type: 'article' | 'speaker') => {
    const url = type === 'article' ? `/article/${id}` : `/speakers/${id}`;
    window.location.href = url;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-void/20 backdrop-blur-[1px] z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - File Cabinet Style */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-[#eeece6] border-l border-void z-[60] transform transition-transform duration-300 ease-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">

          {/* Cabinet Header */}
          <div className="p-4 border-b border-void bg-paper flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-void text-paper p-1">
                <FolderOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-mono font-bold tracking-widest uppercase">CLASSIFIED_FILES</h2>
                <p className="text-[9px] font-mono text-gray-500">USER: AUTHORIZED</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-alert-red transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto bg-[#eeece6] p-4">
            {savedItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                <p className="font-mono text-xs uppercase tracking-widest mb-2">[ EMPTY DRAWER ]</p>
                <p className="font-serif italic text-sm">No documents have been filed.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-300 shadow-sm p-3 relative group hover:border-void transition-colors cursor-pointer"
                    onClick={() => handleNavigate(item.id, item.type)}
                  >
                    {/* File Tab */}
                    <div className={`absolute -top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase border border-b-0 border-gray-300 bg-white ${item.type === 'article' ? 'text-rand-blue' : 'text-alert-red'}`}>
                      {item.type}
                    </div>

                    <div className="mt-2 flex justify-between items-start gap-2">
                      <h3 className="font-serif font-bold text-base leading-tight group-hover:underline decoration-1 underline-offset-2">
                        {item.title}
                      </h3>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.id); }}
                        className="text-gray-300 hover:text-alert-red transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-2 pt-2 border-t border-dashed border-gray-200 flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase">
                      <span>REF: {item.id.toUpperCase()}</span>
                      <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cabinet Footer */}
          <div className="p-4 border-t border-void bg-paper">
            <button className="w-full py-3 bg-void text-paper font-mono font-bold text-xs uppercase tracking-widest hover:bg-alert-red transition-colors">
              Export Manifest
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
