## 前言
基于 [docsify](https://docsify.js.org/#/) 做了一些修改：
* 代码高亮加入行号支持，同时把 Prism 支持的语言都打包加进来了。
* 左侧导航栏加入了类似于 GitBook 的标题索引，可以设置 `showLevel: false` 来关闭索引。
* 页面支持生成 toc 目录，在需要生成目录的地方加入 `<!-- toc -->` 即可，可以通过 `tocLevel: 3` 来设置生成目录的最小标题级别。
* 对样式做了一些修改。

[template](template/) 文件夹中是模版文件，包含了当前的更改以及一些其他的插件，可以直接下载使用。更多的使用方法可以参考 [官网](https://docsify.js.org/)



## Change
* Add line number for highlight code.
* Add number index for sidebar.
* Add toc auto generation for markdown file.
* Change css style.

