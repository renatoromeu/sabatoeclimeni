SABATO & CLIMENI — Landing Page
================================

ESTRUTURA
---------
sabato-climeni/
├── index.html            ← página única
├── css/styles.css        ← estilos
├── js/script.js          ← interatividade + conteúdo dos modais
└── img/
    ├── logo.png          ← logo oficial (já incluso)
    └── favicon.svg       ← favicon "SC"

DEPLOY (LOCAWEB / HOSTGATOR)
-----------------------------
1. Faça login no painel da hospedagem
2. Acesse o Gerenciador de Arquivos (cPanel ou similar)
3. Entre na pasta public_html (ou www)
4. Faça upload de TODO o conteúdo da pasta sabato-climeni/
   (mantendo a estrutura de pastas)
5. Pronto. Acesse seu domínio.

⚠ NÃO precisa de PHP, banco de dados ou backend.
   É 100% estático — funciona em qualquer hospedagem.

FORMULÁRIO DE CONTATO (Web3Forms)
----------------------------------
1. Acesse https://web3forms.com
2. Insira o e-mail ****************** (depois mude para o do consultório)
3. Eles enviarão uma chave (access_key)
4. Abra index.html
5. Procure: SUA_CHAVE_WEB3FORMS_AQUI
6. Substitua pela chave recebida
7. Salve e envie ao servidor

Enquanto a chave não for trocada, o formulário roda em "modo de teste"
e mostra mensagem de sucesso simulada (não envia e-mail real).

CONTEÚDOS EDITÁVEIS
-------------------
• Textos institucionais: index.html
• Artigos completos (6 textos): js/script.js → objeto "articles"
• Perfis das psicólogas: js/script.js → objeto "psicologas"
• Política de Privacidade e Termos: js/script.js → articles.privacidade / articles.termos

FOTOS PLACEHOLDER
-----------------
As fotos das psicólogas e demais imagens vêm do Unsplash (gratuito, uso comercial OK).
Quando tiverem as fotos profissionais reais:
1. Salve em img/ (ex: img/psi-valeria.jpg, img/psi-lucia.jpg)
2. Em index.html, troque as URLs do Unsplash pelos caminhos locais
3. Em js/script.js, idem para as fotos dos modais

DOMÍNIO
-------
Sugestões disponíveis:
- sabatoeclimeni.com.br
- sabatoclimenipsi.com.br
- consultoriosabatoclimeni.com.br

Registre em registro.br ou direto no painel da Locaweb.

WHATSAPP / E-MAIL / ENDEREÇO
----------------------------
Configurações atuais (todas para teste — alterar depois):
• WhatsApp: ******************  → buscar no index.html por "******************"
• E-mail: contato@sabatoeclimeni.com.br → buscar no index.html
• Endereço: ******************  → buscar no index.html

NAVEGADORES TESTADOS
--------------------
Chrome, Firefox, Safari, Edge — versões atuais.
Totalmente responsivo (mobile, tablet, desktop).

PRÓXIMOS PASSOS SUGERIDOS
--------------------------
1. Substituir CRPs e fotos pelas oficiais (já estão corretas!)
2. Cliente revisar e validar os 6 artigos
3. Cliente revisar perfis das psicólogas
4. Sessão de fotos profissional → trocar placeholders Unsplash
5. Configurar Web3Forms com e-mail definitivo
6. Registrar domínio e contratar plano básico (R$ 15-20/mês)
7. (Opcional) Google Analytics: pedir para adicionar quando quiser

DÚVIDAS
-------
