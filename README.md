# James Pazini | Maison

Site institucional de James Pazini, barbeiro em Bauru, com informações sobre serviços, história profissional, trabalhos, ambientes da Maison e localização.

## Sobre o projeto

O site é uma página estática feita com HTML, CSS e JavaScript puro. Não usa framework, gerenciador de pacotes, servidor de aplicação ou banco de dados. Os textos e as imagens são mantidos nos arquivos do projeto; a preferência de tema é salva no `localStorage` do navegador.

## Funcionalidades

- Apresentação dos serviços e da história profissional.
- Galeria de cortes com navegação, indicadores, suporte a gestos de toque e visualização ampliada.
- Galeria de fotos dos ambientes da Maison.
- Informações de contato e localização, com link para o mapa.
- Links de agendamento e contato pelo WhatsApp.
- Menu responsivo e alternância de tema claro/escuro, com preferência salva no navegador.
- Fontes DM Sans, Playfair Display e Homemade Apple carregadas do Google Fonts.

## Estrutura

| Caminho | Descrição |
| --- | --- |
| `index.html` | Conteúdo e estrutura das seções do site. |
| `style.css` | Identidade visual, temas e regras responsivas. |
| `style.js` | Menu, tema, galeria, lightbox e links do WhatsApp. |
| `img/` | Logo, retratos, fotos de cortes e ambientes. |
| `video/videos1.mp4` | Arquivo de vídeo disponível no projeto. |

As imagens e demais recursos são referenciados por caminhos relativos. Mantenha os nomes e a estrutura das pastas ao publicar o site.

## Como executar localmente

Com Python instalado, abra um terminal na pasta do projeto e execute:

```powershell
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>. Também é possível abrir `index.html` diretamente, mas um servidor local é recomendado para testar o site de forma mais próxima de uma hospedagem.

## Integração futura com banco de dados

Atualmente, o site **não se conecta a banco de dados**. A galeria usa uma lista de imagens definida em `style.js`, e os contatos e textos estão no HTML/JavaScript. O navegador abre conversas no WhatsApp usando o número configurado no código. Portanto, ainda não há cadastro de clientes, persistência de agendamentos nem área administrativa.

Uma integração de agendamentos pode ser desenvolvida separadamente:

1. Definir os dados e as regras do agendamento (por exemplo, serviço, horário, nome e contato), incluindo consentimento e prazo de retenção dos dados pessoais.
2. Criar uma API no servidor para consultar horários e registrar ou cancelar solicitações.
3. Escolher um banco adequado ao volume e à hospedagem, modelar os dados e aplicar as migrações de esquema.
4. Conectar o site à API por HTTPS, com validação no servidor, proteção contra abuso e mensagens claras de confirmação ou erro.
5. Configurar credenciais no ambiente do servidor ou em um cofre de segredos. **Nunca** colocar senhas, chaves ou strings de conexão no HTML ou no JavaScript enviado ao navegador.
6. Adicionar testes para conflitos de horário, dados inválidos, falhas de rede e acesso não autorizado.

Essa integração exige um backend e configuração de hospedagem; não pode ser implementada com segurança apenas inserindo credenciais de banco no site estático.

## Melhorias possíveis

- Implementar API e persistência de agendamentos, caso esse fluxo seja necessário.
- Adicionar testes automatizados para tema, navegação e galeria.
- Otimizar e servir imagens em formatos modernos e tamanhos adequados a dispositivos móveis.
- Adicionar metadados de compartilhamento e revisar acessibilidade, desempenho e SEO.
- Automatizar publicação e verificações em uma pipeline de integração contínua.

## Publicação

O projeto pode ser hospedado em um serviço para sites estáticos. Como não há etapa de build, a publicação consiste em disponibilizar os arquivos mantendo a estrutura de pastas. Uma futura API ou integração com banco exigirá hospedar também um serviço de backend.
