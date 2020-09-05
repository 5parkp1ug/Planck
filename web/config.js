var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir:                root,
    // Targets ========================================================
    serveDir:               path.join(root, '.serve'),
    distDir:                path.join(root, 'dist'),
    clientManifestFile:     'manifest.webpack.json',
    clientStatsFile:        'stats.webpack.json',

    // Source Directory ===============================================
    srcDir:                 path.join(root, 'app'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'Airframe',
    siteDescription:        'Default Dashboard ready for Development',
    siteCannonicalUrl:      'http://localhost:3000',
    siteKeywords:           'react dashboard seed bootstrap',
    scssIncludes:           []
}

module.exports = config;