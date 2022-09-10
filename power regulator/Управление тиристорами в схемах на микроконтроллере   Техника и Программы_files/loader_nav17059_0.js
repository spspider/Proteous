var navMap = {'<void>':['al_index.php',['index.css','index.js']],'<other>':['al_profile.php',['profile.css','page.css','profile.js','page.js']],'public\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'event\\d+($|/)':['al_events.php',['groups.css','page.css','groups.js','page.js']],'club\\d+($|/)':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'publics\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'groups(\\d+)?$':['al_groups.php',['groups.css','groups_list.js','indexer.js']],'events$':['al_events.php',['events.css','page.css','events.js','page.js']],'changemail$':['register.php',['reg.css']],'mail($|/)':['al_mail.php',['mail.css','mail.js']],'write\\d*($|/)':['al_mail.php',['mail.css','mail.js']],'im($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']],'audio-?\\d+_\\d+$':['al_audio.php',['audio.css','audio.js']],'audios(-?\\d+)?$':['al_audio.php',['audio.css','audio.js']],'audio($|/)':['al_audio.php',['audio.css','audio.js']],'apps_check($|/)':['al_apps_check.php',['apps.css','apps.js']],'apps($|/)':['al_apps.php',['apps.css','apps.js']],'editapp($|/)':['al_apps_edit.php',['apps.css','apps.js']],'regstep\\d$':['register.php',['reg.js','reg.css','ui_controls.js','ui_controls.css','selects.js']],'video(-?\\d+_\\d+)?$':['al_video.php',['video.js','video.css','videoview.js','videoview.css','indexer.js']],'videos(-?\\d+)?$':['al_video.php',['video.js','video.css','indexer.js']],'feed$':['al_feed.php',['page.css','page.js','feed.css','feed.js']],'friends$':['al_friends.php',['friends.js','friends.css','privacy.css']],'friendsphotos$':['al_photos.php',['friendsphotos.js','photoview.js','friendsphotos.css','photoview.css']],'wall-?\\d+(_\\d+)?$':['al_wall.php',['page.js','page.css','wall.js','wall.css']],'tag\\d+$':['al_photos.php',['photos.js','photoview.js','photos.css','photoview.css']],'albums(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'photos(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'album-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css']],'photo-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css','photoview.js','photoview.css']],'search$':['al_search.php',['search.css','search.js']],'people($|/)':['al_search.php',['search.css','search.js']],'communities$':['al_search.php',['search.css','search.js']],'brands$':['al_search.php',['search.css','search.js']],'invite$':['invite.php',['invite.css','invite.js','ui_controls.css','ui_controls.js']],'join$':['join.php',['join.css','join.js']],'settings$':['al_settings.php',['settings.js','settings.css']],'edit$':['al_profileEdit.php',['profile_edit.js','profile_edit.css']],'blog$':['blog.php',['blog.css']],'fave$':['al_fave.php',['fave.js','fave.css','page.css','wall.css','qsorter.js','indexer.js']],'topic$':['al_board.php',['board.css']],'board\\d+$':['al_board.php',['board.css','board.js']],'topic-?\\d+_\\d+$':['al_board.php',['board.css','board.js']],'stats($|/)':['al_stats.php',['stats.css']],'ru/(.*)?$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'pages($|/)':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'page-?\\d+_\\d+$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'restore($|/)':['al_restore.php',['restore.js','restore.css']],'recover($|/)':['recover.php',['recover.js','recover.css']],'gifts\\d*$':['al_gifts.php',['gifts.js','gifts.css']],'docs($|/)':['docs.php',['docs.css','docs.js','indexer.js']],'doc-?\\d+_\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'docs-?\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'login($|/)':['al_login.php',['login.css']],'tasks($|/)':['tasks.php',['tasks.css','tasks.js']],'abuse($|/)':['abuse.php',['abuse.css','abuse.js']],'abuse2($|/)':['abuse2.php',[]],'restore2($|/)':['restore2.php',[]],'support($|/)':['al_tickets.php',['tickets.css','tickets.js']],'helpdesk($|/)':['al_helpdesk.php',['tickets.css','tickets.js']],'offersdesk($|/)':['offers.php',['offers.css','offers.js']],'payments($|/)':['al_payments.php',['payments.css']],'faq($|/)':['al_faq.php',['faq.css','faq.js']],'tlmd($|/)':['al_talmud.php',['faq.js','faq.css','tickets.css','tickets.js']],'sms_office($|/)':['sms_office.php',['sms_office.css','sms_office.js']],'dev($|/)':['dev.php',['dev.css','dev.js']],'developers($|/)':['al_developers.php',['developers.css']],'help($|/)':['al_help.php',['help.css','help.js']],'claims($|/)':['al_claims.php',['claims.css','claims.js']],'video_embed($|/)':['al_video_embed.php',['video_embed.css','video_embed.js']],'ads$':['ads.php',['ads.css','ads.js']],'adbonus$':['ads.php',['ads.css','ads.js']],'adsbonus$':['ads.php',['ads.css','ads.js']],'adregister$':['ads.php',['ads.css','ads.js']],'adsedit$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adscreate$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adsmoder$':['ads_moder.php',['ads.css','ads.js','ads_moder.css','ads_moder.js']],'adsweb$':['ads_web.php',['ads.css','ads.js','ads_web.css','ads_web.js']],'exchange$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'exchangemoder$':['ads_posts_moder.php',['ads.css','ads.js','exchange_moder.css','exchange_moder.js']],'offers$':['ads_offers.php',['ads.css','ads.js','ads_offers.css','ads_offers.js']],'offersmoder$':['ads_offers_moder.php',['ads.css','ads.js','ads_offers_moder.css','ads_offers_moder.js']],'test$':['al_help.php',['help.css','help.js']],'agenttest$':['al_help.php',['help.css','help.js']],'grouptest$':['al_help.php',['help.css','help.js']],'dmca$':['al_tickets.php',['tickets.css','tickets.js']],'terms$':['al_help.php',['help.css','help.js']],'privacy$':['al_help.php',['help.css','help.js']],'licence$':['al_help.php',['help.css','help.js']],'editdb$':['editdb.php',['editdb.css','editdb.js']],'note\\d+_\\d+$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'notes(\\d+)?$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'bugs($|/)':['bugs.php',['bugs.css','bugs.js']],'wkview.php($)':['wkview.php',['wkview.js','wkview.css','wk.js','wk.css']],'stickers_office($|/)':['stickers_office.php',['stickers_office.css','stickers_office.js']],'charts($|/)':['al_audio.php',['audio.css','audio.js']],'maps($|/)':['maps.php',[]],'jobs$':['al_jobs.php',['jobs.css','jobs.js']],'ui$':['ui.php',[]],'translation$':['al_translation.php',[]],'mobile$':['al_login.php',[]],'stickers($|/)':['al_im.php',['im.js','im.css','emoji.js','notifier.css']]}; var stVersions = { 'nav': 17059, 'common.js': 1116, 'common.css': 493, 'pads.js': 76, 'pads.css': 80, 'retina.css': 329, 'uncommon.js': 11, 'uncommon.css': 90, 'filebutton.css': 9, 'filebutton.js': 9, 'lite.js': 90, 'lite.css': 37, 'ie6.css': 26, 'ie7.css': 18, 'rtl.css': 178, 'pagination.js': 18, 'blog.css': 7, 'html5audio.js': 5, 'html5video.js': 38, 'html5video.css': 16, 'audioplayer.js': 143, 'audioplayer.css': 17, 'audio_html5.js': 7, 'audio.js': 244, 'audio.css': 130, 'gifts.css': 50, 'gifts.js': 42, 'indexer.js': 19, 'graph.js': 40, 'graph.css': 2, 'boxes.css': 22, 'box.js': 5, 'rate.css': 4, 'tooltips.js': 74, 'tooltips.css': 88, 'sorter.js': 21, 'qsorter.js': 29, 'usorter.js': 2, 'phototag.js': 9, 'phototag.css': 3, 'photoview.js': 388, 'photoview.css': 191, 'fullscreen_pv.js': 2, 'fullscreen_pv.css': 2, 'friendsphotos.js': 13, 'friendsphotos.css': 17, 'friends.js': 206, 'friends.css': 149, 'friends_search.js': 19, 'friends_search.css': 8, 'board.js': 75, 'board.css': 52, 'photos.css': 87, 'photos.js': 82, 'photos_add.css': 17, 'photos_add.js': 42, 'wkpoll.js': 14, 'wkview.js': 130, 'wkview.css': 113, 'single_pv.css': 9, 'single_pv.js': 4, 'video.js': 162, 'video.css': 140, 'videoview.js': 243, 'videoview.css': 144, 'video_edit.js': 18, 'video_edit.css': 25, 'video_upload.js': 19, 'translation.js': 26, 'translation.css': 16, 'reg.css': 26, 'reg.js': 56, 'invite.css': 17, 'invite.js': 13, 'prereg.js': 14, 'index.css': 27, 'index.js': 32, 'join.css': 70, 'join.js': 95, 'intro.css': 21, 'owner_photo.js': 24, 'owner_photo.css': 12, 'page.js': 868, 'page.css': 725, 'about.css': 1, 'page_fixed.css': 24, 'page_help.css': 18, 'public.css': 68, 'public.js': 44, 'events.css': 33, 'events.js': 38, 'pages.css': 52, 'pages.js': 40, 'groups.css': 108, 'groups.js': 35, 'groups_list.js': 58, 'groups_edit.css': 59, 'groups_edit.js': 78, 'profile.css': 223, 'profile.js': 216, 'calendar.css': 7, 'calendar.js': 16, 'wk.css': 38, 'wk.js': 14, 'pay.css': 3, 'pay.js': 6, 'tagger.js': 15, 'tagger.css': 13, 'qsearch.js': 11, 'wall.css': 74, 'wall.js': 78, 'walledit.js': 58, 'thumbs_edit.css': 7, 'thumbs_edit.js': 25, 'mail.css': 81, 'mail.js': 93, 'email.css': 2, 'im.css': 327, 'im.js': 350, 'emoji.js': 123, 'wide_dd.css': 13, 'wide_dd.js': 28, 'writebox.css': 12, 'writebox.js': 46, 'sharebox.js': 20, 'fansbox.js': 29, 'postbox.css': 6, 'postbox.js': 6, 'feed.js': 375, 'feed.css': 223, 'privacy.js': 97, 'privacy.css': 52, 'apps.css': 184, 'apps.js': 266, 'apps_edit.js': 105, 'apps_edit.css': 111, 'apps_check.js': 22, 'apps_check.css': 23, 'settings.js': 104, 'settings.css': 88, 'profile_edit.js': 84, 'profile_edit.css': 37, 'profile_edit_edu.js': 8, 'profile_edit_job.js': 7, 'profile_edit_mil.js': 2, 'search.js': 112, 'search.css': 86, 'datepicker.js': 26, 'datepicker.css': 10, 'oauth_popup.css': 28, 'oauth_page.css': 13, 'oauth_touch.css': 3, 'notes.css': 18, 'notes.js': 30, 'wysiwyg.js': 46, 'wysiwyg.css': 34, 'wiki.css': 10, 'fave.js': 48, 'fave.css': 50, 'widget_comments.css': 88, 'widget_auth.css': 4, 'widget_community.css': 62, 'widget_post.css': 3, 'api/widgets/al_comments.js': 122, 'api/widgets/al_auth.js': 5, 'api/widgets/al_poll.js': 8, 'api/widgets/al_community.js': 63, 'api/widgets/al_like.js': 30, 'api/widgets/al_post.js': 11, 'al_poll.css': 3, 'widget_recommended.css': 3, 'widgets.css': 20, 'common_light.js': 2, 'developers.css': 8, 'touch.css': 7, 'notifier.js': 336, 'notifier.css': 138, 'restore.js': 26, 'restore.css': 14, 'recover.js': 1, 'recover.css': 3, 'docs.js': 62, 'docs.css': 68, 'tags_dd.js': 18, 'tags_dd.css': 17, 'tasks.js': 26, 'tasks.css': 32, 'tickets.js': 160, 'tickets.css': 135, 'faq.js': 16, 'faq.css': 19, 'bugs.js': 25, 'bugs.css': 28, 'login.css': 51, 'upload.js': 96, 'graffiti.js': 26, 'graffiti.css': 22, 'abuse.js': 15, 'abuse.css': 19, 'verify.css': 6, 'stats.css': 26, 'payments.css': 46, 'payments.js': 6, 'offers.css': 18, 'offers.js': 23, 'call.js': 78, 'call.css': 15, 'aes_light.css': 47, 'aes_light.js': 63, 'ads.css': 88, 'ads.js': 62, 'ads_payments.js': 4, 'ads_edit.css': 34, 'ads_edit.js': 120, 'ads_moder.css': 54, 'ads_moder.js': 48, 'ads_tagger.js': 2, 'ads_web.css': 11, 'ads_web.js': 26, 'health.css': 11, 'health.js': 5, 'pinbar.js': 6, 'sms_office.css': 17, 'sms_office.js': 12, 'help.css': 18, 'help.js': 11, 'claims.css': 6, 'claims.js': 4, 'video_embed.js': 1, 'video_embed.css': 1, 'site_stats.css': 10, 'site_stats.js': 8, 'meminfo.css': 12, 'blank.css': 4, 'wk_editor.js': 70, 'wk_editor.css': 28, 'btagger.js': 12, 'btagger.css': 11, 'filters.js': 58, 'filters_pe.js': 17, 'pe.js': 23, 'pe.css': 5, 'dev.js': 63, 'dev.css': 89, 'share.css': 6, 'stickers_office.css': 1, 'stickers_office.js': 1, 'mapbox.js': 1, 'mapbox.css': 1, 'jobs.js': 4, 'jobs.css': 7, 'contests.css': 5, 'ui.css': 1, 'ui.js': 2, 'admin.js': 2, 'admin.css': 2, 'exchange.css': 30, 'exchange.js': 23, 'exchange_moder.css': 2, 'exchange_moder.js': 5, 'ads_offers.css': 18, 'ads_offers.js': 25, 'ads_offers_moder.css': 7, 'ads_offers_moder.js': 7, 'ui_controls.js': 178, 'highcharts.js': 1, 'ui_controls.css': 59, 'selects.js': 25, 'mentions.js': 50, 'apps_flash.js': 65, 'maps.js': 25, 'places.js': 42, 'places.css': 36, 'map2.js': 4, 'map.css': 6, 'sort.js': 8, 'paginated_table.js': 50, 'paginated_table.css': 8, 'q_frame.php': 7, '/swf/api_wrapper.swf': 7, '/swf/api_external.swf': 8, '/swf/api_wrapper2_0.swf': 8, '/swf/queue_transport.swf': 10, '/swf/audio_lite.swf': 13, '/swf/uploader_lite.swf': 12, '/swf/photo_uploader_lite.swf': 14, '/swf/CaptureImg.swf': 12, '/swf/video.swf': 49, '/swf/vkvideochat.swf': 49, '/swf/vchatdevices.swf': 1, 'favicon': 3, 'lang': 6595}; var stTypes = {fromLib:{'md5.js':1,'ui_controls.js':1,'highcharts.js':1,'selects.js':1,'sort.js':1,'maps.js':1},fromRoot:{'api/openapi.js':1,'api/share.js':1,'apps_flash.js':1,'mentions.js':1,'map2.js':1,'ui_controls.css':1,'map.css':1,'paginated_table.js':1,'paginated_table.css':1}}; var _rnd = 3682;