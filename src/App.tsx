import { Flame, Music2, Disc3, Quote, Mic2, ChevronDown, Award, Headphones } from 'lucide-react';

type Album = {
  title: string;
  year: string;
  label: string;
  tagline: string;
  description: string;
  highlights: string;
  tracks: string[];
  image: string;
  sales?: string;
};

const albums: Album[] = [
  {
    title: 'Raio-X do Brasil',
    year: '1993',
    label: 'Zimbabwe Records',
    tagline: 'O diagnóstico da realidade brasileira',
    description:
      'Álbum de estreia dos Racionais MC\u2019s, lançado em 21 de dezembro de 1993 pelo selo Zimbabwe Records. O disco foi apresentado numa festa na quadra da escola de samba Rosas de Ouro, em São Paulo, para um público estimado em 10 mil pessoas. Com batidas pesadas e samples de funk carioca e soul americano — incluindo um remix criativo de "Freddie\u2019s Dead" de Curtis Mayfield em "Mano na Porta do Bar" —, o grupo traça uma radiografia do Brasil real: desigualdade, violência policial e a vida nas quebradas. Foi com "Homem na Estrada" que Mano Brown ganhou o Prêmio Sharp, levando o rap nacional ao reconhecimento formal pela primeira vez.',
    highlights: 'Homem na Estrada · Fim de Semana no Parque · Mano na Porta do Bar',
    tracks: [
      'Introdução', 'Fim de Semana no Parque', 'Parte II',
      'Mano na Porta do Bar', 'Homem na Estrada', 'Juri Racional',
      'Fio da Navalha', 'Agradecimentos',
    ],
    image: '/images/Raio X do Brasil/images.jpg',
  },
  {
    title: 'Sobrevivendo ao Inferno',
    year: '1997',
    label: 'Cosa Nostra Fonográfica',
    tagline: 'O disco que eternizou os Racionais',
    description:
      'Lançado em 20 de dezembro de 1997, é o disco que projetou os Racionais para o grande público e se tornou um marco absoluto do rap brasileiro. Foi o primeiro lançamento da gravadora própria do grupo, a Cosa Nostra Fonográfica — um gesto de independência sem precedentes. Vendendo mais de 1,5 milhão de cópias de forma independente, o álbum retrata com brutalidade e poesia a realidade das periferias de São Paulo. "Diário de um Detento", inspirado no relato real de um preso sobrevivente ao Massacre do Carandiru, e "Capítulo 4, Versículo 3" se tornaram hinos atemporais. Tamanha foi sua importância cultural que o disco foi incluído como leitura obrigatória no vestibular da Unicamp — fato inédito para um álbum de rap.',
    highlights: 'Diário de um Detento · Capítulo 4, Versículo 3 · Fórmula Mágica da Paz',
    tracks: [
      'Jorge da Capadócia', 'Genesis (Intro)', 'Capítulo 4, Versículo 3',
      'Tô Ouvindo Alguém Me Chamar', 'Rapaz Comum', '...',
      'Diário de um Detento', 'Periferia É Periferia (Em Qualquer Lugar)',
      'Qual Mentira Vou Acreditar', 'Mágico de Oz',
      'Fórmula Mágica da Paz', 'Salve',
    ],
    image: '/images/Sobrevivendo ao inferno/images.jpg',
    sales: '1,5 milhão de cópias (independente)',
  },
  {
    title: 'Nada como um dia após o outro',
    year: '2002',
    label: 'Cosa Nostra Fonográfica',
    tagline: 'A maturidade poética do grupo',
    description:
      'Lançado em 2002 em formato duplo (Vol. 1 e Vol. 2), este álbum marca a maturidade artística dos Racionais. Após cinco anos desde "Sobrevivendo ao Inferno", o grupo retorna com produção mais elaborada, arranjos ambiciosos e um olhar reflexivo que equilibra o peso social das ruas com a esperança que resiste. "Vida Loka" se tornou um dos maiores sucessos da carreira, enquanto "Negro Drama" consolidou a poética afiada de Mano Brown. São 21 faixas que mostram um grupo no auge da composição — denunciando o sistema que oprime sem perder a sensibilidade humana.',
    highlights: 'Vida Loka I · Negro Drama · Na Fé Firmão · 12 de Outubro',
    tracks: [
      'Sou + Você', 'Vivão e Vivendo', 'Vida Loka (Intro)',
      'Vida Loka, Pt. 1', 'Negro Drama', 'A Vítima',
      'Na Fé Firmão', '12 de Outubro', 'Eu Sou',
      'Vida Loka, Pt. 2', 'A Vida é um Desafio',
      'Nada como um dia após o outro',
    ],
    image: '/images/Nada como um dia após o outro/images.jpg',
  },
];

const ep_lancamentos = [
  {
    title: 'Holocausto Urbano',
    year: '1990',
    type: 'EP',
    desc: 'Primeiro disco oficial do grupo. Cinco faixas que já denunciavam racismo e miséria na periferia de São Paulo.',
    tracks: ['Pânico na Zona Sul', 'Beco Sem Saída', 'Hey Boy', 'Mulheres Vulgares', 'Racistas Otários'],
  },
  {
    title: 'Cores & Valores',
    year: '2014',
    type: 'Álbum',
    desc: 'Quarto álbum de estúdio, primeiro com inéditas em 12 anos. Introduz influências de trap e mantém a força lírica.',
    tracks: ['Cores & Valores', 'Quanto Vale o Show?', 'Mil Faces de um Homem Leal'],
  },
];

const membros = [
  { nome: 'Mano Brown', role: 'Vocalista e Líder', desc: 'A voz mais reconhecível do rap brasileiro. Vencedor do Prêmio Sharp por "Homem na Estrada".' },
  { nome: 'Ice Blue', role: 'MC', desc: 'Versos precisos e presença marcante. A narrativa cold e afiada das quebradas.' },
  { nome: 'Edy Rock', role: 'MC', desc: 'Fluência e força na narrativa das ruas. Um dos pilares líricos do grupo.' },
  { nome: 'KL Jay', role: 'DJ e Produtor', desc: 'O arquiteto sonoro por trás das batidas. Responsável pelas produções e samples.' },
];

function AlbumSection({ album, index }: { album: Album; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <div className={`grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 items-start bg-black/50 backdrop-blur-sm border border-[#b8954a]/15 hover:border-[#b8954a]/25 rounded-sm p-5 md:p-7 transition-all duration-500 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
      {/* Capa */}
      <div className="relative group mx-auto w-full max-w-[280px]">
        <div className="absolute -inset-2 bg-gradient-to-br from-[#8b1a1a]/40 to-[#b8954a]/30 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
        <img
          src={album.image}
          alt={album.title}
          className="relative w-full aspect-square object-cover rounded-sm border border-[#b8954a]/30 shadow-2xl shadow-black"
        />
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-[#b8954a]/30 px-3 py-1 rounded-sm">
          <span className="font-display text-gold text-lg">{album.year}</span>
        </div>
        {/* Vinyl */}
        <div className={`absolute top-1/2 ${reversed ? '-left-3' : '-right-3'} -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-[#b8954a]/20 hidden md:block transition-transform duration-500 ${reversed ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
          <div className="absolute inset-2 rounded-full border border-[#b8954a]/10" />
          <div className="absolute inset-3 rounded-full border border-[#b8954a]/10" />
          <div className="absolute inset-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8954a]/40" />
        </div>
        {/* Label */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <Disc3 className="w-3 h-3 text-[#b8954a]/60" />
          <span className="font-heading text-[9px] uppercase tracking-widest text-neutral-500">{album.label}</span>
        </div>
        {album.sales && (
          <div className="mt-1.5 flex items-center justify-center gap-1.5">
            <Award className="w-3 h-3 text-[#c02020]/70" />
            <span className="font-heading text-[9px] uppercase tracking-widest text-[#c02020]/80">{album.sales}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div>
          <h3 className="font-display text-2xl sm:text-4xl text-neutral-100 leading-tight">
            {album.title}
          </h3>
          <p className="font-heading text-xs uppercase tracking-widest text-[#c02020] mt-1.5">
            {album.tagline}
          </p>
        </div>
        <div className="w-14 h-px bg-gradient-to-r from-[#b8954a] to-transparent" />
        <p className="text-neutral-400 text-sm leading-relaxed">
          {album.description}
        </p>

        <div className="flex items-start gap-2 bg-[#8b1a1a]/10 border border-[#c02020]/20 px-3 py-2 rounded-sm">
          <Headphones className="w-3.5 h-3.5 text-[#c02020] shrink-0 mt-0.5" />
          <div>
            <p className="font-heading text-[10px] uppercase tracking-widest text-[#c02020]/70 mb-0.5">Destaques</p>
            <p className="text-xs text-neutral-300">{album.highlights}</p>
          </div>
        </div>

        <div>
          <p className="font-heading text-[10px] uppercase tracking-widest text-[#b8954a]/70 mb-2 flex items-center gap-1.5">
            <Music2 className="w-3 h-3" />
            Faixas
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-0.5">
            {album.tracks.map((track, i) => (
              <div key={track} className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-gold transition-colors py-0.5">
                <span className="font-display text-[#b8954a]/50 text-[10px] w-5 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="truncate">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 grunge relative overflow-x-hidden">
      {/* Background fixo */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/Sobrevivendo ao inferno/images.jpg"
          alt="Fundo"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-5 py-3 flex items-center justify-between border-b border-[#b8954a]/15 bg-black/70 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#c02020]" />
            <span className="font-display text-lg sm:text-xl text-gold tracking-wider">RACIONAIS MC&apos;S</span>
          </div>
          <span className="hidden sm:block font-heading text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Rap Nacional · Desde 1988
          </span>
        </header>

        {/* Hero — tela cheia */}
        <section className="relative min-h-screen flex items-center justify-center scanlines px-5 pt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-5 fade-up">
              <div className="flex items-center gap-2.5 border border-[#b8954a]/30 px-4 py-1.5 rounded-full bg-black/40">
                <Disc3 className="w-3.5 h-3.5 text-[#b8954a] vinyl-spin" />
                <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Capão Redondo · São Paulo
                </span>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl gold-gradient ember-glow flicker mb-1 fade-up" style={{ animationDelay: '0.2s' }}>
              RACIONAIS
            </h1>
            <h2 className="font-display text-xl sm:text-3xl text-neutral-300 tracking-[0.3em] mb-4 fade-up" style={{ animationDelay: '0.4s' }}>
              MC&apos;S
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 fade-up" style={{ animationDelay: '0.6s' }}>
              A voz das quebradas de São Paulo que se tornou o som da periferia brasileira.
              Três álbuns que ecoam como manifestos de resistência, verdade e sobrevivência.
            </p>
          </div>

          <a href="#historia" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#b8954a]/60 hover:text-gold transition-colors">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </section>

        {/* História + Membros */}
        <section id="historia" className="px-5 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-[#b8954a]/70">Origens</span>
              <h2 className="font-display text-3xl sm:text-5xl gold-gradient mt-2 mb-4">A Voz da Periferia</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#b8954a] to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-[1fr_300px] gap-5 bg-black/50 border border-[#b8954a]/15 rounded-sm p-5 md:p-6">
              <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
                <p>
                  Formados em 1988 na periferia de São Paulo — mais precisamente em Capão Redondo, zona sul —,
                  os <span className="text-gold font-semibold">Racionais MC&apos;s</span> nasceram da vontade de
                  contar o que a mídia ignorava: a vida real das quebradas, a violência cotidiana, o racismo
                  estrutural e a dignidade de quem sobrevive ao inferno todos os dias.
                </p>
                <p>
                  O nome do grupo foi inspirado no disco <em>Tim Maia Racional</em>, de Tim Maia. A primeira gravação
                  veio em 1988, na coletânea <em>Consciência Black Vol. I</em>, pelo selo Zimbabwe Records, com os
                  sucessos "Pânico na Zona Sul" e "Tempos Difíceis". Em 1990, lançaram o EP <em>Holocausto Urbano</em>,
                  primeiro disco oficial, cujas letras já denunciavam racismo e miséria na periferia.
                </p>
                <p>
                  Com <span className="text-[#c02020] font-semibold">Mano Brown</span>,{' '}
                  <span className="text-[#c02020] font-semibold">Ice Blue</span>,{' '}
                  <span className="text-[#c02020] font-semibold">Edy Rock</span> e{' '}
                  <span className="text-[#c02020] font-semibold">KL Jay</span>, o grupo transformou o
                  rap em documento social — crônicas cruas da cidade, misturando denúncia, poesia e
                  a urgência de quem não tem tempo a perder. Mais do que uma banda, tornou-se uma
                  instituição cultural brasileira, referência para gerações que encontraram em suas
                  músicas espelhos da própria realidade.
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-[#b8954a]/10">
                  <Quote className="w-4 h-4 text-[#b8954a]/50 shrink-0" />
                  <p className="font-heading italic text-xs text-neutral-500">
                    &ldquo;A mente que se abre a uma nova ideia jamais volta ao seu tamanho original.&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-heading text-[10px] uppercase tracking-widest text-[#b8954a]/70 mb-2">O Grupo</p>
                {membros.map((m) => (
                  <div key={m.nome} className="bg-black/50 border border-[#b8954a]/15 hover:border-[#b8954a]/30 px-3 py-2.5 rounded-sm transition-all">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b1a1a] to-black flex items-center justify-center border border-[#b8954a]/20 shrink-0">
                        <Mic2 className="w-3.5 h-3.5 text-[#b8954a]" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-sm text-neutral-200 leading-tight">{m.nome}</p>
                        <p className="font-heading text-[9px] uppercase tracking-widest text-[#c02020]">{m.role}</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-600 mt-1.5 leading-snug">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Álbuns — um embaixo do outro */}
        <section id="albuns" className="px-5 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-[#b8954a]/70">Discografia</span>
              <h2 className="font-display text-3xl sm:text-5xl red-gradient mt-2 mb-4">Os Três Discos</h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c02020] to-transparent mx-auto" />
              <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-sm">
                Três obras-primas que definiram o rap nacional e eternizaram os Racionais como
                cronistas da realidade brasileira.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {albums.map((album, i) => (
                <AlbumSection key={album.title} album={album} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Outros lançamentos */}
        <section className="px-5 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-[#b8954a]/70">Além da Trilogia</span>
              <h2 className="font-display text-2xl sm:text-4xl gold-gradient mt-2 mb-3">Outros Lançamentos</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ep_lancamentos.map((ep) => (
                <div key={ep.title} className="bg-black/50 border border-[#b8954a]/15 hover:border-[#b8954a]/30 rounded-sm p-5 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl text-neutral-100">{ep.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-[9px] uppercase tracking-widest text-[#b8954a]/60 border border-[#b8954a]/20 px-2 py-0.5 rounded-sm">{ep.type}</span>
                      <span className="font-display text-gold text-base">{ep.year}</span>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-3">{ep.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ep.tracks.map((t) => (
                      <span key={t} className="text-[10px] text-neutral-500 bg-black/40 border border-[#b8954a]/10 px-2 py-0.5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-5 py-8 border-t border-[#b8954a]/10 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Flame className="w-4 h-4 text-[#c02020]" />
            <span className="font-display text-base text-gold tracking-wider">RACIONAIS MC&apos;S</span>
          </div>
          <p className="text-neutral-600 text-xs max-w-md mx-auto leading-relaxed mb-3">
            Site tributário dedicado à história e obra dos Racionais MC&apos;s.
            A voz que saiu da periferia e conquistou o Brasil.
          </p>
          <p className="text-neutral-700 text-[10px] font-heading uppercase tracking-widest">
            © {new Date().getFullYear()} · Tributo não oficial
          </p>
        </footer>
      </div>
    </div>
  );
}
