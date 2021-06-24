@include('Frame.head')

<style>
    textarea {
  resize: vertical !important;
}
</style>

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
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <textarea class="form-control" id="plaintext-enkripsi-teks" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsi_teks()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        <div class="alert alert-fill-primary hidden-hasils pt-4" id="hasil-enkripsi" role="alert">
                            <div class="form-group">
                                <label class="border-bottom" for="hasil-chippertext-teks">Chippertext AES dan Base64</label>
                                <div class="pt-3 mb-3" id="hasil-chippertext-teks"></div>
                                <div class="btn pl-0 copy" data-clipboard-target="#hasil-chippertext-teks" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-2" data-feather="copy"></i>
                                    Copy
                                </div>
                            </div>
                        </div>

                        <div class="alert alert-fill-success pt-4 hidden-hasils" id="hasil-enkripsi" role="alert">
                            <div class="form-group">
                                <label class="border-bottom" for="hasil-chippertext-teks">Chippertext AES</label>
                                <div class="pt-3 mb-3" id="hasil-chippertext-only-aes"></div>
                            </div>
                        </div>

                        <div class="alert alert-fill-info pt-4 hidden-hasils" id="hasil-enkripsi" role="alert">
                            <div class="form-group">
                                <label class="border-bottom" for="hasil-chippertext-teks">Chippertext Base64</label>
                                <div class="pt-3 mb-3" id="hasil-chippertext-only-base"></div>
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
                            <button type="button" onclick="dekripsi_teks()" class="btn btn-danger">Dekripsi AES dan Base64</button>
                            <button type="button" onclick="dekripsi_teks_aes()" class="btn btn-danger">Dekripsi AES</button>
                            <button type="button" onclick="dekripsi_teks_base64()" class="btn btn-danger">Dekripsi Base64</button>
                        </div>
                        <div class="alert alert-fill-primary pt-4" id="hasil-dekripsi" role="alert">
                            <div class="form-group">
                                <label class="border-bottom">Plaintext</label>
                                <div class="pt-3" id="hasil-plaintext-teks"></div>
                                <div class="btn pl-0 copy" data-clipboard-target="#hasil-plaintext-teks" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-2" data-feather="copy"></i>
                                    Copy
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/ketepatan/teks.js"></script>