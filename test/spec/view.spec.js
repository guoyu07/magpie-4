describe('Render', function() {
  it('One news item', function() {
    item = {
      "url" : "http://www.computerworld.com/s/article/print/9248070/SanDisk_announces_4TB_SSD_hopes_for_8TB_next_year",
      "src" : " (computerworld.com) ",
      "title" : "SanDisk announces 4TB SSD, hopes for 8TB next year."
    };
    $itemHTML =  $([
      '<a class="list-group-item" href="http://www.computerworld.com/s/article/print/9248070/SanDisk_announces_4TB_SSD_hopes_for_8TB_next_year">',
      '  <h4 class="list-group-item-heading">SanDisk announces 4TB SSD, hopes for 8TB next year.</h4>',
      '  <p class="list-group-item-text"> (computerworld.com) </p>',
      '</a>'
    ].join( '' ));

    var $newsItem = MNA.View.getNewsItem( item );

    expect( $newsItem ).toEqual('a');
    expect( $newsItem.html() ).toHaveClass( 'list-group-item-heading' );
    //expect( $newsItem.html().normalizeSpace() ).toContainHtml( $itemHTML.html().normalizeSpace() );
    expect( $newsItem ).toHaveAttr( 'href', item.url );
    expect( $newsItem.find('h4') ).toHaveText( item.title );
    expect( $newsItem.find('p') ).toEqual('p.list-group-item-text');
    expect( $newsItem.find('p') ).toContainText( /computerworld/ );
  });
  it('A group of items', function() {
    var group = [{
      "url" : "http://www.computerworld.com/s/article/print/9248070/SanDisk_announces_4TB_SSD_hopes_for_8TB_next_year",
      "src" : " (computerworld.com) ",
      "title" : "SanDisk announces 4TB SSD, hopes for 8TB next year."
    }, {
      "url" : "http://www.reuters.com/article/2014/05/03/us-microsoft-gates-idUSBREA410YS20140503",
      "src" : " (reuters.com) ",
      "title" : "Bill Gates on track to own no Microsoft stock in four years"
    }, {
      "url" : "http://www.slate.com/articles/technology/future_tense/2014/05/fcc_chairman_tom_wheeler_s_lame_excuses_for_his_net_neutrality_proposal.html",
      "src" : " (slate.com) ",
      "title" : "FCC Chairman Tom Wheeler’s lame excuses for his net neutrality proposal."
    }];
    var groupHTML = $([
      '<div class="list-group">',
      '<a href="http://www.computerworld.com/s/article/print/9248070/SanDisk_announces_4TB_SSD_hopes_for_8TB_next_year" class="list-group-item">',
      '  <h4 class="list-group-item-heading">SanDisk announces 4TB SSD, hopes for 8TB next year.</h4>',
      '  <p class="list-group-item-text"> (computerworld.com) </p>',
      '</a>',
      '<a href="http://www.reuters.com/article/2014/05/03/us-microsoft-gates-idUSBREA410YS20140503" class="list-group-item">',
      '  <h4 class="list-group-item-heading">Bill Gates on track to own no Microsoft stock in four years</h4>',
      '  <p class="list-group-item-text"> (reuters.com) </p>',
      '</a>',
      '<a href="http://www.slate.com/articles/technology/future_tense/2014/05/fcc_chairman_tom_wheeler_s_lame_excuses_for_his_net_neutrality_proposal.html" class="list-group-item">',
      '  <h4 class="list-group-item-heading">FCC Chairman Tom Wheeler’s lame excuses for his net neutrality proposal.</h4>',
      '  <p class="list-group-item-text"> (slate.com) </p>',
      '</a>',
      '</div>'
    ].join( '' ));

    var groupOfItems = MNA.View.getNewsList( group );
    expect( groupOfItems ).toEqual( 'div.list-group' );
    expect( groupOfItems ).not.toBeEmpty();
    expect( groupOfItems.find('a') ).toHaveLength( 3 );
  });
});
