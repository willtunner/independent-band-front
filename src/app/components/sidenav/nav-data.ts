import { INavbarData } from './helper';
export const navbarData: INavbarData[] = [

    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Home'
    },
    {
        routeLink: 'products',
        icon: 'fal fa-headphones',
        label: 'Products',
        items: [
            {
                routeLink: "products/level1.1",
                label: 'Level 1.1',
                items: [
                    {
                        routeLink: "products/level2.1",
                        label: 'Level 2.1'
                    },
                    {
                        routeLink: "products/level2.2",
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: "products/level3.1",
                                label: 'Level 3.1'
                            },
                            {
                                routeLink: "products/level3.2",
                                label: 'Level 3.2'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Bandas',
        items: [
            {
                routeLink: "statistics/list",
                label: 'Procurar bandas'
            },
            {
                routeLink: 'statistics/create',
                label: 'Cadastrar banda'
            }
        ]
    },
    {
        routeLink: 'coupens',
        icon: 'fa fa-heart',
        label: 'Favoritos',
        items: [
            {
                routeLink: "coupens/list",
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-envelope',
        label: 'Email'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        //expanded: true,
        items: [
            {
                routeLink: "coupens/list",
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    }

];