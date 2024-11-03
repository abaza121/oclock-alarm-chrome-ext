function createSoundHtml()
{
    chrome.offscreen.createDocument({
      url: chrome.runtime.getURL('audio.html'),
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'notification',
    });
}

const ALARM_NAME = 'bbcTheme';

// Check if alarm exists to avoid resetting the timer.
// The alarm might be removed when the browser session restarts.
async function createAlarm() {
  const alarm = await chrome.alarms.get(ALARM_NAME);
  if (typeof alarm === 'undefined') {
    const bbcThemeTime = 82630;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    let ms = Date.now();
    let minutes = 60 - ms/minute %60;
    let msRemaining = (minutes * minute) - bbcThemeTime;
    let minutesRemaining = msRemaining / minute;

    chrome.alarms.create(ALARM_NAME, {
      delayInMinutes: minutesRemaining,
      periodInMinutes: 60
    });
  }
}

createAlarm();

chrome.alarms.onAlarm.addListener(createSoundHtml);