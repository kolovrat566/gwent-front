export const fields = [
  {
    type: 'enemy',
    value: 'siege'
  },
  {
    type: 'enemy',
    value: 'range'
  },
  {
    type: 'enemy',
    value: 'melee'
  },
  {
    type: 'ally',
    value: 'melee'
  },
  {
    type: 'ally',
    value: 'range'
  },
  {
    type: 'ally',
    value: 'siege'
  },
];

export const createField = () => {
  const newFields: any = []
  for (let i = 0; i < 6; i++) {
    newFields.push({
      type: fields[i].type,
      value: fields[i].value,
      cards: [],
    })
  };
  const hand = [
    {
      id: 0,
      position: 'melee',
      side: 'ally',
      perk: 'none',
      img: ''
    },
    {
      id: 1,
      position: 'range',
      side: 'ally',
      perk: 'none',
      img: ''
    },
    {
      id: 2,
      position: 'siege',
      side: 'ally',
      perk: 'none',
      img: ''
    },
    {
      id: 3,
      position: 'melee',
      side: 'enemy',
      perk: 'none',
      img: ''
    },
    {
      id: 4,
      position: 'melee',
      side: 'ally',
      perk: 'none',
      img: ''
    },
  ]
  return ({
    fields: newFields,
    hand,
  })
}