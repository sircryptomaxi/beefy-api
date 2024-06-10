const treasuryMultisig = '0x3f5eddad52C665A4AA011cd11A21E1d5107d7862';
const devMultisig = '0xf7EC8986c660Fa8269f6440A631B22337f398Ccd';

export const beefyfinance = {
  devMultisig,
  treasuryMultisig,
  strategyOwner: '0x6d28afD25a1FBC5409B1BeFFf6AEfEEe2902D89F',
  vaultOwner: '0x9A94784264AaAE397441c1e47fA132BE4e61BdaD',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: treasuryMultisig,
  launchpoolOwner: devMultisig,
  rewardPool: '0x48F4634c8383aF01BF71AefBC125eb582eb3C74D',
  treasury: '0xc3a4fdcba79DB04b4C3e352b1C467B3Ba909D84A',
  beefyFeeRecipient: '0x02Ae4716B9D5d48Db1445814b0eDE39f5c28264B',
  multicall: '0x13aD51a6664973EbD0749a7c84939d973F247921',
  bifiMaxiStrategy: '0x012416d44CD8397BD798c155F91295b6b980ccef',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0xDC1dC2abC8775561A6065D0EE27E8fDCa8c4f7ED',
  vaultFactory: '0x8396f3d25d07531a80770Ce3DEA025932C4953f7',
  wrapperFactory: '0x48bF3a071098a09C7D00379b4DBC69Ab6Da83a36',
  strategyFactory: '0xeF7746F16e511242e25Ad4FF9732bb5fC35EAB50',
  zap: '0xf49F7bB6F4F50d272A0914a671895c4384696E5A',
  zapTokenManager: '0x3395BDAE49853Bc7Ab9377d2A93f42BC3A18680e',

  /// CLM Contracts
  clmFactory: '0xD41Ce2c0a0596635FC09BDe2C35946a984b8cB7A',
  clmStrategyFactory: '0xa5E8574a0BE6A7379611D2Fa0eA228c3a1778162',
  clmRewardPoolFactory: '0x512b1A12200338F46a844E224d37B303a21D0224',

  /// Beefy Swapper Contracts
  beefySwapper: '0xCee843CD04E3758dDC5BCFf08647DddB117151D0',
  beefyOracle: '0x5C7c7Bb0c9251821cB5a1D9c08F21B0DAD5efe65',
} as const;
