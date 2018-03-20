function install(hook) {

    hook.beforeEach(function (html) {
        document.getElementById("main").style.visibility = 'hidden';
        document.getElementById("load").style.display = 'block';
        return html

    })
    hook.doneEach(_ => {

        let list = document.querySelectorAll("pre");
        for (let i = 0; i < list.length; ++i) {
            list[i].classList.add('line-numbers');
        }
        Prism.highlightAll();
        document.getElementById("main").style.visibility = 'visible';
        document.getElementById("load").style.display = 'none';
    });
}

$docsify.plugins = [].concat(install, $docsify.plugins);

