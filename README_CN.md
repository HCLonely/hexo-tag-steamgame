# hexo-tag-steamgame

在Hexo博客中嵌入steam游戏。

## 使用方法

* 嵌入单个游戏

```
{% steamgame appid description %}
```

* 批量嵌入游戏

```
{% steamgames %}
appid
appid
appid
appid
appid
appid
{% endsteamgames %}
```

## 参数

```
appid: Steam 游戏 id.
description(可选): 用于替换默认游戏简介。
```

## Demo

[https://blog.hclonely.com/posts/94295339/#demo](https://blog.hclonely.cn/posts/94295339/#demo)

## License

[MIT](https://github.com/HCLonely/hexo-tag-steamgame/blob/master/LICENSE)