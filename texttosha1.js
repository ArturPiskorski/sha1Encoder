<html>
  <head>
    <script src="https://thunkable.github.io/webviewer-extension/thunkableWebviewerExtension.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.4.0/sha1.js"></script>
 </head>
 <body>
<script>
  function receivePostData(event) {
    var data = event.data;
    var hashedString = sha1(data);
    ThunkableWebviewerExtension.postMessage(hashedString, "*");
  }

  function sha1(message) {
    var shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.update(message);
    return shaObj.getHash("HEX");
  }
  window.addEventListener("message", receivePostData);
</script>
 </body>
</html>
