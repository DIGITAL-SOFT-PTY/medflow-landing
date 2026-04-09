import React from 'react';
import { Linkedin } from 'lucide-react';
import { TEAM, TEAM_COLOR_MAP } from '../data/team';
import { useInView } from '../hooks/useInView';

const DELAYS = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5'];

export default function TeamSection() {
  const [ref, inView] = useInView();

  return (
    <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            Nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Las personas detrás de MedFlow
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Un equipo apasionado por transformar la salud en Latinoamérica.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`reveal ${DELAYS[i] || ''} ${inView ? 'visible' : ''} group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition text-center relative`}
            >
              <div className={`w-20 h-20 ${TEAM_COLOR_MAP[member.color]} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full" fill="white" fillOpacity="0.15" aria-hidden="true">
                  <circle cx="40" cy="27" r="13" />
                  <ellipse cx="40" cy="70" rx="22" ry="16" />
                </svg>
                <span className="relative z-10 text-white font-black text-xl tracking-wide">{member.initials}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-0.5">{member.name}</h3>
              <p className="text-teal-600 text-xs font-semibold uppercase tracking-wide mb-3">{member.title}</p>
              <p className="text-gray-500 text-sm mb-3">{member.desc}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-blue-600 transition text-xs font-medium opacity-0 group-hover:opacity-100"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
