function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-bg-secondary border-t border-border-subtle mt-10">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[13px] text-text-secondary">Indonesia</span>
            <span className="w-1 h-1 rounded-full bg-text-muted"></span>
            <span className="text-[13px] text-text-secondary">&copy; {currentYear} Noprizal.</span>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#about" className="text-[13px] text-text-secondary hover:underline transition-colors">About</a>
            <a href="#projects" className="text-[13px] text-text-secondary hover:underline transition-colors">Portfolio</a>
            <a href="#hero" className="text-[13px] text-text-secondary hover:underline transition-colors">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
