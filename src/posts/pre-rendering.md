---
title: 'Duas formas de pré-renderizar'
date: '2020-08-10'
---

O Next.js oferece duas formas de pré-renderização: Geração estática e renderização pelo servidor. A diferença entre as duas formas é **quando** o HTML de uma página é gerado.

**Geração estática** (recomendada pela documentação) é o método de pré-renderização que gera o HTML no momento da construção. O HTML gerado é reutilizado em cada requisição seguinte.  

**Renderização do lado do servidor** é o método de pré-renderização que gera o HTML em cada solicitação.

Por padrão, Next.js pré-renderiza todas as páginas. Isso significa que Next.js gera HTML para cada página com antecedência, em vez de ter tudo feito pelo JavaScript do lado do cliente. A pré-renderização pode resultar em melhor desempenho e SEO.

É importante ressaltar que Next.js permite que você escolha qual formulário de pré-renderização deseja usar para cada página. Você pode criar um aplicativo Next.js "híbrido" usando geração estática para a maioria das páginas e renderização do lado do servidor para outras.

## Referências
[Pre-rendering - Nextjs](https://nextjs.org/docs/basic-features/pages#pre-rendering)
