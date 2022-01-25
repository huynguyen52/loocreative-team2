import { RoutesString } from "../../Modules/routesString";
import PageErr from "../404/PageErr";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Works from "../Works/Works";

const pages = [

    {
        path: RoutesString.PageNotFound,
        component: PageErr,
        exact: true,
    },

    /* Home */
    {
        path: RoutesString.Home,
        component: Home,
        exact: true,
    },

    /* Works */
    {
        path: RoutesString.Works,
        component: Works,
        exact: true,
    },

     /* Teams */
     {
        path: RoutesString.Teams,
        component: Teams,
        exact: true,
    },

     /* Contacts */
     {
        path: RoutesString.Contacts,
        component: Contacts,
        exact: true,
    },

];

export default pages;

