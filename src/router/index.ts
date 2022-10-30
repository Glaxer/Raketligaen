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

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/matches',
    name: 'matches',
    component: MatchesView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView,
  },
  {
    path: '/league-table',
    name: 'leagueTable',
    component: LeagueTableView,
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  {
    path: '/sponsors-and-prizes',
    name: 'sponsors&prizes',
    component: SponsorsAndPrizesView,
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamsView,
  },
  {
    path: '/players',
    name: 'players',
    component: PlayersView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
