const data = {
  news: {
    title: 'Our News',
    description: 'We will keep you apprised of further developments and updates',
    bg_news: require('../images/img-blur-spec.png'),
  },
  features: [
    {
      title: 'Single Token for Single Pool',
      description: 'You only need a single token instead of  token pairs to get into a pool',
      ico_url: require('../images/ico-chip.png')
    },
    {
      title: 'Mesh Swap - Exchange any pair you wish',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.',
      ico_url: require('../images/ico-note.png')
    },
    {
      title: 'Rapidly Swaps - Slightly Fees',
      description: 'Say goodbye to high fees and slow confirmations',
      ico_url: require('../images/ico-dollar.png')
    },
    {
      title: 'Abundant Yield Rate',
      description: 'Earn more profit with high interest rate in liquidity pools',
      ico_url: require('../images/ico-grow.png'),
    },
    {
      title: 'Trouble-free and Secure',
      description: 'Provide the easiest way to safely swap tokens for users',
      ico_url: require('../images/ico-privacy.png')
    },
  ],
  text: {
    homeBanner: {
      title: 'The Leading in New Era of DeFi',
      description: 'The #1 AMM built on Solana to enrich the proficiency of DeFi ecosystem',
      buttonLaunch: 'Launch SenSwap',
      buttonLearn: 'Learn more',
    },
    ourFeature: {
      title: 'Our Key Features',
      description: 'The SenSwap protocol inspires liquidity providers and users to engage in the explosive growth of DeFi',
    }
  },
  partners: {
    title: 'Our Partners',
    items: [
      { src: require('../images/logo-coin-98.png') },
    ]
  },
  community: {
    title: 'A global community',
    description: 'Learn more about Senswap, chat with the team, others in the community, and have your say in shaping the future of the SenSwap protocol.',
    btn_telegram: 'Telegram',
    btn_twitter: 'Twitter',
    ico_fb_url: require('../images/logo-facebook.png'),
    ico_tw_url: require('../images/logo-twitter.png'),
    img_bgr: require('../images/img-bg-comm-r.png'),
    img_bgl: require('../images/img-bg-comm-l.png'),
  },
  pageNews: {
    title: 'Our News',
    description: 'Explore the stories below for curated news, stories, and inspiration from within the Senswap ecosystem',
    url_background: require('../images/img-heart.png'),
    url_multidot: require('../images/img-multi-dot.png'),
  },
  pageAbout: {
    title: 'About Us',
    description: 'Explore the stories below for curated news, stories, and inspiration from within the Senswap ecosystem',
    url_background: require('../images/img-heart.png'),
    url_multidot: require('../images/img-multi-dot.png'),
    solution: {
      title: 'SenSwap solution',
      description: 'The protocol is built on Solana Blockchain - This gives it several advantages over other DEX (Swap?) built on Ethereum  — including drastically reduced transaction fees and faster transaction confirmation times.',
      src: require('../images/img-solution.png'),
      ico_src: require('../images/ico-bell.png'),
      tag_title: 'Solana Blockchain',
      tag_time: 'We solution'
    },
    howItWork: {
      title: 'How It Works?',
      description: '<p>Each pool now is a single-side pool which contains a token and an anchor. The anchor is usually defined as a virtual stable token in each pool. Based on this, the protocol computes the value of reserve and the marginal price. Concretely, when the anchor has value of $1, the value of reserve is identical to the number of anchors.</p><p> The marginal price is equal to the number of anchors divided by the reserve. These indicators is not only for market evaluation but also for constructing key formulae in SenSwap. In practice, SenSwap will make use of quick block confirmation time based on Proof-of-History on Solana to alleviate the front-run attack, and low fee for user attraction</p>',
      src: require('../images/img-hows-it-work.png'),
      ico_src: require('../images/ico-bell.png'),
      tag_title: `How's it work`,
      tag_time: 'Senswap',
      tags: [
        {
          title: '50+ Unique Design Blocks',
          description: 'with Carefully Coded',
          ico_src: require('../images/ico-block.png'),
        },
        {
          title: '50+ Unique Design Blocks',
          description: 'with Carefully Coded',
          ico_src: require('../images/ico-block.png'),
        }
      ]
    },
    relatedTitle: 'Related Articles'
  },
  CTA: {
    twitter: 'https://twitter.com/SenSwap',
    app: 'https://app.senswap.com'
  }
};
export default data;