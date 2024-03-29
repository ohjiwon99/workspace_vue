import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import BoardListView from '@/views/board/BoardListView.vue'
import BoardModifyFormView from '@/views/board/BoardModifyFormView.vue'
import BoardReadView from '@/views/board/BoardReadView.vue'
import BoardWriteFormView from '@/views/board/BoardWriteFormView.vue'



const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: '/login',
    component: LoginFormView
  },
  {
    path: '/user/modifyform',
    name: '/modify',
    component: ModifyFormView
  },
  {
    path: '/attach/attachForm',
    name: '/attach',
    component: AttachFormView
  },
  {
    path: '/attach/result',
    name: '/result',
    component: AttachResultView
  },
  {
    path: '/board/boardlist',
    name: '/boardlist',
    component: BoardListView
  },
  {
    path: '/board/boardmodifyform',
    name: '/boardmodifyform',
    component: BoardModifyFormView
  },
  {
    path: '/board/boardread',
    name: '/boardread',
    component: BoardReadView
  },
  {
    path: '/board/boardwriteform',
    name: '/boardwriteform',
    component: BoardWriteFormView
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
