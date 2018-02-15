/*
 * this file use for toggle template function
 * -------------------------------------------------- */

//
// countdown
// --------------------------------------------------
//

var _countdown =                        true; // [true, false] - countdown toggle
var _countdown_date =                   [2016, 12, 1]; // 2016[year] - 12[month] - 1[day]
var _countdown_utc =                    false; // [true, false] - utc time

//
// border - header bottom and footer top
// --------------------------------------------------
//

var _site_border =                      true; // [true, false] - border toggle

//
// background
// --------------------------------------------------
// choose background version for each desktop and mobile :)
//

// for desktop
var _bg_style_desktop =                 13;
                                           // 1 = each image at each section
                                           // 2 = each image at each section (mp3 audio)
                                           // 3 = image
                                           // 4 = image (mp3 audio)
                                           // 5 = slideshow
                                           // 6 = slideshow (mp3 audio)
                                           // 7 = slideshow (kenburn)
                                           // 8 = slideshow (kenburn, mp3 audio)
                                           // 9 = html5 video (mute)
                                           // 10 = html5 video (video audio)
                                           // 11 = html5 video (mp3 audio)
                                           // 12 = youtube video (mute)
                                           // 13 = youtube video (video audio)
                                           // 14 = youtube video (mp3 audio)

// for mobile
var _bg_style_mobile =                  4;
                                           // 1 = each image at each section
                                           // 2 = each image at each section (mp3 audio)
                                           // 3 = image
                                           // 4 = image (mp3 audio)
                                           // 5 = slideshow
                                           // 6 = slideshow (mp3 audio)
                                           // 7 = slideshow (kenburn)
                                           // 8 = slideshow (kenburn, mp3 audio)

// if _bg_style == 4 - 6 (slideshow)
var _bg_slideshow_image_amount =        2; // slideshow image amount
var _bg_slideshow_duration =            9000; // millisecond

// if _bg_style == 10 - 12 (youtube video)
var _bg_video_youtube_url =             'qFq9js48q_o'; // youtube video url id - https://www.youtube.com/watch?v=bWHR0fS9jvQ

var _bg_video_youtube_quality =         'hightres'; // hightres, hd1080, hd720, default - youtube video quality
var _bg_video_youtube_start =           0; // seconds - video start time
var _bg_video_youtube_end =             0; // seconds - video end time, 0 to ignored
var _bg_video_youtube_loop =            true; // true, false - video loop

//
// background effect (cloud / star)
// --------------------------------------------------
//

var _bg_effect =                        3; // 0 = disable, 1 = cloud, 2 = parallax star star, 3 = star

//
// if _bg_effect == 1 (cloud)
// --------------------------------------------------
//

var _cloud_opacity =                    1; // [0.1 to 1] - cloud opacity

//
// if _bg_effect == 2 (parallax star)
// --------------------------------------------------
//

var _parallax_star_opacity =            1; // [0.1 to 1] - parallax star opacity

//
// if _bg_effect == 3 (star)
// --------------------------------------------------
//

var _bg_effect_star_color =             'rgba(0, 204, 255, 0.9)';// rgba format - star color
var _bg_effect_star_width =             2.8; // px - star width