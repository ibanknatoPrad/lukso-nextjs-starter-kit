export const interfaceID = [
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool'
      }
    ],
    name: 'supportsInterface',
    inputs: [
      {
        type: 'bytes4',
        name: 'interfaceId',
        internalType: 'bytes4'
      }
    ]
  }
]
