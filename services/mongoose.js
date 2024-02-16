const mongoose = require('mongoose');
const chalk = require('chalk');

module.exports = (app) => {
   mongoose.set('useFindAndModify', false);
   mongoose.set('useCreateIndex', true);
   mongoose.set('useNewUrlParser', true);
   mongoose.set('useUnifiedTopology', true);
   mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log('DB Connected');
      console.log(process.env.MONGODB_URI);
      const port = process.env.PORT || 8080;
      app.listen(port, () => {
         console.log(`Experiment API is listening on port: ${port}`, chalk.green('✓'));
      });
   });

   mongoose.connection.on('error', (err) => {
      console.error(err);
      console.log(
         'MongoDB connection error. Please make sure MongoDB is running.',
         chalk.red('✗')
      );
      process.exit();
   });
};
