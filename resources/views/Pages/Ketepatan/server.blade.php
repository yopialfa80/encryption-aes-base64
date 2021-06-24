@include('Frame.head')

<nav class="page-breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Main Website</a></li>
        <li class="breadcrumb-item active" aria-current="page">Record</li>
    </ol>
</nav>

<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title" style="text-transform:none">Ketepatan Enkripsi dan Dekripsi ke Server</h6>
                <p class="card-description border-bottom mb-5 pb-2">Enkripsi dan Dekripsi dengan menggabungkan 2 metode yaitu Advanced Encryption Standard (AES)
                     dan Base64. Teks yang di inputkan akan di enkripsi kedalam Advanced Encryption Standard (AES) lalu hasil dari enkripsi tersebut akan di 
                     enkripsi kembali kedalam Base64 sehingga data tersebut dapat dengan mudah di kelola.</p>
                <form id="dataForm">
                    <div class="row">
                        <div class="col-md-12 border-right">
                            <div class="form-group">
                                <label for="kunci-enkripsi-teks" class="text-muted">Kunci</label>
                                <input type="text"  class="form-control" id="kunci-enkripsi" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="plaintext-dekripsi-teks" class="text-muted">Plaintext (Teks)</label>
                                <textarea class="form-control" name="teks" id="plaintext-teks" rows="5"></textarea>
                            </div>
                            <div class="form-group text-center hidden-image">
                                <img id="image-show" src="" width="100" height="100" alt=""/>
                            </div>
                            <div class="form-group">
                                <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext (Gambar)</label>
                                <input class="form-control" name="gambar" oninput="readBackgroundURL(this)" type="file" id="plaintext-gambar">
                            </div>
                            <div class="form-group text-center hidden-video">
                                <video width="200" height="100">
                                    <source id="video-show" src="" type="video/mp4" />
                                </video>
                            </div>
                            <div class="form-group">
                                <label for="plaintext-enkripsi-teks" class="text-muted">Plaintext (Video)</label>
                                <input class="form-control file_multi_video" name="video" type="file" id="plaintext-video">
                            </div>
                            <div class="form-group">
                                <button type="button" onclick="kirimData()" class="btn btn-danger">Enkripsi dan Simpan</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">Data Table</h6>
                <p class="card-description">Read the <a href="https://datatables.net/" target="_blank"> Official DataTables Documentation </a>for a full list of instructions and other options.</p>
                <div class="table-responsive">
                  <table id="dataTableExample" class="table">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Teks</th>
                        <th>Gambar</th>
                        <th>Video</th>
                        <th>Dibuat Pada</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                      </tr>
                      <tr>
                        <td>Yuri Berry</td>
                        <td>Chief Marketing Officer (CMO)</td>
                        <td>New York</td>
                        <td>40</td>
                        <td>2009/06/25</td>
                        <td>$675,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
    </div>

</div>

@include('Frame.footer')
<script src="{{ url('assets/js') }}/ketepatan/server.js"></script>