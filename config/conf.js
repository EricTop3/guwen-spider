/**
 * mongoDB配置信息
 */
module.exports = {
    localUrl: 'localhost',
    originIp: '47.52.115.169',
    localPort: 27017,
    db: {
        guwenlist: 'guwenlistDB',
        booklist: 'guwenbookDB'
    },
    collection: {
        booklist: 'booklist',
        chapterlist: 'chapterlist',
        contentlist: 'contentlist'
    },
    options: {
        server: {
            poolSize: 5
        }
    }
}