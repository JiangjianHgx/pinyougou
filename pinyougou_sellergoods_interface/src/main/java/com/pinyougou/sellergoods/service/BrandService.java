package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

public interface BrandService {

    public List<TbBrand> findAll();

    //显示分页
    public PageResult findPage(int pageNum,int pageSize);

    //新增
    public void add(TbBrand brand);

    //查找一个
    public TbBrand findOne(Long id);

    //修改
    public void update(TbBrand brand);

    //删除
    public void delete(Long[] ids);

    //显示分页
    public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
}
