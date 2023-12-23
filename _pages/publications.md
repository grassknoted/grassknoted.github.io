---
layout: archive
title: "Publications and Presentations"
permalink: /publications/
author_profile: false
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N13ZXFY26T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N13ZXFY26T');
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
You can also find my articles on <a href="{{author.googlescholar}}" style="text-decoration: none;" href="https://scholar.google.com/citations?user=t4QvqFgAAAAJ&hl=en" target="_blank"><i class="fas fa-fw fa-graduation-cap"></i> Google Scholar</a>.
<h3>(Please click on the title for the manuscript)</h3>
<!-- {% if author.googlescholar %} -->
<!-- You can also find my articles on <u><a href="{{author.googlescholar}}" target="_blank">my Google Scholar profile</a>.</u> -->
<!-- {% endif %} -->

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
  <hr style="height:1px;border-width:0;color:gray;background-color:gray">
{% endfor %}
