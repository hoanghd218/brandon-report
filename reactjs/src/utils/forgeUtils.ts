export const setColorForElement = (
  viewer: Autodesk.Viewing.Viewer3D,
  ids: any,
  isIsolated = false,
  isFitToView = false
) => {
  let color = convertHexColorToVector4('#80ff80');
  ids.forEach((id: any) => {
    viewer.setThemingColor(id, color,viewer.model);
  });

  if (isIsolated) {
    viewer.isolate(ids);
  }

  if (isFitToView) {
    viewer.fitToView(ids);
  }
};

function convertHexColorToVector4(value: any, transparent = 1) {
  const THREE = window.THREE;
  let R = hexToR(value) / 255;
  let G = hexToG(value) / 255;
  let B = hexToB(value) / 255;
  return new THREE.Vector4(R, G, B, transparent);
}

function hexToR(h: any) {
  return parseInt(cutHex(h).substring(0, 2), 16);
}
function hexToG(h: any) {
  return parseInt(cutHex(h).substring(2, 4), 16);
}
function hexToB(h: any) {
  return parseInt(cutHex(h).substring(4, 6), 16);
}

function cutHex(h: any) {
  return h.charAt(0) === '#' ? h.substring(1, 7) : h;
}
