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
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <textarea class="form-control" id="plaintext-enkripsi-teks" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsi_teks()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        <div class="form-group">
                            <label class="border-bottom" for="hasil-chippertext-teks">Chippertext AES dan Base64</label>
                            <div class="pt-3 mb-3" id="hasil-chippertext-teks"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 border-right">
                        <div class="form-group">
                            <button type="button" onclick="startBruteForce()" id="startBruteForce" class="btn btn-danger">Mulai Brute Force</button>
                            <button type="button" onclick="cancelBruteForce()" id="stopBruteForce" class="btn btn-danger">Berhenti</button>
                        </div>
                        <div class="form-group text-center mt-3">
                            <label for="plaintext-enkripsi-teks" id="cracking-password" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks" id="percobaan" class="text-muted"></label>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" id="waktu" class="text-muted"></label><br>
                            <label for="plaintext-enkripsi-teks" id="perkiraan" class="text-muted"></label><br>
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
                            <div class="col-lg-12">
                                <label class="col-form-label">Plainteks</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="hasil-plainteks"></label>
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