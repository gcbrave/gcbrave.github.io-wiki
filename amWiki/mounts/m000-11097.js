if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m000']=[{"name":"01-Markdown快速开始.md","path":"000-Markdown/01-Markdown快速开始.md","content":"# Markdown 快速开始\n\n>1. [简介](#简介 \"简介\")\n1. [语法快速入门](#语法快速入门 \"语法快速入门\")\n    1. [【标题】](#【标题】 \"【标题】\")\n    1. [【修辞和强调】](#【修辞和强调】 \"【修辞和强调】\")\n    1. [【删除线】](#【删除线】 \"【删除线】\")\n    1. [【列表】](#【列表】 \"【列表】\")\n    1. [【链接】](#【链接】 \"【链接】\")\n    1. [【图片】](#【图片】 \"【图片】\")\n    1. [【代码】](#【代码】 \"【代码】\")\n    1. [【代码段】](#【代码段】 \"【代码段】\")\n    1. [【表格】](#【表格】 \"【表格】\")\n    1. [【引用】](#【引用】 \"【引用】\")\n    1. [【分割线】](#【分割线】 \"【分割线】\")\n    1. [【换行】](#【换行】 \"【换行】\")\n    1. [【html】](#【html】 \"【html】\")\n1. [研究更多 markdown 语法详细细节](#研究更多 markdown 语法详细细节 \"研究更多 markdown 语法详细细节\")\n\n\n## 简介\nMarkdown是为那些需要经常码字或者进行文字排版的、对码字手速和排版顺畅度有要求的人群设计的，他们希望用键盘把文字内容啪啪啪地打出来后就已经排版好了，最好从头到尾都不要使用鼠标。  \n这些人包括经常需要写文档的码农、博客写手、网站小编、出版业人士等等。  \nMarkdown的语法简洁明了、学习容易，得到了许多著名网络平台的支持，例如代码托管平台[Github](https://github.com/)、博客平台[WordPress](https://cn.wordpress.org/)等等。  \n\n## 语法快速入门\n\n### <font color=#C71585>【标题】</font>\n在行首插入1到6个#，对应1到6阶标题\n    # 这是 H1\n    ## 这是 H2\n    ### 这是 H3\n    #### 这是 H4\n    ##### 这是 H5\n    ###### 这是 H6\n渲染效果：  \n# 这是 H1\n## 这是 H2\n### 这是 H3\n#### 这是 H4\n##### 这是 H5\n###### 这是 H6\n\n### <font color=#C71585>【修辞和强调】</font>\n使用星号和底线来标记需要强调的区段\n\n    **加粗**\n    __加粗__\n    *斜体*\n    _斜体_\n\n渲染效果：  \n**加粗**  \n__加粗__  \n*斜体*  \n_斜体_  \n\n### <font color=#C71585>【删除线】</font>\n\n    ~~要删掉的内容~~\n\n渲染效果：  \n~~要删掉的内容~~\n\n### <font color=#C71585>【列表】</font>\n**无序列表** 使用星号、加号和减号来做为列表的项目标记\n    * Candy.\n    * Gum.\n    + Booze.\n    * Booze. 长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本  \n    这里是断行-文本长文本长文本长文本  \n    这里是断行-文本长文本长文本长文本\n    - Booze.\n      + 嵌套\n      * 嵌套\n\n渲染效果：  \n* Candy.\n* Gum.\n+ Booze.\n* Booze. 长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本  \n这里是断行-文本长文本长文本长文本  \n这里是断行-文本长文本长文本长文本\n- Booze.\n  + 嵌套\n  * 嵌套\n\n**有序列表** 则是使用一般的数字接着一个英文句点作为项目标记\n    1. Red\n    50. Green\n    1000. Blue\n\n渲染效果：  \n1. Red\n50. Green\n1000. Blue\n\n### <font color=#C71585>【链接】</font>\n在方括号后面用圆括号接上链接\n\n    这是一个[链接显示文本](http://www.baidu.com \"链接title文本\")\n\n渲染效果：  \n这是一个[链接显示文本](http://www.baidu.com \"链接title文本\")\n\n### <font color=#C71585>【图片】</font>\n图片的语法和链接很像\n\n    ![alt文本](amWiki/images/logo.png \"Title\")\n\n渲染效果：  \n![alt文本](amWiki/images/logo.png \"Title\")\n\n### <font color=#C71585>【代码】</font>\n使用反引号 \\` 来标记代码区段\n\n    我是`code`，`<div>division</div>`\n\n渲染效果：  \n我是`code`，`<div>division</div>`\n\n### <font color=#C71585>【代码段】</font>\n如果要建立一个已经格式化好的代码区块，只要每行都缩进 4 个空格或是一个 tab 就可以了\n\n        var name = \'Candy\'\n\n渲染效果：  \n\n    var name = \'Candy\'\n\n### <font color=#C71585>【表格】</font>\n使用竖线分割内容，且同时使用“---”与“:”指定对齐方式\n\n    | Header01 | Header02 | Header03\n    | -------- | :------: | ---:\n    | 默认 | 居中 | 右\n\n渲染效果：  \n\n| Header01 | Header02 | Header03\n| -------- | :------: | ---:\n| 默认 | 居中 | 右\n\n### <font color=#C71585>【引用】</font>\n只需要在文本前加入 > 这种尖括号（大于号）即可\n\n    >这里是一段引用\n\n渲染效果：  \n>这里是一段引用\n\n### <font color=#C71585>【分割线】</font>\n只需要三个 \\- 号\n\n    ---\n\n渲染效果：  \n\n---\n\n### <font color=#C71585>【换行】</font>\n只需要两个以上的空格然后回车\n\n    我是首行  \n    我换行了\n\n渲染效果：  \n我是首行  \n我换行了\n\n### <font color=#C71585>【html】</font>\n可以直接在文档里书写 HTML，不需要额外标注这是 HTML\n\n    <div>division</div>\n\n渲染效果：  \n<div>division</div>\n\n\n## 研究更多 markdown 语法详细细节\n\n- [创始人 John Gruber 的 Markdown 语法说明](http://daringfireball.net/projects/markdown/syntax)  \n- [Markdown 中文版语法说明](http://wowubuntu.com/markdown/)\n","timestamp":1608878274880},{"name":"02-amWiki与语法高亮.md","path":"000-Markdown/02-amWiki与语法高亮.md","content":"# amWiki 与语法高亮\n\namWiki使用 [highlight.js](https://github.com/isagalaev/highlight.js) 进行预语法高亮渲染，它能对多达一百多种语言、样式提供语法高亮解析  \n使用两组每组三个反引号分单独两行将代码包围起来，并在第一组反引号后写上语言类型即可使用语法高亮，例如：\n    ```js\n    //some js code here\n    ```\n\n## javascript / js 代码\n普通代码块效果：  \n```\n//发送验证码\nfunction cd(num) {\n    $(\'#code\').val(num + \'秒后可重发\');\n    setTimeout(function() {\n        if (num - 1 >= 0) {\n            cd(num - 1);\n        } else {\n            $(\'#code\').removeClass(\'bg-gray\').prop(\'disabled\', false).val(\'重新发送验证码\');\n        }\n    },\n    1000);\n}\n```\n```\n{\n    \"state\": {\n        \"code\": 10200,                   //code状态码\n        \"msg\": \"ok\"                      //状态描述\n    },\n    \"data\": {\n        \"team_num\": 13,                  //队伍数\n        \"position\": \"海珠区新港中路\"      //位置\n    }\n}\n```\n\n添加 `js`、`javascript` 标记后的效果：\n```javascript\n//发送验证码\nfunction cd(num) {\n    $(\'#code\').val(num + \'秒后可重发\');\n    setTimeout(function() {\n        if (num - 1 >= 0) {\n            cd(num - 1);\n        } else {\n            $(\'#code\').removeClass(\'bg-gray\').prop(\'disabled\', false).val(\'重新发送验证码\');\n        }\n    },\n    1000);\n}\n```\n```js\n{\n    \"state\": {\n        \"code\": 10200,                   //code状态码\n        \"msg\": \"ok\"                      //状态描述\n    },\n    \"data\": {\n        \"team_num\": 13,                  //队伍数\n        \"position\": \"海珠区新港中路\"      //位置\n    }\n}\n```\namWiki对javascript代码片段做了再次增强，可以点击代码块右上角按钮隐藏/显示注释  \n当注释处于隐藏状态时不会被复制，比较适合模拟返回json数据的接口时直接拷贝（json不允许注释）\n\n## Html 代码\n普通代码段效果：  \n```\n<body>\n    <div class=\"loading\"><img src=\"/assets/images/loading.gif\"></div>\n    <header>some text</header>\n    <script type=\"text/javascript\" src=\"/assets/js/jquery-2.1.4.min.js\"></script>\n</body>\n```\n添加 `html` 标记后的效果：\n```html\n<body>\n    <div class=\"loading\"><img src=\"/assets/images/loading.gif\"></div>\n    <header>some text</header>\n    <script type=\"text/javascript\" src=\"/assets/js/jquery-2.1.4.min.js\"></script>\n</body>\n```\n\n## css 代码\n普通代码段效果：\n```\n/* 紧凑 */\nhtml,body{display:block;width:100%;height:100%;min-width:320px;}\na,img{-webkit-touch-callout:none;}\n/* 展开 */\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ntextarea {\n    -webkit-appearance: none;\n}\n```\n\n添加 `css` 标记后的效果：\n```css\n/* 紧凑 */\nhtml,body{display:block;width:100%;height:100%;min-width:320px;}\na,img{-webkit-touch-callout:none;}\n/* 展开 */\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ntextarea {\n    -webkit-appearance: none;\n}\n```\n\n## php 代码\n普通代码段效果：\n```\nprivate function addQuestData($data, $filing_id)\n  {\n    $quest_num = $data[\'status\'] == 10 ? 1 : 2;\n      $where = [\n        [\'user_filing_id\', \'=\', $filing_id],\n        [\'project_id\', \'=\', $data[\'project_id\']],\n        [\'mobile\',\'=\', $data[\'mobile\']],\n        [\'quest_num\', \'=\', $quest_num]\n      ];\n  }\n```\n添加 `php` 标记后的效果：\n```php\nprivate function addQuestData($data, $filing_id)\n  {\n    $quest_num = $data[\'status\'] == 10 ? 1 : 2;\n      $where = [\n        [\'user_filing_id\', \'=\', $filing_id],\n        [\'project_id\', \'=\', $data[\'project_id\']],\n        [\'mobile\',\'=\', $data[\'mobile\']],\n        [\'quest_num\', \'=\', $quest_num]\n      ];\n  }\n```\n\n## sql 代码\n普通代码段效果：\n```\nSELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber\n```\n添加 `sql` 标记后的效果：\n```sql\nSELECT Company, OrderNumber FROM Orders ORDER BY Company, OrderNumber\n```\n\n## java 代码\n普通代码段效果：\n```\npublic class Test {\n   public static void main(String args[]) {\n      int x = 10;\n      while( x < 20 ) {\n         System.out.print(\"value of x : \" + x );\n         x++;\n         System.out.print(\"\\n\");\n      }\n   }\n}\n```\n添加 `java` 标记后的效果：\n```java\npublic class Test {\n   public static void main(String args[]) {\n      int x = 10;\n      while( x < 20 ) {\n         System.out.print(\"value of x : \" + x );\n         x++;\n         System.out.print(\"\\n\");\n      }\n   }\n}\n```\n","timestamp":1608878274880},{"name":"03-amWiki与流程图.md","path":"000-Markdown/03-amWiki与流程图.md","content":"# amWiki 与流程图\n\namWiki 使用 [flowchart.js](https://github.com/adrai/flowchart.js) 进行流程图渲染，它是一款将文本表达式绘制为简单的 svg 流程图的图形库  \n流程图代码块和语法高亮类似，不过类型声明须用 `flow` 关键字\n    ```flow\n    //your flow text here\n    ```\n\n## 流程图样例\n代码：\n\n    ```flow\n    st=>start: Start :>https://amwiki.xf09.net[blank]\n    e=>end: End :>https://amwiki.xf09.net[blank]\n    op1=>operation: My Operation\n    op2=>operation: Stuff\n    sub1=>subroutine: My Subroutine\n    cond=>condition: Yes or No? :>https://amwiki.xf09.net[blank]\n    c2=>condition: Good idea\n    io=>inputoutput: catch something...\n\n    st->op1(right)->cond\n    cond(yes, right)->c2\n    cond(no)->sub1(left)->op1\n    c2(yes)->io->e\n    c2(no)->op2->e\n    ```\n效果：\n\n```flow\nst=>start: Start :>https://amwiki.xf09.net[blank]\ne=>end: End :>https://amwiki.xf09.net[blank]\nop1=>operation: My Operation\nop2=>operation: Stuff\nsub1=>subroutine: My Subroutine\ncond=>condition: Yes or No? :>https://amwiki.xf09.net[blank]\nc2=>condition: Good idea\nio=>inputoutput: catch something...\n\nst->op1(right)->cond\ncond(yes, right)->c2\ncond(no)->sub1(left)->op1\nc2(yes)->io->e\nc2(no)->op2->e\n```\n\n## 流程图语法介绍\n流程图语法分两个部分，一个是声明元素，一个是定义流程\n\n### 声明元素\n语法：\n\n    tag=>type: content :>url\n\n1. `tag` 设置元素名称\n2. `=>` 元素定义符\n2. `type:` 设置元素类型，共分6种：\n    - **start**：开始，圆角矩形\n    - **end**：结束，圆角矩形\n    - **operation**：操作/行动方案，普通矩形\n    - **subroutine**：子主题/模块，双边线矩形\n    - **condition**：条件判断/问题审核，菱形\n    - **inputoutput**：输入输出，平行四边形\n3. `content` 设置元素显示内容，中英均可\n4. `:>url` 设置元素连接，可选，后接 [blank] 可以新建窗口打开\n\n提示：注意空格，`=>` 前后都不能接空格；`type:` 后必须接空格；`:>` 是语法标记，中间不能有空格\n\n### 定义流程\n语法：\n\n    tag1(branch,direction)->tag2\n\n1. `->` 流程定义符，连接两个元素\n2. `branch` 设置 condition 类型元素的两个分支，有 `yes`/`no` 两个值，其他元素无效\n3. `direction` 定义流程走线方向，有 `left`/`right`/`top`/`bottom` 四个值，所有元素有效，此项配置可选 (ps:此属性容易造成渲染 bug)  \n\n小提示：\n- 继续注意空格，`->` 前后都不能有空格\n- 由于 condition 类型有两个分支，我们一般遇到 condition 元素就换行书写，比如：\n        st->op1-c2\n        c2(yes)->io->e\n        c2(no)->op2->e\n","timestamp":1608878274880},{"name":"05-Atom对Markdown的原生支持.md","path":"000-Markdown/05-Atom对Markdown的原生支持.md","content":"# Atom 编辑器对 Markdown 的原生支持\n\nAtom 是 Github 开发的开源跨平台的编辑器，原生支持编辑 Markdown 文档\n\n## 自动完成 Markdown 语法标记\n\n### 代码段效果-code\n输入 `c + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-2c594bb9.png)\n\n### 粗体效果-bold\n输入 `b + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-8620325c.png)\n\n### 斜体效果-italic\n输入 `i + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-0e8a6768.png)\n\n### 链接效果-link\n输入 `l + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-5bd90b0f.png)\n\n### 图片效果-img\n输入 `im + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-e03a0fc8.png)\n\n### 表格效果-table\n输入 `ta + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-fbed2544.png)\n\n<!--\n### todo效果-list\n输入`t + Enter`\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-01a27e09.png)\n-->\n\n## 自动补齐二次单词输入\n在第二次输入时，单词可以自动识别与补齐，回车即可完成输入\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-efba45f0.png)\n\n## 内置 Markdown 即时预览插件\n编辑 Markdown 文档时，使用快捷键 `ctrl + shift + m` 即可在窗口右侧打开 Atom 内置的 markdown-preview 即时预览模块\n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/13-75213ccd.png)\n","timestamp":1608878274880}]