const links = {
    x:"https://twitter.com/sample",
    github:"https://github.com/sample/furniture",
    githubAccount: "https://github.com/sample",
    discord: "https://discord.com/user/sample",
}

export const siteConfig = {
    name: 'Furniture Shop',
    description: 'A Furniture Shop build with react router',
    mainNav: [
        {
            title: 'Products',
            card:[
                {
                    title: 'Wooden',
                    href: '/products/wooden',
                    description: "Comfortable with Wooden furniture."
                },
                {
                    title: 'Bamboo',
                    href: '/products/bamboo',
                    description: "Build your own Bamboo furniture."
                },
                {
                    title: 'Metal',
                    href: '/products/metal',
                    description: "Buy and latest Metal furniture."
                },
            ],
            menu:[
                {
                    title: 'Services',
                    href: '/services',
                },
                {
                    title: 'Blog',
                    href: '/blogs',
                },
                {
                    title: 'About Us',
                    href: '/about',
                },
            ],
        }
    ],
    footerNav: [
        {
            title: 'Furniture Types',
            items:[
                {
                    title: 'Seating',
                    href: '/types/seating',
                    external: true,
                },
                {
                    title: 'Lying',
                    href: '/types/lying',
                    external: true,
                },
                {
                    title: 'Entertainment',
                    href: '/types/entertainment',
                    external: true,
                },
                {
                    title: 'Tables',
                    href: '/types/tables',
                    external: true,
                },
                {
                    title: 'Storage',
                    href: '/types/storage',
                    external: true,
                },
            ]
        },
        {
            title: 'Help',
            items:[
                {
                    title: 'About',
                    href: '/about',
                    external: false,
                },
                {
                    title: 'Contact',
                    href: '/contact',
                    external: false,
                },
                {
                    title: 'Terms',
                    href: '/terms',
                    external: false,
                },
                {
                    title: 'Privacy',
                    href: '/privacy',
                    external: false,
                },
                {
                    title: 'Storage',
                    href: '/types/storage',
                    external: false,
                },
            ]
        },
        {
            title: 'Social',
            items:[
                {
                    title: 'X',
                    href: links.x,
                    external: true,
                },
                {
                    title: 'Github',
                    href: links.githubAccount,
                    external: true,
                },
                {
                    title: 'Discord',
                    href: links.discord,
                    external: true,
                },
            ]
        },
        {
            title: 'Partner',
            items:[
                {
                    title: 'Shoppy',
                    href: 'https://shoppy.com/',
                    external: true,
                },
                {
                    title: 'Poppy',
                    href: 'https://poppy.com/',
                    external: true,
                },
                {
                    title: 'Talkie',
                    href: 'https://talkie.com/',
                    external: true,
                },
                {
                    title: 'Coffee',
                    href: 'https://coffee.com/',
                    external: true,
                },
            ]
        }
    ]
}