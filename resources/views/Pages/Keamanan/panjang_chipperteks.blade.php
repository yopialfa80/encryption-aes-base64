@include('Frame.head')

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title" style="text-transform:none">Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4)</h6>
                <p class="card-description border-bottom mb-5 pb-2">Pengujian pada algoritma Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4) untuk mengetahui perbandingan performa dari kedua algoritma tersebut sehingga menghasilkan algoritma terbaik.</p>
                <div class="row">
                    <div class="col-md-12 border-right">
                        <div class="form-group">
                            <label for="kunci-enkripsi-teks" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <textarea class="form-control" id="plaintext-enkripsi-teks" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="startEnkripsi()" class="btn btn-danger">Mulai Uji Kinerja</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body text-center">
                Panjang Chipperteks Advanced Encryption Standard (AES):
                <div class="mt-3 mb-3" id="panjang-aes" style="font-weight: bolder"></div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body text-center">
                Panjang Chipperteks Rivest Code 4 (RC4):
                <div class="mt-3 mb-3" id="panjang-rc4" style="font-weight: bolder"></div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body text-center">
                <div class="mt-3 mb-3" id="kesimpulan" style="font-weight: bolder"></div>
            </div>
        </div>
    </div>

</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/keamanan/panjang_chipperteks.js"></script>