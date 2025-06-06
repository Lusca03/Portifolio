export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gray-800 text-white">
      <img src="/perfil.png" alt="Daniel" className="rounded-xl w-48 h-48 mb-6 md:mb-0" />
      <div>
        <h2 className="text-3xl font-bold">Daniel Lopes</h2>
        <p className="text-blue-400 text-xl mt-2">Desenvolvedor Back-End</p>
        <p className="mt-4 max-w-lg">
          Experiência com Dynamics 365, .NET Framework, .NET Core e Azure.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#projetos" className="bg-blue-600 px-4 py-2 rounded">Ver Projetos</a>
          <a href="/cv.pdf" className="border border-gray-300 px-4 py-2 rounded">Baixar CV</a>
        </div>
      </div>
    </section>
  );
}