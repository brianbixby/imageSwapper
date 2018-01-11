'use strict';

function addTask() {
    var $btn = $('.add');
    var $input = $('section input');
    var $list = $('.tasks ul');

    $btn.on('click', function() {
        var val = $input.val();
        $input.val('');
        $list.append('<li>' + val + '</li>');
    })
}

function removeTask() {
    var $container = $('.tasks ul');
    // DELEGATED EVENT
    $container.on('click', 'li', function() {
        $(this).remove();
    });
}

function imageSwapper() {
    $('select').on('change', function() {
        var $imgSrc = $(this).val();
        $('.main-img').attr('src', $imgSrc);
    });
}
$(document).ready(function() {
    addTask();
    removeTask();
    imageSwapper();
});
