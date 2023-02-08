

<!doctype html>
<html lang="en" class="no-js">
  <head>
    

<meta charset="utf-8">



<!-- begin SEO -->









<title>litFS: A lightweight File System - Akash Nagaraj</title>







<meta property="og:locale" content="en-US">
<meta property="og:site_name" content="Akash Nagaraj">
<meta property="og:title" content="litFS: A lightweight File System">


  <link rel="canonical" href="http://localhost:4000/assets/js/portfolio/litfs.js">
  <meta property="og:url" content="http://localhost:4000/assets/js/portfolio/litfs.js">



  <meta property="og:description" content="A FUSE file system built using the Bazil framework in Go. Apart from providing normal I/O operations on files and directories, it also achieves persistence across machine reboots by emulating a single Unix file as a disk for the file system.">



  <meta name="twitter:site" content="@akash__nagaraj">
  <meta name="twitter:title" content="litFS: A lightweight File System">
  <meta name="twitter:description" content="A FUSE file system built using the Bazil framework in Go. Apart from providing normal I/O operations on files and directories, it also achieves persistence across machine reboots by emulating a single Unix file as a disk for the file system.">
  <meta name="twitter:url" content="http://localhost:4000/assets/js/portfolio/litfs.js">

  
    <meta name="twitter:card" content="summary">
    
  

  



  

  












  <script type="application/ld+json">
    {
      "@context" : "http://schema.org",
      "@type" : "Person",
      "name" : "Akash Nagaraj",
      "url" : "http://localhost:4000",
      "sameAs" : null
    }
  </script>






<!-- end SEO -->


<link href="http://localhost:4000/feed.xml" type="application/atom+xml" rel="alternate" title="Akash Nagaraj Feed">

<!-- http://t.co/dKP3o1e -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="http://localhost:4000/assets/css/main.css">

<meta http-equiv="cleartype" content="on">
    

<!-- start custom head snippets -->

<link rel="apple-touch-icon" sizes="57x57" href="http://localhost:4000/images/apple-touch-icon-57x57.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="60x60" href="http://localhost:4000/images/apple-touch-icon-60x60.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="72x72" href="http://localhost:4000/images/apple-touch-icon-72x72.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="76x76" href="http://localhost:4000/images/apple-touch-icon-76x76.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="114x114" href="http://localhost:4000/images/apple-touch-icon-114x114.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="120x120" href="http://localhost:4000/images/apple-touch-icon-120x120.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="144x144" href="http://localhost:4000/images/apple-touch-icon-144x144.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="152x152" href="http://localhost:4000/images/apple-touch-icon-152x152.png?v=M44lzPylqQ">
<link rel="apple-touch-icon" sizes="180x180" href="http://localhost:4000/images/apple-touch-icon-180x180.png?v=M44lzPylqQ">
<link rel="icon" type="image/png" href="http://localhost:4000/images/favicon-32x32.png?v=M44lzPylqQ" sizes="32x32">
<link rel="icon" type="image/png" href="http://localhost:4000/images/android-chrome-192x192.png?v=M44lzPylqQ" sizes="192x192">
<link rel="icon" type="image/png" href="http://localhost:4000/images/favicon-96x96.png?v=M44lzPylqQ" sizes="96x96">
<link rel="icon" type="image/png" href="http://localhost:4000/images/favicon-16x16.png?v=M44lzPylqQ" sizes="16x16">
<link rel="manifest" href="http://localhost:4000/images/manifest.json?v=M44lzPylqQ">
<link rel="mask-icon" href="http://localhost:4000/images/safari-pinned-tab.svg?v=M44lzPylqQ" color="#000000">
<link rel="shortcut icon" href="/images/favicon.ico?v=M44lzPylqQ">
<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="http://localhost:4000/images/mstile-144x144.png?v=M44lzPylqQ">
<meta name="msapplication-config" content="http://localhost:4000/images/browserconfig.xml?v=M44lzPylqQ">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" href="http://localhost:4000/assets/css/academicons.css"/>

<script type="text/x-mathjax-config"> MathJax.Hub.Config({ TeX: { equationNumbers: { autoNumber: "all" } } }); </script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=TeX-MML-AM_CHTML' async></script>

<!-- end custom head snippets -->

  </head>

  <body>

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->
    

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        <button><div class="navicon"></div></button>
        <ul class="visible-links">
          <li class="masthead__menu-item masthead__menu-item--lg"><a href="http://localhost:4000/">Akash Nagaraj</a></li>
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/">About</a></li>
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/publications/">Publications</a></li>
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/portfolio/">Portfolio</a></li>
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/teaching/">Teaching</a></li>
          
            
            <li class="masthead__menu-item"><a href="http://localhost:4000/timeline/">Timeline</a></li>
          
        </ul>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>

    





<div id="main" role="main">
  


  <div class="sidebar sticky">
  



<div itemscope itemtype="http://schema.org/Person">

  <div class="author__avatar">
    	<img class="author__avatar" alt="Akash Nagaraj" onmouseover="hover(this);" onload="set_image(this);" onmouseout="unhover(this);" style="opacity:1; transition:opacity 0.5s linear;" >
  </div>

  <div class="author__content">
    <h3 class="author__name">Akash Nagaraj</h3>
    <p class="author__bio">Research Scholar at Brown Univesity</p>
  </div>
  <script style="display:none;"> 


  </script>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">Follow</button>
    <ul class="author__urls social-icons">
      
        <li><i class="fa fa-fw fa-map-marker" aria-hidden="true"></i> Providence, Rhode Island</li>
      
      
      
      
        <li><a href="mailto:akash_n@brown.edu"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> akash_n@brown.edu</a></li>
      
      
       
      
        <li><a target="_blank" href="https://twitter.com/akash__nagaraj"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i> Twitter</a></li>
      
      
      
      
        <li><a target="_blank" href="https://www.linkedin.com/in/akashnagaraj"><i class="fab fa-fw fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
      
      
      
      
      
      
        <li><a target="_blank" href="https://github.com/grassknoted"><i class="fab fa-fw fa-github" aria-hidden="true"></i> Github</a></li>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        <li><a href="https://scholar.google.com/citations?hl=en&authuser=3&user=t4QvqFgAAAAJ"><i class="fas fa-fw fa-graduation-cap"></i> Google Scholar</a></li>
      
      
      
      
      
        <li><a target="_blank" href="https://grassknoted.github.io/files/Akash_Resume.pdf">&nbsp;<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>&nbsp;&nbsp;CV</a></li>
      
      
    </ul>
  </div>
</div>
<script src="/assets/js/profile_picture.js"></script>
  
  </div>


  <article class="page" itemscope itemtype="http://schema.org/CreativeWork">
    <meta itemprop="headline" content="litFS: A lightweight File System">
    <meta itemprop="description" content="A FUSE file system built using the Bazil framework in Go. Apart from providing normal I/O operations on files and directories, it also achieves persistence across machine reboots by emulating a single Unix file as a disk for the file system.">
    
    

    <div class="page__inner-wrap">
      
        <header>
          <h1 class="page__title" itemprop="headline">litFS: A lightweight File System
</h1>
          
        
        
        
        
             
        
    
        </header>
      

      <section class="page__content" itemprop="text">
        <style>
    .double-val-label {
	 /* display: table; */
	 font-family: 'Roboto', sans-serif;
	 margin: 0.4em auto;
     display: inline-block;
     
}
 .double-val-label>span {
	 background-color: #656565;
	 color: #ffffff;
	 display: table-cell;
	 font-size: 0.9em;
	 font-weight: 400;
	 line-height: 1;
	 padding: .3em .6em;
	 text-align: center;
	 vertical-align: baseline;
	 white-space: nowrap;
}
 .double-val-label>span:first-child {
	 border-radius: 0.25em;
}
 .double-val-label>span:nth-child(2) {
	 border-radius: .25em;
}
 .double-val-label>span.primary {
	 background-color: #337ab7;
}
 .double-val-label>span.success {
	 background-color: #5cb85c;
}
 .double-val-label>span.info {
	 background-color: #5bc0de;
}
 .double-val-label>span.warning {
	 background-color: #f0ad4e;
}
 .double-val-label>span.danger {
	 background-color: #d9534f;

 }
 .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto
}

.mySlides {
    display: none;
  height: 400px;
  border: solid 1px black;
     
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #222428;
    font-weight: bold;
    font-size: 30px;
    transition: .6s ease;
    border-radius: 0 3px 3px 0
}

.next {
    right: -50px;
    border-radius: 3px 3px 3px 3px
}

.prev {
    left: -50px;
    border-radius: 3px 3px 3px 3px
}

.prev:hover,
.next:hover {
    color: #f2f2f2;
    background-color: rgba(0, 0, 0, 0.8)
}

.text {
    color: #f2f2f2;
    font-size: 15px;
    padding-top: 12px;
  padding-bottom: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #222428
}

.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color .6s ease
}

.active,
.dot:hover {
    background-color: #717171
}
 
</style>
<div class="double-val-label"><span class="success">Operating Systems</span></div>
<div class="double-val-label"><span class="info">Data Storage</span></div>
<div class="double-val-label"><span class="danger">System Design</span></div>
<br>
A FUSE file system built using the Bazil framework in Go. Apart from providing normal I/O operations on files and directories, it also achieves persistence across machine reboots by emulating a single Unix file as a disk for the file system.
<br>
<br>
<strong>Technologies Used:</strong> Go, FUSE, Bazil.


<br>
<br>
<strong>My Role:</strong> 
<ul>
    <li>Designed the three-stream action recognition system.</li>
    <li>Developed the frame buffer for real-time processing.</li>
    <li>Neural Network pruning.</li>
</ul>
<div style="text-align: center;"><h3>Project Gallery</h3></div>
<meta name="viewport" content="width=device-width, initial-scale=1">

<div class="slideshow-container" style="width: 600px; height: 400px;">
    <div class="slideshow-inner">
      <div class="mySlides fade">
        <img  src='/images/whats-good.jpeg' style='width: 100%; max-width: 600px; max-height: 400px;' alt="sally lightfoot crab"/>
        <div class="text">Overview of the System</div>
      </div>
      <div class="mySlides fade">
        <img  src='/images/sast.png' style='width: 100%; max-width: 600px; max-height: 400px;' alt="fighting nazca boobies"/>
        <div class="text">SAST</div>
      </div>
      <div class="mySlides fade">
        <img  src='/images/shell.png' style='width: 100%; max-width: 600px; max-height: 400px;' alt="otovalo waterfall"/>
        <div class="text">Shell</div>
      </div>
      <div class="mySlides fade">
        <img  src='/images/sast.png' style='width: 100%; max-width: 600px; max-height: 400px;' alt="pelican"/>
        <div class="text">Pelican</div>
      </div>
    </div>
    <a class="prev" onclick='plusSlides(-1)'>&#10094;</a>
    <a class="next" onclick='plusSlides(1)'>&#10095;</a>
</div>
<br/>
    
<script>
  var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, 4000);

  // COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
clearInterval(myTimer);
if (n < 0){
  showSlides(slideIndex -= 1);
} else {
 showSlides(slideIndex += 1); 
}

//   COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
if (n === -1){
  myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
} else {
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
}
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(n + 1)}, 1000);
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

pause = () => {
clearInterval(myTimer);
}

resume = () =>{
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}
</script>
<div style='text-align: center;'>
    <span class="dot" onclick='currentSlide(1)'></span>
    <span class="dot" onclick='currentSlide(2)'></span>
    <span class="dot" onclick='currentSlide(3)'></span>
    <span class="dot" onclick='currentSlide(4)'></span>
</div>

</div>
        
      </section>

      <footer class="page__meta">
        
        




      </footer>

      

      


    </div>

    
  </article>

  
  
</div>


    <div class="page__footer">
      <footer>
        <!-- start custom footer snippets -->
<a href="/sitemap/">Sitemap</a>
<!-- end custom footer snippets -->

        

<div class="page__footer-follow">
  <ul class="social-icons">
    
      <li><strong>Follow:</strong></li>
    
    
      <li><a href="https://twitter.com/akash__nagaraj"><i class="fab fa-twitter-square" aria-hidden="true"></i> Twitter</a></li>
    
    
    
      <li><a href="http://github.com/grassknoted"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a></li>
    
    
    <!-- <li><a href="http://localhost:4000/feed.xml"><i class="fa fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li> -->
  </ul>
</div>

<div class="page__footer-copyright">&copy; 2023 Akash Nagaraj. Powered by <a href="http://jekyllrb.com" rel="nofollow">Jekyll</a>. Last Updated: 2nd February 2023.</div>

      </footer>
    </div>

    <script src="http://localhost:4000/assets/js/main.min.js"></script>




  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', '', 'auto');
  ga('send', 'pageview');
</script>






  </body>
</html>

