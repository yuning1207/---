# 注意：
1. 示例数据里面的dataList一般都是删除过一部分的，因为如果不删文档太长了。
2. url部分你在自己电脑上写的时候记得加上ip 目前ip：http://45.32.41.110    。




## 获取最新博客列表

- method：get
- url:/Blog/listAll/{页码}

参数：
- 页码 必选 int类型

返回数据示例：
```json
{
    "status": 0,
    "data": {
        "dataList": [
            {
                "id": 1,
                "title": "同步容器以及并发容器",
                "description": "重点：concurrentHashMap 1.8之前使用分段锁，持有多个segement，每个segement持有一个table，写操作时对segement加锁，读操作无锁，而且hashEntry的key value next都是final，也就是无法在链表中间删除或插入节点，也就可以保证另一个读取链表的线程不会出错，",
                "date": "2018-02-04 00:10:56",
                "viewNum": 100,
                "picture": "/res/default.jpg",
                "isTop": 1,
                "mark": "未分类",
                "CommentNum": 0
            },
            {
                "id": 6,
                "title": "代理模式",
                "description": "客户端需要某对象时其实他并不关心是否是该对象，只要能提供相同功能就可以，因此可以给他提供一个代理。   为什么要使用代理 原因可以有很多中，比如： 对象创建成本较大且不一定需要使用 对象在远程主机 目标对象功能不足 这些情况都可以使用代理模式   简单代理模式 使用组合方式，代理实现与被代理对象相同接口并保有一个被代理对象。   因",
                "date": "2018-02-03 02:05:29",
                "viewNum": 0,
                "picture": "/res/default.jpg",
                "isTop": 0,
                "mark": "未分类",
                "CommentNum": 80
            }
        ],
        "pageInfo": {
            "everyPage": 10,
            "totalCount": 11,
            "totalPage": 2,
            "currentPage": 1,
            "beginIndex": 0,
            "hasNextPage": true,
            "hasPrePage": false
        }
    }
}
```

## 获取最热博客列表
- method：get
- url：/Blog/listHot

参数：
- count 可选 int类型 获取条数 默认为10

返回数据示例：
```json
{
    "status": 0,
    "data": [
        {
            "id": 6,
            "title": "代理模式",
            "description": "客户端需要某对象时其实他并不关心是否是该对象，只要能提供相同功能就可以，因此可以给他提供一个代理。   为什么要使用代理 原因可以有很多中，比如： 对象创建成本较大且不一定需要使用 对象在远程主机 目标对象功能不足 这些情况都可以使用代理模式   简单代理模式 使用组合方式，代理实现与被代理对象相同接口并保有一个被代理对象。   因",
            "date": "2018-02-03 02:05:29",
            "viewNum": 0,
            "picture": "/res/default.jpg",
            "isTop": 0,
            "mark": "未分类",
            "CommentNum": 80
        },
        {
            "id": 1,
            "title": "同步容器以及并发容器",
            "description": "重点：concurrentHashMap 1.8之前使用分段锁，持有多个segement，每个segement持有一个table，写操作时对segement加锁，读操作无锁，而且hashEntry的key value next都是final，也就是无法在链表中间删除或插入节点，也就可以保证另一个读取链表的线程不会出错，",
            "date": "2018-02-04 00:10:56",
            "viewNum": 100,
            "picture": "/res/default.jpg",
            "isTop": 1,
            "mark": "未分类",
            "CommentNum": 0
        }
    ]
}
```

## 获取博客文章内容

method：get
url：/Blog/getWiki/{博客id}

参数：
- 博客id 必选 int 

返回示例：
```json
{
    "status": 0,
    "data": {
        "id": 1,
        "mHostModel": {
            "name": "任鲁翔",
            "location": "陕西，西安",
            "portrait": "/res/4420220180204.jpg",
            "qq": "542657544",
            "email": "rlx542657544@hotmail.com",
            "github": "https://github.com/r",
            "wechat": "lx542657544"
        },
        "title": "同步容器以及并发容器",
        "description": "重点：concurrentHashMap 1.8之前使用分段锁，持有多个segement，每个segement持有一个table，写操作时对segement加锁，读操作无锁，而且hashEntry的key value next都是final，也就是无法在链表中间删除或插入节点，也就可以保证另一个读取链表的线程不会出错，",
        "content": "# 接口和实现分离\r\n使用接口类型存放集合的引用\r\n#### 优势：\r\n1. 构建集合后就不需要知道使用哪种实现\r\n2. 更改实现时只需要更改调用构造器的地方。\r\n\r\n如果需要实现自己的集合类，可以扩展一组以Abstract开头的类，扩展这些类比实现接口中所有方法轻松的多。\r\n\r\n# 接口\r\n1. Collection\r\n\r\n两个基本方法\r\n```\r\npublic interface Collection<E>\r\n{\r\n    boolean add(E element);\r\n    Iterator<E> iterator();\r\n    ...\r\n}\r\n```\r\n\r\n* 迭代器 Iterator\r\n```\r\npublic interface Iterator<E>{\r\n    E next();\r\n    boolean hasNext();\r\n    void remove();\r\n    default void forEac...",
        "date": "2018-02-04 17:57:08",
        "html": "<!doctype html>\r\n<html>\r\n<head>\r\n<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>\r\n<title>Untitled-1.md</title></head>\r\n<body><h1>接口和实现分离</h1>\r\n<p>使用接口类型存放集合的引用</p>\r\n<h4>优势：</h4>\r\n<ol start='' >\r\n<li>构建集合后就不需要知道使用哪种实现</li>\r\n<li>更改实现时只需要更改调用构造器的地方。</li>\r\n\r\n</ol>\r\n<p>如果需要实现自己的集合类，可以扩展一...",
        "mark": "未分类",
        "isTop": 1,
        "viewNum": 100,
        "commentNum": 0
    }
}
```

