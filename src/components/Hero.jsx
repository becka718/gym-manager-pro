import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e94560] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0f3460] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-[#e94560] font-semibold text-sm">
            ✨ The Future of Gym Management
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Manage Your Gym</span>
          <br />
          <span className="text-white">Like Never Before</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Track member data, revenue analytics, and membership status in real-time.
          Premium gym management solution for modern fitness centers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">
            Start Free Trial
          </button>
          <button className="btn-secondary">
            View Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">500+</p>
            <p className="text-gray-400 text-sm md:text-base">Gym Owners</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">50K+</p>
            <p className="text-gray-400 text-sm md:text-base">Members Tracked</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold gradient-text">$10M+</p>
            <p className="text-gray-400 text-sm md:text-base">Revenue Managed</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero