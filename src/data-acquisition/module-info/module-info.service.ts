import { Injectable } from '@nestjs/common';
import { CreateModuleInfoDto } from './dto/create-module-info.dto';
import { UpdateModuleInfoDto } from './dto/update-module-info.dto';
import { Brackets, Repository, getManager, EntityManager, getConnection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleInfo } from './entities/module-info.entity';
import { AgreementInfo } from '@data-acquisition/agreement-info/entities/agreement-info.entity';
import { TypeInfo } from '@data-acquisition/type-info/entities/type-info.entity';
import { PointPosition } from '@data-acquisition/point-position/entities/point-position.entity';
import { CreateAgreementInfoDto } from '@data-acquisition/agreement-info/dto/create-agreement-info.dto';
import { UpdateAgreementInfoDto } from '@data-acquisition/agreement-info/dto/update-agreement-info.dto';

@Injectable()
export class ModuleInfoService {

  constructor(
    @InjectRepository(ModuleInfo)
    private moduleInfoRepository: Repository<ModuleInfo>,
    @InjectRepository(AgreementInfo)
    private agreementInfoRepository: Repository<AgreementInfo>,
    @InjectRepository(PointPosition)
    private pointPositionRepository: Repository<PointPosition>,
  ) {
  }


  async create(createModuleInfoDto: CreateModuleInfoDto, createAgreementInfoDto: CreateAgreementInfoDto) {
    // 获取连接并创建新的queryRunner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // 使用我们的新queryRunner建立真正的数据库连
    await queryRunner.connect();

    // 开始事务：
    await queryRunner.startTransaction();

    try {
      // 对此事务执行一些操作：
      const module = await this.moduleInfoRepository.save(createModuleInfoDto);

      // console.log((10 / 0));
      await this.agreementInfoRepository.save({
        moduleId: module.id,
        ...createAgreementInfoDto,
        code: createModuleInfoDto.agreementCode,
        name: createModuleInfoDto.agreementName,
      });

      // 提交事务：
      await queryRunner.commitTransaction();
      queryRunner.release();
      return '级联添加成功';
    } catch (err) {
      // 有错误做出回滚更改
      await queryRunner.rollbackTransaction();
      queryRunner.release();
      return err;
    }


  }

   findAll(current: number, pageSize: number, moduleName: string, status: number, agreementCode: number) {

    return  this.moduleInfoRepository
      .createQueryBuilder('moduleInfo')

      .leftJoinAndMapOne('moduleInfo.agreementCode', TypeInfo, 'ta', 'moduleInfo.agreementCode=ta.typeCode')

      .where(
        new Brackets((q) => {

          // 模糊查询
          if (moduleName) {
            q.where('name like :name', { name: `%${moduleName}%` });
          }
          if (status > 0) {
            q.where('status = :status', { status: status });
          }
          if (agreementCode) {
            q.where('agreement_code = :agreement_code', { agreement_code: agreementCode });
          }
        }),
      )
      .andWhere('ta.typeClass = "agreement_type"')


      // 分页条件
      .offset((current - 1) * pageSize)
      .limit(pageSize)

      // 数据排序（ASC 正序，DESC 倒序）
      .orderBy('moduleInfo.createTime', 'DESC')
      .getManyAndCount();

    // console.log(list);
    //
    // let s = list.map(async item => {
    //   let count = await this.pointPositionRepository.query(`SELECT COUNT( module_id ) AS 'count' FROM point_position WHERE module_id = ${item.id}`);
    //   return { ...item, ...count[0] };
    // });
    // console.log(s);

  }

  findOne(id: number) {

    return this.moduleInfoRepository
      .createQueryBuilder('moduleInfo')
      .leftJoinAndMapOne('moduleInfo.agreementInfo', AgreementInfo, 'ai', 'moduleInfo.id=ai.moduleId')
      .leftJoinAndMapMany('moduleInfo.pointPosition', PointPosition, 'pm', 'moduleInfo.id=pm.moduleId')
      .where('moduleInfo.id = :id', { id: id })

      .getOne();

  }

  async update(id: number, updateModuleInfoDto: UpdateModuleInfoDto, updateAgreementInfoDto: UpdateAgreementInfoDto) {
    // return this.moduleInfoRepository.update(id, updateModuleInfoDto);

    // 获取连接并创建新的queryRunner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // 使用我们的新queryRunner建立真正的数据库连
    await queryRunner.connect();

    // 开始事务：
    await queryRunner.startTransaction();

    try {

      // 对此事务执行一些操作：
      await this.moduleInfoRepository.createQueryBuilder(null, queryRunner)
        .update()
        .set({ name: updateModuleInfoDto.name })
        .where('id = :id', { id: id })
        .execute();


      await this.agreementInfoRepository.createQueryBuilder(null, queryRunner)
        .update()
        .set({
          ...updateAgreementInfoDto
        })
        .where('id = :id', { id: id })
        .execute();

      // 提交事务：
      await queryRunner.commitTransaction();
      queryRunner.release();

      return '修改成功';
    } catch (err) {
      // 有错误做出回滚更改
      await queryRunner.rollbackTransaction();
      queryRunner.release();

      return err;
    }


  }

  async remove(id: number) {
    const pointPosition = await this.pointPositionRepository.find({ where: { moduleId: id } });
    if (pointPosition.length > 0) {
      return '当前模块下有点位不能删除';
    }

    // 获取连接并创建新的queryRunner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // 使用我们的新queryRunner建立真正的数据库连
    await queryRunner.connect();

    // 开始事务：
    await queryRunner.startTransaction();

    try {

      await this.agreementInfoRepository.update({ moduleId: id }, { isDelete: 1, deleteTime: new Date() });
      await this.moduleInfoRepository.update({ id }, { isDelete: 1, deleteTime: new Date() });

      // 提交事务：
      await queryRunner.commitTransaction();
      queryRunner.release();

      return null;
    } catch (err) {
      // 有错误做出回滚更改
      await queryRunner.rollbackTransaction();
      queryRunner.release();

      return '删除失败';
    }


  }

  async batchRemove(ids: []) {
    // 获取连接并创建新的queryRunner
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    // 使用我们的新queryRunner建立真正的数据库连
    await queryRunner.connect();

    // 开始事务：
    await queryRunner.startTransaction();

    try {

      ids.map(async id => {
        await this.agreementInfoRepository.update({ moduleId: id }, { isDelete: 1, deleteTime: new Date() });
        await this.moduleInfoRepository.update({ id: id }, { isDelete: 1, deleteTime: new Date() });
        await this.pointPositionRepository.update({ moduleId: id }, { isDelete: 1, deleteTime: new Date() });
      });

      // 提交事务：
      await queryRunner.commitTransaction();
      queryRunner.release();

      return null;
    } catch (err) {
      // 有错误做出回滚更改
      await queryRunner.rollbackTransaction();
      queryRunner.release();

      return '批量失败';
    }


  }

  findByModuleName(moduleName: string) {
    return this.moduleInfoRepository.findOne({ where: { name: moduleName } });
  }

}
