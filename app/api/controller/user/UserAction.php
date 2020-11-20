<?php
namespace app\api\controller\user;

use app\Request;
use think\facade\Db;

/**
 * 会员等级类
 * Class UserLevelController
 * @package app\api\controller\user
 */
class UserAction
{


    public function member(Request $request)
    {

        $info = Db::table('eb_system_user_level')->where(['is_del' => '0'])->find();
        return app('json')->successful(['info' => $info]);
    }

    /**
     * 获取等级任务
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function task(Request $request, $id)
    {
        return app('json')->successful(SystemUserTask::getTashList($id,$request->uid()));
    }

}