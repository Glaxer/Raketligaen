import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MatchesView from '@/views/MatchesView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import LeagueTableView from '@/views/LeagueTableView.vue';
import RulesView from '@/views/RulesView.vue';
import SignUpView from '@/views/SignUpView.vue';
import SponsorsAndPrizesView from '@/views/Sponsors&PricesView.vue';
import TeamsView from '@/views/TeamsView.vue';
import PlayersView from '@/views/PlayersView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/league-table',
    name: 'League Table',
    component: LeagueTableView,
  },
  {
    path: '/matches',
    name: 'Matches',
    component: MatchesView,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView,
  },
  {
    path: '/players',
    name: 'Players',
    component: PlayersView,
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpView,
  },
  {
    path: '/rules',
    name: 'Rules & Information',
    component: RulesView,
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutUsView,
  },
  {
    path: '/sponsors-and-prizes',
    name: 'Sponsors & Prizes',
    component: SponsorsAndPrizesView,
  },
  {
    path: '/login',
    name: 'Login & Register',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
