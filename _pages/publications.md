---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
You can also find my articles on <a href="{{author.googlescholar}}" style="text-decoration: none;" href="https://scholar.google.com/citations?user=_IiJTasAAAAJ&hl=en" target="_blank"><i class="fas fa-fw fa-graduation-cap"></i> Google Scholar</a>.
<h4>(Please click each paper title for details)</h4>
<!-- {% if author.googlescholar %} -->
<!-- You can also find my articles on <u><a href="{{author.googlescholar}}" target="_blank">my Google Scholar profile</a>.</u> -->
<!-- {% endif %} -->

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
