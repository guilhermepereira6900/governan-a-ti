export default function TimelineGovernancaTI() {
  const eventos = [
    {
      ano: '1960',
      titulo: 'Centros de Processamento de Dados (CPDs)',
      descricao:
        'Durante a década de 1960, grandes empresas começaram a centralizar informações e operações em Centros de Processamento de Dados. Esse modelo permitiu maior controle das informações corporativas e marcou o início da administração tecnológica dentro das organizações. O uso de mainframes trouxe mais eficiência operacional e abriu caminho para a futura Governança de TI.'
    },
    {
      ano: '1970',
      titulo: 'Sistemas de Informação Gerencial (SIG)',
      descricao:
        'Os Sistemas de Informação Gerencial passaram a fornecer relatórios e indicadores importantes para gestores. A TI começou a deixar de ser apenas operacional e passou a auxiliar diretamente na tomada de decisões estratégicas das empresas.'
    },
    {
      ano: '1973',
      titulo: 'Fortalecimento da Governança Corporativa',
      descricao:
        'Empresas começaram a estruturar processos de controle administrativo, auditoria e transparência. Esses conceitos influenciaram diretamente o surgimento da Governança de TI anos depois.'
    },
    {
      ano: '1981',
      titulo: 'Popularização do Computador Pessoal',
      descricao:
        'A chegada dos computadores pessoais ampliou o uso da tecnologia nas empresas. Departamentos passaram a depender cada vez mais da TI, tornando necessária uma gestão mais organizada dos recursos tecnológicos.'
    },
    {
      ano: '1985',
      titulo: 'Criação da ISO 9000',
      descricao:
        'As normas ISO 9000 fortaleceram os conceitos de qualidade, padronização e melhoria contínua. Esses princípios influenciaram diretamente práticas modernas de Governança de TI.'
    },
    {
      ano: '1989',
      titulo: 'Criação do ITIL',
      descricao:
        'O governo britânico criou o ITIL (Information Technology Infrastructure Library), conjunto de boas práticas voltado ao gerenciamento de serviços de TI. O framework se tornou uma referência mundial para gestão de serviços tecnológicos.'
    },
    {
      ano: '1992',
      titulo: 'Desenvolvimento do COBIT',
      descricao:
        'O COBIT começou a ser desenvolvido pela ISACA com o objetivo de criar padrões de auditoria, controle e Governança de TI. O framework tornou-se uma das maiores referências da área.'
    },
    {
      ano: '1995',
      titulo: 'Expansão da Internet Comercial',
      descricao:
        'A internet comercial revolucionou os negócios, aumentando a dependência das empresas em relação à tecnologia. Isso ampliou a necessidade de segurança da informação e controle de processos.'
    },
    {
      ano: '1998',
      titulo: 'Publicação do COBIT 1.0',
      descricao:
        'A primeira versão oficial do COBIT foi publicada, fornecendo diretrizes para auditoria, controle interno e alinhamento estratégico da TI com os objetivos corporativos.'
    },
    {
      ano: '2000',
      titulo: 'Bug do Milênio (Y2K)',
      descricao:
        'O medo de falhas em sistemas durante a virada do ano 2000 levou empresas do mundo todo a fortalecer planos de continuidade, gestão de riscos e manutenção de sistemas.'
    },
    {
      ano: '2001',
      titulo: 'Escândalos Corporativos',
      descricao:
        'Casos como Enron e WorldCom mostraram falhas graves de auditoria e controle interno, aumentando a pressão por transparência, conformidade e governança.'
    },
    {
      ano: '2002',
      titulo: 'Lei Sarbanes-Oxley (SOX)',
      descricao:
        'Criada nos Estados Unidos, a SOX estabeleceu regras rigorosas para auditoria e segurança das informações corporativas, influenciando diretamente a Governança de TI.'
    },
    {
      ano: '2005',
      titulo: 'ISO/IEC 20000',
      descricao:
        'A ISO/IEC 20000 tornou-se a primeira norma internacional específica para gestão de serviços de TI, reforçando qualidade, controle e melhoria contínua.'
    },
    {
      ano: '2007',
      titulo: 'COBIT 4.1',
      descricao:
        'A atualização do COBIT ampliou o foco em alinhamento estratégico, gestão de riscos e controle corporativo, fortalecendo a Governança de TI nas organizações.'
    },
    {
      ano: '2008',
      titulo: 'Computação em Nuvem',
      descricao:
        'A computação em nuvem transformou a infraestrutura tecnológica das empresas, trazendo novos desafios relacionados à segurança, disponibilidade e governança dos dados.'
    },
    {
      ano: '2012',
      titulo: 'COBIT 5',
      descricao:
        'O COBIT 5 integrou governança e gestão corporativa de TI em um único framework, focando geração de valor, gestão de riscos e alinhamento estratégico.'
    },
    {
      ano: '2015',
      titulo: 'Transformação Digital',
      descricao:
        'Empresas passaram a investir fortemente em inovação digital, exigindo uma Governança de TI mais moderna, flexível e alinhada aos objetivos de negócio.'
    },
    {
      ano: '2016',
      titulo: 'GDPR',
      descricao:
        'O Regulamento Geral de Proteção de Dados da União Europeia estabeleceu regras rígidas para privacidade e proteção de dados pessoais.'
    },
    {
      ano: '2018',
      titulo: 'LGPD no Brasil',
      descricao:
        'A Lei Geral de Proteção de Dados trouxe ao Brasil novas exigências relacionadas à segurança, privacidade e tratamento das informações pessoais.'
    },
    {
      ano: '2019',
      titulo: 'COBIT 2019',
      descricao:
        'A nova atualização do COBIT trouxe maior flexibilidade e adaptação às transformações digitais e às novas demandas tecnológicas.'
    },
    {
      ano: '2020',
      titulo: 'Pandemia e Trabalho Remoto',
      descricao:
        'A pandemia acelerou o trabalho remoto e a digitalização das empresas, exigindo maior foco em segurança cibernética, continuidade de negócios e infraestrutura tecnológica.'
    },
    {
      ano: '2023',
      titulo: 'Crescimento da IA Generativa',
      descricao:
        'O avanço da Inteligência Artificial Generativa trouxe novos desafios relacionados à ética, privacidade, segurança e regulamentação tecnológica.'
    }
  ];

  const fontes = [
    'FGV EAESP. Governança de Tecnologia da Informação e Estratégia Empresarial. Disponível em: https://eaesp.fgv.br/',
    'Portal Gov.br. Lei Geral de Proteção de Dados Pessoais (LGPD). Disponível em: https://www.gov.br/',
    'Tribunal de Contas da União (TCU). Referencial Básico de Governança Organizacional. Disponível em: https://portal.tcu.gov.br/',
    'ISACA Brasil. COBIT 2019 Framework e Governança de TI. Disponível em: https://www.isacadmf.org.br/',
    'IBM Brasil. O que é Governança de TI? Disponível em: https://www.ibm.com/br-pt/',
    'Microsoft Learn Brasil. Segurança, Governança e Gestão de TI. Disponível em: https://learn.microsoft.com/pt-br/',
    'Oracle Brasil. Conceitos de Governança de TI e Gestão Tecnológica. Disponível em: https://www.oracle.com/br/',
    'LAUDON, Kenneth C.; LAUDON, Jane P. Sistemas de Informação Gerenciais. São Paulo: Pearson Education do Brasil.',
    'WEILL, Peter; ROSS, Jeanne W. Governança de TI: Tecnologia da Informação. São Paulo: M. Books do Brasil Editora.',
    'SEBRAE. Transformação Digital e Gestão da Tecnologia nas Empresas. Disponível em: https://www.sebrae.com.br/'
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-12">
          <div className="border-b border-slate-300 pb-6 mb-6 text-center">
            <h2 className="text-xl font-semibold text-slate-700 uppercase tracking-wide">
              Centro Universitário Unisant'Anna
            </h2>

            <p className="text-slate-600 mt-2 text-lg">
              Curso: Análise e Desenvolvimento de Sistemas
            </p>

            <p className="text-slate-600 mt-1 text-lg font-medium">
              Guilherme Augusto Dos Santos Carreira Pereira
            </p>
          </div>
          <h1 className="text-5xl font-bold text-center text-slate-800 mb-6">
            Linha do Tempo — Governança de TI
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed mb-4 text-justify">
            A Governança de Tecnologia da Informação (Governança de TI) consiste em um conjunto de práticas, normas e processos utilizados para garantir que os recursos tecnológicos das organizações estejam alinhados aos objetivos estratégicos do negócio. Seu principal objetivo é assegurar que a tecnologia gere valor para a empresa, minimize riscos, fortaleça a segurança da informação e melhore a tomada de decisões.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed text-justify">
            Na área de Análise e Desenvolvimento de Sistemas, a Governança de TI possui papel fundamental, pois contribui diretamente para o planejamento de projetos, organização de processos, controle de qualidade, segurança de dados e desenvolvimento de soluções mais eficientes. Frameworks como ITIL e COBIT auxiliam profissionais de tecnologia a criarem sistemas mais confiáveis, seguros e alinhados às necessidades das empresas e dos usuários.
          </p>
        </div>

        <div className="relative border-l-4 border-slate-400 ml-6">
          {eventos.map((evento, index) => (
            <div key={index} className="mb-10 ml-8 relative group">
              <div className="absolute -left-11 top-2 w-6 h-6 bg-slate-700 rounded-full border-4 border-white shadow-md"></div>

              <div className="bg-white rounded-2xl shadow-lg p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
                <span className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
                  {evento.ano}
                </span>

                <h2 className="text-2xl font-bold text-slate-800 mt-2 mb-4">
                  {evento.titulo}
                </h2>

                <p className="text-slate-600 leading-relaxed text-justify">
                  {evento.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 mt-14">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 uppercase tracking-wide">
            Referências Bibliográficas
          </h2>

          <ul className="space-y-3 text-slate-700 leading-relaxed list-disc pl-6">
            {fontes.map((fonte, index) => (
              <li key={index}>{fonte}</li>
            ))}
          </ul>

          <p className="text-slate-500 text-sm mt-8 italic">
            Trabalho acadêmico desenvolvido para fins educacionais na área de Governança de Tecnologia da Informação.
          </p>
        </div>
      </div>
    </div>
  );
}
