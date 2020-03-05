hexo.extend.tag.register('steamgame', function (args, content) {
    return `<iframe src="https://store.steampowered.com/widget/${args[0]}/${args[1] ? `?t=${args[1]}` : ""}" frameborder="0" width="100%" height="190"></iframe>`;
});
hexo.extend.tag.register('steamgames', function (args, content) {
    let iframes="";
    content.split("\n").map((e,i)=>{
        iframes += `<iframe src="https://store.steampowered.com/widget/${e}/" frameborder="0" width="100%" height="190"></iframe>`;
    });
    return iframes;
}, { ends: true });