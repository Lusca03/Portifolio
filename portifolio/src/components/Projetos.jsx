export default function Projetos() {
  const projetos = [
    { nome: "Plugin Dynamics", tecnologias: "C# · Dynamics 365", link: "#" },
    { nome: "Azure Function", tecnologias: "Azure · .NET Core", link: "#" },
    { nome: "API CRM", tecnologias: ".NET Core · Dataverse", link: "#" },
  ];

  return (
    <section className="bg-gray-900 text-white px-6 py-12" id="projetos">
      <h3 className="text-2xl font-bold mb-8">Projetos</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projetos.map((proj, idx) => (
          <div key={idx} className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h4 className="font-semibold text-lg">{proj.nome}</h4>
            <p className="text-sm text-gray-400">{proj.tecnologias}</p>
            <a href={proj.link} className="text-blue-400 mt-2 inline-block">Ver detalhes →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
