## 사용한 기술
* React
* React-router-dom
* Recoil
* Typescript
* Styled-component

## 디렉토리 구조
```bash
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── components
│   │   ├── recoils
│   │   │   ├── buildingInfo.ts
│   │   │   └── rentalInfo.ts
│   │   ├── rentalInfo
│   │   │   ├── rentalCategory.tsx
│   │   │   └── rentalForm.tsx
│   │   ├── residencyInfo
│   │   │   ├── buildingInfomation.tsx
│   │   │   └── monthPriceRefund.tsx
│   │   └── totalInfo
│   │       ├── buildingList.tsx
│   │       ├── rentalList.tsx
│   │       └── totalInfo.tsx
│   ├── layout
│   │   ├── buildingInfoInput.tsx
│   │   ├── container.tsx
│   │   └── rentalInput.tsx
│   ├── mock
│   │   └── data.ts
│   ├── pages
│   │   ├── rentalInfo
│   │   │   └── index.tsx
│   │   ├── residencyInfo
│   │   │   └── index.tsx
│   │   └── totalInfo
│   │       └── index.tsx
│   ├── styles
│   │   ├── globalStyles.ts
│   │   ├── mixin.ts
│   │   └── theme.ts
│   └── types
│       └── inputData.ts
└── tsconfig.json
```

## component 설명
### rentalInfo
* rentalCategory.tsx : 임대 유형(월세, 전세)에 따라 Input이 다르게 보여지는 component
* rentalForm.tsx : 임대 유형 Input의 값을 다루는 component

### residencyInfo
* buildingInfomation.tsx : 거주 건물 input 값을 관리하는 component
* monthpriceRefund.tsx : 월세 환급금을 보여주는 component

### totalInfo
* buildingList.tsx : 거주 건물 값을 보여주는 component
* rentalList.tsx : 임대 정보 값을 보여주는 component
* totalList.tsx : (building + rental) List 부모component


## 구현한 기능
* 임대정보 및 거주정보 input value값 관리
* 납부하는 관리비 checkbox를 통해 disabled 처리
* 임대정보 button 클릭 시 로컬스토리지에 저장한 값 불러오기
* 환급금 계산 및 모든 정보에 대한 값들 전역 state 관리

## 구현하지 못한 기능
* 달력 기능
* 주소 API
* input에 대한 validation 처리

## 하면서 어려웠던 점
* styled-component props를 전달하여 스타일링 하는 부분(까다로운 부분이 있었음)
* if ~ else if 문을 너무 많이 써서 어떻게 개선을 해야할지 잘 모르겠음
* totalInfo component에서 데이터를 뿌려줄 때 원하는 data만 뿌려주고 싶을 때 적절하게 가공하는 방법에 대한 고민..?
* component 분리, component naming
