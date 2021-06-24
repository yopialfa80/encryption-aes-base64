<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function encrypt($value, $kunci)
    {
        $password = $kunci;
        $salt = openssl_random_pseudo_bytes(8);
        $salted = '';
        $dx = '';
        while (strlen($salted) < 48) {
            $dx = md5($dx . $password . $salt, true);
            $salted .= $dx;
        }
        $key = substr($salted, 0, 32);
        $iv = substr($salted, 32, 16);
        $encrypted_data = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
        $data = ["ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt)];
        $encrypted = json_encode($data);
        return base64_encode($encrypted);
    }

    public function decrypt($value, $kunci)
    {
        $value = base64_decode($value);
        $password = $kunci;
        $json = json_decode($value, true);
        $salt = hex2bin($json["s"]);
        $iv = hex2bin($json["iv"]);
        $ct = base64_decode($json["ct"]);
        $concatedPassphrase = $password . $salt;
        $md5 = [];
        $md5[0] = md5($concatedPassphrase, true);
        $result = $md5[0];
        for ($i = 1; $i < 3; $i++) {
            $md5[$i] = md5($md5[$i - 1] . $concatedPassphrase, true);
            $result .= $md5[$i];
        }
        $key = substr($result, 0, 32);
        $data = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);
        $decrypted = json_decode($data, true);
        return $decrypted;
    }

    public function uploadFile($value, $path)
    {
        $file = $value;
        $nama_file = time()."_".$file->getClientOriginalName();
        $tujuan_upload = public_path('/assets/images/'.$path);
        $file->move($tujuan_upload,$nama_file);
        return $nama_file;
    }

    public function sendResponseOk($data, $message)
    {
		if (empty($data)) {
            $data = [''];
        }

        if (empty($message)) {
            $message = 'success';
        }

        $response = [
            '_status' => 200,
            '_response' => "OK",
            '_message' => $message,
            'data' => $this->encrypt($data)
        ];

        return response()->json($response);
    }

    public function sendResponseFailed($message)
    {
        if (empty($message)) {
            $message = 'Unknown Status';
        }
        $response = [
            '_status' => 500,
            '_response' => "FAILED",
            '_message' => $message,
        ];

        return response()->json($response);
    }
}
