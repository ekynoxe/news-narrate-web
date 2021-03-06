import React from 'react';

class Videos extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { showVideo: false };
    }

    adjustedVideoSource(src) {
        var width = window.innerWidth;

        if (width < 600) {
            return src.replace('upload/','upload/vc_auto,q_80,c_scale,h_225,w_400/');
        } else if (width < 800) {
            return src.replace('upload/','upload/vc_auto,q_80,c_scale,h_450,w_800/');
        } else {
            return src.replace('upload/','upload/vc_auto/');
        }
    }

    handleClick(url, e) {
        e.preventDefault();
        e.stopPropagation();

        var playerContainer = $('.video-player').show(),
            playerOverlay = $('.video-player__overlay'),
            player = $('.video-player__player'),
            playerDom = player.get(0),
            playerWidth = $(window).width() * 0.8,
            playerHeight = $(window).height() * 0.7,
            marginTop = 0,
            marginLeft = 0,
            windowWidth = $(window).width();

        $('body').css({ 'overflow': 'hidden'});

        this.playerContainer = playerContainer;

        if(playerWidth > 700) {
            playerWidth = 700;
        }

        player.find('#videoSource').attr('src', this.adjustedVideoSource(url));

        player.removeAttr('height');
        player.attr('width', playerWidth);

        if(player.outerHeight() > playerHeight ) {
            player.removeAttr('width');
            player.attr('height', playerHeight);
            playerWidth = player.outerWidth();

        } else {
            playerHeight = player.outerHeight();
        }

        marginLeft = ($(window).width() - playerWidth) / 2,
        marginTop = ($(window).height() - playerHeight) / 2;

        player.css({
            'margin-left' : marginLeft,
            'margin-top' : marginTop
        });

        playerDom.addEventListener('webkitendfullscreen', this.onVideoEndsFullScreen.bind(this), false);

        playerDom.load();
        playerDom.play();
    }

    onVideoEndsFullScreen() {
        this.playerContainer.hide();
    }

    render() {

        var videoIds = this.props.data.ids,
            videos = [],
            player = '';

        if(videoIds) {
            for (var id in videoIds) {

                var video = this.props.data.videos[id],
                    sceneVideo = [],
                    videoKey = 'video' + id,
                    thumbnail = (this.props.data.useFrame && video.frame) ? video.frame : video.thumbnail;

                if(video) {
                    sceneVideo.push(<div className="video__spacer" key={ videoKey + '_spacer' }>&nbsp;</div>)
                    sceneVideo.push(<div className="videos__thumbnail-wrapper" key={ videoKey + '_img-wapper' }><img className="videos__thumbnail" src={ thumbnail } key={ videoKey + '_img' } /></div>);
                    sceneVideo.push(<div className="videos__text-wrapper" key={ videoKey + '_txt-wapper' }><span className="videos__name" key={ videoKey + '_name' } >{ video.name }</span><span className="videos__title" key={ videoKey + '_title' } >{ video.title }</span></div>);
                    sceneVideo.push(<div className="videos__play-button-wrapper" key={ videoKey + '_button-wrapper' }><button className="videos__play-button" key={ videoKey + '_playbtn' } >play</button></div>);

                    videos.push(<div className="videos__video" onClick={this.handleClick.bind(null,video.url)} key={videoKey}>{ sceneVideo }</div>);
                }
            }
        }

        return (
            <div className="videos" key="videos">{ videos }</div>
        )
    }
}

export default Videos;