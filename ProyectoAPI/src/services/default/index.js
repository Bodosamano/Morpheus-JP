module.exports = (app) => {
    app.use('*', (request, response) => {
       response.status(404).json({ code: 4, data: 'Not Found', message: 'Ruta no definida' });
    });
 };
 
 
 
 
 
 