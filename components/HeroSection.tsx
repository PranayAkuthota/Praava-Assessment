'use client'

import React, { useEffect, useState } from 'react'
import { Receipt, Gavel, CheckSquare, FileText } from 'lucide-react'
import { FloatingCard, PortalCard } from './FloatingCard'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="
      relative min-h-screen flex items-center overflow-hidden
      bg-[var(--bg)] transition-colors duration-300
    ">
      {/* Background blobs */}
      <div
        className="blob w-72 h-40 bg-[#C0C4F0] dark:bg-[#3B47F0]"
        style={{ top: '8%', left: '-4%' }}
      />
      <div
        className="blob w-52 h-32 bg-[#C0C4F0] dark:bg-[#3B47F0]"
        style={{ top: '55%', left: '0%' }}
      />
      <div
        className="blob w-64 h-36 bg-[#C5C8F0] dark:bg-[#5060D0]"
        style={{ top: '5%', right: '3%' }}
      />
      <div
        className="blob w-44 h-28 bg-[#C5C8F0] dark:bg-[#5060D0]"
        style={{ top: '38%', right: '-2%' }}
      />
      <div
        className="blob w-96 h-40 bg-[#D0D3F5] dark:bg-[#2A2060]"
        style={{ bottom: '10%', right: '15%' }}
      />

      {/* Content wrapper */}
      <div className="
        relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12
        flex flex-col lg:flex-row items-center gap-12 lg:gap-0
        py-24 lg:py-0
      ">

        {/* LEFT: Text Content */}
        <div className="flex-1 max-w-xl lg:max-w-none lg:w-1/2">
          {/* Eyebrow badge */}
          <div
            className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
              bg-white/60 dark:bg-white/10 backdrop-blur-sm
              border border-white/70 dark:border-white/20
              text-sm font-semibold text-[#3B47F0] dark:text-[#8898FF]
              shadow-sm
            "
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.5s ease 0.1s',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#3B47F0] dark:bg-[#8898FF] animate-pulse" />
            Legal Work Platform
          </div>

          {/* Headline */}
          <h1
            className="
              text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.08]
              text-[var(--text-primary)] mb-6
            "
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            A single platform to{' '}
            <span className="font-extrabold text-[var(--text-primary)]">manage</span>{' '}
            every part of your{' '}
            <span className="font-extrabold text-[var(--text-primary)]">legal work</span>
          </h1>

          {/* Subtext */}
          <p
            className="
              text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed mb-10
              max-w-md
            "
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}
          >
            <button className="
              px-7 py-3.5 rounded-full bg-[#3B47F0] text-white font-bold text-sm
              hover:bg-[#2a35d0] hover:scale-105 active:scale-95
              transition-all duration-200 shadow-lg shadow-[#3B47F0]/30
            ">
              Get Started Free
            </button>
            <button className="
              px-7 py-3.5 rounded-full font-bold text-sm
              bg-white/60 dark:bg-white/10 backdrop-blur-sm
              border border-white/70 dark:border-white/20
              text-[var(--text-primary)]
              hover:bg-white/90 dark:hover:bg-white/20 hover:scale-105 active:scale-95
              transition-all duration-200 shadow-sm
            ">
              Watch Demo →
            </button>
          </div>
        </div>

        {/* RIGHT: Floating Elements */}
        <div
          className="
            relative flex-1 w-full lg:w-1/2
            h-[420px] sm:h-[480px] lg:h-[560px]
            hidden sm:block
          "
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        >
          {/* Billing — top right, tilted right */}
          <div className="absolute top-[4%] left-[30%]" style={{ zIndex: 4 }}>
            <FloatingCard
              color="blue"
              rotation={-8}
              icon={<Receipt size={20} className="text-white" />}
              label="Billing"
              animationDelay={0}
              floatDirection="up"
            />
          </div>

          {/* Matters — middle left, tilted left */}
          <div className="absolute top-[38%] left-[-2%]" style={{ zIndex: 3 }}>
            <FloatingCard
              color="orange"
              rotation={-6}
              icon={<Gavel size={20} className="text-white" />}
              label="Matters"
              animationDelay={0.6}
              floatDirection="down"
            />
          </div>

          {/* John Doe Portal — middle, slight right */}
          <div className="absolute top-[36%] left-[42%]" style={{ zIndex: 5 }}>
            <PortalCard animationDelay={1.0} />
          </div>

          {/* Tasks — lower middle */}
          <div className="absolute bottom-[20%] left-[16%]" style={{ zIndex: 3 }}>
            <FloatingCard
              color="dark"
              rotation={3}
              icon={<CheckSquare size={20} className="text-[#E07B2A]" />}
              label="Tasks"
              animationDelay={1.3}
              floatDirection="up"
            />
          </div>

          {/* Documents — lower right, tilted right */}
          <div className="absolute bottom-[14%] right-[-4%]" style={{ zIndex: 2 }}>
            <FloatingCard
              color="dark"
              rotation={-4}
              icon={<FileText size={20} className="text-[#E07B2A]" />}
              label="Documents"
              animationDelay={0.9}
              floatDirection="down"
            />
          </div>
        </div>

        {/* Mobile: simplified stacked pills */}
        <div className="flex sm:hidden flex-wrap gap-3 justify-center mt-2">
          {[
            { label: 'Billing',    color: 'bg-[#3B47F0]', icon: <Receipt size={16} className="text-white" /> },
            { label: 'Matters',   color: 'bg-[#E07B2A]', icon: <Gavel size={16} className="text-white" /> },
            { label: 'Tasks',     color: 'bg-[#2D2B3D]', icon: <CheckSquare size={16} className="text-white" /> },
            { label: 'Documents', color: 'bg-[#2D2B3D]', icon: <FileText size={16} className="text-white" /> },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full ${item.color} text-white font-bold text-sm shadow-md`}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
