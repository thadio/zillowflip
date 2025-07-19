# ZillowFlip.AI

ZillowFlip.AI é um webapp inteligente que utiliza inteligência artificial e integração com a plataforma Zillow para automatizar a busca e avaliação de imóveis residenciais com foco em **compra, reforma e revenda (flipping)**.

## 🚀 Funcionalidades

- 🔍 **Busca automatizada de imóveis** à venda no Zillow com filtros personalizáveis (preço, localização, número de quartos/banheiros, etc.)
- 📍 **Seleção por região geográfica** (por cidade, bairro, ZIP Code ou raio de distância)
- 📊 **Análise de preço médio da região**, comparando com imóveis similares
- 📈 **Visualização do histórico de preços** da propriedade ao longo do tempo
- 🧾 **Histórico de vendas da propriedade** e das propriedades vizinhas (datas e frequências)
- 🏗️ **Análise automática da descrição do imóvel** para detectar dificuldades potenciais em reformas (ex: necessidade de reparos estruturais)
- 💡 **Insights inteligentes** para investidores do mercado imobiliário (risco x retorno, liquidez da região, fatores ocultos)

## 🤖 Como funciona

1. O usuário define os **critérios de busca** (preço, localização, tipo de imóvel etc.)
2. O sistema consulta a base de dados pública do Zillow (via API/scraping autorizado)
3. Os dados são analisados com técnicas de NLP e machine learning:
   - Verificação do histórico de venda e valorização
   - Análise semântica da descrição do imóvel
   - Categorização dos imóveis por risco e potencial de lucro
4. O usuário recebe um **ranking de oportunidades** com justificativas detalhadas

## 🛠️ Tecnologias Utilizadas

- Node.js / Express (backend)
- React / Next.js (frontend)
- MongoDB / Firebase (armazenamento)
- OpenAI Codex (interpretação de dados, sugestão de insights e NLP)
- Zillow API ou Web Scraping com Puppeteer
- TailwindCSS (estilização responsiva)
- Chart.js / D3.js (gráficos de preço e comportamento)

## 🧠 Exemplo de Insight Gerado

> “A casa localizada na Elm St. nº 224 foi vendida 4 vezes nos últimos 10 anos, com tempo médio de revenda inferior a 3 anos. A descrição indica necessidade de reparos no telhado e estrutura. Valor atual está 18% abaixo do preço médio por metro quadrado da região. Potencial interessante para flipping com risco médio.”

## 🏗️ Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seuusuario/zillowflip-ai.git
cd zillowflip-ai

# Instale as dependências
npm install

# Copie o arquivo de exemplo e defina suas chaves
cp .env.example .env
# Edite `.env` e preencha `ZILLOW_BRIDGE_TOKEN`, `MONGODB_URI` e `OPENAI_KEY`

# Rode o servidor
npm run dev

## 📡 Endpoints

- `GET /api/properties` lista propriedades filtrando por `city`, `state`, `minPrice` e `maxPrice`.
- `GET /api/properties/:zpid` detalhes completos de uma propriedade.
