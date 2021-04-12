const { error } = require('console');
const newman = require('newman');
const { collection } = require('postman-collection');

newman.run({
    collection: require('./Collections/TutorialJenkins.postman_collection.json'),
    interacionCount: 1,
    reporters: ['cli', 'htmlextra'],
    reporter:{
        htmlextra:{
            export: 'Report/reports.html',
            logs: true,
            skipSensitiveData: false,
            title: 'Report of web services TEST',
            darkTheme: true,
            showOnlyFails: false,
            browserTitle: 'Reports TEST'
        }
    }
}).on('start', function (err, args) {
    console.log('[NEWMAN] Running collection...');    
}).on('done', function (err, summary) {
    if (err || summary.err) {
        console.error('[NEWMAN] Collection run encountered an error.');
    }else{
        console.log('[NEWMAN] collection run completed.')
    }
})