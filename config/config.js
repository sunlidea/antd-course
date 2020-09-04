export default {
    singular: true,
    plugins: [
        [
            "umi-plugin-react",
            {
                antd: true,
                dva: true,
            },
        ],
    ],
    routes: [
        {
            path: "/",
            component: "../layout",
            routes: [
                {
                    path: "/",
                    component: "Helloworld",
                },
                {
                    path: "/helloworld",
                    component: "Helloworld",
                },
                {
                    path: "puzzlecards",
                    component: "./puzzlecards",
                },
                {
                    path: "/dashboard",
                    routes: [
                        { path: "/dashboard/analysis", component: "Dashboard/Analysis" },
                        { path: "/dashboard/monitor", component: "Dashboard/Monitor" },
                        { path: "/dashboard/workplace", component: "Dashboard/Workplace" },
                    ],
                },
                {
                    path: 'list',
                    component: './list'
                }
            ],
        },
    ],
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
};
