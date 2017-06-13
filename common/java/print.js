if (( /print-pdf/gi ).test( window.location.search )) {
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../common/css/print/pdf.css';
    link.media = 'all';
    head.appendChild(link);
}