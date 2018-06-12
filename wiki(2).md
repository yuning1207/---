### wiki 接口

ip：45.32.41.110

所有url公有前缀：/Blog
#### 1.获取wiki列表

url：/listAll/{页码}

请求方式：get

参数：
count  可选参数 意思为每页多少项

返回数据：
status:状态码 正常为0
data：数据
    list：数据列表
    pageInfo：分页信息
msg：提示信息

```json
{
"status": 0,
"data": 

{
"list": 

[

{
"id": 15,
"title": "多态",
"description": "在面向对象的程序设计语言中,多态是继数据抽象和继承后的第三个基本特征.多态通过分离做什么和怎么做,从另一个角度将接口和实现分离开来.多态允许同一份代码可以毫无差别的运行在不同类型上.",
"commentNum": 0,
"viewNum": 0,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
},

{
"id": 14,
"title": "内部类",
"description": "编译器会将内部类翻译成用$分隔内部类名及外部类名的普通类文件，虚拟机并不知道。编译器为了引用外部类，生成了一个附加的实例域 this $0 （如 final [outer class] this $0）。",
"commentNum": 0,
"viewNum": 0,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
}
]
},
"msg": "ok"
}
```

#### 2.获取最热列表

url:/listHot

请求方式：get

参数：无

返回数据：
data：数据列表
```json
{
"status": 0,
"data": 

[

{
"id": 1,
"title": "同步容器以及并发容器",
"description": "重点：concurrentHashMap 1.8之前使用分段锁，持有多个segement，每个segement持有一个table，写操作时对segement加锁，读操作无锁，而且hashEntry的key value next都是final，也就是无法在链表中间删除或插入节点，也就可以保证另一个读取链表的线程不会出错，",
"commentNum": 0,
"viewNum": 102,
"isTop": 1,
"date": "2018-03-16",
"mark": "未分类"
},

{
"id": 2,
"title": "gc算法以及7个gc收集器",
"description": "没有重写finalize（）方法的且不可达对象会在一次标记后被清理",
"commentNum": 0,
"viewNum": 1,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
},

{
"id": 3,
"title": "代码验证Java中对象到底什么时候死亡",
"description": "看深入理解jvm虚拟机时候，书中讲：对象要经过两次gc才会死亡。这是在讲finalize方法时讲的，当时让我引起了混淆，就是如果没有重写这个方法也会是两次吗？ 然后就在书中代码基础上修改 验证了一下如果一个对象没有重写finalize方法会不会经历两次gc 代码： /** * 此代码演示了两点： * 1.对象可以在被GC时自我拯救。 * 2.这种自救的机会只有一次，",
"commentNum": 0,
"viewNum": 1,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
},

{
"id": 11,
"title": "变态跳台阶",
"description": "题目描述一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。## 题目描述这道题是青蛙跳台阶的升级版青蛙跳台阶是每次可以跳一阶也可以跳两阶 则要跳到第n阶可以是从n-1阶跳上去也可从n-2阶跳上去,因此f(n)=f(n-1)+f(n-2) 由此可见 跳台阶是个斐波那契数列 由此用斐波那契即可解决",
"commentNum": 0,
"viewNum": 1,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
},

{
"id": 4,
"title": "ThreadLocal原理",
"description": "很多人争论到底ThreadLocalMap到底是在Thread中，还是在ThreadLocal中。 先说结论：在Thread中。 其实这个很容易 看源码就知道了。 这是ThreadLocal中的createMap方法 明显是thread中有一个ThreadLocalMap的引用，而ThreadLocal为Thread对象初始化了这个map 为什么会出现这种争论呢？",
"commentNum": 0,
"viewNum": 0,
"isTop": 0,
"date": "2018-03-28",
"mark": "未分类"
},

],
"msg": "ok"
}
```

#### 4.获取wiki详情

url：/getWiki/{id}

请求方法：get

参数：无

返回数据：
```json
Theme: 
RawParsed


{
"status": 0,
"data": 

{
"id": 1,
"title": "同步容器以及并发容器",
"description": "重点：concurrentHashMap 1.8之前使用分段锁，持有多个segement，每个segement持有一个table，写操作时对segement加锁，读操作无锁，而且hashEntry的key value next都是final，也就是无法在链表中间删除或插入节点，也就可以保证另一个读取链表的线程不会出错，",
"content": "# 接口和实现分离\r\n使用接口类型存放集合的引用\r\n#### 优势：\r\n1. 构建集合后就不需要知道使用哪种实现\r\n2. 更改实现时只需要更改调用构造器的地方。\r\n\r\n如果需要实现自己的集合类，可以扩展一组以Abstract开头的类，扩展这些类比实现接口中所有方法轻松的多。\r\n\r\n# 接口\r\n1. Collection\r\n\r\n两个基本方法\r\n```\r\npublic interface Collection<E>\r\n{\r\n    boolean add(E element);\r\n    Iterator<E> iterator();\r\n    ...\r\n}\r\n```\r\n\r\n* 迭代器 Iterator\r\n```\r\npublic interface Iterator<E>{\r\n    E next();\r\n    boolean hasNext();\r\n    void remove();\r\n    default void forEachRemaining(Conseumer<? super E> action);\r\n}\r\n```\r\n3. List\r\n\r\n有序集合,访问方式:迭代器和整数索引\r\n\r\n数组的有序集合可以快速随机访问,链表随机访问很慢,最好使用迭代器遍历\r\n4. set\r\n\r\n集:add方法不允许增加重复的元素\r\n\r\n集的equals方法需要保证两个集包含相同的元素就认为是相等的,不要求顺序.\r\n\r\nhashcode()方法也要保证拥有相同元素的两个集得到相同的散列码.\r\n5. SortedSet\r\n\r\n会提供用于排序的比较器对象,定义了可以得到集合子集视图的方法\r\n6. SortedMap\r\n\r\n同上.\r\n7. NavigableSet\r\n\r\n包含一些用于搜索和遍历有序集和映射的方法.\r\n8. NavigableMap\r\n\r\n同上.\r\n\r\n#### 集合框架关系图\r\n![](https://dn-anything-about-doc.qbox.me/document-uid79144labid1102timestamp1435844913664.png?watermark/1/image/aHR0cDovL3N5bC1zdGF0aWMucWluaXVkbi5jb20vaW1nL3dhdGVybWFyay5wbmc=/dissolve/60/gravity/SouthEast/dx/0/dy/10)\r\n\r\n\r\n## 具体集合\r\n除了以Map结尾的类都实现了Collection接口,Map结尾的类实现了Map接口\r\n\r\n集合类型| 描述\r\n---|---\r\narrayList | 动态增长和缩减的索引序列\r\nLinkedlist | 在任意位置高效插入和删除的有序序列\r\nArrayDeque| 循环数组实现的双端队列\r\nHashSet|没有重复元素的无序集合\r\nTreeSet|有序集\r\nEnumSet|包含枚举类型的集\r\nLinkedHashSet|记住元素插入顺序的集\r\nPriorityQueue|允许高效删除最小元素的集合\r\nHashMap|存储键值对的数据结构\r\nTreeMap|键值有序排列的映射表\r\nEnumMap|键值属于枚举类型的映射表\r\nLindedhashmap|记住键值项8添加次序的映射表\r\nweakHashMap|其值无用武之地后被回收的映射表\r\nidentityHashMap|用==而不是equals比较键值的映射表\r\n\r\n### linkedList\r\n\r\nlinkedList.add()将元素添加到链表尾部.\r\n\r\ncontains()方法检测元素是否存在于链表中.\r\n\r\nget(n)返回第n个元素.效率不高不建议使用.\r\n\r\n **索引大于n/2时从尾端开始搜索**\r\n\r\n#### ListIterator接口\r\n\r\n依赖位置的add方法由迭代器负责.iterator的子接口ListIterator包含add方法和prevous和hasprevious方法用于反向遍历链表.\r\n\r\nadd方法依赖于迭代器的位置.remove方法依赖于迭代器的状态,不能多次调用remove方法.\r\n\r\nnextIndex和previousIndex返回下一次调用next返回元素的整数索引,pre返回下一次previous返回元素的整数索引,效率很高因为迭代器保持着当前位置的计数值\r\n\r\n### arraylist\r\n数组列表,实现了动态再分配的对象动态数组,实现了list接口\r\n\r\n与vector对比,vector所有方法都是同步的,可以多线程安全访问一个vector对象,但是如果只有一个线程访问,代码需要在同步操作上耗费大量时间.而arraylist不是同步的\r\n\r\n建议不需要同步是用arraylist,需要同步时使用vector\r\n\r\n### hashtable\r\n散列表为每一个对象计算一个整数,称为散列码(hashcode).\r\n\r\njava中散列表用链表数组实现,每个列表称为桶,要查找表中对象的位置,先计算散列码然后与桶数取余就是保存这个元素的桶的索引\r\n\r\n桶被占满的情况称为**散列冲突**,需要新对象与桶中所有对象进行比较查看是否已经存在.\r\n\r\n> java se8中桶满时会从链表变为平衡二叉树,选择的散列函数不当会产生很多冲突,或者有恶意代码试图在散列表中填充多个相同散列码的值,这样可以提高性能.\r\n\r\n有人认为最好将桶数设置为素数,防止键的集聚.标准库使用的桶数是2的幂,默认值为16,为表大小提供的值会自动转换为下一个2的幂.\r\n\r\n装填因子,默认0.75.表中超过装填因子的位置已经填入元素则会以双倍的桶数进行再散列.\r\n\r\n### treeSet\r\n树集是一个有序集合,任意顺序插入后,遍历时都是自动按照排序后的顺序呈现.\r\n\r\n排序使用树结构完成,当前是红黑树.\r\n\r\n将元素添加到树中会比添加到散列表慢,但是会比检查重复的数组和链表快很多.树中包含n个元素,插入元素大概要比较log 2 n次\r\n\r\n> java se 6 开始 treeSet实现了NavigabnleSet接口 增加了定位元素以及反向遍历的方法\r\n\r\n### arrayDeque和linkedList\r\n\r\n- 实现了双端队列Deque接口\r\n\r\n### priorityqueue优先级队列\r\n- 任意顺序插入,按照排序的顺序进行检索.\r\n- 调用remove总会获得当前优先级队列最小元素\r\n- 并没有排序\r\n- 使用堆实现,是自我调整的二叉树,使用add和remove后会自动让最小的元素移动到根\r\n- 典型用例:任务调度\r\n\r\n---\r\n## 映射\r\n- 包括hashMap和treeMap.treeMap包含插入顺序,hashmap无,hashmap稍快.\r\n- get方法没有与给定键对应信息是get返回null,\r\n- getOrDefault为键不存在时提供默认值\r\n- 键唯一,两次使用put会覆盖第一个值,put返回值为该键上一个值\r\n- 迭代映射使用foreach最方便,提供一个lambda表达式,映射中每一项会依次调用\r\n```\r\nscores.forEach((k,v)->System.out.println(\"key=\"+k+\"value=\"+v));\r\n```\r\n### 更新映射项\r\n**特殊情况:**第一次出现时get返回null\r\n\r\n#### 解决方法:\r\n- counts.put(word,counts.getOrDefault(word,0)+1);\r\n- counts.putIfAbsent(word,0);counts.put(word,counts.get(word)+1);\r\n- counts.merge(word,1,Integer::sum); \r\n\r\n#### 映射视图\r\n集合框架不认为映射是一种集合,但是可以获得键,值,键值对的集合.\r\n- set<k> keySet()\r\n- collection<v> values()\r\n- set<map,entry<k,v>> entrySet()\r\n\r\nset接口扩展了collection接口所以可以像使用集合一样使用keyset\r\n\r\n- 键集视图调用remove会从映射中删除键值对\r\n- 不能向视图添加元素,调用add会抛出UnsupportedOperationException错误\r\n\r\n##### 弱散列映射\r\nweakhashMap:由于映射一直活动导致垃圾回收器无法回收已经没有引用的值,所以需要程序自身对其进行回收,所以设计了weakHashMap.\r\n- 使用弱引用保存散列键,垃圾回收器发现某个对象只被弱引用引用则会回收它并将弱引用加入队列中.weakHashMap周期性检查队列,一旦弱引用加入队列意味着这个键不再被他人使用并且已被回收,然后weakHashMap删除这个条目.\r\n\r\n\r\n##### 链接散列集和映射\r\nLinkedHashSet和LinkedHashmap记住插入元素项的顺序.\r\n\r\n- 链接散列映射使用访问顺序而非插入顺序进行迭代\r\n- 调用get或put将是条目从当前位置移动到链表尾部\r\n- 只影响条目在链表中的位置,散列表中的桶不受影响\r\n- 可以实现高速缓存的**最近最少使用原则**\r\n\r\n##### 枚举集与映射\r\nEnumSet是枚举类型元素集的高效实现\r\n\r\n- 由于枚举类型只有有限个实例,所以内部用位序列实现\r\n- 对应的值在集中,对应位置1\r\n- 没有公共构造器,使用静态工厂方法构造\r\n- 使用set接口常用方法修改\r\n\r\nEnumMap是键类型为枚举类型的映射,直接且高效的使用值数组实现,使用时,需在构造器中指定键类型\r\n\r\n##### 标识散列映射\r\nIdentityHashMap\r\n\r\n- 使用System.identityHashCode计算散列码\r\n- 对象比较时使用==,非equals\r\n- 不同的键对象内容相同也视为不同对象\r\n- 实现对象遍历算法(如对象串行化)有用\r\n\r\n##### 视图与包装器\r\n- 视图并非创建新集,而是返回一个实现集合接口的类对象,方法操作的是原映射.视图技术在集框架有很多应用.视图包装了接口.\r\n    - 轻量级集合包装器\r\n        \r\n        使用aslist(new card[100])等方法对数组等进行包装,可以使用get,set等方法,但是改变数组大小的方法都不可使用\r\n    - 子范围\r\n    - 不可修改视图\r\n    - 同步视图\r\n    - 受查视图\r\n        \r\n        受限于虚拟机的雨凝是检查,对于A<pair<String>>,无法阻止插入Pair<Date>\r\n\r\n# 算法\r\n泛型集合接口的很大一个优点就是,算法只需要实现一次.\r\n\r\n如\r\n```\r\npublic static <T extens Comparable> T Max (Collection<T> c){\r\n    ...\r\n}\r\n```\r\n就可任意使用一个方法计算链表,数组列表或数组中的最大元素了.\r\n## 排序与混排\r\njava中的排序将列表所有元素转入数组,然后对数组排序再将排序后的序列复制回列表\r\n\r\n集合框架使用的排序算法为归并排序,慢于快排但是稳定,不需要交换相同值对象.\r\n\r\n## 二分查找\r\n- collections.binarySearch方法实现了二分查找\r\n- 查找不到时返回负值i,将该值插入位置为-i-1可将该值插入并保持有序\r\n- 提供链表的话,它将自动变为线性查找\r\n\r\n## 简单算法\r\ncollections类提供了复制列表到另一个,常量值填充容器,逆置列表的元素排序,获取最大等简单的算法.调用这些方法有益于代码可读性.\r\n\r\n## 批操作\r\n- 批删除可以通过视图获得子集并调用clear方法\r\n- 求交集可使用retainAll(otherSet)方法\r\n- removeAll(otherSet)方法\r\n\r\n## 集合和数组转换\r\n数组转为集合\r\n```\r\nstring [] values=...;\r\nHashSet<String> staff=new HashSet<>(Arrays.asList(values));\r\n```\r\n从集合得到数组\r\n```\r\nobject[] values=staff.toArray();\r\n```\r\n这样获得是对象数组\r\n\r\n想获得字符串数组需要\r\n```\r\nstring[] values = staff.toArray(new String[0]);\r\n```\r\n\r\n## 编写自己的算法(以集合为参数)\r\n最好使用接口而不是具体的实现\r\n\r\n# 遗留集合\r\n- hashTable:\r\n    \r\n    与vector相同,所有方法同步.对同步性无要求应使用hashMap\r\n- 枚举\r\n- 属性映射\r\n- 栈\r\n- 位集BitSet",
"commentNum": 0,
"viewNum": 103,
"isTop": 1,
"date": "2018-06-07",
"mark": "未分类"
},
"msg": "ok"
}
```