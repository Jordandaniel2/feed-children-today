import { Mail, Phone } from 'lucide-react'
import logo from '../../assets/logo.jpg'

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FEED the CHILDREN TODAY logo" className="w-8 h-8 rounded object-cover" />
              <h3 className="font-bold text-lg">FEED the CHILDREN TODAY</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Ending child hunger in America, one donation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#donate" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Tax Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:jordandanielreal001@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  jordandanielreal001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+14695056498" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  +1 (469) 505-6498
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 FEED the CHILDREN TODAY. Founded by Jordan Daniel.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {['facebook', 'twitter', 'instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition"
                aria-label={social}
              >
                <span className="text-xs font-bold">f</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection