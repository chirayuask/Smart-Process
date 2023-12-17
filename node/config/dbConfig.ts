import * as mongoose from 'mongoose'
import { envConfig } from './env';

(() => {
    mongoose.connect(envConfig.MONGODB_URL)
        .then(result => console.log('Connection has been exstablished...!!!'))
        .catch(err => console.log(err))
})();