/**
 * Meeting layout init template data
 *
 * @authors Luo-jinghui (luojinghui424@gmail.com)
 * @date  2019-10-24 20:41:38
 */

import { TEMPLATE_TYPE } from '@/utils/enum';
import { isVertical } from '@/utils/browser';
// 分辨率配置：
// 0: 90P
// 1: 180P
// 2: 360P
// 3: 720P
// 4: 1080P

// 9:16的比例
export const RATE = 0.5625;

// 画面隐藏的位置
export const HIDE_POSITION = [-30, -30, 1, 1];

// 如何自定义模版数据：
// 1. 第一位优先大画面位置
// 2. 第二位优先考虑 Local 的位置，剩余是其他画面
// 3. 以容器的比值计算 position 的比例
export const SPEAKER_TEMPLATE = {
  '1-1': [
    {
      position: [0, 0, 1, 1],
      resolution: 3,
    },
  ],
  '2-1': [
    {
      position: [0, 0, 0.75, 1],
      resolution: 3,
    },
    {
      position: [0.75, 0, 0.25, 0.333],
      resolution: 1,
    },
  ],
  '3-1': [
    {
      position: [0, 0, 0.75, 1],
      resolution: 3,
    },
    {
      position: [0.75, 0, 0.25, 0.333],
      resolution: 1,
    },
    {
      position: [0.75, 0.333, 0.25, 0.333],
      resolution: 1,
    },
  ],
  '4-1': [
    {
      position: [0, 0, 0.75, 1],
      resolution: 3,
    },
    {
      position: [0.75, 0, 0.25, 0.333],
      resolution: 1,
    },
    {
      position: [0.75, 0.333, 0.25, 0.333],
      resolution: 1,
    },
    {
      position: [0.75, 0.666, 0.25, 0.333],
      resolution: 1,
    },
  ],
  '5-1': [
    {
      position: [0.125, 0, 0.75, 0.75],
      resolution: 3,
    },
    {
      position: [0, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.25, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.5, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.75, 0.25, 0.25],
      resolution: 1,
    },
  ],
  '6-1': [
    {
      position: [0, 0, 0.75, 0.75],
      resolution: 3,
    },
    {
      position: [0, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.25, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.5, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.5, 0.25, 0.25],
      resolution: 1,
    },
  ],
  '7-1': [
    {
      position: [0, 0, 0.75, 0.75],
      resolution: 3,
    },
    {
      position: [0, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.25, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.5, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.5, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.25, 0.25, 0.25],
      resolution: 1,
    },
  ],
  '8-1': [
    {
      position: [0, 0, 0.75, 0.75],
      resolution: 3,
    },
    {
      position: [0, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.25, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.5, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.75, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.5, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0.25, 0.25, 0.25],
      resolution: 1,
    },
    {
      position: [0.75, 0, 0.25, 0.25],
      resolution: 1,
    },
  ],
};

// 移动端 竖屏模板
const MOBILE_VERTICAL_TEMPLATE = {
  '1-1': [
    {
      position: [0, 0, 1, 1],
      resolution: 3,
      quality: 0,
      type: TEMPLATE_TYPE.LOCAL,
    },
  ],
  '2-1': [
    {
      position: [0, 0, 1, 0.5],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.5, 1, 0.5],
      resolution: 3,
      quality: 0,
      type: TEMPLATE_TYPE.LOCAL,
    },
  ],
  '3-1': [
    {
      position: [0, 0, 1, 0.5625],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.6667, 0.5, 0.28125],
      resolution: 1,
      type: TEMPLATE_TYPE.LOCAL,
    },
    {
      position: [0.5, 0.6667, 0.5, 0.28125],
      resolution: 1,
    },
  ],
  '4-1': [
    {
      position: [0, 0, 1, 0.5625],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.5, 0.5, 0.28125],
      resolution: 1,
      type: TEMPLATE_TYPE.LOCAL,
    },
    {
      position: [0.5, 0.5, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.0, 0.75, 0.5, 0.28125],
      resolution: 1,
    },
  ],
  '5-1': [
    {
      position: [0, 0, 1, 0.5625],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.5, 0.5, 0.28125],
      resolution: 1,
      type: TEMPLATE_TYPE.LOCAL,
    },
    {
      position: [0.5, 0.5, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.0, 0.75, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.5, 0.75, 0.5, 0.28125],
      resolution: 1,
    },
  ],
  '6-1': [
    {
      position: [0, 0, 1, 0.5625],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.4, 0.5, 0.28125],
      resolution: 1,
      type: TEMPLATE_TYPE.LOCAL,
    },
    {
      position: [0.5, 0.4, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.0, 0.6, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.5, 0.6, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0, 0.8, 0.5, 0.28125],
      resolution: 1,
    },
  ],
  '7-1': [
    {
      position: [0, 0, 1, 0.5625],
      resolution: 3,
      quality: 0,
    },
    {
      position: [0, 0.4, 0.5, 0.28125],
      resolution: 1,
      type: TEMPLATE_TYPE.LOCAL,
    },
    {
      position: [0.5, 0.4, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.0, 0.6, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.5, 0.6, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0, 0.8, 0.5, 0.28125],
      resolution: 1,
    },
    {
      position: [0.5, 0.8, 0.5, 0.28125],
      resolution: 1,
    },
  ],
};

// 布局模版
export const TEMPLATE = (isPc = true) => {
  if (isPc) {
    // PC端布局模版
    // template模版数据包含自己，所以length为6是，代表有5个远端画面，一个本地画面
    // 增加rate，方便计算容器的宽高
    return {
      length: 8,
      temp: {
        0: SPEAKER_TEMPLATE['1-1'],
        1: SPEAKER_TEMPLATE['1-1'],
        2: SPEAKER_TEMPLATE['2-1'],
        3: SPEAKER_TEMPLATE['3-1'],
        4: SPEAKER_TEMPLATE['4-1'],
        5: SPEAKER_TEMPLATE['5-1'],
        6: SPEAKER_TEMPLATE['6-1'],
        7: SPEAKER_TEMPLATE['7-1'],
        8: SPEAKER_TEMPLATE['8-1'],
      },
      rate: {
        0: 0.5625,
        1: 0.5625,
        2: 0.4218,
        3: 0.4218,
        4: 0.4218,
        5: 0.5625,
        6: 0.5625,
        7: 0.5625,
        8: 0.5625,
      },
    };
  }

  if (isVertical()) {
    return {
      length: 7,
      temp: {
        0: MOBILE_VERTICAL_TEMPLATE['1-1'],
        1: MOBILE_VERTICAL_TEMPLATE['1-1'],
        2: MOBILE_VERTICAL_TEMPLATE['2-1'],
        3: MOBILE_VERTICAL_TEMPLATE['3-1'],
        4: MOBILE_VERTICAL_TEMPLATE['4-1'],
        5: MOBILE_VERTICAL_TEMPLATE['5-1'],
        6: MOBILE_VERTICAL_TEMPLATE['6-1'],
        7: MOBILE_VERTICAL_TEMPLATE['7-1'],
      },
      rate: {
        0: 1,
        1: 1,
        2: 1.125,
        3: 0.8437,
        4: 1.125,
        5: 1.125,
        6: 1.40625,
        7: 1.40625,
      },
    };
  }

  return {
    length: 7,
    temp: {
      0: Get_MOBILE_HORIZONTAL_TEMPLATE(1),
      1: Get_MOBILE_HORIZONTAL_TEMPLATE(1),
      2: Get_MOBILE_HORIZONTAL_TEMPLATE(2),
      3: Get_MOBILE_HORIZONTAL_TEMPLATE(3),
      4: Get_MOBILE_HORIZONTAL_TEMPLATE(4),
      5: Get_MOBILE_HORIZONTAL_TEMPLATE(5),
      6: Get_MOBILE_HORIZONTAL_TEMPLATE(6),
      7: Get_MOBILE_HORIZONTAL_TEMPLATE(7),
    },
    rate: {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
    },
  };
};

// 移动端 横屏模式
const Get_MOBILE_HORIZONTAL_TEMPLATE = (size) => {
  const list = [
    {
      position: [0, 0, 1, 1],
      resolution: 3,
      quality: 0,
    },
  ];

  if (size > 1) {
    const layoutWidth = Math.round((document.body.clientWidth - 4 * 7) / 6);
    const layoutHeight = Math.round(layoutWidth * RATE);

    for (let i = 1; i < size; i++) {
      list.push({
        position: [0, 0, 0, 0],
        resolution: size === 2 ? 3 : 1,
        quality: size === 2 ? 0 : 1,
        customStyle: {
          width: layoutWidth + 'px',
          height: layoutHeight + 'px',
          layoutWidth,
          layoutHeight,
          top: 'auto',
          bottom: '8px',
          left: layoutWidth * (i - 1) + 4 * i + 'px',
          border: '1px solid #fff',
        },
        ...(i === 1 && { type: TEMPLATE_TYPE.LOCAL }),
      });
    }
  }

  return list;
};
