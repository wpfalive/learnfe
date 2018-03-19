/**
 * wpf 2018/3/19
 */

const log = function (...args) {
    console.log('[log]', ...args)
}

const layoutCollection = {
    btn1: {
        val: 1,
        src: 'css/layout1.css'
    },
    btn2: {
        val: 2,
        src: 'css/layout2.css'
    },
}

// 根据对象数据生成页面左侧的按钮
const init = function () {
    let idx = 1
    for (let key in layoutCollection) {
        $('<input/>',
            {
                value: layoutCollection[key]['val'],
                class: "ui-button ui-corner-all",
                type: 'button',
                'data-page-id': idx,
                click: toggleLayout
            }).appendTo($('.nav'))
        idx += 1
    }
}

// 单击按钮切换右侧页面的css样式
const toggleLayout = function () {
    const pageId = $(this).data().pageId
    $('#layout-css-file').attr('href', `css/layout${pageId}.css`)
}

$(function () {
    init()
})