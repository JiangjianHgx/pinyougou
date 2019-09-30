//品牌服务
app.service("brandService",function ($http) {

    //查询所有
    this.findAll=function () {
        return $http.get("../brand/findAll.do");
    }

    //分页
    this.findPage=function(page,size){
        return $http.get('../brand/findPage.do?page='+page+'&size='+size);
    }

    //新增成功
    this.add=function (entity) {
        return $http.post('../brand/add.do',entity);
    }

    //修改
    this.update=function (entity) {
        return $http.post('../brand/update.do',entity);
    }

    //查找某一个
    this.findOne=function (id) {
        return $http.get('../brand/findOne.do?id='+id);
    }

    //删除
    this.dele=function (ids) {
        return $http.get('../brand/delete.do?ids='+ids);
    }

    //条件查询
    this.search=function (page,size,searchEntity) {
        return $http.post('../brand/search.do?page='+page+'&size='+size,searchEntity);
    }
});