export function hasPermission(permission, userPermissions) {
  if (!permission || 0 === permission.length) {
    return true;
  }

  const filteredPermission =
    userPermissions &&
    userPermissions.filter(permissionItem => permissionItem === permission);

  if (Array.isArray(userPermissions) && userPermissions.includes("ADMIN")) {
    return true;
  }

  return filteredPermission && filteredPermission.length > 0;
}

export const LOCAL_STORAGE_KEY = {
  ACCESS_TOKEN: "accessToken",
  TOKEN_KEY: "token_key",
  REFRESH_TOKEN: "refreshToken",
  IS_CONFIRMED_EMAIL: "isEmailConfirmed",
  IS_CONFIRMED_PHONE: "isPhoneConfirmed",
  PERMISSIONS: "permissions",
  USER_INFO: "userInfo",
  DEVICE_ID: "device"
};

export function getValueFromStorageByKey(key) {
  const token = localStorage.getItem(key);
  if (token && token !== `undefined`) {
    const token = localStorage.getItem(key);
    return JSON.parse(token);
  }

  return null;
}

export function setValueToStorageByKey(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeValueToStorageByKey(key) {
  localStorage.removeItem(key);
}

export function clearAll() {
  localStorage.clear();
}

import _isNil from "lodash/isNil";

export function buildQueries(params) {
  let requestString = "";
  Object.keys(params).forEach(key => {
    if (!_isNil(params[key]) && params[key] !== "") {
      requestString += `${key}=${params[key]}&`;
    }
  });
  return requestString.slice(0, -1);
}

export function formatDateString(date, includeTime) {
  if (date) {
    const d = new Date(date);
    if (includeTime) {
      return d.toLocaleDateString("en-GB") + " | " + d.toLocaleTimeString();
    }

    return d.toLocaleDateString("en-GB");
  }

  return "";
}

const EXP_KEY = "exp";

const _getJWTPayload = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  if (!token) return null;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export function getDateExpire() {
  const jwt = _getJWTPayload();
  if (!jwt || !jwt[EXP_KEY]) return null;
  return new Date(jwt[EXP_KEY] * 1000);
}

