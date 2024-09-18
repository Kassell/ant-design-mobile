import { canUseDom } from './can-use-dom'

export let supportsPassive = false;

if (canUseDom) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    const handleTestEvent = () => { };
    window.addEventListener('test-passive', handleTestEvent, opts);
    window.dispatchEvent(new Event('test-passive'));
    window.removeEventListener('test-passive', handleTestEvent);
  } catch (e) {
    console.error('Error checking passive event support:', e);
  }
}
