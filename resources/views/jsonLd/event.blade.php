<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "<?php echo $content->titel;?>",
  "startDate": "<?php echo $content->datum;?>",
  "location": {
    "@type": "Place",
    "name": "Water: <?php echo $content->water;?>",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "<?php echo $content->straat;?>",
      "addressLocality": "<?php echo $content->stad;?>",
      "postalCode": "<?php echo $content->postCode;?>",
      "addressCountry": "<?php if($content->land=="België"){echo 'BE';}elseif ($content->land=="Nederland"){echo 'NL';} ;?>"
    }
  },
  "image": "<?php echo url('/uploads/big/' . $content->image)?>",
  "description": "<?php echo $content->text;?>",
  "endDate": "<?php echo $content->datum;?>",
  "offers": {
    "@type": "Offer",
    "url": "<?php echo url('/'.$content->type.'/'.$content->id.'/'.str_replace(' ', '-',substr($content->titel,0,25)));?>",
    "price": "<?php echo $content->kostprijs;?>",
    "priceCurrency": "EURO",
    "availability": "http://schema.org/InStock",
    "validFrom": "2017-01-20T16:20-08:00"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Andy Lagunoff"
  }
}
</script>