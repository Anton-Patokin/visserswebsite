<script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "<?php echo url('/')?>"
          },
          "headline": "<?php echo substr($content->titel, 0, 110);?>",
          "image": {
            "@type": "ImageObject",
            "url": "<?php echo url('/uploads/big/' . $content->image)?>",
            "height": 600,
            "width": 1000
          },
          "datePublished": "<?php echo $content->created_at;?>",
          "dateModified": "<?php echo $content->updated_at;?>",
          "author": {
            "@type": "Person",
            "name": "<?php echo $content->user->name?>"
          },
           "publisher": {
            "@type": "Organization",
            "name": "Fishing friends",
            "logo": {
              "@type": "ImageObject",
              "url": "<?php echo url('/images/icon/logo-600-60.jpg')?>",
              "width": 600,
              "height": 60
            }
          },
          "description": "Vis plaats | <?php echo $content->watertype;?> | <?php echo $content->vissoorten;?>|<?php echo substr($content->text, 0, 200);?>"
        }

</script>