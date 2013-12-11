exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C3\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout bugFix^",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Relative Refs (^)",
    "zh_CN": "相对引用(^)",
    "zh_TW": "相對引用（^）"
  },
  "hint": {
    "en_US": "Remember the Caret (^) operator!",
    "zh_CN": "记住插入(^)操作符!",
    "zh_TW": "不要忘記插入（^） 符號!"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Relative Refs",
              "",
              "Moving around in Git by specifying commit hashes can get a bit tedious. In the real world you won't have a nice commit tree visualization next to your terminal, so you'll have to use `git log` to see hashes.",
              "",
              "Furthermore, hashes are usually a lot longer in the real Git world as well. For instance, the hash of the commit that introduced the previous level is `fed2da64c0efc5293610bdd892f82a58e8cbc5d8`. Doesn't exactly roll off the tongue...",
              "",
              "The upside is that Git is smart about hashes. It only requires you to specify enough characters of the hash until it uniquely identifies the commit. So I can type `fed2` instead of the long string above."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Like I said, specifying commits by their hash isn't the most convenient thing ever, which is why Git has relative refs. They are awesome!",
              "",
              "With relative refs, you can start somewhere memorable (like the branch `bugFix` or `HEAD`) and work from there.",
              "",
              "Relative commits are powerful, but we will introduce two simple ones here:",
              "",
              "* Moving upwards one commit at a time with `^`",
              "* Moving upwards a number of times with `~<num>`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's look at the Caret (^) operator first. Each time you append that to a ref name, you are telling Git to find the parent of the specified commit.",
              "",
              "So saying `master^` is equivalent to \"the first parent of `master`\".",
              "",
              "`master^^` is the grandparent (second-generation ancestor) of `master`",
              "",
              "Let's check out the commit above master here"
            ],
            "afterMarkdowns": [
              "Boom! Done. Way easier than typing the commit hash"
            ],
            "command": "git checkout master^",
            "beforeCommand": "git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "You can also reference `HEAD` as a relative ref. Let's use that a couple of times to move upwards in the commit tree"
            ],
            "afterMarkdowns": [
              "Easy! We can travel backwards in time with `HEAD^`"
            ],
            "command": "git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^",
            "beforeCommand": "git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "To complete this level, check out the parent commit of `bugFix`. This will detach `HEAD`.",
              "",
              "You can specify the hash if you want, but try using relative refs instead!"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 相对引用",
              "",
              "用指定提交记录hash值的方式在Git中移动会变得比较乏味。在现实中，你不会有漂亮的可视化的提交记录树放在终端旁边，所以你不得不用`git log`来查看hasn值。",
              "",
              "另外，hash值在真实的Git环境中也会更长。举个例子，前一关的介绍中的提交记录的hash值是`fed2da64c0efc5293610bdd892f82a58e8cbc5d8`。不要把舌头闪了...",
              "",
              "好的一面是，Git对hash的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。所以，我可以仅输入`fed2`而不是上面的一长串字符。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "我说过，通过hash指定提交记录不是很方便，所以Git引入了相对引用。这个就很牛掰了!",
              "",
              "使用相对引用，你可以从一个易于记忆的地方（比如分支名`bugFix`或`HEAD`）开始工作。",
              "",
              "相对引用非常给力，这里我介绍两个简单的用法：",
              "",
              "* 使用`^`向上移动1个提交记录",
              "* 使用`~<num>`向上移动多个提交记录"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "首先看看插入(^)操作符。把插入符跟在引用名后面，表示让Git寻找指定提交记录的父提交。",
              "",
              "所以`master^`相当于\"`master`的父提交\"。",
              "",
              "`master^^`是`master`的父父提交（上上代祖先）",
              "",
              "切换到master的父提交"
            ],
            "afterMarkdowns": [
              "唰！搞定。这种方式比输入提交记录的hash值简单多了！"
            ],
            "command": "git checkout master^",
            "beforeCommand": "git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "你也可以`HEAD`把用作相对引用。以下命令使用`HEAD`在提交树中向上移动几次。"
            ],
            "afterMarkdowns": [
              "简单！我们可以一直使用`HEAD^`向上移动。"
            ],
            "command": "git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^",
            "beforeCommand": "git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要完成此关，切换到`bugFix`的父提交。这会分离出`HEAD`.",
              "",
              "如果你愿意的话，使用hash值也可以过关，但为何不试试使用相对引用呢？"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 相對引用",
              "",
              "如果要在 Git 中移動，透過指定 commit 的 hash 值的方式會變得比較麻煩。在實際例子中，你的終端機上面不會出現漂亮且具備視覺效果的 commit tree，所以你不得不用 `git log` 來查詢 hash 值。",
              "",
              "另外，hash 值的長度在真實的 Git 環境中很長。舉個例子，前一個關卡的介紹中的 commit 的 hash 值是 `fed2da64c0efc5293610bdd892f82a58e8cbc5d8`。舌頭不要打結了...",
              "",
              "幸運的是， Git 對於處理 hash 很有一套。你只需要提供能夠唯一辨識出該 commit 的前幾個字元就可以了。所以，我可以只輸入 `fed2` 而不是上面的一長串字元。"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "我說過，透過 hash 來指定 commit 不是很方便，所以 Git 加入了相對引用。這個就很厲害了!",
              "",
              "使用相對引用，你可以從一個易於記憶的地方（比如說分支名稱 `bugFix` 或 `HEAD`）開始工作。",
              "",
              "相對引用非常好用，這裡我介紹兩個簡單的用法：",
              "",
              "* 使用 `^` 向上移動一個 commit",
              "* 使用 `~<num>` 向上移動多個 commit"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "首先看看插入（^）這一個符號。把這個符號接在某一個 reference 後面，就表示你告訴 Git 去找到該 reference 所指向的 commit 的 parent commit。",
              "",
              "所以 `master^` 相當於 \"`master` 的 parent commit\"。",
              "",
              " `master^^` 是 `master` 的 grandparent commit（往前推兩代）",
              "",
              "切換到 master的 parent commit"
            ],
            "afterMarkdowns": [
              "看吧！完成了。這種方式比輸入代表 commit 的 hash 值簡單多了！"
            ],
            "command": "git checkout master^",
            "beforeCommand": "git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "你也可以把 `HEAD` 當作相對引用。以下指令使用 `HEAD` 在 commit tree 中向上移動數次。"
            ],
            "afterMarkdowns": [
              "簡單吧！我們可以一直使用 `HEAD^` 向上移動。"
            ],
            "command": "git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^",
            "beforeCommand": "git commit; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要完成這一關，切換到 `bugFix` 的 parent commit。這會分離出 `HEAD`。",
              "",
              "如果你願意的話，透過直接指定 hash 值的方式也可以過關，但是還是試試看相對引用吧！"
            ]
          }
        }
      ]
    }
  }
};
