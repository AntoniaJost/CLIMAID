const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// adding routers
var homeRouter = require('./routes/00_home_route.js');
var riskSelectionRouter = require('./routes/01_risk_selection_route.js'); 
var riskAnalyticsRouter = require('./routes/02_risk_analytics_route.js')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// adding routes
app.use('/', homeRouter); 
app.use('/RiskReport', riskSelectionRouter);
app.use('/RiskReport/Analytics', riskAnalyticsRouter);

app.get('/', (req, res) => {
  res.render('01_risk_selection.pug'); 
});

// Route to render the analytics view
app.get('/RiskReport/Analytics', (req, res) => {
  const { selectedSubmitScenario, selectedSubmitRiskParam, selectedSubmitYear } = req.query;
  console.log(selectedSubmitScenario)
  res.render('02_risk_analytics', {
      selectedSubmitScenario,
      selectedSubmitRiskParam,
      selectedSubmitYear
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;