var myModal = FLUIGC.modal({
    title: 'Final Cadastro',
    content: '<h1>Conteúdo Cadastrado</h1>',
    id: 'fluig-modal',
    size: 'full | large | small',
    actions: [{
        'label': 'Save',
        'bind': 'data-open-modal',
    },{
        'label': 'Close',
        'autoClose': true
    }]
}, function(err, data) {
    if(err) {
        // do error handling
    } else {
        // do something with data
    }
});

// https://style.fluig.com/javascript.html#modals