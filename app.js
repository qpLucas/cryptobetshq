
// ── RESTRICTED COUNTRIES ──
function getRestrictedHTML() {
  var countries = [
    ['AU','Australia'],['AT','Austria'],['BE','Belgium'],['CN','China'],
    ['CU','Cuba'],['CW','Curaçao'],['FR','France'],['DE','Germany'],
    ['IR','Iran'],['LT','Lithuania'],['MO','Macau'],['MT','Malta'],
    ['MM','Myanmar'],['NL','Netherlands'],['KP','North Korea'],
    ['SG','Singapore'],['ES','Spain'],['SY','Syria'],
    ['UA','Ukraine (territories)'],['GB','United Kingdom'],['US','United States'],
  ];

  var flags = countries.map(function(c) {
    var code = c[0].toLowerCase();
    // Use country-flags.io for clean transparent PNGs
    var src = 'https://flagcdn.com/32x24/' + code + '.png';
    return '<div class="restricted-flag" title="' + c[1] + '">'
      + '<img src="' + src + '" alt="' + c[1] + '" width="32" height="24">'
      + '<span>' + c[1] + '</span>'
      + '</div>';
  }).join('');

  return '<div class="restricted-box">'
    + '<div class="restricted-header">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>'
    + ' Cloudbet is restricted to players from:'
    + '</div>'
    + '<div class="restricted-flags">' + flags + '</div>'
    + '</div>';
}
