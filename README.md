# hexo-tag-steamgame

Embed steam game in Hexo posts/pages.

[中文说明](https://github.com/HCLonely/hexo-tag-steamgame/blob/master/README_CN.md)

## Installation

```
npm install hexo-tag-steamgame --save
```

## Useage

* Embed a single game

```
{% steamgame appid description %}
```

* Bulk embed games

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

## Parameters

* appid: Steam game app id.
* description(optional): Used to replace the default game profile.

## Demo

[https://demo.hclonely.com/posts/b0009374/](https://demo.hclonely.com/posts/b0009374/)

## License

[MIT](https://github.com/HCLonely/hexo-tag-steamgame/blob/master/LICENSE)