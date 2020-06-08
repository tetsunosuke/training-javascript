// 下記のように設定内容を外部ファイルに持っておくと良いです
// 別ファイルから下記のようにして呼び出すことで、定数kinrouConfigを使うことができます。
// const {kinrouConfig} = require('./kinrouconfig.js')
const kinrouConfig = {
    houjinCode : "10282",
    userId     : "0000001106",
    password   : "ここにパスワードが入ります",
    url        : "https://kinrou.sas-cloud.jp/kinrou/kojin/",
};
module.exports = {
    kinrouConfig
}
