import React from 'react'
import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-[#0f3460] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#e94560] to-[#ff6b7a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <span className="font-bold text-xl">GymPro</span>
            </div>
            <p className="text-gray-400">Premium gym management solution</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#e94560] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#e94560] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e94560] transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0f3460] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 GymPro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#e94560] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#e94560] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#e94560] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer