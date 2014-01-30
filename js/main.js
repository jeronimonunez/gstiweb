
(function() {

	var PAGE = {
		mainMenuClass : 'main-nav',
		mainMenuClassSelector : '.main-nav',
		homeLinkClass: 'home-link',
		openedMenuClass: 'opened',
		activeClass: 'active',
		activeSectionClass: 'section-active',
		searchTerm: '',

		$mainSearch: $('#mainSearch')
	}

	function init() {

		$('.bxslider').bxSlider({
			minSlides: 4,
		  	maxSlides: 4,
		  	slideWidth: 200,
		  	slideMargin: 10,
		  	pager: false,
		  	auto: true
		});

		initMainMenu();

		$('.search-results').perfectScrollbar();

		$('.result').on('click', function() {
			$('.search-box-search').fadeOut(300);
			$('.search-results').fadeOut(300, function() { $('.search-details').fadeIn(); });
		});

		$('.volver').on('click', function(e) {
			e.preventDefault();
			$('.search-details').fadeOut(300, function() {
				$('.search-box-search').fadeIn(300);
				$('.search-results').fadeIn();
				
			});
		});

		$('#showMenu').on('click', function() {
			PAGE.searchTerm = PAGE.$mainSearch.val();
			$('#search-input-search').val( PAGE.searchTerm );
			$('.search-term').text( PAGE.searchTerm );
		});
	}

	function initMainMenu() {

		var $menu = $( PAGE.mainMenuClassSelector ),
			$links = $menu.children('div').children('a');

		$links.on('click', function(e) {
			e.preventDefault();
			var $link = $(this);
			if($link.hasClass( PAGE.homeLinkClass )) {
				$menu.removeClass( PAGE.openedMenuClass );
			} else {
				$menu.addClass( PAGE.openedMenuClass );
				$link.addClass( PAGE.activeClass );
			}
			$link.siblings().removeClass( PAGE.activeClass );
			var $target = $( $link.attr('href') + "-section" );
			$target.siblings().removeClass( PAGE.activeSectionClass );
			$target.addClass( PAGE.activeSectionClass );
		});
	}

	init();
})();