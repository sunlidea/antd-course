export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }],
      ],
    routes: [{
        path: '/',
        component: './HelloWorld',
      }],
};