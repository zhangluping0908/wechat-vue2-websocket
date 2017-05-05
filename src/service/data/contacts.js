/*通讯录所以联系人
*	wxid:微信号
*	headurl:头像图片地址
*	petname:昵称
*	sex:性别(男0女1)
*	remarks:备注
* 	sdasd:个性签名
*	phone:电话号码
*	gallery:相册
*	district:地区
*	source:添加来源
*
*
*	imgurl:图片地址
*/	
import {imgurl} from 'src/config/env';


//同学录数据
export const contacts = {
A:[
	{
		"wxid":"achuqiao",
		"headurl":imgurl+'chuqiao.jpg',
		"petname":"a楚乔",
		"sex":1,
		"remarks":"楚乔",
		"sdasd":"披荆斩棘",
		"phone":"13333333333",
		"gallery":[
			imgurl+'yuwenyue.jpg',imgurl+'c.jpg',imgurl+'chenchangsheng.jpg'
		],
		"district":"奴籍少女",
		"source":"通过搜索手机号添加",
	},
	{//没有备注
		"wxid":"ayuwenyue",
		"headurl":imgurl+'yuwenyue.jpg',
		"petname":"a宇文玥",
		"sex":0,
		"remarks":"",
		"sdasd":"涅槃而生",
		"phone":"13000000000",
		"gallery":[
			imgurl+'wudaoya.jpg',imgurl+'h.jpg',imgurl+'hexiao.jpg'
		],
		"district":"宇文府",
		"source":"通过搜索微信号添加",
	}
],
B:[],
C:[
	{
		"wxid":"caiawei",
		"headurl":imgurl+'caiwei.jpg',
		"petname":"采薇",
		"sex":1,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'caiwei.jpg',imgurl+'lichun.jpg',
		],
		"district":"淳公主的侍女",
		"source":"通过群聊添加",
	},
	{
		"wxid":"chenchangsheng",
		"headurl":imgurl+'chenchangsheng.jpg',
		"petname":"陈长生",
		"sex":0,
		"remarks":"",
		"sdasd":"逆天改命",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'chenchangsheng.jpg',imgurl+'xiaoyu.jpg'
		],
		"district":"河边",
		"source":"通过搜索微信号添加",
	},
	{
		"wxid":"chenyuan",
		"headurl":imgurl+'chenyuan.jpg',
		"petname":"程鸢",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'chenyuan.jpg',imgurl+'yexun.jpg'
		],
		"district":"燕洵手下将军",
		"source":"通过群聊添加",
	},
],
D:[
{
	"wxid":"dinglan",
	"headurl":imgurl+'dinglan.jpg',
	"petname":"丁澜",
	"sex":0,
	"remarks":"临惜",
	"sdasd":"",
	"phone":"13002566500",
	"gallery":[
		imgurl+'b1.jpg',imgurl+'chenyuan.jpg',imgurl+'yexun.jpg'
	],
	"district":"楚乔的五哥",
	"source":"通过搜索微信号添加",
}
],
E:[],
F:[
	{
		"wxid":"fengmian",
		"headurl":imgurl+'fengmian.jpg',
		"petname":"风眠",
		"sex":0,
		"remarks":"风眠",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'fengmian.jpg',imgurl+'yuanchun.jpg'
		],
		"district":"燕洵的书童",
		"source":"通过群聊添加",
	}
],
G:[],
H:[
	{
		"wxid":"hexiao",
		"headurl":imgurl+'hexiao.jpg',
		"petname":"贺萧",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13002566500",
		"gallery":[
			imgurl+'b1.jpg',imgurl+'fengmian.jpg',imgurl+'yuanchun.jpg'
		],
		"district":"燕洵的书童",
		"source":"通过搜索手机号添加",
	}
],
I:[],
J:[
	{
		"wxid":"jinghan",
		"headurl":imgurl+'jinghan.jpg',
		"petname":"景邯",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'jinghan.jpg',imgurl+'zhongyu.jpg',
		],
		"district":"大夏云绸封地景小王爷",
		"source":"通过群聊添加",
	},
	{
		"wxid":"jingsi",
		"headurl":imgurl+'jingsi.jpg',
		"petname":"锦偲",
		"sex":1,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'jingsi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"青山院大丫鬟",
		"source":"通过群聊添加",
	},
],
K:[],
L:[
	{
		"wxid":"lanshuyi",
		"headurl":imgurl+'lanshuyi.jpg',
		"petname":"兰淑仪",
		"sex":1,
		"remarks":"兰淑仪",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"大魏淑仪，来历成谜。",
		"source":"通过群聊添加",
	},
	{
		"wxid":"liangshaoqing",
		"headurl":imgurl+'liangshaoqing.jpg',
		"petname":"梁少卿",
		"sex":0,
		"remarks":"",
		"sdasd":"",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"二货书生",
		"source":"通过搜索手机号添加",
	},
	{
		"wxid":"lichun",
		"headurl":imgurl+'lichun.jpg',
		"petname":"李策",
		"sex":0,
		"remarks":"",
		"sdasd":"默默守护",
		"phone":"13000000000",
		"gallery":[
			imgurl+'lanshuyi.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"南梁太子",
		"source":"通过群聊添加",
	},
],
M:[
	{
		"wxid":"mengfeng",
		"headurl":imgurl+'mengfeng.jpg',
		"petname":"蒙枫",
		"sex":1,
		"remarks":"",
		"sdasd":"我是个杀手！",
		"phone":"13000000000",
		"gallery":[
			imgurl+'mengfeng.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"往生营",
		"source":"通过搜索手机号添加",
	},
],
N:[],
O:[],
P:[],
Q:[],
R:[],
S:[
	{
		"wxid":"shugeuifei",
		"headurl":imgurl+'shugeuifei.jpg',
		"petname":"魏贵妃",
		"sex":1,
		"remarks":"",
		"sdasd":"本宫乏了~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'mengfeng.jpg',imgurl+'yuwenyue.jpg',
		],
		"district":"魏阀",
		"source":"通过群聊添加",
	},
],
T:[],
U:[],
V:[],
W:[
	{
		"wxid":"wudaoya",
		"headurl":imgurl+'wudaoya.jpg',
		"petname":"乌道涯",
		"sex":0,
		"remarks":"",
		"sdasd":"本宫乏了~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'wudaoya.jpg',imgurl+'zhaosong.jpg',
		],
		"district":"燕北",
		"source":"通过群聊添加",
	},
],
X:[
	{
		"wxid":"xiaoheilong",
		"headurl":imgurl+'h.jpg',
		"petname":"小黑龙",
		"sex":1,
		"remarks":"吃货",
		"sdasd":"我是个小吃货，啦啦啦啦~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'h.jpg',imgurl+'d.jpg',imgurl+'hu.jpg',
		],
		"district":"大陆道尊",
		"source":"通过群聊添加",
	},
	{
		"wxid":"xiaoyu",
		"headurl":imgurl+'xiaoyu.jpg',
		"petname":"萧玉",
		"sex":1,
		"remarks":"",
		"sdasd":"美女~",
		"phone":"13000000000",
		"gallery":[
			imgurl+'xiaoyu.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"南梁",
		"source":"通过群聊添加",
	}
],
Y:[
	{
		"wxid":"yexun",
		"headurl":imgurl+'yexun.jpg',
		"petname":"燕洵",
		"sex":1,
		"remarks":"",
		"sdasd":"楚乔......",
		"phone":"13000000000",
		"gallery":[
			imgurl+'yexun.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"西凉",
		"source":"通过群聊添加",
	},
	{
		"wxid":"yuanchun",
		"headurl":imgurl+'yuanchun.jpg',
		"petname":"元淳",
		"sex":1,
		"remarks":"",
		"sdasd":"喜欢燕洵",
		"phone":"13000000000",
		"gallery":[
			imgurl+'yuanchun.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"西魏公主",
		"source":"通过群聊添加",
	},
],
Z:[
	{
		"wxid":"zhaosong",
		"headurl":imgurl+'zhaosong.jpg',
		"petname":"赵嵩",
		"sex":1,
		"remarks":"",
		"sdasd":"小八小八小八",
		"phone":"13000000000",
		"gallery":[
			imgurl+'zhaosong.jpg',imgurl+'yuwenyue.jpg'
		],
		"district":"大魏十三皇子",
		"source":"通过群聊添加",
	},
]
}