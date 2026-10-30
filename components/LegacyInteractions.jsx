'use client';

import { useEffect } from 'react';

export default function LegacyInteractions() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    if (document.getElementById('cam-main-script')) return;

    const script = document.createElement('script');
    script.id = 'cam-main-script';
    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
