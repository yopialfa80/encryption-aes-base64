@include('Frame.head')

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                
            </video>
                <h6 class="card-title" style="text-transform:none">Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4)</h6>
                <p class="card-description border-bottom mb-5 pb-2">Pengujian pada algoritma Advanced Encryption Standard (AES) dan Rivest Code 4 (RC4) untuk mengetahui perbandingan performa dari kedua algoritma tersebut sehingga menghasilkan algoritma terbaik.</p>
                <div class="row">
                    <div class="col-md-6 border-right">
                        <div class="form-group">
                            <label for="kunci-enkripsi-teks" class="text-muted">Kunci</label>
                            <input type="text" class="form-control" id="kunci-enkripsi-teks-aes" autocomplete="off">
                        </div>
                        <div class="form-group text-center hidden-video">
                            <video width="200" height="100">
                                <source id="video-show-aes" src="" type="video/mp4" />
                            </video>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-aes" class="text-muted">Plaintext</label>
                            <input class="form-control file_multi_video" type="file" id="formFile-aes">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsiVideoAes()" class="btn btn-danger">Enkripsi Advanced Encryption Standard (AES)</button>
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
                        <div class="form-group text-center hidden-video">
                            <video width="200" height="100">
                                <source id="video-show-rc4" src="" type="video/mp4" />
                            </video>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks-rc4" class="text-muted">Plaintext</label>
                            <input class="form-control file_multi_video" type="file" id="formFile-rc4">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="enkripsiVideoRc4()" class="btn btn-danger">Enkripsi Rivest Code 4 (RC4)</button>
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
                                <div class="btn pl-0 copy text-main" data-clipboard-target="#hasil-chippertext-teks-rc4" data-toggle="tooltip" title="" data-original-title="Copy to clipboard">
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

    <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="kunci-dekripsi-teks" class="text-muted">Kunci</label>
                        <input type="text" class="form-control" id="kunci-dekripsi-teks-aes" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="plaintext-dekripsi-teks-aes" class="text-muted">Chippertext</label>
                        <textarea class="form-control" id="plaintext-dekripsi-teks-aes" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="button" onclick="dekripsiVideoAes()" class="btn btn-danger">Dekripsi Advanced Encryption Standard (AES)</button>
                    </div>
                    <div class="alert hidden-hasils-dekripsi-aes pt-4 text-main bg-dekripsi-costum" id="hasil-dekripsi-aes" role="alert">
                        <div class="form-group pb-0 mb-0">
                            <label for="hasil-chippertext-teks-aes">Plainteks Advanced Encryption Standard (AES)</label>
                            <div class="border-costum" style="width: 100%"></div>
                            <div class="form-group text-center">
                                <video controls id="container-aes"  style="width: 100%;">
                                    
                                </video>
                            </div>
                            <div class="mt-3 mb-3" id="hasil-plaintext-teks-aes" style="font-weight: bolder"></div>
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
                        <button type="button" onclick="dekripsiVideoRc4()" class="btn btn-danger">Dekripsi Rivest Code 4 (RC4)</button>
                    </div>
                    <div class="alert hidden-hasils-dekripsi-aes pt-4 text-main bg-dekripsi-costum" id="hasil-dekripsi-rc4" role="alert">
                        <div class="form-group pb-0 mb-0">
                            <label for="hasil-chippertext-teks-rc4">Plainteks Rivest Code 4 (RC4)</label>
                            <div class="border-costum" style="width: 100%"></div>
                            <div class="form-group text-center">
                                <video controls id="container-rc4"  style="width: 100%;">
                                    
                                </video>
                            </div>
                            <div class="mt-3 mb-3" id="hasil-plaintext-teks-rc4" style="font-weight: bolder"></div>
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
</div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/ketepatan/video.js"></script>