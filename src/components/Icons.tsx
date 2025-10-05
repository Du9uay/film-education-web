import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BookOpen: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z"/>
    <path d="M8 21v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7"/>
  </svg>
);

export const Settings: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

export const Zap: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

export const Cpu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>
    <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/>
    <line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/>
    <line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/>
    <line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

export const PlayCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10,8 16,12 10,16 10,8"/>
  </svg>
);

export const Clock: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

export const Users: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const Target: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const Award: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const X: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

export const Monitor: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export const Network: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="19" r="1"/>
    <circle cx="5" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <line x1="12" y1="6" x2="12" y2="11"/>
    <line x1="12" y1="13" x2="12" y2="18"/>
    <line x1="6" y1="12" x2="11" y2="12"/>
    <line x1="13" y1="12" x2="18" y2="12"/>
  </svg>
);

export const Eye: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const Layers: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12,2 2,7 12,12 22,7 12,2"/>
    <polyline points="2,17 12,22 22,17"/>
    <polyline points="2,12 12,17 22,12"/>
  </svg>
); 

export const ArrowLeft: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

export const RefreshCw: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23,4 23,10 17,10"/>
    <polyline points="1,20 1,14 7,14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>
);

export const Hash = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

export const Calculator = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
    <line x1="8" y1="6" x2="16" y2="6"></line>
    <line x1="8" y1="10" x2="16" y2="10"></line>
    <line x1="8" y1="14" x2="16" y2="14"></line>
    <line x1="8" y1="18" x2="16" y2="18"></line>
  </svg>
);

export const Power = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
    <line x1="12" y1="2" x2="12" y2="12"></line>
  </svg>
);

export const Code = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const Shield = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export const ArrowDown = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

// ===============================
// 电影制作专用图标
// ===============================

export const Camera: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

export const Film: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>
    <line x1="7" y1="3" x2="7" y2="21"/>
    <line x1="17" y1="3" x2="17" y2="21"/>
    <line x1="2" y1="9" x2="22" y2="9"/>
    <line x1="2" y1="15" x2="22" y2="15"/>
  </svg>
);

export const Video: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23,7 16,12 23,17 23,7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

export const Edit3: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

export const Lightbulb: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21h6"/>
    <path d="M12 17v4"/>
    <circle cx="12" cy="9" r="7"/>
    <line x1="8" y1="15" x2="16" y2="15"/>
  </svg>
);

export const Mic: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z"/>
    <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

export const Clapperboard: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/>
    <path d="M6.2 5.3l3.1 3.9"/>
    <path d="M12.4 3.4l3.1 4"/>
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  </svg>
);

export const Scissors: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

export const Star: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

export const Megaphone: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11h3l3-9v18l-3-9H3"/>
    <path d="M7 2h13"/>
    <path d="M7 22h13"/>
  </svg>
); 

export const GPT: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M475.52 26.88a252.032 252.032 0 0 1 176.128 71.872l3.456 3.648 7.552-1.344 8.768-1.088 8.832-0.768 17.728-0.64c90.24 0 173.568 47.68 218.432 124.8a244.032 244.032 0 0 1 26.048 187.264l-1.6 5.312 3.392 3.968c32.32 40 51.392 88.832 54.592 139.904l0.448 15.36c0 43.904-11.712 87.04-33.92 124.8-17.664 30.528-41.6 56.96-70.4 77.504a250.752 250.752 0 0 1-81.6 38.464l-4.864 1.152-0.896 2.56a251.84 251.84 0 0 1-222.464 159.936l-15.104 0.32a252.096 252.096 0 0 1-176.128-71.872l-3.392-3.584-5.824 1.024a255.168 255.168 0 0 1-109.76-7.872l-15.04-4.992-14.784-5.952a250.88 250.88 0 0 1-115.968-103.232 244.096 244.096 0 0 1-26.048-187.264l1.6-5.312-3.392-3.968a247.232 247.232 0 0 1-54.528-139.904l-0.512-15.36c0-43.904 11.776-87.04 34.048-124.928 17.6-30.464 41.6-56.896 70.4-77.44a250.816 250.816 0 0 1 81.536-38.464l4.8-1.28 1.024-2.56A251.904 251.904 0 0 1 460.48 27.264L475.584 26.88z m208.064 473.792v227.328a47.104 47.104 0 0 1-24.128 41.216l-166.144 94.592 8.256 4.48c17.92 8.768 37.44 14.208 57.6 15.744l12.16 0.448c86.592-0.192 156.544-69.184 156.608-154.24l0.128-204.224-44.48-25.344z m-77.824 138.88L406.272 753.28a48.192 48.192 0 0 1-48 0.064L191.36 658.304c0 22.72 5.12 44.928 14.72 65.216l6.272 11.904c13.696 23.424 33.472 42.88 57.28 56.448a158.528 158.528 0 0 0 156.736 0.064l179.328-102.08v-50.304z m39.488-300.288l-44.16 25.152 199.04 113.344c5.504 3.136 10.24 7.232 14.08 12.16l3.584 5.184a47.168 47.168 0 0 1 6.464 23.808l-0.064 189.952 6.848-3.968a154.048 154.048 0 0 0 71.424-118.4l0.448-11.328c0-27.072-7.232-53.632-20.928-77.056a155.52 155.52 0 0 0-57.28-56.512l-179.456-102.4z m-423.936-41.408l-8.512 5.12a152.832 152.832 0 0 0 8.128 262.016l179.328 102.4 44.224-25.152-198.912-113.28a47.68 47.68 0 0 1-14.208-12.16l-3.52-5.184a47.104 47.104 0 0 1-6.528-23.936V297.856zM522.816 408.96l-83.008 47.296V550.4l83.008 47.232L605.76 550.4V456.256L522.816 408.96z m-48.64-286.72c-86.528 0-156.608 69.12-156.672 154.176L317.44 480.64l44.48 25.344 0.192-227.2c0-6.272 1.28-12.48 3.712-18.304l2.816-5.568a47.488 47.488 0 0 1 17.6-17.28l166.016-94.72-8.128-4.352a158.528 158.528 0 0 0-57.792-15.808l-12.16-0.448z m223.36 71.872c-27.52 0-54.464 7.104-78.272 20.672L439.872 316.736v50.304l199.552-113.664a48.192 48.192 0 0 1 17.728-6.016l6.336-0.384c8.448 0 16.704 2.24 23.936 6.4l166.656 94.976-0.256-10.048c-5.12-77.056-67.648-138.816-145.92-143.808l-10.368-0.32z" />
  </svg>
);

export const N8N: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M916.386987 242.517333a107.818667 107.818667 0 0 0-104.405334 80.853334H688.37632a107.776 107.776 0 0 0-106.325333 90.026666l-4.394667 26.624a53.888 53.888 0 0 1-53.162667 45.013334h-42.709333a107.818667 107.818667 0 0 0-208.768 0H212.34432a107.818667 107.818667 0 1 0 0 53.930666h60.672a107.818667 107.818667 0 0 0 208.810667 0h42.666666a53.888 53.888 0 0 1 53.205334 45.013334l4.394666 26.581333a107.776 107.776 0 0 0 106.325334 90.069333h15.786666a107.818667 107.818667 0 1 0 0-53.888h-15.786666a53.888 53.888 0 0 1-53.162667-45.056l-4.394667-26.581333A107.52 107.52 0 0 0 595.789653 512a107.52 107.52 0 0 0 34.986667-63.146667l4.437333-26.538666a53.888 53.888 0 0 1 53.162667-45.056h123.562667a107.818667 107.818667 0 1 0 104.405333-134.741334m0 53.888a53.888 53.888 0 0 1 53.888 53.888 53.888 53.888 0 0 1-53.888 53.930667A53.888 53.888 0 0 1 862.45632 350.293333a53.888 53.888 0 0 1 53.930667-53.888m-808.448 161.706667A53.888 53.888 0 0 1 161.869653 512a53.888 53.888 0 0 1-53.930666 53.888A53.888 53.888 0 0 1 54.050987 512a53.888 53.888 0 0 1 53.888-53.888m269.482666 0A53.888 53.888 0 0 1 431.309653 512a53.888 53.888 0 0 1-53.888 53.888A53.888 53.888 0 0 1 323.57632 512a53.888 53.888 0 0 1 53.888-53.888m431.146667 161.706667a53.888 53.888 0 0 1 53.930666 53.888 53.888 53.888 0 0 1-53.888 53.888 53.888 53.888 0 0 1-53.930666-53.888 53.888 53.888 0 0 1 53.888-53.930667" />
  </svg>
);

export const Runway: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M483.328 769.299692c-1.851077 8.507077-3.190154 16.541538-5.316923 24.497231-19.810462 74.752-67.702154 122.013538-142.375385 140.681846-59.549538 14.926769-116.893538 6.380308-169.353846-26.269538-46.985846-29.341538-74.830769-72.270769-84.086154-126.818462a248.674462 248.674462 0 0 1-3.308307-40.684307c-0.196923-153.481846-0.078769-306.963692-0.07877-460.445539C78.769231 185.186462 146.904615 101.730462 240.206769 83.101538a211.022769 211.022769 0 0 1 40.526769-4.135384c154.624-0.275692 309.248-0.275692 463.793231-0.118154 45.174154 0.118154 86.646154 12.209231 122.486154 40.566154 35.367385 27.923692 57.619692 64.669538 68.253539 108.110769 14.099692 57.619692 8.034462 113.152-22.646154 164.588308-27.057231 45.528615-67.780923 73.097846-118.86277 85.661538-7.640615 1.969231-15.478154 3.190154-23.670153 4.962462 1.181538 1.260308 2.126769 2.402462 3.150769 3.465846 38.990769 38.872615 77.981538 77.587692 116.854154 116.539077 30.444308 30.444308 48.049231 67.111385 53.563077 109.961846 10.633846 82.313846-33.949538 170.496-106.57477 209.841231a186.092308 186.092308 0 0 1-90.702769 22.252307c-12.957538 0-25.836308 0.590769-38.596923-1.732923-23.197538-4.253538-44.268308-13.745231-64.196923-25.993846-28.750769-17.801846-53.76-39.975385-77.469538-63.763692-24.772923-24.812308-49.033846-50.176-73.609847-75.224615-2.875077-3.111385-5.907692-5.789538-9.176615-8.822154zM201.531077 512.787692v126.188308c0 36.667077-0.393846 73.334154 0.196923 109.961846 0.393846 22.331077 9.924923 40.920615 27.963077 54.468923 17.841231 13.430154 38.360615 17.959385 60.219077 16.147693 18.274462-1.575385 34.816-7.876923 48.561231-20.401231 16.423385-15.084308 23.000615-34.343385 23.000615-56.123077V280.064c0-3.662769-0.196923-7.483077-0.787692-11.027692-6.183385-40.526769-45.056-70.971077-85.976616-67.584a80.265846 80.265846 0 0 0-73.255384 79.872c0.078769 77.193846 0.078769 154.348308 0.078769 231.424z m282.978461-29.144615c-0.118154 1.851077-0.196923 3.150769-0.196923 4.371692 0 35.131077-0.118154 70.222769 0.07877 105.314462 0 1.969231 1.063385 4.450462 2.520615 5.828923a56947.003077 56947.003077 0 0 0 202.318769 202.121846c17.329231 17.211077 38.478769 24.654769 63.015385 20.283077 23.630769-4.135385 41.826462-17.014154 55.729231-36.076308 11.224615-15.438769 17.132308-32.768 15.596307-52.224-1.575385-18.825846-10.358154-34.107077-23.512615-47.261538a387007.842462 387007.842462 0 0 1-199.286154-199.246769 9.176615 9.176615 0 0 0-7.404308-3.072c-34.697846 0.078769-69.316923 0.078769-104.054153 0.078769-1.457231-0.078769-2.875077-0.078769-4.804924-0.078769z m-0.118153-122.486154h159.586461c34.500923 0 69.041231 0.472615 103.581539-0.118154 28.317538-0.472615 49.979077-13.351385 63.40923-38.675692 9.019077-16.935385 11.421538-35.209846 8.822154-54.075077-5.041231-36.824615-31.744-66.638769-73.412923-66.717538-91.372308-0.196923-182.665846-0.078769-274.077538-0.07877-1.181538 0-2.402462 0.157538-3.859693 0.393846 7.089231 15.635692 10.712615 31.704615 12.760616 48.246154 3.387077 26.978462 3.465846 54.035692 3.111384 81.211077l0.07877 29.814154z" />
  </svg>
);

export const SeedDream: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1170 1024" fill="currentColor" className={className}>
    <path d="M0 968.216381l197.87581-50.517333V105.22819L0 54.710857z" />
    <path d="M968.216381 0v1018.733714L1170.285714 968.216381V54.710857z" />
    <path d="M648.289524 378.88l202.069333-50.517333v534.625523l-202.069333-50.517333z" />
    <path d="M315.733333 458.849524l202.069334 50.517333v433.590857L315.733333 997.668571z" />
  </svg>
);

export const LumaAI: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M512 509.696V0L71.9872 257.1264v509.7472L512 1024l440.0128-257.1264L512 509.696z" />
  </svg>
);

// 环保水质检测主题图标
export const Droplets: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2.26 4.89 4.56 6.68a7.58 7.58 0 0 1 2.79 5.7c0 2.99-2.01 5.6-5 5.6s-5-2.61-5-5.6a7.58 7.58 0 0 1 .21-1.8"/>
  </svg>
);

export const TestTube: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/>
    <path d="M8.5 2h7"/>
    <path d="M9.5 9.4c1.7.7 3.3.7 5 0"/>
  </svg>
);

export const Beaker: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 3h15"/>
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/>
    <path d="M6 14h12"/>
  </svg>
);

export const Microscope: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 18h8"/>
    <path d="M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14h.01"/>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2"/>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
  </svg>
);

export const Leaf: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export const Recycle: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
    <path d="M9 14.5L11.196 18.337a1.83 1.83 0 0 0 1.804.663 1.785 1.785 0 0 0 1.39-1.3L16.804 9.5"/>
    <path d="M14.5 4.5L11.804 0.663a1.83 1.83 0 0 0-1.804-.663 1.785 1.785 0 0 0-1.39 1.3L6.196 9.5"/>
    <path d="M3 12.5l3.5 2 3.5-2"/>
    <path d="M20.5 9.5L17 7.5 13.5 9.5"/>
  </svg>
);

export const FlaskConical: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
    <path d="M8.5 2h7"/>
    <path d="M7 16h10"/>
  </svg>
);

export const CheckSquare: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9,11 12,14 22,4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

export const FileText: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

export const Waves: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
  </svg>
); 

export const TrendingUp: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export const Briefcase: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

export const Building2: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </svg>
);

export const Rocket: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export const Trophy: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);