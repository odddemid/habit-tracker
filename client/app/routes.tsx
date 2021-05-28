import {
  HabitsSchedulePage,
  AddHabitPage,
  EditHabitPage,
  ViewHabitPage,
  StatisticsPage,
  SettingsPage,
} from "../pages";

export const routes = [
  {
    path: "/habits",
    exact: true,
    component: HabitsSchedulePage,
  },
  {
    path: "/habits/add",
    exact: true,
    component: AddHabitPage,
  },
  {
    path: "/habits/edit",
    exact: true,
    component: EditHabitPage,
  },
  {
    path: "/habits/view",
    exact: true,
    component: ViewHabitPage,
  },
  {
    path: "/statistics",
    exact: true,
    component: StatisticsPage,
  },
  {
    path: "/settings",
    exact: true,
    component: SettingsPage,
  },
];
