function FindProxyForURL(url, host) {
    // Xenon via local ssh
    if ( 
	shExpMatch(host,"*.xtgnet.lan")||
	shExpMatch(host,"*.xtg.net.au")
       ) {
  	return "SOCKS5 127.0.0.1:3110;SOCKS 127.0.0.1:3110;DIRECT";
    }
    // Everything else directly!
  return "DIRECT";
}
