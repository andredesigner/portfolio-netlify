export type ProjectType = 'digital' | 'branding'
export type ProjectLayout = 'A' | 'B'

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectSection {
  type: 'text' | 'image' | 'gallery' | 'quote' | 'metrics' | 'list' | 'cards'
  title?: string
  body?: string
  paragraphs?: string[]
  list?: string[]
  cards?: Array<{ title: string; body: string }>
  image?: ProjectImage
  images?: ProjectImage[]
  caption?: string
  quote?: string
  author?: string
  items?: Array<{ label: string; value: string }>
}

export interface Project {
  slug: string
  title: string
  type: ProjectType
  layout: ProjectLayout
  year: string
  role: string[]
  client?: string
  coverImage: ProjectImage
  gallery?: ProjectImage[]
  tags: string[]
  summary: string
  sections: ProjectSection[]
  logoKey?: 'grupo-paes' | 'bepay' | 'good-vibes' | 'hyundai'
  platform?: string
}

export const projects: Project[] = [
  {
    slug: 'grupo-paes-site',
    title: 'Criação e implementação do site institucional',
    type: 'digital',
    layout: 'B',
    year: '2024',
    role: ['UX/UI', 'Direção de arte'],
    client: 'Grupo Paes',
    coverImage: {
      src: '/projects/cover-digital.svg',
      alt: 'Mockup do site institucional do Grupo Paes',
    },
    gallery: [
      { src: '/projects/cover-digital.svg', alt: 'Tela inicial do site' },
      { src: '/projects/cover-digital-2.svg', alt: 'Tela de detalhes do site' },
    ],
    tags: ['Website', 'Design System', 'UX'],
    summary:
      'Projeto focado em reposicionar a marca no digital e estruturar uma experiência de navegação escalável.',
    sections: [
      {
        type: 'text',
        title: 'Contexto',
        body:
          'O site precisava comunicar uma operação madura e ao mesmo tempo simplificar o acesso às principais informações.',
      },
      {
        type: 'metrics',
        items: [
          { label: 'Entrega', value: '8 semanas' },
          { label: 'Time', value: 'Produto + Dev' },
          { label: 'Pilares', value: 'Clareza, Confiança, Escala' },
        ],
      },
      {
        type: 'gallery',
        images: [
          { src: '/projects/cover-digital.svg', alt: 'Visão geral da home' },
          { src: '/projects/cover-digital-2.svg', alt: 'Detalhe de seção' },
        ],
      },
    ],
    logoKey: 'grupo-paes',
  },
  {
    slug: 'hyundai-reserva-online',
    title: 'Criação da experiência de reserva de carros online.',
    type: 'digital',
    layout: 'B',
    year: '2020',
    role: ['UX Design', 'Interface', 'Front-end', 'Adobe AEM'],
    client: 'Hyundai',
    coverImage: {
      src: '/projects/cover-digital.svg',
      alt: 'Visão geral da experiência de reserva online',
    },
    tags: ['UX Design', 'Interface', 'Front-end', 'Adobe AEM'],
    summary:
      'O projeto teve como objetivo iniciar a experiência de compra digital de veículos, integrando etapas de simulação, escolha e conversão em um fluxo único e escalável.',
    sections: [
      {
        type: 'text',
        title: 'Contexto',
        paragraphs: [
          'Em 2020, durante a pandemia, surgiu a necessidade de viabilizarva reserva online de veículos, funcionalidade que até então não existia na jornada digital da Hyundai.',
          'O objetivo era permitir que usuários iniciassem o processo de compra de forma remota, gerando lead qualificado e possibilitando o pagamento de sinal.',
          'O desafio envolvia criar uma experiência clara, confiável e integrada à infraestrutura existente.',
        ],
      },
      {
        type: 'list',
        title: 'Meu papel',
        list: [
          'UX Design',
          'Definição de fluxos',
          'Interface e consistência visual',
          'Colaboração com marketing e tecnologia',
        ],
      },
      {
        type: 'image',
        image: {
          src: '/projects/cover-digital.svg',
          alt: 'Visão geral da experiência de reserva online',
        },
        caption: 'Visão geral da experiência de reserva online',
      },
      {
        type: 'cards',
        title: 'Decisões de design',
        cards: [
          {
            title: 'Simplificação do fluxo de compra',
            body:
              'Formação em design gráfico, com especialização em UX, o que garante decisões consistentes entre experiência, identidade visual e interface.',
          },
          {
            title: 'Padronização de componentes',
            body:
              'Formação em design gráfico, com especialização em UX, o que garante decisões consistentes entre experiência, identidade visual e interface.',
          },
          {
            title: 'Consistência entre marca e produto',
            body:
              'Formação em design gráfico, com especialização em UX, o que garante decisões consistentes entre experiência, identidade visual e interface.',
          },
        ],
      },
      {
        type: 'image',
        image: {
          src: '/projects/cover-digital-2.svg',
          alt: 'Detalhe do fluxo de simulação e escolha',
        },
        caption: 'Detalhe do fluxo de simulação e escolha.',
      },
      {
        type: 'text',
        title: 'Conclusão',
        paragraphs: [
          'O projeto viabilizou a reserva online de veículos, ampliando a atuação digital da Hyundai em um momento crítico e preparando a base para evoluções futuras na jornada de compra.',
          'A solução entregou uma experiência funcional, consistente com a marca e integrada à infraestrutura existente.',
        ],
      },
    ],
    logoKey: 'hyundai',
    platform: 'Plataforma web',
  },
  {
    slug: 'bepay-pix-automatico',
    title: 'Experiência de Pix automático',
    type: 'digital',
    layout: 'B',
    year: '2023',
    role: ['UX Research', 'Product Design'],
    client: 'Bepay',
    coverImage: {
      src: '/projects/cover-digital-2.svg',
      alt: 'Fluxo do Pix automático no app da Bepay',
    },
    tags: ['Fintech', 'Mobile', 'Service Design'],
    summary:
      'Redesenho do fluxo de pagamentos recorrentes para reduzir fricções e aumentar conversão.',
    sections: [
      {
        type: 'text',
        title: 'Desafio',
        body:
          'O fluxo precisava de clareza sobre recorrência e controle de limite, mantendo a simplicidade do Pix.',
      },
      {
        type: 'image',
        image: {
          src: '/projects/cover-digital-2.svg',
          alt: 'Fluxo principal do Pix automático',
        },
      },
      {
        type: 'quote',
        quote: 'Simplificamos o onboarding em 3 passos e aumentamos a ativação.',
        author: 'Time de Produto',
      },
    ],
    logoKey: 'bepay',
  },
  {
    slug: 'good-vibes-interface-remota',
    title: 'Interface para controle remoto de hardware',
    type: 'digital',
    layout: 'B',
    year: '2021',
    role: ['UX/UI'],
    client: 'Good Vibes',
    coverImage: {
      src: '/projects/cover-digital.svg',
      alt: 'Dashboard do controle remoto de hardware',
    },
    tags: ['SaaS', 'Hardware', 'UI'],
    summary:
      'Interface de controle remoto para operação de hardware em tempo real com foco em confiabilidade.',
    sections: [
      {
        type: 'text',
        title: 'Visão geral',
        body:
          'Criamos um painel que prioriza o status dos dispositivos e ações rápidas para operadores.',
      },
      {
        type: 'metrics',
        items: [
          { label: 'Redução de erros', value: '35%' },
          { label: 'Tempo médio', value: '-22%' },
        ],
      },
    ],
    logoKey: 'good-vibes',
  },
  {
    slug: 'maella-bela-identidade',
    title: 'Identidade visual Maella Bela',
    type: 'branding',
    layout: 'A',
    year: '2022',
    role: ['Branding', 'Identidade Visual'],
    coverImage: {
      src: '/projects/cover-branding.svg',
      alt: 'Identidade visual da Maella Bela',
    },
    tags: ['Branding', 'Identidade Visual'],
    summary:
      'Construção de uma marca contemporânea com foco em sofisticação e acolhimento.',
    sections: [
      {
        type: 'text',
        title: 'Direção',
        body:
          'Definimos um sistema visual baseado em contraste suave, tipografia elegante e presença digital consistente.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/projects/cover-branding.svg', alt: 'Aplicação da marca' },
          { src: '/projects/cover-branding.svg', alt: 'Elementos gráficos' },
        ],
      },
    ],
  },
]
