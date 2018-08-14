# Javascript 基础语法练习 - 拼字符串

## 1. 生成收据

我们需要实现一个名为`printReceipt`函数，该函数能够将指定格式的数据作为参数输入，然后在浏览器的控制台中输出收据的文本。

输入格式（样例）：

```javascript
[
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
]
```

其中对'ITEM000003-2'来说，"-"之前的是标准的条形码，"-"之后的是数量，数量会有为小数的可能性。
当我们购买需要称量的物品的时候，会由称量的机器生成此类标签（Tag），收银机负责识别生成收据。


清单内容（样例）：

```
***<没钱赚商店>收据***
名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)
名称：羽毛球，数量：5个，单价：1.00(元)，小计：4.00(元)
名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)
----------------------
总计：21.00(元)
节省：4.00(元)
**********************
```

## 2. 生成待办事项

输入格式（样例）：

```javascript
[
      {name: '吃饭', completed: true},
      {name: '练习', completed: false},
      {name: '锻炼', completed: true},
      {name: '睡觉', completed: false}
    ]
```

待办事项（样例）：
```
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
            <li>
                <div><input type="checkbox" checked="checked"/><label>吃饭</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>练习</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>睡觉</label></div>
                <form><input type="text"/></form>
            </li>
        </ul>
    </section>
    <footer>
        <strong>2</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
```

## 3. 生成电影列表

输入格式（样例）：

```javascript
{
      "shows": [
        {
          "category": "children",
          "description": "<a href='#'>A show</a> about a cake",
          "title": "Strawberry Shortcake",
          "video": "none"
        },
        {
          "category": "children",
          "description": "A show about a ice",
          "title": "Vanilla Ice",
          "video": "none"
        }
      ]
    }
```

电影列表（样例）：
```
<div data-template-chosen="a">
    <div>
        <h1>Upcoming Shows</h1>
        <ul>
            <li><strong>Title:</strong> Strawberry Shortcake</li>
            <li><strong>Description:</strong> <a href="#">A show</a> about a cake</li>
            <li><strong>Video:</strong> none</li>
            <li><strong>Category:</strong> children</li>
        </ul>
        <ul>
            <li><strong>Title:</strong> Vanilla Ice</li>
            <li><strong>Description:</strong> A show about a ice</li>
            <li><strong>Video:</strong> none</li>
            <li><strong>Category:</strong> children</li>
        </ul>
    </div>
</div>
```

## 参考资料
1. [Javascript基础](http://codefordream.com/courses/js_basic/sections)
2. [Javascript初级训练营](http://codefordream.com/courses/js_learning_camps/sections)
3. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
4. [npm 下载安装](https://github.com/npm/npm)
5. [node 下载安装](https://github.com/creationix/nvm)
6. [jasmine用法](http://jasmine.github.io/2.4/introduction.html)

## 答题流程

1. 请用户仔细阅读题目要求和题目描述

2. 在命令行中使用以下命令在用户本地任意目录下clone此题目库

```
git clone repo_of_this_template
```

NOTE：如果提示git命令未找到请先阅读参考资料

3. 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹

```
spec  //测试文件夹
src   //源文件
```

`请在src文件下的main.js文件内实现main函数`

4. 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
7. 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 

8. 获取分支

9. 提交

10. 等待结果


## 如何运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
    
