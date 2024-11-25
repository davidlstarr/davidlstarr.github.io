/*! For license information please see main.e1f74b7c.js.LICENSE.txt */
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`);bs("",on`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`,{moduleId:"lumo-color"});Cs("font-icons",on`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`);Cs("sizing-props",on`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`);Cs("spacing-props",on`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`);on`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Cs("style-props",on`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`);const As=on`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;bs("",on`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"}),Cs("typography-props",As),bs("vaadin-grid",on`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"}),window.JSCompiler_renameProperty=function(e,t){return e};let Es,Ts,Is=/(url\()([^)]*)(\))/g,Ps=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ks(e,t){if(e&&Ps.test(e))return e;if("//"===e)return e;if(void 0===Es){Es=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Es="http://a/c%20d"===e.href}catch(r){}}if(t||(t=document.baseURI||window.location.href),Es)try{return new URL(e,t).href}catch(r){return e}return Ts||(Ts=document.implementation.createHTMLDocument("temp"),Ts.base=Ts.createElement("base"),Ts.head.appendChild(Ts.base),Ts.anchor=Ts.createElement("a"),Ts.body.appendChild(Ts.anchor)),Ts.base.href=t,Ts.anchor.href=e,Ts.anchor.href||e}function Os(e,t){return e.replace(Is,(function(e,r,i,n){return r+"'"+ks(i.replace(/["']/g,""),t)+"'"+n}))}function Rs(e){return e.substring(0,e.lastIndexOf("/")+1)}const Ls=!window.ShadyDOM||!window.ShadyDOM.inUse,Fs=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Ls&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let Ns=window.Polymer&&window.Polymer.rootPath||Rs(document.baseURI||window.location.href);let $s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Ds=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let js=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let Zs=window.Polymer&&window.Polymer.legacyOptimizations||!1;let zs=window.Polymer&&window.Polymer.legacyWarnings||!1;let Vs=window.Polymer&&window.Polymer.syncInitialRender||!1;let Us=window.Polymer&&window.Polymer.legacyUndefined||!1;let Bs=window.Polymer&&window.Polymer.orderedComputed||!1;let Gs=!0;let qs=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let Hs=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Ws=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let Ks=0;function Js(){}Js.prototype.__mixinApplications,Js.prototype.__mixinSet;const Ys=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=Ks++;return function(i){let n=i.__mixinSet;if(n&&n[r])return i;let s=t,o=s.get(i);if(!o){o=e(i),s.set(i,o);let t=Object.create(o.__mixinSet||n||null);t[r]=!0,o.__mixinSet=t}return o}};let Qs={},Xs={};function eo(e,t){Qs[e]=Xs[e.toLowerCase()]=t}function to(e){return Qs[e]||Xs[e.toLowerCase()]}class ro extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=to(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,i){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ks(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Rs(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Ds&&void 0!==to(e))throw eo(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,eo(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}ro.prototype.modules=Qs,customElements.define("dom-module",ro);const io="shady-unscoped";function no(e){return ro.import(e)}function so(e){const t=Os((e.body?e.body:e).textContent,e.baseURI),r=document.createElement("style");return r.textContent=t,r}function oo(e){const t=e.trim().split(/\s+/),r=[];for(let i=0;i<t.length;i++)r.push(...ao(t[i]));return r}function ao(e){const t=no(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...co(t));const r=t.querySelector("template");r&&e.push(...lo(r,t.assetpath)),t._styles=e}return t._styles}function lo(e,t){if(!e._styles){const r=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let n=i[e],s=n.getAttribute("include");s&&r.push(...oo(s).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(n.textContent=Os(n.textContent,t)),r.push(n)}e._styles=r}return e._styles}function co(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let i=0;i<r.length;i++){let e=r[i];if(e.import){const r=e.import,i=e.hasAttribute(io);if(i&&!r._unscopedStyle){const e=so(r);e.setAttribute(io,""),r._unscopedStyle=e}else r._style||(r._style=so(r));t.push(i?r._unscopedStyle:r._style)}}return t}const uo=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function ho(e){return e.indexOf(".")>=0}function po(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function fo(e,t){return 0===e.indexOf(t+".")}function mo(e,t){return 0===t.indexOf(e+".")}function yo(e,t,r){return t+r.slice(e.length)}function go(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let i=e[r].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function vo(e){return Array.isArray(e)?go(e).split("."):e.toString().split(".")}function bo(e,t,r){let i=e,n=vo(t);for(let s=0;s<n.length;s++){if(!i)return;i=i[n[s]]}return r&&(r.path=n.join(".")),i}function _o(e,t,r){let i=e,n=vo(t),s=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++){if(i=i[n[e]],!i)return}i[s]=r}else i[t]=r;return n.join(".")}const wo={},So=/-[a-z]/g,xo=/([A-Z])/g;function Mo(e){return wo[e]||(wo[e]=e.indexOf("-")<0?e:e.replace(So,(e=>e[1].toUpperCase())))}function Co(e){return wo[e]||(wo[e]=e.replace(xo,"-$1").toLowerCase())}let Ao=0,Eo=0,To=[],Io=0,Po=!1,ko=document.createTextNode("");new window.MutationObserver((function(){Po=!1;const e=To.length;for(let r=0;r<e;r++){let e=To[r];if(e)try{e()}catch(t){setTimeout((()=>{throw t}))}}To.splice(0,e),Eo+=e})).observe(ko,{characterData:!0});const Oo={run:e=>(Po||(Po=!0,ko.textContent=Io++),To.push(e),Ao++),cancel(e){const t=e-Eo;if(t>=0){if(!To[t])throw new Error("invalid async handle: "+e);To[t]=null}}},Ro=Ys((e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let i=this.__data[e],n=this._shouldPropertyChange(e,t,i);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Oo.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r)),this.__dataCounter--}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r===r||t===t)}attributeChangedCallback(e,t,r,i){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,i)}_attributeToProperty(e,t,r){if(!this.__serializing){const i=this.__dataAttributes,n=i&&i[e]||e;this[n]=this._deserializeValue(t,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const i=this._serializeValue(t);"class"!==r&&"name"!==r&&"slot"!==r||(e=uo(e)),void 0===i?e.removeAttribute(r):e.setAttribute(r,""===i&&window.trustedTypes?window.trustedTypes.emptyScript:i)}_serializeValue(e){return"boolean"===typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Lo={};let Fo=HTMLElement.prototype;for(;Fo;){let e=Object.getOwnPropertyNames(Fo);for(let t=0;t<e.length;t++)Lo[e[t]]=!0;Fo=Object.getPrototypeOf(Fo)}const No=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;const $o=Ys((e=>{const t=Ro(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Mo(e[t]))}static attributeNameForProperty(e){return Co(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){if("object"===typeof e){if(e instanceof Date)return e.toString();if(e){if(No(e))return e;try{return JSON.stringify(e)}catch(t){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(i){r=e}break;case Array:try{r=JSON.parse(e)}catch(i){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!Lo[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Do={"dom-if":!0,"dom-repeat":!0};let jo=!1,Zo=!1;function zo(e){(function(){if(!jo){jo=!0;const e=document.createElement("textarea");e.placeholder="a",Zo=e.placeholder===e.textContent}return Zo})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Vo=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,r,i)=>{const n=r.getAttribute(i);e&&i.startsWith("on-")?t.setAttribute(i,e.createScript(n,i)):t.setAttribute(i,n)}})();function Uo(e){let t=e.getAttribute("is");if(t&&Do[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;){const{name:t}=r.attributes[0];Vo(e,r,t),r.removeAttribute(t)}}return e}function Bo(e,t){let r=t.parentInfo&&Bo(e,t.parentInfo);if(!r)return e;for(let i=r.firstChild,n=0;i;i=i.nextSibling)if(t.parentIndex===n++)return i}function Go(e,t,r,i){i.id&&(t[i.id]=r)}function qo(e,t,r){if(r.events&&r.events.length)for(let i,n=0,s=r.events;n<s.length&&(i=s[n]);n++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function Ho(e,t,r,i){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=i)}const Wo=Ys((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(t),r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let i=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(n,t,r)||i,zo(n),n.firstChild&&this._parseTemplateChildNodes(n,t,r),n.hasAttributes&&n.hasAttributes()&&(i=this._parseTemplateNodeAttributes(n,t,r)||i),i||r.noted}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let i,n=e.firstChild,s=0;n;n=i){if("template"==n.localName&&(n=Uo(n)),i=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=i;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,i=r.nextSibling,e.removeChild(r),r=i;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let o={parentIndex:s,parentInfo:r};this._parseTemplateNode(n,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),n.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,r){let i=e,n=this._parseTemplate(i,t);return(n.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,r){let i=!1,n=Array.from(e.attributes);for(let s,o=n.length-1;s=n[o];o--)i=this._parseTemplateNodeAttribute(e,t,r,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(e,t,r,i,n){return"on-"===i.slice(0,3)?(e.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:n}),!0):"id"===i&&(r.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let r=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,n=document.importNode(i,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let s=n.nodeList=new Array(r.length);n.$={};for(let o,a=0,l=r.length;a<l&&(o=r[a]);a++){let e=s[a]=Bo(n,o);Go(0,n.$,e,o),Ho(0,e,o,t),qo(this,e,o)}return n}_addMethodEventListenerToNode(e,t,r,i){let n=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(i=i||e,0,r);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}}));let Ko=0;const Jo=[],Yo={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Qo="__computeInfo",Xo=/[A-Z]/;function ea(e,t,r){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),r))for(let n in i){let e=i[n],t=i[n]=Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r]}}else i=e[t]={};return i}function ta(e,t,r,i,n,s){if(t){let o=!1;const a=Ko++;for(let l in r){let c=t[n?po(l):l];if(c)for(let t,u=0,d=c.length;u<d&&(t=c[u]);u++)t.info&&t.info.lastRun===a||n&&!ia(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,r,i,t.info,n,s),o=!0)}return o}return!1}function ra(e,t,r,i,n,s,o,a){let l=!1,c=t[o?po(i):i];if(c)for(let u,d=0,h=c.length;d<h&&(u=c[d]);d++)u.info&&u.info.lastRun===r||o&&!ia(i,u.trigger)||(u.info&&(u.info.lastRun=r),u.fn(e,i,n,s,u.info,o,a),l=!0);return l}function ia(e,t){if(t){let r=t.name;return r==e||!(!t.structured||!fo(r,e))||!(!t.wildcard||!mo(r,e))}return!0}function na(e,t,r,i,n){let s="string"===typeof n.method?e[n.method]:n.method,o=n.property;s?s.call(e,e.__data[o],i[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function sa(e,t,r){let i=po(t);if(i!==t){return oa(e,Co(i)+"-changed",r[t],t),!0}return!1}function oa(e,t,r,i){let n={value:r,queueProperty:!0};i&&(n.path=i),uo(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function aa(e,t,r,i,n,s){let o=(s?po(t):t)!=t?t:null,a=o?bo(e,o):e.__data[t];o&&void 0===a&&(a=r[t]),oa(e,n.eventName,a,o)}function la(e,t,r,i,n){let s=e.__data[t];$s&&(s=$s(s,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,s)}function ca(e,t,r,i){let n=e[Yo.COMPUTE];if(n)if(Bs){Ko++;const s=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[Yo.COMPUTE];let i,{counts:n,ready:s,total:o}=function(e){const t=e[Qo],r={},i=e[Yo.COMPUTE],n=[];let s=0;for(let o in t){const e=t[o];s+=r[o]=e.args.filter((e=>!e.literal)).length+(e.dynamicFn?1:0)}for(let o in i)t[o]||n.push(o);return{counts:r,ready:n,total:s}}(e);for(;i=s.shift();){t.set(i,t.size);const e=r[i];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0===--n[t]&&s.push(t)}))}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)da(e,n,o,s,i);let a;for(;a=o.shift();)ha(e,"",t,r,a)&&da(a.methodInfo,n,o,s,i);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;ta(e,n,s,r,i);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const ua=(e,t,r)=>{let i=0,n=t.length-1,s=-1;for(;i<=n;){const o=i+n>>1,a=r.get(t[o].methodInfo)-r.get(e.methodInfo);if(a<0)i=o+1;else{if(!(a>0)){s=o;break}n=o-1}}s<0&&(s=n+1),t.splice(s,0,e)},da=(e,t,r,i,n)=>{const s=t[n?po(e):e];if(s)for(let o=0;o<s.length;o++){const t=s[o];t.info.lastRun===Ko||n&&!ia(e,t.trigger)||(t.info.lastRun=Ko,ua(t.info,r,i))}};function ha(e,t,r,i,n){let s=ba(e,t,r,i,n);if(s===Jo)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function pa(e,t,r,i,n,s,o){r.bindings=r.bindings||[];let a={kind:i,target:n,parts:s,literal:o,isCompound:1!==s.length};if(r.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Co(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let r=a.parts[c];r.compoundIndex=c,fa(e,t,a,r,l)}}function fa(e,t,r,i,n){if(!i.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,o={index:n,binding:r,part:i,evaluator:e};for(let r=0;r<s.length;r++){let i=s[r];"string"==typeof i&&(i=Aa(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:ma,info:o,trigger:i})}}}function ma(e,t,r,i,n,s,o){let a=o[n.index],l=n.binding,c=n.part;if(s&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=r[t];t=yo(c.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(e,c,t,r,i,s);o!==Jo&&function(e,t,r,i,n){n=function(e,t,r,i){if(r.isCompound){let n=e.__dataCompoundStorage[r.target];n[i.compoundIndex]=t,t=n.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=void 0==t?"":t));return t}(t,n,r,i),$s&&(n=$s(n,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,n,r.target);else{let i=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[Yo.READ_ONLY]&&t[Yo.READ_ONLY][i]||t._setPendingProperty(i,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,n)}}(e,a,l,c,o)}}function ya(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,n=new Array(i.length);for(let e=0;e<i.length;e++)n[e]=i[e].literal;let s=t.target;r[s]=n,t.literal&&"property"==t.kind&&("className"===s&&(e=uo(e)),e[s]=t.literal)}}function ga(e,t,r){if(r.listenerEvent){let i=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,i,n){let s,o=e.detail,a=o&&o.path;a?(i=yo(r,i,a),s=o&&o.value):s=e.currentTarget[r],s=n?!s:s,t[Yo.READ_ONLY]&&t[Yo.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,r.target,i.source,i.negate)}))}}function va(e,t,r,i,n,s){s=t.static||s&&("object"!==typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:s};for(let a,l=0;l<t.args.length&&(a=t.args[l]);l++)a.literal||e._addPropertyEffect(a.rootProperty,r,{fn:i,info:o,trigger:a});return s&&e._addPropertyEffect(t.methodName,r,{fn:i,info:o}),o}function ba(e,t,r,i,n){let s=e._methodHost||e,o=s[n.methodName];if(o){let i=e._marshalArgs(n.args,t,r);return i===Jo?Jo:o.apply(s,i)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const _a=[],wa="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Sa="(?:("+wa+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",xa=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?"+("("+wa+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+Sa+"(?:,\\s*"+Sa+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g");function Ma(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function Ca(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:_a};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=Aa(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Aa(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=po(t),r.structured=ho(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function Ea(e,t,r){let i=bo(e,r);return void 0===i&&(i=t[r]),i}function Ta(e,t,r,i){const n={indexSplices:i};Us&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(r+".splices",n),e.notifyPath(r+".length",t.length),Us&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function Ia(e,t,r,i,n,s){Ta(e,t,r,[{index:i,addedCount:n,removed:s,object:t,type:"splice"}])}const Pa=Ys((e=>{const t=Wo($o(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Yo}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ka.length){let e=ka[ka.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Yo.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==Yo.READ_ONLY);let i=ea(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(r)}_removePropertyEffect(e,t,r){let i=ea(this,t,!0)[e],n=i.indexOf(r);n>=0&&i.splice(n,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Yo.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Yo.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Yo.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Yo.COMPUTE)}_setPendingPropertyOrPath(e,t,r,i){if(i||po(Array.isArray(e)?e[0]:e)!==e){if(!i){let r=bo(this,e);if(!(e=_o(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let i=e.__dataLinkedPaths;if(i){let n;for(let s in i){let o=i[s];mo(s,t)?(n=yo(s,o,t),e._setPendingPropertyOrPath(n,r,!0,!0)):mo(o,t)&&(n=yo(o,s,t),e._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||("className"===t&&(e=uo(e)),e[t]=r)}_setPendingProperty(e,t,r){let i=this.__dataHasPaths&&ho(e),n=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[Yo.NOTIFY]&&this[Yo.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[Yo.READ_ONLY]&&this[Yo.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let i,n=this.__dataHasPaths;this.__dataHasPaths=!1,ca(this,t,r,n),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,r,n),this._flushClients(),ta(this,this[Yo.REFLECT],t,r,n),ta(this,this[Yo.OBSERVE],t,r,n),i&&function(e,t,r,i,n){let s,o,a=e[Yo.NOTIFY],l=Ko++;for(let c in t)t[c]&&(a&&ra(e,a,l,c,r,i,n)||n&&sa(e,c,r))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,i,t,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[Yo.PROPAGATE]&&ta(this,this[Yo.PROPAGATE],e,t,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,r)}_runEffectsForTemplate(e,t,r,i){const n=(t,i)=>{ta(this,e.propertyEffects,t,r,i,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,r,i)};e.runEffects?e.runEffects(n,t,i):n(t,i)}linkPaths(e,t){e=go(e),t=go(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=go(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};Ta(this,bo(this,e,r),r.path,t)}get(e,t){return bo(t||this,e)}set(e,t,r){r?_o(r,e,t):this[Yo.READ_ONLY]&&this[Yo.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e){let t={path:""},r=bo(this,e,t),i=r.length;for(var n=arguments.length,s=new Array(n>1?n-1:0),o=1;o<n;o++)s[o-1]=arguments[o];let a=r.push(...s);return s.length&&Ia(this,r,t.path,i,s.length,[]),a}pop(e){let t={path:""},r=bo(this,e,t),i=Boolean(r.length),n=r.pop();return i&&Ia(this,r,t.path,r.length,0,[n]),n}splice(e,t,r){for(var i=arguments.length,n=new Array(i>3?i-3:0),s=3;s<i;s++)n[s-3]=arguments[s];let o,a={path:""},l=bo(this,e,a);return t<0?t=l.length-Math.floor(-t):t&&(t=Math.floor(t)),o=2===arguments.length?l.splice(t):l.splice(t,r,...n),(n.length||o.length)&&Ia(this,l,a.path,t,n.length,o),o}shift(e){let t={path:""},r=bo(this,e,t),i=Boolean(r.length),n=r.shift();return i&&Ia(this,r,t.path,0,0,[n]),n}unshift(e){let t={path:""},r=bo(this,e,t);for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];let o=r.unshift(...n);return n.length&&Ia(this,r,t.path,0,n.length,[]),o}notifyPath(e,t){let r;if(1==arguments.length){let i={path:""};t=bo(this,e,i),r=i.path}else r=Array.isArray(e)?go(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,Yo.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let i={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,Yo.OBSERVE,{fn:na,info:i,trigger:{name:e}}),r&&this._addPropertyEffect(t,Yo.OBSERVE,{fn:na,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let r=Ca(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");va(this,r,Yo.OBSERVE,ba,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Yo.NOTIFY,{fn:aa,info:{eventName:Co(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Yo.REFLECT,{fn:la,info:{attrName:t}})}_createComputedProperty(e,t,r){let i=Ca(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const n=va(this,i,Yo.COMPUTE,ha,e,r);ea(this,Qo)[e]=n}_marshalArgs(e,t,r){const i=this.__data,n=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:c,literal:u}=e[s];if(!u)if(l){const e=mo(o,t),n=Ea(i,r,e?t:o);c={path:e?t:o,value:n,base:e?bo(i,o):n}}else c=a?Ea(i,r,o):i[o];if(Us&&!this._overrideLegacyUndefined&&void 0===c&&e.length>1)return Jo;n[s]=c}return n}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==r;if(!i)for(let n in r.propertyEffects)this._createPropertyAccessor(n);if(t)if(r=Object.create(r),r.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;r.parent=t,t.lastChild=r,r.previousSibling=i,i?i.nextSibling=r:t.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(r)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),ka.push(this);let r=super._stampTemplate(e,t);if(ka.pop(),t.nodeList=r.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=r.firstChild;t;t=t.nextSibling)e.push(t)}return r.templateInfo=t,function(e,t){let{nodeList:r,nodeInfoList:i}=t;if(i.length)for(let n=0;n<i.length;n++){let t=i[n],s=r[n],o=t.bindings;if(o)for(let r=0;r<o.length;r++){let t=o[r];ya(s,t),ga(s,e,t)}s.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:r,nextSibling:i,parent:n}=t;r?r.nextSibling=i:n&&(n.firstChild=i),i?i.previousSibling=r:n&&(n.lastChild=r),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let o=0;o<s.length;o++){let e=s[o];uo(uo(e).parentNode).removeChild(e)}}static _parseTemplateNode(e,r,i){let n=t._parseTemplateNode.call(this,e,r,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,r);t&&(e.textContent=Ma(t)||" ",pa(this,r,i,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,r,i,n,s){let o=this._parseBindings(s,r);if(o){let t=n,s="property";Xo.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");let a=Ma(o);return a&&"attribute"==s&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(n=Mo(n)),pa(this,r,i,s,n,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,r,i,n,s)}static _parseTemplateNestedTemplate(e,r,i){let n=t._parseTemplateNestedTemplate.call(this,e,r,i);const s=e.parentNode,o=i.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;qs&&(a||l)&&(s.removeChild(e),(i=i.parentInfo).templateInfo=o,i.noted=!0,n=!1);let c=o.hostProps;if(Hs&&a)c&&(r.hostProps=Object.assign(r.hostProps||{},c),qs||(i.parentInfo.noted=!0));else{let e="{";for(let t in c){pa(this,r,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return n}static _parseBindings(e,t){let r,i=[],n=0;for(;null!==(r=xa.exec(e));){r.index>n&&i.push({literal:e.slice(n,r.index)});let s=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,c="",u=-1;"{"==s&&(u=a.indexOf("::"))>0&&(c=a.substring(u+2),a=a.substring(0,u),l=!0);let d=Ca(a),h=[];if(d){let{args:e,methodName:r}=d;for(let t=0;t<e.length;t++){let r=e[t];r.literal||h.push(r)}let i=t.dynamicFns;(i&&i[r]||d.static)&&(h.push(r),d.dynamicFn=!0)}else h.push(a);i.push({source:a,mode:s,negate:o,customEvent:l,signature:d,dependencies:h,event:c}),n=xa.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,r,i,n,s){let o;return o=t.signature?ba(e,r,i,0,t.signature):r!=t.source?bo(e,t.source):s&&ho(r)?bo(e,r):e.__data[r],t.negate&&(o=!o),o}}})),ka=[];const Oa=[];const Ra=Ys((e=>{const t=Ro(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const i=e[r];t[r]="function"===typeof i?{type:i}:i}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){e=this.prototype,Oa.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),La=window.ShadyCSS&&window.ShadyCSS.cssBuild,Fa=Ys((e=>{const t=Ra(Pa(e));function r(e,t,r,i){if(!La){const n=t.content.querySelectorAll("style"),s=lo(t),o=function(e){let t=no(e);return t?co(t):[]}(r),a=t.content.firstElementChild;for(let r=0;r<o.length;r++){let n=o[r];n.textContent=e._processStyleText(n.textContent,i),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<s.length;t++){let r=s[t],o=n[l];o!==r?(r=r.cloneNode(!0),o.parentNode.insertBefore(r,o)):l++,r.textContent=e._processStyleText(r.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r),Ws&&La&&Fs){const r=t.content.querySelectorAll("style");if(r){let t="";Array.from(r).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.5.2"}static _finalizeClass(){t._finalizeClass.call(this);const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"===typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Zs||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let s in e)t=this.prototype,r=s,i=e[s],n=e,i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):t._createComputedProperty(r,i.computed,n)),i.readOnly&&!t._hasReadOnlyEffect(r)?t._createReadOnlyProperty(r,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(r)?t._createReflectedProperty(r):!1===i.reflectToAttribute&&t._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),i.notify&&!t._hasNotifyEffect(r)?t._createNotifyingProperty(r):!1===i.notify&&t._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),i.observer&&t._createPropertyObserver(r,i.observer,n[i.observer]),t._addPropertyToAttributeMap(r);var t,r,i,n}static createObservers(e,t){const r=this.prototype;for(let i=0;i<e.length;i++)r._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"===typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Ds||js)&&(t=ro.import(e,"template"),Ds&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=Rs(e.url);else{const e=ro.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ns,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let i=t[r];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Os(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;r(this,t,e,i?ks(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=uo(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Vs&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=ks(this.importPath)),ks(e,t)}static _parseTemplateContent(e,r,i){return r.dynamicFns=r.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,r,i)}static _addTemplatePropertyEffect(e,r,i){return!zs||r in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,r,i)}}})),Na=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class $a{constructor(e,t){Za(e,t);const r=t.reduce(((t,r,i)=>t+Da(r)+e[i+1]),e[0]);this.value=r.toString()}toString(){return this.value}}function Da(e){if(e instanceof $a)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const ja=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];Za(e,r);const n=document.createElement("template");let s=r.reduce(((t,r,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof $a)return Da(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(r)+e[i+1]),e[0]);return Na&&(s=Na.createHTML(s)),n.innerHTML=s,n},Za=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},za=Fa(HTMLElement);let Va=0,Ua=0;const Ba=[];let Ga=!1;const qa={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Ha={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Wa={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Ka={run(e){Ga||(Ga=!0,queueMicrotask((()=>function(){Ga=!1;const e=Ba.length;for(let r=0;r<e;r++){const e=Ba[r];if(e)try{e()}catch(t){setTimeout((()=>{throw t}))}}Ba.splice(0,e),Ua+=e}()))),Ba.push(e);const t=Va;return Va+=1,t},cancel(e){const t=e-Ua;if(t>=0){if(!Ba[t])throw new Error(`invalid async handle: ${e}`);Ba[t]=null}}},Ja=new Set;class Ya{static debounce(e,t,r){return e instanceof Ya?e._cancelAsync():e=new Ya,e.setConfig(t,r),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Ja.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ja.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}function Qa(e){Ja.add(e)}function Xa(){const e=Boolean(Ja.size);return Ja.forEach((e=>{try{e.flush()}catch(t){setTimeout((()=>{throw t}))}})),e}const el=()=>{let e;do{e=Xa()}while(e)},tl=[];function rl(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.getAttribute("dir");t?e.setAttribute("dir",t):null!=r&&e.removeAttribute("dir")}function il(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=il();tl.forEach((t=>{rl(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const nl=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}get __isRTL(){return"rtl"===this.getAttribute("dir")}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),rl(this,il(),null))}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),"dir"!==e)return;const i=il(),n=r===i&&-1===tl.indexOf(this),s=!r&&t&&-1===tl.indexOf(this),o=r!==i&&t===i;n||s?(this.__subscribe(),rl(this,i,r)):o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=tl.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,r){("dir"!==r||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,r)}_attributeToProperty(e,t,r){"dir"!==e||t?super._attributeToProperty(e,t,r):this.dir=""}__subscribe(){tl.includes(this)||tl.push(this)}__unsubscribe(){tl.includes(this)&&tl.splice(tl.indexOf(this),1)}};function sl(e,t){return e.split(".").reduce(((e,t)=>e?e[t]:void 0),t)}function ol(e){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(e):e.querySelector("template")&&console.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}function al(e,t){return t?t.closest(e)||al(e,t.getRootNode().host):null}function ll(e){return e?new Set(e.split(" ")):new Set}function cl(e){return e?[...e].join(" "):""}function ul(e,t,r){const i=ll(e.getAttribute(t));i.add(r),e.setAttribute(t,cl(i))}function dl(e,t,r){const i=ll(e.getAttribute(t));i.delete(r),0!==i.size?e.setAttribute(t,cl(i)):e.removeAttribute(t)}function hl(e){return e.__cells||Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function pl(e,t){[...e.children].forEach(t)}function fl(e,t){hl(e).forEach(t),e.__detailsCell&&t(e.__detailsCell)}function ml(e,t,r){let i=1;e.forEach((e=>{i%10===0&&(i+=1),e._order=r+i*t,i+=1}))}function yl(e,t,r){switch(typeof r){case"boolean":e.toggleAttribute(t,r);break;case"string":e.setAttribute(t,r);break;default:e.removeAttribute(t)}}function gl(e,t,r){t||""===t?ul(e,"part",r):dl(e,"part",r)}function vl(e,t,r){e.forEach((e=>{gl(e,r,t)}))}function bl(e,t){const r=hl(e);Object.entries(t).forEach((t=>{let[i,n]=t;yl(e,i,n);const s=`${i}-row`;gl(e,n,s),vl(r,`${s}-cell`,n)}))}function _l(e,t){const r=hl(e);Object.entries(t).forEach((t=>{let[i,n]=t;const s=e.getAttribute(i);if(yl(e,i,n),s){const t=`${i}-${s}-row`;gl(e,!1,t),vl(r,`${t}-cell`,!1)}if(n){const t=`${i}-${n}-row`;gl(e,n,t),vl(r,`${t}-cell`,n)}}))}function wl(e,t,r,i,n){yl(e,t,r),n&&gl(e,!1,n),gl(e,r,i||`${t}-cell`)}class Sl{constructor(e,t){this.__host=e,this.__callback=t,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(e,{childList:!0}),this.__initialCallDebouncer=Ya.debounce(this.__initialCallDebouncer,Ka,(()=>this.__onMutation()))}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(e){this.__currentSlots.forEach((t=>{e?t.addEventListener("slotchange",this.__onMutation):t.removeEventListener("slotchange",this.__onMutation)}))}__onMutation(){const e=!this.__currentColumns;this.__currentColumns||=[];const t=Sl.getColumns(this.__host),r=t.filter((e=>!this.__currentColumns.includes(e))),i=this.__currentColumns.filter((e=>!t.includes(e))),n=this.__currentColumns.some(((e,r)=>e!==t[r]));this.__currentColumns=t,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter((e=>e instanceof HTMLSlotElement)),this.__toggleSlotChangeListeners(!0);(e||r.length||i.length||n)&&this.__callback(r,i)}static __isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}static getColumns(e){const t=[],r=e._isColumnElement||Sl.__isColumnElement;return[...e.children].forEach((e=>{r(e)?t.push(e):e instanceof HTMLSlotElement&&[...e.assignedElements({flatten:!0})].filter((e=>r(e))).forEach((e=>t.push(e)))})),t}}const xl=e=>class extends e{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>{this._grid&&this._allCells.forEach((e=>{e._content.parentNode||this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._grid||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}ready(){super.ready(),ol(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>{t.style.flexGrow=e}))}_orderChanged(e){this._allCells.forEach((t=>{t.style.order=e}))}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>{t.style.width=e}))}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>{wl(t,"frozen",e)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||wl(t,"frozen-to-end",e)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>{wl(t,"last-frozen",e)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||wl(t,"first-frozen-to-end",e)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach((t=>{t.setAttribute("role",e?"rowheader":"gridcell")}))}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,(e=>e.toUpperCase()))}_reorderStatusChanged(e){const t=this.__previousReorderStatus,r=t?`reorder-${t}-cell`:"",i=`reorder-${e}-cell`;this._allCells.forEach((t=>{wl(t,"reorder-status",e,i,r)})),this.__previousReorderStatus=e}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const r=t.querySelector('[part~="resize-handle"]');if(r&&t.removeChild(r),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e){if(void 0===e||void 0===this._grid)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((r=>{r._content.style.textAlign=e,getComputedStyle(r._content).textAlign!==e&&(r._content.style.textAlign=t)}))}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!==!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Ya.debounce(this._grid._debouncerHiddenChanged,Ha,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,r){const i=r&&r.item&&!t.parentElement.hidden;if(!(i||e===this._headerRenderer||e===this._footerRenderer))return;const n=[t._content,this];i&&n.push(r),e.apply(this,n)}__renderCellsContent(e,t){!this.hidden&&this._grid&&t.forEach((t=>{if(!t.parentElement)return;const r=this._grid.__getRowModel(t.parentElement);e&&(t._renderer!==e&&this._clearCellContent(t),t._renderer=e,this._runRenderer(e,t,r))}))}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,r,i){[{cell:e,partName:r},{cell:t,partName:i}].forEach((e=>{let{cell:t,partName:r}=e;if(t){const e=t.__customParts||[];t.part.remove(...e),t.__customParts=r?r.trim().split(" "):[],t.part.add(...t.__customParts)}}))}_renderBodyCellsContent(e,t){t&&e&&this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,r){let{item:i}=r;this.path&&this.__setTextContent(e,sl(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(void 0!==t&&null!==t?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class Ml extends((e=>class extends(xl(nl(e))){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}})(za)){static get is(){return"vaadin-grid-column"}}Qi(Ml);const Cl=Ys((e=>"function"===typeof e.prototype.addController?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}})),Al=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,El=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Tl(e,t){if("function"!==typeof e)return;const r=Al.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const Il=function(e,t){if(window.Vaadin.developmentMode)return Tl(e,t)};function Pl(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(El?!(El&&Object.keys(El).map((e=>El[e])).filter((e=>e.productionMode)).length>0):!Tl((function(){return!0})))}catch(e){return!1}}());let kl;Gs=!1,window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations||(window.Vaadin.registrations=[]),window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={}),window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Il(Pl)};const Ol=new Set,Rl=e=>class extends(nl(e)){static finalize(){super.finalize();const{is:e}=this;e&&!Ol.has(e)&&(window.Vaadin.registrations.push(this),Ol.add(e),window.Vaadin.developmentModeCallback&&(kl=Ya.debounce(kl,Wa,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Qa(kl)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};let Ll=!1;function Fl(){return Ll}function Nl(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const r=window.getComputedStyle(e);return"hidden"===r.visibility||"none"===r.display}function $l(e){return null===e.offsetParent&&0===e.clientWidth&&0===e.clientHeight||Nl(e)}function Dl(e){return!e.matches('[tabindex="-1"]')&&(e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}window.addEventListener("keydown",(()=>{Ll=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Ll=!1}),{capture:!0});const jl=Ys((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Zl=e=>class extends(jl(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}},zl=e=>e.test(navigator.userAgent),Vl=e=>e.test(navigator.platform),Ul=zl(/Android/u),Bl=zl(/Chrome/u)&&/Google Inc/u.test(navigator.vendor);const Gl=zl(/Firefox/u),ql=Vl(/^iPad/u)||Vl(/^Mac/u)&&navigator.maxTouchPoints>1,Hl=Vl(/^iPhone/u)||ql,Wl=zl(/^((?!chrome|android).)*safari/iu),Kl=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Jl{constructor(e,t){this.slot=e,this.callback=t,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask((()=>{this.flush()})))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const e=this.slot.assignedNodes({flatten:!0});let t=[];const r=[],i=[];e.length&&(t=e.filter((e=>!this._storedNodes.includes(e)))),this._storedNodes.length&&this._storedNodes.forEach(((t,n)=>{const s=e.indexOf(t);-1===s?r.push(t):s!==n&&i.push(t)})),(t.length||r.length||i.length)&&this.callback({addedNodes:t,currentNodes:e,movedNodes:i,removedNodes:r}),this._storedNodes=e}}let Yl=0;class Ql extends EventTarget{static generateId(e){return`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default"}-${e.localName}-${Yl++}`}constructor(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super();const{initializer:n,multiple:s,observe:o,useUniqueId:a,uniqueIdPrefix:l}=i;this.host=e,this.slotName=t,this.tagName=r,this.observe="boolean"!==typeof o||o,this.multiple="boolean"===typeof s&&s,this.slotInitializer=n,s&&(this.nodes=[]),a&&(this.defaultId=this.constructor.generateId(e,l||t))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let e=this.getSlotChild();e?(this.node=e,this.initAddedNode(e)):(e=this.attachDefaultNode(),this.initNode(e))}initMultiple(){const e=this.getSlotChildren();if(0===e.length){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=e,e.forEach((e=>{this.initAddedNode(e)}))}attachDefaultNode(){const{host:e,slotName:t,tagName:r}=this;let i=this.defaultNode;return!i&&r&&(i=document.createElement(r),i instanceof Element&&(""!==t&&i.setAttribute("slot",t),this.defaultNode=i)),i&&(this.node=i,e.appendChild(i)),i}getSlotChildren(){const{slotName:e}=this;return Array.from(this.host.childNodes).filter((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}getSlotChild(){return this.getSlotChildren()[0]}initNode(e){const{slotInitializer:t}=this;t&&t(e,this.host)}initCustomNode(e){}teardownNode(e){}initAddedNode(e){e!==this.defaultNode&&(this.initCustomNode(e),this.initNode(e))}observeSlot(){const{slotName:e}=this,t=""===e?"slot:not([name])":`slot[name=${e}]`,r=this.host.shadowRoot.querySelector(t);this.__slotObserver=new Jl(r,(e=>{let{addedNodes:t,removedNodes:r}=e;const i=this.multiple?this.nodes:[this.node],n=t.filter((e=>!function(e){return e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim()}(e)&&!i.includes(e)));r.length&&(this.nodes=i.filter((e=>!r.includes(e))),r.forEach((e=>{this.teardownNode(e)}))),n&&n.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...i,...n].filter((e=>e!==this.defaultNode)),n.forEach((e=>{this.initAddedNode(e)}))):(this.node&&this.node.remove(),this.node=n[0],this.initAddedNode(this.node)))}))}}class Xl extends Ql{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,void 0!==this.ariaTarget&&(e.ariaTarget=this.ariaTarget),void 0!==this.context&&(e.context=this.context),void 0!==this.manual&&(e.manual=this.manual),void 0!==this.opened&&(e.opened=this.opened),void 0!==this.position&&(e._position=this.position),void 0!==this.shouldShow&&(e.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(e){this.ariaTarget=e;const t=this.node;t&&(t.ariaTarget=e)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const ec=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),tc=ec&&ec[1]>=8,rc={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const e=this._virtualCount;return Math.max(0,e-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(e){this._physicalCountVal=e},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems(((e,r)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return r}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems(((r,i)=>{t<this._scrollBottom&&(e=i),t+=this._getPhysicalSizeIncrement(r)})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const r=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(r);r?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,r?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ka)}},_getReusables(e){let t,r,i;const n=[],s=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let c=this._physicalTop+this._scrollOffset;const u=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,h=this._scrollBottom;for(e?(t=this._physicalStart,r=d-c):(t=this._physicalEnd,r=u-h);i=this._getPhysicalSizeIncrement(t),r-=i,!(n.length>=l||r<=s);)if(e){if(a+n.length+1>=this._virtualCount)break;if(c+i>=d-this._scrollOffset)break;n.push(t),c+=i,t=(t+1)%l}else{if(o-n.length<=0)break;if(c+this._physicalSize-i<=h)break;n.push(t),c-=i,t=0===t?l-1:t-1}return{indexes:n,physicalTop:c-this._scrollOffset}},_update(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let r=0;r<t;r++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-e)/t,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),Wa):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),Ka))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Ha))},_iterateItems(e,t){let r,i,n,s;if(2===arguments.length&&t){for(s=0;s<t.length;s++)if(r=t[s],i=this._computeVidx(r),null!=(n=e.call(this,r,i)))return n}else{for(r=this._physicalStart,i=this._virtualStart;r<this._physicalCount;r++,i++)if(null!=(n=e.call(this,r,i)))return n;for(r=0;r<this._physicalStart;r++,i++)if(null!=(n=e.call(this,r,i)))return n}},_computeVidx(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_positionItems(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((t=>{this.translate3d(0,`${e}px`,0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement(e){return this._physicalSizes[e]},_adjustScrollPosition(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop-=e;const t=this._scrollPosition;!tc&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize(e){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(e||0===this._scrollHeight||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(e){if("number"!==typeof e||e<0||e>this.items.length-1)return;if(el(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,r=this._virtualStart,i=0;const n=this._hiddenContentSize;for(;r<e&&i<=n;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,r+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),Ha)},_isIndexRendered(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:(e,t,r)=>Math.min(r,Math.max(t,e)),_debounce(e,t,r){this._debouncers||(this._debouncers={}),this._debouncers[e]=Ya.debounce(this._debouncers[e],r,t.bind(this)),Qa(this._debouncers[e])}},ic=1e3;class nc{constructor(e){let{createElements:t,updateElement:r,scrollTarget:i,scrollContainer:n,elementsContainer:s,reorderElements:o}=e;this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=r,this.scrollTarget=i,this.scrollContainer=n,this.elementsContainer=s||n,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.scrollTarget.addEventListener("virtualizer-element-focused",(e=>this.__onElementFocused(e))),this.elementsContainer.addEventListener("focusin",(()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))})),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>{this.__mouseDown=!0})),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some((e=>e.__virtualizerPlaceholder))}scrollToIndex(e){if("number"!==typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let r=Math.floor(e/this.size*this._virtualCount);this._virtualCount-r<t?(r=this._virtualCount-(this.size-e),this._vidxOffset=this._maxVirtualIndexOffset):r<t?e<ic?(r=e,this._vidxOffset=0):(r=ic,this._vidxOffset=e-r):this._vidxOffset=e-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=e)}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),el(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.size-1;const r=[];this.__getVisibleElements().forEach((i=>{i.__virtualIndex>=e&&i.__virtualIndex<=t&&(this.__updateElement(i,i.__virtualIndex,!0),r.push(i))})),this.__afterElementsUpdated(r)}_updateMetrics(e){el();let t=0,r=0;const i=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems(((e,i)=>{r+=this._physicalSizes[e],this._physicalSizes[e]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[e])),t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-r,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((n*i+t)/this._physicalAverageCount))}__getBorderBoxHeight(e){const t=getComputedStyle(e),r=parseFloat(t.height)||0;if("border-box"===t.boxSizing)return r;return r+(parseFloat(t.paddingBottom)||0)+(parseFloat(t.paddingTop)||0)+(parseFloat(t.borderBottomWidth)||0)+(parseFloat(t.borderTopWidth)||0)}__updateElement(e,t,r){e.__virtualizerPlaceholder&&(e.style.paddingTop="",e.style.opacity="",e.__virtualizerPlaceholder=!1),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!r||(this.updateElement(e,t),e.__lastUpdatedIndex=t)}__afterElementsUpdated(e){e.forEach((e=>{const t=e.offsetHeight;if(0===t)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=Ya.debounce(this.__placeholderClearDebouncer,Ha,(()=>this._resizeHandler()));else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const e=this.__elementHeightQueue.filter((e=>void 0!==e));this.__placeholderHeight=Math.round(e.reduce(((e,t)=>e+t),0)/e.length)}})),void 0===this.__pendingScrollToIndex||this.__hasPlaceholders()||this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){if(e===this.size)return;let t,r;if(this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0,e>0&&(t=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(t)),this.__size=e,this._itemsChanged({path:"items"}),el(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);const i=this.__getIndexScrollOffset(t);void 0!==r&&void 0!==i&&(this._scrollTop+=r-i)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this._resizeHandler(),el(),this._debounce("_update",this._update,Ka)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),r=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",r.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(r),t}_assignModels(e){const t=[];this._iterateItems(((e,r)=>{const i=this._physicalItems[e];i.hidden=r>=this.size,i.hidden?delete i.__lastUpdatedIndex:(i.__virtualIndex=r+(this._vidxOffset||0),this.__updateElement(i,i.__virtualIndex),t.push(i))}),e),this.__afterElementsUpdated(t)}_isClientFull(){return setTimeout((()=>{this.__clientFull=!0})),this.__clientFull||super._isClientFull()}translate3d(e,t,r,i){i.style.transform=`translateY(${t})`}toggleScrollListener(){}__getFocusedElement(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.__getVisibleElements()).find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))}__nextFocusableSiblingMissing(e,t){return t.indexOf(e)===t.length-1&&this.size>e.__virtualIndex+1}__previousFocusableSiblingMissing(e,t){return 0===t.indexOf(e)&&e.__virtualIndex>0}__onElementFocused(e){if(!this.reorderElements)return;const t=e.detail.element;if(!t)return;const r=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(t,r)||this.__nextFocusableSiblingMissing(t,r))&&this.flush();const i=this.__getVisibleElements();this.__nextFocusableSiblingMissing(t,i)?(this._scrollTop+=Math.ceil(t.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(t,i)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(t.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(0===this.scrollTarget.offsetHeight)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const t=e>=0,r=this._getReusables(!t);r.indexes.length&&(this._physicalTop=r.physicalTop,t?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}e&&(this.__fixInvalidItemPositioningDebouncer=Ya.debounce(this.__fixInvalidItemPositioningDebouncer,qa.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),(()=>this.__fixInvalidItemPositioning()))),this.reorderElements&&(this.__scrollReorderDebouncer=Ya.debounce(this.__scrollReorderDebouncer,qa.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop,0===this._scrollTop&&0!==this.firstVisibleIndex&&Math.abs(e)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const e=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,r=0===this.adjustedFirstVisibleIndex,i=this.adjustedLastVisibleIndex===this.size-1;if(e&&!r||t&&!i){const e=t,r=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(e?-1:1),this._scrollHandler(),this._ratio=r}}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Ya.debounce(this.__debouncerWheelAnimationFrame,Ha,(()=>{this._wheelAnimationFrame=!1}));const r=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Ya.debounce(this._debouncerIgnoreNewWheel,qa.after(this.timeouts.IGNORE_WHEEL),(()=>{this._ignoreNewWheel=!1}))):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(e,t,r){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,r)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,r):void 0))}_canScroll(e,t,r){return r>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||r<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_increasePoolIfNeeded(e){if(this._physicalCount>2&&e){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(e,Math.min(100,t)))}else super._increasePoolIfNeeded(e)}get _optPhysicalSize(){const e=super._optPhysicalSize;return e<=0||this.__hasPlaceholders()?e:e+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(0===this._physicalCount)return 0;const e=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),t=Math.max(...this._physicalSizes);return t>Math.min(...this._physicalSizes)?Math.max(0,t-e):0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),r=this.__getFocusedElement(t)||t[0];if(!r)return;const i=r.__virtualIndex-e,n=t.indexOf(r)-i;if(n>0)for(let s=0;s<n;s++)this.elementsContainer.appendChild(t[s]);else if(n<0)for(let s=t.length+n;s<t.length;s++)this.elementsContainer.insertBefore(t[s],t[0]);if(Wl){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>{this.scrollTarget.style.transform=e}))}}_adjustVirtualIndexOffset(e){const t=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(e*t)}else{const e=this._vidxOffset,r=ic,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=t,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<t&&(this._vidxOffset+=Math.min(t-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(nc.prototype,rc);class sc{constructor(e){this.__adapter=new nc(e)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.size-1;this.__adapter.update(e,t)}flush(){this.__adapter.flush()}}const oc=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer||e.path&&null!==e.header||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const r=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",r&&r.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){pl(this.$.header,((e,t)=>{e.setAttribute("aria-rowindex",t+1)}))}_a11yUpdateFooterRows(){pl(this.$.footer,((e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)}))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),fl(e,(e=>{e.setAttribute("aria-selected",Boolean(t))}))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){fl(e,(e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}}))}},ac=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,r=t?t.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_shouldPreventCellActivationOnClick(e){const{cell:t}=this._getGridEventLocation(e);return e.defaultPrevented||!t||t.getAttribute("part").includes("details-cell")||t===this.$.emptystatecell||t._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;const{cell:t}=this._getGridEventLocation(e);t&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_isFocusable(e){return(e=>e.offsetParent&&!e.part.contains("body-cell")&&Dl(e)&&"hidden"!==getComputedStyle(e).visibility)(e)}};function lc(e,t){return e.split(".").reduce(((e,t)=>e[t]),t)}function cc(e,t,r){if(0===r.length)return!1;let i=!0;return e.forEach((e=>{let{path:n}=e;if(!n||-1===n.indexOf("."))return;void 0===lc(n.replace(/\.[^.]*$/u,""),r[0])&&(console.warn(`Path "${n}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)})),i}function uc(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}function dc(e,t){return(e=uc(e))<(t=uc(t))?-1:e>t?1:0}const hc=e=>(t,r)=>{let i=e?[...e]:[];t.filters&&cc(t.filters,"filtering",i)&&(i=function(e,t){return e.filter((e=>t.every((t=>{const r=uc(lc(t.path,e)),i=uc(t.value).toString().toLowerCase();return r.toString().toLowerCase().includes(i)}))))}(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&cc(t.sortOrders,"sorting",i)&&(i=function(e,t){return e.sort(((e,r)=>t.map((t=>"asc"===t.direction?dc(lc(t.path,e),lc(t.path,r)):"desc"===t.direction?dc(lc(t.path,r),lc(t.path,e)):0)).reduce(((e,t)=>0!==e?e:t),0)))}(i,t.sortOrders));const n=Math.min(i.length,t.pageSize),s=t.page*n,o=s+n;r(i.slice(s,o),i.length)},pc=e=>class extends e{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){const t=hc(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,t,r){r&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?this.clearCache():this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}},fc="string"===typeof document.head.style.touchAction,mc="__polymerGestures",yc="__polymerGesturesHandled",gc="__polymerGesturesTouchAction",vc=["mousedown","mousemove","mouseup","click"],bc=[0,1,4,2],_c=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function wc(e){return vc.indexOf(e)>-1}let Sc=!1;function xc(e){wc(e)}!function(){try{const e=Object.defineProperty({},"passive",{get(){Sc=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();const Mc=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Cc={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ac(e){const t=e.type;if(!wc(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!_c&&(t=bc[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}const Ec={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Tc(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function Ic(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const Pc=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],kc={},Oc=[];function Rc(e){const t=Pc(e);return t.length>0?t[0]:e.target}function Lc(e){const t=e.type,r=e.currentTarget[mc];if(!r)return;const i=r[t];if(!i)return;if(!e[yc]&&(e[yc]={},t.startsWith("touch"))){const r=e.changedTouches[0];if("touchstart"===t&&1===e.touches.length&&(Ec.touch.id=r.identifier),Ec.touch.id!==r.identifier)return;fc||"touchstart"!==t&&"touchmove"!==t||function(e){const t=e.changedTouches[0],r=e.type;if("touchstart"===r)Ec.touch.x=t.clientX,Ec.touch.y=t.clientY,Ec.touch.scrollDecided=!1;else if("touchmove"===r){if(Ec.touch.scrollDecided)return;Ec.touch.scrollDecided=!0;const r=function(e){let t="auto";const r=Pc(e);for(let i,n=0;n<r.length;n++)if(i=r[n],i[gc]){t=i[gc];break}return t}(e);let i=!1;const n=Math.abs(Ec.touch.x-t.clientX),s=Math.abs(Ec.touch.y-t.clientY);e.cancelable&&("none"===r?i=!0:"pan-x"===r?i=s>n:"pan-y"===r&&(i=n>s)),i?e.preventDefault():Dc("track")}}(e)}const n=e[yc];if(!n.skip){for(let t,r=0;r<Oc.length;r++)t=Oc[r],i[t.name]&&!n[t.name]&&t.flow&&t.flow.start.indexOf(e.type)>-1&&t.reset&&t.reset();for(let r,s=0;s<Oc.length;s++)r=Oc[s],i[r.name]&&!n[r.name]&&(n[r.name]=!0,r[t](e))}}function Fc(e,t,r){return!!kc[t]&&(function(e,t,r){const i=kc[t],n=i.deps,s=i.name;let o=e[mc];o||(e[mc]=o={});for(let a,l,c=0;c<n.length;c++)a=n[c],Mc&&wc(a)&&"click"!==a||(l=o[a],l||(o[a]=l={_count:0}),0===l._count&&e.addEventListener(a,Lc,xc(a)),l[s]=(l[s]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,r),i.touchAction&&function(e,t){fc&&e instanceof HTMLElement&&Ka.run((()=>{e.style.touchAction=t}));e[gc]=t}(e,i.touchAction)}(e,t,r),!0)}function Nc(e){Oc.push(e),e.emits.forEach((t=>{kc[t]=e}))}function $c(e,t,r){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,e.dispatchEvent(i),i.defaultPrevented){const e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Dc(e){const t=function(e){for(let t,r=0;r<Oc.length;r++){t=Oc[r];for(let r,i=0;i<t.emits.length;i++)if(r=t.emits[i],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function jc(e,t,r,i){t&&$c(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:e=>Dc(e)})}function Zc(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const i=Math.abs(e.x-t),n=Math.abs(e.y-r);return i>=5||n>=5}function zc(e,t,r){if(!t)return;const i=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],s=n.x-e.x,o=n.y-e.y;let a,l=0;i&&(a=n.x-i.x,l=n.y-i.y),$c(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:s,dy:o,ddx:a,ddy:l,sourceEvent:r,hover:()=>function(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const n=i;if(i=i.shadowRoot.elementFromPoint(e,t),n===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)})}function Vc(e,t,r){const i=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=Rc(r||t);!s||Cc[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(n)||i<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;const t=Rc(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),i=e.pageX,n=e.pageY;return!(i>=r.left&&i<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(t))&&(e.prevent||$c(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}Nc({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ic(this.info)},mousedown(e){if(!Ac(e))return;const t=Rc(e),r=this;Tc(this.info,(e=>{Ac(e)||(jc("up",t,e),Ic(r.info))}),(e=>{Ac(e)&&jc("up",t,e),Ic(r.info)})),jc("down",t,e)},touchstart(e){jc("down",Rc(e),e.changedTouches[0],e)},touchend(e){jc("up",Rc(e),e.changedTouches[0],e)}}),Nc({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ic(this.info)},mousedown(e){if(!Ac(e))return;const t=Rc(e),r=this,i=e=>{const i=e.clientX,n=e.clientY;Zc(r.info,i,n)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&Dc("tap"),r.info.addMove({x:i,y:n}),Ac(e)||(r.info.state="end",Ic(r.info)),t&&zc(r.info,t,e),r.info.started=!0)};Tc(this.info,i,(e=>{r.info.started&&i(e),Ic(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Rc(e),r=e.changedTouches[0],i=r.clientX,n=r.clientY;Zc(this.info,i,n)&&("start"===this.info.state&&Dc("tap"),this.info.addMove({x:i,y:n}),zc(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend(e){const t=Rc(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),zc(this.info,t,r))}}),Nc({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){Ac(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){Ac(e)&&Vc(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){Vc(this.info,e.changedTouches[0],e)}});const Uc=e=>class extends e{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),Fc(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Kl||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),r=t[t.indexOf(this.$.header)-2];if(!r||!r._content)return;if(r._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some((e=>e.hasAttribute&&e.hasAttribute("draggable"))))return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(r&&r.getAttribute("part").includes("header-cell")){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const r=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)){const e=this._columnTree.findIndex((e=>e.includes(r))),t=this._getColumnsInOrder(e),i=t.indexOf(this._draggedColumn),n=t.indexOf(r),s=i<n?1:-1;for(let r=i;r!==n;r+=s)this._swapColumnOrders(this._draggedColumn,t[r+s])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._columnTree.length-1;return this._columnTree[e].filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(r)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const r=this._reorderGhost.getBoundingClientRect(),i=e-r.width/2,n=t-r.height/2,s=parseInt(this._reorderGhost._left||0),o=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=s-(r.left-i),this._reorderGhost._top=o-(r.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>{t.style[e]=r[e]})),t}_updateOrders(e){void 0!==e&&(e[0].forEach((e=>{e._order=0})),ml(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){pl(e.parentNode,(r=>{/column/u.test(r.localName)&&this._isSwapAllowed(r,e)&&(r._reorderStatus=t)}))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout((()=>this._autoScroller()),10)}_isSwapAllowed(e,t){if(e&&t){const r=e!==t,i=e.parentElement===t.parentElement,n=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return r&&i&&n}}_isSwappableByPosition(e,t){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find((t=>e.contains(t._column))),i=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=r.getBoundingClientRect();return n.left>i.left?t>n.right-i.width:t<n.left+i.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let r=e._column;for(;r.parentElement!==t.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===t.parentElement?r:e._column}}},Bc=e=>class extends e{ready(){super.ready();const e=this.$.scroller;Fc(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let r=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===r.localName;)r=r._childColumns.slice(0).sort(((e,t)=>e._order-t._order)).filter((e=>!e.hidden)).pop();const i=this.__isRTL,n=e.detail.x,s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),o=s.find((e=>e._column===r));if(o.offsetWidth){const e=getComputedStyle(o._content),t=10+parseInt(e.paddingLeft)+parseInt(e.paddingRight)+parseInt(e.borderLeftWidth)+parseInt(e.borderRightWidth)+parseInt(e.marginLeft)+parseInt(e.marginRight);let s;const a=o.offsetWidth,l=o.getBoundingClientRect();s=o.hasAttribute("frozen-to-end")?a+(i?n-l.right:l.left-n):a+(i?l.left-n:n-l.right),r.width=`${Math.max(t,s)}px`,r.flexGrow=0}s.sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,r)=>{t<r.indexOf(o)&&(e._column.width=`${e.offsetWidth}px`,e._column.flexGrow=0)}));const a=this._frozenToEndCells[0];if(a&&this.$.table.scrollWidth>this.$.table.offsetWidth){const e=a.getBoundingClientRect(),t=n-(i?e.right:e.left);(i&&t<=0||!i&&t>=0)&&(this.$.table.scrollLeft+=t)}"end"===e.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}};function Gc(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=t;for(const n of e.subCaches){const e=n.parentCacheIndex;if(i<=e)break;if(i<=e+n.flatSize)return Gc(n,i-e-1,r+1);i-=n.flatSize}return{cache:e,item:e.items[i],index:i,page:Math.floor(i/e.pageSize),level:r}}function qc(e,t,r){let{getItemId:i}=e,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;for(let o=0;o<t.items.length;o++){const e=t.items[o];if(e&&i(e)===i(r))return{cache:t,level:n,item:e,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:s+t.getFlatIndex(o)}}for(const o of t.subCaches){const e=qc({getItemId:i},o,r,n+1,s+t.getFlatIndex(o.parentCacheIndex)+1);if(e)return e}}function Hc(e,t){let[r,...i]=t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;r===1/0&&(r=e.size-1);const s=e.getFlatIndex(r),o=e.getSubCache(r);return o&&o.flatSize>0&&i.length?Hc(o,i,n+s+1):n+s}class Wc{context;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__size=0;__flatSize=0;constructor(e,t,r,i,n){this.context=e,this.pageSize=t,this.size=r,this.parentCache=i,this.parentCacheIndex=n,this.__flatSize=r||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0||this.subCaches.some((e=>e.isLoading))}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(e){if(this.__size!==e){if(this.__size=e,void 0!==this.context.placeholder){this.items.length=e||0;for(let t=0;t<e;t++)this.items[t]||=this.context.placeholder}Object.keys(this.pendingRequests).forEach((e=>{parseInt(e)*this.pageSize>=this.size&&delete this.pendingRequests[e]}))}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce(((e,t)=>(t.recalculateFlatSize(),e+t.flatSize)),0):0}setPage(e,t){const r=e*this.pageSize;t.forEach(((e,t)=>{const i=r+t;(void 0===this.size||i<this.size)&&(this.items[i]=e)}))}getSubCache(e){return this.__subCacheByIndex[e]}removeSubCache(e){delete this.__subCacheByIndex[e]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(e){const t=new Wc(this.context,this.pageSize,0,this,e);return this.__subCacheByIndex[e]=t,t}getFlatIndex(e){const t=Math.max(0,Math.min(this.size-1,e));return this.subCaches.reduce(((e,r)=>{const i=r.parentCacheIndex;return t>i?e+r.flatSize:e}),t)}getItemForIndex(e){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:t}=Gc(this,e);return t}getCacheAndIndex(e){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:t,index:r}=Gc(this,e);return{cache:t,scaledIndex:r}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(e){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(e)){const t=this.createSubCache(e);this.context.__controller.__loadCachePage(t,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}class Kc extends EventTarget{host;dataProvider;dataProviderParams;pageSize;isExpanded;getItemId;rootCache;placeholder;isPlaceholder;constructor(e,t){let{size:r,pageSize:i,isExpanded:n,getItemId:s,isPlaceholder:o,placeholder:a,dataProvider:l,dataProviderParams:c}=t;super(),this.host=e,this.pageSize=i,this.getItemId=s,this.isExpanded=n,this.placeholder=a,this.isPlaceholder=o,this.dataProvider=l,this.dataProviderParams=c,this.rootCache=this.__createRootCache(r)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return Gc(this.rootCache,e)}getItemContext(e){return qc({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return Hc(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:t,page:r,item:i}=this.getFlatIndexContext(e);this.__isItemLoaded(i)||this.__loadCachePage(t,r)}ensureFlatIndexHierarchy(e){const{cache:t,item:r,index:i}=this.getFlatIndexContext(e);if(this.__isItemLoaded(r)&&this.isExpanded(r)&&!t.getSubCache(i)){const e=t.createSubCache(i);this.__loadCachePage(e,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new Wc(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,t){if(!this.dataProvider||e.pendingRequests[t])return;let r={page:t,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(r={...r,...this.dataProviderParams()});const i=(n,s)=>{e.pendingRequests[t]===i&&(void 0!==s?e.size=s:r.parentItem&&(e.size=n.length),e.setPage(t,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[t],this.dispatchEvent(new CustomEvent("page-loaded")))};e.pendingRequests[t]=i,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(r,i)}__isItemLoaded(e){return this.isPlaceholder?!this.isPlaceholder(e):this.placeholder?e!==this.placeholder:!!e}}const Jc=e=>class extends e{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Kc(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){(t||"children"!==e)&&this.requestContentUpdate()}_getItem(e,t){t.index=e;const{item:r}=this._dataProviderController.getFlatIndexContext(e);r?(this.__updateLoading(t,!1),this._updateItem(t,r),this._isExpanded(r)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const r=hl(e);yl(e,"loading",t),vl(r,"loading-row-cell",t),t&&(this._generateCellClassNames(e),this._generateCellPartNames(e))}getItemId(e){return this.itemIdPath?sl(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const r=t||[],i=new Set;return r.forEach((e=>{i.add(this.getItemId(e))})),i}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter((t=>!this._itemsEqual(t,e))))}_getIndexLevel(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldUpdateAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach((e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)})),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=Ya.debounce(this._debouncerApplyCachedData,qa.after(0),(()=>{this._setLoading(!1);const e=this._shouldUpdateAllRenderedRowsAfterPageLoad;this._shouldUpdateAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach((t=>{const{item:r}=this._dataProviderController.getFlatIndexContext(t.index);(r||e)&&this._getItem(t.index,t)})),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()})),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=Ya.debounce(this.__clearCacheDebouncer,Ka,(()=>this.clearCache()))}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),this.__virtualizer&&this.__virtualizer.size||this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._flatSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),void 0!==t&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Ya.debounce(this._debouncerCheckSize,qa.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let r=-1;return t.forEach(((t,i)=>{this._itemsEqual(t,e)&&(r=i)})),r}scrollToIndex(){let e;for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];for(;e!==(e=this._dataProviderController.getFlatIndexByPath(r));)this._scrollToFlatIndex(e);!this._dataProviderController.isLoading()&&this.clientHeight||(this.__pendingScrollToIndexes=r)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}},Yc="between",Qc="on-top-or-between",Xc="on-grid",eu="on-top",tu="above",ru="below",iu="empty",nu=!("draggable"in document.createElement("div")),su=e=>class extends e{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const r=t.getBoundingClientRect();nu?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-r.left,e.clientY-r.top);let i=[t];this._isSelected(t._item)&&(i=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),this.__draggedItems=i.map((e=>e._item)),e.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),bl(t,{dragstart:i.length>1?`${i.length}`:""}),this.style.setProperty("--_grid-drag-start-x",e.clientX-r.left+20+"px"),this.style.setProperty("--_grid-drag-start-y",e.clientY-r.top+10+"px"),requestAnimationFrame((()=>{bl(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()}));const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(t,r)=>e.dataTransfer.setData(t,r),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().find((e=>"tr"===e.localName));if(this._flatSize&&this.dropMode!==Xc)if(t&&t.parentNode===this.$.items){const r=t.getBoundingClientRect();if(this._dropLocation=eu,this.dropMode===Yc){const t=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=t?tu:ru}else this.dropMode===Qc&&(e.clientY-r.top<r.height/3?this._dropLocation=tu:e.clientY-r.top>r.height/3*2&&(this._dropLocation=ru))}else{if(t)return;if(this.dropMode!==Yc&&this.dropMode!==Qc)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=ru}else this._dropLocation=iu;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===iu?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&_l(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)&&this.$.items.offsetHeight>2e4){const e=this.$.items.style.maxHeight,t=this.$.table.style.overflow;this.$.items.style.maxHeight="0",this.$.table.style.overflow="hidden",requestAnimationFrame((()=>{this.$.items.style.maxHeight=e,this.$.table.style.overflow=t}))}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,i=t-e+this.__dndAutoScrollThreshold,n=e-r+this.__dndAutoScrollThreshold;let s=0;if(n>0?s=2*n:i>0&&(s=2*-i),s){const e=this.$.table.scrollTop;this.$.table.scrollTop+=s;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>{this.__dndAutoScrolling=!1}),20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((r=>{const i=r.getBoundingClientRect();return i.bottom>e&&i.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),pl(this.$.items,(e=>{_l(e,{dragover:null})}))}__updateDragSourceParts(e,t){bl(e,{"drag-source":this.__draggedItems.includes(t.item)})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){pl(this.$.items,(e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const r=this.loading||e.hasAttribute("loading"),i=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(t),n=!this.dropMode||r||this.dropFilter&&!this.dropFilter(t);fl(e,(e=>{i?e._content.removeAttribute("draggable"):e._content.setAttribute("draggable",!0)})),bl(e,{"drag-disabled":!!i,"drop-disabled":!!n})}};function ou(e,t){if(!e||!t||e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]instanceof Array&&t[r]instanceof Array){if(!ou(e[r],t[r]))return!1}else if(e[r]!==t[r])return!1;return!0}const au=e=>class extends e{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some((e=>"vaadin-grid-column-group"===e.localName))}_getChildColumns(e){return Sl.getColumns(e)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=Sl.getColumns(this),t=[e];let r=e;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),t.push(r);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=Ya.debounce(this.__updateColumnTreeDebouncer,Ka,(()=>this._updateColumnTree()))}_updateColumnTree(){const e=this._getColumnTree();ou(e,this._columnTree)||(e.forEach((e=>{e.forEach((e=>{e.performUpdate&&e.performUpdate()}))})),this._columnTree=e)}_addNodeObserver(){this._observer=new Sl(this,((e,t)=>{const r=t.flatMap((e=>e._allCells)),i=e=>r.filter((t=>t&&t._content.contains(e))).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=Ya.debounce(this._debouncerCheckImports,qa.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,r)=>{wl(e,"first-column",0===t),wl(e,"last-column",t===r.length-1)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}},lu=e=>class extends e{getEventContext(e){const t={},{cell:r}=this._getGridEventLocation(e);return r?(t.section=["body","header","footer","details"].find((e=>r.getAttribute("part").indexOf(e)>-1)),r._column&&(t.column=r._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(r.parentElement)),t):t}},cu=e=>class extends e{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!==e.length&&(this._filters=this._filters.filter((t=>e.indexOf(t)<0)),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}};function uu(e){return e instanceof HTMLTableRowElement}function du(e){return e instanceof HTMLTableCellElement}function hu(e){return e.matches('[part~="details-cell"]')}const pu=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(uu)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach((t=>{const r=this[t];if(e){const e=r&&r.parentElement;du(r)?this[t]=e:du(e)&&(this[t]=e.parentElement)}else if(!e&&uu(r)){const e=r.firstElementChild;this[t]=e._focusButton||e}}))}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",(()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0})),this.addEventListener("mouseup",(()=>{this._isMousedown=!1})))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&dl(t,"part","focused-cell"),e&&ul(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach((e=>{if(e.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=e;else{let t=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(t){du(t)&&(r=t,t=t.parentElement);const i=[...t.children].indexOf(r);this._itemsFocusable=this.__getFocusable(e,e.children[i])}}})),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let r;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==r&&(r=void 0),r&&this[`_on${r}KeyDown`](e,t)}__ensureFlatIndexInViewport(e){[...this.$.items.children].find((t=>t.index===e))?this.__scrollIntoViewport(e):this._scrollToFlatIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!(!t||!sl(this.itemHasChildrenPath,t)||this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,t){e.preventDefault();const r=this.__isRTL,i=e.composedPath().find(uu),n=e.composedPath().find(du);let s=0,o=0;switch(t){case"ArrowRight":s=r?-1:1;break;case"ArrowLeft":s=r?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?o=-1/0:s=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?o=1/0:s=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":if(this.$.items.contains(i)){const e=this.__getIndexInGroup(i,this._focusedItemIndex);this._scrollToFlatIndex(e)}o=this._visibleItemsCount;break;case"PageUp":o=-this._visibleItemsCount}if(this.__rowFocusMode&&!i||!this.__rowFocusMode&&!n)return;const a=r?"ArrowRight":"ArrowLeft";if(t===(r?"ArrowLeft":"ArrowRight")){if(this.__rowFocusMode)return this.__isRowExpandable(i)?void this.expandItem(i._item):(this.__rowFocusMode=!1,void this._onCellNavigation(i.firstElementChild,0,0))}else if(t===a)if(this.__rowFocusMode){if(this.__isRowCollapsible(i))return void this.collapseItem(i._item)}else{if(n===[...i.children].sort(((e,t)=>e._order-t._order))[0]||hu(n))return this.__rowFocusMode=!0,void this._onRowNavigation(i,0)}this.__rowFocusMode?this._onRowNavigation(i,o):this._onCellNavigation(n,s,o)}_onRowNavigation(e,t){const{dstRow:r}=this.__navigateRows(t,e);r&&r.focus()}__getIndexInGroup(e,t){const r=e.parentNode;return r===this.$.items?void 0!==t?t:e.index:[...r.children].indexOf(e)}__navigateRows(e,t,r){const i=this.__getIndexInGroup(t,this._focusedItemIndex),n=t.parentNode,s=(n===this.$.items?this._flatSize:n.children.length)-1;let o=Math.max(0,Math.min(i+e,s));if(n!==this.$.items){if(o>i)for(;o<s&&n.children[o].hidden;)o+=1;else if(o<i)for(;o>0&&n.children[o].hidden;)o-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[o]}}let a=!1;if(r){const s=hu(r);if(n===this.$.items){const r=t._item,{item:n}=this._dataProviderController.getFlatIndexContext(o);a=s?0===e:1===e&&this._isDetailsOpened(r)||-1===e&&o!==i&&this._isDetailsOpened(n),a!==s&&(1===e&&a||-1===e&&!a)&&(o=i)}}return this.__ensureFlatIndexInViewport(o),this._focusedItemIndex=o,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find((e=>!e.hidden&&e.index===o)),dstIsRowDetails:a}}_onCellNavigation(e,t,r){const i=e.parentNode,{dstRow:n,dstIsRowDetails:s}=this.__navigateRows(r,i,e);if(!n)return;let o=[...i.children].indexOf(e);this.$.items.contains(e)&&(o=[...this.$.sizer.children].findIndex((t=>t._column===e._column)));const a=hu(e),l=i.parentNode,c=this.__getIndexInGroup(i,this._focusedItemIndex);if(void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=a?0:this._getColumns(l,c).filter((e=>!e.hidden))[o]._order),s){[...n.children].find(hu).focus()}else{const i=this.__getIndexInGroup(n,this._focusedItemIndex),s=this._getColumns(l,i).filter((e=>!e.hidden)),o=s.map((e=>e._order)).sort(((e,t)=>e-t)),c=o.length-1,u=o.indexOf(o.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),d=0===r&&a?u:Math.max(0,Math.min(u+t,c));d!==u&&(this._focusedColumnOrder=void 0);const h=s.reduce(((e,t,r)=>(e[t._order]=r,e)),{})[o[d]];let p;if(this.$.items.contains(e)){const e=this.$.sizer.children[h];this._lazyColumns&&(this.__isColumnInViewport(e._column)||e.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),p=[...n.children].find((t=>t._column===e._column)),this._scrollHorizontallyToCell(p)}else p=n.children[h],this._scrollHorizontallyToCell(p);p.focus()}}_onInteractionKeyDown(e,t){const r=e.composedPath()[0],i="input"===r.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(r.type);let n;switch(t){case"Enter":n=!this.interacting||!i;break;case"Escape":n=!1;break;case"F2":n=!this.interacting}const{cell:s}=this._getGridEventLocation(e);if(this.interacting!==n&&null!==s)if(n){const t=s._content.querySelector("[focus-target]")||[...s._content.querySelectorAll("*")].find((e=>this._isFocusable(e)));t&&(e.preventDefault(),t.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,s.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);"Escape"===t&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const r=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let i=r.indexOf(e);for(i+=t;i>=0&&i<=r.length-1;){let e=r[i];if(e&&!this.__rowFocusMode&&(e=r[i].parentNode),e&&!e.hidden)break;i+=t}let n=r[i];if(n&&!this.__isHorizontallyInViewport(n)){const e=this._getColumnsInOrder().find((e=>this.__isColumnInViewport(e)));if(e)if(n===this._headerFocusable)n=e._headerCell;else if(n===this._itemsFocusable){const t=n._column._cells.indexOf(n);n=e._cells[t]}else n===this._footerFocusable&&(n=e._footerCell)}return n}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);t&&(e.stopPropagation(),t===this.$.table?this.$.table.focus():t===this.$.focusexit?this.$.focusexit.focus():t===this._itemsFocusable?(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),e.preventDefault(),this._itemsFocusable.focus()):(e.preventDefault(),t.focus()),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],r=uu(t);!r&&t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const r=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",r)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:r,row:i}=this._getGridEventLocation(e);if((r||this.__rowFocusMode)&&(this._detectInteracting(e),t&&(r||i)))if(this._activeRowGroup=t,t===this.$.header?this._headerFocusable=this.__getFocusable(i,r):t===this.$.items?(this._itemsFocusable=this.__getFocusable(i,r),this._focusedItemIndex=i.index):t===this.$.footer&&(this._footerFocusable=this.__getFocusable(i,r)),r){const t=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&"body"===t.section,this.__pendingBodyCellFocus||r===this.$.emptystatecell||r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:t}})),this._focusedCell=r._focusButton||r,Fl()&&e.target===r&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some((e=>"slot"===e.localName&&this.shadowRoot.contains(e)));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),r=this.interacting&&t===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=Ya.debounce(this.__preventScrollerRotatingCellFocusDebouncer,Ha,(()=>{const e=this._activeRowGroup===this.$.items;this._getRenderedRows().some((e=>e.index===this._focusedItemIndex))?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))})))}_getColumns(e,t){let r=this._columnTree.length-1;return e===this.$.header?r=t:e===this.$.footer&&(r=this._columnTree.length-1-t),this._columnTree[r]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach((e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find((e=>e.offsetHeight)),r=t?[...t.children].find((e=>!e.hidden)):null;t&&r&&(this[`_${e}Focusable`]=this.__getFocusable(t,r))}})),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find((e=>!e.hidden)):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||hu(e))return;const t=e.getBoundingClientRect(),r=e.parentNode,i=Array.from(r.children).indexOf(e),n=this.$.table.getBoundingClientRect();let s=n.left,o=n.right;for(let a=i-1;a>=0;a--){const e=r.children[a];if(!e.hasAttribute("hidden")&&!hu(e)&&(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end"))){s=e.getBoundingClientRect().right;break}}for(let a=i+1;a<r.children.length;a++){const e=r.children[a];if(!e.hasAttribute("hidden")&&!hu(e)&&(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end"))){o=e.getBoundingClientRect().left;break}}t.left<s&&(this.$.table.scrollLeft+=Math.round(t.left-s)),t.right>o&&(this.$.table.scrollLeft+=Math.round(t.right-o))}_getGridEventLocation(e){const t=e.__composedPath||e.composedPath(),r=t.indexOf(this.$.table);return{section:r>=1?t[r-1]:null,row:r>=2?t[r-2]:null,cell:r>=3?t[r-3]:null}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}},fu=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver((e=>{e.forEach((e=>{let{target:t}=e;this._updateDetailsCellHeight(t.parentElement)})),this.__virtualizer.__adapter._resizeHandler()}))}_rowDetailsRendererChanged(e){e&&this._columnTree&&pl(this.$.items,(e=>{if(!e.querySelector("[part~=details-cell]")){this._updateRow(e,this._columnTree[this._columnTree.length-1]);const t=this._isDetailsOpened(e._item);this._toggleDetailsCell(e,t)}}))}_detailsOpenedItemsChanged(e,t){pl(this.$.items,(e=>{(e.hasAttribute("details-opened")||t&&this._isDetailsOpened(e._item))&&this._updateItem(e,e._item)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden=!t,r.hidden||this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame((()=>this.__updateDetailsRowPadding(e,t))))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){pl(this.$.items,(e=>{this._updateDetailsCellHeight(e)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((t=>!this._itemsEqual(t,e))))}},mu=document.createElement("div");mu.style.position="fixed",mu.style.clip="rect(0px, 0px, 0px, 0px)",mu.setAttribute("aria-live","polite"),document.body.appendChild(mu);const yu=Ys((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}})),gu=e=>class extends(jl(yu(e))){get _activeKeys(){return[" "]}ready(){super.ready(),Fc(this,"down",(e=>{this._shouldSetActive(e)&&this._setActive(!0)})),Fc(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",(e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)}),{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}},vu=Ys((e=>class extends e{get _keyboardActive(){return Fl()}ready(){this.addEventListener("focusin",(e=>{this._shouldSetFocus(e)&&this._setFocused(!0)})),this.addEventListener("focusout",(e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}})),bu=Ys((e=>class extends(vu(Zl(e))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){void 0!==e&&this.focusElement&&(this.focusElement.tabIndex=e,-1!==e&&(this.tabindex=void 0)),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}})),_u=new Map;function wu(e){return _u.has(e)||_u.set(e,new WeakMap),_u.get(e)}function Su(e,t){e&&e.removeAttribute(t)}function xu(e,t){if(!e||!t)return;const r=wu(t);if(r.has(e))return;const i=ll(e.getAttribute(t));r.set(e,new Set(i))}function Mu(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{newId:null,oldId:null,fromUser:!1};if(!e||!t)return;const{newId:i,oldId:n,fromUser:s}=r,o=wu(t),a=o.get(e);if(!s&&a)return n&&a.delete(n),void(i&&a.add(i));s&&(a?i||o.delete(e):xu(e,t),Su(e,t)),dl(e,t,n);const l=i||cl(a);l&&ul(e,t,l)}class Cu{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),null!=this.__labelIdFromUser&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setAriaLabel(e){this.__setAriaLabelToAttribute(e),this.__label=e}setLabelId(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=t?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(e,r,t),t?this.__labelIdFromUser=e:this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}__setAriaLabelToAttribute(e){var t,r;this.__target&&(e?(xu(t=this.__target,r="aria-labelledby"),Su(t,r),this.__target.setAttribute("aria-label",e)):this.__label&&(!function(e,t){if(!e||!t)return;const r=wu(t),i=r.get(e);i&&0!==i.size?ul(e,t,cl(i)):e.removeAttribute(t),r.delete(e)}(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(e,t,r){Mu(this.__target,"aria-labelledby",{newId:e,oldId:t,fromUser:r})}__setErrorIdToAriaAttribute(e,t){Mu(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setHelperIdToAriaAttribute(e,t){Mu(this.__target,"aria-describedby",{newId:e,oldId:t,fromUser:!1})}__setAriaRequiredAttribute(e){this.__target&&(["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}function Au(e,t){const{scrollLeft:r}=e;return"rtl"!==t?r:e.scrollWidth-e.clientWidth+r}const Eu=new ResizeObserver((e=>{setTimeout((()=>{e.forEach((e=>{e.target.resizables?e.target.resizables.forEach((t=>{t._onResize(e.contentRect)})):e.target._onResize(e.contentRect)}))}))})),Tu=Ys((e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Eu.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,Eu.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),Eu.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&Eu.unobserve(e)),this.__parent=null}}_onResize(e){}})),Iu=500,Pu=100,ku=e=>class extends(Tu(e)){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return"lazy"===this.columnRendering}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1],this._rowWithFocusedElement&&(this._isMousedown||this.__scrollIntoViewport(this._rowWithFocusedElement.index),this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this._rowWithFocusedElement}})))})),this.$.items.addEventListener("focusout",(()=>{this._rowWithFocusedElement=void 0})),this.$.table.addEventListener("scroll",(()=>this._afterScroll()))}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!$l(this);e&&!1===this.__previousVisible&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find((t=>t.index===e));if(t){const e=t.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>r?this.$.table.scrollTop+=e.bottom-r:e.top<i&&(this.$.table.scrollTop-=i-e.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this.$.scroller.toggleAttribute("scrolling",!0)))),this._debounceScrolling=Ya.debounce(this._debounceScrolling,qa.after(Iu),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)}))}_afterScroll(){if(this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=Ya.debounce(this._debounceColumnContentVisibility,qa.after(Pu),(()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())})),this._firefox){!$l(this)&&!1!==this.__previousVisible&&(this.__memorizedScrollTop=this._scrollTop)}}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach((r=>{const i=this._lazyColumns&&!this.__isColumnInViewport(r);r._bodyContentHidden!==i&&(t=!0,r._cells.forEach((t=>{if(t!==r._sizerCell)if(i)t.remove();else if(t.__parentRow){const i=[...t.__parentRow.children].find((t=>e.indexOf(t._column)>e.indexOf(r)));t.__parentRow.insertBefore(t,i)}}))),r._bodyContentHidden=i})),t&&this._frozenCellsChanged(),this._lazyColumns){const t=[...e].reverse().find((e=>e.frozen)),r=this.__getColumnEnd(t),i=e.find((e=>!e.frozen&&!e._bodyContentHidden));this.__lazyColumnsStart=this.__getColumnStart(i)-r,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return!(!e.frozen&&!e.frozenToEnd)||this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){"eager"===t?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=Ya.debounce(this._debounceOverflow,Ha,(()=>{this.__doUpdateOverflow()}))}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const r=Au(t,this.getAttribute("dir"));r>0&&(e+=" start"),r<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,(e=>"start"===e?"end":"start"))),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const i=e.trim();i.length>0&&this.getAttribute("overflow")!==i?this.setAttribute("overflow",i):0===i.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=Ya.debounce(this._debouncerCacheElements,Ka,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((e=>{e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()})),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=Ya.debounce(this.__debounceUpdateFrozenColumn,Ka,(()=>this._updateFrozenColumn()))}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);let t,r;e.sort(((e,t)=>e._order-t._order));for(let i=0;i<e.length;i++){const n=e[i];n._lastFrozen=!1,n._firstFrozenToEnd=!1,void 0===r&&n.frozenToEnd&&!n.hidden&&(r=i),n.frozen&&!n.hidden&&(t=i)}void 0!==t&&(e[t]._lastFrozen=!0),void 0!==r&&(e[r]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),i=Au(this.$.table,this.getAttribute("dir")),n=`translate(${-r}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const s=this.__isRTL?i+t-e:r,o=`translate(${s}px, 0)`;this._frozenCells.forEach((e=>{e.style.transform=o}));const a=this.__isRTL?i:r+t-e,l=`translate(${a}px, 0)`;let c=l;if(this._lazyColumns&&this._areSizerCellsAssigned()){const e=this._getColumnsInOrder(),t=[...e].reverse().find((e=>!e.frozenToEnd&&!e._bodyContentHidden)),r=this.__getColumnEnd(t),i=e.find((e=>e.frozenToEnd)),n=a+(this.__getColumnStart(i)-r)+this.__lazyColumnsStart;c=`translate(${n}px, 0)`}this._frozenToEndCells.forEach((e=>{this.$.items.contains(e)?e.style.transform=c:e.style.transform=l})),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-s+"px")}_areSizerCellsAssigned(){return this._getColumnsInOrder().every((e=>e._sizerCell))}},Ou=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter((t=>!this._itemsEqual(t,e))))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const r=t||[],i=new Set;return r.forEach((e=>{i.add(this.getItemId(e))})),i}};let Ru="prepend";const Lu=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Ru},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Ru=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){0!==e.length&&(this._sorters=this._sorters.filter((t=>!e.includes(t))),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e=>{e._order=null}));const e=this._getActiveSorters();e.length>1&&e.forEach(((e,t)=>{e._order=t}))}__updateSorter(e,t,r){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;const i=this._sorters.filter((t=>t!==e));this.multiSort&&(!this.multiSortOnShiftClick||!r)||this.multiSortOnShiftClick&&t?"append"===this.multiSortPriority?this._sorters=[...i,e]:this._sorters=[e,...i]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],i.forEach((e=>{e._order=null,e.direction=null})))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter((e=>e.direction&&e.isConnected))}_mapSorters(){return this._getActiveSorters().map((e=>({path:e.path,direction:e.direction})))}},Fu=e=>class extends e{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){pl(this.$.items,(e=>{e.hidden||this._generateCellClassNames(e,this.__getRowModel(e))}))}generateCellPartNames(){pl(this.$.items,(e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))}))}_generateCellClassNames(e,t){fl(e,(r=>{if(r.__generatedClasses&&r.__generatedClasses.forEach((e=>r.classList.remove(e))),this.cellClassNameGenerator&&!e.hasAttribute("loading")){const e=this.cellClassNameGenerator(r._column,t);r.__generatedClasses=e&&e.split(" ").filter((e=>e.length>0)),r.__generatedClasses&&r.__generatedClasses.forEach((e=>r.classList.add(e)))}}))}_generateCellPartNames(e,t){fl(e,(r=>{if(r.__generatedParts&&r.__generatedParts.forEach((e=>{gl(r,null,e)})),this.cellPartNameGenerator&&!e.hasAttribute("loading")){const e=this.cellPartNameGenerator(r._column,t);r.__generatedParts=e&&e.split(" ").filter((e=>e.length>0)),r.__generatedParts&&r.__generatedParts.forEach((e=>{gl(r,!0,e)}))}}))}},Nu=e=>class extends(pc(Jc(au(ac(ku(Ou(Lu(fu(pu(oc(cu(Uc(Bc(lu(su(Fu(Zl(e)))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Wl},_ios:{type:Boolean,value:Hl},_firefox:{type:Boolean,value:Gl},_android:{type:Boolean,value:Ul},_touchDevice:{type:Boolean,value:Kl},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const e=this.__getFirstVisibleItem();return e?e.index:void 0}get _lastVisibleIndex(){const e=this.__getLastVisibleItem();return e?e.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find((e=>this._isInViewport(e)))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find((e=>this._isInViewport(e)))}_isInViewport(e){const t=this.$.table.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return r.bottom>t.top+i&&r.top<t.bottom-n}_getRenderedRows(){return Array.from(this.$.items.children).filter((e=>!e.hidden)).sort(((e,t)=>e.index-t.index))}_getRowContainingNode(e){const t=al("vaadin-grid-cell-content",e);if(!t)return;return t.assignedSlot.parentElement.parentElement}_isItemAssignedToRow(e,t){const r=this.__getRowModel(t);return this.getItemId(e)===this.getItemId(r.item)}ready(){super.ready(),this.__virtualizer=new sc({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver((()=>setTimeout((()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})))).observe(this.$.table),ol(this),this._tooltipController=new Xl(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new Jl(this.$.emptystateslot,(e=>{let{currentNodes:t}=e;this.$.emptystatecell._content=t[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content}))}__getBodyCellCoordinates(e){if(this.$.items.contains(e)&&"td"===e.localName)return{item:e.parentElement._item,column:e._column}}__focusBodyCell(e){let{item:t,column:r}=e;const i=this._getRenderedRows().find((e=>e._item===t)),n=i&&[...i.children].find((e=>e._column===r));n&&n.focus()}_focusFirstVisibleRow(){const e=this.__getFirstVisibleItem();this.__rowFocusMode=!0,e.focus()}_flatSizeChanged(e,t,r,i){if(t&&r&&i){const r=this.shadowRoot.activeElement,i=this.__getBodyCellCoordinates(r),n=t.size||0;t.size=e,t.update(n-1,n-1),e<n&&t.update(e-1,e-1),i&&r.parentElement.hidden&&this.__focusBodyCell(i),this._resetKeyboardNavigation()}}__getIntrinsicWidth(e){return this.__intrinsicWidthCache.has(e)||this.__calculateAndCacheIntrinsicWidths([e]),this.__intrinsicWidthCache.get(e)}__getDistributedWidth(e,t){if(null==e||e===this)return 0;const r=Math.max(this.__getIntrinsicWidth(e),this.__getDistributedWidth((e.assignedSlot||e).parentElement,e));if(!t)return r;const i=r,n=e._visibleChildColumns.map((e=>this.__getIntrinsicWidth(e))).reduce(((e,t)=>e+t),0),s=Math.max(0,i-n),o=this.__getIntrinsicWidth(t)/n*s;return this.__getIntrinsicWidth(t)+o}_recalculateColumnWidths(e){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach((e=>{e.__debounceUpdateHeaderFooterRowVisibility&&e.__debounceUpdateHeaderFooterRowVisibility.flush()})),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const t=this._firstVisibleIndex,r=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter((e=>e.index>=t&&e.index<=r)),this.__calculateAndCacheIntrinsicWidths(e),e.forEach((e=>{e.width=`${this.__getDistributedWidth(e)}px`}))}__setVisibleCellContentAutoWidth(e,t){e._allCells.filter((e=>!this.$.items.contains(e)||this.__viewportRowsCache.includes(e.parentElement))).forEach((e=>{e.__measuringAutoWidth=t,e.__measuringAutoWidth?(e.__originalWidth=e.style.width,e.style.width="auto",e.style.position="absolute"):(e.style.width=e.__originalWidth,delete e.__originalWidth,e.style.position="")})),t?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(e){return e._allCells.reduce(((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e),0)}__calculateAndCacheIntrinsicWidths(e){e.forEach((e=>this.__setVisibleCellContentAutoWidth(e,!0))),e.forEach((e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)})),e.forEach((e=>this.__setVisibleCellContentAutoWidth(e,!1)))}recalculateColumnWidths(){if(!this._columnTree)return;if($l(this)||this._dataProviderController.isLoading())return void(this.__pendingRecalculateColumnWidths=!0);const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth)),t=e.filter((e=>!customElements.get(e.localName)));t.length?Promise.all(t.map((e=>customElements.whenDefined(e.localName)))).then((()=>{this._recalculateColumnWidths(e)})):this._recalculateColumnWidths(e)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||$l(this)||this._dataProviderController.isLoading())return;if([...this.$.items.children].some((e=>void 0===e.index)))return;[...this.$.items.children].some((e=>e.clientHeight>0))&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(e){const t=[];for(let r=0;r<e;r++){const e=document.createElement("tr");e.setAttribute("part","row body-row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>{e.isConnected&&e._cells&&(e._cells=[...e._cells])})),this.__afterCreateScrollerRowsDebouncer=Ya.debounce(this.__afterCreateScrollerRowsDebouncer,Ha,(()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()})),t}_createCell(e,t){const r=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",r);const n=document.createElement(e);n.id=r.replace("-content-","-"),n.setAttribute("role","td"===e?"gridcell":"columnheader"),Ul||Hl||(n.addEventListener("mouseenter",(e=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(e)})),n.addEventListener("mouseleave",(()=>{this._hideTooltip()})),n.addEventListener("mousedown",(()=>{this._hideTooltip(!0)})));const s=document.createElement("slot");if(s.setAttribute("name",r),t&&t._focusButtonMode){const e=document.createElement("div");e.setAttribute("role","button"),e.setAttribute("tabindex","-1"),n.appendChild(e),n._focusButton=e,n.focus=function(e){n._focusButton.focus(e)},e.appendChild(s)}else n.setAttribute("tabindex","-1"),n.appendChild(s);return n._content=i,i.addEventListener("mousedown",(()=>{if(Bl){const e=t=>{const r=i.contains(this.getRootNode().activeElement),s=t.composedPath().includes(i);!r&&s&&n.focus({preventScroll:!0}),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||n.focus({preventScroll:!0})}))})),n}_updateRow(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"body",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const s=document.createDocumentFragment();fl(e,(e=>{e._vacant=!0})),e.innerHTML="","body"===r&&(e.__cells=[],e.__detailsCell=null),t.filter((e=>!e.hidden)).forEach(((t,o,a)=>{let l;if("body"===r){t._cells||(t._cells=[]),l=t._cells.find((e=>e._vacant)),l||(l=this._createCell("td",t),t._onCellKeyDown&&l.addEventListener("keydown",t._onCellKeyDown.bind(t)),t._cells.push(l)),l.setAttribute("part","cell body-cell"),l.__parentRow=e,e.__cells.push(l);const r=e===this.$.sizer;if(t._bodyContentHidden&&!r||e.appendChild(l),r&&(t._sizerCell=l),o===a.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const t=this._detailsCells.find((e=>e._vacant))||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||s.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),e.__detailsCell=t,this._a11ySetRowDetailsCell(e,t),t._vacant=!1}n||(t._cells=[...t._cells])}else{const n="header"===r?"th":"td";i||"vaadin-grid-column-group"===t.localName?(l=t[`_${r}Cell`],l||(l=this._createCell(n),t._onCellKeyDown&&l.addEventListener("keydown",t._onCellKeyDown.bind(t))),l._column=t,e.appendChild(l),t[`_${r}Cell`]=l):(t._emptyCells||(t._emptyCells=[]),l=t._emptyCells.find((e=>e._vacant))||this._createCell(n),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.part.add("cell",`${r}-cell`)}l._content.parentElement||s.appendChild(l._content),l._vacant=!1,l._column=t})),"body"!==r&&this.__debounceUpdateHeaderFooterRowVisibility(e),this.appendChild(s),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__debounceUpdateHeaderFooterRowVisibility(e){e.__debounceUpdateHeaderFooterRowVisibility=Ya.debounce(e.__debounceUpdateHeaderFooterRowVisibility,Ka,(()=>this.__updateHeaderFooterRowVisibility(e)))}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const r=t._column;if(r._emptyCells&&r._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(r.headerRenderer)return!0;if(null===r.header)return!1;if(r.path||void 0!==r.header)return!0}else if(r.footerRenderer)return!0;return!1}));e.hidden!==!t.length&&(e.hidden=!t.length),this._resetKeyboardNavigation()}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._updateRowOrderParts(e,t),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.index;bl(e,{first:0===t,last:t===this._flatSize-1,odd:t%2!==0,even:t%2===0})}_updateRowStateParts(e,t){let{expanded:r,selected:i,detailsOpened:n}=t;bl(e,{expanded:r,collapsed:this.__isRowExpandable(e),selected:i,"details-opened":n})}__computeEmptyState(e,t){return 0===e&&t}_renderColumnTree(e){for(pl(this.$.items,(t=>{this._updateRow(t,e[e.length-1],"body",!1,!0);const r=this.__getRowModel(t);this._updateRowOrderParts(t),this._updateRowStateParts(t,r),this._filterDragAndDrop(t,r)}));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);pl(this.$.header,((t,r,i)=>{this._updateRow(t,e[r],"header",r===e.length-1);const n=hl(t);vl(n,"first-header-row-cell",0===r),vl(n,"last-header-row-cell",r===i.length-1)})),pl(this.$.footer,((t,r,i)=>{this._updateRow(t,e[e.length-1-r],"footer",0===r);const n=hl(t);vl(n,"first-footer-row-cell",0===r),vl(n,"last-footer-row-cell",r===i.length-1)})),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(e,t){e._item=t;const r=this.__getRowModel(e);this._toggleDetailsCell(e,r.detailsOpened),this._a11yUpdateRowLevel(e,r.level),this._a11yUpdateRowSelected(e,r.selected),this._updateRowStateParts(e,r),this._generateCellClassNames(e,r),this._generateCellPartNames(e,r),this._filterDragAndDrop(e,r),this.__updateDragSourceParts(e,r),pl(e,(e=>{if((!e._column||e._column.isConnected)&&e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,r)}})),this._updateDetailsCellHeight(e),this._a11yUpdateRowExpanded(e,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(e.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),this._resetKeyboardNavigation(),requestAnimationFrame((()=>{this.__scrollToPendingIndexes()})))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(e._item)}}_showTooltip(e){const t=this._tooltipController.node;if(t&&t.isConnected){const r=e.target;if(!this.__isCellFullyVisible(r))return;this._tooltipController.setTarget(r),this._tooltipController.setContext(this.getEventContext(e)),t._stateController.open({focus:"focusin"===e.type,hover:"mouseenter"===e.type})}}__isCellFullyVisible(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end"))return!0;let{left:t,right:r}=this.getBoundingClientRect();const i=[...e.parentNode.children].find((e=>e.hasAttribute("last-frozen")));if(i){const e=i.getBoundingClientRect();t=this.__isRTL?t:e.right,r=this.__isRTL?e.left:r}const n=[...e.parentNode.children].find((e=>e.hasAttribute("first-frozen-to-end")));if(n){const e=n.getBoundingClientRect();t=this.__isRTL?e.right:t,r=this.__isRTL?r:e.left}const s=e.getBoundingClientRect();return s.left>=t&&s.right<=r}_hideTooltip(e){const t=this._tooltipController&&this._tooltipController.node;t&&t._stateController.close(e)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach((e=>{e.forEach((e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()}))}))}__updateVisibleRows(e,t){this.__virtualizer&&this.__virtualizer.update(e,t)}};bs("vaadin-grid",on`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`,{moduleId:"vaadin-grid-styles"});class $u extends(Nu(Rl(Ms(Cl(za))))){static get template(){return ja`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Qi($u);const Du=e=>class extends(xl(e)){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(e)&&this._updateFlexAndWidth(),"frozen"!==e||this.frozen||(this.frozen=t),"lastFrozen"!==e||this._lastFrozen||(this._lastFrozen=t),"frozenToEnd"!==e||this.frozenToEnd||(this.frozenToEnd=t),"firstFrozenToEnd"!==e||this._firstFrozenToEnd||(this._firstFrozenToEnd=t)}_groupOrderChanged(e,t){if(t){const r=t.slice(0);if(!e)return void r.forEach((e=>{e._order=0}));const i=10**(/(0+)$/u.exec(e).pop().length-(1+~~(Math.log(t.length)/Math.LN10)));r[0]&&r[0]._order&&r.sort(((e,t)=>e._order-t._order)),ml(r,i,e)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>{t._reorderStatus=e}))}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach((t=>{t.resizable=e}))}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,(e=>!e.hidden)),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const e=this._visibleChildColumns.reduce(((e,t)=>e+=` + ${(t.width||"0px").replace("calc","")}`),"").substring(3);this._setWidth(`calc(${e})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,((e,t)=>e+t.flexGrow),0))}}__scheduleAutoFreezeWarning(e,t){if(this._grid){const r=t.replace(/([A-Z])/gu,"-$1").toLowerCase(),i=e[0][t]||e[0].hasAttribute(r);e.every((e=>(e[t]||e.hasAttribute(r))===i))||(this._grid.__autoFreezeWarningDebouncer=Ya.debounce(this._grid.__autoFreezeWarningDebouncer,Ha,(()=>{console.warn(`WARNING: Joining ${t} and non-${t} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${t}. Otherwise, exclude the ${t} columns from the joined group.`)})))}}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&(this.__scheduleAutoFreezeWarning(t,"frozen"),Array.from(t).forEach((t=>{t.frozen=e})))}_groupFrozenToEndChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&(this.__scheduleAutoFreezeWarning(t,"frozenToEnd"),Array.from(t).forEach((t=>{t.frozenToEnd=e})))}_groupHiddenChanged(e){(e||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const e=this._autoHidden;this._autoHidden=0===(this._visibleChildColumns||[]).length,(e||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach((e=>{e.hidden=this.hidden}))}_colSpanChanged(e,t,r){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),r&&(r.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(r,e))}_getChildColumns(e){return Sl.getColumns(e)}_addNodeObserver(){this._observer=new Sl(this,(()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()})),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};class ju extends(Du(za)){static get is(){return"vaadin-grid-column-group"}}Qi(ju),bs("vaadin-checkbox",on`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_disabled-checkmark-color: var(--vaadin-checkbox-disabled-checkmark-color, var(--lumo-contrast-30pct));
    }

    [part='label'] {
      display: flex;
      position: relative;
      max-width: max-content;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([has-label][required]) ::slotted(label) {
      padding-inline-end: var(--lumo-space-m);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition:
        transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
        background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    :host([readonly]:not([checked]):not([indeterminate])) {
      color: var(--lumo-secondary-text-color);
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      background: transparent;
      box-shadow: none;
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox']::after {
      content: '';
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-50pct));
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([focus-ring][readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-disabled-background, var(--lumo-contrast-10pct));
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--_disabled-checkmark-color);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'] {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--_disabled-checkmark-color);
    }

    :host([readonly][checked]:not([disabled])) [part='checkbox'],
    :host([readonly][indeterminate]:not([disabled])) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-readonly-checked-background, var(--lumo-contrast-70pct));
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition:
        transform 0.1s,
        opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      /* prettier-ignore */
      :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    /* Required */
    :host([required]) [part='required-indicator'] {
      position: absolute;
      top: var(--lumo-space-xs);
      right: var(--lumo-space-xs);
    }

    :host([required][dir='rtl']) [part='required-indicator'] {
      right: auto;
      left: var(--lumo-space-xs);
    }

    :host([required]) [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      width: 1em;
      text-align: center;
    }

    /* Invalid */
    :host([invalid]) {
      --vaadin-input-field-border-color: var(--lumo-error-color);
    }

    :host([invalid]) [part='checkbox'] {
      background: var(--_invalid-background);
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid]:hover) [part='checkbox'] {
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%),
        linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid][focus-ring]) {
      --_focus-ring-color: var(--lumo-error-color-50pct);
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }

    /* Error message */
    [part='error-message'] {
      font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-error-font-weight, 400);
      color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
      will-change: max-height;
      transition: 0.4s max-height;
      max-height: 5em;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host([has-error-message]) [part='error-message']::after,
    :host([has-helper]) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host(:not([invalid])) [part='error-message'] {
      max-height: 0;
      overflow: hidden;
    }

    /* Helper */
    [part='helper-text'] {
      display: block;
      color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
      font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-helper-font-weight, 400);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host(:hover:not([readonly])) [part='helper-text'] {
      color: var(--lumo-body-text-color);
    }

    :host([has-error-message]) ::slotted(label),
    :host([has-helper]) ::slotted(label) {
      padding-bottom: 0;
    }
  `,{moduleId:"lumo-checkbox"});const Zu=Ys((e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((e=>{this._delegateAttribute(e,this[e])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((e=>{this._delegateProperty(e,this[e])}))}_delegateAttrsChanged(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.constructor.delegateAttrs.forEach(((e,r)=>{this._delegateAttribute(e,t[r])}))}_delegatePropsChanged(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.constructor.delegateProps.forEach(((e,r)=>{this._delegateProperty(e,t[r])}))}_delegateAttribute(e,t){this.stateTarget&&("invalid"===e&&this._delegateAttribute("aria-invalid",!!t&&"true"),"boolean"===typeof t?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}})),zu=Ys((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return null!=this.value&&""!==this.value}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}})),Vu=Ys((e=>class extends(Zu(jl(zu(e)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}}));class Uu extends Ql{constructor(e,t,r){super(e,t,r,{...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},useUniqueId:!0})}initCustomNode(e){this.__updateNodeId(e),this.__notifyChange(e)}teardownNode(e){const t=this.getSlotChild();t&&t!==this.defaultNode?this.__notifyChange(t):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const e=super.attachDefaultNode();return e&&this.__updateNodeId(e),e}restoreDefaultNode(){}updateDefaultNode(e){this.__notifyChange(e)}observeNode(e){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver((e=>{e.forEach((e=>{const t=e.target,r=t===this.node;"attributes"===e.type?r&&this.__updateNodeId(t):(r||t.parentElement===this.node)&&this.__notifyChange(this.node)}))})),this.__nodeObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(e){return!!e&&(e.nodeType===Node.ELEMENT_NODE&&(customElements.get(e.localName)||e.children.length>0)||e.textContent&&""!==e.textContent.trim())}__notifyChange(e){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(e),node:e}}))}__updateNodeId(e){const t=!this.nodes||e===this.nodes[0];e.nodeType!==Node.ELEMENT_NODE||this.multiple&&!t||e.id||(e.id=this.defaultId)}}class Bu extends Uu{constructor(e){super(e,"error-message","div")}setErrorMessage(e){this.errorMessage=e,this.updateDefaultNode(this.node)}setInvalid(e){this.invalid=e,this.updateDefaultNode(this.node)}initAddedNode(e){e!==this.defaultNode&&this.initCustomNode(e)}initNode(e){this.updateDefaultNode(e)}initCustomNode(e){e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),super.initCustomNode(e)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(e){const{errorMessage:t,invalid:r}=this,i=Boolean(r&&t&&""!==t.trim());e&&(e.textContent=i?t:"",e.hidden=!i,i?e.setAttribute("role","alert"):e.removeAttribute("role")),super.updateDefaultNode(e)}}class Gu extends Uu{constructor(e){super(e,"helper",null)}setHelperText(e){this.helperText=e;this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:e}=this;if(e&&""!==e.trim()){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.helperText),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}class qu extends Uu{constructor(e){super(e,"label","label")}setLabel(e){this.label=e;this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:e}=this;if(e&&""!==e.trim()){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(e){e&&(e.textContent=this.label),super.updateDefaultNode(e)}initCustomNode(e){super.initCustomNode(e),this.observeNode(e)}}const Hu=Ys((e=>class extends(Cl(e)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new qu(this),this._labelController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-label",e.detail.hasContent)}))}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}})),Wu=Ys((e=>class extends e{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}})),Ku=e=>class extends(Wu(Hu(Cl(e)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Cu(this),this._helperController=new Gu(this),this._errorController=new Bu(this),this._errorController.addEventListener("slot-content-changed",(e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)})),this._labelController.addEventListener("slot-content-changed",(e=>{const{hasContent:t,node:r}=e.detail;this.__labelChanged(t,r)})),this._helperController.addEventListener("slot-content-changed",(e=>{const{hasContent:t,node:r}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,r)}))}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout((()=>{if(e){const e=this._errorNode;this._fieldAriaController.setErrorId(e&&e.id)}else this._fieldAriaController.setErrorId(null)}))}};class Ju extends Ql{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{uniqueIdPrefix:i}=r;super(e,"input","input",{initializer:(e,r)=>{r.value&&(e.value=r.value),r.type&&e.setAttribute("type",r.type),e.id=this.defaultId,"function"===typeof t&&t(e)},useUniqueId:!0,uniqueIdPrefix:i})}}class Yu{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("slot-content-changed",(e=>{this.__initLabel(e.detail.node)})),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}const Qu=e=>class extends(Ku(Vu(bu(gu(e))))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["__readonlyChanged(readonly, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name","invalid","required"]}constructor(){super(),this._setType("checkbox"),this._boundOnInputClick=this._onInputClick.bind(this),this.value="on"}ready(){super.ready(),this.addController(new Ju(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}))),this.addController(new Yu(this.inputElement,this._labelController)),this._createMethodObserver("_checkedChanged(checked)")}_shouldSetActive(e){return!this.readonly&&"a"!==e.target.localName&&e.target!==this._helperNode&&e.target!==this._errorNode&&super._shouldSetActive(e)}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("click",this._boundOnInputClick)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("click",this._boundOnInputClick)}_onInputClick(e){this.readonly&&e.preventDefault()}__readonlyChanged(e,t){t&&(e?t.setAttribute("aria-readonly","true"):t.removeAttribute("aria-readonly"))}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}checkValidity(){return!this.required||!!this.checked}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_checkedChanged(e){(e||this.__oldChecked)&&this.validate(),this.__oldChecked=e}_requiredChanged(e){super._requiredChanged(e),!1===e&&this.validate()}_onRequiredIndicatorClick(){this._labelNode.click()}};bs("vaadin-checkbox",on`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  [part='label'] {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='helper-text'],
  [part='error-message'] {
    grid-column: 2;
  }

  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`,{moduleId:"vaadin-checkbox-styles"});class Xu extends(Qu(Rl(Ms(za)))){static get is(){return"vaadin-checkbox"}static get template(){return ja`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <div part="label">
          <slot name="label"></slot>
          <div part="required-indicator" on-click="_onRequiredIndicatorClick"></div>
        </div>
        <div part="helper-text">
          <slot name="helper"></slot>
        </div>
        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Xl(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Qi(Xu);const ed=e=>class extends e{static get properties(){return{width:{type:String,value:"58px",sync:!0},autoWidth:{type:Boolean,value:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let r=e.firstElementChild;r||(r=document.createElement("vaadin-checkbox"),r.setAttribute("aria-label","Select All"),r.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(r),r.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const i=this.__isChecked(this.selectAll,this._indeterminate);r.__rendererChecked=i,r.checked=i,r.hidden=this._selectAllHidden,r.indeterminate=this._indeterminate}_defaultRenderer(e,t,r){let{item:i,selected:n}=r,s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select Row"),e.appendChild(s),s.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),Fc(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),s.__item=i,s.__rendererChecked=n,s.checked=n}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,"start"===e.detail.state){const t=this._grid._getRenderedRows().find((t=>t.contains(e.currentTarget.assignedSlot)));this.__selectOnDrag=!this._grid._isSelected(t._item),this.__dragStartIndex=t.index,this.__dragStartItem=t._item,this.__dragAutoScroller()}else"end"===e.detail.state&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout((()=>{this.__dragStartIndex=void 0})))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){void 0!==this.__dragStartIndex&&e.preventDefault()}_onCellKeyDown(e){const t=e.composedPath()[0];if(32===e.keyCode&&(t===this._headerCell||this._cells.includes(t)&&!this.autoSelect)){const e=t._content.firstElementChild;e.checked=!e.checked}}__dragAutoScroller(){if(void 0===this.__dragStartIndex)return;const e=this._grid._getRenderedRows(),t=e.find((e=>{const t=e.getBoundingClientRect();return this.__dragCurrentY>=t.top&&this.__dragCurrentY<=t.bottom}));let r=t?t.index:void 0;const i=this.__getScrollableArea();this.__dragCurrentY<i.top?r=this._grid._firstVisibleIndex:this.__dragCurrentY>i.bottom&&(r=this._grid._lastVisibleIndex),void 0!==r&&e.forEach((e=>{(r>this.__dragStartIndex&&e.index>=this.__dragStartIndex&&e.index<=r||r<this.__dragStartIndex&&e.index<=this.__dragStartIndex&&e.index>=r)&&(this.__selectOnDrag?this._selectItem(e._item):this._deselectItem(e._item),this.__dragStartItem=void 0)}));const n=.15*i.height;if(this.__dragDy<0&&this.__dragCurrentY<i.top+n){const e=i.top+n-this.__dragCurrentY,t=Math.min(1,e/n);this._grid.$.table.scrollTop-=10*t}if(this.__dragDy>0&&this.__dragCurrentY>i.bottom-n){const e=this.__dragCurrentY-(i.bottom-n),t=Math.min(1,e/n);this._grid.$.table.scrollTop+=10*t}setTimeout((()=>this.__dragAutoScroller()),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),r=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-r.height,left:e.left,right:e.right,height:e.height-t.height-r.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}},td=e=>class extends(ed(e)){static get properties(){return{__previousActiveItem:Object}}static get observers(){return["__onSelectAllChanged(selectAll)"]}constructor(){super(),this.__boundOnActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__boundOnDataProviderChanged=this.__onDataProviderChanged.bind(this),this.__boundOnSelectedItemsChanged=this.__onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this.__boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this.__boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this.__boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this.__boundOnSelectedItemsChanged))}__onSelectAllChanged(e){void 0!==e&&this._grid&&(this.__selectAllInitialized?this._selectAllChangeLock||(e&&this.__hasArrayDataProvider()?this.__withFilteredItemsArray((e=>{this._grid.selectedItems=e})):this._grid.selectedItems=[]):this.__selectAllInitialized=!0)}__arrayContains(e,t){return Array.isArray(e)&&Array.isArray(t)&&t.every((t=>e.includes(t)))}_selectAll(){this.selectAll=!0}_deselectAll(){this.selectAll=!1}_selectItem(e){this._grid.selectItem(e)}_deselectItem(e){this._grid.deselectItem(e)}__onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this.__previousActiveItem;e&&this._grid._toggleItem(e)}this.__previousActiveItem=t}__hasArrayDataProvider(){return Array.isArray(this._grid.items)&&!!this._grid.dataProvider}__onSelectedItemsChanged(){this._selectAllChangeLock=!0,this.__hasArrayDataProvider()&&this.__withFilteredItemsArray((e=>{this._grid.selectedItems.length?this.__arrayContains(this._grid.selectedItems,e)?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)})),this._selectAllChangeLock=!1}__onDataProviderChanged(){this._selectAllHidden=!Array.isArray(this._grid.items)}__withFilteredItemsArray(e){const t={page:0,pageSize:1/0,sortOrders:[],filters:this._grid._mapFilters()};this._grid.dataProvider(t,(t=>e(t)))}};class rd extends(td(Ml)){static get is(){return"vaadin-grid-selection-column"}}Qi(rd),bs("vaadin-grid-sorter",on`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});const id=document.createElement("template");id.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(id.content),bs("vaadin-grid-sorter",on`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const nd=e=>class extends e{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._grid?this._grid.__applySorters():this.__dispatchSorterChangedEvenIfPossible()}disconnectedCallback(){super.disconnectedCallback(),!this.parentNode&&this._grid?this._grid.__removeSorters([this]):this._grid&&this._grid.__applySorters()}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this.isConnected&&(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:Boolean(this._shiftClick),fromSorterClick:Boolean(this._fromSorterClick)},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}};class sd extends(nd(Ms(nl(za)))){static get template(){return ja`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
//# sourceMappingURL=main.e1f74b7c.js.map