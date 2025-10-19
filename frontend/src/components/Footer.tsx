const Footer = () => {
  return (
    <footer className="bg-midnight-green w-screen text-center shadow-[0_-6px_8px_-3px_#1e90ff]">
      <p className="text-lg p-10 text-soft-white">
        © {new Date().getFullYear()} Gerenciador de Currículo Professional.
        Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
