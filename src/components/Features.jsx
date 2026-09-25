import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBarChart2, FiUsers, FiCalendar, FiDollarSign, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: FiUsers,
      title: 'Member Tracking',
      description: 'Real-time member data management with membership status and expiry dates',
    },
    {
      icon: FiDollarSign,
      title: 'Revenue Analytics',
      description: 'Track current revenue and expected income with detailed projections',
    },
    {
      icon: FiCalendar,
      title: 'Payment Plans',
      description: 'Support for monthly, quarterly, bi-annual, and yearly payment plans',
    },
    {
      icon: FiBarChart2,
      title: 'Advanced Dashboard',
      description: 'Beautiful analytics dashboard with real-time data visualization',
    },
    {
      icon: FiTrendingUp,
      title: 'Projections',
      description: 'AI-powered revenue forecasting if all members pay on time',
    },
    {
      icon: FiCheckCircle,
      title: 'Payment Status',
      description: 'Track who paid, who is pending, and upcoming payments',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-300">Everything you need to manage your gym efficiently</p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="stat-card group hover:border-[#e94560] cursor-pointer"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-[#e94560] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
