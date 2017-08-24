var settings = {

	closeSetting: function(){
		katana.closeSubApp();
	},

	emailSettings: {
		generalBody: '',

		init: function () {
			console.log('test auto init of app');
			settings.emailSettings.generalBody = $(this);
		},

		toJSON: function(){
			var body = settings.emailSettings.generalBody;
			var jsonObj = [];
			body.find('.feild-block').each( function(){
				var $elem = $(this);
				var tempObj = {};
				tempObj[ $elem.find('[key="@name"]').attr('key') ] = $elem.find('[key="@name"]').text();
				$elem.find('input').each( function() {
					var sub$elem = $(this);
					tempObj[ sub$elem.attr('key') ] = sub$elem.val();
				});
				jsonObj.push(tempObj);
			});
			return JSON.stringify(jsonObj);
		},

		save: function(){
			katana.templateAPI.post.call( katana.$activeTab.find('.to-save'), null, null, settings.emailSettings.toJSON(), function( data ) {
				console.log('saved', data);
			});
		}
	},

	encrypetion: {
		save: function(){
			katana.templateAPI.post.call( katana.$activeTab.find('.to-save'), null, null, null, function( data ){
				console.log('saved', data);
			} );
		}
	},

	jira: {
		boolHandler: function( $elem ){
			var button = $elem.closest('.feild-block').find('.relative-tool-bar [title="' + $elem.attr('key') + '"]');
			$elem.val() == 'true' && button.addClass('active');
			$elem.closest('.feild').remove();
		},

		default: function(){
			settings.jira.boolHandler( $(this) );
		},

		append_log: function(){
			settings.jira.boolHandler( $(this) );
		},

		issue_type: function(){
			
		},

		addIssueType: function(){

		},

	},
};
