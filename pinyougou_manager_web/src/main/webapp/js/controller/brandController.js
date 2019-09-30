//控制层
app.controller('brandController' ,function($scope,$controller   ,brandService){

    $controller('baseController',{$scope:$scope});//继承

    //查询所有
    $scope.findAll=function () {
        brandService.findAll().success(
            function (response) {
                $scope.list=response;
        })
    }


    //分页
    $scope.findPage=function(page,size){
        brandService.findPage(page,size).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        );
    }

    //新增
    $scope.save=function (entity) {
        var object=null;
        if($scope.entity.id!=null){
            object=brandService.update($scope.entity);
        }else{
            object=brandService.add($scope.entity);
        }
        object.success(
            function (response) {
                if(response.success){
                    //alert(response.message);
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message);
                }
            }
        )
    }

    //查找某一个
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        )
    }

    //删除
    $scope.dele=function () {
        if(confirm("您确定要删除吗？")){
            brandService.dele($scope.selectIds).success(
                function (response) {
                    if(response.success){
                        //alert(response.message);
                        $scope.reloadList();//重新加载
                    }else{
                        alert(response.message);
                    }
                }
            )
        }

    }

    $scope.searchEntity={};//定义搜索对象
    //分页
    $scope.search=function(page,size){
        brandService.search(page,size,$scope.searchEntity).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        );
    }
});