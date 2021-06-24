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
                    <div class="col-md-6 border-right">
                        <div class="form-group">
                            <label for="kunci-enkripsi-teks" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks" autocomplete="off">
                        </div>
                        <div class="form-group text-center hidden-image">
                            <img id="image-show" src="" width="170" height="100" alt=""/>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <input class="form-control" oninput="readBackgroundURL(this)" type="file" id="formFile">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsiImage()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        <div class="alert alert-fill-primary pt-4" id="hasil-enkripsi" role="alert">
                            <div class="form-group">
                                <label class="border-bottom" for="hasil-chippertext-teks">Chippertext</label>
                                <div class="pt-3 mb-3" id="hasil-chippertext-teks"></div>
                                <div class="btn pl-0 copy" data-clipboard-target="#hasil-chippertext-teks" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-2" data-feather="copy"></i>
                                    Copy
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="kunci-dekripsi-teks" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-dekripsi-teks" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="plaintext-dekripsi-teks" class="text-muted">Chippertext</label>
                            <textarea class="form-control" id="plaintext-dekripsi-teks" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="dekripsiImage()" class="btn btn-danger">Dekripsi</button>
                        </div>
                        <div class="alert alert-fill-primary pt-4" id="hasil-dekripsi" role="alert">
                            <div class="form-group text-center">
                                <img id="hasil-plaintext-gambar" src="" width="100%" height="100%" alt=""/>
                                <p id="hasil-plaintext-teks"></p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/ketepatan/gambar.js"></script>