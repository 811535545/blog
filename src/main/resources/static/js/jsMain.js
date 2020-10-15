function data(curr, limit) {
    //console.log("tot:"+totalCount)
    /*拿到总数据*/

    totalCount = testboke.data.total; //取出来的是数据总量

    dataLIst = testboke.data.records; // 将数据放到一个数组里面（dataLIst 还未声明，莫着急）

    createTable(curr, limit, totalCount);

    console.log("tot:"+totalCount)

}

var currPage = 1;

var totalCount;

var dataLIst = [];

window.onload = function() {

    /*取到总条数*/

    /*每页显示多少条  10条*/

    var limit = 10;

    data(currPage, limit)

    //console.log(totalCount)

    createTable(1, limit, totalCount);

    $('#callBackPager').extendPagination({

        totalCount: totalCount,

        limit: limit,

        callback: function(curr, limit, totalCount) {

            data(curr, limit)

        }

    });

}

/*创建的是一个表格，并将数据放进去*/

function createTable(currPage, limit, total) {

    var html = [],

     showNum = limit;

    if(total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);

    html.push(' <table class="table table-striped table-bordered templatemo-user-table" style="margin-left: 0;">');

    html.push(' <thead><tr><th>序号</th><th>项目名称</th><th>类别</th><th>发起人</th><th>单位</th><th>详情</th><th>操作</th></tr></thead><tbody>');


    for(var i = 0; i < showNum; i++) {

        html.push('<tr>');

        html.push('<td>' + dataLIst[i].id + '</td>');

        html.push('<td>' + dataLIst[i].pname + '</td>');

        html.push('<td>' + dataLIst[i].ptypeName + '</td>');

        html.push('<td>' + dataLIst[i].userName + '</td>');

        html.push('<td>' + dataLIst[i].companyName + '</td>');

        html.push('<td><a href="project_details_init.html?id='+dataLIst[i].id+'" class="templatemo-edit-btn">详情</a></td>');

        html.push('<td><button class="templatemo-edit-btn" οnclick=checkproject(' + dataLIst[i].id + ',"1")>同意' +

            '</button> <button class="templatemo-edit-btn" οnclick=checkproject(' + dataLIst[i].id + ',"2")>拒绝</button></td>');

        html.push('</tr>');

    }

    html.push('</tbody></table>');

    var mainObj = $('#mainContent');

    mainObj.empty();

    mainObj.html(html.join(''));

}