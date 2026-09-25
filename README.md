# Portfólio — Elias Galvão

Portfólio pessoal de desenvolvedor full stack, feito com HTML, CSS e JavaScript puros (sem frameworks nem build).

**Deploy:** https://my-portfolio-created-by-elias.netlify.app/

## Destaques

- Tema claro/escuro que segue o sistema e lembra a escolha do visitante
- Layout responsivo com menu mobile acessível (teclado, `aria-expanded`, Esc para fechar)
- Animações de entrada e de scroll com `IntersectionObserver`, respeitando `prefers-reduced-motion`
- Imagens otimizadas, com `loading="lazy"` e dimensões declaradas
- SEO básico e Open Graph para compartilhar o link

## Estrutura

```
index.html
assets/
  styles/style.css
  JS/script.js
  img/        imagens otimizadas usadas pelo site
```

## Rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8080
```
