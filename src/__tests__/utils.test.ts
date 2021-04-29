import * as utils from 'utils';
import { cleanup } from 'components/TestWrapper';
import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';

const mockCategoryTree = [
  {
    id: 1,
    name: 'category01',
    specialties: [
      {
        id: 1,
        name: 'specialty01',
      },
      {
        id: 2,
        name: 'specialty02',
      },
      {
        id: 3,
        name: 'specialty03',
      },
    ],
  },
  {
    id: 2,
    name: 'category02',
    specialties: [
      {
        id: 4,
        name: 'specialty04',
      },
      {
        id: 5,
        name: 'specialty05',
      },
      {
        id: 6,
        name: 'specialty06',
      },
    ],
  },
  {
    id: 3,
    name: 'category03',
    specialties: [
      {
        id: 7,
        name: 'specialty07',
      },
      {
        id: 8,
        name: 'specialty08',
      },
      {
        id: 9,
        name: 'specialty09',
      },
    ],
  },
];

afterEach(cleanup);

describe('Utils', () => {
  test('"isSelectedExist" function test', () => {
    expect(
      utils.isSelectedExist(0, [
        {
          value: 0,
          label: 'label0',
        },
        {
          value: 1,
          label: 'label1',
        },
        {
          value: 2,
          label: 'label2',
        },
      ])
    ).toBeTruthy();

    expect(
      utils.isSelectedExist(undefined, [
        {
          value: 0,
          label: 'label0',
        },
        {
          value: 1,
          label: 'label1',
        },
        {
          value: 2,
          label: 'label2',
        },
      ])
    ).toBeFalsy();

    expect(
      utils.isSelectedExist('0', [
        {
          value: 0,
          label: 'label0',
        },
        {
          value: 1,
          label: 'label1',
        },
        {
          value: 2,
          label: 'label2',
        },
      ])
    ).toBeFalsy();

    expect(
      utils.isSelectedExist(3, [
        {
          value: 0,
          label: 'label0',
        },
        {
          value: 1,
          label: 'label1',
        },
        {
          value: 2,
          label: 'label2',
        },
      ])
    ).toBeFalsy();
  });

  test('"adjustErrorMessage" function test', () => {
    expect(
      utils.adjustErrorMessage({
        password: ['password_shorter'],
        email: ['email_required', 'required'],
      })
    ).toEqual({
      password: ['パスワードを8文字以上で設定してください'],
      email: [VALIDATE_ERROR_MESSAGES.email_required, VALIDATE_ERROR_MESSAGES.required],
    });
  });

  test('"createBreadCrumbList" function test', () => {
    expect(
      utils.createBreadCrumbList(
        {
          keyword: {
            keyword: '',
            key: 'post',
          },
          category: 2,
          specialty: 6,
          orderBy: {
            post: 'likes_count',
            user: 'created_at',
          },
        },
        mockCategoryTree
      )
    ).toEqual([
      { id: 2, name: 'category02' },
      { id: 6, name: 'specialty06' },
    ]);
  });

  test('"createCategoryTagList" function test', () => {
    expect(utils.createCategoryTagList(1, 1, mockCategoryTree)).toEqual([
      'category01',
      'specialty01',
    ]);
  });
  test('"formatData" function test', () => {
    expect(utils.formatDate(new Date('2021-04-29T00:00:00'), 'YYYY-MM-DD')).toEqual('2021-4-29');
    expect(utils.formatDate(new Date('2021-04-29T00:00:00'), 'YYYY/MM/DD')).toEqual('2021/4/29');
    expect(utils.formatDate(new Date('2021-04-29T10:20:00'), 'YYYY/MM/DD HH:MM')).toEqual(
      '2021/4/29 10:20'
    );
  });
});
