# PRD — TGF · Toulouse Guêpes Frelons

## Problème initial (verbatim)
"en te servant de ce site comme exemple : https://www.toulouse-frelons-guepes.fr/ fait moi le meme type de pages web et sous page, modifi la couleur plus sur des tons jaune. il faut qu'il puisse etre bien vu sur le web et bien referencer, on ajoutera des videos, pour remplacer les existantes"
Ajout : récupérer les photos du site existant https://toulouseguepesfrelons.fr/ ; carte de France avec épingles rouges sur les villes.

## Architecture
- Frontend React (CRA/craco) + framer-motion + lenis (smooth scroll) + react-helmet-async (SEO par route).
- Backend FastAPI (`/api`), MongoDB (collection `quotes`).
- Design : thème sombre « hazard » jaune voltage (#FFE600) + noir, polices Outfit / Plus Jakarta Sans / JetBrains Mono.

## Données réelles (source : site existant du client)
- Nom : TGF — Toulouse Guêpes Frelons
- Tél : 06 20 64 15 11 · Zone : Haute-Garonne (31) + Gers (32), 130+ communes
- Agréé Certibiocide · SIRET 893 664 557 00012
- Tarif : à partir de 95€ (nid 0–25 m) ; invasion / grande hauteur sur devis
- Photos récupérées : /media/hero-insect.jpg, /media/guepes.jpg, /media/frelons.jpg

## Implémenté (2026-06)
- 8 pages : Accueil, Guêpes, Frelons européens, Frelons asiatiques, Zones d'intervention, Tarifs, Vidéos, Contact.
- Accueil : hero cinétique, marquee, services, identification, process 6 étapes, pourquoi TGF, teaser zone + carte France, tarifs, vidéos, engagements, FAQ, formulaire devis, CTA.
- Carte de France SVG avec épingles rouges (pulsantes) autour de Toulouse + recherche de ville (134 communes).
- Formulaire de devis → POST /api/quotes (enregistré en base), GET /api/quotes pour consultation.
- SEO : titres/meta par route, Open Graph + Twitter, JSON-LD PestControl + FAQPage, robots.txt, sitemap.xml, llms.txt, favicon SVG original, noscript. Canonical/OG pointent sur toulouseguepesfrelons.fr.
- Section Vidéos : emplacements placeholders (youtubeId vide → « Bientôt disponible »), modal YouTube prête.

## Backlog
- P1 : Remplacer les placeholders vidéos par les vrais IDs YouTube (lib/data.js VIDEOS).
- P1 : Ajouter email de contact + envoi de notification (Resend) sur nouvelle demande de devis.
- P2 : Interface admin pour consulter les demandes de devis.
- P2 : Upload photo du nid dans le formulaire (object storage).

## Version statique HTML (ajout 2026-06)
- Site **onepage statique léger** généré dans `/app/frontend/public/tgf/` (~776 Ko, HTML+CSS+JS ≈ 84 Ko).
- Prévisualisation : `/tgf/index.html`. Prêt à être uploadé à la racine de l'hébergement du client.
- Vanilla JS (aucune dépendance) : carte de France interactive (clic ville → épingle verte), recherche communes, reveal au scroll, menu mobile, marquee, modal vidéo, formulaire **mailto** + honeypot anti-spam.
- Sécurité : `.htaccess` (CSP avec hash du JSON-LD, X-Frame-Options, HSTS, nosniff, Referrer/Permissions-Policy), HTTPS+non-www, compression, cache. 100% statique (pas de BDD).
- À PERSONNALISER : `assets/app.js` → `EMAIL` (adresse de réception du formulaire) et tableau `VIDEOS` (IDs YouTube). Guide dans `LISEZ-MOI-DEPLOIEMENT.txt`.
- La version React d'origine reste disponible à la racine `/`.

## Notes
- Aucune authentification. Les demandes de devis sont lisibles via GET /api/quotes.
- Aucune note d'avis clients inventée (pas de faux témoignages) — section « Engagements » à la place.
