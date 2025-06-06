export type Conteudo = {
  titulo: string;
  descricao: string;
  texto: string;
  quantidade: string;
  nomeequipe: string;
};

export const conteudos: Conteudo[] = [
  {
    titulo: 'Bem-vindo ao Guia de Negócios',
    descricao: 'Uma introdução ao nosso conteúdo exclusivo',
    texto: 'Explore oportunidades, empresas e ofertas em um só lugar.',
    quantidade: '1',
    nomeequipe: 'Equipe de Marketing',
  },
  {
    titulo: 'Conheça as Vantagens',
    descricao: 'Descubra os benefícios de fazer parte do nosso guia',
    texto: 'Participar do guia traz visibilidade, confiança e mais negócios.',
    quantidade: '3',
    nomeequipe: 'Equipe Comercial',
  },
  {
    titulo: 'Explore Categorias',
    descricao: 'Navegue por diversas áreas do comércio local',
    texto: 'De alimentação a serviços automotivos, tudo em um só portal.',
    quantidade: '5',
    nomeequipe: 'Equipe de Suporte',
  },
];
