import Vue from 'vue'
import VueRouter from 'vue-router'

import { pages } from '../pages'

Vue.use( VueRouter )

const routes = pages.map( function ( page ) {
    const name = page.name
    return {
        path: `/${name}`,
        name,
        component: page
    }
} )

routes.push( {
    path: '*',
    redirect: '/ch5281'
} )

export default new VueRouter( { routes } )
