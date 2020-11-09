module.exports = {
        '/':[
            {
                title: '测试菜单',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                   ['/bedrock-edition/test.md','子菜单1'],
                    ['/bedrock-edition/plugins/plugin.md','插件']

                ]
            },
            {
                title: '测试菜单2',
                collapsable: false,
                children: [
                    ['README.md', '子菜单1']
                ]
            }
        ]
};
