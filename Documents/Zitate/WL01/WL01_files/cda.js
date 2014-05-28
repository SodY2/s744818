function openSubTab(tab) {
	var formSF = document.getElementById("firstCharacter");
	var links = formSF.getElementsByTagName("a");
	
	for (var i = 0; i < 27; ++i){
		if (i == tab) {
			if (document.getElementById("sub_" + i)) {
				document.getElementById("sub_" + i).style.display = "block";
			}
		} else {
			if (document.getElementById("sub_" + i)) {
				document.getElementById("sub_" + i).style.display = "none";
			}
		}
	}
	for(var i=0;i<links.length;i++){
		links[i].className = "";
		if(links[i].href=="javascript:openSubTab("+tab+");"){
			links[i].className = "active";
		}		
	}

}

function getContent(url){
	$('#wilexAutorenContainer').load(url);
}

lastSelectedContainerId = null;
function navSelect(e) {
	var n = $(e).parent();
    var containerId = n.attr('id').substring(4);
    if (lastSelectedContainerId == null) {
        lastSelectedContainerId = $('#navigation .active')[0].id.substring(4); 
    }
    if (containerId === lastSelectedContainerId) {
        return false;
    }
    var sc = $('#curSelContainer');
    toggleNavMenuEntry($('#nav_' + lastSelectedContainerId));
    toggleNavMenuEntry(n);
    var lsc = $('#' + lastSelectedContainerId);
    sc.children().appendTo(lsc);
    $('#'+containerId).children().appendTo(sc);
    lastSelectedContainerId = containerId;
    return false;
}

function toggleNavMenuEntry(e) {
	if (e.hasClass('active')) {
		e.removeClass('active').addClass('inactive');
	} else {
	    e.removeClass('inactive').addClass('active');
	}
}

function initFlap(headerNodeId, bodyNodeId) {
	if ($('#' + headerNodeId).length == 0) {
		return;
	}
	$('#' + headerNodeId).html($('#' + headerNodeId).html() + '<span style="font-size:80%;cursor:pointer;">(<span style="text-decoration:underline;">einblenden</span>)</span>');
	$('#' + bodyNodeId).hide();
	$('#' + headerNodeId).click(function() { 
		var e = $('#' + bodyNodeId);
		var s = $('#' + headerNodeId + ' > span > span');
		s.css('text-decoration', e.css('display') == 'none' ?  'none' : 'underline');
		s.html(e.css('display') == 'none' ?  'ausblenden' : 'einblenden'); 
	    e.toggle(); 
	});  
}




