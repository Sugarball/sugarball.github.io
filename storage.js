const storage_key = "tailong:luck:key"
function getStorageAward() {
  return +(localStorage.getItem(storage_key) ? localStorage.getItem(storage_key)[0] : 0)
}
function setStorageAward(award = 0) {
  window.dispatchEvent( new Event('storage') )
  return +localStorage.setItem(storage_key, [+award, Math.random()])
}
function watchStorage(cb) {
  console.log('watching...')
  window.removeEventListener('storage', cb, false)
  window.addEventListener('storage', cb, false);
}