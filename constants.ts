import type { CvData } from './types';

export const cvData: CvData = {
  name: 'Sirine SAMOUD',
  title: 'Responsable paie et administration du personnel',
  contact: {
    location: 'Ain Zaghouan -Tunis',
    phone: '+216 51 383 655',
    email: 'sirine.samoud1@gmail.com',
    license: 'Permis B',
    photoUrl: './photo.jpg',
  },
  profile: 'Professionnelle expérimentée en gestion de la paie et administration du personnel, avec une solide connaissance du droit social tunisien. Reconnue pour ma rigueur, mon sens de l\'organisation et ma capacité à gérer des projets complexes en toute autonomie. Je cherche à mettre mes compétences au service d\'une entreprise dynamique.',
  languages: [
    { name: 'Arabe', level: 100 },
    { name: 'Français', level: 100 },
    { name: 'Anglais', level: 75 },
  ],
  skills: [
    {
      title: 'Logiciels',
      items: ['SAGE PAIE', 'CEGID', 'TALENTIA', 'Microsoft Office (Word, Excel, PowerPoint)'],
    },
    {
      title: 'Compétences Techniques',
      items: ['Gestion de la paie', 'Déclarations sociales et fiscales', 'Administration du personnel', 'Droit social', 'Gestion des contrats de travail'],
    },
    {
      title: 'Qualités Personnelles',
      items: ['Rigueur et organisation', 'Confidentialité', 'Bon relationnel', 'Esprit d\'analyse', 'Autonomie'],
    },
  ],
  education: [
    {
      year: '2012',
      institution: 'Faculté des Sciences Économiques et de Gestion de Tunis (FSEGT)',
      description: 'Mastère professionnel en Ingénierie des Ressources Humaines',
    },
    {
      year: '2010',
      institution: 'Institut Supérieur de Gestion de Tunis (ISG)',
      description: 'Licence Appliquée en Gestion des Ressources Humaines',
    },
  ],
  experience: [
    {
      date: 'Janvier 2018 - Présent',
      company: 'Société Générale de Distribution (SGD)',
      title: 'Responsable paie et administration du personnel',
      responsibilities: [
        'Supervision et contrôle de la paie pour 300+ employés.',
        'Gestion des déclarations sociales et fiscales (CNSS, impôts sur le revenu).',
        'Administration du personnel de l\'entrée à la sortie (contrats, avenants, soldes de tout compte).',
        'Veille juridique et sociale.',
        'Interlocutrice principale pour les organismes sociaux.',
      ],
    },
    {
      date: 'Mars 2013 - Décembre 2017',
      company: 'Cabinet d\'Expertise Comptable CEC',
      title: 'Gestionnaire de paie',
      responsibilities: [
        'Établissement des bulletins de paie pour un portefeuille de clients variés (PME, artisans).',
        'Préparation et contrôle des déclarations sociales mensuelles et trimestrielles.',
        'Conseil aux clients sur des questions de droit social courant.',
        'Gestion administrative du personnel pour les clients.',
      ],
    },
  ],
  stages: [
    {
      date: 'Juin 2012 - Septembre 2012',
      company: 'Banque Internationale Arabe de Tunisie (BIAT)',
      title: 'Stage de fin d\'études - Département RH',
      responsibilities: [
        'Participation au processus de recrutement.',
        'Contribution à la gestion administrative du personnel.',
        'Mise à jour des dossiers des employés.',
      ],
    },
  ]
};