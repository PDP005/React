const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} PedroReact. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
