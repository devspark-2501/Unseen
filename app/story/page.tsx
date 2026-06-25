'use client'

import { motion } from 'framer-motion'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">Unseen</div>
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
            Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">Our Story</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
            Talent exists everywhere. Recognition does not.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We believed the most capable people were often the most overlooked. We set out to change how the world sees potential.
          </p>
        </motion.div>
      </section>

      {/* The Invisible Effort */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">The Invisible Effort</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            Many skills never make it to a resume.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Helping run a family business teaches leadership. Teaching yourself at night teaches discipline. Caring for siblings teaches responsibility. Yet none of these appear in portfolios.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Society measures credentials. It counts degrees, certificates, and job titles. But it misses something deeper: the relentless work of people building skills from nothing.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-fit">
              <p className="text-sm text-gray-600 mb-4">Real examples of invisible growth:</p>
              <ul className="space-y-3">
                {[
                  'Balancing school and family responsibility',
                  'Teaching yourself new skills online',
                  'Persisting despite limited opportunities',
                  'Building something from the ground up',
                  'Mentoring without formal credentials',
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-800 font-medium flex items-start gap-3">
                    <span className="text-gray-400 mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Problem With Traditional Recognition */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-12">
            Traditional systems measure achievement, not potential.
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: 'Grades',
                description: 'Only capture one dimension of learning in one environment.'
              },
              {
                title: 'Resumes',
                description: 'Tell a curated story. They hide gaps but also hide growth.'
              },
              {
                title: 'Awards & Certificates',
                description: 'Recognize excellence, but only what has been recognized before.'
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-gray-700 font-medium">
            What they all miss: the person who did more with less. The person who persisted when resources were scarce. The person whose potential far exceeds their achievements because of circumstance, not capability.
          </p>
        </motion.div>
      </section>

      {/* The Realization */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">The Realization</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            We kept meeting people who were invisible.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Not invisible because of lack of skill. Invisible because their strength lay in the wrong metrics. They weren't the loudest, the most credentialed, or the most recognized. But they were capable in ways that traditional systems had no vocabulary for.
          </p>
          <div className="bg-gray-100 rounded-2xl p-12">
            <p className="text-lg text-gray-800 italic font-medium leading-relaxed">
              "What if we measured people by what they achieved with the opportunities they had, not just by the outcomes they produced?"
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Question */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
            What if we measured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">potential</span> instead of privilege?
          </h2>
        </motion.div>
      </section>

      {/* Building Unseen */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Building Unseen</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            We built a platform that sees what others miss.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Unseen uses AI to listen to your story—the real one. Not the polished resume version. The version where you talk about obstacles, about learning, about persisting when it would have been easier to quit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            From that conversation, Unseen identifies hidden strengths:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {['Leadership', 'Discipline', 'Resilience', 'Initiative', 'Adaptability', 'Learning Agility', 'Responsibility', 'Problem Solving'].map((skill, i) => (
              <div key={i} className="px-4 py-3 bg-gray-100 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">{skill}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Skills that you demonstrated but maybe never named. Talents that shaped who you are but never appeared on a credential.
          </p>
        </motion.div>
      </section>

      {/* Potential Over Privilege */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Potential Over Privilege</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            Introducing the Potential Gap Score.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Traditional systems measure achievement in a vacuum. They don't ask: against what obstacles was this achievement made?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Potential Gap Score measures achievement relative to opportunity. It answers a different question: what could this person do if circumstances aligned?
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Achievement</p>
                <p className="text-3xl font-black text-gray-900">52</p>
              </div>
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Potential</p>
                <p className="text-3xl font-black text-gray-900">89</p>
              </div>
              <div className="pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-2">Potential Gap</p>
                <p className="text-3xl font-black text-gray-900">+37</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            A high gap score doesn't mean failure. It means untapped potential. It means someone who did remarkable things with limited resources. It means someone who will do extraordinary things when resources align.
          </p>
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Our Vision</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
            A future where every step is counted.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We envision a world where potential is recognized before achievement catches up. Where hidden strengths are named and valued. Where the person who built skills from nothing is seen as clearly as the person who had every advantage.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-8">
            Where talent, finally, is recognized universally.
          </p>
        </motion.div>
      </section>

      {/* Closing Manifesto */}
      <section className="py-32 px-6 md:px-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-4xl font-black tracking-tighter leading-tight text-gray-900 mb-8">
            No one should be invisible.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Not the person building while others sleep. Not the person learning despite barriers. Not the person who chose perseverance over privilege.
          </p>
          <p className="text-lg text-gray-700 mb-16">
            We&apos;re building Unseen for everyone who&apos;s been overlooked. For every hidden talent. For every unmeasured strength.
          </p>
          <p className="text-xl font-bold text-gray-900 tracking-wide">
            Let&apos;s see what the world has been missing.
          </p>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-8">Ready to uncover your potential?</p>
          <a
            href="/interview"
            className="inline-block bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Start Your Analysis
          </a>
        </div>
      </footer>
    </div>
  )
}
