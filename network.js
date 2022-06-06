export default {
  id: 'defund-private-1', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Defund',
  description:
    'Defund allows for the creation and investment in decentralized, exchange traded funds.',
  logo: `logo.svg`,
  website: 'https://defund.app',
  apiURL: 'http://api-1.defund.nodes.guru', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'https://rpc-1.defund.nodes.guru',
  stakingDenom: 'FETF',
  coinLookup: [
    {
      viewDenom: 'FETF',
      chainDenom: 'ufetf',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'defund',
  validatorAddressPrefix: 'defundvaloper',
  validatorConsensusaddressPrefix: 'defundvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `14 days`,
  fees: {
    default: {
      gasEstimate: 200000,
      feeOptions: [
        {
          denom: 'FETF',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
