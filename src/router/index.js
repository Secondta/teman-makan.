import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../components/LoginView.vue"
import RegisterView1 from "../components/RegisterView1.vue"
import RegisterView2 from "../components/RegisterView2.vue"
import RegisterView3 from "../components/RegisterView3.vue"
import CommunityView from "../views/CommunityView.vue";
import CommunityReceiver from "../views/CommunityReceiver.vue";
import FormDonation from "../views/FormDonation.vue";
import DonationHistory from "../views/DonationHistory.vue";
import DonationHistoryReceiver from "../views/DonationHistoryReceiver.vue";
import DonateDetailGiver from "../views/DonateDetailGiver.vue";
import MariBerbagiGiver from "../views/MariBerbagiGiver.vue"
import MariBerbagiReceiver from "../views/MariBerbagiReceiver.vue"
import TentangKami from "../views/TentangKami.vue"
import FormBantuan from "../views/FormButtonBantuan.vue"
import DashboardGiver from '../views/DashboardGiver.vue'
import DashboardReceiver from '../views/DashboardReceiver.vue'
import FormDonasi from '../views/FormDonasi.vue'
import PosterView from '../views/PosterView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register1',
    name: 'register1',
    component: RegisterView1
  },
  {
    path: '/register2',
    name: 'register2',
    component: RegisterView2
  },
  {
    path: '/register3',
    name: 'register3',
    component: RegisterView3
  },
  {
    path: "/community",
    name: "community",
    component: CommunityView,
  },
  {
    path: "/community-receiver",
    name: "community-receiver",
    component: CommunityReceiver
  },
  {
    path: "/form-donation",
    name: "form-donation",
    component: FormDonation,
  },
  {
    path: "/history-donation",
    name: "history-donation",
    component: DonationHistory,
  },
  {
    path: "/history-donation-receiver",
    name: "history-donation-receiver",
    component: DonationHistoryReceiver,
  },
  {
    path: "/donation-detail",
    name: "donation-detail",
    component: DonateDetailGiver,
  },
  {
    path: '/tentang-kami',
    name: 'tentang-kami',
    component: TentangKami
  },
  {
    path: '/form-bantuan',
    name: 'form-bantuan',
    component: FormBantuan
  },
  {
    path: '/mari-berbagi-giver',
    name: 'mari-berbagi-giver',
    component: MariBerbagiGiver
  },
  {
    path: '/mari-berbagi-receiver',
    name: 'mari-berbagi-receiver',
    component: MariBerbagiReceiver
  },{
    path: "/dashboard-giver",
    name: "dashboard-giver",
    component: DashboardGiver,
  },
  {
    path: "/dashboard-receiver",
    name: "dashboard-receiver",
    component: DashboardReceiver,
  },
  {
    path: "/form-donasi",
    name: "form-donasi",
    component: FormDonasi,
  },
  {
    path: "/poster",
    name: "PosterView",
    component: PosterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
