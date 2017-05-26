<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $naam;
    public $mail;
    public $baricht;
    public function __construct($naam,$amail,$baricht)
    {
        $this->naam =$naam;
        $this->mail =$amail;
        $this->baricht=$baricht;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.caontact');
    }
}
