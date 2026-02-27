'use client'

import { useState, useEffect } from 'react'
import { Share2, Copy, Check, Facebook, Twitter, MessageCircle } from 'lucide-react'

export default function ShareButton() {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  // Get current URL when component mounts or updates
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const currentTitle = typeof window !== 'undefined' ? document.title : 'Bengal Tourism'

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${currentTitle} ${currentUrl}`)}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ]

  const copyToClipboard = () => {
    try {
      const urlToCopy = window.location.href
      console.log('Attempting to copy URL:', urlToCopy)
      
      // Method 1: Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(urlToCopy).then(() => {
          console.log('URL copied using clipboard API!')
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }).catch(err => {
          console.log('Clipboard API failed, trying fallback:', err)
          fallbackCopy(urlToCopy)
        })
      } else {
        console.log('Using fallback method for localhost/http')
        fallbackCopy(urlToCopy)
      }
    } catch (err) {
      console.error('Failed to copy URL:', err)
      fallbackCopy(window.location.href)
    }
  }

  const fallbackCopy = (urlToCopy: string) => {
    try {
      // Create a temporary textarea element
      const textarea = document.createElement('textarea')
      textarea.value = urlToCopy
      textarea.style.position = 'fixed'
      textarea.style.left = '-999999px'
      textarea.style.top = '-999999px'
      document.body.appendChild(textarea)
      
      // Select and copy
      textarea.focus()
      textarea.select()
      textarea.setSelectionRange(0, 99999)
      
      const successful = document.execCommand('copy')
      console.log('ExecCommand result:', successful)
      
      // Remove the textarea
      document.body.removeChild(textarea)
      
      if (successful) {
        console.log('URL copied successfully using fallback!')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        console.error('Copy command failed')
        alert('Please copy manually: ' + urlToCopy)
      }
    } catch (err) {
      console.error('Fallback copy failed:', err)
      alert('Please copy manually: ' + urlToCopy)
    }
  }

  const handleShare = async (url: string) => {
    window.open(url, '_blank', 'width=600,height=400')
    setShowShareMenu(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Main Share Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setShowShareMenu(!showShareMenu)
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Share"
        >
          <Share2 size={20} />
        </button>

        {/* Share Menu */}
        {showShareMenu && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 min-w-[200px] border border-gray-200">
            <div className="space-y-2">
              {/* Share Options */}
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShare(option.url)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-white transition-colors ${option.color}`}
                >
                  <option.icon size={18} />
                  <span className="text-sm font-medium">{option.name}</span>
                </button>
              ))}

              {/* Copy Link Option */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  copyToClipboard()
                  setTimeout(() => setShowShareMenu(false), 500)
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span className="text-sm font-medium">
                  {copied ? 'Copied!' : 'Copy Link'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Click outside to close */}
        {showShareMenu && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowShareMenu(false)}
          />
        )}
      </div>
    </div>
  )
}
