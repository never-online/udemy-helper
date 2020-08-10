const ELEMENT_TAGS = {
    REWIND: 'rewind-skip-button',
    FORWARD: 'forward-skip-button'
}

navigator.mediaSession.setActionHandler('previoustrack', function () {
    $(`[data-purpose=${ELEMENT_TAGS.REWIND}]`).trigger('click');
});

navigator.mediaSession.setActionHandler('nexttrack', function () {
    $(`[data-purpose=${ELEMENT_TAGS.FORWARD}]`).trigger('click');
});