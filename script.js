(function(){
    var script = {
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35BCB657_38E0_AAA6_419C_DAF2ECB76308",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor depan lab studio",
 "hfovMin": "135%",
 "id": "panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
 "class": "Panorama",
 "overlays": [
  "this.overlay_74C49E79_351D_4E4F_41C9_0D6503CCE023",
  "this.overlay_74670D91_351B_72DF_41CA_40179D89BDC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.02,
   "distance": 1,
   "backwardYaw": 51,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 99.21,
   "distance": 1,
   "backwardYaw": 123.23,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.94,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36CA1763_38E0_AA9F_41C9_6499ECAE087E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37B8C89A_38E0_A7AE_41C9_F043B7A8CE34",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_361D182D_38E0_A6EA_41CA_0930AA582ADD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37C8985C_38E0_A6AA_41B1_AAF67B77AB03",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.96,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36D80771_38E0_A97A_41A9_AEC6DCBA9E4C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36749BF6_38E0_B966_4198_D5DE30593758",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28F03985_38E0_B99A_418B_1E6566EF0EDA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Depan Lt 1",
 "hfovMin": "135%",
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0757BE38_3715_31CD_41B9_245892298F75",
  "this.overlay_0138449A_3715_D2CD_41A7_BD44803BD98F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 80.17,
   "distance": 1,
   "backwardYaw": -61.26,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -66,
   "distance": 1,
   "backwardYaw": 35.69,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS koridor 1",
 "hfovMin": "135%",
 "id": "panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0DD5943B_350B_51C3_419F_8D34E2ADE565",
  "this.overlay_0B09825E_350B_5645_419A_945DD669209E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 169.79,
   "distance": 1,
   "backwardYaw": 114.28,
   "panorama": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 57.55,
   "distance": 1,
   "backwardYaw": -171.5,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pekarangan audit",
 "hfovMin": "135%",
 "id": "panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_136C7CD0_371B_525C_4187_1258020ED94C",
  "this.overlay_134C07F6_371D_3E45_4194_88C6593BF512"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -169.64,
   "distance": 1,
   "backwardYaw": -11.98,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 65.02,
   "distance": 1,
   "backwardYaw": -107.57,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.59,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28C3C994_38E0_B9BA_41BA_19B7BE3D17FD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.03,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37134965_38E0_A69A_419D_87D58FBF50F0",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "ruang gs 2",
 "hfovMin": "135%",
 "id": "panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5ED1F5D4_353B_3245_41C4_1F93FD76B34E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -55.84,
   "distance": 1,
   "backwardYaw": 28.31,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.17,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_356ABA7F_38E0_BB66_41C0_F62BF5DB6DF0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_370125AB_38E0_A9EE_41BE_0CFFD04AC878",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.53,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3574CA8F_38E0_BBA6_41C6_EDEB91172C40",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor depan lab multimed",
 "hfovMin": "135%",
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7485FE18_3514_D1CD_41B6_491CD45988E8",
  "this.overlay_74B083A7_3517_D6C3_4167_235AD5371896",
  "this.overlay_7382AB3B_3517_37C3_41B6_FEDCFC6D4C12",
  "this.overlay_631E43FA_351D_364D_41A9_0CF63DCEF7BA",
  "this.overlay_63F5F5DC_351D_7245_41B5_7B9B367FAD83",
  "this.overlay_62BA8DFA_351D_524D_4192_DCE9A52161B1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.28,
   "distance": 1,
   "backwardYaw": -132.77,
   "panorama": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.6,
   "distance": 1,
   "backwardYaw": -155.15,
   "panorama": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 41.35,
   "distance": 1,
   "backwardYaw": -162.45,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.23,
   "distance": 1,
   "backwardYaw": -146.44,
   "panorama": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3.95,
   "distance": 1,
   "backwardYaw": -111.62,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.52,
   "distance": 1,
   "backwardYaw": 4.24,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28A159B4_38E0_B9FA_417A_C901AD7F7578",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36A65B98_38E0_B9AA_41CC_3AA6217B8EF6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28CDD5F9_38E0_A96A_41B0_D737C0F04A57",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 outdoor 2",
 "hfovMin": "135%",
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7EB7BFBC_350D_4EC5_4189_322F9200F505",
  "this.overlay_7E00A746_350C_FE45_41C0_DAF20521CB28"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 142.87,
   "distance": 1,
   "backwardYaw": 52.34,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 5.94,
   "distance": 1,
   "backwardYaw": 7.3,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gerbang depan",
 "hfovMin": "135%",
 "id": "panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
 "class": "Panorama",
 "overlays": [
  "this.overlay_24B0B964_370D_7245_41A8_BE9D771ADA2C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.05,
   "distance": 1,
   "backwardYaw": -168.06,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36A7B781_38E0_A99A_41B3_83EA219D75FF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.9,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3596B686_38E0_ABA6_41BD_12AC2745B2B7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.56,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3642ABF6_38E0_B966_41AF_5B27EC2C19B4",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lab multimed 2",
 "hfovMin": "135%",
 "id": "panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_622FF2FC_351B_3645_41A4_388C59C0DCB7",
  "this.overlay_608E2E9C_3514_CEC5_41C0_AC56E8AEF851",
  "this.overlay_62FEA986_3515_52C4_41A2_8192D8FA5CC1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -111.62,
   "distance": 1,
   "backwardYaw": 3.95,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -81.76,
   "distance": 1,
   "backwardYaw": 119.87,
   "panorama": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_289FC9E2_38E0_B99E_41C6_EE6D9CB4174E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_357E16B5_38E0_ABFA_41B9_80A70740B984",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3585F667_38E0_AB66_41C7_A251E3216C6C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 143.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3639FC34_38E0_BEFA_41C1_CF2D708E14A6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Ruang admin lt 2",
 "hfovMin": "135%",
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6D21AF6D_357C_CE47_41A1_798DA2375614",
  "this.overlay_6D7F22E3_357F_3643_41A1_B72F2388CD70"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.61,
   "distance": 1,
   "backwardYaw": 81.54,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 176.77,
   "distance": 1,
   "backwardYaw": -43.21,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan menuju elektro 2",
 "hfovMin": "135%",
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_17A4E951_377F_D25F_4174_95153735D230",
  "this.overlay_292578DB_377F_524C_41C7_F15614128B4E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 144,
   "distance": 1,
   "backwardYaw": -87.33,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -59.87,
   "distance": 1,
   "backwardYaw": -18.06,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28FD75EA_38E0_A96E_41B4_24F2CB6AE017",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Menuju parkiran elektro",
 "hfovMin": "135%",
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_162DF47F_377C_D243_4198_EDE325F614A6",
  "this.overlay_179B1AC5_377B_3647_41C6_0F626498F549"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.83,
   "distance": 1,
   "backwardYaw": 131.2,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gs ruangan 3",
 "hfovMin": "135%",
 "id": "panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5D403BCC_353D_D645_41C5_9D17083013F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27.01,
   "distance": 1,
   "backwardYaw": -149.46,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab multimedia",
 "hfovMin": "135%",
 "id": "panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F25D50C_3535_33C5_41BB_0B905435B0D5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -33.12,
   "distance": 1,
   "backwardYaw": -165.59,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab pengukuran",
 "hfovMin": "135%",
 "id": "panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6380D661_351D_5E7F_4190_C7AE3141AC4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -146.44,
   "distance": 1,
   "backwardYaw": -161.23,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jembatan lt 2",
 "hfovMin": "135%",
 "id": "panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
 "class": "Panorama",
 "overlays": [
  "this.overlay_08EEB8E6_3514_F245_41C3_0378DC638F2B",
  "this.overlay_75B4F11C_3515_33C5_41B7_4703BB3C4E37"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 81.54,
   "distance": 1,
   "backwardYaw": -0.61,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.14,
   "distance": 1,
   "backwardYaw": 102.83,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.72,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_288FC9D3_38E0_B9BE_41CB_293F93799D50",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab mobile",
 "hfovMin": "135%",
 "id": "panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6BDF6715_3577_FFC7_41C9_D7C112D235F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -132.77,
   "distance": 1,
   "backwardYaw": 151.28,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37E29C54_38E0_BEB9_41BD_A5D4EF83E6D6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Depan GS lt 1",
 "hfovMin": "135%",
 "id": "panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0DDC64D7_34FF_3243_419B_39B379EF929B",
  "this.overlay_01061A72_34FD_D65D_4180_0BF098FE1EAD",
  "this.overlay_0E423D81_34FB_32BF_4196_4133A57D751A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 114.28,
   "distance": 1,
   "backwardYaw": 169.79,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_104737_00_424",
 "hfovMin": "135%",
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
 "class": "Panorama",
 "overlays": [
  "this.overlay_516CC219_350C_F1CC_41BD_2F2BDA7ED2EB",
  "this.overlay_5C186EEC_3534_CE44_41C8_3CC5E5C0A208"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.17,
   "distance": 1,
   "backwardYaw": -2.41,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -149.46,
   "distance": 1,
   "backwardYaw": 27.01,
   "panorama": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "jalan depan ruko",
 "hfovMin": "135%",
 "id": "panorama_38E649D7_3717_D243_41CA_441C811EA963",
 "class": "Panorama",
 "overlays": [
  "this.overlay_22B5BD15_370B_D3C7_41BE_C35C32034FE1",
  "this.overlay_20441D22_371D_D3FD_41C3_084B070F5054"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 10.4,
   "distance": 1,
   "backwardYaw": -8.47,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.06,
   "distance": 1,
   "backwardYaw": -8.47,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.06,
   "distance": 1,
   "backwardYaw": -7.05,
   "panorama": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ruang dosen",
 "hfovMin": "135%",
 "id": "panorama_38C881B1_3715_52DC_41C2_E18801508327",
 "class": "Panorama",
 "overlays": [
  "this.overlay_79AE6F2F_3515_4FC3_4198_C266FBF10A92"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.87,
   "distance": 1,
   "backwardYaw": -81.76,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab komdat 1",
 "hfovMin": "135%",
 "id": "panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6C2AF16F_357D_F243_41B6_AEE3142849C2",
  "this.overlay_68845C35_357B_D1C7_41C9_671D285C5462"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E649D7_3717_D243_41CA_441C811EA963_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_092820_00_merged",
 "hfovMin": "135%",
 "id": "panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
 "class": "Panorama",
 "overlays": [
  "this.overlay_054A8B65_370C_F647_4180_B49199A0F6A8",
  "this.overlay_037E6CD9_370D_324F_41C3_D77EEFB676EF",
  "this.overlay_03F7805B_370C_D24C_419E_F524B54E1234",
  "this.overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 90.98,
   "distance": 1,
   "backwardYaw": -4.1,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -61.26,
   "distance": 1,
   "backwardYaw": 80.17,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 146.78,
   "distance": 1,
   "backwardYaw": 80.34,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 70.18,
   "distance": 1,
   "backwardYaw": -68.47,
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 Dekat tangga",
 "hfovMin": "135%",
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7F91A4CE_350D_5245_41B4_CD7F4C59950A",
  "this.overlay_7F2B0818_350F_51CD_41C7_B5D85C040173"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.24,
   "distance": 1,
   "backwardYaw": 79.52,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -162.22,
   "distance": 1,
   "backwardYaw": -50.41,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.46,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_363167FE_38E0_A966_4195_A3FB8830D482",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35199722_38E0_AA9E_41CB_F9D377B7823C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_352BB6F3_38E0_AB7E_41B3_CB90DA63568D",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "antara gedung administrasi",
 "hfovMin": "135%",
 "id": "panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_03D79784_370B_FEC5_41B0_D2AE6683ECFD",
  "this.overlay_46DDED0A_350C_F3CD_41A6_BE61C40EEDA6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.65,
   "distance": 1,
   "backwardYaw": 82.03,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.59,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3668B7C0_38E0_A999_41C7_A50C7A3920BE",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan menuju elektro",
 "hfovMin": "135%",
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_288001E2_3775_527D_41B7_20668FB3D151",
  "this.overlay_28DFB412_377D_51DD_41C7_F7E246254DB2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -18.06,
   "distance": 1,
   "backwardYaw": -59.87,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 131.2,
   "distance": 1,
   "backwardYaw": 13.83,
   "panorama": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.3,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36E2D732_38E0_AAFE_41B2_5E3CAEFE28DD",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab multimed",
 "hfovMin": "135%",
 "id": "panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
 "class": "Panorama",
 "overlays": [
  "this.overlay_60323ED1_3514_CE5F_41C8_C80EDB4358BB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28D179A4_38E0_B99A_41CB_F06BC6988291",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35B96647_38E0_AAA6_41BB_26251652C6A6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3503E703_38E0_AA9E_41B5_55E99917AE4D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.95,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_357ABA9E_38E0_BBA6_41BD_EAEA56EC6984",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_093043_00_merged",
 "hfovMin": "135%",
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_03864A50_34F7_365D_41A8_EF63808B6489",
  "this.overlay_036D1150_34F7_D25D_41A9_4D14281BE03E",
  "this.overlay_01EBEBD6_34FC_D645_4190_2A8A4503233B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -68.47,
   "distance": 1,
   "backwardYaw": 70.18,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36FC3751_38E0_AABA_41C4_7133B7DD703A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36F25B59_38E0_BAAA_41B5_36E09BCBEE88",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.85,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36691BE6_38E0_B966_41B2_07D50FB45D7E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "IMG_20240319_103947_00_421",
 "hfovMin": "135%",
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_094017_00_merged",
 "hfovMin": "135%",
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_71C3C072_350B_525D_41CB_3B0B1C3F6701",
  "this.overlay_7B8164D6_350C_D245_41CA_D98F70A7C831"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 123.23,
   "distance": 1,
   "backwardYaw": 99.21,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.41,
   "distance": 1,
   "backwardYaw": -162.22,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ruangan bawah Audit",
 "hfovMin": "135%",
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1E734084_3715_72C5_41A5_60C7ACAFE2E7",
  "this.overlay_1036BCE3_370B_527C_4168_5C516F60C087"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 69.98,
   "distance": 1,
   "backwardYaw": 86.65,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.35,
   "distance": 1,
   "backwardYaw": 174.42,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_358D2676_38E0_AB66_41CA_4C4F6E0581CE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_368F17A0_38E0_A99A_41A5_ADCFBFD8D242",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_365287EE_38E0_A966_41CA_7C6407266B13",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Menuju bundaran",
 "hfovMin": "135%",
 "id": "panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_21F04E8D_371C_CEC7_41AA_C445756BC9DF",
  "this.overlay_2A22452A_370F_53CD_41C4_5605ECE47036"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.2,
   "distance": 1,
   "backwardYaw": -175.04,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35341703_38E0_AA9E_41C1_AFC6AC7C893B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36CC0B88_38E0_B9AA_41C6_CB4724E842FA",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium bagian bawah",
 "hfovMin": "135%",
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1180CE67_370D_4E43_41A6_120D875697DA",
  "this.overlay_118FEDB2_370D_32DD_41A0_51F0DF86A745"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 86.65,
   "distance": 1,
   "backwardYaw": 69.98,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.34,
   "distance": 1,
   "backwardYaw": -173.27,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.17,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3789B8BA_38E0_A7EE_419B_798E6634F1B6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_364587DF_38E0_A9A6_41B5_CF0050FB8FF3",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bundaran",
 "hfovMin": "135%",
 "id": "panorama_38E53807_3717_51C3_41C3_684D314D142D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2FF2F575_371B_7247_41C4_84929BB66698",
  "this.overlay_2DB368E7_3714_D243_41C6_63E7B7B2DCF3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -46.7,
   "distance": 1,
   "backwardYaw": 8.27,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36E9AB4A_38E0_BAAE_41CB_5042D8C96FE2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.83,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37035965_38E0_A69A_41B5_5F3F9E2EA5D5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3735F956_38E0_A6A6_41C2_C72E3094A59F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_286F79F2_38E0_B97E_41B4_E3F3945E7A1E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab Studio 1",
 "hfovMin": "135%",
 "id": "panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_79FCFE1A_3514_F1CD_41CA_B8FB659B7385",
  "this.overlay_65868634_3515_51C5_41C3_B458A991A20D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.6,
   "distance": 1,
   "backwardYaw": -152.27,
   "panorama": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 51,
   "distance": 1,
   "backwardYaw": 2.02,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3680BBB7_38E0_B9E6_41C2_4D20008BC2FB",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.6,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35072B2B_38E0_BAEE_41AE_9497BF851D34",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 139.88,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35262AFC_38E0_BB6A_41C1_6C69793B010E",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lab sinematografi",
 "hfovMin": "135%",
 "id": "panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_63477BDC_351D_5645_419B_8C4BCB72DE8E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -155.15,
   "distance": 1,
   "backwardYaw": 169.6,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.72,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_367687CF_38E0_A9A6_41BB_86CD4E529649",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -110.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_368127A0_38E0_A99A_419B_D933CAF42937",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_353D5B1B_38E0_BAAE_41A8_F2F4CA64FE05",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 52)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 52, 53)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 53, 54)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 54, 55)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 55, 56)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 56, 57)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 57, 58)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 58, 59)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 59, 60)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 60, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.94,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_355C6AEC_38E0_BB6A_4198_F513FF067B93",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36B4ABA8_38E0_B9EA_41C4_DE529438844D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28E06975_38E0_B97A_41C1_F79170526777",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.25,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_350D9713_38E0_AABE_41B8_7B19A5C0E4D8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3650CC05_38E0_BE9A_41AC_25B9C0F79484",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_355586D4_38E0_ABBA_41CB_2C1D576A5694",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.78,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_351FFB3B_38E0_BAEF_41CA_548DBE158383",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3601F80E_38E0_A6A6_41C6_D987AF1D9510",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.37,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_368EEBC7_38E0_B9A6_4199_A5AFC69AA058",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jembatan",
 "hfovMin": "135%",
 "id": "panorama_38D1C355_3717_7647_419B_47B5347BBD92",
 "class": "Panorama",
 "overlays": [
  "this.overlay_21F89B2A_371F_37CD_419F_DCAB47F86368",
  "this.overlay_21759B50_371F_D642_41C2_5D33642A49E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 172.63,
   "distance": 1,
   "backwardYaw": -9.03,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.47,
   "distance": 1,
   "backwardYaw": 10.4,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab komdat 2",
 "hfovMin": "135%",
 "id": "panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6AF071FC_3575_5245_41B2_7685EE7F11FD"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_369ADBD6_38E0_B9A6_41C4_FDD692D92F18",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "parkiran elektro1",
 "hfovMin": "135%",
 "id": "panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
 "class": "Panorama",
 "overlays": [
  "this.overlay_176CA4CD_3775_3247_41B4_672F32DEE6BA",
  "this.overlay_17443DAC_3775_32C5_41B2_495D1F84E736",
  "this.overlay_14CA04BC_370B_32C5_41C9_C3DF3E294951",
  "this.overlay_17DB8D8D_370B_F2C7_4174_081A17259D26"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -36.2,
   "distance": 1,
   "backwardYaw": 87.48,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.03,
   "distance": 1,
   "backwardYaw": -165.65,
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_356AD6A5_38E0_AB9A_41C4_E2A062891C06",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Penghubung GS dn Gedung lt 1",
 "hfovMin": "135%",
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5D874BBD_3534_D6C7_418C_9175197167AB",
  "this.overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.1,
   "distance": 1,
   "backwardYaw": 90.98,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.5,
   "distance": 1,
   "backwardYaw": 57.55,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.36,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3725A937_38E0_A6E6_41C3_D207FC9F1CAA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38C881B1_3715_52DC_41C2_E18801508327_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ruangan bawah audit 2",
 "hfovMin": "135%",
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_13AA6027_371B_71C3_419C_48B944D1C549",
  "this.overlay_133A8E65_3714_CE47_41B8_4365012D8910"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.98,
   "distance": 1,
   "backwardYaw": -169.64,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 174.42,
   "distance": 1,
   "backwardYaw": 171.35,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "ruang gs 1",
 "hfovMin": "135%",
 "id": "panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5FC56D74_3535_5245_41BC_37A44A6274B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -150.97,
   "distance": 1,
   "backwardYaw": -166.2,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.84,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_287CCA02_38E0_BA9E_41B9_EDC919B51EB2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3513AB2B_38E0_BAEE_41B1_96643908178A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS Lt 1 bagian dalam",
 "hfovMin": "135%",
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6A7A1979_3575_324C_41C2_400713A10AC3",
  "this.overlay_5456AC81_351C_D2BF_4169_DBCFA4D5A390",
  "this.overlay_681A9085_351B_52C7_41C4_0610BEBE66A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.99,
   "distance": 1,
   "backwardYaw": -4.19,
   "panorama": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.59,
   "distance": 1,
   "backwardYaw": -33.12,
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_093657_00_merged",
 "hfovMin": "135%",
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
 "class": "Panorama",
 "overlays": [
  "this.overlay_05AFB8A6_3714_D2C5_418D_3C7F54BF84F8",
  "this.overlay_04904509_3715_F3CF_41B7_9E451CCE798F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.95,
   "distance": 1,
   "backwardYaw": 165.78,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 35.69,
   "distance": 1,
   "backwardYaw": -66,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_362ADC25_38E0_BE9A_41B4_7AF5CC9AF564",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_354B06C5_38E0_AB9B_41C1_4D6A5453B201",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E53807_3717_51C3_41C3_684D314D142D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_354B0ACD_38E0_BBAA_41A9_1E32B1564B09",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_369A87B0_38E0_A9FA_4191_7BE7A8ED55D8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_362077FE_38E0_A966_41BE_212B880CF24B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_365CBC15_38E0_BEBA_41B1_973DD39609DE",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 outdoor",
 "hfovMin": "135%",
 "id": "panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A110627_3535_51C4_41B3_0D67958BFBE7",
  "this.overlay_60DA7E71_357B_4E5F_41B0_F6A24ED12AB0",
  "this.overlay_6E799749_357D_3E4F_41AB_22D4772A99F0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 52.34,
   "distance": 1,
   "backwardYaw": 142.87,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -63.3,
   "distance": 1,
   "backwardYaw": -84.84,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28AEC9C3_38E0_B99E_41C0_C1EBE19168AD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35567ADC_38E0_BBAA_4196_5C05C7F9FFF7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3547BABD_38E0_BBEA_4193_3E3DC54E7B4E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.53,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3577A6A5_38E0_AB9A_41A2_6DD478E61F50",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gs Lt 3",
 "hfovMin": "135%",
 "id": "panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_514720D5_350F_5247_41C8_B0AFDAEDF11B",
  "this.overlay_54D66C2F_350F_31C3_41C7_BD13378E2D42",
  "this.overlay_51B8CC94_350C_D2C4_419E_822B01ABC77C",
  "this.overlay_50F2E95B_3535_5243_4185_138297492FF8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.41,
   "distance": 1,
   "backwardYaw": 5.17,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.2,
   "distance": 1,
   "backwardYaw": -150.97,
   "panorama": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 28.31,
   "distance": 1,
   "backwardYaw": -55.84,
   "panorama": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 117.78,
   "distance": 1,
   "backwardYaw": -174.46,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.83,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35614696_38E0_ABA6_41A4_2590F02E1FD1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_370F15BB_38E0_A9EE_419D_FE057A4C3AF3",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -164.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36B5A791_38E0_A9BA_4199_89321D15DC41",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.87,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37DA586B_38E0_A76E_41B6_6A505DA167CA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.98,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37FB184C_38E0_A6AA_41CA_BBEDD32F3B23",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor audit lt 2",
 "hfovMin": "135%",
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1F5F4715_3735_3FC4_41B5_DAFBF42DD6B6",
  "this.overlay_1FA0802B_3735_F1C3_41B3_B2406DD7BD21"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -40.12,
   "distance": 1,
   "backwardYaw": 156.32,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -125.5,
   "distance": 1,
   "backwardYaw": -70.52,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "IMG_20240319_093657_00_merged(1)",
 "hfovMin": "135%",
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.09,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3530FB0B_38E0_BAAE_41C0_7FD05608F298",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.42,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_379798C9_38E0_A7AA_41C3_A928AEA9B167",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3767D8D9_38E0_A7AA_41C7_B57DF5E640F9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS lt 2",
 "hfovMin": "135%",
 "id": "panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
 "class": "Panorama",
 "overlays": [
  "this.overlay_45F491A9_351B_D2CF_41B2_5333028715F7",
  "this.overlay_4421392D_351C_F3C7_41C9_5957C1C96F6E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 102.83,
   "distance": 1,
   "backwardYaw": -134.14,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.13,
   "distance": 1,
   "backwardYaw": 15.55,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab studio 2",
 "hfovMin": "135%",
 "id": "panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
 "class": "Panorama",
 "overlays": [
  "this.overlay_67712694_3515_7EC4_41C2_09C857147A84"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -152.27,
   "distance": 1,
   "backwardYaw": -170.6,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 30.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36D83B88_38E0_B9AA_41AA_12A03BE3A411",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.81,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36F0A742_38E0_AA99_41BE_C047BF9340D1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28EFD5DA_38E0_A9AE_41C1_3B717D5C896D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.73,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37EB083D_38E0_A6EB_41A9_16B9D62C5A57",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "koridor lt 1",
 "hfovMin": "135%",
 "id": "panorama_38D94D50_3717_325D_4192_23A4473BE97C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0B38A899_350C_D2CF_4176_198675F752F0",
  "this.overlay_0B151883_350F_52C3_41BE_327139775FC7",
  "this.overlay_0AB661E9_350C_D24F_41C5_2BBFCDE54084"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.16,
   "distance": 1,
   "backwardYaw": -41.58,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 106.76,
   "distance": 1,
   "backwardYaw": -0.24,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.22,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_36FE0B69_38E0_B96A_4197_6B684DB5F4B6",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 dekat tangga outdoor",
 "hfovMin": "135%",
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200",
 "class": "Panorama",
 "overlays": [
  "this.overlay_08EC43F2_351B_D65C_41B2_D431E9E3945D",
  "this.overlay_08EA2CC8_351B_524D_41BA_C9B4E4BE086D",
  "this.overlay_7763D3CF_351D_5643_41BA_58C4979660AF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -84.84,
   "distance": 1,
   "backwardYaw": -63.3,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -43.21,
   "distance": 1,
   "backwardYaw": 176.77,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.34,
   "distance": 1,
   "backwardYaw": 146.78,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "parkiran elektro 2",
 "hfovMin": "135%",
 "id": "panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_12BE1C3E_370B_51C5_4142_25DAC8478C42",
  "this.overlay_1438306B_3715_F243_4189_1D91E03073CE",
  "this.overlay_12F0DAF4_3715_3644_41A9_F75183BC250C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -87.33,
   "distance": 1,
   "backwardYaw": 144,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 87.48,
   "distance": 1,
   "backwardYaw": -36.2,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.24,
   "distance": 1,
   "backwardYaw": 106.76,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Depan audit lt atas",
 "hfovMin": "135%",
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1C6BC9BC_3737_D2C5_41C1_161986B94DC1",
  "this.overlay_1C443336_3737_37C4_41BC_749DBC1287AA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 156.32,
   "distance": 1,
   "backwardYaw": -40.12,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.75,
   "distance": 1,
   "backwardYaw": 169.91,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3606EC44_38E0_BE9A_41B6_50E5B023012C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3617EC54_38E0_BEB9_41C0_782DE5573E45",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.53,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_35714A7F_38E0_BB66_4177_D6300EC71670",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Parkiran audit",
 "hfovMin": "135%",
 "id": "panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2A05EDCE_3775_3245_41C0_54C0BBB0645C",
  "this.overlay_2B98DA22_3775_51FD_41BC_83022112DCEB",
  "this.overlay_2B066F65_3775_4E47_4199_638BFDE90524"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 169.91,
   "distance": 1,
   "backwardYaw": -88.75,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -107.57,
   "distance": 1,
   "backwardYaw": 65.02,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 8.27,
   "distance": 1,
   "backwardYaw": -46.7,
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_357E1AAE_38E0_BBE6_41C7_A28EE462AA01",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.06,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_377448F8_38E0_A76A_41BB_994116BEAB5F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.58,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_3550CACD_38E0_BBAA_41C4_AC12EE5FC92B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.52,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_360C481D_38E0_A6AA_41AF_DF277447FDED",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "koridor gs lt 3 dkt tangga",
 "hfovMin": "135%",
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_74A9305D_3515_5247_41C9_2833F6E97866",
  "this.overlay_52979F7B_350B_4E4C_41BE_CC7E8613E10B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -174.46,
   "distance": 1,
   "backwardYaw": 117.78,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 15.55,
   "distance": 1,
   "backwardYaw": 141.13,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_110248_00_443",
 "hfovMin": "135%",
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
 "class": "Panorama",
 "overlays": [
  "this.overlay_69083401_351C_F1BF_4198_34BD8C2C19A8",
  "this.overlay_69DBC790_351D_5EDD_41C2_6BABED32AA8E",
  "this.overlay_55B0EDC7_3514_D243_41B2_B4FFA6B5DF17"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.19,
   "distance": 1,
   "backwardYaw": 170.99,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.39,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_285DFA21_38E0_BA9A_4196_E1F6A30C6A09",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_093213_00_merged",
 "hfovMin": "135%",
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1A4FCE0F_371B_31C3_41C3_81B969B44241",
  "this.overlay_07C47485_371B_32C7_41C0_B625C4B55E8A",
  "this.overlay_1B6518EF_371D_3243_4196_78C862C377D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 165.78,
   "distance": 1,
   "backwardYaw": -96.95,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -41.58,
   "distance": 1,
   "backwardYaw": 2.16,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.69,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37AB188B_38E0_A7AE_41BD_C5170E3CCA9E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.97,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_284CBA11_38E0_BABA_41C0_A8AB77F4CECB",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37444908_38E0_A6AA_41A9_5EF7754055A8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_37547927_38E0_A6E6_4178_6A09CD7BE5FE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Audit lt 2",
 "hfovMin": "135%",
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_1E53EFC9_370D_4E4F_41C1_881B7092E117",
  "this.overlay_1F773744_370C_DE45_41BF_BA698C3F2083"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -173.27,
   "distance": 1,
   "backwardYaw": 1.34,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -70.52,
   "distance": 1,
   "backwardYaw": -125.5,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_28BED9D3_38E0_B9BE_41C1_55963AB7B58E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_355E06E4_38E0_AB9A_41A0_FD3C9AAFCBC1",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan menuju Auditorium",
 "hfovMin": "135%",
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2C090C09_370D_D1CC_41BE_1B53E09D7365",
  "this.overlay_2AC9EE6D_370D_CE47_41A6_976CAF339F0E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -175.04,
   "distance": 1,
   "backwardYaw": 167.2,
   "panorama": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.03,
   "distance": 1,
   "backwardYaw": 172.63,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_371F85CA_38E0_A9AE_41C5_E2A2741CC9BC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pintu menuju outdorr lt 2",
 "hfovMin": "135%",
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A5AFDF3_350D_3243_41B6_CCD89B066D49",
  "this.overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 7.3,
   "distance": 1,
   "backwardYaw": 5.94,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -162.45,
   "distance": 1,
   "backwardYaw": 41.35,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": "2.35%",
 "width": 573,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "2.17%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 133,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": 0,
 "scrollBarWidth": 10,
 "height": 118,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.21,
   "hfov": 13.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.91
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_3503E703_38E0_AA9E_41B5_55E99917AE4D); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
   "pitch": -15.91,
   "yaw": 99.21,
   "hfov": 13.73,
   "distance": 100
  }
 ],
 "id": "overlay_74C49E79_351D_4E4F_41C9_0D6503CCE023",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.02,
   "hfov": 10.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_35341703_38E0_AA9E_41C1_AFC6AC7C893B); this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 2.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "hfov": 10.23
  }
 ],
 "id": "overlay_74670D91_351B_72DF_41CA_40179D89BDC1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.17,
   "hfov": 9.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_36A65B98_38E0_B9AA_41CC_3AA6217B8EF6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
   "pitch": -12.33,
   "yaw": 80.17,
   "hfov": 9.05,
   "distance": 50
  }
 ],
 "id": "overlay_0757BE38_3715_31CD_41B9_245892298F75",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66,
   "hfov": 10.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.8
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_36B4ABA8_38E0_B9EA_41C4_DE529438844D); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
   "pitch": -11.8,
   "yaw": -66,
   "hfov": 10.7,
   "distance": 50
  }
 ],
 "id": "overlay_0138449A_3715_D2CD_41A7_BD44803BD98F",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.55,
   "hfov": 10.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_289FC9E2_38E0_B99E_41C6_EE6D9CB4174E); this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
   "pitch": -18.38,
   "yaw": 57.55,
   "hfov": 10.94,
   "distance": 100
  }
 ],
 "id": "overlay_0DD5943B_350B_51C3_419F_8D34E2ADE565",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.79,
   "hfov": 16.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1, this.camera_288FC9D3_38E0_B9BE_41CB_293F93799D50); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
   "pitch": -24.76,
   "yaw": 169.79,
   "hfov": 16.02,
   "distance": 50
  }
 ],
 "id": "overlay_0B09825E_350B_5645_419A_945DD669209E",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.02,
   "hfov": 16.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.71
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_28CDD5F9_38E0_A96A_41B0_D737C0F04A57); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
   "pitch": -12.71,
   "yaw": 65.02,
   "hfov": 16.51,
   "distance": 50
  }
 ],
 "id": "overlay_136C7CD0_371B_525C_4187_1258020ED94C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.64,
   "hfov": 13.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_28FD75EA_38E0_A96E_41B4_24F2CB6AE017); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -169.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 229,
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87,
   "hfov": 13.58
  }
 ],
 "id": "overlay_134C07F6_371D_3E45_4194_88C6593BF512",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.84,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_37AB188B_38E0_A7AE_41BD_C5170E3CCA9E); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -55.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "hfov": 10.29
  }
 ],
 "id": "overlay_5ED1F5D4_353B_3245_41C4_1F93FD76B34E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.95,
   "hfov": 12.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_3650CC05_38E0_BE9A_41AC_25B9C0F79484); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 210,
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03,
   "hfov": 12.46
  }
 ],
 "id": "overlay_7485FE18_3514_D1CD_41B6_491CD45988E8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.52,
   "hfov": 11.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_365CBC15_38E0_BEBA_41B1_973DD39609DE); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
   "pitch": -16.59,
   "yaw": 79.52,
   "hfov": 11.05,
   "distance": 100
  }
 ],
 "id": "overlay_74B083A7_3517_D6C3_4167_235AD5371896",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.35,
   "hfov": 11.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_36749BF6_38E0_B966_4198_D5DE30593758); this.mainPlayList.set('selectedIndex', 57)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
   "pitch": -12.43,
   "yaw": 41.35,
   "hfov": 11.93,
   "distance": 50
  }
 ],
 "id": "overlay_7382AB3B_3517_37C3_41B6_FEDCFC6D4C12",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.28,
   "hfov": 11.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A, this.camera_369ADBD6_38E0_B9A6_41C4_FDD692D92F18); this.mainPlayList.set('selectedIndex', 48)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 151.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 195,
      "height": 247
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86,
   "hfov": 11.43
  }
 ],
 "id": "overlay_631E43FA_351D_364D_41A9_0CF63DCEF7BA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.6,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2, this.camera_36691BE6_38E0_B966_41B2_07D50FB45D7E); this.mainPlayList.set('selectedIndex', 53)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 169.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 90,
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "hfov": 5.32
  }
 ],
 "id": "overlay_63F5F5DC_351D_7245_41B5_7B9B367FAD83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.23,
   "hfov": 9.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81, this.camera_3642ABF6_38E0_B966_41AF_5B27EC2C19B4); this.mainPlayList.set('selectedIndex', 52)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -161.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 158,
      "height": 206
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66,
   "hfov": 9.32
  }
 ],
 "id": "overlay_62BA8DFA_351D_524D_4192_DCE9A52161B1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.87,
   "hfov": 12.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.48
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_28AEC9C3_38E0_B99E_41C0_C1EBE19168AD); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
   "pitch": -19.48,
   "yaw": 142.87,
   "hfov": 12.94,
   "distance": 100
  }
 ],
 "id": "overlay_7EB7BFBC_350D_4EC5_4189_322F9200F505",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.94,
   "hfov": 10.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_28BED9D3_38E0_B9BE_41C1_55963AB7B58E); this.mainPlayList.set('selectedIndex', 57)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 5.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15,
   "hfov": 10.19
  }
 ],
 "id": "overlay_7E00A746_350C_FE45_41C0_DAF20521CB28",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.05,
   "hfov": 15.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_36CA1763_38E0_AA9F_41C9_6499ECAE087E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
   "pitch": -8.1,
   "yaw": -7.05,
   "hfov": 15.76,
   "distance": 100
  }
 ],
 "id": "overlay_24B0B964_370D_7245_41A8_BE9D771ADA2C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.76,
   "hfov": 5.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C881B1_3715_52DC_41C2_E18801508327, this.camera_365287EE_38E0_A966_41CA_7C6407266B13); this.mainPlayList.set('selectedIndex', 58)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -81.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 99,
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75,
   "hfov": 5.87
  }
 ],
 "id": "overlay_622FF2FC_351B_3645_41A4_388C59C0DCB7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.43,
   "hfov": 6.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.84
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
   "pitch": -28.84,
   "yaw": 8.43,
   "hfov": 6.22,
   "distance": 100
  }
 ],
 "id": "overlay_608E2E9C_3514_CEC5_41C0_AC56E8AEF851",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.62,
   "hfov": 9.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_364587DF_38E0_A9A6_41B5_CF0050FB8FF3); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -111.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 164,
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41,
   "hfov": 9.48
  }
 ],
 "id": "overlay_62FEA986_3515_52C4_41A2_8192D8FA5CC1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.77,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.41
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_3601F80E_38E0_A6A6_41C6_D987AF1D9510); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 176.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.41,
   "hfov": 10.28
  }
 ],
 "id": "overlay_6D21AF6D_357C_CE47_41A1_798DA2375614",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.61,
   "hfov": 7.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_363167FE_38E0_A966_4195_A3FB8830D482); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 133,
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71,
   "hfov": 7.87
  }
 ],
 "id": "overlay_6D7F22E3_357F_3643_41A1_B72F2388CD70",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144,
   "hfov": 20.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.14
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_35567ADC_38E0_BBAA_4196_5C05C7F9FFF7); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
   "pitch": -24.14,
   "yaw": 144,
   "hfov": 20.36,
   "distance": 50
  }
 ],
 "id": "overlay_17A4E951_377F_D25F_4174_95153735D230",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.87,
   "hfov": 18.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.29
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_355C6AEC_38E0_BB6A_4198_F513FF067B93); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
   "pitch": -8.29,
   "yaw": -59.87,
   "hfov": 18.92,
   "distance": 50
  }
 ],
 "id": "overlay_292578DB_377F_524C_41C7_F15614128B4E",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.83,
   "hfov": 13.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_3585F667_38E0_AB66_41C7_A251E3216C6C); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
   "pitch": -8.22,
   "yaw": 13.83,
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_162DF47F_377C_D243_4198_EDE325F614A6",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.79,
   "hfov": 13.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.57
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
   "pitch": -11.57,
   "yaw": -173.79,
   "hfov": 13.45,
   "distance": 100
  }
 ],
 "id": "overlay_179B1AC5_377B_3647_41C6_0F626498F549",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.01,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_36D83B88_38E0_B9AA_41AA_12A03BE3A411); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "hfov": 10.25
  }
 ],
 "id": "overlay_5D403BCC_353D_D645_41C5_9D17083013F7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.12,
   "hfov": 12.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_352BB6F3_38E0_AB7E_41B3_CB90DA63568D); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -33.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 261
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "hfov": 12.13
  }
 ],
 "id": "overlay_5F25D50C_3535_33C5_41BB_0B905435B0D5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.44,
   "hfov": 11.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_37547927_38E0_A6E6_4178_6A09CD7BE5FE); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -146.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 220
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "hfov": 11.11
  }
 ],
 "id": "overlay_6380D661_351D_5E7F_4190_C7AE3141AC4A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.14,
   "hfov": 14.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_356ABA7F_38E0_BB66_41C0_F62BF5DB6DF0); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
   "pitch": -20.66,
   "yaw": -134.14,
   "hfov": 14.26,
   "distance": 50
  }
 ],
 "id": "overlay_08EEB8E6_3514_F245_41C3_0378DC638F2B",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.54,
   "hfov": 10.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.73
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_285DFA21_38E0_BA9A_4196_E1F6A30C6A09); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
   "pitch": -13.73,
   "yaw": 81.54,
   "hfov": 10.93,
   "distance": 100
  }
 ],
 "id": "overlay_75B4F11C_3515_33C5_41B7_4703BB3C4E37",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.77,
   "hfov": 10.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_367687CF_38E0_A9A6_41BB_86CD4E529649); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -132.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "hfov": 10.16
  }
 ],
 "id": "overlay_6BDF6715_3577_FFC7_41C9_D7C112D235F7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.28,
   "hfov": 12.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_362077FE_38E0_A966_41BE_212B880CF24B); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
   "pitch": -30.9,
   "yaw": 114.28,
   "hfov": 12.31,
   "distance": 50
  }
 ],
 "id": "overlay_0DDC64D7_34FF_3243_419B_39B379EF929B",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.9,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -127.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49,
   "hfov": 10.29
  }
 ],
 "id": "overlay_01061A72_34FD_D65D_4180_0BF098FE1EAD",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.7,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "hfov": 10.29
  }
 ],
 "id": "overlay_0E423D81_34FB_32BF_4196_4133A57D751A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.46,
   "hfov": 13.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8, this.camera_28D179A4_38E0_B99A_41CB_F06BC6988291); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -149.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 224,
      "height": 215
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.37,
   "hfov": 13.23
  }
 ],
 "id": "overlay_516CC219_350C_F1CC_41BD_2F2BDA7ED2EB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.17,
   "hfov": 9.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_28C3C994_38E0_B9BA_41BA_19B7BE3D17FD); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
   "pitch": -13.63,
   "yaw": 5.17,
   "hfov": 9.86,
   "distance": 100
  }
 ],
 "id": "overlay_5C186EEC_3534_CE44_41C8_3CC5E5C0A208",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.4,
   "hfov": 15.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_35714A7F_38E0_BB66_4177_D6300EC71670); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
   "pitch": -9.59,
   "yaw": 10.4,
   "hfov": 15.43,
   "distance": 100
  }
 ],
 "id": "overlay_22B5BD15_370B_D3C7_41BE_C35C32034FE1",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.06,
   "hfov": 15.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655, this.camera_357ABA9E_38E0_BBA6_41BD_EAEA56EC6984); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
   "pitch": -7.53,
   "yaw": -168.06,
   "hfov": 15.51,
   "distance": 100
  }
 ],
 "id": "overlay_20441D22_371D_D3FD_41C3_084B070F5054",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.87,
   "hfov": 10.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_370125AB_38E0_A9EE_41BE_0CFFD04AC878); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 119.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "hfov": 10.04
  }
 ],
 "id": "overlay_79AE6F2F_3515_4FC3_4198_C266FBF10A92",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.8,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -78.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 145,
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69,
   "hfov": 8.55
  }
 ],
 "id": "overlay_6C2AF16F_357D_F243_41B6_AEE3142849C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.23,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
   "pitch": -8.69,
   "yaw": -18.23,
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_68845C35_357B_D1C7_41C9_671D285C5462",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.78,
   "hfov": 12.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_356AD6A5_38E0_AB9A_41C4_E2A062891C06); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 146.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 210,
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96,
   "hfov": 12.34
  }
 ],
 "id": "overlay_054A8B65_370C_F647_4180_B49199A0F6A8",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.26,
   "hfov": 18.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_35614696_38E0_ABA6_41A4_2590F02E1FD1); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
   "pitch": -18.03,
   "yaw": -61.26,
   "hfov": 18.14,
   "distance": 50
  }
 ],
 "id": "overlay_037E6CD9_370D_324F_41C3_D77EEFB676EF",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.18,
   "hfov": 14.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C, this.camera_3577A6A5_38E0_AB9A_41A2_6DD478E61F50); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
   "pitch": -16.59,
   "yaw": 70.18,
   "hfov": 14.21,
   "distance": 100
  }
 ],
 "id": "overlay_03F7805B_370C_D24C_419E_F524B54E1234",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.98,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_3596B686_38E0_ABA6_41BD_12AC2745B2B7); this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 90.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "hfov": 10.28
  }
 ],
 "id": "overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.22,
   "hfov": 15.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -54.96
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_3668B7C0_38E0_A999_41C7_A50C7A3920BE); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679979AE_3537_72C5_41B1_F23A06FC9F5F",
   "pitch": -54.96,
   "yaw": -162.22,
   "hfov": 15.37,
   "distance": 50
  }
 ],
 "id": "overlay_7F91A4CE_350D_5245_41B4_CD7F4C59950A",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.24,
   "hfov": 9.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.37
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_369A87B0_38E0_A9FA_4191_7BE7A8ED55D8); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
   "pitch": -16.37,
   "yaw": 4.24,
   "hfov": 9.28,
   "distance": 100
  }
 ],
 "id": "overlay_7F2B0818_350F_51CD_41C7_B5D85C040173",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.35,
   "hfov": 13.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
   "pitch": -5.95,
   "yaw": 2.35,
   "hfov": 13.65,
   "distance": 100
  }
 ],
 "id": "overlay_03D79784_370B_FEC5_41B0_D2AE6683ECFD",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.65,
   "hfov": 20,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_284CBA11_38E0_BABA_41C0_A8AB77F4CECB); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
   "pitch": -12.13,
   "yaw": -165.65,
   "hfov": 20,
   "distance": 50
  }
 ],
 "id": "overlay_46DDED0A_350C_F3CD_41A6_BE61C40EEDA6",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.06,
   "hfov": 9.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_37B8C89A_38E0_A7AE_41C9_F043B7A8CE34); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
   "pitch": -5.93,
   "yaw": -18.06,
   "hfov": 9.41,
   "distance": 100
  }
 ],
 "id": "overlay_288001E2_3775_527D_41B7_20668FB3D151",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.2,
   "hfov": 8.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6, this.camera_3789B8BA_38E0_A7EE_419B_798E6634F1B6); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
   "pitch": -8.82,
   "yaw": 131.2,
   "hfov": 8.25,
   "distance": 50
  }
 ],
 "id": "overlay_28DFB412_377D_51DD_41C7_F7E246254DB2",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.54,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -86.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21,
   "hfov": 7.2
  }
 ],
 "id": "overlay_60323ED1_3514_CE5F_41C8_C80EDB4358BB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.47,
   "hfov": 12.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.02
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_36CC0B88_38E0_B9AA_41C6_CB4724E842FA); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
   "pitch": -13.02,
   "yaw": -68.47,
   "hfov": 12.57,
   "distance": 100
  }
 ],
 "id": "overlay_03864A50_34F7_365D_41A8_EF63808B6489",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.94,
   "hfov": 13.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
   "pitch": -16.25,
   "yaw": 41.94,
   "hfov": 13.51,
   "distance": 50
  }
 ],
 "id": "overlay_036D1150_34F7_D25D_41A9_4D14281BE03E",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.05,
   "hfov": 7.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -84.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 133,
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "hfov": 7.88
  }
 ],
 "id": "overlay_01EBEBD6_34FC_D645_4190_2A8A4503233B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.41,
   "hfov": 6.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_351FFB3B_38E0_BAEF_41CA_548DBE158383); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -50.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79,
   "hfov": 6.14
  }
 ],
 "id": "overlay_71C3C072_350B_525D_41CB_3B0B1C3F6701",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.23,
   "hfov": 8.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_3513AB2B_38E0_BAEE_41B1_96643908178A); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
   "pitch": -20.21,
   "yaw": 123.23,
   "hfov": 8.14,
   "distance": 100
  }
 ],
 "id": "overlay_7B8164D6_350C_D245_41CA_D98F70A7C831",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.35,
   "hfov": 14.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.36
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_3550CACD_38E0_BBAA_41C4_AC12EE5FC92B); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
   "pitch": -15.36,
   "yaw": 171.35,
   "hfov": 14.43,
   "distance": 50
  }
 ],
 "id": "overlay_1E734084_3715_72C5_41A5_60C7ACAFE2E7",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.98,
   "hfov": 11.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_354B0ACD_38E0_BBAA_41A9_1E32B1564B09); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 69.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 201,
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14,
   "hfov": 11.92
  }
 ],
 "id": "overlay_1036BCE3_370B_527C_4168_5C516F60C087",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.15,
   "hfov": 13.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
   "pitch": -13.85,
   "yaw": 4.15,
   "hfov": 13.86,
   "distance": 100
  }
 ],
 "id": "overlay_21F04E8D_371C_CEC7_41AA_C445756BC9DF",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.2,
   "hfov": 12.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_36D80771_38E0_A97A_41A9_AEC6DCBA9E4C); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
   "pitch": -9.4,
   "yaw": 167.2,
   "hfov": 12.8,
   "distance": 100
  }
 ],
 "id": "overlay_2A22452A_370F_53CD_41C4_5605ECE47036",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.34,
   "hfov": 18.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.65
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_368F17A0_38E0_A99A_41A5_ADCFBFD8D242); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
   "pitch": 3.65,
   "yaw": 1.34,
   "hfov": 18.36,
   "distance": 100
  }
 ],
 "id": "overlay_1180CE67_370D_4E43_41A6_120D875697DA",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.65,
   "hfov": 12.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_368127A0_38E0_A99A_419B_D933CAF42937); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 86.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 215,
      "height": 243
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35,
   "hfov": 12.74
  }
 ],
 "id": "overlay_118FEDB2_370D_32DD_41A0_51F0DF86A745",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.62,
   "hfov": 15.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
   "pitch": -9.59,
   "yaw": 49.62,
   "hfov": 15.5,
   "distance": 50
  }
 ],
 "id": "overlay_2FF2F575_371B_7247_41C4_84929BB66698",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.7,
   "hfov": 12.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.86
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_28A159B4_38E0_B9FA_417A_C901AD7F7578); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
   "pitch": -6.86,
   "yaw": -46.7,
   "hfov": 12.44,
   "distance": 50
  }
 ],
 "id": "overlay_2DB368E7_3714_D243_41C6_63E7B7B2DCF3",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_37FB184C_38E0_A6AA_41CA_BBEDD32F3B23); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 146,
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95,
   "hfov": 8.57
  }
 ],
 "id": "overlay_79FCFE1A_3514_F1CD_41CA_B8FB659B7385",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.6,
   "hfov": 17.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.94
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79, this.camera_37EB083D_38E0_A6EB_41A9_16B9D62C5A57); this.mainPlayList.set('selectedIndex', 55)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
   "pitch": -16.94,
   "yaw": -170.6,
   "hfov": 17.86,
   "distance": 100
  }
 ],
 "id": "overlay_65868634_3515_51C5_41C3_B458A991A20D",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.15,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_358D2676_38E0_AB66_41CA_4C4F6E0581CE); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -155.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "hfov": 10.84
  }
 ],
 "id": "overlay_63477BDC_351D_5645_419B_8C4BCB72DE8E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.47,
   "hfov": 10.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_35072B2B_38E0_BAEE_41AE_9497BF851D34); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
   "pitch": -4.77,
   "yaw": -8.47,
   "hfov": 10.75,
   "distance": 100
  }
 ],
 "id": "overlay_21F89B2A_371F_37CD_419F_DCAB47F86368",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.63,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.09
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_353D5B1B_38E0_BAAE_41A8_F2F4CA64FE05); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
   "pitch": -7.09,
   "yaw": 172.63,
   "hfov": 13.16,
   "distance": 100
  }
 ],
 "id": "overlay_21759B50_371F_D642_41C2_5D33642A49E0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.4,
   "hfov": 9.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 116.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "hfov": 9.79
  }
 ],
 "id": "overlay_6AF071FC_3575_5245_41B2_7685EE7F11FD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.03,
   "hfov": 9.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1, this.camera_361D182D_38E0_A6EA_41CA_0930AA582ADD); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
   "pitch": -5.68,
   "yaw": 82.03,
   "hfov": 9.28,
   "distance": 50
  }
 ],
 "id": "overlay_176CA4CD_3775_3247_41B4_672F32DEE6BA",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.2,
   "hfov": 12.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.1
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_360C481D_38E0_A6AA_41AF_DF277447FDED); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CF64E9_373B_324F_41B9_442978CDEF30",
   "pitch": -7.1,
   "yaw": -36.2,
   "hfov": 12.71,
   "distance": 50
  }
 ],
 "id": "overlay_17443DAC_3775_32C5_41B2_495D1F84E736",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.5,
   "hfov": 22.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
   "pitch": -19.2,
   "yaw": 18.5,
   "hfov": 22.04,
   "distance": 100
  }
 ],
 "id": "overlay_14CA04BC_370B_32C5_41C9_C3DF3E294951",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.26,
   "hfov": 38.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 68,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 44.57
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 912,
      "height": 213
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 44.57,
   "yaw": 18.26,
   "hfov": 38.48,
   "distance": 50
  }
 ],
 "id": "overlay_17DB8D8D_370B_F2C7_4174_081A17259D26",
 "data": {
  "label": "Main Building"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.1,
   "hfov": 9.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_35B96647_38E0_AAA6_41BB_26251652C6A6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -4.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 156,
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67,
   "hfov": 9.23
  }
 ],
 "id": "overlay_5D874BBD_3534_D6C7_418C_9175197167AB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.5,
   "hfov": 12.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_35BCB657_38E0_AAA6_419C_DAF2ECB76308); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -171.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 221,
      "height": 252
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91,
   "hfov": 12.82
  }
 ],
 "id": "overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75",
 "data": {
  "label": "Image"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "class": "IconButton",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "maxWidth": 49,
 "right": 30,
 "width": 100,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.42,
   "hfov": 9.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_3735F956_38E0_A6A6_41C2_C72E3094A59F); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
   "pitch": -20.85,
   "yaw": 174.42,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_13AA6027_371B_71C3_419C_48B944D1C549",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.98,
   "hfov": 18.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_3725A937_38E0_A6E6_41C3_D207FC9F1CAA); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -11.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 312,
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08,
   "hfov": 18.53
  }
 ],
 "id": "overlay_133A8E65_3714_CE47_41B8_4365012D8910",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.97,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_28EFD5DA_38E0_A9AE_41C1_3B717D5C896D); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -150.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73,
   "hfov": 10.28
  }
 ],
 "id": "overlay_5FC56D74_3535_5245_41BC_37A44A6274B6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.92,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -88.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "hfov": 10.29
  }
 ],
 "id": "overlay_6A7A1979_3575_324C_41C2_400713A10AC3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.99,
   "hfov": 13.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.79
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080, this.camera_36F0A742_38E0_AA99_41BE_C047BF9340D1); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
   "pitch": -23.79,
   "yaw": 170.99,
   "hfov": 13.88,
   "distance": 50
  }
 ],
 "id": "overlay_5456AC81_351C_D2BF_4169_DBCFA4D5A390",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.59,
   "hfov": 10.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E, this.camera_36FC3751_38E0_AABA_41C4_7133B7DD703A); this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -165.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "hfov": 10.24
  }
 ],
 "id": "overlay_681A9085_351B_52C7_41C4_0610BEBE66A1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.95,
   "hfov": 14.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.65
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_355586D4_38E0_ABBA_41CB_2C1D576A5694); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
   "pitch": -11.65,
   "yaw": -96.95,
   "hfov": 14.12,
   "distance": 50
  }
 ],
 "id": "overlay_05AFB8A6_3714_D2C5_418D_3C7F54BF84F8",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.69,
   "hfov": 12.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_355E06E4_38E0_AB9A_41A0_FD3C9AAFCBC1); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
   "pitch": -13.16,
   "yaw": 35.69,
   "hfov": 12.63,
   "distance": 50
  }
 ],
 "id": "overlay_04904509_3715_F3CF_41B7_9E451CCE798F",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.34,
   "hfov": 14.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.22
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_3617EC54_38E0_BEB9_41C0_782DE5573E45); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
   "pitch": -15.22,
   "yaw": 52.34,
   "hfov": 14.44,
   "distance": 50
  }
 ],
 "id": "overlay_7A110627_3535_51C4_41B3_0D67958BFBE7",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.7,
   "hfov": 3.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -84.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "hfov": 3.93
  }
 ],
 "id": "overlay_60DA7E71_357B_4E5F_41B0_F6A24ED12AB0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.3,
   "hfov": 7.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_37E29C54_38E0_BEB9_41BD_A5D4EF83E6D6); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
   "pitch": -19.31,
   "yaw": -63.3,
   "hfov": 7.71,
   "distance": 100
  }
 ],
 "id": "overlay_6E799749_357D_3E4F_41AB_22D4772A99F0",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.31,
   "hfov": 10.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8, this.camera_28E06975_38E0_B97A_41C1_F79170526777); this.mainPlayList.set('selectedIndex', 60)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 28.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "hfov": 10.24
  }
 ],
 "id": "overlay_514720D5_350F_5247_41C8_B0AFDAEDF11B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.41,
   "hfov": 10.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.63
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_37035965_38E0_A69A_41B5_5F3F9E2EA5D5); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
   "pitch": -12.63,
   "yaw": -2.41,
   "hfov": 10.45,
   "distance": 100
  }
 ],
 "id": "overlay_54D66C2F_350F_31C3_41C7_BD13378E2D42",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.2,
   "hfov": 10.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130, this.camera_37134965_38E0_A69A_419D_87D58FBF50F0); this.mainPlayList.set('selectedIndex', 59)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -166.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31,
   "hfov": 10.27
  }
 ],
 "id": "overlay_51B8CC94_350C_D2C4_419E_822B01ABC77C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.78,
   "hfov": 10.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_28F03985_38E0_B99A_418B_1E6566EF0EDA); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 117.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48,
   "hfov": 10.21
  }
 ],
 "id": "overlay_50F2E95B_3535_5243_4185_138297492FF8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.12,
   "hfov": 16.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_370F15BB_38E0_A9EE_419D_FE057A4C3AF3); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -40.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 275,
      "height": 373
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.03,
   "hfov": 16.3
  }
 ],
 "id": "overlay_1F5F4715_3735_3FC4_41B5_DAFBF42DD6B6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.5,
   "hfov": 11.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.24
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_371F85CA_38E0_A9AE_41C5_E2A2741CC9BC); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -125.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 197,
      "height": 197
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.24,
   "hfov": 11.65
  }
 ],
 "id": "overlay_1FA0802B_3735_F1C3_41B3_B2406DD7BD21",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.13,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.97
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_36B5A791_38E0_A9BA_4199_89321D15DC41); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_37ADD52E_38E0_AEE6_41CA_E4BB32FB62FB",
   "pitch": -16.97,
   "yaw": 141.13,
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_45F491A9_351B_D2CF_41B2_5333028715F7",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.83,
   "hfov": 7.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_36A7B781_38E0_A99A_41B3_83EA219D75FF); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 102.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "hfov": 7.22
  }
 ],
 "id": "overlay_4421392D_351C_F3C7_41C9_5957C1C96F6E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.27,
   "hfov": 20.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.34
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_3547BABD_38E0_BBEA_4193_3E3DC54E7B4E); this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
   "pitch": -12.34,
   "yaw": -152.27,
   "hfov": 20.12,
   "distance": 100
  }
 ],
 "id": "overlay_67712694_3515_7EC4_41C2_09C857147A84",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.16,
   "hfov": 16.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.54
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_379798C9_38E0_A7AA_41C3_A928AEA9B167); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
   "pitch": -13.54,
   "yaw": 2.16,
   "hfov": 16.28,
   "distance": 100
  }
 ],
 "id": "overlay_0B38A899_350C_D2CF_4176_198675F752F0",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.11,
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -174.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 325
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79,
   "hfov": 11.85
  }
 ],
 "id": "overlay_0B151883_350F_52C3_41BE_327139775FC7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.76,
   "hfov": 16.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.12
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_3767D8D9_38E0_A7AA_41C7_B57DF5E640F9); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
   "pitch": -35.12,
   "yaw": 106.76,
   "hfov": 16.84,
   "distance": 100
  }
 ],
 "id": "overlay_0AB661E9_350C_D24F_41C5_2BBFCDE54084",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.34,
   "hfov": 10.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_36FE0B69_38E0_B96A_4197_6B684DB5F4B6); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 80.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 199,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "hfov": 10.92
  }
 ],
 "id": "overlay_08EC43F2_351B_D65C_41B2_D431E9E3945D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.21,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_36F25B59_38E0_BAAA_41B5_36E09BCBEE88); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -43.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47,
   "hfov": 10.25
  }
 ],
 "id": "overlay_08EA2CC8_351B_524D_41BA_C9B4E4BE086D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.84,
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.98
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_36E9AB4A_38E0_BAAE_41CB_5042D8C96FE2); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
   "pitch": -20.98,
   "yaw": -84.84,
   "hfov": 13.84,
   "distance": 100
  }
 ],
 "id": "overlay_7763D3CF_351D_5643_41BA_58C4979660AF",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.48,
   "hfov": 10.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_3639FC34_38E0_BEFA_41C1_CF2D708E14A6); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
   "pitch": -8.8,
   "yaw": 87.48,
   "hfov": 10.9,
   "distance": 50
  }
 ],
 "id": "overlay_12BE1C3E_370B_51C5_4142_25DAC8478C42",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.24,
   "hfov": 13.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_3606EC44_38E0_BE9A_41B6_50E5B023012C); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
   "pitch": -12.13,
   "yaw": -0.24,
   "hfov": 13.27,
   "distance": 100
  }
 ],
 "id": "overlay_1438306B_3715_F243_4189_1D91E03073CE",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.33,
   "hfov": 11.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_362ADC25_38E0_BE9A_41B4_7AF5CC9AF564); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
   "pitch": -8.82,
   "yaw": -87.33,
   "hfov": 11.03,
   "distance": 50
  }
 ],
 "id": "overlay_12F0DAF4_3715_3644_41A9_F75183BC250C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.75,
   "hfov": 21.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_3530FB0B_38E0_BAAE_41C0_7FD05608F298); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
   "pitch": -17.97,
   "yaw": -88.75,
   "hfov": 21.22,
   "distance": 50
  }
 ],
 "id": "overlay_1C6BC9BC_3737_D2C5_41C1_161986B94DC1",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.32,
   "hfov": 16.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_35262AFC_38E0_BB6A_41C1_6C69793B010E); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 156.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 275,
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35,
   "hfov": 16.32
  }
 ],
 "id": "overlay_1C443336_3737_37C4_41BC_749DBC1287AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.27,
   "hfov": 15.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E53807_3717_51C3_41C3_684D314D142D, this.camera_36E2D732_38E0_AAFE_41B2_5E3CAEFE28DD); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
   "pitch": -6.09,
   "yaw": 8.27,
   "hfov": 15.83,
   "distance": 100
  }
 ],
 "id": "overlay_2A05EDCE_3775_3245_41C0_54C0BBB0645C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.91,
   "hfov": 15.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_350D9713_38E0_AABE_41B8_7B19A5C0E4D8); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
   "pitch": -17.07,
   "yaw": 169.91,
   "hfov": 15.22,
   "distance": 100
  }
 ],
 "id": "overlay_2B98DA22_3775_51FD_41BC_83022112DCEB",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.57,
   "hfov": 12.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_35199722_38E0_AA9E_41CB_F9D377B7823C); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
   "pitch": -7.46,
   "yaw": -107.57,
   "hfov": 12.42,
   "distance": 50
  }
 ],
 "id": "overlay_2B066F65_3775_4E47_4199_638BFDE90524",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.55,
   "hfov": 12.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.23
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_37DA586B_38E0_A76E_41B6_6A505DA167CA); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679DE9A6_3537_72C5_41C2_3603489E44B8",
   "pitch": -41.23,
   "yaw": 15.55,
   "hfov": 12.39,
   "distance": 100
  }
 ],
 "id": "overlay_74A9305D_3515_5247_41C9_2833F6E97866",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.46,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_37C8985C_38E0_A6AA_41B1_AAF67B77AB03); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -174.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "hfov": 10.25
  }
 ],
 "id": "overlay_52979F7B_350B_4E4C_41BE_CC7E8613E10B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.04,
   "hfov": 7.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 123,
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "hfov": 7.31
  }
 ],
 "id": "overlay_69083401_351C_F1BF_4198_34BD8C2C19A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.86,
   "hfov": 7.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.19
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 165.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 123,
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.19,
   "hfov": 7.32
  }
 ],
 "id": "overlay_69DBC790_351D_5EDD_41C2_6BABED32AA8E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.19,
   "hfov": 11.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_357E1AAE_38E0_BBE6_41C7_A28EE462AA01); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
   "pitch": -12.74,
   "yaw": -4.19,
   "hfov": 11.03,
   "distance": 100
  }
 ],
 "id": "overlay_55B0EDC7_3514_D243_41B2_B4FFA6B5DF17",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.04,
   "hfov": 8.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.46
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
   "pitch": -13.46,
   "yaw": 30.04,
   "hfov": 8.51,
   "distance": 100
  }
 ],
 "id": "overlay_1A4FCE0F_371B_31C3_41C3_81B969B44241",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.78,
   "hfov": 11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.37
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_286F79F2_38E0_B97E_41B4_E3F3945E7A1E); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
   "pitch": -20.37,
   "yaw": 165.78,
   "hfov": 11,
   "distance": 50
  }
 ],
 "id": "overlay_07C47485_371B_32C7_41C0_B625C4B55E8A",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.58,
   "hfov": 12.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_287CCA02_38E0_BA9E_41B9_EDC919B51EB2); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
   "pitch": -15.13,
   "yaw": -41.58,
   "hfov": 12.31,
   "distance": 50
  }
 ],
 "id": "overlay_1B6518EF_371D_3243_4196_78C862C377D2",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.27,
   "hfov": 12.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_357E16B5_38E0_ABFA_41B9_80A70740B984); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
   "pitch": -16.25,
   "yaw": -173.27,
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "id": "overlay_1E53EFC9_370D_4E4F_41C1_881B7092E117",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.52,
   "hfov": 11.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_354B06C5_38E0_AB9B_41C1_4D6A5453B201); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -70.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 197,
      "height": 224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29,
   "hfov": 11.67
  }
 ],
 "id": "overlay_1F773744_370C_DE45_41BF_BA698C3F2083",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.04,
   "hfov": 12.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.86
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A, this.camera_3680BBB7_38E0_B9E6_41C2_4D20008BC2FB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
   "pitch": -13.86,
   "yaw": -175.04,
   "hfov": 12.86,
   "distance": 100
  }
 ],
 "id": "overlay_2C090C09_370D_D1CC_41BE_1B53E09D7365",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "hfov": 12.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_368EEBC7_38E0_B9A6_4199_A5AFC69AA058); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
   "pitch": -3.83,
   "yaw": -9.03,
   "hfov": 12.6,
   "distance": 100
  }
 ],
 "id": "overlay_2AC9EE6D_370D_CE47_41A6_976CAF339F0E",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.45,
   "hfov": 16.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.56
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_37444908_38E0_A6AA_41A9_5EF7754055A8); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
   "pitch": -38.56,
   "yaw": -162.45,
   "hfov": 16.1,
   "distance": 100
  }
 ],
 "id": "overlay_7A5AFDF3_350D_3243_41B6_CCD89B066D49",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.3,
   "hfov": 8.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_377448F8_38E0_A76A_41BB_994116BEAB5F); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 7.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 137,
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "hfov": 8.1
  }
 ],
 "id": "overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200",
 "data": {
  "label": "Image"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "left",
 "class": "Label",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": "0%",
 "width": 454,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": true,
 "top": "3.76%",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "height": 86,
 "textShadowHorizontalLength": 0,
 "minWidth": 1,
 "fontSize": 90,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Multimedia dan Jaringan"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Book",
 "horizontalAlign": "left",
 "class": "Label",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": "0%",
 "width": 388,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "dolor sit amet, consectetur ",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "borderRadius": 0,
 "bottom": 0,
 "height": 46,
 "textShadowHorizontalLength": 0,
 "minWidth": 1,
 "fontSize": 41,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Politeknik Negeri Ujung Pandang"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "class": "Image",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarMargin": 2,
 "paddingLeft": 30,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "layout": "horizontal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "layout": "vertical"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679979AE_3537_72C5_41B1_F23A06FC9F5F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CF64E9_373B_324F_41B9_442978CDEF30",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_37ADD52E_38E0_AEE6_41CA_E4BB32FB62FB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679DE9A6_3537_72C5_41C2_3603489E44B8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "maxWidth": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "HOUSE INFO",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "width": 130,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOCATION",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "width": 103,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "width": 112,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button photoalbum"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "width": 90,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "REALTOR",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button realtor"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "class": "ThumbnailGrid",
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "scrollBarVisible": "rollOver",
 "paddingRight": 70,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontFamily": "Montserrat"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "overflow": "visible",
 "width": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 6,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minHeight": 1,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 20,
 "width": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.67vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.62vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "class": "IconButton",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "maxWidth": 150,
 "width": "12%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "propagateClick": false,
 "height": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "width": "80%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "height": "30%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "class": "IconButton",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "maxWidth": 150,
 "width": "12%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "propagateClick": false,
 "height": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.67vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.33vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.46vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.46vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.67vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.66vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundOpacity": 0.7,
 "width": 207,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 59,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 34,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "45%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.67vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "80%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "class": "Image",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "maxWidth": 200,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.33vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.03vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.16vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
