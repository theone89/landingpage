import React from "react";

interface SfcLogoProps {
  color?: string; // Color del SVG
  className?: string; // Clases CSS adicionales
}

const SfcLogo2: React.FC<SfcLogoProps> = ({
  color = "#000000",
  className = "",
}) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="382.000000pt"
    height="382.000000pt"
    viewBox="0 0 382.000000 382.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`w-8 h-8 ${className}`} // Aplica clases CSS
  >
    <g
      transform="translate(0.000000,382.000000) scale(0.100000,-0.100000)"
      fill={color} // Usa la propiedad `color` para cambiar el color
      stroke="none"
    >
      <path
        d="M7678 21475 c-3 -3 -631 -7 -1396 -9 l-1391 -4 -478 -369 c-263 -202
-487 -377 -498 -389 -18 -18 -323 -254 -1098 -847 -121 -93 -223 -165 -229
-161 -6 4 -8 3 -5 -4 9 -13 -72 -74 -86 -65 -6 3 -7 1 -3 -5 8 -13 -28 -35
-39 -24 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36
-39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36
-39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 4 -7 -3 -17
-16 -24 -13 -7 -24 -10 -25 -8 -1 2 -5 0 -10 -5 -5 -5 -2 -6 7 -2 8 4 6 1 -4
-8 -10 -8 -23 -13 -29 -9 -6 3 -7 1 -3 -5 8 -13 -33 -44 -47 -35 -6 3 -7 1 -3
-5 8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1
-5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1
-5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1
-5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1
-5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -33 -45 -47 -36 -6 3 -7 1 -3
-5 7 -12 -27 -35 -38 -25 -3 3 -6 -990 -6 -2208 0 -1218 -3 -2346 -7 -2506 -6
-291 -6 -292 14 -289 11 3 212 132 446 288 l425 283 6 100 c3 55 13 935 22
1955 13 1411 20 1859 29 1873 15 22 1649 1272 1640 1255 -4 -7 6 1 20 17 15
17 24 23 20 15 -3 -8 3 -4 14 9 12 13 21 19 21 15 1 -5 10 2 20 15 11 13 20
20 20 17 0 -6 397 288 410 303 3 3 24 19 48 35 23 16 42 33 42 37 0 5 5 9 10
9 12 0 32 15 57 42 9 9 20 15 24 12 5 -2 13 5 19 16 6 11 15 18 20 15 5 -3 14
4 20 16 7 11 14 19 16 16 2 -2 20 11 40 30 20 18 40 31 44 28 5 -3 14 4 20 15
6 11 14 19 19 17 5 -1 18 9 30 23 13 14 19 18 15 10 -5 -8 9 2 29 23 22 21 43
35 50 31 7 -4 9 -4 5 1 -9 9 51 57 63 50 4 -3 11 0 15 6 5 8 3 9 -7 4 -11 -6
-12 -5 -1 6 10 11 92 14 430 15 229 2 671 5 982 8 311 4 755 8 987 10 231 2
426 7 431 10 7 4 9 108 6 309 -3 166 -6 354 -7 419 l-2 116 -245 1 c-135 1
-248 -1 -252 -4z"
      />
      <path
        d="M14800 21438 c-2 -139 1 -374 6 -585 l7 -243 86 1 c47 1 221 -2 386
-6 165 -4 388 -8 495 -10 107 -2 321 -6 475 -10 355 -8 640 -14 975 -19 318
-4 418 -12 444 -35 16 -13 18 -13 12 -1 -5 8 3 2 18 -15 14 -16 25 -26 26 -21
0 4 8 0 18 -11 9 -10 15 -14 12 -8 -3 6 6 -1 20 -15 14 -14 23 -21 20 -15 -3
6 4 1 15 -10 30 -33 91 -76 98 -70 4 3 5 2 2 -1 -5 -8 39 -44 54 -44 6 0 11
-4 11 -8 0 -4 23 -25 51 -46 29 -21 48 -32 44 -25 -4 8 3 3 14 -11 11 -14 21
-21 21 -15 0 5 7 -1 16 -13 8 -12 21 -22 28 -22 8 0 16 -7 20 -15 3 -8 11 -15
17 -15 7 0 18 -8 26 -17 8 -10 11 -12 8 -4 -5 9 1 8 19 -4 25 -17 38 -34 14
-19 -7 4 -8 3 -4 -5 4 -6 12 -9 17 -5 5 3 24 -9 41 -28 17 -18 28 -26 23 -18
-10 18 27 -11 67 -53 16 -15 32 -26 37 -22 5 3 13 0 17 -6 5 -8 2 -10 -7 -4
-8 4 0 -4 16 -19 17 -14 36 -25 43 -26 6 0 12 -3 12 -7 0 -5 12 -17 27 -27 17
-13 24 -14 19 -5 -4 8 5 1 19 -16 15 -16 24 -23 20 -15 -3 8 6 2 20 -15 15
-16 24 -23 19 -15 -7 13 -5 13 12 1 10 -8 30 -26 44 -41 14 -14 21 -19 15 -11
-13 21 74 -45 104 -78 13 -14 20 -19 16 -11 -3 8 6 2 20 -15 15 -16 24 -24 20
-16 -5 9 1 8 19 -4 25 -17 38 -34 14 -19 -7 4 -8 3 -4 -5 4 -6 11 -9 15 -6 10
5 68 -36 70 -50 0 -5 6 -11 11 -11 6 -1 15 -2 21 -3 5 0 8 -5 4 -10 -3 -5 4
-12 15 -16 11 -3 20 -11 20 -16 0 -5 8 -9 19 -9 10 0 30 -14 45 -32 14 -17 26
-28 26 -23 0 5 7 -1 16 -13 8 -12 24 -22 34 -22 10 0 26 -10 35 -22 8 -13 19
-23 23 -24 22 -2 41 -18 35 -28 -3 -6 -3 -8 2 -4 12 11 47 -11 39 -25 -4 -7
-4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7
-4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5 13 8 75 -37 65 -48 -4 -5 -2
-5 4 -2 6 4 20 -1 30 -9 10 -9 13 -12 5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6
5 2 17 -3 27 -11 10 -9 13 -12 5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17
-3 27 -11 10 -9 13 -12 5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17 -3 27
-11 10 -9 13 -12 5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17 -3 27 -11 10
-9 13 -12 5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 10 6 72 -40 66 -48 -3 -4
-2 -5 1 -2 12 8 45 -16 38 -27 -4 -6 -3 -8 3 -5 6 4 19 -1 29 -9 10 -9 13 -12
5 -8 -9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17 -3 27 -11 10 -9 13 -12 5 -8
-9 5 -12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17 -3 27 -11 10 -9 13 -12 5 -8 -9 5
-12 3 -7 -5 4 -6 11 -9 15 -6 5 2 17 -3 27 -11 10 -9 12 -12 4 -8 -9 4 -12 3
-7 -2 5 -5 13 -10 18 -10 5 -1 14 -2 20 -3 5 0 7 -7 3 -13 -4 -7 -4 -10 1 -6
12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5
12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5
11 7 75 -37 68 -46 -3 -4 -2 -5 1 -2 12 8 45 -16 38 -28 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11
11 47 -11 39 -24 -4 -6 -3 -8 3 -5 5 3 19 -1 31 -9 l22 -15 0 -1885 c0 -1663
2 -1885 15 -1890 8 -4 12 -10 9 -15 -3 -5 -2 -9 3 -8 20 3 34 -2 28 -11 -4 -6
-3 -10 2 -9 21 4 34 -2 27 -13 -4 -7 -3 -8 4 -4 14 9 55 -18 44 -28 -4 -4 -2
-7 3 -6 21 5 36 0 30 -10 -4 -6 -3 -9 2 -8 16 4 53 -14 47 -23 -3 -5 -2 -9 3
-8 20 3 34 -2 28 -11 -4 -6 -3 -10 2 -9 21 4 34 -2 27 -13 -4 -7 -3 -8 4 -4
14 9 55 -18 44 -28 -4 -4 -2 -7 3 -6 21 5 36 0 30 -10 -4 -6 -3 -9 2 -8 16 4
53 -14 47 -23 -3 -5 -2 -9 3 -8 20 3 34 -2 28 -11 -4 -6 -3 -10 2 -9 21 4 34
-2 27 -13 -4 -7 -3 -8 4 -4 14 9 55 -18 44 -28 -4 -4 -2 -7 3 -6 21 5 36 0 30
-10 -4 -6 -3 -9 2 -8 16 4 53 -14 47 -23 -3 -5 -2 -9 3 -8 20 3 34 -2 28 -11
-4 -6 -3 -10 2 -9 21 4 34 -2 27 -13 -4 -7 -3 -8 4 -4 14 9 55 -18 44 -28 -4
-4 -2 -7 3 -6 21 5 36 0 30 -10 -4 -6 -3 -9 2 -8 16 4 53 -14 47 -23 -3 -5 -2
-9 3 -8 19 3 34 -2 29 -9 -3 -5 1 -9 8 -9 16 0 29 685 32 1742 1 391 6 1135
10 1655 11 1325 11 1355 -4 1372 -6 8 -10 18 -7 21 3 4 2 5 -1 2 -12 -8 -45
16 -38 27 4 6 3 8 -3 5 -6 -4 -19 1 -29 9 -10 9 -13 12 -5 8 9 -5 12 -3 7 5
-4 6 -11 9 -15 6 -10 -6 -72 40 -66 48 3 4 2 5 -1 2 -12 -8 -45 16 -38 28 4 7
4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9
-1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -6 -4 -19 1 -29 9 -10 9 -13 12 -5 8
9 -5 12 -3 7 5 -4 6 -11 9 -15 6 -10 -6 -72 40 -66 48 3 4 2 5 -1 2 -12 -8
-45 16 -38 28 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -6 -4 -19 1
-29 9 -10 9 -13 12 -5 8 10 -5 12 -3 7 5 -5 7 -10 10 -13 7 -10 -10 -44 15
-37 27 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13 -8 -75 37 -65 47
4 4 2 7 -3 5 -18 -4 -45 13 -38 25 3 6 3 8 -2 4 -12 -11 -47 11 -39 25 4 7 4
9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1
5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -6 -4 -19 1 -29 9 -10 9 -13 12 -5 8 9
-5 12 -3 7 5 -4 6 -11 9 -15 6 -11 -6 -72 40 -63 49 4 4 2 7 -3 5 -18 -4 -45
13 -38 25 3 6 3 8 -2 4 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11
-39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -6 -4 -19 1 -29 9
-10 9 -13 12 -5 8 9 -5 12 -3 7 5 -4 6 -11 9 -15 6 -12 -7 -72 41 -63 50 4 5
2 5 -4 2 -6 -4 -20 1 -30 9 -10 9 -13 12 -5 8 10 -5 12 -3 7 5 -5 7 -10 10
-13 7 -10 -10 -44 15 -37 27 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5
-6 -4 -19 1 -29 9 -10 9 -13 12 -5 8 9 -5 12 -3 7 5 -4 6 -11 9 -15 6 -5 -2
-17 3 -27 11 -10 9 -13 12 -5 8 9 -5 12 -3 7 5 -4 6 -12 9 -17 5 -5 -3 -24 9
-41 28 -17 18 -28 26 -23 18 5 -8 -10 0 -33 18 -23 19 -42 39 -42 45 0 5 -2 8
-5 5 -3 -3 -22 10 -42 28 -20 19 -39 32 -41 29 -2 -2 -13 6 -24 18 -11 12 -16
15 -12 7 3 -8 -5 -3 -20 13 -15 15 -34 27 -42 27 -8 0 -13 4 -10 9 3 5 -4 12
-17 15 -12 3 -33 15 -47 27 -14 11 -19 17 -11 13 9 -5 12 -3 7 5 -4 6 -11 9
-15 6 -5 -2 -17 3 -27 11 -10 9 -13 12 -5 8 9 -5 12 -3 7 5 -4 6 -11 9 -15 6
-5 -2 -17 3 -27 11 -10 9 -13 12 -5 8 9 -5 12 -3 7 5 -4 6 -11 9 -15 6 -12 -7
-72 41 -63 50 4 5 2 5 -5 1 -7 -4 -28 10 -50 31 -20 21 -33 31 -29 23 5 -8 -4
-1 -19 15 -14 17 -23 24 -19 16 4 -9 -2 -8 -20 4 -25 17 -38 34 -14 19 7 -4 8
-3 4 5 -4 6 -12 9 -17 6 -5 -4 -25 9 -44 27 -50 47 -58 53 -77 61 -10 3 -18
11 -18 17 0 5 -6 10 -14 10 -8 0 -16 7 -20 15 -3 8 -13 15 -23 15 -10 1 -31
12 -48 26 -16 15 -24 23 -16 19 9 -6 12 -4 7 4 -4 6 -11 9 -15 6 -5 -2 -17 3
-27 11 -10 9 -12 12 -4 8 9 -4 12 -3 7 2 -5 5 -13 10 -18 10 -5 1 -14 2 -20 3
-5 0 -8 5 -4 10 3 5 -5 13 -17 16 -13 4 -32 17 -43 29 -33 35 -69 63 -60 46 4
-8 -6 0 -24 18 -17 18 -35 31 -40 27 -5 -3 -13 0 -17 6 -5 8 -3 9 6 4 9 -5 11
-4 6 3 -4 7 -12 12 -18 12 -6 0 -17 8 -25 18 -10 11 -12 12 -8 2 4 -8 -3 -3
-15 13 -12 15 -26 25 -31 21 -5 -3 -9 0 -9 6 0 6 -7 13 -16 17 -9 3 -30 19
-47 34 -17 16 -32 27 -34 25 -2 -2 -20 12 -40 30 -20 19 -39 32 -41 29 -2 -2
-13 6 -23 18 -10 12 -18 18 -19 12 0 -5 -7 1 -16 13 -8 12 -20 20 -25 17 -5
-4 -9 -1 -9 5 0 6 -5 8 -12 4 -7 -4 -8 -3 -4 4 8 13 -28 35 -39 24 -5 -4 -6
-2 -3 3 3 6 -6 19 -20 29 -15 12 -22 14 -17 5 5 -8 -11 5 -34 28 -24 24 -47
41 -51 38 -4 -2 -16 3 -26 11 -10 9 -12 13 -4 9 9 -4 8 0 -3 8 -15 12 -55 16
-200 16 -405 2 -2354 21 -2669 26 l-338 5 0 -42z"
      />
      <path
        d="M12003 19053 c4 -1028 7 -2152 7 -2500 l0 -632 588 -442 c323 -244
1003 -756 1512 -1138 509 -382 1268 -952 1687 -1268 419 -315 767 -573 773
-573 31 0 -8 -38 -140 -137 -221 -166 -1094 -832 -1695 -1293 -132 -102 -375
-288 -541 -415 -165 -126 -731 -560 -1257 -964 l-957 -734 0 -2379 c0 -1809 3
-2377 12 -2372 29 18 5099 3874 5170 3933 7 6 34 28 61 50 26 22 635 487 1352
1032 l1305 992 0 2357 c0 1297 2 2364 5 2372 2 8 -179 151 -487 383 -418 316
-1482 1120 -3894 2948 -2136 1617 -3498 2647 -3502 2647 -3 0 -2 -840 1 -1867z"
      />
      <path
        d="M9950 20114 c-514 -399 -1052 -816 -1195 -927 -143 -111 -379 -294
-525 -407 -146 -113 -778 -603 -1405 -1089 -627 -486 -1153 -897 -1169 -915
-16 -17 -25 -24 -21 -16 11 19 -29 -12 -69 -54 -16 -17 -25 -24 -21 -16 11 19
-29 -13 -68 -55 -16 -16 -26 -23 -22 -15 4 8 -5 2 -20 -15 -14 -16 -23 -23
-20 -15 4 8 -8 -1 -25 -20 -17 -19 -29 -29 -25 -22 4 8 -14 -7 -41 -32 -26
-25 -49 -44 -52 -41 -2 2 -13 -6 -23 -18 -10 -12 -18 -18 -19 -14 0 4 -12 -5
-26 -20 -14 -15 -23 -21 -19 -13 4 8 -5 2 -20 -15 -14 -16 -24 -23 -20 -15 4
8 -3 3 -15 -13 -12 -15 -26 -25 -31 -21 -5 3 -9 1 -9 -5 0 -8 -823 -653 -1126
-882 -39 -30 -121 -93 -181 -141 -61 -48 -116 -88 -122 -90 -7 -2 -29 -17 -48
-35 -20 -18 -41 -29 -46 -26 -6 3 -7 1 -4 -4 7 -11 -20 -28 -36 -24 -5 1 -6
-3 -3 -8 8 -12 -34 -42 -47 -34 -6 3 -7 1 -3 -5 8 -13 -28 -35 -39 -24 -3 4
-5 2 -3 -5 4 -15 -62 -64 -75 -56 -6 3 -7 1 -3 -5 8 -13 -28 -35 -39 -24 -5 4
-5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4
-5 2 -1 -5 7 -13 -27 -37 -38 -26 -3 3 -6 -1030 -6 -2296 0 -1266 -4 -2310 -8
-2319 -19 -39 1 -79 63 -125 33 -25 1766 -1377 3850 -3005 2085 -1627 3792
-2958 3794 -2956 2 2 0 1093 -4 2424 l-7 2422 -2265 1761 -2265 1761 24 20
c14 12 101 76 194 144 93 68 196 143 229 167 151 112 222 161 248 172 15 7 27
17 27 22 0 10 55 51 185 140 44 30 105 75 135 100 63 53 113 91 186 141 29 19
76 54 105 77 30 24 95 72 144 108 50 36 135 99 190 140 284 213 340 253 349
248 5 -4 6 -1 3 4 -7 11 20 28 36 24 5 -1 6 3 3 8 -5 8 19 24 28 18 2 -1 13 9
25 23 11 14 20 21 21 16 0 -4 9 2 20 15 10 13 19 20 20 15 0 -4 9 2 21 15 11
13 18 17 14 9 -4 -8 3 -3 15 13 12 15 25 25 30 22 4 -3 11 2 14 11 3 8 10 13
15 9 6 -3 15 4 21 15 6 11 15 19 20 17 5 -1 16 7 25 18 9 11 14 13 10 5 -4 -8
6 -1 20 15 15 17 24 23 20 15 -3 -8 3 -4 15 10 12 14 23 23 25 20 1 -3 473
342 1047 765 l1045 770 7 1320 c4 726 6 1841 4 2477 l-3 1157 -935 -725z"
      />
      <path
        d="M21326 11118 c-9 -13 -14 -17 -10 -9 4 8 -9 2 -29 -13 -20 -16 -37
-32 -37 -37 0 -5 -6 -9 -14 -9 -8 0 -24 -12 -36 -27 -12 -16 -19 -21 -15 -13
4 8 -3 4 -14 -9 -12 -13 -21 -19 -21 -15 -1 5 -9 -1 -20 -14 -10 -13 -20 -22
-22 -20 -2 2 -17 -7 -33 -20 -17 -13 -23 -20 -15 -16 10 5 12 4 5 -4 -5 -5
-19 -12 -30 -14 -11 -2 -19 -10 -17 -17 1 -7 -2 -10 -8 -6 -5 3 -10 1 -10 -5
0 -6 -4 -9 -9 -6 -4 3 -30 -16 -57 -42 -26 -26 -44 -40 -40 -32 5 8 -4 2 -19
-15 -14 -16 -24 -23 -20 -15 4 10 2 9 -8 -2 -8 -10 -17 -18 -21 -18 -16 0 -65
-44 -59 -53 3 -6 1 -7 -5 -3 -6 4 -22 -4 -34 -16 -13 -13 -27 -23 -31 -23 -5
0 -17 -11 -28 -25 -12 -14 -17 -19 -13 -11 4 8 -9 1 -29 -15 -20 -16 -37 -32
-37 -36 0 -5 -7 -8 -15 -8 -9 0 -18 -7 -21 -15 -4 -8 -13 -15 -20 -15 -8 0
-17 -7 -20 -15 -4 -8 -11 -15 -18 -15 -9 0 -12 -69 -13 -262 -1 -145 -4 -573
-7 -953 -4 -379 -9 -987 -11 -1350 -5 -807 -12 -1190 -22 -1189 -13 1 -108
-78 -106 -87 2 -5 -6 -9 -16 -9 -11 0 -26 -8 -33 -18 -7 -10 -21 -21 -31 -25
-10 -4 -15 -11 -12 -17 3 -5 1 -11 -4 -11 -6 -1 -16 -2 -21 -3 -6 0 -20 -12
-33 -26 -12 -14 -17 -19 -12 -11 6 9 -6 3 -25 -13 -19 -16 -34 -32 -33 -36 1
-3 -7 -12 -19 -19 -16 -10 -19 -10 -13 1 4 7 -5 0 -19 -15 -14 -15 -26 -25
-26 -22 0 4 -39 -24 -87 -61 -91 -70 -119 -93 -94 -79 9 5 12 4 7 -3 -4 -7
-16 -12 -26 -12 -11 0 -27 -11 -36 -25 -9 -14 -20 -23 -24 -20 -5 3 -29 -15
-55 -40 -26 -26 -44 -40 -40 -33 3 7 0 5 -8 -4 -8 -10 -19 -18 -25 -18 -6 0
-20 -12 -32 -27 -12 -16 -19 -21 -15 -13 3 8 -8 -1 -26 -20 -17 -19 -28 -28
-25 -20 4 8 -5 2 -19 -15 -15 -16 -24 -23 -19 -15 4 8 -14 -3 -42 -24 -56 -45
-75 -63 -56 -52 23 13 12 -2 -14 -19 -15 -10 -23 -12 -19 -4 5 7 -8 -1 -28
-17 -20 -16 -37 -32 -37 -36 0 -5 -5 -8 -12 -8 -7 0 -23 -12 -36 -27 -13 -16
-20 -22 -16 -14 4 8 -9 1 -29 -15 -20 -16 -37 -32 -37 -36 0 -5 -7 -8 -15 -8
-9 0 -18 -6 -21 -14 -3 -8 -15 -16 -26 -19 -13 -4 -17 -10 -12 -18 4 -7 3 -10
-2 -6 -5 3 -21 -4 -34 -15 -14 -11 -19 -17 -12 -13 23 12 12 -1 -20 -25 -18
-13 -28 -17 -23 -9 6 8 -3 1 -18 -16 -16 -16 -25 -23 -21 -15 4 8 -9 -2 -29
-23 -20 -22 -40 -36 -46 -33 -5 4 -13 1 -17 -5 -4 -8 -3 -9 4 -5 7 4 12 4 12
1 0 -3 -16 -13 -35 -21 -19 -8 -35 -19 -35 -24 0 -6 -6 -10 -14 -10 -8 0 -18
-5 -22 -12 -5 -7 -2 -8 7 -3 11 6 11 5 3 -4 -6 -7 -19 -13 -27 -15 -9 -1 -28
-15 -43 -32 -14 -16 -23 -22 -19 -14 4 9 1 9 -8 -2 -8 -10 -17 -18 -20 -18 -3
0 -29 -22 -58 -50 -29 -27 -60 -50 -70 -50 -10 0 -21 -5 -25 -12 -4 -7 -3 -8
4 -4 24 15 11 -1 -19 -23 -18 -13 -28 -17 -24 -10 4 8 -5 0 -21 -17 -16 -17
-40 -39 -54 -50 -25 -19 -25 -19 -10 1 8 11 -4 0 -27 -23 -23 -24 -46 -41 -52
-38 -5 4 -13 1 -17 -5 -4 -8 -3 -9 4 -5 25 15 11 -1 -20 -24 -27 -19 -30 -20
-18 -4 8 10 -4 -1 -27 -24 -23 -24 -46 -41 -52 -38 -5 4 -13 1 -17 -5 -5 -8
-2 -10 7 -5 8 4 3 -1 -11 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -3 -4 6 -9
-14 -24 -35 -27 -3 -1 -10 -5 -15 -10 -5 -5 -2 -6 7 -2 8 4 6 1 -4 -8 -10 -8
-22 -13 -27 -11 -4 3 -11 0 -15 -6 -5 -8 -2 -10 7 -5 8 4 3 -1 -11 -12 -13
-11 -29 -18 -34 -15 -5 3 -6 1 -3 -4 6 -9 -14 -24 -35 -27 -3 -1 -10 -5 -15
-10 -5 -5 -2 -6 7 -2 8 4 6 1 -4 -8 -10 -8 -22 -13 -27 -11 -4 3 -11 0 -15 -6
-5 -8 -2 -10 7 -5 8 4 3 -1 -11 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5
6 -9 -29 -37 -44 -35 -3 1 -4 -3 -2 -8 1 -5 -7 -9 -18 -9 -11 0 -23 -7 -26
-15 -3 -8 -14 -17 -25 -20 -10 -4 -18 -11 -16 -18 1 -6 -7 -13 -18 -15 -11 -2
-24 -9 -30 -14 -7 -8 -5 -9 5 -4 8 4 4 -1 -10 -12 -13 -11 -28 -18 -32 -16 -4
3 -8 0 -8 -6 0 -6 -11 -15 -25 -20 -14 -5 -28 -16 -31 -25 -3 -8 -10 -13 -15
-10 -4 3 -13 -4 -19 -15 -6 -11 -18 -20 -26 -20 -8 0 -13 -3 -11 -7 2 -5 -10
-19 -27 -33 -24 -19 -27 -20 -16 -5 8 11 -5 1 -28 -23 -24 -24 -48 -40 -54
-36 -7 4 -8 3 -4 -4 6 -9 -33 -40 -42 -33 -2 2 -7 -1 -10 -5 -4 -4 0 -4 8 0 8
4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -3 -4 7 -11 -20 -28 -36
-24 -5 1 -6 -3 -2 -8 5 -9 -35 -38 -43 -32 -2 2 -7 -1 -10 -5 -4 -4 0 -4 8 0
8 4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35 -39
-24 -5 4 -5 2 -1 -5 7 -12 -27 -37 -37 -27 -3 3 -13 -6 -22 -20 -10 -14 -22
-23 -28 -19 -6 3 -7 1 -3 -5 6 -9 -29 -37 -44 -35 -3 1 -7 -1 -10 -4 -3 -4 2
-3 10 1 8 4 6 1 -4 -8 -10 -8 -22 -13 -27 -11 -4 3 -11 0 -15 -6 -5 -8 -2 -10
7 -5 8 4 3 -1 -11 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5 6 -9 -29 -37
-44 -35 -3 1 -7 -1 -10 -4 -3 -4 2 -3 10 1 8 4 4 -1 -10 -12 -13 -11 -29 -18
-34 -15 -5 3 -6 1 -3 -4 7 -11 -20 -28 -36 -24 -5 1 -6 -3 -2 -8 5 -9 -31 -36
-45 -34 -3 1 -7 -1 -10 -4 -3 -4 2 -3 10 1 8 4 4 -1 -10 -12 -13 -11 -29 -18
-34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 6 -10 -29 -38
-44 -36 -3 1 -7 -1 -10 -4 -3 -4 2 -3 10 1 8 4 4 -1 -10 -12 -13 -11 -29 -18
-34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 6 -11 -17 -31
-37 -31 -5 0 -12 -4 -15 -8 -4 -4 0 -4 8 0 8 4 4 -1 -10 -12 -13 -11 -29 -18
-34 -15 -5 3 -6 1 -2 -5 6 -9 -33 -40 -42 -33 -2 2 -7 -1 -10 -5 -4 -4 0 -4 8
0 8 4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35
-39 -24 -5 4 -5 2 -1 -5 6 -11 -17 -31 -37 -31 -5 0 -12 -4 -15 -8 -4 -4 0 -4
8 0 8 4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35
-39 -24 -5 4 -5 2 -1 -5 6 -10 -33 -41 -42 -34 -2 2 -7 -1 -10 -5 -4 -4 0 -4
8 0 8 4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35
-39 -24 -5 4 -5 2 -1 -5 7 -12 -31 -40 -47 -35 -5 1 -6 -2 -3 -7 6 -9 -22 -26
-37 -22 -5 1 -6 -3 -2 -8 7 -12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 7 -12 -31
-40 -47 -35 -5 1 -6 -2 -2 -7 7 -12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 6 -10
-33 -41 -42 -34 -2 2 -7 -1 -10 -5 -4 -4 0 -4 8 0 8 4 4 -1 -10 -12 -13 -11
-29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 6 -11
-17 -31 -37 -31 -5 0 -12 -4 -15 -8 -4 -4 0 -4 8 0 8 4 4 -1 -10 -12 -13 -11
-29 -18 -34 -15 -5 3 -6 1 -2 -5 8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 7 -12
-31 -40 -47 -35 -5 1 -6 -2 -3 -7 6 -9 -22 -26 -37 -22 -5 1 -6 -3 -2 -8 7
-12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 7 -12 -31 -40 -47 -35 -5 1 -6 -2 -2 -7
7 -12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 6 -11 -17 -31 -37 -31 -5 0 -12 -4 -15
-8 -4 -4 0 -4 8 0 8 4 4 -1 -10 -12 -13 -11 -29 -18 -34 -15 -5 3 -6 1 -2 -5
8 -13 -28 -35 -39 -24 -5 4 -5 2 -1 -5 7 -12 -31 -40 -47 -35 -5 1 -6 -2 -2
-7 7 -12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1
-5 7 -12 -31 -40 -47 -35 -5 1 -6 -2 -2 -7 7 -12 -29 -33 -40 -23 -5 4 -5 2
-1 -5 8 -14 -27 -36 -39 -25 -5 4 -5 2 -1 -5 7 -12 -31 -40 -47 -35 -5 1 -6
-2 -2 -7 7 -12 -29 -33 -40 -23 -5 4 -5 2 -1 -5 4 -7 -3 -17 -16 -24 -13 -7
-24 -10 -25 -8 -1 2 -5 0 -10 -5 -5 -5 -2 -6 7 -2 8 4 6 0 -5 -9 -19 -16 -114
-17 -1410 -9 -764 5 -2081 8 -2925 7 -1664 -3 -2277 4 -2273 24 2 7 0 12 -5
11 -15 -5 -52 23 -46 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12
-11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5
-54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47
11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23 -47
35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4
6 3 8 -3 5 -14 -9 -55 22 -47 36 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9
-1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5
-14 -9 -55 22 -47 36 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12
-11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5
-54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47
11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39
25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -96 53 -88 66 3
6 3 8 -2 4 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8
-2 7 -16 -5 -54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5
-11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12
-11 -46 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -14 -9
-55 22 -47 36 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47
11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23 -47
35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4
7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23 -47 35 4 7 4 9
-1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5
-13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -12
-11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -96 53 -88 66 3 6 3 8 -2 4 -12 -11
-47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23
-47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39
24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7
4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3
4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16
-5 -54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11
-47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23
-47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39
24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7
4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3
4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16
-5 -54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11
-47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11
-39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67
2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3
8 -3 5 -14 -9 -55 22 -47 36 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5
-12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16
-5 -54 23 -47 35 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11
-47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11
-39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -14 -9 -55 22 -47 36
4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4
9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -14 -9 -55 22 -47 36 4 7 4 9 -1 5
-12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13
-8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -11 -11
-47 11 -39 24 4 6 3 8 -3 5 -13 -8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11
-39 25 4 7 4 9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23 -47 35
4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4 9 -1 5 -12 -11 -47 11 -39 25 4 7 4
9 -1 5 -11 -10 -47 11 -40 23 4 5 3 8 -2 7 -16 -5 -54 23 -47 35 4 7 4 9 -1 5
-12 -11 -47 11 -39 25 4 7 4 9 -1 5 -11 -11 -47 11 -39 24 4 6 3 8 -3 5 -13
-8 -89 51 -85 67 2 6 0 8 -3 4 -12 -11 -46 11 -39 25 4 7 4 9 -1 5 -11 -11
-47 11 -39 24 4 6 3 8 -3 5 -13 -8 -55 22 -47 34 3 5 2 9 -3 8 -4 -1 -14 -1
-20 0 -10 1 -13 275 -13 1334 0 734 -3 1604 -7 1933 l-6 600 -93 48 c-52 27
-92 52 -89 56 2 4 -1 7 -8 7 -20 0 -157 95 -151 105 3 4 2 8 -3 7 -20 -3 -34
2 -28 11 4 6 3 10 -2 9 -20 -3 -34 2 -28 11 4 6 3 10 -2 9 -20 -3 -34 2 -28
11 4 6 3 10 -2 9 -19 -3 -34 2 -29 9 3 5 0 9 -7 9 -18 0 -157 94 -152 103 3 4
-3 7 -13 6 -9 0 -16 5 -15 11 2 7 0 12 -5 12 -20 -3 -33 2 -27 11 4 6 3 10 -2
9 -20 -3 -34 2 -28 11 4 6 3 10 -2 9 -20 -3 -34 2 -28 11 4 6 3 10 -2 9 -19
-3 -34 2 -29 9 3 5 -1 9 -9 9 -13 0 -15 -310 -15 -2431 l0 -2431 35 -24 c19
-13 32 -28 28 -35 -3 -6 -3 -8 2 -4 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11
11 47 -11 39 -24 -4 -6 -3 -8 3 -5 14 9 209 -141 205 -156 -2 -7 0 -9 3 -5 12
11 46 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11
11 47 -11 39 -24 -4 -6 -3 -8 3 -5 13 8 209 -142 205 -157 -2 -6 0 -8 3 -4 12
11 46 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5 14 9
169 -112 165 -127 -2 -6 0 -8 3 -4 12 11 46 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11 10 47 -11 40 -23 -4 -5 -2 -8 3 -7 16 5
132 -84 125 -96 -3 -6 -3 -8 2 -4 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11
47 -11 39 -25 -4 -7 -4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5 13 8
169 -112 165 -127 -2 -6 0 -8 3 -4 12 11 46 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12
11 47 -11 39 -25 -4 -7 -4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5 12 8
129 -81 125 -95 -1 -5 1 -7 6 -4 5 3 18 -2 28 -10 10 -9 13 -12 5 -8 -10 5
-12 3 -7 -5 5 -7 10 -10 13 -7 10 10 44 -15 37 -27 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 11 11 47 -11 39 -24 -4 -6 -3 -8 3 -5 13 8 129
-82 125 -97 -2 -6 0 -8 3 -4 12 11 46 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 12 11 47
-11 39 -25 -4 -7 -4 -9 1 -5 12 11 47 -11 39 -25 -4 -7 -4 -9 1 -5 10 9 47
-10 41 -21 -3 -4 1 -9 9 -11 8 -2 1644 -3 3635 -3 1991 0 3627 1 3635 3 8 2
12 7 9 11 -5 9 36 35 49 31 5 -1 6 2 2 7 -7 12 29 33 40 23 5 -4 5 -2 1 5 -8
14 27 36 39 25 5 -4 5 -2 1 5 -8 14 27 36 39 25 5 -4 5 -2 1 5 -7 12 31 40 47
35 5 -1 6 2 2 7 -7 12 29 33 40 23 5 -4 5 -2 1 5 -8 14 27 36 39 25 5 -4 5 -2
1 5 -8 14 27 36 39 25 5 -4 5 -2 1 5 -6 11 17 31 37 31 5 0 12 4 15 8 4 4 0 4
-8 0 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6 -1 2 5 -8 13 28 35 39 24 5
-4 5 -2 1 5 -8 14 27 36 39 25 5 -4 5 -2 1 5 -6 10 33 41 42 34 2 -2 7 1 10 5
4 4 0 4 -8 0 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6 -1 2 5 -8 13 28 35
39 24 5 -4 5 -2 1 5 -8 14 27 36 39 25 5 -4 5 -2 1 5 -6 11 17 31 37 31 5 0
12 4 15 8 4 4 0 4 -8 0 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6 -1 3 4 -7
11 20 28 36 24 5 -1 6 3 2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -8 14 27 36 39
25 5 -4 5 -2 1 5 -7 12 31 40 47 35 5 -1 6 2 3 7 -6 9 22 26 37 22 5 -1 6 3 3
8 -6 9 22 26 37 22 5 -1 6 3 2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -6 11 17 31
37 31 5 0 12 4 15 8 4 4 0 4 -8 0 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6
-1 3 4 -7 11 20 28 36 24 5 -1 6 3 2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -8 14
27 36 39 25 5 -4 5 -2 1 5 -7 12 31 40 47 35 5 -1 6 2 3 7 -6 9 22 26 37 22 5
-1 6 3 2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -6 10 33 41 42 34 2 -2 7 1 10 5
4 4 0 4 -8 0 -8 -4 -6 -1 4 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5
-8 -4 -3 1 11 12 13 11 29 18 34 15 5 -3 6 -1 3 4 -7 11 20 28 36 24 5 -1 6 3
2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -6 11 17 31 37 31 5 0 12 4 15 8 4 4 0 4
-8 0 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6 -1 3 4 -7 11 20 28 36 24 5
-1 6 3 2 8 -7 12 29 33 40 23 5 -4 5 -2 1 5 -6 11 20 33 36 30 3 -1 10 2 15 7
5 5 2 6 -7 2 -8 -4 -4 1 10 12 13 11 29 18 34 15 5 -3 6 -1 3 4 -7 11 20 28
36 24 5 -1 6 3 3 8 -6 9 22 26 37 22 5 -1 6 3 2 8 -5 9 35 38 43 32 2 -2 7 1
10 5 4 4 0 4 -8 0 -8 -4 -6 -1 4 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10
-7 5 -8 -4 -3 1 11 12 13 11 29 18 34 15 5 -3 6 -1 3 4 -7 11 20 28 36 24 5
-1 6 3 2 8 -5 9 20 29 38 29 5 0 12 4 15 8 4 4 0 4 -8 0 -8 -4 -6 -1 4 8 10 8
22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5 -8 -4 -3 1 11 12 13 11 29 18 34 15
5 -3 6 -1 3 4 -7 11 20 28 36 24 5 -1 6 3 2 8 -5 9 20 29 38 29 5 0 12 4 15 8
4 4 0 4 -8 0 -8 -4 -6 -1 4 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5
-8 -4 -5 -1 5 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5 -8 -4 -3 1 11
12 13 11 29 18 34 15 5 -3 6 -1 3 4 -6 9 14 24 35 27 3 1 10 5 15 10 5 5 2 6
-7 2 -8 -4 -6 -1 4 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5 -8 -4 -5
-1 5 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10 -7 5 -8 -4 -3 1 11 12 13 11
27 19 31 16 4 -2 9 3 13 11 3 8 12 15 20 15 8 0 22 10 31 23 8 12 18 21 20 20
3 -2 6 0 7 5 1 8 71 62 76 58 1 -2 18 12 38 31 20 18 39 31 44 28 5 -3 12 0
16 6 5 8 2 10 -7 5 -8 -4 -5 -1 5 8 10 8 22 13 27 11 4 -3 11 0 15 6 5 8 2 10
-7 5 -8 -4 -5 0 5 8 11 9 26 16 34 16 7 0 11 3 9 8 -3 4 7 16 21 26 15 12 22
14 17 5 -5 -8 8 3 28 24 20 22 40 36 46 33 5 -4 13 -1 17 5 5 8 2 10 -7 5 -8
-4 -5 -1 5 8 10 8 22 13 27 11 4 -3 11 0 15 6 4 8 3 9 -4 5 -24 -15 -11 1 19
23 18 13 28 17 24 10 -4 -8 5 0 21 17 38 40 82 75 69 54 -6 -9 1 -4 15 10 14
14 23 21 20 15 -3 -6 6 1 20 15 38 39 75 68 65 50 -5 -8 8 2 28 23 20 22 40
36 46 33 5 -4 13 -1 17 5 5 8 2 10 -7 5 -8 -4 -5 -1 5 8 10 8 22 13 27 11 4
-3 11 0 15 6 4 8 3 9 -4 5 -24 -15 -11 1 19 23 18 13 28 17 23 10 -4 -8 9 3
29 24 20 22 40 36 46 33 5 -4 13 -1 17 5 4 8 3 9 -4 5 -25 -15 -11 1 21 24 17
13 28 17 22 9 -5 -8 3 -1 18 16 16 16 25 24 21 16 -4 -7 7 -3 25 10 30 22 43
38 19 23 -7 -5 -8 -3 -4 5 5 7 10 10 13 7 9 -9 44 14 38 25 -4 5 2 9 11 9 10
0 24 7 33 15 9 8 27 24 41 37 14 13 27 23 30 23 3 0 20 15 37 33 18 19 37 31
42 27 5 -3 13 0 17 6 4 8 3 9 -4 5 -24 -15 -11 1 19 23 18 13 28 17 24 10 -4
-8 5 0 20 16 14 17 23 23 20 15 -4 -8 5 -1 20 15 14 17 23 23 20 15 -4 -8 5
-1 20 15 14 17 23 23 20 15 -4 -8 5 -1 20 15 14 17 24 23 20 15 -3 -8 8 1 26
20 17 19 28 29 24 21 -4 -7 15 4 44 25 28 21 51 42 51 46 0 4 7 8 15 8 8 0 20
9 27 20 7 11 17 20 21 20 13 0 87 58 116 89 13 14 20 19 15 11 -10 -19 30 12
70 54 16 17 25 24 22 16 -4 -8 2 -4 14 10 12 14 25 25 29 24 14 -3 50 29 44
39 -3 5 -2 7 4 4 6 -4 19 1 29 9 10 9 13 12 5 8 -10 -5 -12 -3 -7 5 5 7 11 10
14 7 7 -7 69 38 100 73 13 14 21 19 17 11 -4 -10 -2 -9 8 3 8 9 19 17 24 17 5
0 28 17 51 38 23 22 42 36 42 33 1 -3 12 8 26 24 15 17 23 23 19 15 -4 -10 -1
-9 8 3 8 9 19 17 25 17 6 0 14 5 18 12 5 7 2 8 -7 3 -8 -5 -10 -4 -6 0 4 5 14
10 22 11 17 3 95 64 95 76 0 4 3 7 8 6 14 -5 62 34 55 46 -3 6 -3 8 2 4 11
-10 47 11 40 23 -4 5 -2 8 4 7 5 -2 17 6 26 17 9 11 13 14 9 6 -4 -7 7 -3 24
9 17 13 33 29 36 37 3 8 10 11 16 8 6 -3 13 1 16 9 3 9 12 16 19 16 8 0 22 11
33 25 11 13 21 22 24 20 2 -3 21 10 41 29 20 19 37 31 37 27 0 -3 6 1 13 10 7
8 20 18 30 22 11 4 15 12 11 18 -4 8 -3 9 4 5 7 -4 12 -2 12 3 0 6 6 10 13 8
6 -1 11 4 9 11 -1 8 2 11 6 8 5 -3 22 6 36 19 15 14 29 25 32 25 11 0 99 72
97 79 -1 4 4 8 11 8 15 0 86 54 86 66 0 4 7 7 15 7 9 0 18 7 21 15 4 8 10 15
16 15 5 0 25 12 43 26 l34 26 -5 1836 c-3 1010 -6 2110 -7 2445 0 334 -2 607
-3 607 -1 0 -9 -10 -18 -22z"
      />
    </g>
  </svg>
);

export default SfcLogo2;
