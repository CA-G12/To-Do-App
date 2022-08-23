const app = require('./app');

app.set('port', 5050);

app.listen(app.get('port'), () => {
  console.log(`Your server is running on port http://localhost:${app.get('port')}`);
})