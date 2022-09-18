---
title: "Hugo"
date: 2022-08-30T15:42:23+09:00
draft: false
author: Robert Laurie
---

# Hugo development web resources

## Future Web Design

I like this Shawn's YouTube videos on his [Future Web Design channel](https://www.youtube.com/channel/UCtlnMUJr68ytsr11_dv_elg/featured). I did try his course on Skillshare and liked it, but Skillshare charges $120 annual membership on the 30 days free expiration date   so you may want to cancel before the free time expires.

Good video about how to use Bootstrap 5 with Hugo

{{< youtube Vj5zy2q7O9U >}}

The shortcut code for youtube videos is simply.

{{< highlight html >}}
  {{< youtube Vj5zy2q7O9U >}}
{{< /highlight >}}

The layouts/shortcodes/placehold.html code 

{{< highlight html >}}
  {{ $width := .Get 0 }}
  {{ $height := .Get 1 }}
  {{ $color := .Get 2 }}
  <img src="https://via.placeholder.com/{{ $width }}x{{ $height }}/{{ $color }}/FFFFCC.png" alt="placeholder image">
{{< /highlight >}}

{{< placehold 500 250 FF0000 >}}

