## github多账号设置

> 思路：通过config实现不同账号私钥的引用

### 步骤：

- 生成ssh key
- 配置config
- 测试配置
- 使用

### 生成ssh key

```shell
ssh-keygen -t rsa -C "youremail@xxx.com"
```

回车，命令执行后会提示“Enter file in which to save the key ...”,此时可为key起别名，以示区别，例如：first , second等

之后一路回车即可。

查看

```shell
cd ~/.ssh
```

公钥和私钥

形如：first、first.pub、second、second.pub

在Github中添加SSH Keys (.pub中的内容复制)

### 配置config

在 .ssh 下创建config ,

```
touch ~/.ssh/config
vim config
```

添加内容：

```shell
#first github
Host first.github.com    
HostName github.com    
PreferredAuthentications publickey    
IdentityFile ~/.ssh/first

#second github
Host second.github.com  
HostName github.com    
PreferredAuthentications publickey    
IdentityFile ~/.ssh/second
```

### 测试配置

```
ssh -T git@first.github.com
```

***说明：需先在github中添加ssh keys***

如果出现Hi xxx!You've ==successfully== authenticated 就说明连接成功。

### 使用

- clone

```shell
git clone git@first.github.com:username/repo.git
```

***说明：这里要使用 ssh 地址形式***

- 提交

***说明：若要提交的代码为不同目录，通过上一步clone来的，直接在对应目录下add、commit，push即可，因提交是按.git/config中配置的路径来的，所以对于同一代码需提交到不同github下有两种方式***

方式一：

```shell
git remote rm origin
git remote add origin git@first.github.com:username/repo.git
```

方式二：

修改.git/config中[remote "origin"]项下的url

以上。
