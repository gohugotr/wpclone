# MongoDB 6.0 Community Edition'ı Yükleme

## Homebrew'i yükleyin

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

[MongoDB 6.0 Community Edition'ı Yükleme](https://www.mongodb.com/docs/v6.0/tutorialinstall-mongodb-on-os-x/)

`brew tap mongodb/brew`

`brew update`

`brew install mongodb-community@6.0`

**Bu dosyaların ve dizinlerin nereye kurulduğunu kontrol etmek için aşağıdaki komutu da çalıştırabilirsiniz :**

`brew --prefix` ==> Sonuç `/opt/homebrew`

**MongoDB'yi çalıştırmak için (yani mongod işlem) bir macOS hizmeti olarak çalıştırın:**

`brew services start mongodb-community@6.0`

`brew services list`

**MongoDB'yi Bağlayın ve Kullanın**
`mongosh`

**Veritabanlarını listele** ==> `db`

### [Yeni veritabanı oluştur](https://www.mongodb.com/docs/mongodb-shell/run-commands/)

`use myNewDatabase`
`db.myCollection.insertOne( { x: 1 } );`

**Örnek (cmd altında yazılır) -- Use insertOne, insertMany, or bulkWrite**
`db.user.insertOne({name:'Ali', email:'tera@gg.com', password:'A345'})`

**Örnek -- Kayıtları Listele**
`db.user.find({})`

**Örnek -- Kayıtları Sil**
`db.user.remove({})`
