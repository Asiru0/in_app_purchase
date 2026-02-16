/******************************

脚本功能：flighty解锁会员

*******************************

[rewrite_local]

^https?:\/\/baimiao\.uzero\.cn\/api\/v\d\.user\/appLaunchWithUser$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/baimiao.js

[mitm] 

hostname = baimiao.uzero.cn

*******************************/

// 解析响应体
let obj = JSON.parse($response.body);

// 注入伪造的 VIP 信息
obj['value']['vip'] = {
    'id': 999999,
    'userId': 9999999,
    'levelId': 2,
    'deadline': 9999999999,
    'boughtType': 'new',
    'boughtTime': 1586253524,
    'boughtDuration': 10,
    'boughtUnit': 'year',
    'boughtAmount': 30,
    'orderId': 999999,
    'deadlineNotified': 0,
    'operatorId': 0,
    'createdTime': 1586253524,
    'level': {
        'id': 2,
        'seq': 2,
        'name': '黄金会员',
        'icon': '',
        'picture': '',
        'monthPrice': 0.02,
        'yearPrice': 30,
        'description': '',
        'recognizeNormal': -100,
        'recognizeBatch': -100,
        'recognizeTranslate': -100,
        'recognizeTranslateAll': 1,
        'enabled': 1,
        'gived': 0,
        'createdTime': 1429246047,
        'maxRate': 100
    }
};

// 结束处理，返回修改后的数据
$done({'body': JSON.stringify(obj)});
