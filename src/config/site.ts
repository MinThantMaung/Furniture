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
                    href: '/blog',
                },
                {
                    title: 'About Us',
                    href: '/about',
                },
            ],
        }
    ]
}