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
                            <button type="button" onclick="enkripsi_teks()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="border-bottom" for="hasil-chippertext-teks-aes">Chippertext Advanced Encryption Standard (AES)</label>
                            <div class="pt-3 mb-3" id="hasil-chippertext-teks-aes"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="border-bottom" for="hasil-chippertext-teks-rc4">Chippertext Rivest Code 4 (RC4)</label>
                            <div class="pt-3 mb-3" id="hasil-chippertext-teks-rc4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <div class="form-group">
            <button type="button" onclick="startBruteForce()" id="startBruteForce" class="btn btn-danger">Mulai Brute Force</button>
            <button type="button" onclick="cancelBruteForce()" id="stopBruteForce" class="btn btn-danger">Berhenti</button>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        
                        <div class="form-group text-center mt-3">
                            <label for="plaintext-enkripsi-teks-aes" id="cracking-password-aes" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks-aes" id="percobaan-aes" class="text-muted"></label>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-aes" id="waktu-aes" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks-aes" id="perkiraan-aes" class="text-muted"></label><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group text-center mt-3">
                            <label for="plaintext-enkripsi-teks-rc4" id="cracking-password-rc4" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks-rc4" id="percobaan-rc4" class="text-muted"></label>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-rc4" id="waktu-rc4" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks-rc4" id="perkiraan-rc4" class="text-muted"></label><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <label class="col-form-label">Plainteks</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="hasil-plainteks-aes"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <label class="col-form-label">Plainteks</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="hasil-plainteks-rc4"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/keamanan/brute_force.js"></script>