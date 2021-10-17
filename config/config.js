const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://teja:Thejunani15@website.z7bqo.mongodb.net/test?retryWrites=true&w=majority'
  // mongoUri: process.env.DB_CONNECT ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/test'
}

export default config
