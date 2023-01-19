export const getForgeToken = (callback: any) => {
  // get forge token
  fetch('/api/forge/public-forge-token').then((res) => {
    res.json().then((data) => {
      callback(data.access_token, data.expires_in);
    });
  });
};

export const getLeafNodes = (model: any, dbIds: any) => {
  return new Promise((resolve, reject) => {
    try {
      const instanceTree =
        model.getData().instanceTree || model.getFragmentMap();

      dbIds = dbIds || instanceTree.getRootId();

      const dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];

      const leafIds = new Array<any>();

      const getLeafNodeIdsRec = (id: any) => {
        let childCount = 0;

        instanceTree.enumNodeChildren(id, (childId: any) => {
          getLeafNodeIdsRec(childId);
          ++childCount;
        });

        if (childCount === 0) {
          leafIds.push(id);
        }
      };

      dbIdArray.forEach((dbId) => {
        getLeafNodeIdsRec(dbId);
      });

      return resolve(leafIds);
    } catch (ex) {
      return reject(ex);
    }
  });
};

export const getAllElementsInView = (viewer3D: any) => {
  const instanceTree = viewer3D.model.getData().instanceTree;
  //console.log(instanceTree);
  const rootId = instanceTree.getRootId();
  let alldbId = new Array<any>();
  if (!rootId) {
    return [{ model: viewer3D.model, selection: alldbId }];
  }
  let queue = [];
  queue.push(rootId);
  while (queue.length > 0) {
    var node = queue.shift();
    if (node !== rootId) alldbId = [...alldbId, node];
    instanceTree.enumNodeChildren(node, function (childrenIds: any) {
      queue.push(childrenIds);
    });
  }

  const allElements = [{ model: viewer3D.model, selection: alldbId }];
  return allElements;
};

export function getAllElementdbIdsOneModel(viewer: any) {
  try {
    var instanceTree = viewer.impl.model.getData().instanceTree;
    var temp = new Array<any>();
    if (!instanceTree) {
      return temp;
    }
    var queue = [];
    queue.push(instanceTree.getRootId());
    while (queue.length > 0) {
      var node = queue.shift();
      if (instanceTree.getChildCount(node) !== 0) {
        //temp.push(node);
        instanceTree.enumNodeChildren(node, function (childrenIds: any) {
          queue.push(childrenIds);
        });
      } else {
        temp.push(node);
      }
    }

    return temp;
  } catch {
    return new Array<any>();
  }
}

export function sortChildrenCount(a: any, b: any) {
  if (a.children.length < b.children.length) {
    return 1;
  }
  if (a.children.length > b.children.length) {
    return -1;
  }
  return 0;
}
