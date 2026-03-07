import post from './post'
import siteSettings from './siteSettings'
import navbarSettings from './navbarSettings'
import footerSettings from './footerSettings'
import page from './page'
import team from './team'
import pageTeam from './pageTeam'
import homePage from './homePage'
import blockContent from './blockContent'

export const schemaTypes = [
    blockContent,
    post,
    page,
    homePage,
    team,
    pageTeam,
    siteSettings,
    navbarSettings,
    footerSettings 
]