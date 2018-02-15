// demo code for preview only
var $ = jQuery['noConflict']();
(function($) {
    'use strict';
    var _0x7cd2x2 = $('html');
    var _0x7cd2x3 = $('body');
    var _0x7cd2x4 = $('[data-link="section"]');
    var _0x7cd2x5 = $('.site-nav__menu')['find']('a');
    var _0x7cd2x6 = _0x7cd2x4['add'](_0x7cd2x5);
    (function() {
        'use strict';
        if (navigator['userAgent']['match'](/IEMobile\/10\.0/)) {
            var _0x7cd2x7 = document['createElement']('style');
            _0x7cd2x7['appendChild'](document['createTextNode']('@-ms-viewport{width:auto!important}'));
            document['querySelector']('head')['appendChild'](_0x7cd2x7);
        };
    })();
    if (!_0x7cd2x2['hasClass']('desktop')) {
        var _0x7cd2x8 = true;
        _0x7cd2x2['addClass']('is-mobile');
    } else {
        var _0x7cd2x8 = false;
        _0x7cd2x2['addClass']('is-desktop');
    };
    if (_0x7cd2x2['hasClass']('ie9')) {
        var _0x7cd2x9 = true
    };
    $('a[href=#]')['on']('click', function(_0x7cd2xa) {
        _0x7cd2xa['preventDefault']()
    });
    $('.site-footer__social')['clone']()['removeClass']('site-footer__social')['addClass']('site-nav__social')['insertAfter']('.site-nav__menu');
    if (_site_border) {
        _0x7cd2x3['addClass']('border-on')
    };

    function _0x7cd2xb() {
        var _0x7cd2xc = $('#countdown_dashboard');
        if (_countdown) {
            if (_0x7cd2xc['length']) {
                _0x7cd2x3['addClass']('countdown-on');
                _0x7cd2xc['countDown']({
                    targetDate: {
                        "\x64\x61\x79": _countdown_date[2],
                        "\x6D\x6F\x6E\x74\x68": _countdown_date[1],
                        "\x79\x65\x61\x72": _countdown_date[0],
                        "\x68\x6F\x75\x72": 0,
                        "\x6D\x69\x6E": 0,
                        "\x73\x65\x63": 0,
                        "\x75\x74\x63": _countdown_utc
                    },
                    omitWeeks: true
                });
            }
        } else {
            _0x7cd2xc['remove']()
        };
    }
    _0x7cd2xb();

    function _0x7cd2xd() {
        var _0x7cd2xe;
        _0x7cd2xe = '#' + $('.section')['filter']('.is-active')['attr']('id');
        $('a[href="' + _0x7cd2xe + '"]')['addClass']('is-active');
        _0x7cd2x20();
        if (_0x7cd2x2['hasClass']('cssanimations')) {
            $(_0x7cd2xe)['find']('[data-animation-in]')['each'](function() {
                var _0x7cd2xf = $(this);
                var _0x7cd2x10 = 'fadeIn';
                var _0x7cd2x11 = 1;
                if (_0x7cd2xf['data']('animation-in')) {
                    _0x7cd2x10 = _0x7cd2xf['data']('animation-in')
                };
                if (_0x7cd2xf['data']('animation-in-delay')) {
                    _0x7cd2x11 = _0x7cd2xf['data']('animation-in-delay')
                };
                _0x7cd2xf['css']('animation-delay', _0x7cd2x11 + 500 + 'ms')['addClass']('animated')['addClass'](_0x7cd2x10);
            })
        };
        _0x7cd2x3['addClass'](_0x7cd2xe['replace']('#', '') + '-in');
        $('.site-loader')['velocity']('fadeOut', {
            queue: false,
            delay: 500,
            duration: 800,
            complete: function() {
                _0x7cd2x3['addClass']('is-loaded')
            }
        });
    }

    function _0x7cd2x12() {
        $('.site-header__icon__nav')['find']('a')['add'](_0x7cd2x5)['on']('click', function(_0x7cd2xa) {
            _0x7cd2xa['preventDefault']();
            _0x7cd2x13();
        })
    }

    function _0x7cd2x13() {
        var _0x7cd2x14 = $('.site-nav');
        _0x7cd2x3['toggleClass']('nav-in');
        if (_0x7cd2x3['hasClass']('nav-in')) {
            _0x7cd2x14['velocity']('stop', true)['velocity']('fadeIn', {
                duration: 500
            });
            $('.site-nav__inner')['velocity']('stop', true)['velocity']({
                translateY: ['0', '-25%'],
                rotateX: ['0deg', '35deg'],
                opacity: ['1', '.4']
            }, {
                duration: 500
            });
        } else {
            _0x7cd2x14['velocity']('stop', true)['velocity']('fadeOut', {
                duration: 500
            });
            $('.site-nav__inner')['velocity']('stop', true)['velocity']({
                translateY: ['25%', '0'],
                rotateX: ['-35deg', '0deg'],
                opacity: ['.4', '1']
            }, {
                duration: 500
            });
        };
    }
    _0x7cd2x12();

    function _0x7cd2x15() {
        var _0x7cd2x16 = $('.section');
        var _0x7cd2x17 = [];
        _0x7cd2x16['each'](function() {
            _0x7cd2x17['push'](this['id'])
        });
        _0x7cd2x6['on']('click', function(_0x7cd2xa) {
            var _0x7cd2xf = $(this);
            var _0x7cd2xe = _0x7cd2xf['attr']('href');
            var _0x7cd2x18 = 1;
            _0x7cd2xa['preventDefault']();
            if (!$(_0x7cd2xe)['length'] || _0x7cd2xf['hasClass']('is-active')) {
                return false
            };
            if (_0x7cd2x3['hasClass']('is-loaded')) {
                if (!_0x7cd2x3['hasClass']('animating')) {
                    _0x7cd2x6['filter']('.is-active')['removeClass']('is-active');
                    _0x7cd2x1e();
                    if (_0x7cd2x2['hasClass']('cssanimations')) {
                        _0x7cd2x16['filter']('.is-active')['find']('[data-animation-out]')['each'](function() {
                            var _0x7cd2x19 = $(this)['data']('animation-out-delay');
                            if (_0x7cd2x19) {
                                _0x7cd2x18 = _0x7cd2x19 > _0x7cd2x18 ? _0x7cd2x19 : _0x7cd2x18
                            };
                        })
                    };
                    $('.site-loader')['velocity']('fadeIn', {
                        queue: false,
                        delay: _0x7cd2x18 + 500,
                        duration: 800,
                        complete: function() {
                            _0x7cd2x3['removeClass']('animating');
                            $('.site-wrap')['scrollTop'](0);
                            $('.site-wrap')['perfectScrollbar']('update');
                            $('.section')['filter']('.is-active')['removeClass']('is-active');
                            $(_0x7cd2xe)['addClass']('is-active');
                            $('a[href="' + _0x7cd2xe + '"]')['addClass']('is-active');
                            $['each'](_0x7cd2x17, function(_0x7cd2x1a, _0x7cd2x1b) {
                                _0x7cd2x3['removeClass'](_0x7cd2x1b + '-in')
                            });
                            _0x7cd2x3['addClass'](_0x7cd2xe['replace']('#', '') + '-in');
                            $('.form-group')['removeClass']('error');
                            $('.form-notify')['removeClass']('valid error')['html']('')['hide']();
                            $(this)['velocity']('fadeOut', {
                                delay: 100,
                                duration: 800
                            });
                            setTimeout(function() {
                                _0x7cd2x20();
                                _0x7cd2x1c();
                            }, 0);
                        }
                    });
                }
            };
        });
    }
    _0x7cd2x15();

    function _0x7cd2x1c() {
        var _0x7cd2x1d = $('.section')['filter']('.is-active');
        _0x7cd2x1d['find']('[data-animation-in]')['each'](function() {
            var _0x7cd2xf = $(this);
            var _0x7cd2x10 = 'fadeIn';
            var _0x7cd2x11 = 100;
            if (_0x7cd2xf['data']('animation-in')) {
                _0x7cd2x10 = _0x7cd2xf['data']('animation-in')
            };
            if (_0x7cd2xf['data']('animation-in-delay')) {
                _0x7cd2x11 = _0x7cd2xf['data']('animation-in-delay')
            };
            _0x7cd2xf['css']('animation-delay', _0x7cd2x11 + 'ms')['addClass']('animated')['addClass'](_0x7cd2x10);
        });
    }

    function _0x7cd2x1e() {
        var _0x7cd2x18 = 1;
        _0x7cd2x3['addClass']('animating');
        $('[data-animation-out]')['each'](function() {
            var _0x7cd2xf = $(this);
            var _0x7cd2x10 = 'fadeIn';
            var _0x7cd2x1f = 'fadeOut';
            var _0x7cd2x11 = 100;
            var _0x7cd2x19 = 1;
            if (_0x7cd2xf['data']('animation-in')) {
                _0x7cd2x10 = _0x7cd2xf['data']('animation-in')
            };
            if (_0x7cd2xf['data']('animation-out')) {
                _0x7cd2x1f = _0x7cd2xf['data']('animation-out')
            };
            if (_0x7cd2xf['data']('animation-in-delay')) {
                _0x7cd2x11 = _0x7cd2xf['data']('animation-in-delay')
            };
            if (_0x7cd2xf['data']('animation-out-delay')) {
                _0x7cd2x19 = _0x7cd2xf['data']('animation-out-delay')
            };
            _0x7cd2xf['css']('animation-delay', _0x7cd2x11 + 'ms');
            if (_0x7cd2xf['closest']('.section')['hasClass']('is-active')) {
                _0x7cd2xf['removeClass'](_0x7cd2x10)['addClass'](_0x7cd2x1f);
                if (_0x7cd2xf['data']('animation-out-delay')) {
                    _0x7cd2xf['css']('animation-delay', _0x7cd2x19 + 'ms')
                } else {
                    _0x7cd2xf['css']('animation-delay', '1ms')
                };
            } else {
                _0x7cd2xf['removeClass'](_0x7cd2x10)['removeClass'](_0x7cd2x1f)['removeAttr']('style', 'animation-delay')
            };
        });
    }

    function _0x7cd2x20() {
        var _0x7cd2x21 = $('.site-wrap');
        if (!_0x7cd2x8) {
            _0x7cd2x21['perfectScrollbar']({
                suppressScrollX: true
            })
        };
    }

    function _0x7cd2x22() {
        var _0x7cd2x23 = $('#formContact');
        var _0x7cd2x24 = _0x7cd2x23['find']('.form-notify');
        _0x7cd2x23['validate']({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(_0x7cd2x25, _0x7cd2x26) {},
            highlight: function(_0x7cd2x26) {
                $(_0x7cd2x26)['parent']('.form-group')['addClass']('error')
            },
            unhighlight: function(_0x7cd2x26) {
                $(_0x7cd2x26)['parent']('.form-group')['removeClass']('error')
            },
            submitHandler: function(_0x7cd2x27) {
                $(_0x7cd2x27)['ajaxSubmit']({
                    type: 'POST',
                    url: 'assets/php/contact.php',
                    dataType: 'json',
                    cache: false,
                    data: _0x7cd2x23['serialize'](),
                    success: function(_0x7cd2x28) {
                        if (_0x7cd2x28['code'] == 0) {
                            _0x7cd2x23['validate']()['resetForm']();
                            _0x7cd2x23[0]['reset']();
                            _0x7cd2x23['find']('.form-label')['removeClass']('error');
                            _0x7cd2x23['find']('button')['blur']();
                            _0x7cd2x24['removeClass']('valid error')['addClass']('valid')['html'](_0x7cd2x28['message'])['show']();
                        } else {
                            _0x7cd2x24['removeClass']('valid error')['addClass']('error')['html'](_0x7cd2x28['message'])['show']()
                        }
                    },
                    error: function(_0x7cd2x28) {
                        _0x7cd2x24['removeClass']('valid')['addClass']('error')['html']('An error occurred. Please try again later.')['show']()
                    }
                })
            },
            invalidHandler: function(_0x7cd2x29, _0x7cd2x2a) {
                var _0x7cd2x2b = _0x7cd2x2a['numberOfInvalids']();
                if (_0x7cd2x2b) {
                    var _0x7cd2x2c = _0x7cd2x2b == 1 ? 'You missed 1 field. It has been highlighted.' : 'You missed ' + _0x7cd2x2b + ' fields. They have been highlighted.';
                    _0x7cd2x24['removeClass']('valid error')['addClass']('error')['html'](_0x7cd2x2c)['show']();
                };
            }
        });
    }
    _0x7cd2x22();

    function _0x7cd2x2d() {
        var _0x7cd2x2e = $('a[href="#newsletter"]');
        var _0x7cd2x23 = $('#formNewsletter');
        var _0x7cd2x24 = _0x7cd2x23['find']('.form-notify');
        var _0x7cd2x2f = {
            closeMarkup: '<div class="mfp-close_c mfp-close"></div>',
            type: 'inline',
            overflowY: 'scroll',
            removalDelay: 500,
            mainClass: 'mfp-effect',
            preloader: false,
            focus: 'input',
            callbacks: {
                beforeOpen: function() {
                    if ($(window)['width']() < 768) {
                        this['st']['focus'] = false
                    } else {
                        this['st']['focus'] = '#newsletterEmail'
                    };
                    _0x7cd2x3['addClass']('newsletter-in');
                },
                beforeClose: function() {
                    _0x7cd2x3['removeClass']('newsletter-in')
                },
                afterClose: function() {
                    _0x7cd2x2e['blur']();
                    _0x7cd2x23['find']('.form-group')['removeClass']('error');
                    _0x7cd2x24['removeClass']('valid error')['html']('')['hide']();
                }
            },
            midClick: true
        };
        _0x7cd2x2e['magnificPopup'](_0x7cd2x2f);
        _0x7cd2x23['validate']({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {},
            errorPlacement: function(_0x7cd2x25, _0x7cd2x26) {},
            highlight: function(_0x7cd2x26) {
                $(_0x7cd2x26)['parent']('.form-group')['addClass']('error')
            },
            unhighlight: function(_0x7cd2x26) {
                $(_0x7cd2x26)['parent']('.form-group')['removeClass']('error')
            },
            submitHandler: function(_0x7cd2x27) {
                $(_0x7cd2x27)['ajaxSubmit']({
                    type: 'POST',
                    url: 'assets/php/newsletter.php',
                    dataType: 'json',
                    cache: false,
                    data: _0x7cd2x23['serialize'](),
                    success: function(_0x7cd2x28) {
                        if (_0x7cd2x28['code'] == 0) {
                            _0x7cd2x23['validate']()['resetForm']();
                            _0x7cd2x23[0]['reset']();
                            _0x7cd2x23['find']('.form-label')['removeClass']('error');
                            _0x7cd2x23['find']('button')['blur']();
                            _0x7cd2x24['removeClass']('error')['addClass']('valid')['html'](_0x7cd2x28['message'])['show']();
                        } else {
                            _0x7cd2x24['removeClass']('valid')['addClass']('error')['html'](_0x7cd2x28['message'])['show']()
                        }
                    },
                    error: function(_0x7cd2x28) {
                        _0x7cd2x24['removeClass']('valid')['addClass']('error')['html']('An error occurred. Please try again later.')['show']();;;
                    }
                })
            },
            invalidHandler: function(_0x7cd2x29, _0x7cd2x2a) {
                var _0x7cd2x2b = _0x7cd2x2a['numberOfInvalids']();
                if (_0x7cd2x2b) {
                    var _0x7cd2x2c = _0x7cd2x2b == 1 ? 'You missed 1 field. It has been highlighted.' : 'You missed ' + _0x7cd2x2b + ' fields. They have been highlighted.';
                    _0x7cd2x24['removeClass']('valid')['addClass']('error')['html'](_0x7cd2x2c)['show']();
                };
            }
        });
    }
    _0x7cd2x2d();

    function _0x7cd2x30() {
        if (_0x7cd2x8) {
            if (_bg_style_mobile == 3 || _bg_style_mobile == 4) {
                _0x7cd2x31()
            } else {
                if (_bg_style_mobile == 5 || _bg_style_mobile == 6 || _bg_style_mobile == 7 || _bg_style_mobile == 8) {
                    $(window)['on']('load', function() {
                        _0x7cd2x32()
                    })
                }
            }
        } else {
            if (_bg_style_desktop == 3 || _bg_style_desktop == 4) {
                _0x7cd2x31()
            } else {
                if (_bg_style_desktop == 5 || _bg_style_desktop == 6 || _bg_style_desktop == 7 || _bg_style_desktop == 8) {
                    _0x7cd2x32()
                } else {
                    if (_bg_style_desktop == 9 || _bg_style_desktop == 10 || _bg_style_desktop == 11) {
                        _0x7cd2x36()
                    } else {
                        if (_bg_style_desktop == 12 || _bg_style_desktop == 13 || _bg_style_desktop == 14) {
                            _0x7cd2x3a()
                        }
                    }
                }
            }
        }
    }
    _0x7cd2x30();

    function _0x7cd2x31() {
        $('.site-bg__video')['remove']();
        _0x7cd2x3['addClass']('is-site-bg-img');
    }

    function _0x7cd2x32() {
        var _0x7cd2x33 = $('.site-bg__img');
        $('.site-bg__video')['remove']();
        _0x7cd2x3['addClass']('is-site-bg-slideshow');
        for (var _0x7cd2x1a = 1; _0x7cd2x1a <= _bg_slideshow_image_amount; _0x7cd2x1a++) {
            _0x7cd2x33['append']('<img src="assets/img/bg/site-bg-slideshow-' + (_0x7cd2x1a < 10 ? '0' + _0x7cd2x1a : _0x7cd2x1a) + '.jpg">')
        };
        if (_0x7cd2x8) {
            if (_bg_style_mobile == 5 || _bg_style_mobile == 6) {
                _0x7cd2x34()
            } else {
                if (_bg_style_mobile == 7 || _bg_style_mobile == 8) {
                    _0x7cd2x35()
                }
            }
        } else {
            if (_bg_style_desktop == 5 || _bg_style_desktop == 6) {
                _0x7cd2x34()
            } else {
                if (_bg_style_desktop == 7 || _bg_style_desktop == 8) {
                    _0x7cd2x35()
                }
            }
        };

        function _0x7cd2x34() {
            _0x7cd2x33['ss']({
                fullscreen: true,
                duration: _bg_slideshow_duration,
                fadeInDuration: 1500
            })
        }

        function _0x7cd2x35() {
            _0x7cd2x33['kenburnsy']({
                fullscreen: true,
                duration: _bg_slideshow_duration,
                fadeInDuration: 1500
            })
        }
    }

    function _0x7cd2x36() {
        var _0x7cd2x37 = $('.site-bg__video');
        var _0x7cd2x38 = $('.site-header__icon__audio');
        _0x7cd2x3['addClass']('is-site-bg-video');
        _0x7cd2x37['append']('<video id="videoPlayer" autoplay loop>' + '<source src="assets/video/video.mp4" type="video/mp4">' + '</video>');
        var _0x7cd2x39 = document['getElementById']('videoPlayer');
        if (_bg_style_desktop == 9) {
            _0x7cd2x39['muted'] = true;
            _0x7cd2x38['remove']();
        } else {
            if (_bg_style_desktop == 10) {
                _0x7cd2x3['addClass']('is-audio-on');
                _0x7cd2x38['on']('click', function() {
                    if (_0x7cd2x3['hasClass']('is-audio-on')) {
                        _0x7cd2x39['muted'] = true;
                        _0x7cd2x3['removeClass']('is-audio-on')['addClass']('is-audio-off');
                    } else {
                        if (_0x7cd2x3['hasClass']('is-audio-off')) {
                            _0x7cd2x39['muted'] = false;
                            _0x7cd2x3['removeClass']('is-audio-off')['addClass']('is-audio-on');
                        }
                    }
                });
            }
        };
    }

    function _0x7cd2x3a() {
        var _0x7cd2x37 = $('.site-bg__video');
        var _0x7cd2x38 = $('.site-header__icon__audio');
        _0x7cd2x3['addClass']('is-site-bg-video-youtube');
        if (_bg_style_desktop == 12 || _bg_style_desktop == 14) {
            _0x7cd2x37['attr']('data-property', '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: true, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');
            _0x7cd2x37.YTPlayer();
        } else {
            _0x7cd2x37['attr']('data-property', '{videoURL: _bg_video_youtube_url, autoPlay: true, loop: _bg_video_youtube_loop, startAt: _bg_video_youtube_start, stopAt: _bg_video_youtube_end, mute: false, quality: _bg_video_youtube_quality, realfullscreen: true, optimizeDisplay: true, addRaster: false, showYTLogo: false, showControls: false, stopMovieOnBlur: false, containment: "self"}');
            _0x7cd2x37.YTPlayer();
            _0x7cd2x3['addClass']('is-audio-on');
            _0x7cd2x38['on']('click', function() {
                if (_0x7cd2x3['hasClass']('is-audio-on')) {
                    _0x7cd2x37.YTPMute();
                    _0x7cd2x3['removeClass']('is-audio-on')['addClass']('is-audio-off');
                } else {
                    if (_0x7cd2x3['hasClass']('is-audio-off')) {
                        _0x7cd2x37.YTPUnmute();
                        _0x7cd2x3['removeClass']('is-audio-off')['addClass']('is-audio-on');
                    }
                }
            });
        };
    }

    function _0x7cd2x3b() {
        if (_bg_style_mobile == 2 || _bg_style_mobile == 4 || _bg_style_mobile == 6 || _bg_style_mobile == 8 || _bg_style_desktop == 2 || _bg_style_desktop == 4 || _bg_style_desktop == 6 || _bg_style_desktop == 8 || _bg_style_desktop == 11 || _bg_style_desktop == 14) {
            _0x7cd2x3['append']('<audio id="audioPlayer" loop>' + '<source src="assets/audio/audio.mp3" type="audio/mpeg">' + '</audio>')
        };
        if (_0x7cd2x8) {
            if (_bg_style_mobile == 2 || _bg_style_mobile == 4 || _bg_style_mobile == 6 || _bg_style_mobile == 8) {
                _0x7cd2x3['addClass']('is-audio-off');
                _0x7cd2x3d();
            }
        } else {
            if (_bg_style_desktop == 2 || _bg_style_desktop == 4 || _bg_style_desktop == 6 || _bg_style_desktop == 8 || _bg_style_desktop == 11 || _bg_style_desktop == 14) {
                var _0x7cd2x3c = document['getElementById']('audioPlayer');
                _0x7cd2x3['addClass']('is-audio-on');
                _0x7cd2x3c['play']();
                _0x7cd2x3d();
            }
        };

        function _0x7cd2x3d() {
            var _0x7cd2x38 = $('.site-header__icon__audio');
            var _0x7cd2x3c = document['getElementById']('audioPlayer');
            _0x7cd2x38['on']('click', function() {
                var _0x7cd2xf = $(this);
                if (_0x7cd2x3['hasClass']('is-audio-on')) {
                    _0x7cd2x3c['pause']();
                    _0x7cd2x3['removeClass']('is-audio-on')['addClass']('is-audio-off');
                } else {
                    if (_0x7cd2x3['hasClass']('is-audio-off')) {
                        _0x7cd2x3c['play']();
                        _0x7cd2x3['removeClass']('is-audio-off')['addClass']('is-audio-on');
                    }
                };
            });
        }
    }
    _0x7cd2x3b();

    function _0x7cd2x3e() {
        if (_bg_effect == 0) {
            $('.site-bg__canvas')['remove']()
        } else {
            if (_bg_effect == 1) {
                _0x7cd2x3f()
            } else {
                if (_bg_effect == 2) {
                    _0x7cd2x45()
                } else {
                    if (_bg_effect == 3) {
                        _0x7cd2x4a()
                    }
                }
            }
        }
    }

    function _0x7cd2x3f() {
        var _0x7cd2x40 = $('.site-bg__effect');
        $('.site-bg__canvas')['remove']();
        _0x7cd2x40['css']('opacity', _cloud_opacity);
        if (_0x7cd2x40['length']) {
            _0x7cd2x40['append']('<div class="cloud cloud-01"></div>' + '<div class="cloud cloud-02"></div>' + '<div class="cloud cloud-03"></div>');
            _0x7cd2x3['addClass']('is-site-bg-cloud');
            _0x7cd2x41();
            _0x7cd2x43();
            _0x7cd2x44();
        };
    }

    function _0x7cd2x41() {
        var _0x7cd2x42 = $('.cloud-01');
        _0x7cd2x42['velocity']({
            translateZ: '0',
            translateX: ['-100%', '100%']
        }, {
            duration: 25000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateX: '100%'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x41
                })
            }
        });
    }

    function _0x7cd2x43() {
        var _0x7cd2x42 = $('.cloud-02');
        _0x7cd2x42['velocity']({
            translateZ: '0',
            translateX: ['-100%', '100%']
        }, {
            duration: 35000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateX: '100%'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x43
                })
            }
        });
    }

    function _0x7cd2x44() {
        var _0x7cd2x42 = $('.cloud-03');
        _0x7cd2x42['velocity']({
            translateZ: '0',
            translateX: ['-100%', '100%']
        }, {
            duration: 45000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateX: '100%'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x44
                })
            }
        });
    }

    function _0x7cd2x45() {
        var _0x7cd2x40 = $('.site-bg__effect');
        $('.site-bg__canvas')['remove']();
        _0x7cd2x40['css']('opacity', 0);
        if (_0x7cd2x40['length']) {
            _0x7cd2x40['append']('<div class="star star-01"></div>' + '<div class="star star-02"></div>' + '<div class="star star-03"></div>');
            _0x7cd2x3['addClass']('is-site-bg-parallax-star');
            _0x7cd2x46();
            _0x7cd2x48();
            _0x7cd2x49();
            $(window)['on']('load', function() {
                setTimeout(function() {
                    _0x7cd2x40['velocity']({
                        translateZ: '0',
                        opacity: [_parallax_star_opacity, '0']
                    }, {
                        display: 'block',
                        duration: 3000
                    })
                }, 2000)
            });
        };
    }

    function _0x7cd2x46() {
        var _0x7cd2x47 = $('.star-01');
        _0x7cd2x47['velocity']({
            translateZ: '0',
            translateY: ['-2000px', '0']
        }, {
            duration: 50000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateY: '0'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x46
                })
            }
        });
    }

    function _0x7cd2x48() {
        var _0x7cd2x47 = $('.star-02');
        _0x7cd2x47['velocity']({
            translateZ: '0',
            translateY: ['-2000px', '0']
        }, {
            duration: 100000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateY: '0'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x48
                })
            }
        });
    }

    function _0x7cd2x49() {
        var _0x7cd2x47 = $('.star-03');
        _0x7cd2x47['velocity']({
            translateZ: '0',
            translateY: ['-2000px', '0']
        }, {
            duration: 150000,
            ease: 'liner',
            queue: false,
            complete: function() {
                $(this)['velocity']({
                    translateY: '0'
                }, {
                    duration: 0,
                    queue: false,
                    complete: _0x7cd2x49
                })
            }
        });
    }

    function _0x7cd2x4a() {
        var _0x7cd2x4b = $('.site-bg__canvas');
        _0x7cd2x3['addClass']('is-site-bg-star');

        function _0x7cd2x4c(_0x7cd2x4d) {
            var _0x7cd2x4e = 12000;
            var _0x7cd2x4f = 0.2;
            var _0x7cd2x50 = $(window)['width']();
            var _0x7cd2x51 = $(window)['height']();
            var _0x7cd2x52 = Math['round'](_0x7cd2x51 * _0x7cd2x50 / _0x7cd2x4e);
            var _0x7cd2xf = $(this),
                _0x7cd2x53 = _0x7cd2x4d['getContext']('2d');
            _0x7cd2xf['config'] = {
                star: {
                    color: _bg_effect_star_color,
                    width: _bg_effect_star_width
                },
                line: {
                    color: _bg_effect_star_color,
                    width: 0.4
                },
                position: {
                    x: _0x7cd2x4d['width'] * 0.5,
                    y: _0x7cd2x4d['height'] * 0.5
                },
                velocity: _0x7cd2x4f,
                length: _0x7cd2x52,
                distance: 130,
                radius: 120,
                stars: []
            };

            function _0x7cd2x54() {
                this['x'] = Math['random']() * _0x7cd2x4d['width'];
                this['y'] = Math['random']() * _0x7cd2x4d['height'];
                this['vx'] = (_0x7cd2xf['config']['velocity'] - (Math['random']() * 0.3));
                this['vy'] = (_0x7cd2xf['config']['velocity'] - (Math['random']() * 0.3));
                this['radius'] = Math['random']() * _0x7cd2xf['config']['star']['width'];
            }
            _0x7cd2x54['prototype'] = {
                create: function() {
                    _0x7cd2x53['beginPath']();
                    _0x7cd2x53['arc'](this['x'], this['y'], this['radius'], 0, Math['PI'] * 2, false);
                    _0x7cd2x53['fill']();
                },
                animate: function() {
                    var _0x7cd2x1a;
                    for (_0x7cd2x1a = 0; _0x7cd2x1a < _0x7cd2xf['config']['length']; _0x7cd2x1a++) {
                        var _0x7cd2x55 = _0x7cd2xf['config']['stars'][_0x7cd2x1a];
                        if (_0x7cd2x55['y'] < 0 || _0x7cd2x55['y'] > _0x7cd2x4d['height']) {
                            _0x7cd2x55['vx'] = _0x7cd2x55['vx'];
                            _0x7cd2x55['vy'] = -_0x7cd2x55['vy'];
                        } else {
                            if (_0x7cd2x55['x'] < 0 || _0x7cd2x55['x'] > _0x7cd2x4d['width']) {
                                _0x7cd2x55['vx'] = -_0x7cd2x55['vx'];
                                _0x7cd2x55['vy'] = _0x7cd2x55['vy'];
                            }
                        };
                        _0x7cd2x55['x'] += _0x7cd2x55['vx'];
                        _0x7cd2x55['y'] += _0x7cd2x55['vy'];
                    };
                },
                line: function() {
                    var _0x7cd2x56 = _0x7cd2xf['config']['length'],
                        _0x7cd2x57, _0x7cd2x58, _0x7cd2x1a, _0x7cd2x59;
                    for (_0x7cd2x1a = 0; _0x7cd2x1a < _0x7cd2x56; _0x7cd2x1a++) {
                        for (_0x7cd2x59 = 0; _0x7cd2x59 < _0x7cd2x56; _0x7cd2x59++) {
                            _0x7cd2x57 = _0x7cd2xf['config']['stars'][_0x7cd2x1a];
                            _0x7cd2x58 = _0x7cd2xf['config']['stars'][_0x7cd2x59];
                            if ((_0x7cd2x57['x'] - _0x7cd2x58['x']) < _0x7cd2xf['config']['distance'] && (_0x7cd2x57['y'] - _0x7cd2x58['y']) < _0x7cd2xf['config']['distance'] && (_0x7cd2x57['x'] - _0x7cd2x58['x']) > -_0x7cd2xf['config']['distance'] && (_0x7cd2x57['y'] - _0x7cd2x58['y']) > -_0x7cd2xf['config']['distance']) {
                                if ((_0x7cd2x57['x'] - _0x7cd2xf['config']['position']['x']) < _0x7cd2xf['config']['radius'] && (_0x7cd2x57['y'] - _0x7cd2xf['config']['position']['y']) < _0x7cd2xf['config']['radius'] && (_0x7cd2x57['x'] - _0x7cd2xf['config']['position']['x']) > -_0x7cd2xf['config']['radius'] && (_0x7cd2x57['y'] - _0x7cd2xf['config']['position']['y']) > -_0x7cd2xf['config']['radius']) {
                                    _0x7cd2x53['beginPath']();
                                    _0x7cd2x53['moveTo'](_0x7cd2x57['x'], _0x7cd2x57['y']);
                                    _0x7cd2x53['lineTo'](_0x7cd2x58['x'], _0x7cd2x58['y']);
                                    _0x7cd2x53['stroke']();
                                    _0x7cd2x53['closePath']();
                                }
                            };
                        }
                    };
                }
            };
            _0x7cd2xf['createStars'] = function() {
                var _0x7cd2x56 = _0x7cd2xf['config']['length'],
                    _0x7cd2x55, _0x7cd2x1a;
                _0x7cd2x53['clearRect'](0, 0, _0x7cd2x4d['width'], _0x7cd2x4d['height']);
                for (_0x7cd2x1a = 0; _0x7cd2x1a < _0x7cd2x56; _0x7cd2x1a++) {
                    _0x7cd2xf['config']['stars']['push'](new _0x7cd2x54());
                    _0x7cd2x55 = _0x7cd2xf['config']['stars'][_0x7cd2x1a];
                    _0x7cd2x55['create']();
                };
                _0x7cd2x55['line']();
                _0x7cd2x55['animate']();
            };
            _0x7cd2xf['setCanvas'] = function() {
                _0x7cd2x4d['width'] = window['innerWidth'];
                _0x7cd2x4d['height'] = window['innerHeight'];
            };
            _0x7cd2xf['setContext'] = function() {
                _0x7cd2x53['fillStyle'] = _0x7cd2xf['config']['star']['color'];
                _0x7cd2x53['strokeStyle'] = _0x7cd2xf['config']['line']['color'];
                _0x7cd2x53['lineWidth'] = _0x7cd2xf['config']['line']['width'];
                _0x7cd2x53['fill']();
            };
            _0x7cd2xf['loop'] = function(_0x7cd2x5a) {
                _0x7cd2x5a();
                _0x7cd2x5b(function() {
                    _0x7cd2xf['loop'](function() {
                        _0x7cd2x5a()
                    })
                });
            };
            _0x7cd2xf['bind'] = function() {
                $(window)['on']('mousemove', function(_0x7cd2xa) {
                    _0x7cd2xf['config']['position']['x'] = _0x7cd2xa['pageX'];
                    _0x7cd2xf['config']['position']['y'] = _0x7cd2xa['pageY'];
                })
            };
            _0x7cd2xf['init'] = function() {
                _0x7cd2xf['setCanvas']();
                _0x7cd2xf['setContext']();
                _0x7cd2xf['loop'](function() {
                    _0x7cd2xf['createStars']()
                });
                _0x7cd2xf['bind']();
            };
            return _0x7cd2xf;
        }
        var _0x7cd2x5b = window['requestAnimationFrame'] || window['mozRequestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function(_0x7cd2x5a) {
            window['setTimeout'](_0x7cd2x5a, 1000 / 60)
        };
        $(window)['on']('load', function() {
            setTimeout(function() {
                _0x7cd2x4c($('canvas')[0])['init']();
                _0x7cd2x4b['velocity']('transition.fadeIn', {
                    duration: 3000
                });
            }, 2000)
        });
        var _0x7cd2x5c = (function() {
            var _0x7cd2x5d = {};
            return function(_0x7cd2x5a, _0x7cd2x5e, _0x7cd2x5f) {
                if (!_0x7cd2x5f) {
                    _0x7cd2x5f = ''
                };
                if (_0x7cd2x5d[_0x7cd2x5f]) {
                    clearTimeout(_0x7cd2x5d[_0x7cd2x5f])
                };
                _0x7cd2x5d[_0x7cd2x5f] = setTimeout(_0x7cd2x5a, _0x7cd2x5e);
            };
        })();
        $(window)['resize'](function() {
            _0x7cd2x5c(function() {
                _0x7cd2x4c($('canvas')[0])['init']()
            }, 800, '')
        });
    }
    _0x7cd2x3e();

    function _0x7cd2x60() {
        if (_0x7cd2x8) {
            if (_bg_style_mobile == 1 || _bg_style_mobile == 2) {
                _0x7cd2x61()
            } else {
                _0x7cd2xd()
            }
        } else {
            if (_bg_style_desktop == 1 || _bg_style_desktop == 2) {
                _0x7cd2x61()
            } else {
                _0x7cd2xd()
            }
        };

        function _0x7cd2x61() {
            var _0x7cd2x62 = ['assets/img/bg/home.jpg', 'assets/img/bg/about.jpg', 'assets/img/bg/service.jpg', 'assets/img/bg/contact.jpg'];
            var _0x7cd2x63 = [];
            var _0x7cd2x1a;
            for (_0x7cd2x1a = 0; _0x7cd2x1a < _0x7cd2x62['length']; _0x7cd2x1a++) {
                var _0x7cd2x64 = new Image();
                _0x7cd2x64['src'] = _0x7cd2x62[_0x7cd2x1a];
                _0x7cd2x63[_0x7cd2x1a] = _0x7cd2x64;
            };
            var _0x7cd2x65 = imagesLoaded(_0x7cd2x63);
            _0x7cd2x3['addClass']('is-each');
            $('.site-bg__video')['remove']();
            _0x7cd2x65['on']('always', function(_0x7cd2x66) {
                _0x7cd2xd()
            });
        }
    }
    $(window)['on']('load', function() {
        _0x7cd2x60()
    });
    $('.accordion > dd')['hide']()['first']()['slideDown']();
    $('.accordion')['each'](function() {
        $(this)['find']('dt > a')['first']()['addClass']('is-active')['parent']()['next']()['css']({
            display: 'block'
        })
    });
    $('.accordion > dt > a')['on']('click', function() {
        var _0x7cd2xf = $(this);
        if (_0x7cd2xf['hasClass']('is-active')) {
            _0x7cd2xf['removeClass']('is-active');
            _0x7cd2xf['parent']()['next']('dd')['stop'](true)['slideUp']();
        } else {
            _0x7cd2xf['parents']('.accordion')['find']('dt > a.is-active')['parent']()['next']('dd')['stop'](true)['slideUp']();
            _0x7cd2xf['parents']('.accordion')['find']('dt > a.is-active')['removeClass']('is-active');
            _0x7cd2xf['addClass']('is-active');
            _0x7cd2xf['parent']()['next']('dd')['stop'](true)['slideDown']();
        };
    });

    function _0x7cd2x67() {
        var _0x7cd2x68 = $('#serviceCarousel');
        if (_0x7cd2x68['length']) {
            _0x7cd2x68['owlCarousel']({
                rewind: true,
                nav: true,
                navText: ['', ''],
                navContainer: '.service__carousel-control',
                navContainerClass: 'carousel-nav',
                navClass: ['carousel-prev', 'carousel-next'],
                dots: false,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            })
        };
    }
    _0x7cd2x67();
})(jQuery);