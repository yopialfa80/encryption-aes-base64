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
                        <div class="form-group">
                            <label for="kunci-enkripsi-teks" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks" autocomplete="off">
                        </div>
                        <div class="form-group text-center hidden-image">
                            <img id="image-show" src="" width="100" height="100" alt=""/>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <input class="form-control" oninput="readBackgroundURL(this)" type="file" id="formFile">
                        </div>
                        {{-- <div class="form-group">
                            <label for="plaintext-dekripsi-teks" class="text-muted">Chippertext</label>
                            <textarea class="form-control" id="plaintext-dekripsi-teks" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext (Result)</label>
                            <textarea class="form-control" id="plaintext-enkripsi-teks" rows="5"></textarea>
                        </div> --}}
                        <div class="form-group">
                            <button type="button" onclick="startTestKecepatan()" class="btn btn-danger">Mulai Uji Kinerja</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">Advanced Encryption Standard (AES) dan Base64</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangAES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiAES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiAES"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">Data Encryption Standard (DES)</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangDES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiDES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiDES"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">Rivest Code 4 (RC4)</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangRC4"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiRC4"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiRC4"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">Triple Data Encryption Standard (Triple DES)</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangTripleDES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiTripleDES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiTripleDES"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">Rabbit</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangRabbit"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiRabbit"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiRabbit"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label class="col-form-label text-red">RC4 - Drop</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Panjang Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="panjangRC4Drop"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsiRC4Drop"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsiRC4Drop"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/kecepatan/gambar.js"></script>