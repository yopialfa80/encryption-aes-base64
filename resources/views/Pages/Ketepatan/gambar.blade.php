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
                            <label for="kunci-enkripsi-teks-aes" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks-aes" autocomplete="off">
                        </div>
                        <div class="form-group text-center hidden-image-aes">
                            <img id="image-show-aes" src="" width="100" height="100" alt=""/>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-aes" class="text-muted">Plaintext</label>
                            <input class="form-control" oninput="readBackgroundURLaes(this)" type="file" id="formFile">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsiImageAes()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        <div class="alert hidden-hasils-aes pt-4 text-main bg-light-costum" id="hasil-enkripsi-aes" role="alert">
                            <div class="form-group pb-0 mb-0">
                                <label for="hasil-chippertext-teks-aes">Chipperteks Advanced Encryption Standard (AES)</label>
                                <div class="border-costum" style="width: 100%"></div>
                                <div style="max-height: 200px; overflow-y: scroll;" class="mt-3 mb-3" id="hasil-chippertext-teks-aes" style="font-weight: bolder"></div>
                                <div class="border-costum pb-1" style="width: 100%"></div>
                                <div class="btn pl-0 copy text-main mr-2" data-clipboard-target="#hasil-chippertext-teks-aes" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-1" data-feather="copy"></i>
                                    Salin
                                </div>
                                <div class="btn pl-0 copy text-main" data-clipboard-target="#hasil-chippertext-teks-aes" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-1" data-feather="columns" style="font-size: 10px;"></i>
                                    Tempel ke Chipperteks
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 border-right">
                        <div class="form-group">
                            <label for="kunci-enkripsi-teks-rc4" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks-rc4" autocomplete="off">
                        </div>
                        <div class="form-group text-center hidden-image-rc4">
                            <img id="image-show-rc4" src="" width="100" height="100" alt=""/>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-rc4" class="text-muted">Plaintext</label>
                            <input class="form-control" oninput="readBackgroundURLrc4(this)" type="file" id="formFile-rc4">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsiImageRc4()" class="btn btn-danger">Enkripsi</button>
                        </div>
                        <div class="alert hidden-hasils-aes pt-4 text-main bg-light-costum" id="hasil-enkripsi-rc4" role="alert">
                            <div class="form-group pb-0 mb-0">
                                <label for="hasil-chippertext-teks-rc4">Chipperteks Rivest Code 4 (RC4)</label>
                                <div class="border-costum" style="width: 100%"></div>
                                <div class="mt-3 mb-3" style="max-height: 200px; overflow-y: scroll;" id="hasil-chippertext-teks-rc4" style="font-weight: bolder"></div>
                                <div class="border-costum pb-1" style="width: 100%"></div>
                                <div class="btn pl-0 copy text-main mr-2" data-clipboard-target="#hasil-chippertext-teks-rc4" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-1" data-feather="copy"></i>
                                    Salin
                                </div>
                                <div class="btn pl-0 copy text-main" data-clipboard-target="#hasil-chippertext-teks-aes" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                                    <i class="link-icon mr-1" data-feather="columns" style="font-size: 10px;"></i>
                                    Tempel ke Chipperteks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <h6 class="card-title" style="text-transform:none">Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4)</h6>
                <p class="card-description border-bottom mb-5 pb-2">Pengujian pada algoritma Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4) untuk mengetahui perbandingan performa dari kedua algoritma tersebut sehingga menghasilkan algoritma terbaik.</p>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="text-muted">Kunci</label>
                    <input type="text" class="form-control" id="kunci-dekripsi-teks-aes" autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="plaintext-dekripsi-teks-aes" class="text-muted">Chippertext</label>
                    <textarea class="form-control" id="plaintext-dekripsi-teks-aes" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <button type="button" onclick="dekripsiImageAes()" class="btn btn-danger">Dekripsi</button>
                </div>
                <div class="alert hidden-hasils-dekripsi-aes pt-4 text-main bg-dekripsi-costum" id="hasil-dekripsi-aes" role="alert">
                    <div class="form-group pb-0 mb-0">
                        <label for="hasil-chippertext-teks">Plainteks Advanced Encryption Standard (AES)</label>
                        <div class="border-costum" style="width: 100%"></div>
                        <div class="mt-3 mb-3" id="hasil-plaintext-teks-aes" style="font-weight: bolder"></div>
                        <div class="col-md-12 text-center">
                            <img width="200" height="200" class="mt-3 mb-3" id="hasil-plaintext-gambar-aes" style="font-weight: bolder"/>
                        </div>
                        <div class="border-costum pb-1" style="width: 100%"></div>
                        <div class="btn pl-0 copy text-main mr-2" data-clipboard-target="#hasil-chippertext-teks-aes" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                            <i class="link-icon mr-1" data-feather="copy"></i>
                            Salin
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="kunci-dekripsi-teks-rc4" class="text-muted">Kunci</label>
                    <input type="text" class="form-control" id="kunci-dekripsi-teks-rc4" autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="plaintext-dekripsi-teks-rc4" class="text-muted">Chippertext</label>
                    <textarea class="form-control" id="plaintext-dekripsi-teks-rc4" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <button type="button" onclick="dekripsiImageRc4()" class="btn btn-danger">Dekripsi</button>
                </div>
                <div class="alert hidden-hasils-dekripsi-rc4 pt-4 text-main bg-dekripsi-costum" id="hasil-dekripsi-rc4" role="alert">
                    <div class="form-group pb-0 mb-0">
                        <label for="hasil-chippertext-teks">Plainteks Rivest Code 4 (RC4)</label>
                        <div class="border-costum" style="width: 100%"></div>
                        <div class="mt-3 mb-3" id="hasil-plaintext-teks-rc4" style="font-weight: bolder"></div>
                        <div class="col-md-12 text-center">
                            <img width="200" height="200" class="mt-3 mb-3" id="hasil-plaintext-gambar-rc4" style="font-weight: bolder"/>
                        </div>
                        <div class="border-costum pb-1" style="width: 100%"></div>
                        <div class="btn pl-0 copy text-main mr-2" data-clipboard-target="#hasil-chippertext-teks-rc4" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
                            <i class="link-icon mr-1" data-feather="copy"></i>
                            Salin
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>



@include('Frame.footer')
<script src="{{ url('assets/js') }}/ketepatan/gambar.js"></script>