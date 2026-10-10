// Central content + business data for TGF — Toulouse Guêpes Frelons
// Facts sourced from the owner's existing site toulouseguepesfrelons.fr

export const CONTACT = {
  name: "TGF — Toulouse Guêpes Frelons",
  short: "TGF",
  phoneDisplay: "06 20 64 15 11",
  phoneIntl: "+33620641511",
  zoneShort: "Toulouse · Haute-Garonne (31) · Gers (32)",
  siret: "893 664 557 00012",
  certibiocide: true,
};

const smsBody = encodeURIComponent(
  "Bonjour, j'ai un nid de guêpes/frelons à faire détruire. Pouvez-vous intervenir ?"
);
export const TEL_HREF = `tel:${CONTACT.phoneIntl}`;
export const SMS_HREF = `sms:${CONTACT.phoneIntl}?&body=${smsBody}`;

export const NAV = [
  { label: "Accueil", path: "/" },
  { label: "Guêpes", path: "/guepes" },
  { label: "Frelons européens", path: "/frelons-europeens" },
  { label: "Frelons asiatiques", path: "/frelons-asiatiques" },
  { label: "Zones", path: "/zones-intervention" },
  { label: "Tarifs", path: "/tarifs" },
  { label: "Vidéos", path: "/videos" },
  { label: "Contact", path: "/contact" },
];

export const METRICS = [
  { value: "7J/7", label: "Disponibilité" },
  { value: "< 2h", label: "Intervention rapide" },
  { value: "95€", label: "À partir de" },
  { value: "130+", label: "Communes couvertes" },
];

export const SERVICES = [
  {
    id: "guepes",
    name: "Guêpes",
    path: "/guepes",
    img: "/media/guepes.jpg",
    tag: "Vespula · Poliste",
    desc: "Destruction de tous types de nids de guêpes : sous toiture, coffres de volets roulants, haies et au sol. Traitement professionnel adapté.",
  },
  {
    id: "frelons-europeens",
    name: "Frelons européens",
    path: "/frelons-europeens",
    img: "/media/frelons.jpg",
    tag: "Vespa crabro",
    desc: "Repérage et élimination des nids de frelons européens, souvent nichés dans les charpentes, les combles et les troncs creux.",
  },
  {
    id: "frelons-asiatiques",
    name: "Frelons asiatiques",
    path: "/frelons-asiatiques",
    img: "https://images.unsplash.com/photo-1734816831577-f6429f1c3938?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    tag: "Vespa velutina",
    desc: "Espèce invasive très présente en Occitanie. Destruction des nids en hauteur recommandée par les autorités.",
  },
];

export const IDENTIFICATION = [
  {
    name: "Guêpe commune",
    img: "/media/guepes.jpg",
    specs: ["Taille : 12–17 mm", "Jaune vif et noir", "Nid gris en papier mâché", "Sous toiture, volets, sol"],
    danger: "Agressivité modérée",
  },
  {
    name: "Frelon européen",
    img: "https://images.unsplash.com/photo-1668354510731-3269392ff5b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    specs: ["Taille : 25–35 mm", "Brun-roux et jaune", "Nid dans combles, troncs", "Actif la nuit"],
    danger: "Moins agressif",
  },
  {
    name: "Frelon asiatique",
    img: "https://images.unsplash.com/photo-1734816831569-2107bdef9e22?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    specs: ["Taille : 20–30 mm", "Noir à bande orange", "Nid sphérique en hauteur", "Espèce invasive"],
    danger: "Destruction recommandée",
  },
];

export const PROCESS = [
  { n: "01", title: "Votre appel / SMS", text: "Contactez-nous en décrivant le problème. Une photo du nid accélère le diagnostic." },
  { n: "02", title: "Diagnostic gratuit", text: "Nous identifions l'espèce et évaluons l'accès au nid. Devis gratuit par téléphone." },
  { n: "03", title: "Rendez-vous rapide", text: "Intervention programmée dans les meilleurs délais, souvent le jour même, 7J/7." },
  { n: "04", title: "Mise en sécurité", text: "Le technicien sécurise la zone autour du nid avant toute manipulation." },
  { n: "05", title: "Destruction", text: "Traitement raisonné adapté à l'espèce et à l'emplacement du nid." },
  { n: "06", title: "Vérification", text: "Contrôle de l'efficacité du traitement. Intervention garantie." },
];

export const WHY = [
  { title: "Intervention rapide", text: "7J/7, week-ends et jours fériés inclus, sur Toulouse et sa région." },
  { title: "Agréé Certibiocide", text: "Technicien certifié, produits agréés et traitements raisonnés conformes." },
  { title: "Devis gratuit", text: "Estimation transparente par téléphone. Tarif fixe, sans surprise à l'arrivée." },
  { title: "Intervention garantie", text: "Nous garantissons l'efficacité de notre traitement sur le nid traité." },
  { title: "130+ communes", text: "Haute-Garonne (31) et Gers (32), de Toulouse à toute la métropole." },
  { title: "Traitements raisonnés", text: "Des méthodes respectueuses, ciblées sur le nuisible et son nid." },
];

export const PRICING = [
  {
    title: "Nid standard",
    price: "95€",
    unit: "de 0 à 25 mètres",
    featured: true,
    points: ["Guêpes ou frelons", "Accès sol, toiture, volet, haie", "Tarif fixe tout compris", "Intervention garantie"],
  },
  {
    title: "Frelon asiatique en hauteur",
    price: "Sur devis",
    unit: "canopée · grande hauteur",
    featured: false,
    points: ["Nid sphérique en hauteur", "Perche télescopique / matériel adapté", "Devis gratuit immédiat", "Signalement espèce invasive"],
  },
  {
    title: "Invasion / traitement",
    price: "Sur devis",
    unit: "toiture ou terrasse",
    featured: false,
    points: ["Invasion de guêpes", "Traitement de surface ciblé", "Évaluation gratuite par téléphone", "Traitements raisonnés"],
  },
];

export const FAQ = [
  {
    q: "Combien coûte une destruction de nid de guêpes ou de frelons ?",
    a: "Notre tarif débute à 95€ pour un nid situé entre 0 et 25 mètres, guêpes ou frelons. Les cas particuliers (invasion de guêpes en toiture ou terrasse, frelon asiatique en grande hauteur) font l'objet d'un devis gratuit par téléphone.",
  },
  {
    q: "En combien de temps intervenez-vous ?",
    a: "Nous intervenons rapidement, 7 jours sur 7, souvent le jour même sur Toulouse et sa région. En cas d'urgence (personne allergique, lieu public), votre demande est priorisée.",
  },
  {
    q: "Les pompiers détruisent-ils encore les nids ?",
    a: "Non, sauf danger vital immédiat. Les pompiers n'interviennent plus pour les nids de guêpes et frelons. Il faut faire appel à un professionnel agréé comme TGF.",
  },
  {
    q: "La destruction d'un nid de frelons asiatiques est-elle obligatoire ?",
    a: "Le frelon asiatique (Vespa velutina) est classé espèce exotique envahissante. Sa destruction est fortement recommandée par les autorités, et la lutte est coordonnée au niveau régional en Occitanie.",
  },
  {
    q: "Comment savoir si c'est un nid de guêpes ou de frelons ?",
    a: "Les nids de guêpes sont gris, en forme de ballon, sous un toit ou dans un coffre de volet. Les frelons asiatiques construisent de gros nids sphériques en hauteur. Envoyez-nous une photo par SMS, nous identifions l'espèce gratuitement.",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous intervenons sur toute la région toulousaine (Haute-Garonne 31) ainsi que dans le département du Gers (32), soit plus de 130 communes.",
  },
  {
    q: "Êtes-vous agréé ?",
    a: "Oui. TGF est agréé Certibiocide (SIRET 893 664 557 00012). Nous appliquons des traitements raisonnés, conformes à la réglementation.",
  },
];

// Videos — placeholders. Remplacez youtubeId par l'identifiant YouTube réel.
export const VIDEOS = [
  { title: "Destruction d'un nid de frelons asiatiques", youtubeId: "" },
  { title: "Nid de guêpes sous toiture", youtubeId: "" },
  { title: "Frelon européen dans une charpente", youtubeId: "" },
  { title: "Intervention en hauteur à la perche", youtubeId: "" },
];

// Red map pins — positions (% of the 1024 France SVG viewBox) computed from real
// GPS coordinates calibrated on the map's measured bounding box (incl. Corsica).
export const MAP_PINS = [
  { city: "Toulouse", x: 37.3, y: 69.8, major: true },
  { city: "Blagnac", x: 37.0, y: 69.5 },
  { city: "Colomiers", x: 36.6, y: 69.7 },
  { city: "Tournefeuille", x: 36.7, y: 70.0 },
  { city: "Cugnaux", x: 36.7, y: 70.4 },
  { city: "Muret", x: 36.6, y: 71.1 },
  { city: "Balma", x: 37.6, y: 69.7 },
  { city: "L'Union", x: 37.5, y: 69.3 },
  { city: "Castanet-Tolosan", x: 37.6, y: 70.6 },
  { city: "Fronton", x: 36.9, y: 67.7 },
  { city: "Revel", x: 40.6, y: 71.1 },
  { city: "Grenade", x: 36.4, y: 68.3 },
  { city: "Auch (Gers)", x: 32.1, y: 69.4 },
  { city: "Saint-Gaudens", x: 33.0, y: 74.3 },
];

export const CITIES = [
  "Aucamville","Aureville","Aussonne","Auterive","Auzeville-Tolosane","Auzielle","Ayguesvives",
  "Balma","Baziège","Beaupuy","Beauzelle","Bessières","Blagnac","Bouloc","Bourg-Saint-Bernard",
  "Brax","Bretx","Bruguières","Buzet-sur-Tarn","Cadours","Caignac","Calmont","Cambiac","Caraman",
  "Castanet-Tolosan","Castelginest","Castelmaurou","Castelnau-d'Estrétefonds","Cépet",
  "Clermont-le-Fort","Colomiers","Cornebarrieu","Cox","Cugnaux","Daux","Deyme","Donneville",
  "Drémil-Lafage","Drudas","Escalquens","Espanès","Fenouillet","Fonbeauzard","Fonsorbes",
  "Fourquevaux","Fronton","Gagnac-sur-Garonne","Garac","Gardouch","Gargas","Garidech","Goyrans",
  "Gragnague","Gratentour","Grenade","Le Grès","Issus","Labastide-Saint-Sernin","Labège",
  "Lacroix-Falgarde","Lagarde","Lanta","Lapeyrouse-Fossat","Laréole","Larra","Launac","Launaguet",
  "Lauzerville","Lavalette","Léguevin","Lespinasse","Lévignac","Lux","Mauvaisin","Menville",
  "Mérenvielle","Mervilla","Merville","Mondonville","Mondouzil","Monestrol","Mons",
  "Montaigut-sur-Save","Montgiscard","Montpitol","Montrabé","Nailloux","Noueilles","Ondes",
  "Paulhac","Péchabou","Pechbonnieu","Pechbusque","Pelleport","Pibrac","Pin-Balma","Pompertuzat",
  "Puysségur","Quint-Fonsegrives","Ramonville-Saint-Agne","Rebigue","Revel","Roques",
  "Rouffiac-Tolosan","Roumens","Saint-Alban","Saint-Geniès-Bellevue","Saint-Germier","Saint-Jean",
  "Saint-Jean-Lherm","Saint-Jory","Saint-Léon","Saint-Loup-Cammas","Saint-Orens-de-Gameville",
  "Saint-Paul-sur-Save","Saint-Sauveur","Saint-Vincent","Sainte-Foy-d'Aigrefeuille",
  "La Salvetat-Lauragais","La Salvetat-Saint-Gilles","Saussens","Seilh","Thil","Toulouse",
  "Tournefeuille","L'Union","Vacquiers","Verfeil","Vieille-Toulouse","Vieillevigne",
  "Vigoulet-Auzil","Villeneuve-lès-Bouloc","Villeneuve-Tolosane","Villenouvelle",
];
