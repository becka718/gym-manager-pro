import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiCalendar, FiDollarSign } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Dashboard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [stats, setStats] = useState({
    totalMembers: 254,
    activeMembers: 198,
    currentRevenue: 15420,
    expectedRevenue: 28500,
    expiringThisMonth: 12,
    paidNextMonth: 189,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const StatCard = ({ icon: Icon, label, value, subtext, gradient }) => (
    <motion.div
      variants={itemVariants}
      className="stat-card group"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2">{label}</p>
          <p className={`text-3xl md:text-4xl font-bold ${gradient}`}>
            {value}
          </p>
          {subtext && <p className="text-xs text-gray-500 mt-2">{subtext}</p>}
        </div>
        <Icon className="w-8 h-8 text-[#e94560] opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )

  return (
    <section
      id="dashboard"
      ref={ref}
      className="py-20 px-4"
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
            <span className="gradient-text">Dashboard Preview</span>
          </h2>
          <p className="text-xl text-gray-300">Real-time analytics at your fingertips</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <StatCard
            icon={FiUsers}
            label="Total Members"
            value={stats.totalMembers}
            subtext="Active Memberships"
            gradient="gradient-text"
          />
          <StatCard
            icon={FiUsers}
            label="Active This Month"
            value={stats.activeMembers}
            subtext={`${Math.round((stats.activeMembers / stats.totalMembers) * 100)}% of total`}
            gradient="text-green-400"
          />
          <StatCard
            icon={FiDollarSign}
            label="Current Revenue"
            value={`$${stats.currentRevenue.toLocaleString()}`}
            subtext="Collected this month"
            gradient="text-blue-400"
          />
          <StatCard
            icon={FiTrendingUp}
            label="Expected Revenue"
            value={`$${stats.expectedRevenue.toLocaleString()}`}
            subtext="If all members pay"
            gradient="text-purple-400"
          />
          <StatCard
            icon={FiCalendar}
            label="Expiring This Month"
            value={stats.expiringThisMonth}
            subtext="Memberships ending"
            gradient="text-orange-400"
          />
          <StatCard
            icon={FiTrendingUp}
            label="Paid Next Month"
            value={stats.paidNextMonth}
            subtext="Already committed"
            gradient="text-emerald-400"
          />
        </motion.div>

        {/* Chart Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-12 stat-card"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl font-bold mb-6">Revenue Trend</h3>
          <div className="h-64 bg-gradient-to-b from-[#e94560]/20 to-transparent rounded-lg flex items-center justify-center">
            <div className="flex items-end gap-2 h-32">
              {[40, 50, 45, 60, 55, 70, 65].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#e94560] to-[#ff6b7a] rounded-t opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Dashboard