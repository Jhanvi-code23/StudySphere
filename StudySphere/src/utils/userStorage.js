export function getCurrentUser() {
  const session = localStorage.getItem("currentSession");

  if (!session) {
    return null;
  }

  return JSON.parse(session);
}


export function getUserId() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return user.email || user.username;
}


export function getUserStorageKey(key) {
  const userId = getUserId();

  if (!userId) {
    return key;
  }

  return `studySphere-${userId}-${key}`;
}


export function getUserData(key, fallback = null) {
  const storageKey = getUserStorageKey(key);
  const savedData = localStorage.getItem(storageKey);

  return savedData
    ? JSON.parse(savedData)
    : fallback;
}


export function setUserData(key, data) {
  const storageKey = getUserStorageKey(key);

  localStorage.setItem(
    storageKey,
    JSON.stringify(data)
  );
}