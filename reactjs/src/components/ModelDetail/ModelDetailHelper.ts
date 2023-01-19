import _ from 'lodash';
import { BimElementResponse } from '../../types/Dtos/BimElementResponse';
import { setColorForElement } from '../../utils/forgeUtils';
import { useForgeStore } from '../../store/forgeStore';

export default class ModelDetailHelper {
  static viewer3d: Autodesk.Viewing.Viewer3D;
  static viewer2d: Autodesk.Viewing.Viewer3D;

  static calculateBimModelScore(eles: BimElementResponse[]) {
    let total = eles.length;

    const weightage = {
      level: 30,
      material: 20,
      assemblyCode: 30,
      function: 10,
      length: 5,
      volume: 5,
    };

    let missingLevel = 0;
    let missingMaterial = 0;
    let missingAssemblyCode = 0;
    let missingFunction = 0;
    let missingLength = 0;
    let missingVolume = 0;

    for (const ele of eles) {
      if (_.isNil(ele.material) || _.isEmpty(ele.material)) {
        missingMaterial++;
      }

      if (_.isNil(ele.level) || _.isEmpty(ele.level)) {
        missingLevel++;
      }

      if (_.isNil(ele.assemblyCode) || _.isEmpty(ele.assemblyCode)) {
        missingAssemblyCode++;
      }

      if (_.isNil(ele.length)) {
        missingLength++;
      }

      if (_.isNil(ele.volume)) {
        missingVolume++;
      }

      if (_.isNil(ele.function) || _.isEmpty(ele.function)) {
        missingFunction++;
      }

      if (_.isNil(ele.length)) {
        missingLength++;
      }

      let missingData = {
        level: (missingLevel * 100) / total,
        material: (missingMaterial * 100) / total,
        assemblyCode: (missingAssemblyCode * 100) / total,
        function: (missingFunction * 100) / total,
        length: (missingLength * 100) / total,
        volume: (missingVolume * 100) / total,
      };

      let score =
        100 -
        (weightage.level * missingData.level +
          weightage.material * missingData.material +
          weightage.assemblyCode * missingData.assemblyCode +
          weightage.function * missingData.function +
          weightage.length * missingData.length +
          weightage.volume * missingData.volume);
      score = _.round(score, 2);

      let totalAssembly = _.round(100 - missingData.assemblyCode, 2);
      let totalSTRMaterial = _.round(100 - missingData.material);
      let totalLevels = _.round(100 - missingData.level);

      let scoreDetail = {
        score,
        totalSTRMaterial,
        totalAssembly,
        totalLevels,
      };

      return scoreDetail;
    }
  }

  static highlightItemsByIds(
    revitIds: Array<string>,
    isIsolate = false,
    isFit = false
  ) {
    let { dicIds } = useForgeStore.getState();

    ModelDetailHelper.viewer3d.clearThemingColors(
      ModelDetailHelper.viewer3d.model
    );
    let revitIds2 = revitIds.map((x) => x.toString());

    let viewIds = dicIds
      .filter((x) => revitIds2.includes(x.revitId))
      .map((x) => x.viewId);

    setColorForElement(ModelDetailHelper.viewer3d, viewIds);
    let viewIdsInInt = viewIds.map((x) => parseInt(x));
    if (isIsolate) {
      ModelDetailHelper.viewer3d.isolate(viewIdsInInt);
    }

    if (isFit) {
      ModelDetailHelper.viewer3d.fitToView(viewIdsInInt);
    }
  }

  static resizeForgeViewer() {
    setTimeout(() => {
      ModelDetailHelper.viewer3d?.resize();
      ModelDetailHelper.viewer2d?.resize();
    }, 300);
  }
}
