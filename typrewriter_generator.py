'''
Quick Script to generate the typrewriter
effect as seen on the website

Example:
========
0.0%, 30.769230769230774% { content: " "; }
1.2820512820512822%, 29.487179487179493% { content: " T"; }
2.5641025641025643%, 28.205128205128208% { content: " Th"; }
3.8461538461538467%, 26.923076923076927% { content: " Thi"; }
5.128205128205129%, 25.641025641025646% { content: " Thin"; }
6.410256410256411%, 24.358974358974365% { content: " Thing"; }
7.6923076923076925%, 23.07692307692308% { content: " Thing "; }
8.974358974358974%, 21.7948717948718% { content: " Thing 1"; }

33.333333333333336%, 61.53846153846155% { content: " "; }
34.61538461538462%, 60.25641025641026% { content: " T"; }
35.897435897435905%, 58.974358974358985% { content: " Th"; }
37.17948717948719%, 57.6923076923077% { content: " Thi"; }
38.461538461538474%, 56.410256410256416% { content: " Thin"; }
39.74358974358976%, 55.12820512820514% { content: " Thing"; }
41.02564102564104%, 53.846153846153854% { content: " Thing "; }
42.30769230769233%, 52.56410256410257% { content: " Thing 2"; }

64.10256410256412%, 92.30769230769232% { content: " "; }
65.3846153846154%, 91.02564102564104% { content: " T"; }
66.66666666666669%, 89.74358974358975% { content: " Th"; }
67.94871794871797%, 88.46153846153848% { content: " Thi"; }
69.23076923076925%, 87.1794871794872% { content: " Thin"; }
70.51282051282054%, 85.89743589743591% { content: " Thing"; }
71.79487179487182%, 84.61538461538463% { content: " Thing "; }
73.07692307692311%, 83.33333333333334% { content: " Thing 3"; }

'''

# SET THE FOLLOWING 3 VALUES
texts=[" AI Researcher", " Software Developer", "n Educator"]
# All times are in percentage intervals
text_show_time = 8
empty_text_time = 2

char_count = 0
for text in texts:
    char_count += len(text)

percentage_interval = None

total_time = (text_show_time + empty_text_time)*len(texts) + char_count*2
print("Total Time needed in Percentage:", total_time)

percentage_interval = 100/total_time
print("Using percentage Interval:", percentage_interval)

counter = 0.0
previous_chars = 0
for text in texts:
    l = len(text)
    previous_chars += (2*l + text_show_time)
    for char_idx in range(l):
        print(str(counter)+"%, "+str(((previous_chars)*percentage_interval)-char_idx*percentage_interval)+"% { content: \""+text[0:char_idx+1]+"\"; }")
        counter += percentage_interval
    # New line for readability
    print()
    counter = percentage_interval*(empty_text_time) + (previous_chars)*percentage_interval
