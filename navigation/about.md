---
layout: post
title: About
permalink: /about/
comments: true
---

## As a Conversation Starter

Hi! My name is Kashyap Tubati, but I go by Kash.

If I had to describe myself in three words, I’d say: kind, loyal, and tall.

Most of the time you’ll find me:
- 🎮 Playing Games
- 🏈 Practicing or playing sports with friends
- 🎨 Doing something creative
- 🚲 Riding my eBike with friends

I was born in San Diego, but I’ve also lived in India (2 years), New Jersey (1 year), and Singapore (1 year) because of family. Living in different places has helped me see the world from different perspectives and appreciate where I come from.

I went to Oak Valley Middle School and I’m currently a freshman (9th grade) at Del Norte High School.

<comment>
Flags are made using Wikipedia images
</comment>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px;
        object-fit: contain;
    }
    .grid-item p {
        margin: 5px 0;
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
    }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<div class="grid-container" id="grid_container">
</div>

<script>
    var container = document.getElementById("grid_container");

    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - Born here"},
        {"flag": "4/41/Flag_of_India.svg", "greeting": "Namaste", "description": "India - 2 years"},
        {"flag": "4/48/Flag_of_Singapore.svg", "greeting": "Vanakkam", "description": "Singapore - 1 year"},
        {"flag": "9/92/Flag_of_New_Jersey.svg", "greeting": "Hello", "description": "New Jersey - 1 year"}
    ];

    for (const location of living_in_the_world) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        var img = document.createElement("img");
        img.src = http_source + location.flag;
        img.alt = location.flag + " Flag";

        var description = document.createElement("p");
        description.textContent = location.description;

        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;

        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        container.appendChild(gridItem);
    }
</script>

## 🚀 My Story So Far

Here’s my real-life timeline:

- 🌎 Born in San Diego, California
- 🇮🇳 Lived in India for 2 years with extended family
- 🇸🇬 Spent 1 year in Singapore
- 🇺🇸 Lived in New Jersey for 1 year with cousins
- 🏫 Oak Valley Middle School
- 🏫 Del Norte High School (Class of 2029)

### 🏆 Achievements
- 🏈 Football accomplishments and team achievements
- 💃 Dance achievements when I was younger

Still growing. Still leveling up.


---------------------------------------------------------------------------------------------


## 🌎 Roots, Family & Real Life

I’m Indian — mostly South Indian — and proud of my culture. Even though I was born in San Diego, my background plays a big role in who I am.

My family means the world to me. I’d go to insane heights for them without hesitation.

Outside of school and gaming, I usually:
- 🚲 Ride my eBike with friends
- 🌲 Explore trails around San Diego
- 😂 Hang out and just enjoy life

For me, life is about loyalty, growth, and making memories with the people who matter most.

<comment>
Gallery of Pics, scroll to the right for more ...
</comment>

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/missionary.jpg" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/john_tamara.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/tamara_fam.jpg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/surf.jpg" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/john_lora.jpg" alt="Image 5">
  <img src="{{site.baseurl}}/images/about/lora_fam.jpg" alt="Image 6">
  <img src="{{site.baseurl}}/images/about/lora_fam2.jpg" alt="Image 7">
  <img src="{{site.baseurl}}/images/about/pj_party.jpg" alt="Image 8">
  <img src="{{site.baseurl}}/images/about/trent_family.png" alt="Image 9">
  <img src="{{site.baseurl}}/images/about/claire.jpg" alt="Image 10">
  <img src="{{site.baseurl}}/images/about/grandkids.jpg" alt="Image 11">
  <img src="{{site.baseurl}}/images/about/farm.jpg" alt="Image 12">
</div>