function init() {
    $('#hasil-enkripsi').hide();
    $('#hasil-dekripsi').hide();
    $('.hidden-image').hide();
    $('.hidden-video').hide();
}
init();

function readBackgroundURL(input) {
    $('.hidden-image').show();
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image-show')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).on("change", ".file_multi_video", function(evt) {
    $('.hidden-video').show();
    var $source = $('#video-show');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
});

function kirimData() {
    var form = $('#dataForm')[0];
    var request = new FormData(form);
    request.append("_token", csrf_token );
    
    $.ajax({
        data: request,
        url: ServeUrl + '/simpan_data',
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        type: 'POST',
        dataType: 'json',
        beforeSend: function() {
            startLoading();
        },
        complete: function() {
            stopLoading();
        },
        success: function(response) {
            console.log(`response`, response)
    
        },error: function(xhr) {
    
        },
    })
}