module.exports = {
	title: "Minecraft文档站",
	description: "",
	dest: "./dist",
	port: "7777",
	head: [["link", { rel: "icon", href: "/logo.gif" }]],
	markdown: {
		lineNumbers: true,
	},
	extraWatchFiles: [
		"./nav.js", // 使用相对路径
		"./sidebar.js", // 使用绝对路径
	],
	/*plugins: {
		"vuepress-plugin-auto-sidebar": {}
	},*/
	themeConfig: {
		nav: require("./nav"),
		sidebar: require("./sidebar"),
		sidebarDepth: 2,
		lastUpdated: "Last Updated",
		searchMaxSuggestoins: 10,
		serviceWorker: {
			updatePopup: {
				message: "New content is available.",
				buttonText: "Refresh",
			},
		},
		editLinks: true,
		editLinkText: "在 GitHub 上编辑此页 ！",
	},
};
