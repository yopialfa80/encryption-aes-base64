@include('Frame.head')

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title" style="text-transform:none">Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4)</h6>
                <p class="card-description border-bottom mb-5 pb-2">Pengujian pada algoritma Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4) untuk mengetahui perbandingan performa dari kedua algoritma tersebut sehingga menghasilkan algoritma terbaik.</p>
                <div class="row">
                    <div class="col-md-12 border-right">
                        <div class="form-group text-center hidden-image mb-5">
                            <a href="https://cryptii.com/pipes/rc4-encryption" target="_blank">
                                <img id="image-show" src="{{ url('assets/images/rc4generator.png') }}" width="50%" height="50%" alt=""/>
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