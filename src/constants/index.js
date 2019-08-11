const status =
  [
    {
      name: '正常',
      value: 1,
    },
    {
      name: '配置中',
      value: 0,
    },
    {
      name: '已下线',
      value: 2,
    },
  ];
const top = [
  {
    name: '是',
    value: 1,
  },
  {
    name: '否',
    value: 0,
  },
];
const categories = [
  {
    name: '工作动态',
    value: 1,
  },
  {
    name: '通知公告',
    value: 2,
  },
  {
    name: '法律法规',
    value: 3,
  },
  {
    name: '信息',
    value: 4,
  },
];
const organizations = [
  {
    label: '所有机构',
    value: 0,
  },
  {
    label: '公共机构',
    value: 1,
  },
  {
    label: '学校',
    value: 2,
  },
  {
    label: '医疗机构',
    value: 3,
  },
  {
    label: '供水单位',
    value: 4,
  },
  {
    label: '监督协管',
    value: 5,
  },
];
const title = '三穗卫生监督管理后台';
export { status, title, top, categories, organizations };
