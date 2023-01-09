console.log("loaded");

// online offline detection
// request small image at  interval to check status

const checkOnlineStatus = async () => {
  try {
    const online = await fetch(
      "http://10.0.0.69:8989/Content/Images/Icons/favicon-32x32.png?h=s64FHSxrh1sgZCiBBIVikQ"
    );
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false;
  }
};

setInterval(async () => {
  const results = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = results ? "ONLINE" : "OFFLINE";
}, 3000);
