export default function Footer(): React.ReactElement {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 bg-dic-blue-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-medium text-dic-cyan-light">Contact</p>
        <a
          href="mailto:tech.dicsoft@gmail.com"
          className="mt-2 inline-block text-white hover:text-dic-cyan-light transition-colors underline underline-offset-2"
        >
          tech.dicsoft@gmail.com
        </a>
        <p className="mt-6 text-sm text-white/70">
          DIC SOFT — Digital Innovation Computing Solutions
        </p>
      </div>
    </footer>
  );
}
