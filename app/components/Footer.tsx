export default function Footer() {
  const links = {
    product: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how' },
      { label: 'Whitepaper', href: '/whitepaper' },
      { label: 'Documentation', href: '/DOCS-INDEX.md', external: true }
    ],
    community: [
      { label: 'Discord', href: '#discord' },
      { label: 'X (Twitter)', href: '#twitter' },
      { label: 'Telegram', href: '#telegram' },
      { label: 'GitHub', href: '#github' }
    ],
    resources: [
      { label: 'Executive Summary', href: '/executive-summary' },
      { label: 'Pitch Deck', href: '/pitch-deck' },
      { label: 'Branding Guide', href: '/BRANDING.md', external: true },
      { label: 'Contact', href: 'mailto:hello@secforit.com' }
    ],
    legal: [
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Cookie Policy', href: '#cookies' }
    ]
  }

  const socials = [
    { icon: '𝕏', label: 'X (Twitter)', href: '#twitter' },
    { icon: '💬', label: 'Discord', href: '#discord' },
    { icon: '📱', label: 'Telegram', href: '#telegram' },
    { icon: '💻', label: 'GitHub', href: '#github' }
  ]

  return (
    <footer className="relative py-16 px-4 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                SECforSTREAM
              </div>
              <p className="text-sm text-gray-500 mt-2">
                By SECFORIT<br />
                Verify authenticity.<br />
                Build trust.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 SECforSTREAM by SECFORIT. Fighting deepfakes, one stream at a time.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Built on Solana
            </a>
            <a href="#pump" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
              <span>Powered by</span>
              <span className="font-semibold text-red-400">Pump.fun</span>
            </a>
          </div>
        </div>

        {/* Building in Public Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Building in public • All metrics transparent</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
