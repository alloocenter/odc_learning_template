/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Tableau de Bord',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link    : '/dashboards',
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'gestion-personnel',
        title   : 'Gestion du Personnel',
        type    : 'collapsable',
        icon    : 'heroicons_outline:users',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'personnels.liste',
                title: 'Liste du Personnel',
                type : 'basic',
                link : '/personnels/liste',
                roles: 'ADMIN, RH'
            },
            // {
            //     id   : 'personnels.ajouter',
            //     title: 'Ajouter Employé',
            //     type : 'basic',
            //     link : '/personnels/ajouter',
            //     roles: 'ADMIN, RH'
            // },
              {
                id   : 'personnels.departements',
                title: 'Departements',
                type : 'basic',
                link : '/personnels/departements',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'personnels.fiches',
                title: 'Fiches Employés',
                type : 'basic',
                link : '/personnels/fiches',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'personnels.conger',
                title: 'Demander un congé',
                type : 'basic',
                link : '/personnels/conges',
                roles: 'ADMIN, RH, EMPLOYE'
            },
        ]
    },
    {
        id      : 'gestion-carrieres',
        title   : 'Gestion des Carrières',
        type    : 'collapsable',
        icon    : 'heroicons_outline:arrow-trending-up',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'carrieres.affectations',
                title: 'Affectations',
                type : 'basic',
                link : '/carrieres/affectations',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'carrieres.promotions',
                title: 'Promotions',
                type : 'basic',
                link : '/carrieres/promotions',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'carrieres.retraites',
                title: 'Retraites',
                type : 'basic',
                link : '/carrieres/retraites',
                roles: 'ADMIN, RH'
            }
        ]
    },
    {
        id      : 'performances',
        title   : 'Performances',
        type    : 'collapsable',
        icon    : 'heroicons_outline:chart-bar',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'performances.entretiens',
                title: 'Entretiens',
                type : 'basic',
                link : '/performances/entretiens',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'performances.contrats',
                title: 'Contrats',
                type : 'basic',
                link : '/performances/contrats',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'performances.indicateurs',
                title: 'Indicateurs',
                type : 'basic',
                link : '/performances/indicateurs',
                roles: 'ADMIN, RH'
            }
        ]
    },
    {
        id      : 'mobilite',
        title   : 'Mobilité',
        type    : 'collapsable',
        icon    : 'heroicons_outline:arrows-right-left',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'mobilite.horizontale',
                title: 'Mobilité Horizontale',
                type : 'basic',
                link : '/mobilite/horizontale',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'mobilite.verticale',
                title: 'Mobilité Verticale',
                type : 'basic',
                link : '/mobilite/verticale',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'mobilite.succession',
                title: 'Plans de Succession',
                type : 'basic',
                link : '/mobilite/succession',
                roles: 'ADMIN, RH'
            }
        ]
    },
    {
        id      : 'recompenses-sanctions',
        title   : 'Récompenses & Sanctions',
        type    : 'collapsable',
        icon    : 'heroicons_outline:trophy',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'recompenses.primes',
                title: 'Primes',
                type : 'basic',
                link : '/recompenses/primes',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'recompenses.aides',
                title: 'Aides Sociales',
                type : 'basic',
                link : '/recompenses/aides',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'recompenses.sanctions',
                title: 'Sanctions',
                type : 'basic',
                link : '/recompenses/sanctions',
                roles: 'ADMIN, RH'
            }
        ]
    },
    {
        id      : 'formation',
        title   : 'Formation',
        type    : 'collapsable',
        icon    : 'heroicons_outline:academic-cap',
        roles   : 'ADMIN, RH, EMPLOYE',
        children: [
            {
                id   : 'formation.plan',
                title: 'Plan de Formation',
                type : 'basic',
                link : '/formation/plan',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'formation.sessions',
                title: 'Sessions',
                type : 'basic',
                link : '/formation/sessions',
                roles: 'ADMIN, RH, EMPLOYE'
            },
            {
                id   : 'formation.auto-evaluation',
                title: 'Auto-évaluation',
                type : 'basic',
                link : '/formation/auto-evaluation',
                roles: 'EMPLOYE'
            }
        ]
    },
    {
        id      : 'statistiques',
        title   : 'Statistiques RH',
        type    : 'collapsable',
        icon    : 'heroicons_outline:chart-pie',
        roles   : 'ADMIN, RH',
        children: [
            {
                id   : 'statistiques.pyramide',
                title: 'Pyramide des Âges',
                type : 'basic',
                link : '/statistiques/pyramide',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'statistiques.repartition',
                title: 'Répartition',
                type : 'basic',
                link : '/statistiques/repartition',
                roles: 'ADMIN, RH'
            },
            {
                id   : 'statistiques.rapports',
                title: 'Rapports',
                type : 'basic',
                link : '/statistiques/rapports',
                roles: 'ADMIN, RH'
            }
        ]
    }
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Tableau de Bord',
        tooltip : 'Tableau de Bord',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'gestion-personnel',
        title   : 'Personnel',
        tooltip : 'Gestion du Personnel',
        type    : 'aside',
        icon    : 'heroicons_outline:users',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'gestion-carrieres',
        title   : 'Carrières',
        tooltip : 'Gestion des Carrières',
        type    : 'aside',
        icon    : 'heroicons_outline:trending-up',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'performances',
        title   : 'Performances',
        tooltip : 'Performances',
        type    : 'aside',
        icon    : 'heroicons_outline:chart-bar',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'mobilite',
        title   : 'Mobilité',
        tooltip : 'Mobilité',
        type    : 'aside',
        icon    : 'heroicons_outline:arrows-right-left',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'recompenses-sanctions',
        title   : 'Récompenses',
        tooltip : 'Récompenses & Sanctions',
        type    : 'aside',
        icon    : 'heroicons_outline:award',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'formation',
        title   : 'Formation',
        tooltip : 'Formation',
        type    : 'aside',
        icon    : 'heroicons_outline:academic-cap',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'statistiques',
        title   : 'Statistiques',
        tooltip : 'Statistiques RH',
        type    : 'aside',
        icon    : 'heroicons_outline:chart-pie',
        children: [],
        roles   : 'ADMIN, RH'
    }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'TABLEAU DE BORD',
        type    : 'group',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'gestion',
        title   : 'GESTION',
        type    : 'group',
        children: []
    },
    {
        id      : 'gestion-personnel',
        title   : 'Personnel',
        type    : 'aside',
        icon    : 'heroicons_outline:users',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'gestion-carrieres',
        title   : 'Carrières',
        type    : 'aside',
        icon    : 'heroicons_outline:trending-up',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'performances',
        title   : 'Performances',
        type    : 'aside',
        icon    : 'heroicons_outline:chart-bar',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'mobilite',
        title   : 'Mobilité',
        type    : 'aside',
        icon    : 'heroicons_outline:arrows-right-left',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'recompenses-sanctions',
        title   : 'Récompenses',
        type    : 'aside',
        icon    : 'heroicons_outline:award',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'formation',
        title   : 'Formation',
        type    : 'aside',
        icon    : 'heroicons_outline:academic-cap',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'statistiques',
        title   : 'Statistiques',
        type    : 'aside',
        icon    : 'heroicons_outline:chart-pie',
        children: [],
        roles   : 'ADMIN, RH'
    }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Tableau de Bord',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'gestion-personnel',
        title   : 'Personnel',
        type    : 'group',
        icon    : 'heroicons_outline:users',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'gestion-carrieres',
        title   : 'Carrières',
        type    : 'group',
        icon    : 'heroicons_outline:arrow-trending-up',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'performances',
        title   : 'Performances',
        type    : 'group',
        icon    : 'heroicons_outline:chart-bar',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'mobilite',
        title   : 'Mobilité',
        type    : 'group',
        icon    : 'heroicons_outline:arrows-right-left',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'recompenses-sanctions',
        title   : 'Récompenses',
        type    : 'group',
        icon    : 'heroicons_outline:trophy',
        children: [],
        roles   : 'ADMIN, RH'
    },
    {
        id      : 'formation',
        title   : 'Formation',
        type    : 'group',
        icon    : 'heroicons_outline:academic-cap',
        children: [],
        roles   : 'ADMIN, RH, EMPLOYE'
    },
    {
        id      : 'statistiques',
        title   : 'Statistiques',
        type    : 'group',
        icon    : 'heroicons_outline:chart-pie',
        children: [],
        roles   : 'ADMIN, RH'
    }
];
