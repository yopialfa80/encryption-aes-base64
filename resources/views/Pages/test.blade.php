@include('Frame.head')

head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
</head>


  
  <strong><label>Original String:</label></strong>
  <span id="demo0"></span>

  <br>
  <br>
  
  <strong><label>Encrypted:</label></strong>
  <span id="demo1"></span>

  <br>
  <br>
  
  <strong><label>Decrypted:</label></strong>
  <span id="demo2"></span>

  <br> 
  <br>

  <strong><label>String after Decryption:</label></strong>
  <span id="demo3"></span>

  
  <br />
  <br />

@include('Frame.footer')

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" integrity="sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/sha1.min.js" integrity="sha512-i19qg3d5yHSYVRQizhWLdZCvkenhD2RGY8QZtGhKgw+nu8b7Urndqpov9LwQWeZsIECGjaU0BW9k8lZc5V61uA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/hmac-sha1.min.js" integrity="sha512-OahNHQh8EnqAptVvXgLLIT3LOv+irJSkED9oyUvGvh1MULTHriuXGIk8RHFfRffj5ejGREfE9IRWoBCPSZ5XGw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/aes.min.js" integrity="sha512-eqbQu9UN8zs1GXYopZmnTFFtJxpZ03FHaBMoU3dwoKirgGRss9diYqVpecUgtqW2YRFkIVgkycGQV852cD46+w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/cipher-core.min.js" integrity="sha512-qRk4dSW9/pP06GQ7rtJlw2MLh7si0Xt/PtQSj32iRlB2rYU7tqIfWZAnvwA/kMMS+h/l9tiAC4b48ys++F5veQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-base64.min.js" integrity="sha512-KdYlUmn5GJL1N0dOEXHouJ7i4w2ARpP5IB421hWT09zzvBdxv5GiWaSSiAsx/iYZBO1XHm3hzEN3/PJCNxdJNg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-hex.min.js" integrity="sha512-jDU0YCduSP8z0cvjfPFm7/zN/viOcmNWlq0GUIcjVhuv4WoKcMppghamg4aeuBtJaA0wjtYfxwQjPpVuYGEsBA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>







<script src="{{ url('assets/js') }}/aes_default.js"></script>
