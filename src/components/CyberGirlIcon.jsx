import React from 'react';

const SimpleGirlLaptopIcon = ({ size = 250, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* الشعر (خلف الرأس) */}
      <path 
        d="M 160,110 C 130,120 125,180 130,220 C 135,240 155,250 165,240" 
        fill="#334155" 
      />

      {/* الجسم / البلوزة (لون أزرق ناعم) */}
      <path 
        d="M 140,320 C 140,240 170,220 200,220 C 230,220 260,240 260,320 Z" 
        fill="#3b82f6" 
      />
      {/* لياقة البلوزة */}
      <path 
        d="M 185,220 C 195,230 205,230 215,220" 
        stroke="#ffffff" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />

      {/* الرقبة والوجه (لون بشرة طبيعي) */}
      <path 
        d="M 185,200 L 215,200 L 215,225 L 185,225 Z" 
        fill="#fcd34d" 
      />
      <path 
        d="M 165,150 C 165,110 235,110 235,150 C 235,185 220,205 200,205 C 180,205 165,185 165,150 Z" 
        fill="#fde68a" 
      />

      {/* ملامح الوجه (ابتسامة وعينين بسيطة) */}
      <circle cx="185" cy="155" r="3" fill="#1e293b" />
      <circle cx="215" cy="155" r="3" fill="#1e293b" />
      <path 
        d="M 193,175 Q 200,183 207,175" 
        stroke="#1e293b" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* الشعر (الأمامي) */}
      <path 
        d="M 165,145 C 165,100 235,100 235,145 C 235,150 220,120 200,125 C 180,120 165,150 165,145 Z" 
        fill="#334155" 
      />
      <path 
        d="M 230,140 C 245,160 245,210 235,230" 
        stroke="#334155" 
        strokeWidth="16" 
        strokeLinecap="round" 
      />
      <path 
        d="M 170,140 C 155,160 155,210 165,230" 
        stroke="#334155" 
        strokeWidth="16" 
        strokeLinecap="round" 
      />

      {/* اليد التي تمسك اللابتوب */}
      <path 
        d="M 245,260 Q 275,270 280,285" 
        stroke="#fde68a" 
        strokeWidth="16" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M 155,260 Q 185,270 210,270" 
        stroke="#fde68a" 
        strokeWidth="16" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* اللابتوب (رمادي وفضي منظم) */}
      {/* شاشة اللابتوب */}
      <polygon 
        points="210,210 285,200 285,275 210,285" 
        fill="#0f172a" 
        stroke="#64748b" 
        strokeWidth="4" 
        strokeLinejoin="round" 
      />
      {/* إضاءة الشاشة / محتوى ساطع بسيط */}
      <polygon 
        points="216,216 279,208 279,269 216,277" 
        fill="#38bdf8" 
        opacity="0.9" 
      />
      <line x1="225" y1="230" x2="265" y2="225" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <line x1="225" y1="242" x2="255" y2="238" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

      {/* قاعدة اللابتوب (الكيبورد) */}
      <polygon 
        points="180,285 280,275 295,290 195,300" 
        fill="#94a3b8" 
        stroke="#475569" 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default SimpleGirlLaptopIcon;