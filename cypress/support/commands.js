Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  Cypress.Commands.add('login', (email, pw) => {
  cy.request('POST', '/api/users/login',{
    "email": email,
    "password": pw
  }).then(
    (response) => {
      window.localStorage.setItem('accessToken', response.body.accessToken)
  }) 
})

Cypress.Commands.add('adminLogin', (email, pw) => {
  cy.request('POST', '/api/users/login',{
    "email": email,
    "password": pw
  }).then(
    (response) => {
      window.localStorage.setItem('accessToken', response.body.accessToken)
    }
  )
})