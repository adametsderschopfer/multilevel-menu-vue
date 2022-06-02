export function getMenuItems()
{
    return [
        {
            id: 0,
            sectionTitle: 'Main menu',

            list: [
                {
                    title: "Show alert",
                    action()
                    {
                        alert('You see alert');
                    }
                },
                {
                    title: "Articles",
                    nextId: 1,
                },
                {
                    title: "Settings",
                    nextId: 3,
                },
            ],
        },
        {
            id: 1,
            sectionTitle: 'Articles',

            list: [
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
            ]
        },
        {
            id: 3,
            sectionTitle: "Settings",

            list: [
                {
                    title: "GetSettingsId",
                    action()
                    {
                        alert('SettingsId: 3');
                    }
                },
                {
                    title: "Video",
                    nextId: 4
                },
            ]
        },
        {
            id: 4,
            sectionTitle: 'Video',

            list: [
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
                {
                    title: "My article for test",
                    link: "/test/1",
                },
                {
                    title: "Article 1 test test",
                    link: "/test/1",
                },
            ],
        }
    ]
}