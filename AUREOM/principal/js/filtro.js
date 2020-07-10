$(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-productos').show('1000');
        } else {
            $('.cont-productos').not('.' + valor).hide('1000');
            $('.cont-productos').filter('.' + valor).show('1000');
        }
    });

    let sucursales = $('#sucursales').offset().top,
        servicio = $('#servicio').offset().top,
        productos = $('#productos').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function() {
        let sucursales = $('#sucursales').offset().top,
            servicio = $('#servicio').offset().top,
            productos = $('#productos').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-sucursales').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sucursales - 100
        }, 600);
    });

    $('#enlace-servicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio - 100
        }, 600);
    });

    $('#enlace-productos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productos - 100
        }, 600);
    });

    $('#enlace-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        }, 600);
    });
});