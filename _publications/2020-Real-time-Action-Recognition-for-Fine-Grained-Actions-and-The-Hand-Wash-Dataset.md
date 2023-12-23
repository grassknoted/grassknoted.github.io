---
title: "Real-time Action Recognition for Fine-Grained Actions and The Hand Wash Dataset"
collection: publications
permalink: /files/Real-time-Action-Recognition-for-Fine-Grained-Actions-and-The-Hand-Wash-Dataset.pdf
excerpt: '<em>Preprint. Patent Pending. arXiv:2210.07400</em>
<!-- Boostrap 5.2.2 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script> -->
<!-- Boostrap 5.2.2 -->


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Font Awesome -->
<a style="text-decoration: none;" target="_blank" href="https://arxiv.org/abs/2210.07400"><button type="button" class="btn btn-primary"  onclick="event.stopPropagation();" style="background-color: #bd1f36;" ><i class="fa-solid fa-file-pdf"></i> arXiv</button></a>

<a style="text-decoration: none;" target="_blank" href="https://github.com/grassknoted/Modified-Two-Stream-Fusion-for-Real-time-ActionRecognition"><button   onclick="event.stopPropagation();" style="background-color: #6cc644;" type="button" class="btn btn-info"><i class="fa-brands fa-github"></i> GitHub</button></a>

<a style="text-decoration: none;" target="_blank" href="https://www.kaggle.com/datasets/realtimear/hand-wash-dataset/data"><button  onclick="event.stopPropagation();" type="button" class="btn btn-warning" style="background-color: #4078c0;" ><i class="fa-solid fa-database"></i> Data</button></a>'
date: 2022-09-10
authors: '<strong>Akash Nagaraj</strong>, Mukund Sood, Chetna Sureka, Gowri Srinivasa'
paperurl: 'https://www.akashnagaraj.me/files/Real-time-Action-Recognition-for-Fine-Grained-Actions-and-The-Hand-Wash-Dataset.pdf'
# citation: 'A. Nagaraj, M. Sood and G. Srinivasa, "Real-Time Automated Answer Scoring," 2018 IEEE 18th International Conference on Advanced Learning Technologies (ICALT), 2018, pp. 231-232, doi: 10.1109/ICALT.2018.00122.'
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N13ZXFY26T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N13ZXFY26T');
</script>
<!-- Bootstrap 4.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
<!-- Bootstrap 4.0 -->


<!-- JS Popper -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script> -->
<!-- JS Popper -->


<!-- Boostrap 5.2.2 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script> -->
<!-- Boostrap 5.2.2 -->


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Font Awesome -->


<div style="text-align: justify; text-justify: inter-word;"><strong>Abstract:</strong> In this paper we present a three-stream algorithm for real-time action recognition and a new dataset of handwash videos, with the intent of aligning action recognition with real-world constraints to yield effective conclusions. A three-stream fusion algorithm is proposed, which runs both accurately and efficiently, in real-time even on lowpowered systems such as a Raspberry Pi. The cornerstone of the proposed algorithm is the incorporation of both spatial and temporal information, as well as the information of the objects in a video while using an efficient architecture, and Optical Flow computation to achieve commendable results in real-time. The results achieved by this algorithm are benchmarked on the UCF-101 as well as the HMDB-51 datasets, achieving an accuracy of 92.7% and 64.9% respectively. An important point to note is that the algorithm is novel in the aspect that it is also able to learn the intricate differences between extremely similar actions, which would be difficult even for the human eye. Additionally, noticing a dearth in the number of datasets for the recognition of very similar or fine-grained actions, this paper also introduces a new dataset that is made publicly available, the Hand Wash Dataset with the intent of introducing a new benchmark for fine-grained action recognition tasks in the future.</div>
<br>
<div>
<a style="text-decoration: none;" target="_blank" href="https://www.akashnagaraj.me/files/Real-time-Action-Recognition-for-Fine-Grained-Actions-and-The-Hand-Wash-Dataset.pdf"><button type="button" class="btn btn-primary" style="background-color: #bd1f36;"><i class="fa-solid fa-file-pdf"></i> Paper</button></a>

<a style="text-decoration: none;" target="_blank" href="https://github.com/grassknoted/Modified-Two-Stream-Fusion-for-Real-time-ActionRecognition"><button type="button" class="btn btn-info" style="background-color: #6cc644;" ><i class="fa-brands fa-github"></i> GitHub</button></a>

<a style="text-decoration: none;" target="_blank" href="https://www.kaggle.com/datasets/realtimear/hand-wash-dataset/data"><button type="button" class="btn btn-warning" style="background-color: #4078c0;" ><i class="fa-solid fa-database"></i> Data</button></a>
</div>
<br><br>
<strong>Citation:</strong> <em>A. Nagaraj, M. Sood, C. Sureka and G. Srinivasa, "Real-time Action Recognition for Fine-Grained Actions and The Hand Wash Dataset," arXiv preprint arXiv:1711.08200, 2022.</em>