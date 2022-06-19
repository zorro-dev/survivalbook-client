import {
    ARTICLE_VIEWER_ROUTE, MAIN_ROUTE
} from "./utils/consts";
import ArticleViewer from "./pages/article_viewer.page";
import MainPage from "./pages/main.page";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: ARTICLE_VIEWER_ROUTE + '/:id',
        Component: ArticleViewer
    }
]
