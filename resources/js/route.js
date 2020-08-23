import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/'         , component: require('./components/modulos/dashboard/index.vue').default  },
        { path: '/pedido'   , component: require('./components/modulos/pedido/index.vue').default     },
        { path: '/cliente'  , component: require('./components/modulos/cliente/index.vue').default    },
        { path: '/categoria', component: require('./components/modulos/categoria/index.vue').default  },
        { path: '/producto' , component: require('./components/modulos/producto/index.vue').default   },
        { path: '/usuario'  , component: require('./components/modulos/usuario/index.vue').default    },
        { path: '/rol'      , component: require('./components/modulos/rol/index.vue').default        },
        { path: '/permiso'  , component: require('./components/modulos/permiso/index.vue').default    },
        { path: '/reporte'  , component: require('./components/modulos/reporte/index.vue').default    }
    ],
    mode:'history'
})