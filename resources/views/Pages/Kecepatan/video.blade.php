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
                        <div class="form-group text-center hidden-video">
                            <video width="200" height="100">
                                <source id="video-show" src="" type="video/mp4" />
                            </video>
                        </div>
                        <div class="form-group">
                            <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext</label>
                            <input class="form-control file_multi_video" type="file" id="formFile">
                        </div>
                        <div class="form-group">
                            <button type="button" onclick="startTestKecepatan()" class="btn btn-danger">Mulai Uji Kinerja</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <canvas id="chartEnkripsi"></canvas>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body">
                <canvas id="chartDekripsi"></canvas>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body text-center">
                Kesimpulan Enkripsi:
                <div class="mt-3 mb-3" id="enkrpsi-paling-cepat" style="font-weight: bolder"></div>
            </div>
        </div>
    </div>

    <div class="col-md-6 grid-margin stretch-card result-card">
        <div class="card">
            <div class="card-body text-center">
                Kesimpulan Dekripsi:
                <div class="mt-3 mb-3" id="dekripsi-paling-cepat" style="font-weight: bolder"></div>
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
                                <label class="col-form-label text-red">Advanced Encryption Standard (AES)</label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsi-AES"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsi-AES"></label>
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
                                <label class="col-form-label">Kecepatan Enkripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="enkripsi-RC4"></label>
                            </div>
                            <div class="col-lg-5">
                                <label class="col-form-label">Kecepatan Dekripsi</label>
                            </div>
                            <div class="col-lg-1">
                                <label class="col-form-label">=</label>
                            </div>
                            <div class="col-lg-6">
                                <label class="col-form-label result-performance" id="dekripsi-RC4"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/kecepatan/video.js"></script>