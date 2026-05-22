'use client'

import React from 'react'

type CardColor = 'blue' | 'orange' | 'dark' | 'lavender'

interface FloatingCardProps {
  color: CardColor
  rotation: number
  icon: React.ReactNode
  label: string
  className?: string
  animationDelay?: number
  floatDirection?: 'up' | 'down'
}

const colorMap: Record<CardColor, { bg: string; text: string; iconBg: string }> = {
  blue:     { bg: 'bg-[#3B47F0]',  text: 'text-white',           iconBg: 'bg-white/20' },
  orange:   { bg: 'bg-[#E07B2A]',  text: 'text-white',           iconBg: 'bg-white/20' },
  dark:     { bg: 'bg-[#2D2B3D]',  text: 'text-white',           iconBg: 'bg-white/15' },
  lavender: { bg: 'bg-[#C5C8F0]',  text: 'text-[#2D2B3D]',      iconBg: 'bg-white/40' },
}

export function FloatingCard({
  color,
  rotation,
  icon,
  label,
  className = '',
  animationDelay = 0,
  floatDirection = 'up',
}: FloatingCardProps) {
  const { bg, text, iconBg } = colorMap[color]

  const floatStyle = {
    '--rot': `${rotation}deg`,
    animationDelay: `${animationDelay}s`,
    animationDuration: floatDirection === 'up' ? '4.5s' : '5.5s',
  } as React.CSSProperties

  return (
    <div
      className={`
        flex items-center gap-3 px-5 py-4 rounded-[2rem] shadow-xl
        cursor-pointer select-none
        transition-shadow duration-300 hover:shadow-2xl hover:scale-105
        ${bg} ${text} ${className}
      `}
      style={{
        ...floatStyle,
        transform: `rotate(${rotation}deg)`,
        animation: `${floatDirection === 'up' ? 'floatCard' : 'floatCardReverse'} ${floatStyle.animationDuration} ease-in-out ${animationDelay}s infinite`,
      }}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <span className="font-bold text-xl tracking-tight whitespace-nowrap">{label}</span>
    </div>
  )
}

// Special variant for the John Doe portal card
interface PortalCardProps {
  className?: string
  animationDelay?: number
}

export function PortalCard({ className = '', animationDelay = 0.8 }: PortalCardProps) {
  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-[2rem] shadow-xl
        bg-[#C5C8F0] dark:bg-[#7B82E0]
        cursor-pointer select-none
        transition-shadow duration-300 hover:shadow-2xl hover:scale-105
        ${className}
      `}
      style={{
        animation: `floatCardReverse 5s ease-in-out ${animationDelay}s infinite`,
        '--rot': '0deg',
      } as React.CSSProperties}
    >
      {/* Left accent bar */}
      <div className="w-1 h-12 rounded-full bg-[#3B47F0] flex-shrink-0" />

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
        🧔🏾
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span className="font-bold text-[#2D2B3D] dark:text-[#12111E] text-base leading-tight">
          John Doe – Portal
        </span>
        <span className="text-[#5A5A7A] dark:text-[#2D2B3D] text-xs leading-snug mt-0.5 line-clamp-2">
          Hey! Could you please review a document for me?
        </span>
        <span className="text-[#8888AA] dark:text-[#3D3D5A] text-[11px] mt-1">
          MAT-2233 · 2 h ago
        </span>
      </div>
    </div>
  )
}
