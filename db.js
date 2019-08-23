// 用mockjs模拟生成数据
var Mock = require('mockjs');

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'course|20': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        
    'id|10000-20000': 10000,
    'name': '@cname',
    'image': '@image("200*200","#f5f5f5","BAT")',
    'time|+1': ['@c一小时前', 'two', 'three'],
    'school|1': 'Taru',
    'company|1': ['TenCent', 'ALIBABA', 'JD'],
    'position|1': ['Java', 'Web'],
    'main|1':'@ctitle(10)',
    'shequn|1': '@ctitle(5)',
    'zan|1-100': 100,
    'talk|1-100': 100

      }
    ],
    'course_category': [
      {
        "name": '@cname',
		"image":"@image(200)",
        
        cName: '@ctitle(4)'
      }
    ],
	'course_login': [
      {
        "name": 'adimn',
		"password":"lanqiao123456",
        cName: '@ctitle(4)'
      }
    ],
	'index_model|20':[{
			'id|+1':1,
			'qunName|1': ['#实习租房', '#web前端', '#少妇吧', '#塔大', '#蓝桥'],
			'image': '@image(200)',
		}],
		'index|20':[{
			'id|+1':1000,
			'name':'@cname',
			'image': '@image(200)',
			'yue|1-12':12,
			'ri|1-29':29,
			'address|1':['北京', '贵州', '绵阳', '成都', '上海', '乌鲁木齐', '阿拉尔'],
			'company|1': ['网易游戏', '阿里巴巴', '京东', '美柚', '滴滴出行', '网易云'],
			'job|1': ['前端开发', '用户增长&会员前端团队', 'Java开发实习生', '算法开发实习生', '会计', '项目经理', '实施工程师', '测试工程师'],
			'time|1': ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
			'email|1':['98569@163.com','925362qqcom','78484@163.com','21121@qq.com','121212@qq.com'],
			'wei|1':['滨江区网上路','游仙区紫金城','涪城区太阳城','塔大西区'],
		}],
		'index_model|20':[{
			'id|+1':1000,
			'qunName|1': ['#实习租房', '#web前端', '#少妇吧', '#塔大', '#蓝桥'],
			'image': '@image(200)',
		}]

  });
  // 返回的data会作为json-server的数据
  return data;
};