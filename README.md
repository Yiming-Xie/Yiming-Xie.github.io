# Yiming Xie — academic homepage

Personalized from [al-folio v0.14.0](https://github.com/alshedivat/al-folio/tree/v0.14.0), using its original Sass styles and adapted layouts. The lightweight configuration supports GitHub Pages' standard Jekyll build, without unused blog, notebook, or bibliography plugins. Sass color functions are adapted for GitHub Pages' Sass version.

## Edit content
- `_pages/about.md`: biography and research interests
- `_data/news.yml`: news
- `_data/publications.yml`: papers, preview images and links
- `_pages/education.md`: education
- `_includes/social.html`: social links
- `_config.yml`: contact email and site metadata
- `_sass/_personal.scss`: personal styling
- `SynFog/`: existing project website, preserved at `/SynFog/`

## Preview
Run `bundle install`, then `bundle exec jekyll serve` and open http://127.0.0.1:4000.

## Publish
Push `main` to GitHub. GitHub Pages builds the repository root using its existing deployment settings.

Upstream al-folio license is retained in `licenses/al-folio-MIT.txt`; original project license is retained in `LICENSE`.
