const subject = `Reset password`;

const html = `<p>Olá <%= user.firstname %></p>
<p>Para resetar sua senha, clique ou copie o link: <%= url %></p>`;

const text = `Olá <%= user.firstname %>
Para resetar sua senha, clique ou copie o link:: <%= url %>`;

module.exports = {
  subject,
  text,
  html,
};
 