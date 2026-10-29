const footerLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

const copyrightYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-main">
        <a className="footer-brand" href="#home">
          <img
            className="brand-logo footer-logo"
            src="/aayush-logo.png"
            alt="Aayush Kumar"
          />
          <small>AI, creativity & digital growth</small>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="section-inner footer-bottom">
        <span>© {copyrightYear} Aayush Kumar</span>
        <span>Thoughtful work. Made with intention.</span>
      </div>
    </footer>
  )
}

export default Footer
