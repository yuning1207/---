{
    "data": [{
            "title": "多态",
            "id": 15,
            "description": "在面向对象的程序设计语言中,多态是继数据抽象和继承后的第三个基本特征.多态通过分离做什么和怎么做,从另一个角度将接口和实现分离开来.多态允许同一份代码可以毫无差别的运行在不同类型上.",
            "view_num": 9,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 14:46:16"
        },
        {
            "title": "内部类",
            "id": 14,
            "description": "编译器会将内部类翻译成用$分隔内部类名及外部类名的普通类文件，虚拟机并不知道。编译器为了引用外部类，生成了一个附加的实例域 this $0 （如 final [outer class] this $0）。",
            "view_num": 4,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 14:44:47"
        },
        {
            "title": "操作系统总结",
            "id": 13,
            "description": "操作系统是计算机系统中的一个系统软件，它管理和控制计算机系统中的硬件和软件资源，合理地组织计算机的工作流程，以便更有效地利用这些资源为用户提供一个功能更强大、使用方便的工作环境，从而在计算机和用户之间起到接口作用。",
            "view_num": 5,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 14:43:17"
        },
        {
            "title": "mysql常用命令和语法规范",
            "id": 12,
            "description": "mysql常用命令",
            "view_num": 3,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 14:41:41"
        },
        {
            "title": "变态跳台阶",
            "id": 11,
            "description": "题目描述一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。## 题目描述这道题是青蛙跳台阶的升级版青蛙跳台阶是每次可以跳一阶也可以跳两阶 则要跳到第n阶可以是从n-1阶跳上去也可从n-2阶跳上去,因此f(n)=f(n-1)+f(n-2) 由此可见 跳台阶是个斐波那契数列 由此用斐波那契即可解决",
            "view_num": 2,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:17:19"
        }, {
            "title": "求一个整数二进制中1的个数",
            "id": 10,
            "description": "题目描述输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示## 题目描述由于java中int是32位,因此思路十分简单,只要与1想与然后右移循环判断三十二次就好 public int NumberOf1(int n) { int num = 0; for(int i=0;i\u003c32;i++) { i",
            "view_num": 0,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:17:15"
        }, {
            "title": "单独数字II",
            "id": 9,
            "description": "[LeetCode] Single Number II 单独的数字之二Given an array of integers, every element appears three times except for one. Find that single one.Note: Your algorithm should have a linear runtime complexity. Coul...",
            "view_num": 1,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:17:01"
        }, {
            "title": "java服务器端图片转换webp以及批量转换webp脚本",
            "id": 8,
            "description": "一直在负责实验室后台新功能的开发和维护,最近有了一个新需求:给实验室官网添加webp格式的支持.具体的就是说首先所有上传图片的操作需要在上传后转换出一份webp格式的.准备工作其实将图片转换为webp并不难,只需要调用google提供的转换器即可.转换器可以从这里下载.转换器bin目录中包括以下工具 - cwebp:将图片转换为webp格式 - dw",
            "view_num": 4,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:14:47"
        }, {
            "title": "ThreadLocal原理",
            "id": 4,
            "description": "很多人争论到底ThreadLocalMap到底是在Thread中，还是在ThreadLocal中。 先说结论：在Thread中。 其实这个很容易 看源码就知道了。 这是ThreadLocal中的createMap方法 明显是thread中有一个ThreadLocalMap的引用，而ThreadLocal为Thread对象初始化了这个map 为什么会出现这种争论呢？",
            "view_num": 1,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:00:52"
        }, {
            "title": "代码验证Java中对象到底什么时候死亡",
            "id": 3,
            "description": "看深入理解jvm虚拟机时候，书中讲：对象要经过两次gc才会死亡。这是在讲finalize方法时讲的，当时让我引起了混淆，就是如果没有重写这个方法也会是两次吗？ 然后就在书中代码基础上修改 验证了一下如果一个对象没有重写finalize方法会不会经历两次gc 代码： /** * 此代码演示了两点： * 1.对象可以在被GC时自我拯救。 * 2.这种自救的机会只有一次，",
            "view_num": 1,
            "picture": "/res/default.jpg",
            "is_top": 0,
            "mark": "未分类",
            "comment_num": 0,
            "date": "2018-03-28 13:00:12"
        }
    ],
    "pageInfo": {
        "currentPage": 1,
        "everyPage": 10,
        "totalPage": 2,
        "hasNext": true,
        "hasPre": false,
        "totalCount": 12
    }
}