import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiCheckCircle } from 'react-icons/fi'

const Waitlist = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail('')
      setIsLoading(false)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e94560]/10 via-transparent to-[#0f3460]/10"></div>
      </div>

      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Card */}
        <div className="stat-card text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#e94560] to-[#ff6b7a] rounded-full flex items-center justify-center mx-auto">
              <FiMail className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Join Our Waitlist</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to access GymPro. Get early access and exclusive launch pricing.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg bg-[#16213e] border border-[#0f3460] text-white placeholder-gray-500 focus:outline-none focus:border-[#e94560] transition-colors"
              disabled={isSubmitted || isLoading}
            />
            <button
              type="submit"
              disabled={isSubmitted || isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isLoading ? (
                <span className="animate-spin">⏳</span>
              ) : isSubmitted ? (
                <>
                  <FiCheckCircle className="w-5 h-5" />
                  Joined!
                </>
              ) : (
                'Join Now'
              )}
            </button>
          </motion.form>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300"
            >
              ✨ Thanks for joining! Check your email for updates.
            </motion.div>
          )}

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-[#0f3460]">
            <p className="text-gray-400 text-sm mb-4">Trusted by leading gyms</p>
            <div className="flex justify-center gap-6 flex-wrap opacity-70">
              <div className="text-center">
                <p className="text-2xl">💪</p>
                <p className="text-xs text-gray-500">500+ Gyms</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">👥</p>
                <p className="text-xs text-gray-500">50K Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl">⭐</p>
                <p className="text-xs text-gray-500">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Waitlist