# vite-aliases vite 插件
https://github.com/Subwaytime/vite-aliases

vite-aliases 可以帮助我们自动生成别名：检测你当前目录下包括src在内的所有文件夹，并帮助我们生成别名

vite-aliases 可以帮助我们自动生成别名：
```shell
[
	{
		find: '@',
		replacement: '${your_project_path}/src'
	},
	{
		find: '@assets',
		replacement: '${your_project_path}/src/assets'
	},
	{
		find: '@components',
		replacement: '${your_project_path}/src/components'
	},
	{
		find: '@pages',
		replacement: '${your_project_path}/src/pages'
	},
	{
		find: '@store',
		replacement: '${your_project_path}/src/store'
	},
	{
		find: '@utils',
		replacement: '${your_project_path}/src/utils'
	},
]
```