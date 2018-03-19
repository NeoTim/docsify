(function () {
function install (hook) {

    hook.doneEach(function (_) {
        var list = document.querySelectorAll("pre");
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('line-numbers');
        }
        Prism.highlightAll();
    });
    // hook.mounted(_ => {
    //     const div = dom.create('div')
    //     div.id = 'gitalk-container'
    //     const main = dom.getNode('#main')
    //     div.style = `width: ${main.clientWidth}px; margin: 0 auto 20px;`
    //     dom.appendTo(dom.find('.content'), div)
    //     const script = dom.create('script')
    //     const content = `gitalk.render('gitalk-container')`
    //     script.textContent = content
    //     dom.appendTo(dom.body, script)
    // })
}

$docsify.plugins = [].concat(install, $docsify.plugins);

}());
