@include('Frame.head')

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title" style="text-transform:none">Advanced Encryption Standard (AES) dan Base64</h6>
                <p class="card-description border-bottom mb-5 pb-2">Enkripsi dan Dekripsi dengan menggabungkan 2 metode yaitu Advanced Encryption Standard (AES)
                     dan Base64. Teks yang di inputkan akan di enkripsi kedalam Advanced Encryption Standard (AES) lalu hasil dari enkripsi tersebut akan di 
                     enkripsi kembali kedalam Base64 sehingga data tersebut dapat dengan mudah di kelola.</p>
                <div class="row">
                    <div class="col-md-12 border-right">
                        <div class="form-group text-center hidden-image mb-5">
                            <a href="https://www.base64decode.org/" target="_blank">
                                <img id="image-show" src="{{ url('assets/images/base64generator.jpeg') }}" width="50%" height="50%" alt=""/>
                            </a>
                        </div>
                        <div class="form-group text-center hidden-image mt-5">
                            <a href="https://www.devglan.com/online-tools/aes-encryption-decryption" target="_blank">
                                <img id="image-show" src="{{ url('assets/images/aesgenerator.png') }}" width="50%" height="50%" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/keamanan/web_generator.js"></script>