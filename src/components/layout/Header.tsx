export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <span className="text-2xl font-bold text-primary">
            Logo
          </span>

          {/* Navigation Links - Hidden on Mobile */}
          {/* <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav> */}

          {/* Mobile Menu Button */}
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </header>
  );
}
