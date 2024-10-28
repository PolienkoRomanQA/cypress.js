describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Вводим логин
         cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку войти
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').click(); // Нажимаем кнопку забыли пароль
        cy.get('#mailForgot').type('roma.polienko.89@mail.ru'); // Вводим почту
        cy.get('#restoreEmailButton').click(); // Нажимаем кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Видим текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

       it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Вводим логин
         cy.get('#pass').type('iloveqastudio2'); // Вводим неверный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку войти
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Видим текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#mail').type('german@dol.ru'); // Вводим логин
        cy.get('#pass').type('iloveqastudio1'); // Вводим неверный пароль
        cy.get('#loginButton').click(); // Нажимаем на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
 
       it('Валидация на наличие @', function () {
         cy.visit('https://login.qa.studio/'); // Заходим на сайт
         cy.get('#mail').type('germandolnikov.ru'); // Вводим логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
         cy.get('#loginButton').click(); // Нажимаем на кнопку войти
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#mail').type(' GerMan@Dolnikov.ru'); // Вводим логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

 })
