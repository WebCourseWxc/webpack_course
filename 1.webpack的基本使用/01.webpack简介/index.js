// 引入js资源import
import $ from 'jquery'
// 引入样式资源
import './index.less'

$('#title').click(() => {
    $("body").css("backgroundColor", "deeppink")
})