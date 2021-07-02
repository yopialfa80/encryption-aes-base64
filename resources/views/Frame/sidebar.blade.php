<nav class="sidebar">
    <div class="sidebar-header">
        <a href="#" class="sidebar-brand">
            Space<span>Encrypt</span>
        </a>
        <div class="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="sidebar-body">
        <ul class="nav">
            <li class="nav-item nav-category">Main</li>
            <li class="nav-item">
                <a href="{{ url('dashboard') }}" class="nav-link">
                    <i class="link-icon" data-feather="box"></i>
                    <span class="link-title">Dashboard</span>
                </a>
            </li>
            <li class="nav-item nav-category">KETEPATAN</li>
            <li class="nav-item">
                <a href="{{ url('ketepatan/teks-encrypt') }}" class="nav-link">
                    <i class="link-icon" data-feather="align-left"></i>
                    <span class="link-title">Ketepatan Teks</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('ketepatan/gambar-encrypt') }}" class="nav-link">
                    <i class="link-icon" data-feather="image"></i>
                    <span class="link-title">Ketepatan Gambar</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('ketepatan/video-encrypt') }}" class="nav-link">
                    <i class="link-icon" data-feather="play-circle"></i>
                    <span class="link-title">Ketepatan Video</span>
                </a>
            </li>
            <li class="nav-item nav-category">KECEPATAN</li>
            <li class="nav-item">
                <a href="{{ url('kecepatan/teks-speed') }}" class="nav-link">
                    <i class="link-icon" data-feather="align-left"></i>
                    <span class="link-title">Kecepatan Teks</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('kecepatan/gambar-speed') }}" class="nav-link">
                    <i class="link-icon" data-feather="image"></i>
                    <span class="link-title">Kecepatan Gambar</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('kecepatan/video-speed') }}" class="nav-link">
                    <i class="link-icon" data-feather="play-circle"></i>
                    <span class="link-title">Kecepatan Video</span>
                </a>
            </li>
            <li class="nav-item nav-category">KEAMANAN</li>
            <li class="nav-item">
                <a href="{{ url('keamanan/panjang-chipperteks') }}" class="nav-link">
                    <i class="link-icon" data-feather="command"></i>
                    <span class="link-title">Panjang Chipperteks</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('keamanan/panjang-kunci') }}" class="nav-link">
                    <i class="link-icon" data-feather="cpu"></i>
                    <span class="link-title">Panjang Kunci</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="{{ url('keamanan/infinity-loop') }}" class="nav-link">
                    <i class="link-icon" data-feather="link"></i>
                    <span class="link-title">Infinity Loop</span>
                </a>
            </li>
            {{-- <li class="nav-item">
                <a href="{{ url('keamanan/web-generator') }}" class="nav-link">
                    <i class="link-icon" data-feather="lock"></i>
                    <span class="link-title">Website Generator Online</span>
                </a>
            </li> --}}
            <li class="nav-item">
                <a href="{{ url('keamanan/brute-force') }}" class="nav-link">
                    <i class="link-icon" data-feather="codesandbox"></i>
                    <span class="link-title">Brute Force</span>
                </a>
            </li>

            <li class="nav-item nav-category">implementation</li>
            <li class="nav-item">
                <a href="https://www.nobleui.com/html/documentation/docs.html" class="nav-link">
                    <i class="link-icon" data-feather="alert-circle"></i>
                    <span class="link-title">Dokumentasi</span>
                </a>
            </li>
        </ul>
    </div>
</nav>

@include('Frame.navbar')
