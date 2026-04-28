/* =========================================
   SABATO & CLIMENI — Interatividade
   ========================================= */

(function () {
  'use strict';

  // ============ HEADER SCROLL ============
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============ MOBILE MENU ============
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // ============ ACTIVE NAV ON SCROLL ============
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = ['home', 'sobre', 'servicos', 'profissionais', 'contato'].map(id => document.getElementById(id));
  const updateActive = () => {
    const pos = window.scrollY + 120;
    let current = 'home';
    sections.forEach(s => { if (s && s.offsetTop <= pos) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', updateActive, { passive: true });

  // ============ SMOOTH SCROLL CLOSE MENU ============
  navLinks.forEach(l => l.addEventListener('click', () => {
    if (nav.classList.contains('open')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  }));

  // ============ REVEAL ON SCROLL ============
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  // ============ MODAL SYSTEM ============
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const openModal = (html) => {
    modalBody.innerHTML = html;
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('show'));
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__content').scrollTop = 0;
  };
  const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => { modal.hidden = true; modalBody.innerHTML = ''; }, 350);
  };
  modal.addEventListener('click', e => { if (e.target.matches('[data-close-modal]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  // ============ ARTIGOS ============
  const articles = {
    '1': {
      titulo: 'Sinais de abuso emocional na infância',
      eyebrow: 'Infância · Cuidado',
      conteudo: `
        <p>Diferente das marcas físicas, o abuso emocional na infância raramente deixa rastros visíveis. Suas inscrições se fazem no psiquismo, na forma como a criança vai aprender a se relacionar com o próprio corpo, com os outros e com a linguagem. Por isso, costuma passar despercebido por anos — até retornar, mais tarde, sob a forma de sintomas.</p>

        <h3>O que é abuso emocional?</h3>
        <p>Trata-se de um padrão repetido de relações em que a criança é exposta a humilhação sistemática, ameaças, indiferença, hostilidade ou exigências incompatíveis com sua etapa de desenvolvimento. Não se trata de um episódio isolado de impaciência ou cansaço dos pais — todos os pais erram, e isso não constitui abuso. O abuso emocional é uma <strong>posição relacional sustentada</strong> que faz da criança alvo recorrente de ataques narcísicos.</p>

        <h3>Sinais que merecem atenção</h3>
        <ul>
          <li>Mudanças bruscas no rendimento escolar ou na sociabilidade.</li>
          <li>Excesso de docilidade ou, ao contrário, irritabilidade desproporcional.</li>
          <li>Pesadelos recorrentes, terror noturno, distúrbios alimentares.</li>
          <li>Regressões — voltar a fazer xixi na cama, falar como bebê, demandar atenção como criança menor.</li>
          <li>Dificuldade em nomear ou reconhecer o que sente.</li>
          <li>Autocrítica precoce e severa, sentimento permanente de inadequação.</li>
        </ul>

        <h3>O que fazer</h3>
        <p>O primeiro movimento é o mais difícil: <strong>reconhecer</strong>. Famílias que vivem ciclos de violência simbólica frequentemente naturalizam o que se passa em casa. Quando alguém de fora — uma professora, uma avó, um pediatra — aponta um sinal, vale escutar.</p>

        <p>Freud nos ensinou que o trauma não está no acontecimento isolado, mas no que dele se inscreve no aparelho psíquico e não pôde ser elaborado. A clínica com crianças trabalha justamente para que aquilo que não pôde ser dito possa, enfim, encontrar palavras — através do brincar, do desenho, da fala dirigida a um adulto que escuta sem julgar.</p>

        <blockquote>"A criança não é um pequeno adulto. Ela vive o tempo do brincar, e é no brincar que ela tece os fios do que ainda não consegue dizer."</blockquote>

        <p>Se você reconheceu algum desses sinais em uma criança próxima, procure um profissional. A intervenção precoce muda o destino subjetivo de uma vida inteira.</p>
      `
    },
    '2': {
      titulo: 'Burnout: o adoecimento pelo trabalho',
      eyebrow: 'Adultos · Contemporâneo',
      conteudo: `
        <p>Reconhecida pela Organização Mundial da Saúde como um fenômeno ocupacional, a Síndrome de Burnout deixou de ser exclusividade de profissionais da saúde e da educação. Hoje, atravessa todas as áreas em que o trabalho consome o sujeito até o esgotamento — não apenas físico, mas psíquico.</p>

        <h3>Mais do que cansaço</h3>
        <p>Burnout não é a fadiga que se cura com um fim de semana. É o estado em que o trabalho deixou de produzir sentido e passou a produzir <strong>vazio</strong>. O sujeito perde o interesse, despersonaliza-se diante das tarefas, sente-se ineficaz mesmo cumprindo o que precisa ser cumprido.</p>

        <h3>Os três eixos da síndrome</h3>
        <ul>
          <li><strong>Exaustão emocional:</strong> a sensação de não ter mais nada a dar.</li>
          <li><strong>Despersonalização:</strong> tornar-se cínico, distante, mecânico nas relações de trabalho.</li>
          <li><strong>Redução da realização pessoal:</strong> avaliar negativamente o próprio desempenho, mesmo quando os resultados objetivos são bons.</li>
        </ul>

        <h3>Por que adoecemos no trabalho?</h3>
        <p>O capitalismo contemporâneo nos pede mais do que o que fazemos: pede que <strong>sejamos</strong> aquilo que produzimos. A identidade se confunde com o cargo, o desempenho com o valor pessoal. Quando o trabalho falha — ou quando exige além do humano —, falha junto a imagem que o sujeito construiu de si mesmo.</p>

        <p>Lacan dizia que o sintoma é uma mensagem cifrada que o inconsciente envia ao sujeito. O burnout, lido por essa via, é um pedido de pausa que o corpo grita quando a palavra já não basta.</p>

        <h3>O caminho terapêutico</h3>
        <p>Tratar o burnout não é apenas afastar-se do trabalho — é interrogar a relação que cada sujeito construiu com o fazer. Por que esse trabalho? A serviço de qual ideal? Que dívida simbólica está sendo paga ali? A escuta clínica permite que o sujeito recupere a distância necessária entre o que ele é e o que ele faz.</p>

        <blockquote>"Quando o sintoma se torna corpo, é porque a palavra já não tinha mais lugar. Trazê-la de volta é o trabalho da análise."</blockquote>

        <p>Se você tem se sentido esgotado, descrente do próprio trabalho ou mecânico em suas relações profissionais, vale procurar ajuda. Burnout não se resolve com força de vontade — exige escuta.</p>
      `
    },
    '3': {
      titulo: 'Altas habilidades na infância',
      eyebrow: 'Infância · Desenvolvimento',
      conteudo: `
        <p>Nem toda criança curiosa tem altas habilidades, e nem toda criança com altas habilidades é o estereótipo do gênio precoce. A realidade é mais sutil — e justamente por isso, frequentemente passa despercebida tanto na escola quanto em casa.</p>

        <h3>O que caracteriza altas habilidades</h3>
        <p>O termo abrange um conjunto de manifestações: capacidade intelectual acima da média em uma ou mais áreas, criatividade incomum, profundo envolvimento com assuntos específicos, sensibilidade aguçada e, frequentemente, uma maturidade emocional descompassada da idade cronológica.</p>

        <h3>Sinais comuns</h3>
        <ul>
          <li>Vocabulário muito amplo e uso preciso da linguagem desde cedo.</li>
          <li>Curiosidade insaciável por temas específicos — astronomia, dinossauros, números, mapas, mitologia.</li>
          <li>Pensamento abstrato precoce — perguntas sobre morte, infinito, tempo, justiça.</li>
          <li>Hipersensibilidade emocional, estética ou sensorial.</li>
          <li>Tédio recorrente em sala de aula, com queda de rendimento (paradoxalmente).</li>
          <li>Dificuldade de socialização com pares da mesma idade.</li>
        </ul>

        <h3>O paradoxo do alto potencial</h3>
        <p>Crianças com altas habilidades podem apresentar baixo desempenho escolar, ser rotuladas como desatentas, hiperativas ou desinteressadas. O descompasso entre o desenvolvimento cognitivo e o emocional gera angústias específicas: <strong>saber muito sobre o mundo sem ter ferramentas emocionais para suportar o que sabe</strong>.</p>

        <p>É comum, por exemplo, uma criança de seis anos compreender intelectualmente o conceito de morte e, ao mesmo tempo, não dispor dos recursos psíquicos para lidar com a ansiedade que essa compreensão produz. A tarefa do trabalho clínico é ajudar a articular o que o pensamento adianta com o que o afeto ainda precisa elaborar.</p>

        <h3>O que fazer</h3>
        <p>Buscar avaliação psicológica especializada é um passo importante — não para rotular a criança, mas para compreender suas necessidades específicas. A escola pode precisar de adaptações; a família, de orientação; a própria criança, de um espaço onde sua intensidade encontre acolhida.</p>

        <blockquote>"A inteligência não basta. Sem elaboração afetiva, ela vira armadilha."</blockquote>

        <p>Reconhecer altas habilidades é proteger uma criança de carregar sozinha aquilo que não cabe em seu tempo emocional.</p>
      `
    },
    '4': {
      titulo: 'Adolescência: travessia e crise',
      eyebrow: 'Adolescência · Psicanálise',
      conteudo: `
        <p>A adolescência não é uma fase de "preparação" para a vida adulta. É, ela mesma, uma forma de existir — atravessada por urgências, lutos e descobertas que marcam o sujeito para sempre. A psicanálise, sobretudo na leitura lacaniana, oferece uma escuta singular para esse momento.</p>

        <h3>O que se passa, exatamente?</h3>
        <p>O corpo muda antes do psiquismo. O adolescente se vê habitando um corpo estranho, capaz de coisas que pouco antes não lhe diziam respeito — sexualidade, força, capacidade reprodutiva. Lacan dizia que a puberdade <strong>não é apenas biológica, é uma puberdade do desejo</strong>: o sujeito é convocado a se posicionar diante de algo que o ultrapassa.</p>

        <h3>Os lutos da adolescência</h3>
        <ul>
          <li><strong>Luto pelo corpo de criança:</strong> aquele corpo que já não existe mais.</li>
          <li><strong>Luto pelos pais idealizados:</strong> a queda do pedestal parental.</li>
          <li><strong>Luto pela infância:</strong> a posição de filho vai sendo trocada pela posição de sujeito responsável por si.</li>
        </ul>
        <p>Esses lutos são necessários — mas raramente suaves. A irritação, o isolamento, a rebeldia são, muitas vezes, o trabalho psíquico de luto em ato.</p>

        <h3>Quando a crise se torna sintoma</h3>
        <p>Há diferença entre a turbulência esperada da adolescência e o sofrimento que pede escuta. Sinais de alerta incluem isolamento severo, queda abrupta de rendimento, uso problemático de substâncias, automutilação, fala recorrente sobre morte, transtornos alimentares, ataques de pânico.</p>

        <p>Nem sempre o adolescente pede ajuda diretamente. Muitas vezes, sua linguagem é a do <strong>ato</strong> — a fuga de casa, a briga na escola, a passagem ao ato impulsiva. Cabe ao adulto ler nessa cena uma demanda que a palavra ainda não pôde formular.</p>

        <blockquote>"O adolescente não fala — atua. Cabe ao analista ler nessa atuação a palavra que pede passagem."</blockquote>

        <h3>A clínica com adolescentes</h3>
        <p>Atender adolescentes exige respeito ao tempo da fala. Eles raramente chegam dizendo "tenho um problema". Chegam testando, silenciando, provocando. O analista oferece um lugar onde tudo isso pode acontecer sem que o adolescente seja punido por isso — e onde, lentamente, vai surgindo um sujeito capaz de dizer o que sente.</p>

        <p>A adolescência bem atravessada deixa marcas — mas marcas que sustentam, ao invés de aprisionar.</p>
      `
    },
    '5': {
      titulo: 'Luto e elaboração das perdas',
      eyebrow: 'Adultos · Freud',
      conteudo: `
        <p>Em 1917, Freud publicou um dos textos mais importantes de toda a psicanálise: <em>Luto e Melancolia</em>. Mais de um século depois, ele continua nos dizendo algo essencial sobre o trabalho psíquico que é necessário diante das perdas — e sobre o que acontece quando esse trabalho não pode ser feito.</p>

        <h3>O luto como trabalho</h3>
        <p>Freud chamou o luto de <em>Trauerarbeit</em> — trabalho de luto. A escolha da palavra "trabalho" não é casual: perder alguém ou algo que se ama exige do psiquismo um esforço grande, lento, doloroso. É preciso retirar, lembrança por lembrança, a libido que estava investida no objeto perdido. Esse é o motivo pelo qual o luto consome tanta energia psíquica e por que é normal sentir-se exausto, sem interesse pelo mundo, durante meses.</p>

        <h3>O que difere luto de melancolia</h3>
        <p>No luto, é o mundo que se torna pobre e vazio. Na melancolia, é o próprio sujeito que se torna pobre e vazio. O melancólico se acusa, se rebaixa, se desvaloriza — porque a perda, para ele, recaiu sobre o próprio eu.</p>
        <ul>
          <li><strong>No luto:</strong> "Perdi alguém. O mundo está mais pobre sem essa pessoa."</li>
          <li><strong>Na melancolia:</strong> "Perdi alguém. Sou eu que não presto, que não fui suficiente, que não mereço."</li>
        </ul>

        <h3>Por que algumas perdas não passam</h3>
        <p>Quando o vínculo com o objeto perdido era ambivalente — quando havia, junto ao amor, uma raiva que nunca pôde ser nomeada —, o luto pode se complicar. A pessoa fica presa numa fidelidade dolorosa àquilo que se foi, incapaz de seguir adiante. O luto que não se elabora se transforma em sintoma: depressão prolongada, somatizações, repetições que escapam à compreensão consciente.</p>

        <h3>Lutos invisíveis</h3>
        <p>Nem todo luto é pela morte de alguém. Há os lutos pelas separações, pelas perdas de funções (a aposentadoria), pelos filhos que partem, pelas etapas da vida que se encerram, pelos projetos que não se realizaram. Esses lutos invisíveis muitas vezes são os que mais machucam — porque ninguém os reconhece.</p>

        <blockquote>"O luto é o tempo em que a alma se reorganiza para continuar amando, mesmo na ausência."</blockquote>

        <h3>O que a clínica oferece</h3>
        <p>A análise oferece um lugar onde a perda pode ser falada — todas as suas faces. O amor, a raiva, a culpa, o alívio. Tudo o que, fora dali, pareceria inaceitável dizer. É nessa fala que o luto vai, pouco a pouco, podendo ser elaborado. E o sujeito vai recuperando a capacidade de investir no mundo, em si mesmo, em novos vínculos.</p>

        <p>Não há prazo para o luto. Há, sim, um trabalho que precisa ser feito — e que, quando bem feito, transforma a ausência em presença simbólica.</p>
      `
    },
    '6': {
      titulo: 'Ansiedade contemporânea',
      eyebrow: 'Atual · Mal-estar',
      conteudo: `
        <p>Vivemos a era da ansiedade. Os números são impressionantes: a OMS estima que mais de 264 milhões de pessoas sofrem com transtornos ansiosos no mundo, e o Brasil lidera os rankings globais. Mas, antes de medicar o sintoma, vale a pena perguntar: <strong>de que esse sintoma é a expressão?</strong></p>

        <h3>A pressa como modo de vida</h3>
        <p>O sujeito contemporâneo vive sob uma pressão singular: tudo precisa ser rápido, eficiente, otimizado. Há um imperativo de gozo permanente — gozar do trabalho, do corpo, do lazer, da família, do sono. Não há mais tempo morto. E é justamente esse tempo morto, esse intervalo entre uma coisa e outra, que permitia ao sujeito se reencontrar consigo mesmo.</p>

        <h3>O sintoma da angústia</h3>
        <p>Lacan distinguia ansiedade de angústia. A ansiedade tem objeto: estou ansioso <em>com</em> algo, <em>diante de</em> algo. A angústia, não — a angústia surge quando o sujeito se vê confrontado com um vazio que nenhum objeto preenche. É o afeto que não engana, dizia Lacan. Quando ela aparece, algo de verdadeiro está em jogo.</p>

        <h3>Hiperconexão e solidão</h3>
        <ul>
          <li>Estar conectado o tempo todo deixou de ser opção — é exigência.</li>
          <li>O outro virtual ocupou o lugar do encontro real, sem oferecer suas qualidades.</li>
          <li>O sujeito se compara permanentemente — não com o vizinho, mas com o melhor recorte de mil vidas idealizadas.</li>
          <li>O sono encurtou, o silêncio sumiu, o tédio tornou-se intolerável.</li>
        </ul>

        <h3>Por que o remédio sozinho não basta</h3>
        <p>Medicação tem seu lugar — pode ser indispensável em momentos agudos. Mas tratar apenas o sintoma sem escutar o sujeito é apagar a luz vermelha do painel sem investigar o motor. A ansiedade está dizendo algo. O analista é alguém disposto a escutar o que ela diz.</p>

        <blockquote>"O sintoma é a melhor solução que o sujeito encontrou — até que possa encontrar uma melhor."</blockquote>

        <h3>O caminho da escuta</h3>
        <p>A análise não promete eliminar a ansiedade — promete transformar a relação do sujeito com aquilo que o angustia. Em vez de fugir do que aparece, o sujeito aprende a habitá-lo, a interrogá-lo, a reconhecer nele um ponto de verdade sobre si mesmo. É um trabalho lento, contrário à lógica da pressa que produziu o sintoma — e justamente por isso, capaz de dissolvê-lo.</p>

        <p>Se a ansiedade tem ocupado seu cotidiano, considere conversar com um profissional. Não para silenciar o sintoma, mas para escutar o que ele tem a dizer.</p>
      `
    },
    'privacidade': {
      titulo: 'Política de Privacidade',
      eyebrow: 'LGPD · Lei 13.709/2018',
      conteudo: `
        <p>O consultório <strong>Sabato &amp; Climeni</strong> respeita sua privacidade e está comprometido com a proteção dos dados pessoais coletados através deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>

        <h3>1. Dados coletados</h3>
        <p>Coletamos apenas os dados que você fornece voluntariamente ao preencher o formulário de contato: nome, sobrenome, e-mail, telefone e mensagem.</p>

        <h3>2. Finalidade</h3>
        <p>Os dados são utilizados exclusivamente para responder à sua solicitação de contato. Não compartilhamos suas informações com terceiros para fins comerciais.</p>

        <h3>3. Armazenamento</h3>
        <p>As mensagens recebidas são armazenadas em caixa de e-mail profissional protegida por senha. Mantemos os dados pelo tempo necessário ao atendimento da sua solicitação.</p>

        <h3>4. Cookies</h3>
        <p>Utilizamos apenas cookies essenciais para o funcionamento do site. Não utilizamos cookies de rastreamento publicitário.</p>

        <h3>5. Seus direitos</h3>
        <p>Conforme a LGPD, você tem direito de acessar, corrigir, excluir ou portar seus dados. Para exercer esses direitos, entre em contato pelo e-mail do consultório.</p>

        <h3>6. Sigilo profissional</h3>
        <p>Todo conteúdo de natureza clínica está protegido pelo sigilo profissional previsto no Código de Ética do Psicólogo (Resolução CFP 010/2005).</p>

        <h3>7. Contato</h3>
        <p>Dúvidas sobre esta política podem ser enviadas para o e-mail do consultório.</p>

        <p><em>Última atualização: abril de 2026.</em></p>
      `
    },
    'termos': {
      titulo: 'Termos & Condições de Uso',
      eyebrow: 'Termos do site',
      conteudo: `
        <p>Bem-vindo ao site do consultório <strong>Sabato &amp; Climeni</strong>. Ao acessar este site, você concorda com os termos abaixo.</p>

        <h3>1. Natureza informativa</h3>
        <p>O conteúdo deste site tem caráter exclusivamente informativo e não substitui, em hipótese alguma, atendimento psicológico individualizado. Os artigos publicados representam reflexões clínicas gerais e não devem ser utilizados como diagnóstico ou orientação terapêutica para casos individuais.</p>

        <h3>2. Propriedade intelectual</h3>
        <p>Todo o conteúdo textual e visual deste site é de propriedade do consultório Sabato &amp; Climeni e está protegido pelas leis de direitos autorais. A reprodução total ou parcial é permitida apenas com autorização expressa e citação da fonte.</p>

        <h3>3. Atendimento clínico</h3>
        <p>Solicitações de atendimento enviadas pelo formulário de contato serão respondidas em até dois dias úteis. O agendamento efetivo de consulta depende de avaliação prévia de disponibilidade.</p>

        <h3>4. Convênios</h3>
        <p>O atendimento por convênios está sujeito a consulta prévia e disponibilidade de cada profissional. As condições podem variar.</p>

        <h3>5. Limitação de responsabilidade</h3>
        <p>O consultório não se responsabiliza por interpretações equivocadas dos conteúdos publicados ou por decisões tomadas pelo usuário com base apenas na leitura dos artigos.</p>

        <h3>6. Alterações</h3>
        <p>Estes termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página.</p>

        <h3>7. Foro</h3>
        <p>Eventuais disputas serão resolvidas no foro da comarca de São Paulo/SP.</p>

        <p><em>Última atualização: abril de 2026.</em></p>
      `
    }
  };

  // ============ PSICÓLOGAS ============
  const psicologas = {
    'valeria': {
      nome: 'Valéria Russano de Castro Climeni',
      crp: 'CRP 06/12402',
      role: 'Psicanalista · Sócia-fundadora',
      foto: 'img/valeria.png',
      conteudo: `
        <h3>Trajetória</h3>
        <p>Valéria Climeni é uma das figuras fundadoras do consultório Sabato &amp; Climeni, ativo desde 1981. Sua prática clínica de mais de quatro décadas se desenvolveu sob orientação freudiana, com diálogo permanente com a obra de Lacan.</p>

        <h3>Formação</h3>
        <ul>
          <li>Graduação em Psicologia.</li>
          <li>Formação psicanalítica em instituições de referência em São Paulo.</li>
          <li>Análise pessoal e supervisão clínica continuadas ao longo de toda a carreira.</li>
        </ul>

        <h3>Áreas de atuação</h3>
        <ul>
          <li>Clínica de adultos.</li>
          <li>Atendimento de adolescentes em situações de crise.</li>
          <li>Acompanhamento de processos de luto e elaboração de traumas.</li>
          <li>Supervisão clínica para profissionais em formação.</li>
        </ul>

        <h3>Abordagem</h3>
        <p>O trabalho clínico é conduzido a partir da escuta do que cada sujeito tem a dizer sobre seu próprio sintoma. Não há protocolos prontos: cada análise constrói seu próprio caminho, no tempo singular do paciente.</p>

        <p><em>Os dados completos serão atualizados pela profissional.</em></p>
      `
    },
    'lucia': {
      nome: 'Lúcia Helena Oliveira Sabato',
      crp: 'CRP 06/24335',
      role: 'Psicanalista · Sócia',
      foto: 'img/lucia.png',
      conteudo: `
        <h3>Trajetória</h3>
        <p>Lúcia Sabato consolidou sua prática clínica acompanhando o consultório em diversas fases de seu desenvolvimento. Sua escuta atenta é especialmente reconhecida no atendimento de crianças e na orientação de famílias.</p>

        <h3>Formação</h3>
        <ul>
          <li>Graduação em Psicologia.</li>
          <li>Formação psicanalítica de orientação freudiana.</li>
          <li>Especialização em clínica com crianças e adolescentes.</li>
          <li>Análise pessoal e supervisão continuadas.</li>
        </ul>

        <h3>Áreas de atuação</h3>
        <ul>
          <li>Psicanálise com crianças.</li>
          <li>Atendimento de adolescentes.</li>
          <li>Orientação a pais e famílias.</li>
          <li>Avaliação psicológica em casos clínicos complexos.</li>
        </ul>

        <h3>Abordagem</h3>
        <p>O trabalho com crianças exige uma escuta específica — que considera o brincar, o desenho e o sintoma como linguagens próprias da infância. A clínica é construída em parceria com a família, respeitando o tempo subjetivo de cada criança.</p>

        <p><em>Os dados completos serão atualizados pela profissional.</em></p>
      `
    }
  };

  // ============ MODAL OPENERS ============
  document.addEventListener('click', e => {
    const articleBtn = e.target.closest('[data-open-article]');
    if (articleBtn) {
      e.preventDefault();
      const id = articleBtn.dataset.openArticle;
      const a = articles[id];
      if (a) openModal(`<span class="article-meta">${a.eyebrow}</span><h2>${a.titulo}</h2>${a.conteudo}`);
      return;
    }
    const psiBtn = e.target.closest('[data-open-psi]');
    if (psiBtn) {
      e.preventDefault();
      const id = psiBtn.dataset.openPsi;
      const p = psicologas[id];
      if (p) openModal(`
        <div class="modal__psi-photo"><img src="${p.foto}" alt="${p.nome}"></div>
        <div class="psi-meta">
          <span class="article-meta">${p.role}</span>
          <h2>${p.nome}</h2>
          <span class="crp">${p.crp}</span>
        </div>
        ${p.conteudo}
      `);
    }
  });

  // ============ FORM ============
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form__status';
    status.textContent = '';

    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      if (!f.value.trim()) { f.classList.add('error'); valid = false; }
      else f.classList.remove('error');
    });
    const email = form.email;
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add('error'); valid = false; }

    if (!valid) {
      status.className = 'form__status error';
      status.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    status.textContent = 'Enviando sua mensagem...';

    const accessKey = form.access_key.value;
    if (accessKey === 'SUA_CHAVE_WEB3FORMS_AQUI') {
      // modo de teste local: apenas simula
      setTimeout(() => {
        status.className = 'form__status success';
        status.textContent = '✓ Modo de teste: substitua "SUA_CHAVE_WEB3FORMS_AQUI" pela sua chave Web3Forms para envio real.';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensagem';
        form.reset();
      }, 800);
      return;
    }

    try {
      const data = new FormData(form);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await res.json();
      if (result.success) {
        status.className = 'form__status success';
        status.textContent = '✓ Mensagem enviada com sucesso! Retornaremos em breve.';
        form.reset();
      } else {
        throw new Error(result.message || 'erro');
      }
    } catch (err) {
      status.className = 'form__status error';
      status.textContent = 'Não foi possível enviar. Tente novamente ou utilize o WhatsApp.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensagem';
    }
  });

  // ============ COOKIE BANNER ============
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('cookieAccept');
  if (!localStorage.getItem('sc_cookie_ok')) {
    banner.hidden = false;
    setTimeout(() => banner.classList.add('show'), 800);
  }
  accept.addEventListener('click', () => {
    localStorage.setItem('sc_cookie_ok', '1');
    banner.classList.remove('show');
    setTimeout(() => banner.hidden = true, 400);
  });

})();
