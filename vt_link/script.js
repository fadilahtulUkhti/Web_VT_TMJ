(function(){
    var script = {
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB",
  "this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C",
  "this.Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0",
  "this.Image_89FA09E6_9967_9773_41D5_535A23169252",
  "this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14",
  "this.Image_890D1D6E_9924_8F72_41E2_C91396623840",
  "this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D",
  "this.Container_8A9CD876_9A67_29BB_41B0_37026D402AB5",
  "this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD",
  "this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1",
  "this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C",
  "this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78",
  "this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950",
  "this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_863D7B8F_9317_A91C_41C3_8582003BBBFE]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist,this.mainPlayList])",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
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
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8FE48C5F_9B84_39BB_41D3_19361BA3E763",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E8AE14A_9B84_4B9A_41DB_E6399E10DE8C",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": -177.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BDC485E_9C8A_4CEC_41E2_C1837B1559EB",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_8400EB08_931E_6904_41C4_9252EB6907CE",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "initialPosition": {
  "yaw": -56.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85D03753_9C8A_44F4_41C0_FCECD8DB0CC9",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA.ogg",
  "mp3Url": "media/audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA",
 "data": {
  "label": "Audio_Lab Multimed"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -105.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_855867C4_9C8A_43D3_41E3_39B8DED57A3C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_514720D5_350F_5247_41C8_B0AFDAEDF11B",
  "this.overlay_54D66C2F_350F_31C3_41C7_BD13378E2D42",
  "this.overlay_51B8CC94_350C_D2C4_419E_822B01ABC77C",
  "this.overlay_50F2E95B_3535_5243_4185_138297492FF8",
  "this.overlay_88E56D9B_9071_8215_41A5_5681921E2B47",
  "this.overlay_89FBD3FA_907E_8616_41D8_39B8AC25B233"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -2.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.17,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "distance": 1
  },
  {
   "yaw": -166.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -150.97,
   "panorama": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "distance": 1
  },
  {
   "yaw": 28.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -55.84,
   "panorama": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "distance": 1
  },
  {
   "yaw": 117.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.46,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_87A3BE44_9312_6B0D_4196_3434BCA3E8FD"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_81DAD99A_9316_E904_41D2_226049E1F21E",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_622FF2FC_351B_3645_41A4_388C59C0DCB7",
  "this.overlay_608E2E9C_3514_CEC5_41C0_AC56E8AEF851",
  "this.overlay_62FEA986_3515_52C4_41A2_8192D8FA5CC1",
  "this.overlay_89A7E90C_9052_83F2_41D4_29D0D3A70464"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -111.62,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.88,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  },
  {
   "yaw": -81.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 119.87,
   "panorama": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "distance": 1
  },
  {
   "panorama": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 10.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BB49953_9C8A_4CF4_41E2_06F03E384E9A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BA21937_9C8A_4CBD_41E1_B9EC96684580",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_863D7B8F_9317_A91C_41C3_8582003BBBFE.ogg",
  "mp3Url": "media/audio_863D7B8F_9317_A91C_41C3_8582003BBBFE.mp3",
  "class": "AudioResource"
 },
 "id": "audio_863D7B8F_9317_A91C_41C3_8582003BBBFE",
 "data": {
  "label": "Audio VT Poltek"
 }
},
{
 "initialPosition": {
  "yaw": -62.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B8758E5_9C8A_4DDD_41D4_0D9D29501DB7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 136.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8594378C_9C8A_446C_41E0_F32F70C2DE3F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 171.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84356B0A_9C8A_4C54_41C1_E818CA25797C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
 "overlays": [
  "this.overlay_288001E2_3775_527D_41B7_20668FB3D151",
  "this.overlay_28DFB412_377D_51DD_41C7_F7E246254DB2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -18.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -59.87,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "distance": 1
  },
  {
   "yaw": 131.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.83,
   "panorama": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -9.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86C4CC83_9C8A_4454_41BA_F8C26212BFA9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 27.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B52398A_9C8A_4C54_41E1_B5EC91264B0E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_0DDC64D7_34FF_3243_419B_39B379EF929B",
  "this.overlay_01061A72_34FD_D65D_4180_0BF098FE1EAD",
  "this.overlay_0E423D81_34FB_32BF_4196_4133A57D751A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 114.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.79,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "distance": 1
  },
  {
   "yaw": 11.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.54,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "distance": 1
  },
  {
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_876BA82B_9312_7704_41D4_0E81D85BDA33"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_9C97FA48_930E_AB04_41D6_723615B1214F.ogg",
  "mp3Url": "media/audio_9C97FA48_930E_AB04_41D6_723615B1214F.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9C97FA48_930E_AB04_41D6_723615B1214F",
 "data": {
  "label": "Audio_Jalan Utama_G. Admin"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -177.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B5DE97D_9C8A_4CAD_41D8_715FD6C80A04",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -175.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_845F3A9B_9C8A_4C74_41C8_EB90C22F8C68",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86D77CA0_9C8A_4454_41E0_4A53F192BBD7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 ",
 "hfovMin": "135%",
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
 "overlays": [
  "this.overlay_7F2B0818_350F_51CD_41C7_B5D85C040173",
  "this.overlay_8ACBA44C_9071_8272_41DD_1AB8F5F59A1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -172.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.41,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "distance": 1
  },
  {
   "yaw": 4.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.52,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8C43F5A0_9BFC_CA86_41CE_1E13396E3D96"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 72.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_848465B0_9C8A_47B4_41DE_B6801512076F",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8C43F5A0_9BFC_CA86_41CE_1E13396E3D96",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_9E6CC5A2_9376_9904_41E0_713D6F438524.ogg",
  "mp3Url": "media/audio_9E6CC5A2_9376_9904_41E0_713D6F438524.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9E6CC5A2_9376_9904_41E0_713D6F438524",
 "data": {
  "label": "Audio_Gerbang"
 }
},
{
 "initialPosition": {
  "yaw": 29.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B2D99E4_9C8A_4FDC_41DF_288D7F8A52BF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 146.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8447C64A_9C8A_44D4_41D2_E4EDE5D7AAB5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF.ogg",
  "mp3Url": "media/audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF",
 "data": {
  "label": "Audio_Sinematografi"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_819CF114_9316_790C_41D9_08485B850FD1"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 116.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_856E0BC7_9C8A_43DC_41E1_67BCB37FB0F6",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E9416B5_9B85_D68E_41D3_991FB43C4CE7",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 4.67,
  "class": "PanoramaCameraPosition",
  "pitch": -3.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E02AEBD_9B85_D6FE_41B9_44E52E4F6166",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lt.3 GS",
 "hfovMin": "135%",
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
 "overlays": [
  "this.overlay_52979F7B_350B_4E4C_41BE_CC7E8613E10B",
  "this.overlay_8A0EDB2F_9073_860E_41E0_A6A77C8680B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -174.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 117.78,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "distance": 1
  },
  {
   "yaw": 8.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 140.49,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8E02AEBD_9B85_D6FE_41B9_44E52E4F6166"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8F84BF56_9B84_D78A_41B1_870408BC58D7",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": -80.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84799AC6_9C8A_4DDC_4193_C7305FAE9E29",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -5.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85E9EB33_9C8A_4CB4_41E0_5E631F405BB7",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_871C3E38_9312_EB04_41DB_076E8535D244.ogg",
  "mp3Url": "media/audio_871C3E38_9312_EB04_41DB_076E8535D244.mp3",
  "class": "AudioResource"
 },
 "id": "audio_871C3E38_9312_EB04_41DB_076E8535D244",
 "data": {
  "label": "Audio_GS_Bag.Dalam Lt.1"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -73.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_854C7B8E_9C8A_4C6C_41BB_C039AB934EAE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E53807_3717_51C3_41C3_684D314D142D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 144.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85BC0B81_9C8A_4C54_41B3_41CC3DB449B3",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_7A110627_3535_51C4_41B3_0D67958BFBE7",
  "this.overlay_60DA7E71_357B_4E5F_41B0_F6A24ED12AB0",
  "this.overlay_6E799749_357D_3E4F_41AB_22D4772A99F0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 52.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 142.87,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "distance": 1
  },
  {
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -63.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.84,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200",
 "overlays": [
  "this.overlay_08EC43F2_351B_D65C_41B2_D431E9E3945D",
  "this.overlay_08EA2CC8_351B_524D_41BA_C9B4E4BE086D",
  "this.overlay_7763D3CF_351D_5643_41BA_58C4979660AF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -84.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.3,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "distance": 1
  },
  {
   "yaw": -43.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.31,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "distance": 1
  },
  {
   "yaw": 80.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 146.78,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8D29AD37_9B84_3B8A_41E1_85AD82C96666"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -144.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84119AEF_9C8A_4DAC_41DE_39C73241EC23",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87A3BE44_9312_6B0D_4196_3434BCA3E8FD",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
 "overlays": [
  "this.overlay_1A4FCE0F_371B_31C3_41C3_81B969B44241",
  "this.overlay_07C47485_371B_32C7_41C0_B625C4B55E8A",
  "this.overlay_1B6518EF_371D_3243_4196_78C862C377D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 165.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -96.95,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "distance": 1
  },
  {
   "yaw": -41.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.16,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "distance": 1
  },
  {
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_81FAEBE8_9316_A904_41E1_A109334C933D"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 114,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_843C5726_9C8A_445C_41E2_9919772F7485",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_810E08B6_9316_B70C_4184_D7545DD43644.ogg",
  "mp3Url": "media/audio_810E08B6_9316_B70C_4184_D7545DD43644.mp3",
  "class": "AudioResource"
 },
 "id": "audio_810E08B6_9316_B70C_4184_D7545DD43644",
 "data": {
  "label": "Audio_Lt.1_2_Audit"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
 "overlays": [
  "this.overlay_13AA6027_371B_71C3_419C_48B944D1C549",
  "this.overlay_133A8E65_3714_CE47_41B8_4365012D8910",
  "this.overlay_89E07FE3_9052_9E35_41A2_6E1AAF73DC7B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -11.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -169.64,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "distance": 1
  },
  {
   "yaw": 174.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.35,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_82FCF32F_9312_B91C_41C3_1523E1482A7D"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -8.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B4DE961_9C8A_4CD5_41B7_10967290E7CD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 68.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_844D5A8E_9C8A_4C6C_41C1_D8ED07121902",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt. 2 ",
 "hfovMin": "135%",
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
 "overlays": [
  "this.overlay_7EB7BFBC_350D_4EC5_4189_322F9200F505",
  "this.overlay_7E00A746_350C_FE45_41C0_DAF20521CB28"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 142.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.34,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "distance": 1
  },
  {
   "yaw": 5.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.3,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_83A8E099_9BFC_4A87_41E2_CDFCFFDADC06"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lt. 2 Gedung Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
 "overlays": [
  "this.overlay_7485FE18_3514_D1CD_41B6_491CD45988E8",
  "this.overlay_74B083A7_3517_D6C3_4167_235AD5371896",
  "this.overlay_7382AB3B_3517_37C3_41B6_FEDCFC6D4C12",
  "this.overlay_631E43FA_351D_364D_41A9_0CF63DCEF7BA",
  "this.overlay_63F5F5DC_351D_7245_41B5_7B9B367FAD83",
  "this.overlay_62BA8DFA_351D_524D_4192_DCE9A52161B1",
  "this.overlay_85ED66FE_9057_8E0F_41D7_E7D33126C212",
  "this.overlay_8A44A27B_9051_8616_41D6_27A916300787",
  "this.overlay_8A3D5170_9053_8213_41B2_BCF635EBFA08",
  "this.overlay_8A4D84BC_9051_8212_41D4_A05500D17632"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 151.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.77,
   "panorama": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "distance": 1
  },
  {
   "yaw": 169.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -155.15,
   "panorama": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "distance": 1
  },
  {
   "yaw": 41.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.45,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "distance": 1
  },
  {
   "yaw": -161.23,
   "class": "AdjacentPanorama",
   "backwardYaw": -146.44,
   "panorama": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "distance": 1
  },
  {
   "yaw": 2.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -111.62,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "distance": 1
  },
  {
   "yaw": 79.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.24,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_86D70314_931E_790C_41D2_C567D1DC7091"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -1.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85608BE0_9C8A_43D4_41D7_D0B28FAFA0FC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 175.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_845D0668_9C8A_44D4_41D4_13D5E9AC0244",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_8307EC55_930F_AF0C_41C5_0E09F9C505E2",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": -14.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_842B0713_9C8A_4474_41D3_D9AEAF7D86ED",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
 "overlays": [
  "this.overlay_1F5F4715_3735_3FC4_41B5_DAFBF42DD6B6",
  "this.overlay_1FA0802B_3735_F1C3_41B3_B2406DD7BD21",
  "this.overlay_8EBFBB8F_904F_860E_41D0_5034CA7C2CF4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -44.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 156.32,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "distance": 1
  },
  {
   "yaw": -127.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -70.52,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_810E08B6_9316_B70C_4184_D7545DD43644"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -129,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85C0E744_9C8A_44DC_41C2_027A119BC44D",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_4421392D_351C_F3C7_41C9_5957C1C96F6E",
  "this.overlay_88448013_907E_8215_41D2_C5E16AF14A66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 102.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.14,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "distance": 1
  },
  {
   "yaw": 140.49,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.41,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_87F5A704_9312_B90C_41CD_785D747549D1"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS_Lt.3",
 "hfovMin": "135%",
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "audios": [
  "this.audio_8E8AE14A_9B84_4B9A_41DB_E6399E10DE8C"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_9C85497D_930D_A9FC_41D3_07A357607C82.ogg",
  "mp3Url": "media/audio_9C85497D_930D_A9FC_41D3_07A357607C82.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9C85497D_930D_A9FC_41D3_07A357607C82",
 "data": {
  "label": "Audio_Jalan Utama"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_24B0B964_370D_7245_41A8_BE9D771ADA2C",
  "this.overlay_74EE5467_7A41_D6E0_41DE_676224AAAB48"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -7.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.06,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9E6CC5A2_9376_9904_41E0_713D6F438524"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 129.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BF398CB_9C8A_4DD4_41D0_23B67D3DAEA4",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_03D79784_370B_FEC5_41B0_D2AE6683ECFD",
  "this.overlay_46DDED0A_350C_F3CD_41A6_BE61C40EEDA6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -165.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 82.03,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "distance": 1
  },
  {
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_5F25D50C_3535_33C5_41BB_0B905435B0D5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -33.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.59,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_0B38A899_350C_D2CF_4176_198675F752F0",
  "this.overlay_0B151883_350F_52C3_41BE_327139775FC7",
  "this.overlay_0AB661E9_350C_D24F_41C5_2BBFCDE54084"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 2.16,
   "class": "AdjacentPanorama",
   "backwardYaw": -41.58,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 106.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.24,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8DB91137_9B84_4B8A_41D3_099469E69272"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
 "overlays": [
  "this.overlay_05AFB8A6_3714_D2C5_418D_3C7F54BF84F8",
  "this.overlay_04904509_3715_F3CF_41B7_9E451CCE798F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -96.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 165.78,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "distance": 1
  },
  {
   "yaw": 35.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -66,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_81A16B0C_9315_A91C_41D1_6540C5032B69"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 111.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_847866C3_9C8A_45D4_41E1_84B81E2E6661",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS Lt 1",
 "hfovMin": "135%",
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
 "overlays": [
  "this.overlay_6A7A1979_3575_324C_41C2_400713A10AC3",
  "this.overlay_5456AC81_351C_D2BF_4169_DBCFA4D5A390",
  "this.overlay_681A9085_351B_52C7_41C4_0610BEBE66A1",
  "this.overlay_88ED381A_9073_8216_41E1_2CA3A3A1935E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -88.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.7,
   "panorama": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "distance": 1
  },
  {
   "yaw": 170.99,
   "class": "AdjacentPanorama",
   "backwardYaw": -4.19,
   "panorama": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "distance": 1
  },
  {
   "yaw": -165.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -33.12,
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_871C3E38_9312_EB04_41DB_076E8535D244"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
 "overlays": [
  "this.overlay_03864A50_34F7_365D_41A8_EF63808B6489",
  "this.overlay_036D1150_34F7_D25D_41A9_4D14281BE03E",
  "this.overlay_01EBEBD6_34FC_D645_4190_2A8A4503233B",
  "this.overlay_89C91317_9056_861E_41E0_8AB236CFF7F5",
  "this.overlay_898AB4F4_9056_8212_41B3_FA40CE5C6F57",
  "this.overlay_888CE9FA_9B8F_DA7A_41B3_A5A890067F53"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -68.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.18,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8FE48C5F_9B84_39BB_41D3_19361BA3E763"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 118.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_841DFAE1_9C8A_4DD4_41B2_A354C732E33B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -168.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84BAC608_9C8A_4454_41AE_3452F36F4659",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 33.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84B8EA81_9C8A_4C55_418B_69C784879057",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_5D403BCC_353D_D645_41C5_9D17083013F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 27.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -148.79,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_866A3E81_931D_AB04_41DC_F38E062D24BE"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_08EEB8E6_3514_F245_41C3_0378DC638F2B",
  "this.overlay_75B4F11C_3515_33C5_41B7_4703BB3C4E37"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 81.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.61,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "distance": 1
  },
  {
   "yaw": -134.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 102.83,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8DF276B6_9B84_568A_41C6_346DCA9171D2"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
 "overlays": [
  "this.overlay_1C6BC9BC_3737_D2C5_41C1_161986B94DC1",
  "this.overlay_1C443336_3737_37C4_41BC_749DBC1287AA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 156.32,
   "class": "AdjacentPanorama",
   "backwardYaw": -44.73,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "distance": 1
  },
  {
   "yaw": -88.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.91,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8F84BF56_9B84_D78A_41B1_870408BC58D7"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 31.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86E68CB8_9C8A_45B4_41C2_BD669F69A0E8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
 "overlays": [
  "this.overlay_71C3C072_350B_525D_41CB_3B0B1C3F6701",
  "this.overlay_7B8164D6_350C_D245_41CA_D98F70A7C831"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 123.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.21,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "distance": 1
  },
  {
   "yaw": -50.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.61,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_80EFB0C3_9312_F704_41D9_39DD01D4B11E"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 91.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BEFF887_9C8A_4C5C_41D3_32742367BD7B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_5FC56D74_3535_5245_41BC_37A44A6274B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -150.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -166.2,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_846D1395_931E_B90C_41DA_2A910045D53E"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 138.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BA83928_9C8A_4C53_41C0_42D783816E07",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_67712694_3515_7EC4_41C2_09C857147A84"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -152.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.6,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 11.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85F92B46_9C8A_4CDC_41C8_527F8EB0A5E3",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_860D2707_931E_F90C_4184_373786F9A661.ogg",
  "mp3Url": "media/audio_860D2707_931E_F90C_4184_373786F9A661.mp3",
  "class": "AudioResource"
 },
 "id": "audio_860D2707_931E_F90C_4184_373786F9A661",
 "data": {
  "label": "Audio_Lab. Komdat"
 }
},
{
 "initialPosition": {
  "yaw": 83.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B42096E_9C8A_4CAC_41CB_88984A5D55B3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 6.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_856BD7D1_9C8A_43F4_41CD_B3432C9911DB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -114.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_840396F8_9C8A_45B4_419A_00E066A922D6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -98.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8584277D_9C8A_44AD_41E0_E3A727C24791",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -39.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B8078F3_9C8A_4DB4_41DF_0E93F271BBCE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8DF276B6_9B84_568A_41C6_346DCA9171D2",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": -172.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84FA3A38_9C8A_4CB4_418F_7BFAAD758038",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_63477BDC_351D_5645_419B_8C4BCB72DE8E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -155.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 169.6,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "items": [
  {
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera"
  },
  {
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera"
  },
  {
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera"
  },
  {
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera"
  },
  {
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera"
  },
  {
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera"
  },
  {
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera"
  },
  {
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera"
  },
  {
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera"
  },
  {
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera"
  },
  {
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera"
  },
  {
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera"
  },
  {
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera"
  },
  {
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera"
  },
  {
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera"
  },
  {
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera"
  },
  {
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera"
  },
  {
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera"
  },
  {
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera"
  },
  {
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera"
  },
  {
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera"
  },
  {
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera"
  },
  {
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera"
  },
  {
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera"
  },
  {
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera"
  },
  {
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera"
  },
  {
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera"
  },
  {
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera"
  },
  {
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera"
  },
  {
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera"
  },
  {
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera"
  },
  {
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera"
  },
  {
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera"
  },
  {
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera"
  },
  {
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera"
  },
  {
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera"
  },
  {
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera"
  },
  {
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera"
  },
  {
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera"
  },
  {
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera"
  },
  {
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera"
  },
  {
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera"
  },
  {
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera"
  },
  {
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera"
  },
  {
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera"
  },
  {
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera"
  },
  {
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera"
  },
  {
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera"
  },
  {
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera"
  },
  {
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera"
  },
  {
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera"
  },
  {
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera"
  },
  {
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera"
  },
  {
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera"
  },
  {
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera"
  },
  {
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera"
  },
  {
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera"
  },
  {
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera"
  },
  {
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera"
  },
  {
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera"
  },
  {
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_6BDF6715_3577_FFC7_41C9_D7C112D235F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -132.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.28,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_86909EE4_931E_AB0C_41C0_A53ECB409747"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_2A05EDCE_3775_3245_41C0_54C0BBB0645C",
  "this.overlay_2B98DA22_3775_51FD_41BC_83022112DCEB",
  "this.overlay_2B066F65_3775_4E47_4199_638BFDE90524"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 169.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.75,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "distance": 1
  },
  {
   "yaw": -107.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 65.02,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "distance": 1
  },
  {
   "yaw": 8.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.7,
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_79AE6F2F_3515_4FC3_4198_C266FBF10A92"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 119.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.76,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 47.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8480EA58_9C8A_4CF4_41AA_FDF19050B20B",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_83A8E099_9BFC_4A87_41E2_CDFCFFDADC06",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_6380D661_351D_5E7F_4190_C7AE3141AC4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -146.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.23,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -92.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B7FB9A5_9C8A_4C5C_41CF_4180808E1C86",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 3.84,
  "class": "PanoramaCameraPosition",
  "pitch": -3.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 4.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85A4579A_9C8A_4474_41DE_621F7EC2A83D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
 "overlays": [
  "this.overlay_69083401_351C_F1BF_4198_34BD8C2C19A8",
  "this.overlay_69DBC790_351D_5EDD_41C2_6BABED32AA8E",
  "this.overlay_55B0EDC7_3514_D243_41B2_B4FFA6B5DF17",
  "this.overlay_8A74B1BF_904E_820D_41E1_8509781CB4F5",
  "this.overlay_8B93CA36_904F_861E_41DF_863522CDE600"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -4.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 170.99,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8E9416B5_9B85_D68E_41D3_991FB43C4CE7"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_136C7CD0_371B_525C_4187_1258020ED94C",
  "this.overlay_134C07F6_371D_3E45_4194_88C6593BF512"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -169.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.98,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "distance": 1
  },
  {
   "yaw": 65.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -107.57,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_86909EE4_931E_AB0C_41C0_A53ECB409747.ogg",
  "mp3Url": "media/audio_86909EE4_931E_AB0C_41C0_A53ECB409747.mp3",
  "class": "AudioResource"
 },
 "id": "audio_86909EE4_931E_AB0C_41C0_A53ECB409747",
 "data": {
  "label": "Audio_Lab. Mobile"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
 "overlays": [
  "this.overlay_17A4E951_377F_D25F_4174_95153735D230",
  "this.overlay_292578DB_377F_524C_41C7_F15614128B4E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 144,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.33,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "distance": 1
  },
  {
   "yaw": -59.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -18.06,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_83583D24_930F_A90C_41D5_2A6268C1755F"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 98.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_855EFBA9_9C8A_4C54_41AE_7B11406C98A8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -152.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BF9D8BE_9C8A_4DAC_41D1_15CADE93C4BA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 177.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BFCC8B0_9C8A_4DB4_41C5_C32FBD8F58EA",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_6AF071FC_3575_5245_41B2_7685EE7F11FD"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -171.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_850DB7F0_9C8A_43B4_41DB_F0FF8ACDA674",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera"
  },
  {
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera"
  },
  {
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera"
  },
  {
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera"
  },
  {
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera"
  },
  {
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera"
  },
  {
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera"
  },
  {
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera"
  },
  {
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera"
  },
  {
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera"
  },
  {
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera"
  },
  {
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera"
  },
  {
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera"
  },
  {
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera"
  },
  {
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera"
  },
  {
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera"
  },
  {
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera"
  },
  {
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera"
  },
  {
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera"
  },
  {
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera"
  },
  {
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera"
  },
  {
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera"
  },
  {
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera"
  },
  {
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera"
  },
  {
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera"
  },
  {
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera"
  },
  {
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera"
  },
  {
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera"
  },
  {
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera"
  },
  {
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera"
  },
  {
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera"
  },
  {
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera"
  },
  {
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera"
  },
  {
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera"
  },
  {
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera"
  },
  {
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera"
  },
  {
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera"
  },
  {
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera"
  },
  {
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera"
  },
  {
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera"
  },
  {
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera"
  },
  {
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera"
  },
  {
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera"
  },
  {
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera"
  },
  {
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera"
  },
  {
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera"
  },
  {
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera"
  },
  {
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera"
  },
  {
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera"
  },
  {
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera"
  },
  {
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera"
  },
  {
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera"
  },
  {
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera"
  },
  {
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera"
  },
  {
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera"
  },
  {
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera"
  },
  {
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera"
  },
  {
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera"
  },
  {
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera"
  },
  {
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera"
  },
  {
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 60, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera"
  }
 ],
 "id": "ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87F5A704_9312_B90C_41CD_785D747549D1",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_6C2AF16F_357D_F243_41B6_AEE3142849C2",
  "this.overlay_68845C35_357B_D1C7_41C9_671D285C5462"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_860D2707_931E_F90C_4184_373786F9A661"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 14.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85CEE734_9C8A_44BC_41D0_47D4007F504C",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_875D999F_930E_693C_41DD_9B21C9DEE76A",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 13.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84FBD592_9C8A_4474_41C2_8EB072422102",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -151.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B9A0900_9C8A_4C54_41E0_45C96FD58C16",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 5.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B3019FF_9C8A_4FAC_41CD_B07ABB50B692",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_176CA4CD_3775_3247_41B4_672F32DEE6BA",
  "this.overlay_17443DAC_3775_32C5_41B2_495D1F84E736",
  "this.overlay_14CA04BC_370B_32C5_41C9_C3DF3E294951"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -35.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.48,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "distance": 1
  },
  {
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 82.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.65,
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 52.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85F2376F_9C8A_44AC_41E1_CE60809BA2FB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 109.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84E2E583_9C8A_4454_41E2_3E6128584996",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -97.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_848ECA49_9C8A_4CD4_41CE_866DF80C99E3",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium ",
 "hfovMin": "135%",
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
 "overlays": [
  "this.overlay_1180CE67_370D_4E43_41A6_120D875697DA",
  "this.overlay_118FEDB2_370D_32DD_41A0_51F0DF86A745"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 86.65,
   "class": "AdjacentPanorama",
   "backwardYaw": 74.42,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "distance": 1
  },
  {
   "yaw": 1.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -173.27,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8167DC90_9316_6F04_41E0_EB530F9A179C"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -174.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BE85897_9C8A_4C7C_41DE_EC5550B30F9E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 7.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_840BAAD4_9C8A_4DFC_41DC_F2245EB58B3A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 92.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85137C31_9C8A_44B4_41D1_A8E6ABB7DC79",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 171.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85C45B18_9C8A_4C74_41DD_19A38B81C981",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -23.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84ECD573_9C8A_44B4_41D9_2F12164D6DF5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BD5E87A_9C8A_4CB7_41D7_28991DA36D16",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8688CCE0_9C8A_45D4_41C0_0C8325D8E6FB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -174.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B1909D2_9C8A_4FF4_41B7_53A9D8013F50",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85D67B26_9C8A_4C5C_41DC_15320A8619EE",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_5ED1F5D4_353B_3245_41C4_1F93FD76B34E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -55.84,
   "class": "AdjacentPanorama",
   "backwardYaw": 28.31,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8400EB08_931E_6904_41C4_9252EB6907CE"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 8.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84D79A1A_9C8A_4C74_4199_B3B7F735E10C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -33.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85709BFE_9C8A_43AC_41D4_0297A8A6CEC9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 133.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84143706_9C8A_445F_41C0_6D64FCC9E8E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_852D1F21_931F_A904_41C0_82EC225E5B16.ogg",
  "mp3Url": "media/audio_852D1F21_931F_A904_41C0_82EC225E5B16.mp3",
  "class": "AudioResource"
 },
 "id": "audio_852D1F21_931F_A904_41C0_82EC225E5B16",
 "data": {
  "label": "Audio_Lab.Studio"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera",
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "Gerbang depan",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "jalan depan ruko",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Jembatan",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Menuju bundaran",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Bundaran",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Jalan Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Parkiran audit",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Jalan Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Jalan Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Jalan Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "parkiran elektro1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "parkiran elektro 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Pekarangan audit",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Auditorium Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Auditorium Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Auditorium ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Auditorium Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Auditorium Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Auditorium Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Koridor Gedung Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Koridor Gedung Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Koridor Gedung Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Koridor Gedung Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Koridor Gedung Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "IMG_20240319_092820_00_merged",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "antara gedung administrasi",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Koridor Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Depan GS lt 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "GS koridor 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "GS Lt 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "GS lt 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "Gs Lt 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "Gs ruangan 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "GS_Lt.3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Koridor Lt.3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "label": "Koridor Lt.1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "label": "Koridor depan lab studio",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "label": "Lt.3 GS",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "label": "Lt. 2 Gedung Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "label": "koridor lt 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "label": "Jembatan lt 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "label": "Koridor Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "label": "Koridor lt 2 ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "label": "Koridor Lt. 2 ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "label": "Koridor lt 2 outdoor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "label": "Koridor Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "label": "Lab komdat 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "label": "Lab komdat 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "label": "Lab mobile",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "label": "lab multimed 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "label": "Lab multimed",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "label": "Lab multimedia",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  },
  {
   "label": "Lab pengukuran",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 52)"
  },
  {
   "label": "lab sinematografi",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 53)"
  },
  {
   "label": "Lab Studio 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 54)"
  },
  {
   "label": "Lab studio 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 55)"
  },
  {
   "label": "Jalan GS dan G.Utama",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 56)"
  },
  {
   "label": "Koridor Lt.2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 57)"
  },
  {
   "label": "Ruang dosen",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 58)"
  },
  {
   "label": "ruang gs 1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 59)"
  },
  {
   "label": "ruang gs 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 60)"
  }
 ],
 "label": "Media",
 "id": "Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "initialPosition": {
  "yaw": 120.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B94C90E_9C8A_4C6F_41CA_B05F120AEBFE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -138.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BE2F8A4_9C8A_4C5C_41D1_B8181A2413D5",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_2FF2F575_371B_7247_41C4_84929BB66698",
  "this.overlay_2DB368E7_3714_D243_41C6_63E7B7B2DCF3",
  "this.overlay_87CD858C_90D3_82F2_41CE_1E13F664B21F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -46.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.27,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9C0C4B1D_9376_693C_41BB_5978E9D70547"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 18.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BBA2944_9C8A_4CDC_41D9_6ACEE70FC05E",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_9CB6214B_930D_9904_41DA_F68E2C2C593E.ogg",
  "mp3Url": "media/audio_9CB6214B_930D_9904_41DA_F68E2C2C593E.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9CB6214B_930D_9904_41DA_F68E2C2C593E",
 "data": {
  "label": "Audio_Jalan Utama"
 }
},
{
 "initialPosition": {
  "yaw": 175.16,
  "class": "PanoramaCameraPosition",
  "pitch": -6.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_81FAEBE8_9316_A904_41E1_A109334C933D",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_846D1395_931E_B90C_41DA_2A910045D53E",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_22B5BD15_370B_D3C7_41BE_C35C32034FE1",
  "this.overlay_20441D22_371D_D3FD_41C3_084B070F5054"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -168.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.05,
   "panorama": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "distance": 1
  },
  {
   "yaw": 10.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -8.47,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "distance": 1
  },
  {
   "yaw": -168.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -8.47,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9CB6214B_930D_9904_41DA_F68E2C2C593E"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B07A9C0_9C8A_4FD4_41D5_44509E370687",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -100.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B8CB8D8_9C8A_4DF3_41C4_DBB18CDDDCD8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8F457737_9B84_578A_41A9_A2B527464314",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": -127.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84E82A28_9C8A_4C54_41D0_C2B58AE1AAAB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -12.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86F96CD2_9C8A_45F4_41D6_C10145E01F36",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 175.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84B0262C_9C8A_4453_41CE_5DBF45435743",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -10.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_859AAB66_9C8A_4CDC_41E0_B9B3B5986E0A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -169.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85B627A8_9C8A_4454_419E_A0D5F4004538",
 "class": "PanoramaCamera"
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": -37.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86982CEE_9C8A_45AC_41D0_5227E74F9FBC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85AD7B74_9C8A_4CBC_4163_AB1DAD3A6997",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_803D9B71_9312_A904_41E1_017661EE0AD1.ogg",
  "mp3Url": "media/audio_803D9B71_9312_A904_41E1_017661EE0AD1.mp3",
  "class": "AudioResource"
 },
 "id": "audio_803D9B71_9312_A904_41E1_017661EE0AD1",
 "data": {
  "label": "Audio_Koridor Lt.1_Depan Theater"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
 "overlays": [
  "this.overlay_6D21AF6D_357C_CE47_41A1_798DA2375614",
  "this.overlay_6D7F22E3_357F_3643_41A1_B72F2388CD70",
  "this.overlay_89716E21_9051_BE32_41BB_D4623073FB1E",
  "this.overlay_89A20251_9053_8615_41D1_DE5867CF9F8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.54,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "distance": 1
  },
  {
   "yaw": 178.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -43.21,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 135.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_858B0B59_9C8A_4CF4_41C6_3790B1F34353",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -178.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85E2E763_9C8A_44D5_41DC_B60800A5195A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
 "overlays": [
  "this.overlay_7A5AFDF3_350D_3243_41B6_CCD89B066D49",
  "this.overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 7.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.94,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "distance": 1
  },
  {
   "yaw": -162.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 41.35,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
 "overlays": [
  "this.overlay_2C090C09_370D_D1CC_41BE_1B53E09D7365",
  "this.overlay_2AC9EE6D_370D_CE47_41A6_976CAF339F0E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -175.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.2,
   "panorama": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "distance": 1
  },
  {
   "yaw": -9.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.63,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9C97FA48_930E_AB04_41D6_723615B1214F"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_60323ED1_3514_CE5F_41C8_C80EDB4358BB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 161.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85221C50_9C8A_44F4_41DC_1F9C59AF0D0A",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8ECC8BF3_9B85_FE8A_41B1_F74D8A5B7D6D",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_12BE1C3E_370B_51C5_4142_25DAC8478C42",
  "this.overlay_1438306B_3715_F243_4189_1D91E03073CE",
  "this.overlay_12F0DAF4_3715_3644_41A9_F75183BC250C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -87.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 144,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "distance": 1
  },
  {
   "yaw": 87.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -35.52,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "distance": 1
  },
  {
   "yaw": -0.24,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.76,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_875D999F_930E_693C_41DD_9B21C9DEE76A"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.3",
 "hfovMin": "135%",
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
 "overlays": [
  "this.overlay_516CC219_350C_F1CC_41BD_2F2BDA7ED2EB",
  "this.overlay_5C186EEC_3534_CE44_41C8_3CC5E5C0A208",
  "this.overlay_880B2C83_9072_82F5_41D0_CB15FCCD7534"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 5.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -2.41,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "distance": 1
  },
  {
   "yaw": -148.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 27.01,
   "panorama": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8F457737_9B84_578A_41A9_A2B527464314"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_21F04E8D_371C_CEC7_41AA_C445756BC9DF",
  "this.overlay_2A22452A_370F_53CD_41C4_5605ECE47036"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 167.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.04,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -122.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_849005CC_9C8A_47EC_41E1_E5EE8153DC06",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -89.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_849B65BE_9C8A_47AC_4194_4F54645F03AF",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8.ogg",
  "mp3Url": "media/audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
 "overlays": [
  "this.overlay_0757BE38_3715_31CD_41B9_245892298F75",
  "this.overlay_0138449A_3715_D2CD_41A7_BD44803BD98F",
  "this.overlay_8E77ECBC_905E_8213_41D3_8745B7B4B090"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 80.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.26,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "distance": 1
  },
  {
   "yaw": -66,
   "class": "AdjacentPanorama",
   "backwardYaw": 35.69,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_803D9B71_9312_A904_41E1_017661EE0AD1"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_81A16B0C_9315_A91C_41D1_6540C5032B69",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_876BA82B_9312_7704_41D4_0E81D85BDA33",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
 "overlays": [
  "this.overlay_1E53EFC9_370D_4E4F_41C1_881B7092E117",
  "this.overlay_1F773744_370C_DE45_41BF_BA698C3F2083"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -173.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.34,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "distance": 1
  },
  {
   "yaw": -70.52,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.95,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_81DAD99A_9316_E904_41D2_226049E1F21E"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87442396_9313_990C_41B3_4F8345631F05",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 14.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B7309B4_9C8A_4FB3_41E0_E8752C6C01F3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.41,
  "class": "PanoramaCameraPosition",
  "pitch": -2.75
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -109.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_85034C17_9C8A_447C_41DA_D1CC297C0C22",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -65.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84C26A0C_9C8A_4C6C_41D5_FA98641D3858",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -77.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8465FAB8_9C8A_4DB4_41DD_BF4C342E61BB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_74C49E79_351D_4E4F_41C9_0D6503CCE023",
  "this.overlay_74670D91_351B_72DF_41CA_40179D89BDC1",
  "this.overlay_8AE7FF0D_9071_9FF2_41D1_9266D0EA04D0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 2.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 51,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "distance": 1
  },
  {
   "yaw": 99.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 123.23,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8ECC8BF3_9B85_FE8A_41B1_F74D8A5B7D6D"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan GS dan G.Utama",
 "hfovMin": "135%",
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
 "overlays": [
  "this.overlay_5D874BBD_3534_D6C7_418C_9175197167AB",
  "this.overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -4.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.98,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "distance": 1
  },
  {
   "yaw": -171.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 57.55,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_84E9E279_931E_9B04_41DA_78CC4E8A035E"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_819CF114_9316_790C_41D9_08485B850FD1",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_0DD5943B_350B_51C3_419F_8D34E2ADE565",
  "this.overlay_0B09825E_350B_5645_419A_945DD669209E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 169.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 114.28,
   "panorama": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "distance": 1
  },
  {
   "yaw": 57.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.5,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8754D9A8_9312_A904_41C0_0B11782AC606"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -99.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_846476A6_9C8A_445F_41E1_D00991B99284",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8D29AD37_9B84_3B8A_41E1_85AD82C96666",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 17.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84A6AA73_9C8A_4CB4_41DB_51BB354F2B8C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -48.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84A7B5E8_9C8A_47D3_419F_A6005739AD25",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 91.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_840CA6E2_9C8A_45D4_41BC_43510FE150EE",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_21F89B2A_371F_37CD_419F_DCAB47F86368",
  "this.overlay_21759B50_371F_D642_41C2_5D33642A49E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -8.47,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.4,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "distance": 1
  },
  {
   "yaw": 172.63,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.03,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_9C85497D_930D_A9FC_41D3_07A357607C82"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -60.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8BD9586B_9C8A_4CD4_41C8_068238AB8990",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_86D70314_931E_790C_41D2_C567D1DC7091",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38C881B1_3715_52DC_41C2_E18801508327_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 170.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_854987B6_9C8A_43BC_41E3_357FC0DAB283",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8DB91137_9B84_4B8A_41D3_099469E69272",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "duration": 100,
 "from": "top",
 "id": "effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_9C0C4B1D_9376_693C_41BB_5978E9D70547.ogg",
  "mp3Url": "media/audio_9C0C4B1D_9376_693C_41BB_5978E9D70547.mp3",
  "class": "AudioResource"
 },
 "id": "audio_9C0C4B1D_9376_693C_41BB_5978E9D70547",
 "data": {
  "label": "Audio1"
 }
},
{
 "initialPosition": {
  "yaw": 179.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8453DAAA_9C8A_4C54_41D3_896CEB959515",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 168.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_848ED5A1_9C8A_4454_41D5_8AD15C08DB7C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_79FCFE1A_3514_F1CD_41CA_B8FB659B7385",
  "this.overlay_65868634_3515_51C5_41C3_B458A991A20D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -170.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.27,
   "panorama": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "distance": 1
  },
  {
   "yaw": 51,
   "class": "AdjacentPanorama",
   "backwardYaw": 2.02,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_852D1F21_931F_A904_41C0_82EC225E5B16"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_866A3E81_931D_AB04_41DC_F38E062D24BE",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "initialPosition": {
  "yaw": 172.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84239AFC_9C8A_4DAC_41C0_5A6AC17654D2",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
 "overlays": [
  "this.overlay_1E734084_3715_72C5_41A5_60C7ACAFE2E7",
  "this.overlay_1036BCE3_370B_527C_4168_5C516F60C087",
  "this.overlay_8E68EB0F_904E_860E_4162_A68BB3818B70",
  "this.overlay_89F0CCFC_9052_8212_41D8_90C7F2C5DFB3",
  "this.overlay_8EF4B109_9053_83F2_41DE_D9791BB7B3F8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 74.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.65,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "distance": 1
  },
  {
   "yaw": 171.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 174.42,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": 9.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8534BC69_9C8A_44D4_41A4_D0407A10712E",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_83583D24_930F_A90C_41D5_2A6268C1755F",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
 "overlays": [
  "this.overlay_054A8B65_370C_F647_4180_B49199A0F6A8",
  "this.overlay_037E6CD9_370D_324F_41C3_D77EEFB676EF",
  "this.overlay_03F7805B_370C_D24C_419E_F524B54E1234",
  "this.overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 90.98,
   "class": "AdjacentPanorama",
   "backwardYaw": -4.1,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "distance": 1
  },
  {
   "yaw": -61.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 80.17,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "distance": 1
  },
  {
   "yaw": 146.78,
   "class": "AdjacentPanorama",
   "backwardYaw": 80.34,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "distance": 1
  },
  {
   "yaw": 70.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.47,
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_87442396_9313_990C_41B3_4F8345631F05"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -99.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84511688_9C8A_4454_41DD_EE0ED615BCB0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA.ogg",
  "mp3Url": "media/audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA.mp3",
  "class": "AudioResource"
 },
 "id": "audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA",
 "data": {
  "label": "Audio_Lt.1_2_Audit"
 }
},
{
 "initialPosition": {
  "yaw": 124.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B3F99F1_9C8A_4FB4_41D0_F028192E8304",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046",
 "id": "audio_84E9E279_931E_9B04_41DA_78CC4E8A035E",
 "data": {
  "label": "Audio_Jalan gedung dn GS"
 }
},
{
 "initialPosition": {
  "yaw": -166.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B91A91B_9C8A_4C74_41E0_60AE5EB3B251",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046",
 "id": "audio_8754D9A8_9312_A904_41C0_0B11782AC606",
 "data": {
  "label": "Audio_Jalan gedung dn GS"
 }
},
{
 "initialPosition": {
  "yaw": -177.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8B6B8998_9C8A_4C74_41DB_264E597EDCB2",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_8167DC90_9316_6F04_41E0_EB530F9A179C.ogg",
  "mp3Url": "media/audio_8167DC90_9316_6F04_41E0_EB530F9A179C.mp3",
  "class": "AudioResource"
 },
 "id": "audio_8167DC90_9316_6F04_41E0_EB530F9A179C",
 "data": {
  "label": "Audio_Bagian Auditorium"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_80EFB0C3_9312_F704_41D9_39DD01D4B11E",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "initialPosition": {
  "yaw": 95.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_86AACCFB_9C8A_45B4_41C9_EB66DF16EAB8",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "oggUrl": "media/audio_82FCF32F_9312_B91C_41C3_1523E1482A7D.ogg",
  "mp3Url": "media/audio_82FCF32F_9312_B91C_41C3_1523E1482A7D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_82FCF32F_9312_B91C_41C3_1523E1482A7D",
 "data": {
  "label": "Audio_GS_Bag.Dalam Lt.1"
 }
},
{
 "initialPosition": {
  "yaw": 7.96,
  "class": "PanoramaCameraPosition",
  "pitch": -3.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_38E649D7_3717_D243_41CA_441C811EA963_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 24.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_84957A65_9C8A_4CDC_41CF_3B58C89956AE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -28.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_851D57FF_9C8A_43AD_41CA_C55BA8E83A6F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 45.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_857DC7DE_9C8A_43EC_4191_A3FB6F82D513",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
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
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
 "overlays": [
  "this.overlay_162DF47F_377C_D243_4198_EDE325F614A6",
  "this.overlay_179B1AC5_377B_3647_41C6_0F626498F549"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 13.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.2,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_8307EC55_930F_AF0C_41C5_0E09F9C505E2"
 ],
 "cardboardMenu": "this.Menu_8B14A52D_9C8A_44AC_41CB_FB5AFE709081",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
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
 "minWidth": 100,
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
 "progressBottom": 0,
 "progressHeight": 10,
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
 "toolTipPaddingLeft": 12,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
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
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB",
 "left": "0.24%",
 "width": 145.2,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0.24,
 "scrollBarMargin": 2,
 "class": "ThumbnailList",
 "itemThumbnailShadowVerticalLength": 3,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "itemThumbnailShadowHorizontalLength": 3,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.54,
 "rollOverItemLabelFontWeight": "normal",
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemLabelGap": 9,
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "visible": false,
 "itemThumbnailBorderRadius": 50,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C",
 "left": "0.29%",
 "width": 37.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C_rollover.png",
 "propagateClick": false,
 "top": "1.97%",
 "verticalAlign": "middle",
 "height": 17.6,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C, false, 0, null, null, false); this.setComponentVisibility(this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button37499"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 755,
 "maxWidth": 701,
 "id": "Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0",
 "backgroundOpacity": 0,
 "right": "4.04%",
 "width": "4.412%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "4.49%",
 "height": "8.567%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4813"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 684,
 "maxWidth": 1229,
 "id": "Image_89FA09E6_9967_9773_41D5_535A23169252",
 "backgroundOpacity": 0,
 "right": "8.3%",
 "width": "77.63%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_89FA09E6_9967_9773_41D5_535A23169252.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "14.91%",
 "height": "69.03%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "ImagMaoe10782\\\\MAOP"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_969E2207_992B_94B1_41DA_55CB6A844B14",
 "left": "20.52%",
 "width": 61.6,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14_rollover.png",
 "propagateClick": false,
 "top": "18.09%",
 "verticalAlign": "middle",
 "height": 21.6,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Image_89FA09E6_9967_9773_41D5_535A23169252, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "BtnMinMap"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 304,
 "maxWidth": 348,
 "id": "Image_890D1D6E_9924_8F72_41E2_C91396623840",
 "left": "9.78%",
 "backgroundOpacity": 0,
 "width": "3.925%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_890D1D6E_9924_8F72_41E2_C91396623840.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "6.16%",
 "bottom": "86.46%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Image_89FA09E6_9967_9773_41D5_535A23169252, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "IconMap"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 159,
 "maxWidth": 172,
 "id": "Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D",
 "left": "2.67%",
 "backgroundOpacity": 0,
 "width": "4.474%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "6.19%",
 "bottom": "86.43%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C, true, 0, null, null, false); this.setComponentVisibility(this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "IkonColase"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_8A9CD876_9A67_29BB_41B0_37026D402AB5",
 "left": "0%",
 "children": [
  "this.Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15",
  "this.Container_8A9C4876_9A67_29BB_41D4_31CFBC6BCD23",
  "this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
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
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_8A9CD876_9A67_29BB_41B0_37026D402AB5.png"
},
{
 "horizontalAlign": "center",
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD",
 "backgroundOpacity": 0,
 "right": "8.32%",
 "width": "76.927%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "14.34%",
 "height": "70.796%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Guide1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1",
 "backgroundOpacity": 0,
 "right": "12.32%",
 "width": "69.172%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "13.31%",
 "bottom": "12.53%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Guide2"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "id": "IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C",
 "backgroundOpacity": 0,
 "width": 40,
 "right": "15.04%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C_rollover.png",
 "propagateClick": false,
 "top": "44.83%",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ButtonNext"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78",
 "left": "21.41%",
 "width": 40,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78_rollover.png",
 "propagateClick": false,
 "top": "45.79%",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Buttonprevious"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950",
 "backgroundOpacity": 0,
 "right": "10.62%",
 "width": "71.978%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "13.73%",
 "height": "71.925%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Infoimage3"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5",
 "left": "21.47%",
 "width": 24.8,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5_rollover.png",
 "propagateClick": false,
 "top": "17.6%",
 "verticalAlign": "middle",
 "height": 18.4,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, false, 0, null, null, false); this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, false, 0, null, null, false); this.setComponentVisibility(this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Buttonmin"
 },
 "cursor": "hand"
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_83583D24_930F_A90C_41D5_2A6268C1755F.ogg",
 "mp3Url": "media/audio_83583D24_930F_A90C_41D5_2A6268C1755F.mp3",
 "id": "audioresource_875D799F_930E_693C_41E0_25E68EC837A7"
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_866A3E81_931D_AB04_41DC_F38E062D24BE.ogg",
 "mp3Url": "media/audio_866A3E81_931D_AB04_41DC_F38E062D24BE.mp3",
 "id": "audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.24,
   "yaw": 28.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8, this.camera_8B3F99F1_9C8A_4FB4_41D0_F028192E8304); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "yaw": 28.31
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
   "hfov": 10.45,
   "yaw": -2.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_8B1909D2_9C8A_4FF4_41B7_53A9D8013F50); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
   "pitch": -12.63,
   "hfov": 10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -2.41
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
   "hfov": 10.27,
   "yaw": -166.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130, this.camera_8B2D99E4_9C8A_4FDC_41DF_288D7F8A52BF); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31,
   "yaw": -166.2
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
   "hfov": 10.21,
   "yaw": 117.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_8B3019FF_9C8A_4FAC_41CD_B07ABB50B692); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48,
   "yaw": 117.78
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
   "hfov": 12.46,
   "yaw": 14.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_4_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_4_0.png",
      "width": 211,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28,
   "yaw": 14.4
  }
 ],
 "id": "overlay_88E56D9B_9071_8215_41A5_5681921E2B47",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.11,
   "yaw": -171.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_5_0.png",
      "width": 154,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95,
   "yaw": -171.48
  }
 ],
 "id": "overlay_89FBD3FA_907E_8616_41D8_39B8AC25B233",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": -81.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38C881B1_3715_52DC_41C2_E18801508327, this.camera_8BD9586B_9C8A_4CD4_41C8_068238AB8990); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75,
   "yaw": -81.76
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
   "hfov": 6.22,
   "yaw": 8.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
   "pitch": -28.84,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.43
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
   "hfov": 9.48,
   "yaw": -111.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_8BDC485E_9C8A_4CEC_41E2_C1837B1559EB); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0.png",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41,
   "yaw": -111.62
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
   "hfov": 6.68,
   "yaw": -82.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_3_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_3_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71,
   "yaw": -82.78
  }
 ],
 "id": "overlay_89A7E90C_9052_83F2_41D4_29D0D3A70464",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.41,
   "yaw": -18.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_8B94C90E_9C8A_4C6F_41CA_B05F120AEBFE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
   "pitch": -5.93,
   "hfov": 9.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -18.06
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
   "hfov": 8.25,
   "yaw": 131.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6, this.camera_8B91A91B_9C8A_4C74_41E0_60AE5EB3B251); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
   "pitch": -8.82,
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 131.2
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
   "hfov": 12.31,
   "yaw": 114.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_8BD5E87A_9C8A_4CB7_41D7_28991DA36D16); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
   "pitch": -30.9,
   "hfov": 12.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 114.28
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
   "hfov": 10.29,
   "yaw": -127.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49,
   "yaw": -127.9
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
   "hfov": 10.29,
   "yaw": 11.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_8BEFF887_9C8A_4C5C_41D3_32742367BD7B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "yaw": 11.7
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
   "hfov": 9.28,
   "yaw": 4.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_8B8CB8D8_9C8A_4DF3_41C4_DBB18CDDDCD8); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
   "pitch": -16.37,
   "hfov": 9.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 4.24
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
   "hfov": 12.28,
   "yaw": -172.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_8BF398CB_9C8A_4DD4_41D0_23B67D3DAEA4); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_2_0.png",
      "width": 260,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.13,
   "yaw": -172.61
  }
 ],
 "id": "overlay_8ACBA44C_9071_8272_41DD_1AB8F5F59A1B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": -174.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_8B8758E5_9C8A_4DDD_41D4_0D9D29501DB7); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "yaw": -174.46
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
   "hfov": 10.74,
   "yaw": 8.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_8B8078F3_9C8A_4DB4_41DF_0E93F271BBCE); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_2_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76,
   "yaw": 8.41
  }
 ],
 "id": "overlay_8A0EDB2F_9073_860E_41E0_A6A77C8680B5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.44,
   "yaw": 52.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_86982CEE_9C8A_45AC_41D0_5227E74F9FBC); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
   "pitch": -15.22,
   "hfov": 14.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 52.34
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
   "hfov": 3.93,
   "yaw": -84.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "yaw": -84.7
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
   "hfov": 7.71,
   "yaw": -63.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_86AACCFB_9C8A_45B4_41C9_EB66DF16EAB8); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
   "pitch": -19.31,
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -63.3
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
   "hfov": 10.92,
   "yaw": 80.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_85709BFE_9C8A_43AC_41D4_0297A8A6CEC9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "yaw": 80.34
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
   "hfov": 10.25,
   "yaw": -43.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_85608BE0_9C8A_43D4_41D7_D0B28FAFA0FC); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47,
   "yaw": -43.21
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
   "hfov": 13.84,
   "yaw": -84.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_856E0BC7_9C8A_43DC_41E1_67BCB37FB0F6); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
   "pitch": -20.98,
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -84.84
  }
 ],
 "id": "overlay_7763D3CF_351D_5643_41BA_58C4979660AF",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806.ogg",
 "mp3Url": "media/audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806.mp3",
 "id": "audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.51,
   "yaw": 30.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
   "pitch": -13.46,
   "hfov": 8.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 30.04
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
   "hfov": 11,
   "yaw": 165.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_8B42096E_9C8A_4CAC_41CB_88984A5D55B3); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
   "pitch": -20.37,
   "hfov": 11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 165.78
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
   "hfov": 12.31,
   "yaw": -41.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_8B5DE97D_9C8A_4CAD_41D8_715FD6C80A04); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
   "pitch": -15.13,
   "hfov": 12.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -41.58
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
   "hfov": 9.24,
   "yaw": 174.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_8B4DE961_9C8A_4CD5_41B7_10967290E7CD); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
   "pitch": -20.85,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 174.42
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
   "hfov": 18.53,
   "yaw": -11.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_8BB49953_9C8A_4CF4_41E2_06F03E384E9A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08,
   "yaw": -11.98
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
   "hfov": 12.12,
   "yaw": -82.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_2_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.11,
   "yaw": -82.59
  }
 ],
 "id": "overlay_89E07FE3_9052_9E35_41A2_6E1AAF73DC7B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.94,
   "yaw": 142.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_84E82A28_9C8A_4C54_41D0_C2B58AE1AAAB); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
   "pitch": -19.48,
   "hfov": 12.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 142.87
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
   "hfov": 10.19,
   "yaw": 5.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_84FA3A38_9C8A_4CB4_418F_7BFAAD758038); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15,
   "yaw": 5.94
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
   "hfov": 10.11,
   "yaw": 2.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_844D5A8E_9C8A_4C6C_41C1_D8ED07121902); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "yaw": 2.88
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
   "hfov": 11.05,
   "yaw": 79.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_845F3A9B_9C8A_4C74_41C8_EB90C22F8C68); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
   "pitch": -16.59,
   "hfov": 11.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 79.52
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
   "hfov": 11.93,
   "yaw": 41.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_84A6AA73_9C8A_4CB4_41DB_51BB354F2B8C); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
   "pitch": -12.43,
   "hfov": 11.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 41.35
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
   "hfov": 11.43,
   "yaw": 151.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A, this.camera_8480EA58_9C8A_4CF4_41AA_FDF19050B20B); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 247
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86,
   "yaw": 151.28
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
   "hfov": 5.32,
   "yaw": 169.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2, this.camera_84957A65_9C8A_4CDC_41CF_3B58C89956AE); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "yaw": 169.6
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
   "hfov": 9.32,
   "yaw": -161.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81, this.camera_84B8EA81_9C8A_4C55_418B_69C784879057); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 206
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66,
   "yaw": -161.23
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
   "hfov": 13.66,
   "yaw": 154.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_6_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_6_0.png",
      "width": 231,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.54,
   "yaw": 154.27
  }
 ],
 "id": "overlay_85ED66FE_9057_8E0F_41D7_E7D33126C212",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.46,
   "yaw": 171.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_7_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.43,
   "yaw": 171.57
  }
 ],
 "id": "overlay_8A44A27B_9051_8616_41D6_27A916300787",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.85,
   "yaw": -170.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_8_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_8_0.png",
      "width": 217,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.96,
   "yaw": -170.78
  }
 ],
 "id": "overlay_8A3D5170_9053_8213_41B2_BCF635EBFA08",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_9_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_9_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21,
   "yaw": 1.79
  }
 ],
 "id": "overlay_8A4D84BC_9051_8212_41D4_A05500D17632",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.13,
   "yaw": -44.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_84ECD573_9C8A_44B4_41D9_2F12164D6DF5); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 364
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2,
   "yaw": -44.73
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
   "hfov": 5.11,
   "yaw": -127.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_84E2E583_9C8A_4454_41E2_3E6128584996); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97,
   "yaw": -127.95
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
   "hfov": 7.74,
   "yaw": -125.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_2_0.png",
      "width": 131,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.89,
   "yaw": -125.01
  }
 ],
 "id": "overlay_8EBFBB8F_904F_860E_41D0_5034CA7C2CF4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 102.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_857DC7DE_9C8A_43EC_4191_A3FB6F82D513); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "yaw": 102.83
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
   "hfov": 6.22,
   "yaw": 140.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_850DB7F0_9C8A_43B4_41DB_F0FF8ACDA674); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_2_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66,
   "yaw": 140.49
  }
 ],
 "id": "overlay_88448013_907E_8215_41D2_C5E16AF14A66",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.76,
   "yaw": -7.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_85F92B46_9C8A_4CDC_41C8_527F8EB0A5E3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
   "pitch": -8.1,
   "hfov": 15.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -7.05
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
   "hfov": 19.29,
   "yaw": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_1_0.png",
      "width": 326,
      "class": "ImageResourceLevel",
      "height": 927
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44,
   "yaw": 15.39
  }
 ],
 "id": "overlay_74EE5467_7A41_D6E0_41DE_676224AAAB48",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.65,
   "yaw": 2.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
   "pitch": -5.95,
   "hfov": 13.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.35
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
   "hfov": 20,
   "yaw": -165.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_848ECA49_9C8A_4CD4_41CE_866DF80C99E3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
   "pitch": -12.13,
   "hfov": 20,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -165.65
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
   "hfov": 12.13,
   "yaw": -33.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_85CEE734_9C8A_44BC_41D0_47D4007F504C); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0.png",
      "width": 206,
      "class": "ImageResourceLevel",
      "height": 261
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "yaw": -33.12
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
   "hfov": 16.28,
   "yaw": 2.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_8BA83928_9C8A_4C53_41C0_42D783816E07); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
   "pitch": -13.54,
   "hfov": 16.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 2.16
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
   "hfov": 11.85,
   "yaw": -174.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 325
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79,
   "yaw": -174.11
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
   "hfov": 16.84,
   "yaw": 106.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_8BA21937_9C8A_4CBD_41E1_B9EC96684580); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
   "pitch": -35.12,
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 106.76
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
   "hfov": 14.12,
   "yaw": -96.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_842B0713_9C8A_4474_41D3_D9AEAF7D86ED); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
   "pitch": -11.65,
   "hfov": 14.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -96.95
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
   "hfov": 12.63,
   "yaw": 35.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_843C5726_9C8A_445C_41E2_9919772F7485); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
   "pitch": -13.16,
   "hfov": 12.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 35.69
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
   "hfov": 8.87,
   "yaw": -88.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1, this.camera_84BAC608_9C8A_4454_41AE_3452F36F4659); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86,
   "yaw": -88.54
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
   "hfov": 13.88,
   "yaw": 170.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080, this.camera_84B0262C_9C8A_4453_41CE_5DBF45435743); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
   "pitch": -23.79,
   "hfov": 13.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 170.99
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
   "hfov": 10.24,
   "yaw": -165.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E, this.camera_8447C64A_9C8A_44D4_41D2_E4EDE5D7AAB5); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "yaw": -165.59
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
   "hfov": 8.62,
   "yaw": -170.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_3_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_3_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.7,
   "yaw": -170.63
  }
 ],
 "id": "overlay_88ED381A_9073_8216_41E1_2CA3A3A1935E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": -68.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_85034C17_9C8A_447C_41DA_D1CC297C0C22); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
   "pitch": -13.02,
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -68.47
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
   "hfov": 13.51,
   "yaw": 41.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
   "pitch": -16.25,
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 41.94
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
   "hfov": 7.88,
   "yaw": -84.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "yaw": -84.05
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
   "hfov": 30.59,
   "yaw": -7.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_3_0.png",
      "width": 517,
      "class": "ImageResourceLevel",
      "height": 282
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69,
   "yaw": -7.56
  }
 ],
 "id": "overlay_89C91317_9056_861E_41E0_8AB236CFF7F5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.74,
   "yaw": -6.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_4_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_4_0.png",
      "width": 401,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33,
   "hfov": 23.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -6.87
  }
 ],
 "id": "overlay_898AB4F4_9056_8212_41B3_FA40CE5C6F57",
 "data": {
  "label": "Papan Informasi"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": 27.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_5_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.95,
   "yaw": 27.7
  }
 ],
 "id": "overlay_888CE9FA_9B8F_DA7A_41B3_A5A890067F53",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 27.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_86E68CB8_9C8A_45B4_41C2_BD669F69A0E8); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "yaw": 27.01
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
   "hfov": 14.26,
   "yaw": -134.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_8465FAB8_9C8A_4DB4_41DD_BF4C342E61BB); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
   "pitch": -20.66,
   "hfov": 14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -134.14
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
   "hfov": 10.93,
   "yaw": 81.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_8453DAAA_9C8A_4C54_41D3_896CEB959515); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
   "pitch": -13.73,
   "hfov": 10.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 81.54
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
   "hfov": 21.22,
   "yaw": -88.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_859AAB66_9C8A_4CDC_41E0_B9B3B5986E0A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
   "pitch": -17.97,
   "hfov": 21.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -88.75
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
   "hfov": 16.32,
   "yaw": 156.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_858B0B59_9C8A_4CF4_41C6_3790B1F34353); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35,
   "yaw": 156.32
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
   "hfov": 6.14,
   "yaw": -50.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_840BAAD4_9C8A_4DFC_41DC_F2245EB58B3A); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0.png",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79,
   "yaw": -50.41
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
   "hfov": 8.14,
   "yaw": 123.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_84799AC6_9C8A_4DDC_4193_C7305FAE9E29); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
   "pitch": -20.21,
   "hfov": 8.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 123.23
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
   "hfov": 10.28,
   "yaw": -150.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_84FBD592_9C8A_4474_41C2_8EB072422102); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73,
   "yaw": -150.97
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
   "hfov": 20.12,
   "yaw": -152.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_8534BC69_9C8A_44D4_41A4_D0407A10712E); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
   "pitch": -12.34,
   "hfov": 20.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -152.27
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
   "hfov": 10.84,
   "yaw": -155.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_86D77CA0_9C8A_4454_41E0_4A53F192BBD7); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "yaw": -155.15
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
   "hfov": 10.16,
   "yaw": -132.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_851D57FF_9C8A_43AD_41CA_C55BA8E83A6F); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "yaw": -132.77
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
   "hfov": 15.83,
   "yaw": 8.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E53807_3717_51C3_41C3_684D314D142D, this.camera_84143706_9C8A_445F_41C0_6D64FCC9E8E6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
   "pitch": -6.09,
   "hfov": 15.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 8.27
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
   "hfov": 15.22,
   "yaw": 169.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_840CA6E2_9C8A_45D4_41BC_43510FE150EE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
   "pitch": -17.07,
   "hfov": 15.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 169.91
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
   "hfov": 12.42,
   "yaw": -107.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_840396F8_9C8A_45B4_419A_00E066A922D6); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
   "pitch": -7.46,
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -107.57
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
   "hfov": 10.04,
   "yaw": 119.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_855EFBA9_9C8A_4C54_41AE_7B11406C98A8); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "yaw": 119.87
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
   "hfov": 11.11,
   "yaw": -146.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_8BBA2944_9C8A_4CDC_41D9_6ACEE70FC05E); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0.png",
      "width": 192,
      "class": "ImageResourceLevel",
      "height": 220
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "yaw": -146.44
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
   "hfov": 7.31,
   "yaw": -17.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0.png",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "yaw": -17.04
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
   "hfov": 5.5,
   "yaw": 166.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.76,
   "yaw": 166.76
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
   "hfov": 11.03,
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_86C4CC83_9C8A_4454_41BA_F8C26212BFA9); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
   "pitch": -12.74,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -4.19
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
   "hfov": 8.54,
   "yaw": -14.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_3_0_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_3_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.93,
   "yaw": -14.36
  }
 ],
 "id": "overlay_8A74B1BF_904E_820D_41E1_8509781CB4F5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.86,
   "yaw": 169.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_4_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.54,
   "yaw": 169.13
  }
 ],
 "id": "overlay_8B93CA36_904F_861E_41DF_863522CDE600",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.51,
   "yaw": 65.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_848465B0_9C8A_47B4_41DE_B6801512076F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
   "pitch": -12.71,
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 65.02
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
   "hfov": 13.58,
   "yaw": -169.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_848ED5A1_9C8A_4454_41D5_8AD15C08DB7C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0.png",
      "width": 229,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87,
   "yaw": -169.64
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
   "hfov": 20.36,
   "yaw": 144,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_85137C31_9C8A_44B4_41D1_A8E6ABB7DC79); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
   "pitch": -24.14,
   "hfov": 20.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 144
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
   "hfov": 18.92,
   "yaw": -59.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_85221C50_9C8A_44F4_41DC_1F9C59AF0D0A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
   "pitch": -8.29,
   "hfov": 18.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -59.87
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
   "hfov": 9.79,
   "yaw": 116.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "yaw": 116.4
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
   "hfov": 8.55,
   "yaw": -78.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0.png",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69,
   "yaw": -78.8
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
   "hfov": 10.84,
   "yaw": -18.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
   "pitch": -8.69,
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -18.23
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
   "hfov": 9.28,
   "yaw": 82.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1, this.camera_8B7309B4_9C8A_4FB3_41E0_E8752C6C01F3); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
   "pitch": -5.68,
   "hfov": 9.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 82.03
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
   "hfov": 12.7,
   "yaw": -35.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_8B7FB9A5_9C8A_4C5C_41CF_4180808E1C86); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876E5AAB_9312_6B04_41D4_10E9C0F12899",
   "pitch": -7.43,
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -35.52
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
   "hfov": 22.04,
   "yaw": 18.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
   "pitch": -19.2,
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 18.5
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
   "hfov": 18.36,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_856BD7D1_9C8A_43F4_41CD_B3432C9911DB); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
   "pitch": 3.65,
   "hfov": 18.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.34
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
   "hfov": 12.74,
   "yaw": 86.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_855867C4_9C8A_43D3_41E3_39B8DED57A3C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35,
   "yaw": 86.65
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
   "hfov": 10.29,
   "yaw": -55.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_8B9A0900_9C8A_4C54_41E0_45C96FD58C16); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "yaw": -55.84
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
   "hfov": 15.5,
   "yaw": 49.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
   "pitch": -9.59,
   "hfov": 15.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 49.62
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
   "hfov": 12.44,
   "yaw": -46.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_8B07A9C0_9C8A_4FD4_41D5_44509E370687); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
   "pitch": -6.86,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -46.7
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
   "hfov": 19.79,
   "yaw": 3.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_4_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 552
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21,
   "yaw": 3.35
  }
 ],
 "id": "overlay_87CD858C_90D3_82F2_41CE_1E13F664B21F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.43,
   "yaw": 10.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_84356B0A_9C8A_4C54_41C1_E818CA25797C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
   "pitch": -9.59,
   "hfov": 15.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 10.4
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
   "hfov": 15.51,
   "yaw": -168.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_85C45B18_9C8A_4C74_41DD_19A38B81C981); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
   "pitch": -7.53,
   "hfov": 15.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -168.06
  }
 ],
 "id": "overlay_20441D22_371D_D3FD_41C3_084B070F5054",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "horizontalAlign": "center",
 "maxWidth": 55,
 "id": "IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0",
 "backgroundOpacity": 0,
 "maxHeight": 54,
 "right": "0.83%",
 "width": 45.4,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "3.39%",
 "height": 39.05,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0.png",
 "data": {
  "name": "IconButton12826"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 178.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_8594378C_9C8A_446C_41E0_F32F70C2DE3F); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.64,
   "yaw": 178.31
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
   "hfov": 7.87,
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_8584277D_9C8A_44AD_41E0_E3A727C24791); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71,
   "yaw": -0.61
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
   "hfov": 7.05,
   "yaw": 168.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_2_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_2_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99,
   "yaw": 168.99
  }
 ],
 "id": "overlay_89716E21_9051_BE32_41BB_D4623073FB1E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.9,
   "yaw": 20.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_3_0.png",
      "width": 305,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.27,
   "yaw": 20.74
  }
 ],
 "id": "overlay_89A20251_9053_8615_41D1_DE5867CF9F8D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.1,
   "yaw": -162.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_8BE2F8A4_9C8A_4C5C_41D1_B8181A2413D5); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
   "pitch": -38.56,
   "hfov": 16.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -162.45
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
   "hfov": 8.1,
   "yaw": 7.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_8BE85897_9C8A_4C7C_41DE_EC5550B30F9E); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "yaw": 7.3
  }
 ],
 "id": "overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.86,
   "yaw": -175.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A, this.camera_86F96CD2_9C8A_45F4_41D6_C10145E01F36); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
   "pitch": -13.86,
   "hfov": 12.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -175.04
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
   "hfov": 12.6,
   "yaw": -9.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_8688CCE0_9C8A_45D4_41C0_0C8325D8E6FB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
   "pitch": -3.83,
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -9.03
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
   "hfov": 7.2,
   "yaw": -86.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21,
   "yaw": -86.54
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
   "hfov": 10.9,
   "yaw": 87.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_85BC0B81_9C8A_4C54_41B3_41CC3DB449B3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
   "pitch": -8.8,
   "hfov": 10.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 87.48
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
   "hfov": 13.27,
   "yaw": -0.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_854C7B8E_9C8A_4C6C_41BB_C039AB934EAE); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
   "pitch": -12.13,
   "hfov": 13.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.24
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
   "hfov": 11.03,
   "yaw": -87.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_85AD7B74_9C8A_4CBC_4163_AB1DAD3A6997); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
   "pitch": -8.82,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -87.33
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
   "hfov": 11.29,
   "yaw": -148.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8, this.camera_8BF9D8BE_9C8A_4DAC_41D1_15CADE93C4BA); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "yaw": -148.79
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
   "hfov": 9.86,
   "yaw": 5.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_8BFCC8B0_9C8A_4DB4_41C5_C32FBD8F58EA); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
   "pitch": -13.63,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 5.17
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
   "hfov": 12.69,
   "yaw": -158.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_2_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.65,
   "yaw": -158.53
  }
 ],
 "id": "overlay_880B2C83_9072_82F5_41D0_CB15FCCD7534",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 4.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
   "pitch": -13.85,
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 4.15
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
   "hfov": 12.8,
   "yaw": 167.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_85A4579A_9C8A_4474_41DE_621F7EC2A83D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
   "pitch": -9.4,
   "hfov": 12.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 167.2
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
   "hfov": 9.05,
   "yaw": 80.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_841DFAE1_9C8A_4DD4_41B2_A354C732E33B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
   "pitch": -12.33,
   "hfov": 9.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 80.17
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
   "hfov": 10.7,
   "yaw": -66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_84119AEF_9C8A_4DAC_41DE_39C73241EC23); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
   "pitch": -11.8,
   "hfov": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -66
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
   "hfov": 15.78,
   "yaw": 14.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_1_HS_2_0_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_1_HS_2_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49,
   "yaw": 14.6
  }
 ],
 "id": "overlay_8E77ECBC_905E_8213_41D3_8745B7B4B090",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.92,
   "yaw": -173.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_85E2E763_9C8A_44D5_41DC_B60800A5195A); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
   "pitch": -16.25,
   "hfov": 12.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -173.27
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
   "hfov": 11.67,
   "yaw": -70.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_85F2376F_9C8A_44AC_41E1_CE60809BA2FB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29,
   "yaw": -70.52
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
   "hfov": 13.73,
   "yaw": 99.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_85D03753_9C8A_44F4_41C0_FCECD8DB0CC9); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
   "pitch": -15.91,
   "hfov": 13.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 99.21
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
   "hfov": 10.23,
   "yaw": 2.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_85C0E744_9C8A_44DC_41C2_027A119BC44D); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "yaw": 2.02
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
   "hfov": 14.27,
   "yaw": 1.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_4_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.08,
   "yaw": 1.11
  }
 ],
 "id": "overlay_8AE7FF0D_9071_9FF2_41D1_9266D0EA04D0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.23,
   "yaw": -4.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_849B65BE_9C8A_47AC_4194_4F54645F03AF); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0.png",
      "width": 156,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67,
   "yaw": -4.1
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
   "hfov": 12.82,
   "yaw": -171.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_849005CC_9C8A_47EC_41E1_E5EE8153DC06); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 252
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91,
   "yaw": -171.5
  }
 ],
 "id": "overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.94,
   "yaw": 57.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_84D79A1A_9C8A_4C74_4199_B3B7F735E10C); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
   "pitch": -18.38,
   "hfov": 10.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 57.55
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
   "hfov": 16.02,
   "yaw": 169.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1, this.camera_84C26A0C_9C8A_4C6C_41D5_FA98641D3858); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
   "pitch": -24.76,
   "hfov": 16.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 169.79
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
   "hfov": 10.75,
   "yaw": -8.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_85B627A8_9C8A_4454_419E_A0D5F4004538); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
   "pitch": -4.77,
   "hfov": 10.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -8.47
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
   "hfov": 13.16,
   "yaw": 172.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_854987B6_9C8A_43BC_41E3_357FC0DAB283); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
   "pitch": -7.09,
   "hfov": 13.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 172.63
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
   "hfov": 8.57,
   "yaw": 51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_8B6B8998_9C8A_4C74_41DB_264E597EDCB2); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95,
   "yaw": 51
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
   "hfov": 17.86,
   "yaw": -170.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79, this.camera_8B52398A_9C8A_4C54_41E1_B5EC91264B0E); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
   "pitch": -16.94,
   "hfov": 17.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -170.6
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
   "hfov": 14.43,
   "yaw": 171.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_85E9EB33_9C8A_4CB4_41E0_5E631F405BB7); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
   "pitch": -15.36,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": 171.35
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
   "hfov": 6.85,
   "yaw": 74.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_85D67B26_9C8A_4C5C_41DC_15320A8619EE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "yaw": 74.42
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
   "hfov": 10.83,
   "yaw": 73.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_2_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52,
   "yaw": 73.34
  }
 ],
 "id": "overlay_8E68EB0F_904E_860E_4162_A68BB3818B70",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.25,
   "yaw": 147.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_3_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.66,
   "yaw": 147.76
  }
 ],
 "id": "overlay_89F0CCFC_9052_8212_41D8_90C7F2C5DFB3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.09,
   "yaw": 156.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_4_0.png",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57,
   "yaw": 156.38
  }
 ],
 "id": "overlay_8EF4B109_9053_83F2_41DE_D9791BB7B3F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.34,
   "yaw": 146.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_846476A6_9C8A_445F_41E1_D00991B99284); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96,
   "yaw": 146.78
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
   "hfov": 18.14,
   "yaw": -61.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_84511688_9C8A_4454_41DD_EE0ED615BCB0); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
   "pitch": -18.03,
   "hfov": 18.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "yaw": -61.26
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
   "hfov": 14.21,
   "yaw": 70.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C, this.camera_847866C3_9C8A_45D4_41E1_84B81E2E6661); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
   "pitch": -16.59,
   "hfov": 14.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 70.18
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
   "hfov": 10.28,
   "yaw": 90.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_845D0668_9C8A_44D4_41D4_13D5E9AC0244); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0.png",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "yaw": 90.98
  }
 ],
 "id": "overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B",
 "data": {
  "label": "Image"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_8754D9A8_9312_A904_41C0_0B11782AC606.ogg",
 "mp3Url": "media/audio_8754D9A8_9312_A904_41C0_0B11782AC606.mp3",
 "id": "audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 13.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_84A7B5E8_9C8A_47D3_419F_A6005739AD25); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
   "pitch": -8.22,
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 13.83
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
   "hfov": 13.45,
   "yaw": -173.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
   "pitch": -11.57,
   "hfov": 13.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -173.79
  }
 ],
 "id": "overlay_179B1AC5_377B_3647_41C6_0F626498F549",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_8A9C4876_9A67_29BB_41D4_31CFBC6BCD23",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB",
  "this.Image_8BE32B95_9A63_EF79_41D1_71CDB557780C",
  "this.Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6",
  "this.Image_95A05FFB_9B84_F67A_41BB_B61431672257"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_876E5AAB_9312_6B04_41D4_10E9C0F12899",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "center",
 "maxHeight": 111,
 "maxWidth": 377,
 "id": "Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB",
 "backgroundOpacity": 0,
 "width": "9.239%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "50.588%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image7684"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 110,
 "maxWidth": 411,
 "id": "Image_8BE32B95_9A63_EF79_41D1_71CDB557780C",
 "backgroundOpacity": 0,
 "width": "10.248%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_8BE32B95_9A63_EF79_41D1_71CDB557780C.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "50.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950, true, 0, null, null, false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8153"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 111,
 "maxWidth": 614,
 "id": "Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6",
 "backgroundOpacity": 0,
 "width": "13.516%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "50.588%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://maps.app.goo.gl/UMMJfTwJnoXocsFv5', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8564"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "maxHeight": 110,
 "maxWidth": 341,
 "id": "Image_95A05FFB_9B84_F67A_41BB_B61431672257",
 "backgroundOpacity": 0,
 "width": "10.009%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_95A05FFB_9B84_F67A_41BB_B61431672257.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "53.333%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://forms.gle/Dkm9R4govtZgytCo9', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2599"
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
 "scripts": {
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getKey": function(key){  return window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "existsKey": function(key){  return key in window; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player4626"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false
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
