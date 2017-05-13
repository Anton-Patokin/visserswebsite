<?php

namespace App\Http\Controllers;

use Intervention\Image\Facades\Image;


class FileUploadController extends Controller
{
    public function fileUpload($file)
    {
        $fileName = date("Ymdsmd") . $file->getClientOriginalName();
        $destinationPath = 'uploads\\';

        if ($file->move($destinationPath, $fileName)) {
            $max_with = 500;
            $max_height = 300;
            Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
            Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);
            return $fileName;
        }
    }

    public function fileextExtensionValidation($file)
    {
        $allowed_extensions = ["jpeg", "png", "jpg"];
        $extension = $file->getClientOriginalExtension(); // getting image extension

        //check whether file extension is valid
        if (!in_array($extension, $allowed_extensions)) {
            return false;
        }
        return true;
    }

}
