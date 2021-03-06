requirejs.config({
    baseUrl: 'js',
    map: {
        '*': {
            'css': 'common/js/css.min.js'
        }
    },
    paths: {
        'ol3': '../common/js/ol-debug',
        'bootstrap': '../common/js/bootstrap-native',
        'backbone': 'backbone-min',
        'underscore': 'underscore-min',
        'jquery': 'dummy-jq', // Dummy
        'histmap': '../common/js/histmap',
        'aigle': '../common/js/aigle-es5.min',
        'ol-custom': '../common/js/ol-custom',
        'histmap_tin': '../common/js/histmap_tin',
        'tin': '../common/js/tin',
        'turf': '../common/js/turf_maplat.min',
        //'mapshaper': '../node_modules/mapshaper/mapshaper',
        'mapshaper': '../common/js/mapshaper_maplat',
        'contextmenu': 'ol3-contextmenu',
        'geocoder': 'ol3-geocoder-debug',
        'switcher': 'ol3-layerswitcher',
        'Vue': 'vue.min'
    },
    shim: {
        'turf': {
            exports: 'turf'
        },
        'aigle': {
            exports: 'Promise'
        },
        'contextmenu': {
            deps: ['ol3']
        },
        'geocoder': {
            deps: ['ol3']
        },
        'switcher': {
            deps: ['ol3']
        }
    }
});
