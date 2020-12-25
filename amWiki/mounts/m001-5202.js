if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"001-Markdown快速开始.md","path":"001-工具/001-Markdown/001-Markdown快速开始.md","content":"# Markdown 快速开始\n\n>1. [简介](#简介 \"简介\")\n1. [语法快速入门](#语法快速入门 \"语法快速入门\")\n    1. [【标题】](#【标题】 \"【标题】\")\n    1. [【修辞和强调】](#【修辞和强调】 \"【修辞和强调】\")\n    1. [【删除线】](#【删除线】 \"【删除线】\")\n    1. [【列表】](#【列表】 \"【列表】\")\n    1. [【链接】](#【链接】 \"【链接】\")\n    1. [【图片】](#【图片】 \"【图片】\")\n    1. [【代码】](#【代码】 \"【代码】\")\n    1. [【代码段】](#【代码段】 \"【代码段】\")\n    1. [【表格】](#【表格】 \"【表格】\")\n    1. [【引用】](#【引用】 \"【引用】\")\n    1. [【分割线】](#【分割线】 \"【分割线】\")\n    1. [【换行】](#【换行】 \"【换行】\")\n    1. [【html】](#【html】 \"【html】\")\n1. [研究更多 markdown 语法详细细节](#研究更多 markdown 语法详细细节 \"研究更多 markdown 语法详细细节\")\n\n\n## 简介\nMarkdown是为那些需要经常码字或者进行文字排版的、对码字手速和排版顺畅度有要求的人群设计的，他们希望用键盘把文字内容啪啪啪地打出来后就已经排版好了，最好从头到尾都不要使用鼠标。  \n这些人包括经常需要写文档的码农、博客写手、网站小编、出版业人士等等。  \nMarkdown的语法简洁明了、学习容易，得到了许多著名网络平台的支持，例如代码托管平台[Github](https://github.com/)、博客平台[WordPress](https://cn.wordpress.org/)等等。  \n\n## 语法快速入门\n\n### <font color=#C71585>【标题】</font>\n在行首插入1到6个#，对应1到6阶标题\n    # 这是 H1\n    ## 这是 H2\n    ### 这是 H3\n    #### 这是 H4\n    ##### 这是 H5\n    ###### 这是 H6\n渲染效果：  \n# 这是 H1\n## 这是 H2\n### 这是 H3\n#### 这是 H4\n##### 这是 H5\n###### 这是 H6\n\n### <font color=#C71585>【修辞和强调】</font>\n使用星号和底线来标记需要强调的区段\n\n    **加粗**\n    __加粗__\n    *斜体*\n    _斜体_\n\n渲染效果：  \n**加粗**  \n__加粗__  \n*斜体*  \n_斜体_  \n\n### <font color=#C71585>【删除线】</font>\n\n    ~~要删掉的内容~~\n\n渲染效果：  \n~~要删掉的内容~~\n\n### <font color=#C71585>【列表】</font>\n**无序列表** 使用星号、加号和减号来做为列表的项目标记\n    * Candy.\n    * Gum.\n    + Booze.\n    * Booze. 长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本  \n    这里是断行-文本长文本长文本长文本  \n    这里是断行-文本长文本长文本长文本\n    - Booze.\n      + 嵌套\n      * 嵌套\n\n渲染效果：  \n* Candy.\n* Gum.\n+ Booze.\n* Booze. 长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本  \n这里是断行-文本长文本长文本长文本  \n这里是断行-文本长文本长文本长文本\n- Booze.\n  + 嵌套\n  * 嵌套\n\n**有序列表** 则是使用一般的数字接着一个英文句点作为项目标记\n    1. Red\n    50. Green\n    1000. Blue\n\n渲染效果：  \n1. Red\n50. Green\n1000. Blue\n\n### <font color=#C71585>【链接】</font>\n在方括号后面用圆括号接上链接\n\n    这是一个[链接显示文本](http://www.baidu.com \"链接title文本\")\n\n渲染效果：  \n这是一个[链接显示文本](http://www.baidu.com \"链接title文本\")\n\n### <font color=#C71585>【图片】</font>\n图片的语法和链接很像\n\n    ![alt文本](amWiki/images/logo.png \"Title\")\n\n渲染效果：  \n![alt文本](amWiki/images/logo.png \"Title\")\n\n### <font color=#C71585>【代码】</font>\n使用反引号 \\` 来标记代码区段\n\n    我是`code`，`<div>division</div>`\n\n渲染效果：  \n我是`code`，`<div>division</div>`\n\n### <font color=#C71585>【代码段】</font>\n如果要建立一个已经格式化好的代码区块，只要每行都缩进 4 个空格或是一个 tab 就可以了\n\n        var name = \'Candy\'\n\n渲染效果：  \n\n    var name = \'Candy\'\n\n### <font color=#C71585>【表格】</font>\n使用竖线分割内容，且同时使用“---”与“:”指定对齐方式\n\n    | Header01 | Header02 | Header03\n    | -------- | :------: | ---:\n    | 默认 | 居中 | 右\n\n渲染效果：  \n\n| Header01 | Header02 | Header03\n| -------- | :------: | ---:\n| 默认 | 居中 | 右\n\n### <font color=#C71585>【引用】</font>\n只需要在文本前加入 > 这种尖括号（大于号）即可\n\n    >这里是一段引用\n\n渲染效果：  \n>这里是一段引用\n\n### <font color=#C71585>【分割线】</font>\n只需要三个 \\- 号\n\n    ---\n\n渲染效果：  \n\n---\n\n### <font color=#C71585>【换行】</font>\n只需要两个以上的空格然后回车\n\n    我是首行  \n    我换行了\n\n渲染效果：  \n我是首行  \n我换行了\n\n### <font color=#C71585>【html】</font>\n可以直接在文档里书写 HTML，不需要额外标注这是 HTML\n\n    <div>division</div>\n\n渲染效果：  \n<div>division</div>\n\n\n## 研究更多 markdown 语法详细细节\n\n- [创始人 John Gruber 的 Markdown 语法说明](http://daringfireball.net/projects/markdown/syntax)  \n- [Markdown 中文版语法说明](http://wowubuntu.com/markdown/)\n","timestamp":1608889252769},{"name":"01-github多账号设置.md","path":"001-工具/002-GitHub/01-github多账号设置.md","content":"## github多账号设置\r\n\r\n> 思路：通过config实现不同账号私钥的引用\r\n\r\n### 步骤：\r\n\r\n- 生成ssh key\r\n- 配置config\r\n- 测试配置\r\n- 使用\r\n\r\n### 生成ssh key\r\n\r\n```shell\r\nssh-keygen -t rsa -C \"youremail@xxx.com\"\r\n```\r\n\r\n回车，命令执行后会提示“Enter file in which to save the key ...”,此时可为key起别名，以示区别，例如：first , second等\r\n\r\n之后一路回车即可。\r\n\r\n查看\r\n\r\n```shell\r\ncd ~/.ssh\r\n```\r\n\r\n公钥和私钥\r\n\r\n形如：first、first.pub、second、second.pub\r\n\r\n在Github中添加SSH Keys (.pub中的内容复制)\r\n\r\n### 配置config\r\n\r\n在 .ssh 下创建config ,\r\n\r\n```\r\ntouch ~/.ssh/config\r\nvim config\r\n```\r\n\r\n添加内容：\r\n\r\n```shell\r\n#first github\r\nHost first.github.com    \r\nHostName github.com    \r\nPreferredAuthentications publickey    \r\nIdentityFile ~/.ssh/first\r\n\r\n#second github\r\nHost second.github.com  \r\nHostName github.com    \r\nPreferredAuthentications publickey    \r\nIdentityFile ~/.ssh/second\r\n```\r\n\r\n### 测试配置\r\n\r\n```\r\nssh -T git@first.github.com\r\n```\r\n\r\n***说明：需先在github中添加ssh keys***\r\n\r\n如果出现Hi xxx!You\'ve ==successfully== authenticated 就说明连接成功。\r\n\r\n### 使用\r\n\r\n- clone\r\n\r\n```shell\r\ngit clone git@first.github.com:username/repo.git\r\n```\r\n\r\n***说明：这里要使用 ssh 地址形式***\r\n\r\n- 提交\r\n\r\n***说明：若要提交的代码为不同目录，通过上一步clone来的，直接在对应目录下add、commit，push即可，因提交是按.git/config中配置的路径来的，所以对于同一代码需提交到不同github下有两种方式***\r\n\r\n方式一：\r\n\r\n```shell\r\ngit remote rm origin\r\ngit remote add origin git@first.github.com:username/repo.git\r\n```\r\n\r\n方式二：\r\n\r\n修改.git/config中[remote \"origin\"]项下的url\r\n\r\n以上。\r\n","timestamp":1608889252769}]