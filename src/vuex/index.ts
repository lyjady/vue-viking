import { createStore } from 'vuex'
import { RootState } from '@/types/StoreType'
import { User } from '@/types/User'
import { ColumnProps } from '@/types/ColumnProps'
import { PostProps } from '@/types/PostProps'

const columnList: ColumnProps[] = [
  {
    id: 1,
    title: 'text1',
    description: '登录foe浪费劈开的SV美丽的封面MV科目，额了；从，的；了吗是我屏幕罗曼蒂克判断力平，来考虑到，率，是登录名是，了了；SV大V欧美吗 是，的'
  },
  {
    id: 2,
    title: 'text1',
    description: '登录foe浪费劈开的SV美丽的封面MV科目，额了；从，的；了吗是我屏幕罗曼蒂克判断力平，来考虑到，率，是登录名是，了了；SV大V欧美吗 是，的'
  },
  {
    id: 3,
    title: 'text1',
    description: '登录foe浪费劈开的SV美丽的封面MV科目，额了；从，的；了吗是我屏幕罗曼蒂克判断力平，来考虑到，率，是登录名是，了了；SV大V欧美吗 是，的'
  },
  {
    id: 3,
    title: 'text1',
    description: '登录foe浪费劈开的SV美丽的封面MV科目，额了；从，的；了吗是我屏幕罗曼蒂克判断力平，来考虑到，率，是登录名是，了了；SV大V欧美吗 是，的'
  }]

const postList: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '谁点ISD卡了我觉得is都没看到；是没到位的索拉卡代码阿拉山口了打马赛克挠脑袋上',
    image: 'https://valkyrie-oss.oss-cn-shenzhen.aliyuncs.com/2020-05-02//3b6a4d45-5e3a-4d38-8762-898da4464e38_cd65df0c3b1b2bfa.jpg',
    createdAt: '2021-05-23 12:32:12',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第一篇文章',
    content: '谁点ISD卡了我觉得is都没看到；是没到位的索拉卡代码阿拉山口了打马赛克挠脑袋上',
    image: 'https://valkyrie-oss.oss-cn-shenzhen.aliyuncs.com/2020-05-02//3b6a4d45-5e3a-4d38-8762-898da4464e38_cd65df0c3b1b2bfa.jpg',
    createdAt: '2021-05-23 12:32:12',
    columnId: 1
  },
  {
    id: 3,
    title: '这是我的第一篇文章',
    content: '谁点ISD卡了我觉得is都没看到；是没到位的索拉卡代码阿拉山口了打马赛克挠脑袋上',
    image: 'https://valkyrie-oss.oss-cn-shenzhen.aliyuncs.com/2020-05-02//3b6a4d45-5e3a-4d38-8762-898da4464e38_cd65df0c3b1b2bfa.jpg',
    createdAt: '2021-05-23 12:32:12',
    columnId: 1
  },
  {
    id: 4,
    title: '这是我的第一篇文章',
    content: '谁点ISD卡了我觉得is都没看到；是没到位的索拉卡代码阿拉山口了打马赛克挠脑袋上',
    image: 'https://valkyrie-oss.oss-cn-shenzhen.aliyuncs.com/2020-05-02//3b6a4d45-5e3a-4d38-8762-898da4464e38_cd65df0c3b1b2bfa.jpg',
    createdAt: '2021-05-23 12:32:12',
    columnId: 1
  }
]

export default createStore<RootState>({
  state: {
    user: {
      isLogin: false
    },
    posts: postList,
    columns: columnList
  },
  mutations: {
    setUser (state, payload: User) {
      state.user = { ...state.user, isLogin: true, id: payload.id, name: payload.name }
    }
  }
})
