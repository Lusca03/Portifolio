import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Daniel Lopes</h1>
      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
