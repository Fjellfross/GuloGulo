---
title:
source: "https://www.rand.org/pubs/monograph_reports/MR1418.html"
author:
  - "[[RAND Corporation]]"
published:
created: 2025-02-14
description: "The tables presented here provide a large supply of random digits and normal deviates of high quality."
tags:
  - "clippings"
---
- [Skip to page content](https://www.rand.org/pubs/monograph_reports/#page-content)

[![RAND](https://www.rand.org/etc/rand/designs/common/images/logo-corp.svg)](https://www.rand.org/)

[Toggle Menu](https://www.rand.org/site_info/sitemap.html)

## Site-wide navigation

- ### Research Divisions

RAND's divisions conduct research on a uniquely broad front for clients around the globe.

- #### Federally Funded Research Divisions

- [RAND Army Research Division](https://www.rand.org/ard.html)
- [RAND Homeland Security Research Division](https://www.rand.org/hsrd.html)
- [RAND National Security Research Division](https://www.rand.org/nsrd.html)
- [RAND Project AIR FORCE](https://www.rand.org/paf.html)
- #### Social and Economic Policy Divisions

- [RAND Education and Labor](https://www.rand.org/education-and-labor.html)
- [RAND Health Care](https://www.rand.org/health-care.html)
- [RAND Social and Economic Well-Being](https://www.rand.org/well-being.html)
- [RAND Global and Emerging Risks](https://www.rand.org/global-and-emerging-risks.html)
- #### International

- [RAND Europe](https://www.rand.org/randeurope.html)
- [RAND Australia](https://www.rand.org/australia.html)
- [Services & Impact](https://www.rand.org/services-and-impact.html)
- [Careers](https://www.rand.org/jobs.html)
- [Graduate School](https://www.pardeerand.edu/)
- [Give](https://www.rand.org/support-us.html)
- [Cart](https://shop.rand.org/cart/)

1. [RAND](https://www.rand.org/)
2. [Research & Commentary](https://www.rand.org/pubs.html)
3. [Monograph Reports](https://www.rand.org/pubs/monograph_reports.html)
4. [\>MR-1418](https://www.rand.org/pubs/monograph_reports/MR1418.html)

## A Million Random Digits with 100,000 Normal Deviates

ToolPublished 2001

 ![Cover: A Million Random Digits with 100,000 Normal Deviates](https://www.rand.org/content/rand/pubs/monograph_reports/MR1418/_jcr_content/par/product.fit.264x264.jpeg/1599228893284.jpeg)

[Additional Downloads](https://www.rand.org/pubs/monograph_reports/#available-downloads)

**Includes** Table of Random Digits; Table of Random Normal Deviates; Errata; and more

[Order a print copy](https://www.rand.org/pubs/monograph_reports/#order-print-copy)

## Foreword to the Online Edition

This book was a product of RAND's computing power (and patience). The tables of random numbers in the book have become a standard reference in engineering and econometrics textbooks and have been widely used in gaming and simulations that employ Monte Carlo trials. Still the largest known source of random digits and normal deviates, the work is routinely used by statisticians, physicists, polltakers, market analysts, lottery administrators, and quality control engineers.

A humorous sidelight: The New York Public Library originally indexed this book under the heading "Psychology."

## Acknowledgments

The following persons participated in the production, testing, and preparation for publication of the tables of random digits and random normal deviates: Paul Armer, E. C. Bower, Mrs. Bernice Brown, G. W. Brown, Walter Frantz, J. J. Goodpasture, W. F. Gunning, Cecil Hastings, Olaf Helmer, M. L. Juncosa, J. D. Madden, A. M. Mood, R. T. Nash, J. D. Williams. These tables were prepared in connection with analyses done for the United States Air Force.

## Introduction

Early in the course of research at The RAND Corporation a demand arose for random numbers; these were needed to solve problems of various kinds by experimental probability procedures, which have come to be called Monte Carlo methods. Many of the applications required a large supply of random digits or normal deviates of high quality, and the tables presented here were produced to meet those requirements. The numbers have been used extensively by research workers at RAND, and by many others, in the solution of a wide range of problems during the past seven years.

One distinguishing feature of the digit table is its size. On numerous RAND problems the largest existing table of Kendall and Smith, 1939, would have had to be used many times over, with the consequent dangers of introducing unwanted correlations. The feasibility of working with as large a table as the present one resulted from developments in computing machinery which made possible the solving of very complicated distribution problems in a reasonable time by Monte Carlo methods. The tables were constructed primarily for use with punched card machines. With the high-speed electronic computers recently developed, the storage of such tables is usually not practical and, in fact, much larger tables than the present one are often required; these machines have caused research workers to turn to pseudo-random numbers which are computed by simple arithmetic processes directly by the machine as needed. These developments are summarized in Juncosa, 1953; Meyer, Gephart, and Rasmussen, 1954; and Moshman, 1954, where other references may be found. *The Monte Carlo Method*, 1951; Curtiss, 1949; Kahn and Marshall, 1953; and Kahn, 1956, discuss the uses and applications of the Monte Carlo methods and give references to other applications.

## Production of the Random Digits

The random digits in this book were produced by rerandomization of a basic table generated by an electronic roulette wheel. Briefly, a random frequency pulse source, providing on the average about 100,000 pulses per second, was gated about once per second by a constant frequency pulse. Pulse standardization circuits passed the pulses through a 5-place binary counter. In principle the machine was a 32-place roulette wheel which made, on the average, about 3000 revolutions per trial and produced one number per second. A binary-to-decimal converter was used which converted 20 of the 32 numbers (the other twelve were discarded) and retained only the final digit of two-digit numbers; this final digit was fed into an IBM punch to produce finally a punched card table of random digits.

Production from the original machine showed statistically significant biases, and the engineers had to make several modifications and refinements of the circuits before production of apparently satisfactory numbers was achieved. The basic table of a million digits was then produced during May and June of 1947. This table was subjected to fairly exhaustive tests and it was found that it still contained small but statistically significant biases. For example, the following table[<sup>[1]</sup>](https://www.rand.org/pubs/monograph_reports/#fn1) shows the results of three tests (described later) on two blocks of 125,000 digits:

<table><thead><tr><td>&nbsp;</td><th colspan="2">Block 1</th><th colspan="2">Block 2</th></tr><tr><td>&nbsp;</td><th>χ<sup>2</sup></th><th>Probability</th><th>χ<sup>2</sup></th><th>Probability</th></tr></thead><tbody><tr><td>Frequency (9 d.f.<sup>a</sup>)</td><td>6.0</td><td>.74</td><td>21.0</td><td>.02</td></tr><tr><td>Odd-even (1 d.f)</td><td>3.0</td><td>.09</td><td>7.0</td><td>&lt;.0l</td></tr><tr><td>Serial (81 d.f.)</td><td>78.7</td><td>.55</td><td>105.6</td><td>.03</td></tr></tbody></table>

<sup>a</sup>The letters "d.f." (degrees of freedom) identify a parameter associated with the test. A discussion of the test may be found in any textbook on statistics.

Block 1 was produced immediately after a careful tune-up of the machine; Block 2 was produced after one month of continuous operation without adjustment. Apparently the machine had been running down despite the fact that periodic electronic checks indicated it had remained in good order.

The table was regarded as reasonably satisfactory because the deviations from expectations in the various tests were all very small—the largest being less than 2 per cent—and no further effort was made to generate better numbers with the machine. However, the table was transformed by adding pairs of digits modulo 10 in order to improve the distribution of the digits. There were 20,000 punched cards with 50 digits per card; each digit on a given card was added modulo 10 to the corresponding digit of the preceding card to yield a rerandomized digit. It is this transformed table which is published here and which is the subject of the tests described below.

The transformation was expected to, and did, improve the distribution in view of a limit theorem to the effect that sums of random variables modulo 1 have the uniform distribution over the unit interval as their limiting distribution. (See Horton and Smith, 1949, for a version of this theorem for discrete variates.)

These tables were reproduced by photo-offset from pages printed by the IBM model 856 Cardatype. Because of the very nature of the tables, it did not seem necessary to proofread every page of the final manuscript in order to catch random errors of the Cardatype. All pages were scanned for systematic errors, every twentieth page was proofread (starting with page 10 for both the digits and deviates), and every fortieth page (starting with page 5 for both the digits and deviates) was summed and the totals checked against sums obtained from the cards.[<sup>[2]</sup>](https://www.rand.org/pubs/monograph_reports/#fn2)

## Tests on the Random Digits

*Frequency Tests.* The table was divided into 1000 blocks of 1000 digits each and the frequency of each digit was recorded for each block. Then for each block a goodness-of-fit χ<sup>2</sup> was computed with 9 d.f. These 1000 values of χ<sup>2</sup> provided an empirical fit to the χ<sup>2</sup> distribution (with 9 d.f.); to test the fit, a goodness-of-fit χ<sup>2</sup> was computer using 50 class intervals, each of which was expected to contain 2 per cent of the values. (The number of intervals was chosen in accordance with the result of Wald and Mann, 1942.) The value of the test χ<sup>2</sup> was 54.6 which, for 49 d.f., corresponded to about the 0.45 probability level.

To examine further the frequencies, the digits were tallied in 20 blocks of 50,000 digits each. The results are shown in Table 1 together with the goodness-of-fit χ<sup>2</sup> for each block. On the total frequencies the χ<sup>2</sup> (13.316) for 9 d.f. has been partitioned into three components as follows:

|  | χ<sup>2</sup> | d.f. | Probability |
| --- | --- | --- | --- |
| Odd versus even digits | 1.37 | 1 | 0.25 |
| Within groups of odd digits | 7.90 | 4 | 0.10 |
| Within groups of even digits | 4.04 | 4 | 0.40 |

| Block No. | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | χ<sup>2</sup> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 4923 | 5013 | 4916 | 4951 | 5109 | 4993 | 5055 | 5080 | 4986 | 4974 | 7.556 |
| 2 | 4870 | 4956 | 5080 | 5097 | 5066 | 5034 | 4902 | 4974 | 5012 | 5009 | 10.132 |
| 3 | 5065 | 5014 | 5034 | 5057 | 4902 | 5061 | 4942 | 4946 | 4960 | 5019 | 6.078 |
| 4 | 5009 | 5053 | 4966 | 4891 | 5031 | 4895 | 5037 | 5062 | 5170 | 4886 | 15.004 |
| 5 | 5033 | 4982 | 5180 | 5074 | 4892 | 4992 | 5011 | 5005 | 4959 | 4872 | 13.846 |
| 6 | 4976 | 4993 | 4932 | 5039 | 4965 | 5034 | 4943 | 4932 | 5116 | 5070 | 7.076 |
| 7 | 5011 | 5152 | 4990 | 5047 | 4974 | 5107 | 4869 | 4925 | 5023 | 4902 | 14.116 |
| 8 | 5003 | 5092 | 5163 | 4936 | 5020 | 5069 | 4914 | 4943 | 4914 | 4946 | 13.051 |
| 9 | 4860 | 4899 | 5138 | 4959 | 5089 | 5047 | 5030 | 5039 | 5002 | 4937 | 13.410 |
| 10 | 4998 | 4957 | 4964 | 5124 | 4909 | 4995 | 5053 | 4946 | 4995 | 5059 | 7.212 |
| 11 | 4948 | 5048 | 5041 | 5077 | 5051 | 5004 | 5024 | 4886 | 4917 | 5004 | 7.142 |
| 12 | 4958 | 4993 | 5064 | 4987 | 5041 | 4984 | 4991 | 4987 | 5113 | 4882 | 6.992 |
| 13 | 4968 | 4961 | 5029 | 5038 | 5022 | 5023 | 5010 | 4988 | 4936 | 5025 | 2.162 |
| 14 | 5110 | 4923 | 5025 | 4975 | 5095 | 5051 | 5035 | 4962 | 4942 | 4882 | 10.172 |
| 15 | 5094 | 4962 | 4945 | 4891 | 5014 | 5002 | 5038 | 5023 | 5179 | 4852 | 16.261 |
| 16 | 4957 | 5035 | 5051 | 5021 | 5036 | 4927 | 5022 | 4988 | 4910 | 5053 | 4.856 |
| 17 | 5088 | 4989 | 5042 | 4948 | 4999 | 5028 | 5037 | 4893 | 5004 | 4972 | 5.347 |
| 18 | 4970 | 5034 | 4996 | 5008 | 5049 | 5016 | 4954 | 4989 | 4970 | 5014 | 1.625 |
| 19 | 4998 | 4981 | 4984 | 5107 | 4874 | 4980 | 5057 | 5020 | 4978 | 5021 | 6.584 |
| 20 | 4963 | 5013 | 5101 | 5084 | 4956 | 4972 | 5018 | 4971 | 5021 | 4901 | 6.584 |
| Total | 99802 | 100050 | 100641 | 100311 | 100094 | 100214 | 99942 | 99559 | 100107 | 99280 | 13.316 |

Of the 200 frequencies recorded in Table 1, 59 (29.5 per cent) deviate from 5000 by more than σ (= 30√5 = 67.08), and 8 (4 per cent) deviate from 5000 by more than 2σ. Of the twenty χ<sup>2</sup> values in Table 1, eight exceed the 50 per cent value (8.34), two fall below the 10 per cent value (4.17), and two exceed the 90 per cent value (14.7).

*Poker Tests.*Sets of 5 digits in blocks of 5000 digits were taken to be poker hands and were classified as:

| Class | Symbol | Expected Frequency Per Block |
| --- | --- | --- |
| Busts | abcde | 302.4 |
| Pairs | aabcd | 504 |
| Two pairs | aabbc | 108 |
| Threes | aaabc | 72 |
| Full house | aaabb | 9 |
| Fours | aaaab | {4.5} |
| Five | aaaaa | {0.1} |

There were 200 sets of 1000 poker hands in the table, and for each set a goodness-of-fit χ<sup>2</sup> was computed with 5 d.f. (the fours and fives were combined). The manner in which these 200 values fit the χ<sup>2</sup> distribution is shown in Table 2.

### **Table 2.** Distribution of Chi-square Values

<table><thead><tr><th>Probability</th><th>Values of χ<sup>2</sup></th><th>Expected Frequency</th><th>Observed Frequency</th></tr></thead><tbody><tr><td><em>P</em> &gt; .90</td><td>0 – 1.60</td><td>20</td><td>22</td></tr><tr><td>.90 &gt;<em>P</em> &gt; .80</td><td>1.61 – 2.35</td><td>20</td><td>19</td></tr><tr><td>.80 &gt; <em>P</em> &gt; .70</td><td>2.36 – 3.00</td><td>20</td><td>22</td></tr><tr><td>.70 &gt; <em>P</em> &gt; .60</td><td>3.01 – 3.70</td><td>20</td><td>19</td></tr><tr><td>.60 &gt; <em>P</em> &gt; .50</td><td>3.71 – 4.35</td><td>20</td><td>20</td></tr><tr><td>.50 &gt; <em>P</em> &gt; .40</td><td>4.36 – 5.20</td><td>20</td><td>29</td></tr><tr><td>.40 &gt; <em>P</em> &gt; .30</td><td>5.21 – 6.10</td><td>20</td><td>22</td></tr><tr><td>.30 &gt; <em>P</em> &gt; .20</td><td>6.11 – 7.30</td><td>20</td><td>15</td></tr><tr><td>.20 &gt; <em>P</em> &gt; .10</td><td>7.31 – 9.20</td><td>20</td><td>15</td></tr><tr><td><em>P</em> &lt; .10</td><td>9.21 or more</td><td>20</td><td>17</td></tr><tr><th colspan="2">Total</th><th>200</th><th>200</th></tr></tbody></table>

The goodness-of-fit test gives:

| χ<sup>2</sup> = 7.7 for 9 d.f., | *P* = 0.55. |
| --- | --- |

The combined frequencies of poker hands in the whole table are shown in Table 3. The largest difference between expected and observed frequencies (for threes) is about 2.25 times its standard deviation, which is roughly at about the 9 or 10 per cent probability level (looking merely at the largest of five independent normal observations).

### **Table 3.** Poker Test on The Million Digits (200,000 Poker Hands)

| Classes | Expected Frequency | Observed Frequency |
| --- | --- | --- |
| Busts (abcde) | 60,480 | 60,479 |
| Pairs (aabcd) | 100,800 | 100,570 |
| Two pairs (aabbc) | 21,600 | 21,572 |
| Threes (aaabc) | 14,400 | 14,659 |
| Full house (aaabb) | 1,800 | 1,788 |
| Fours (aaaab) | {900} | {914} |
| Fives (aaaaa) | {20} | {18} |
| Total | 200,000 | 200,000 |

The goodness-of-fit test gives:

| χ<sup>2</sup> = 5.5 for 5 d.f., | *P* = 0.35. |
| --- | --- |

Also, the frequencies of poker hands were computed for each of ten blocks of 100,000 digits and the mean and standard deviation was computed from the ten values for each kind of hand. The results are shown in Table 4.

### **Table 4.** Mean and Standard Deviation of Frequencies in Seven Classes of Poker Hands

| Classes | Theoretical Mean | Actual Mean | Theoretical Std. Dev. | Actual Std. Dev. |
| --- | --- | --- | --- | --- |
| Busts | 6048 | 6047.9 | 64.9 | 60.3 |
| Pairs | 10080 | 10057.0 | 70.7 | 78.4 |
| Two pairs | 2160 | 2157.2 | 43.9 | 45.8 |
| Threes | 1440 | 1465.9 | 36.9 | 26.6 |
| Full house | 180 | 178.8 | 13.4 | 8.9 |
| Fours | 90 | 91.4 | 9.5 | 11.5 |
| Fives | 2 | 1.8 | 1.4 | 1.9 |

*Serial and Run Tests.* Some further tests were made on the first block of 50,000 digits to look particularly for any evidence of serial association among the digits. The serial test classified every successive pair of digits by each digit of the pair in a ten-by-ten table. The frequencies of the different pairs are given in Table 5, where the first digit of the pair is shown in the left column of the table and the second digit is shown at the top. Thus there were 510 cases in which a zero followed a one. The frequency χ<sup>2</sup> for the row (or column) totals is 7.56, which is about the 0.60 probability level for 9 d.f.

### **Table 5.** Frequencies of Ordered Pairs of Digits

<table><thead><tr><td>&nbsp;</td><th colspan="10">Second Digit</th><td>&nbsp;</td></tr><tr><th>First Digit</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>Total</th></tr></thead><tbody><tr><th>0</th><td>508</td><td>456</td><td>509</td><td>507</td><td>502</td><td>489</td><td>471</td><td>504</td><td>488</td><td>489</td><td>4923</td></tr><tr><th>1</th><td>510</td><td>514</td><td>474</td><td>514</td><td>504</td><td>481</td><td>496</td><td>486</td><td>507</td><td>527</td><td>5013</td></tr><tr><th>2</th><td>451</td><td>523</td><td>493</td><td>484</td><td>502</td><td>466</td><td>514</td><td>506</td><td>493</td><td>484</td><td>4916</td></tr><tr><th>3</th><td>500</td><td>472</td><td>476</td><td>466</td><td>513</td><td>478</td><td>540</td><td>513</td><td>530</td><td>463</td><td>4951</td></tr><tr><th>4</th><td>513</td><td>561</td><td>481</td><td>485</td><td>526</td><td>513</td><td>485</td><td>510</td><td>524</td><td>511</td><td>5109</td></tr><tr><th>5</th><td>475</td><td>490</td><td>527</td><td>507</td><td>493</td><td>481</td><td>489</td><td>512</td><td>465</td><td>554</td><td>4993</td></tr><tr><th>6</th><td>494</td><td>486</td><td>491</td><td>483</td><td>525</td><td>504</td><td>530</td><td>539</td><td>513</td><td>490</td><td>5055</td></tr><tr><th>7</th><td>508</td><td>512</td><td>454</td><td>498</td><td>550</td><td>533</td><td>516</td><td>504</td><td>485</td><td>520</td><td>5080</td></tr><tr><th>8</th><td>463</td><td>503</td><td>475</td><td>514</td><td>520</td><td>544</td><td>514</td><td>491</td><td>520</td><td>442</td><td>4986</td></tr><tr><th>9</th><td>501</td><td>496</td><td>536</td><td>493</td><td>474</td><td>504</td><td>500</td><td>515</td><td>461</td><td>494</td><td>4974</td></tr><tr><th>Total</th><th>4923</th><th>5013</th><th>4916</th><th>4951</th><th>5109</th><th>4993</th><th>5055</th><th>5080</th><th>4986</th><th>4974</th><th>50000</th></tr></tbody></table>

Table 5 can be tested by a criterion originally due to Kendall and Smith, 1939, and revised by Good, 1953. Assuming all pairs equally likely we get a normalized sum of squared deviations of 107.8. However, this statistic does not have a χ<sup>2</sup>\-distribution. On the other hand, it is the sum of the error variation and twice the row (or column) variation, where under the assumption of perfect randomness, the error variation is asymptotically distributed like χ<sup>2</sup> with 81 degrees of freedom. We take the error variation as our test criterion. This gives a χ<sup>2</sup> of 107.8 – 2(7.56) ~ 92.7, which is about the 0.18 level for 81 degrees of freedom.

Finally, in the same block of 50,000 digits all runs were counted with the obviously satisfactory results shown in Table 6.

### **Table 6.** Run Test

| Length of Run | Expected Frequency | Observed Frequency |
| --- | --- | --- |
| r = 1 | 40500 | 40410 |
| r = 2 | 4050 | 4055 |
| r = 3 | 405 | 421 |
| r = 4 | 40.5 | 48 |
| r ≥ 5 | 4.5 | 5 |

## Normal Deviates

Half of the random digit table was used to produce 100,000 standard normal deviates by solving for *x* in Equation (1),

![](https://www.rand.org/content/rand/pubs/monograph_reports/MR1418/_jcr_content/par/product/par-research-brief/wrapperdiv_879410015/imagewithclass.fit.0x0.gif/1580506782455.gif)

where *D* is a five-digit number from the table and

![](https://www.rand.org/content/rand/pubs/monograph_reports/MR1418/_jcr_content/par/product/par-research-brief/wrapperdiv_1416313110/imagewithclass.fit.0x0.gif/1580506870116.gif)

is the cumulative standard normal distribution. The Bureau of Standards tables of *F(x)* were used (1948).

The deviates were determined by the five-digit numbers on the left-hand half of every page of the digit table. The deviates in the first column correspond page by page with the five-figure digits in the first column of the first 200 pages of the digit table; the deviates in the second column correspond page by page with the first column of the second 200 pages of the digit table. Similarly, the third and fourth columns of deviates were derived from the second column of five-figure digits, etc.

A χ<sup>2</sup> test of the fit of the entire table of deviates to the normal distribution was performed using 400 class intervals (Mann and Wald, 1942) with roughly 250 expected in each. The χ<sup>2</sup> value was found to be 346.4, which for 399 d.f. indicates a very close fit; the probability of a larger value of χ<sup>2</sup> is about 0.97. The detailed data for this test are given in Table 7.

### **Table 7:** Goodness-of-fit Test for Normal Deviates

<table><thead><tr><th>Class Limits</th><th>Expected Number</th><th colspan="2">Observed Number</th><th colspan="2">(Obs.- Exp.)<sup>2</sup>/Exp.</th></tr><tr><th>&nbsp;</th><th>&nbsp;</th><th>Left Tail</th><th>Right Tail</th><th>Left Tail</th><th>Right Tail</th></tr></thead><tbody><tr><td>.000</td><td>239.364</td><td>229</td><td>267</td><td>.449</td><td>3.191</td></tr><tr><td>.006</td><td>239.355</td><td>253</td><td>240</td><td>.778</td><td>.002</td></tr><tr><td>.012</td><td>239.338</td><td>225</td><td>232</td><td>.859</td><td>.225</td></tr><tr><td>.018</td><td>279.195</td><td>275</td><td>286</td><td>.063</td><td>.166</td></tr><tr><td>.025</td><td>239.271</td><td>243</td><td>245</td><td>.058</td><td>.137</td></tr><tr><td>.031</td><td>239.227</td><td>232</td><td>255</td><td>.218</td><td>1.040</td></tr><tr><td>.037</td><td>239.173</td><td>285</td><td>221</td><td>8.781</td><td>1.381</td></tr><tr><td>.043</td><td>278.958</td><td>284</td><td>277</td><td>.091</td><td>.014</td></tr><tr><td>.050</td><td>239.029</td><td>225</td><td>244</td><td>.823</td><td>.103</td></tr><tr><td>.056</td><td>238.948</td><td>225</td><td>218</td><td>.814</td><td>1.836</td></tr><tr><td>.062</td><td>238.860</td><td>260</td><td>231</td><td>1.871</td><td>.259</td></tr><tr><td>.068</td><td>278.546</td><td>225</td><td>287</td><td>10.293</td><td>.257</td></tr><tr><td>.075</td><td>238.638</td><td>253</td><td>211</td><td>.864</td><td>3.201</td></tr><tr><td>.081</td><td>238.522</td><td>224</td><td>224</td><td>.884</td><td>.884</td></tr><tr><td>.087</td><td>278.118</td><td>254</td><td>290</td><td>2.091</td><td>.508</td></tr><tr><td>.094</td><td>238.242</td><td>212</td><td>222</td><td>2.891</td><td>1.107</td></tr><tr><td>.100</td><td>238.098</td><td>225</td><td>250</td><td>.721</td><td>.595</td></tr><tr><td>.106</td><td>277.590</td><td>297</td><td>272</td><td>1.357</td><td>.113</td></tr><tr><td>.113</td><td>237.760</td><td>217</td><td>235</td><td>1.813</td><td>.032</td></tr><tr><td>.119</td><td>237.590</td><td>232</td><td>224</td><td>.132</td><td>.777</td></tr><tr><td>.125</td><td>237.413</td><td>230</td><td>266</td><td>.231</td><td>3.442</td></tr><tr><td>.131</td><td>276.744</td><td>262</td><td>272</td><td>.786</td><td>.081</td></tr><tr><td>.138</td><td>236.998</td><td>244</td><td>226</td><td>.207</td><td>.510</td></tr><tr><td>.144</td><td>236.792</td><td>235</td><td>250</td><td>.014</td><td>.737</td></tr><tr><td>.150</td><td>275.989</td><td>271</td><td>275</td><td>.090</td><td>.004</td></tr><tr><td>.157</td><td>236.320</td><td>246</td><td>273</td><td>.397</td><td>5.693</td></tr><tr><td>.163</td><td>275.415</td><td>267</td><td>279</td><td>.257</td><td>.047</td></tr><tr><td>.170</td><td>235.810</td><td>250</td><td>221</td><td>.854</td><td>.930</td></tr><tr><td>.176</td><td>235.561</td><td>233</td><td>233</td><td>.028</td><td>.028</td></tr><tr><td>.182</td><td>274.495</td><td>265</td><td>291</td><td>.328</td><td>.992</td></tr><tr><td>.189</td><td>234.994</td><td>230</td><td>236</td><td>.106</td><td>.004</td></tr><tr><td>.195</td><td>234.718</td><td>250</td><td>233</td><td>.995</td><td>.013</td></tr><tr><td>.201</td><td>273.481</td><td>263</td><td>283</td><td>.402</td><td>.331</td></tr><tr><td>.208</td><td>234.095</td><td>232</td><td>228</td><td>.019</td><td>.159</td></tr><tr><td>.214</td><td>272.731</td><td>302</td><td>292</td><td>3.141</td><td>1.361</td></tr><tr><td>.221</td><td>233.435</td><td>243</td><td>224</td><td>.392</td><td>.381</td></tr><tr><td>.227</td><td>233.117</td><td>223</td><td>241</td><td>.439</td><td>.267</td></tr><tr><td>.233</td><td>271.557</td><td>276</td><td>286</td><td>.073</td><td>.768</td></tr><tr><td>.240</td><td>232.401</td><td>234</td><td>248</td><td>.011</td><td>1.047</td></tr><tr><td>.246</td><td>270.701</td><td>292</td><td>302</td><td>1.676</td><td>3.619</td></tr><tr><td>.253</td><td>231.649</td><td>229</td><td>225</td><td>.030</td><td>.191</td></tr><tr><td>.259</td><td>269.802</td><td>274</td><td>253</td><td>.065</td><td>1.046</td></tr><tr><td>.266</td><td>230.859</td><td>251</td><td>227</td><td>1.757</td><td>.065</td></tr><tr><td>.272</td><td>268.860</td><td>269</td><td>271</td><td>.000</td><td>.017</td></tr><tr><td>.279</td><td>230.034</td><td>226</td><td>233</td><td>.071</td><td>.038</td></tr><tr><td>.285</td><td>267.876</td><td>266</td><td>274</td><td>.013</td><td>.140</td></tr><tr><td>.292</td><td>229.173</td><td>235</td><td>221</td><td>.148</td><td>.291</td></tr><tr><td>.298</td><td>266.850</td><td>248</td><td>238</td><td>1.332</td><td>3.119</td></tr><tr><td>.305</td><td>266.282</td><td>249</td><td>283</td><td>1.122</td><td>1.050</td></tr><tr><td>.312</td><td>227.779</td><td>240</td><td>216</td><td>.656</td><td>.609</td></tr><tr><td>.318</td><td>265.193</td><td>244</td><td>274</td><td>1.694</td><td>.292</td></tr><tr><td>.325</td><td>226.830</td><td>213</td><td>234</td><td>.843</td><td>.227</td></tr><tr><td>.331</td><td>264.065</td><td>284</td><td>284</td><td>1.505</td><td>1.505</td></tr><tr><td>.338</td><td>263.440</td><td>282</td><td>269</td><td>1.308</td><td>.117</td></tr><tr><td>.345</td><td>225.302</td><td>230</td><td>214</td><td>.098</td><td>.567</td></tr><tr><td>.351</td><td>262.251</td><td>299</td><td>265</td><td>5.150</td><td>.029</td></tr><tr><td>.358</td><td>261.596</td><td>267</td><td>279</td><td>.112</td><td>1.158</td></tr><tr><td>.365</td><td>223.693</td><td>229</td><td>217</td><td>.126</td><td>.200</td></tr><tr><td>.371</td><td>260.347</td><td>275</td><td>279</td><td>.825</td><td>1.336</td></tr><tr><td>.378</td><td>259.659</td><td>266</td><td>253</td><td>.155</td><td>.171</td></tr><tr><td>.385</td><td>222.009</td><td>224</td><td>225</td><td>.018</td><td>.040</td></tr><tr><td>.391</td><td>258.353</td><td>266</td><td>247</td><td>.226</td><td>.499</td></tr><tr><td>.398</td><td>257.633</td><td>250</td><td>244</td><td>.226</td><td>.721</td></tr><tr><td>.405</td><td>256.905</td><td>268</td><td>269</td><td>.479</td><td>.569</td></tr><tr><td>.412</td><td>256.164</td><td>260</td><td>283</td><td>.057</td><td>2.811</td></tr><tr><td>.419</td><td>255.415</td><td>243</td><td>250</td><td>.603</td><td>.115</td></tr><tr><td>.426</td><td>254.654</td><td>284</td><td>269</td><td>3.382</td><td>.808</td></tr><tr><td>.433</td><td>217.661</td><td>230</td><td>208</td><td>.699</td><td>.429</td></tr><tr><td>.439</td><td>253.215</td><td>265</td><td>259</td><td>.548</td><td>.132</td></tr><tr><td>.446</td><td>252.425</td><td>251</td><td>250</td><td>.008</td><td>.023</td></tr><tr><td>.453</td><td>251.626</td><td>257</td><td>235</td><td>.115</td><td>1.099</td></tr><tr><td>.460</td><td>250.817</td><td>264</td><td>249</td><td>.693</td><td>.013</td></tr><tr><td>.467</td><td>249.999</td><td>256</td><td>231</td><td>.144</td><td>1.444</td></tr><tr><td>.474</td><td>249.170</td><td>249</td><td>271</td><td>.000</td><td>1.913</td></tr><tr><td>.481</td><td>248.333</td><td>244</td><td>268</td><td>.076</td><td>1.558</td></tr><tr><td>.488</td><td>247.486</td><td>233</td><td>274</td><td>.848</td><td>2.841</td></tr><tr><td>.495</td><td>246.630</td><td>239</td><td>246</td><td>.236</td><td>.002</td></tr><tr><td>.502</td><td>280.803</td><td>276</td><td>264</td><td>.082</td><td>1.005</td></tr><tr><td>.510</td><td>244.765</td><td>275</td><td>262</td><td>3.735</td><td>1.214</td></tr><tr><td>.517</td><td>243.881</td><td>249</td><td>254</td><td>.107</td><td>.420</td></tr><tr><td>.524</td><td>242.988</td><td>231</td><td>250</td><td>.591</td><td>.202</td></tr><tr><td>.531</td><td>242.087</td><td>223</td><td>242</td><td>1.505</td><td>.000</td></tr><tr><td>.538</td><td>275.555</td><td>288</td><td>256</td><td>.562</td><td>1.388</td></tr><tr><td>.546</td><td>240.126</td><td>229</td><td>228</td><td>.516</td><td>.612</td></tr><tr><td>.553</td><td>239.199</td><td>246</td><td>244</td><td>.193</td><td>.096</td></tr><tr><td>.560</td><td>272.224</td><td>282</td><td>281</td><td>.351</td><td>.283</td></tr><tr><td>.568</td><td>237.183</td><td>235</td><td>252</td><td>.020</td><td>.926</td></tr><tr><td>.575</td><td>236.231</td><td>255</td><td>229</td><td>1.491</td><td>.221</td></tr><tr><td>.582</td><td>268.802</td><td>255</td><td>273</td><td>.709</td><td>.066</td></tr><tr><td>.590</td><td>234.163</td><td>239</td><td>211</td><td>.100</td><td>2.291</td></tr><tr><td>.597</td><td>266.419</td><td>281</td><td>276</td><td>.798</td><td>.345</td></tr><tr><td>.605</td><td>232.062</td><td>218</td><td>220</td><td>.852</td><td>.627</td></tr><tr><td>.612</td><td>263.999</td><td>270</td><td>249</td><td>.136</td><td>.852</td></tr><tr><td>.620</td><td>262.692</td><td>261</td><td>285</td><td>.011</td><td>1.894</td></tr><tr><td>.628</td><td>228.776</td><td>253</td><td>207</td><td>2.565</td><td>2.073</td></tr><tr><td>.635</td><td>260.216</td><td>272</td><td>260</td><td>.534</td><td>.000</td></tr><tr><td>.643</td><td>258.881</td><td>256</td><td>265</td><td>.032</td><td>.145</td></tr><tr><td>.651</td><td>225.417</td><td>233</td><td>230</td><td>.255</td><td>.093</td></tr><tr><td>.658</td><td>256.352</td><td>263</td><td>270</td><td>.172</td><td>.727</td></tr><tr><td>.666</td><td>254.989</td><td>272</td><td>248</td><td>1.135</td><td>.192</td></tr><tr><td>.674</td><td>253.618</td><td>266</td><td>263</td><td>.605</td><td>.347</td></tr><tr><td>.682</td><td>252.239</td><td>245</td><td>235</td><td>.208</td><td>1.178</td></tr><tr><td>.690</td><td>250.849</td><td>255</td><td>274</td><td>.069</td><td>2.137</td></tr><tr><td>.698</td><td>249.453</td><td>239</td><td>240</td><td>.438</td><td>.358</td></tr><tr><td>.706</td><td>248.048</td><td>228</td><td>252</td><td>1.620</td><td>.063</td></tr><tr><td>.714</td><td>246.635</td><td>248</td><td>243</td><td>.008</td><td>.054</td></tr><tr><td>.722</td><td>245.215</td><td>230</td><td>254</td><td>.944</td><td>.315</td></tr><tr><td>.730</td><td>243.787</td><td>235</td><td>246</td><td>.317</td><td>.020</td></tr><tr><td>.738</td><td>272.544</td><td>296</td><td>240</td><td>2.019</td><td>3.886</td></tr><tr><td>.747</td><td>240.729</td><td>231</td><td>230</td><td>.393</td><td>.478</td></tr><tr><td>.755</td><td>239.279</td><td>240</td><td>250</td><td>.002</td><td>.480</td></tr><tr><td>.763</td><td>267.449</td><td>269</td><td>266</td><td>.009</td><td>.008</td></tr><tr><td>.772</td><td>236.177</td><td>229</td><td>256</td><td>.218</td><td>1.664</td></tr><tr><td>.780</td><td>263.944</td><td>292</td><td>283</td><td>2.982</td><td>1.376</td></tr><tr><td>.789</td><td>233.048</td><td>241</td><td>215</td><td>.271</td><td>1.398</td></tr><tr><td>.797</td><td>260.410</td><td>246</td><td>276</td><td>.797</td><td>.933</td></tr><tr><td>.806</td><td>258.526</td><td>239</td><td>227</td><td>1.475</td><td>3.844</td></tr><tr><td>.815</td><td>228.216</td><td>228</td><td>203</td><td>.000</td><td>2.786</td></tr><tr><td>.823</td><td>254.953</td><td>235</td><td>236</td><td>1.562</td><td>1.409</td></tr><tr><td>.832</td><td>253.050</td><td>262</td><td>250</td><td>.317</td><td>.037</td></tr><tr><td>.841</td><td>251.143</td><td>262</td><td>258</td><td>.469</td><td>.187</td></tr><tr><td>.850</td><td>249.228</td><td>241</td><td>261</td><td>.272</td><td>.556</td></tr><tr><td>.859</td><td>247.309</td><td>245</td><td>225</td><td>.022</td><td>2.012</td></tr><tr><td>.868</td><td>245.385</td><td>237</td><td>247</td><td>.287</td><td>.011</td></tr><tr><td>.877</td><td>270.387</td><td>253</td><td>270</td><td>1.118</td><td>.001</td></tr><tr><td>.887</td><td>241.307</td><td>220</td><td>245</td><td>1.881</td><td>.057</td></tr><tr><td>.896</td><td>239.369</td><td>237</td><td>231</td><td>.023</td><td>.293</td></tr><tr><td>.905</td><td>263.687</td><td>267</td><td>281</td><td>.042</td><td>1.137</td></tr><tr><td>.915</td><td>235.266</td><td>241</td><td>211</td><td>.140</td><td>2.503</td></tr><tr><td>.924</td><td>259.121</td><td>226</td><td>236</td><td>4.234</td><td>2.063</td></tr><tr><td>.934</td><td>256.713</td><td>266</td><td>252</td><td>.336</td><td>.087</td></tr><tr><td>.944</td><td>254.300</td><td>235</td><td>250</td><td>1.465</td><td>.073</td></tr><tr><td>.954</td><td>251.886</td><td>268</td><td>235</td><td>1.031</td><td>1.132</td></tr><tr><td>.964</td><td>249.469</td><td>272</td><td>244</td><td>2.035</td><td>.120</td></tr><tr><td>.974</td><td>247.051</td><td>238</td><td>249</td><td>.332</td><td>.015</td></tr><tr><td>.984</td><td>244.633</td><td>243</td><td>239</td><td>.011</td><td>.130</td></tr><tr><td>.994</td><td>242.212</td><td>230</td><td>231</td><td>.616</td><td>.519</td></tr><tr><td>1.004</td><td>263.640</td><td>274</td><td>260</td><td>.407</td><td>.050</td></tr><tr><td>1.015</td><td>237.132</td><td>250</td><td>250</td><td>.698</td><td>.698</td></tr><tr><td>1.025</td><td>258.052</td><td>267</td><td>270</td><td>.310</td><td>.553</td></tr><tr><td>1.036</td><td>255.128</td><td>256</td><td>241</td><td>.003</td><td>.782</td></tr><tr><td>1.047</td><td>252.207</td><td>219</td><td>254</td><td>4.372</td><td>.013</td></tr><tr><td>1.058</td><td>249.289</td><td>238</td><td>245</td><td>.511</td><td>.074</td></tr><tr><td>1.069</td><td>246.374</td><td>258</td><td>244</td><td>.549</td><td>.023</td></tr><tr><td>1.080</td><td>243.465</td><td>253</td><td>235</td><td>.373</td><td>.294</td></tr><tr><td>1.091</td><td>262.286</td><td>271</td><td>256</td><td>.290</td><td>.151</td></tr><tr><td>1.103</td><td>237.399</td><td>229</td><td>215</td><td>.297</td><td>2.113</td></tr><tr><td>1.114</td><td>255.683</td><td>267</td><td>265</td><td>.501</td><td>.340</td></tr><tr><td>1.126</td><td>252.252</td><td>280</td><td>275</td><td>3.052</td><td>2.051</td></tr><tr><td>1.138</td><td>248.830</td><td>243</td><td>227</td><td>.137</td><td>1.915</td></tr><tr><td>1.150</td><td>245.421</td><td>231</td><td>271</td><td>.847</td><td>2.666</td></tr><tr><td>1.162</td><td>242.022</td><td>256</td><td>234</td><td>.807</td><td>.266</td></tr><tr><td>1.174</td><td>258.370</td><td>270</td><td>263</td><td>.524</td><td>.083</td></tr><tr><td>1.187</td><td>254.414</td><td>235</td><td>256</td><td>1.481</td><td>.010</td></tr><tr><td>1.200</td><td>250.476</td><td>260</td><td>247</td><td>.362</td><td>.048</td></tr><tr><td>1.213</td><td>246.557</td><td>271</td><td>260</td><td>2.423</td><td>.733</td></tr><tr><td>1.226</td><td>242.659</td><td>255</td><td>227</td><td>.628</td><td>1.010</td></tr><tr><td>1.239</td><td>256.990</td><td>256</td><td>242</td><td>.004</td><td>.874</td></tr><tr><td>1.253</td><td>252.521</td><td>251</td><td>262</td><td>.009</td><td>.356</td></tr><tr><td>1.267</td><td>248.081</td><td>257</td><td>225</td><td>.321</td><td>2.147</td></tr><tr><td>1.281</td><td>243.672</td><td>244</td><td>220</td><td>.000</td><td>2.300</td></tr><tr><td>1.295</td><td>256.219</td><td>257</td><td>232</td><td>.002</td><td>2.289</td></tr><tr><td>1.310</td><td>251.234</td><td>273</td><td>215</td><td>1.886</td><td>5.226</td></tr><tr><td>1.325</td><td>246.291</td><td>244</td><td>241</td><td>.021</td><td>.114</td></tr><tr><td>1.340</td><td>257.309</td><td>249</td><td>285</td><td>.268</td><td>2.980</td></tr><tr><td>1.356</td><td>251.786</td><td>268</td><td>266</td><td>1.044</td><td>.802</td></tr><tr><td>1.372</td><td>246.320</td><td>240</td><td>229</td><td>.162</td><td>1.218</td></tr><tr><td>1.388</td><td>255.788</td><td>265</td><td>229</td><td>.332</td><td>2.805</td></tr><tr><td>1.405</td><td>249.751</td><td>252</td><td>278</td><td>.020</td><td>3.195</td></tr><tr><td>1.422</td><td>243.787</td><td>280</td><td>237</td><td>5.379</td><td>.189</td></tr><tr><td>1.439</td><td>251.707</td><td>268</td><td>267</td><td>1.055</td><td>.929</td></tr><tr><td>1.457</td><td>245.192</td><td>240</td><td>237</td><td>.110</td><td>.274</td></tr><tr><td>1.475</td><td>251.846</td><td>247</td><td>257</td><td>.093</td><td>.105</td></tr><tr><td>1.494</td><td>257.489</td><td>259</td><td>268</td><td>.009</td><td>.429</td></tr><tr><td>1.514</td><td>249.809</td><td>238</td><td>256</td><td>.558</td><td>.153</td></tr><tr><td>1.534</td><td>242.262</td><td>233</td><td>238</td><td>.354</td><td>.075</td></tr><tr><td>1.554</td><td>257.931</td><td>247</td><td>237</td><td>.463</td><td>1.699</td></tr><tr><td>1.576</td><td>249.141</td><td>242</td><td>263</td><td>.205</td><td>.771</td></tr><tr><td>1.598</td><td>251.267</td><td>239</td><td>265</td><td>.599</td><td>.751</td></tr><tr><td>1.621</td><td>242.072</td><td>236</td><td>249</td><td>.152</td><td>.198</td></tr><tr><td>1.644</td><td>252.941</td><td>252</td><td>222</td><td>.004</td><td>3.785</td></tr><tr><td>1.669</td><td>252.098</td><td>226</td><td>281</td><td>2.702</td><td>3.313</td></tr><tr><td>1.695</td><td>250.295</td><td>254</td><td>224</td><td>.055</td><td>2.762</td></tr><tr><td>1.722</td><td>247.560</td><td>263</td><td>276</td><td>.963</td><td>3.267</td></tr><tr><td>1.750</td><td>252.118</td><td>247</td><td>217</td><td>.104</td><td>4.892</td></tr><tr><td>1.780</td><td>246.755</td><td>265</td><td>265</td><td>1.349</td><td>1.349</td></tr><tr><td>1.811</td><td>255.166</td><td>255</td><td>257</td><td>.000</td><td>.013</td></tr><tr><td>1.845</td><td>246.473</td><td>246</td><td>226</td><td>.001</td><td>1.701</td></tr><tr><td>1.880</td><td>249.853</td><td>249</td><td>259</td><td>.003</td><td>.335</td></tr><tr><td>1.918</td><td>249.912</td><td>266</td><td>237</td><td>1.036</td><td>.667</td></tr><tr><td>1.959</td><td>252.136</td><td>248</td><td>238</td><td>.068</td><td>.793</td></tr><tr><td>2.004</td><td>249.874</td><td>249</td><td>251</td><td>.003</td><td>.005</td></tr><tr><td>2.053</td><td>252.080</td><td>239</td><td>273</td><td>.679</td><td>1.736</td></tr><tr><td>2.108</td><td>251.207</td><td>248</td><td>217</td><td>.041</td><td>4.658</td></tr><tr><td>2.170</td><td>249.038</td><td>238</td><td>251</td><td>.489</td><td>.015</td></tr><tr><td>2.241</td><td>250.376</td><td>242</td><td>251</td><td>.280</td><td>.002</td></tr><tr><td>2.326</td><td>250.143</td><td>226</td><td>240</td><td>2.330</td><td>.411</td></tr><tr><td>2.432</td><td>249.585</td><td>248</td><td>241</td><td>.010</td><td>.295</td></tr><tr><td>2.575</td><td>251.174</td><td>262</td><td>256</td><td>.467</td><td>.093</td></tr><tr><td>2.807</td><td>249.526</td><td>254</td><td>264</td><td>.080</td><td>.840</td></tr><tr><th>Total</th><th></th><th>50124</th><th>49876</th><th>158.967</th><th>187.450</th></tr></tbody></table>

A more refined test of the fit in the tails was made on the deviates exceeding 2.326 in absolute value. Eighty intervals (Mann and Wald, 1942) were used, each with an expectation of approximately 25. The χ<sup>2</sup> value was 76.26, with 80 d.f.; the probability of a larger value is about 0.61. The details of this test are given in Table 8.

### **Table 8:** Goodness-of-fit in 1 Per Cent Tails

<table><thead><tr><th>Class Limits</th><th>Expected Number</th><th colspan="2">Observed Number</th><th>(Obs.- Exp.)<sup>2</sup>/Exp.</th></tr><tr><th>&nbsp;</th><th>&nbsp;</th><th>Left Tail</th><th>Right Tail</th><th>Left + Right Tails</th></tr></thead><tbody><tr><td>2.326</td><td>26.366</td><td>29</td><td>22</td><td>.986</td></tr><tr><td>2.336</td><td>25.757</td><td>21</td><td>20</td><td>2.165</td></tr><tr><td>2.346</td><td>25.159</td><td>26</td><td>30</td><td>.960</td></tr><tr><td>2.356</td><td>24.574</td><td>17</td><td>24</td><td>2.348</td></tr><tr><td>2.366</td><td>23.999</td><td>19</td><td>21</td><td>1.416</td></tr><tr><td>2.376</td><td>25.748</td><td>24</td><td>22</td><td>.664</td></tr><tr><td>2.387</td><td>25.082</td><td>20</td><td>21</td><td>1.694</td></tr><tr><td>2.398</td><td>24.428</td><td>20</td><td>21</td><td>1.284</td></tr><tr><td>2.409</td><td>23.790</td><td>20</td><td>24</td><td>.606</td></tr><tr><td>2.420</td><td>25.240</td><td>30</td><td>35</td><td>4.672</td></tr><tr><td>2.432</td><td>26.524</td><td>32</td><td>36</td><td>4.516</td></tr><tr><td>2.445</td><td>23.748</td><td>23</td><td>26</td><td>.237</td></tr><tr><td>2.457</td><td>24.948</td><td>30</td><td>23</td><td>1.175</td></tr><tr><td>2.470</td><td>25.986</td><td>25</td><td>30</td><td>.657</td></tr><tr><td>2.484</td><td>25.098</td><td>23</td><td>14</td><td>5.083</td></tr><tr><td>2.498</td><td>24.236</td><td>20</td><td>23</td><td>.803</td></tr><tr><td>2.512</td><td>25.037</td><td>29</td><td>24</td><td>.670</td></tr><tr><td>2.527</td><td>25.682</td><td>28</td><td>25</td><td>.227</td></tr><tr><td>2.543</td><td>24.657</td><td>22</td><td>24</td><td>.304</td></tr><tr><td>2.559</td><td>23.669</td><td>16</td><td>16</td><td>4.970</td></tr><tr><td>2.575</td><td>26.868</td><td>28</td><td>25</td><td>.178</td></tr><tr><td>2.594</td><td>24.261</td><td>21</td><td>26</td><td>.563</td></tr><tr><td>2.612</td><td>25.652</td><td>24</td><td>18</td><td>2.389</td></tr><tr><td>2.632</td><td>24.336</td><td>24</td><td>31</td><td>1.829</td></tr><tr><td>2.652</td><td>25.321</td><td>21</td><td>23</td><td>.950</td></tr><tr><td>2.674</td><td>24.926</td><td>26</td><td>26</td><td>.093</td></tr><tr><td>2.697</td><td>24.412</td><td>29</td><td>32</td><td>3.221</td></tr><tr><td>2.721</td><td>25.624</td><td>31</td><td>26</td><td>1.133</td></tr><tr><td>2.748</td><td>24.639</td><td>31</td><td>24</td><td>1.659</td></tr><tr><td>2.776</td><td>25.135</td><td>27</td><td>25</td><td>.139</td></tr><tr><td>2.807</td><td>25.164</td><td>26</td><td>39</td><td>7.635</td></tr><tr><td>2.841</td><td>24.759</td><td>24</td><td>21</td><td>.594</td></tr><tr><td>2.878</td><td>25.087</td><td>25</td><td>28</td><td>.339</td></tr><tr><td>2.920</td><td>25.144</td><td>26</td><td>35</td><td>3.893</td></tr><tr><td>2.968</td><td>24.731</td><td>19</td><td>24</td><td>1.350</td></tr><tr><td>3.023</td><td>25.063</td><td>29</td><td>18</td><td>2.609</td></tr><tr><td>3.090</td><td>25.160</td><td>35</td><td>22</td><td>4.245</td></tr><tr><td>3.175</td><td>25.002</td><td>20</td><td>32</td><td>2.959</td></tr><tr><td>3.291</td><td>24.939</td><td>24</td><td>15</td><td>3.996</td></tr><tr><td>3.481</td><td>24.977</td><td>26</td><td>30</td><td>1.052</td></tr><tr><th>Total</th><th>1000.928</th><th>990</th><th>1001</th><th>76.263</th></tr></tbody></table>

The only tests made on the squares of the deviates consisted in computing sums of *k* squares and comparing the distribution of the sums with the χ<sup>2</sup> distribution with *k* d.f., employing again the standard goodness-of-fit test. This was done for *k* = 25, 50, 100, 300, with the following results:

| *k* | Number of Sums | Number of Intervals (i) | χ<sup>2</sup> with i – 1 Degrees of Freedom | Probability of a Larger χ<sup>2</sup> |
| --- | --- | --- | --- | --- |
| 25 | 4000 | 100 | 92.92 | 0.66 |
| 50 | 2000 | 100 | 92.45 | 0.67 |
| 100 | 1000 | 50 | 57.75 | 0.19 |
| 300 | 333 | 34 | 38.70 | 0.23 |

The fourth column gives the goodness-of-fit χ<sup>2</sup> value for the fit to the χ<sup>2</sup> distribution with *k* degrees of freedom. Intervals of approximately equal probability were used in all cases.

## Use of the Tables

The lines of the digit table are numbered from 00000 to 19999. In any use of the table, one should first find a random starting position. A common procedure for doing this is to open the book to an unselected page of the digit table and blindly choose a five-digit number; this number with the first digit reduced modulo 2 determines the starting line; the two digits to the right of the initially selected five- digit number are reduced modulo 50 to determine the starting column in the starting line. To guard against the tendency of books to open repeatedly at the same page and the natural tendency of a person to choose a number toward the center of the page: every five-digit number used to determine a starting position should be marked and not used a second time for this purpose.

The digit table is also used to find a random starting position in the deviate table: Select a five-digit number as before; the first four digits give the starting line (the lines being numbered from 0000 to 9999) and the fifth digit gives the starting position in the line.

Ordinarily, the table is read in the same direction as a book is read; however, the size of the table may be effectively increased by varying the direction in which it is read. Thus, one may read columns instead of lines, may read the table backward, may read lines forward but pages from bottom to top, etc. Of course, care must be taken in using these devices to avoid introducing correlations when the table is used more than once on the same problem.

To obtain a random permutation of the integers 1, 2, . . . , *n*, select a random starting position; use the five-digit number containing the starting position and the following *n* – 1 five-digit numbers; put the integers in the same order as these *n* five-digit numbers. In case of ties among the five-digit numbers, use additional columns to the right to make six or more digit numbers. The same procedure is used to obtain a random permutation of *n* objects, some of which are indistinguishable, by merely numbering the objects arbitrarily from 1 to *n*.

To obtain random observations from any distribution *G(x),* use [Eq. (1)](https://www.rand.org/pubs/monograph_reports/#eq1), substitute *G(x)* for *F(x),* and employ as many digits in *D* as required for the desired accuracy of the observations. Of course the negative exponent of 10 in Eq. (1) must be equal to the number of digits in *D*. If *G(x)* has a discontinuity at *x*<sub>0</sub>, define it to be continuous on the right and take the solution of Eq. (1) to be *x*<sub>0</sub> when the left side of Eq. (1) falls between *G(x*<sub>0</sub>\-) and *G(x*<sub>0</sub>). For example, if

and one is content with three-figure accuracy, then the three-digit number 082 determines an observation from a population distributed by *G(x)* as follows:

.0825 = 1 – *e<sup>–x</sup>*,

*x* = .086.

A technique suggested by von Neumann, called the "rejection method," enables one to substitute for the solution of Eq. (1) a stochastic process involving a much simpler computation; this technique is discussed in Kahn, 1956.

To obtain pairs of normal deviates with given correlation ρ, use pairs *(x, y)* of independent deviates from the table and transform them to

![](https://www.rand.org/content/rand/pubs/monograph_reports/MR1418/_jcr_content/par/product/par-research-brief/wrapperdiv_1769645097/imagewithclass.fit.0x0.gif/1580507460230.gif)

Thus for ρ = –.6, for example, if (.732, –1.205) are two deviates from the table, then

is a pair of deviates from a normal population with the desired correlation.[<sup>[3]</sup>](https://www.rand.org/pubs/monograph_reports/#fn3)

In general, to obtain a random observation from a bivariate population with distribution *G(x,y)*, one uses a marginal distribution on one variate, say, *G*<sub>1</sub>*(x),* and the conditional distribution, say, *G*<sub>2</sub>*(y/x),* on the other. Two random numbers determine the observation: one determines *x* by employing *G*<sub>1</sub>*(x)* in Eq. (1), and the other determines *y* by employing *G*<sub>2</sub>*(y/x)* in Eq. (1). Thus, if a probability density is uniform (and equal to two) over the triangle bounded by *x* = 0, *y* = 0, *x* + *y* = 1 and is zero elsewhere, then

![](https://www.rand.org/content/rand/pubs/monograph_reports/MR1418/_jcr_content/par/product/par-research-brief/wrapperdiv_2061672912/imagewithclass.fit.0x0.gif/1580507546436.gif)

and two four-digit random numbers, 5402 and 1770, determine the observation (.3220, .1200). The direct generalization of this procedure will determine observations from multivariate populations.

[**Complete tables available for download at the top of the page ⤴**](https://www.rand.org/pubs/monograph_reports/#top)

[View addendum on data quality issues](https://www.rand.org/pubs/monograph_reports/MR1418/dataqual.html)

## References

1\. Kendall, M. G., and B. B. Smith, *Random Sampling Numbers,* Cambridge University Press, 1939.

2\. Juncosa, M. L., *Random Number Generation on the BRL High-Speed Computing Machines,* Ballistic Research Laboratories Report No. 855, Aberdeen Proving Ground, Maryland, 1953.

3\. Meyer, H. A., L. S. Gephart, and N. L. Rasmussen, *On the Generation and Testing of Random Digits,* WADC Technical Report 54-55, Wright-Patterson Air Force Base, Ohio, 1954.

4\. Moshman, Jack, "Generation of Pseudo-random Numbers on a Decimal Calculator," *J. Assoc. Computing Machinery,* Vol. 1, 1954, p. 88.

5\. *The Monte Carlo Method* (Proceedings of a Symposium held in 1949), National Bureau of Standards Report AMS 12, Government Printing Office, Washington 25, D.C., 1951.

6\. Curtiss, J. H., "Sampling Methods Applied to Differential and Difference Equations," *Seminar on Scientific Computation,* International Business Machines Corp., New York, 1949.

7\. Kahn, H., and A. W. Marshall, "Methods of Reducing Sample Size in Monte Carlo Computations," *J. Operations Res. Soc. of Amer.,* Vol. 1, 1953, pp. 263–278.

8\. Kahn, H., *Applications of Monte Carlo,* The RAND Corporation, [RM-1237](https://www.rand.org/pubs/research_memoranda/RM1237.html), 1956.

9\. Horton, H. B., and R. T. Smith, "A Direct Method for Producing Random Digits in Any Number System," *Ann. Math. Statistics,* Vol. 20, 1949, pp. 82–90.

10\. Mann, H. B., and A. Wald, "On the Choice of the Number of Class Intervals in the Application of the Chi-Square Test," *Ann. Math. Statistics,* Vol. 13, 1942, pp. 306–317.

11\. *Tables of Probability Functions,* 2d ed., U.S. Government Printing Office, Washington, D.C., 1948.

12\. Good, I.J., "The Serial Test for Sampling Numbers and Other Tests for Randomness," *Proc. Camb. Phil. Soc.*, Vol. 49, 1953, pp. 276–284.

## Notes

## Downloads

- Foreword, Acknowledgement & Introduction

PDF, 1.5 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.introduction.pdf)
- Table of Random Digits

PDF, 33.2 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.digits.pdf)
- Table of Random Normal Deviates

PDF, 12 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.deviates.pdf)
- Errata

PDF, 0.1 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.errata.pdf)

### Supporting Files

- Datafile: A Million Random Digits

This file contains the Table of Random Digits in plain text form.

ZIP, 0.6 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.digits.txt.zip)
- Datafile: 100,000 Normal Deviates

This file contains the Table of Random Normal Deviates in plain text form.

ZIP, 0.3 MB

[View original](https://www.rand.org/content/dam/rand/pubs/monograph_reports/MR1418/MR1418.deviates.txt.zip)

## Order a Print Copy

Format

Paperback

Page count

628 pages

- [Document Details](https://www.rand.org/pubs/monograph_reports/#document-details)
- [Citation](https://www.rand.org/pubs/monograph_reports/#citation)

## Document Details

- **Copyright:** RAND Corporation
- **Availability:** Available
- **Year:** 2001
- **Print Format:** Paperback
- **Paperback Pages:** 628
- **Paperback Price:** $68.00
- **Paperback ISBN/EAN:** 978-0-8330-3047-4
- **DOI:** [https://doi.org/10.7249/MR1418](https://doi.org/10.7249/MR1418)
- **Document Number:** MR-1418-RC

## Citation

### RAND Style Manual

*A Million Random Digits with 100,000 Normal Deviates,* RAND Corporation, MR-1418-RC, 2001. As of February 14, 2025: https://www.rand.org/pubs/monograph\_reports/MR1418.html

### Chicago Manual of Style

A Million Random Digits with 100,000 Normal Deviates. Santa Monica, CA: RAND Corporation, 2001. https://www.rand.org/pubs/monograph\_reports/MR1418.html. Also available in print form.

This publication is part of the RAND monograph report series. The monograph report was a product of RAND from 1993 to 2003. RAND monograph reports presented major research findings that addressed the challenges facing the public and private sectors. They included executive summaries, technical documentation, and synthesis pieces.

This research in the public interest was supported by RAND using discretionary funds made possible by the generosity of RAND's donors, the fees earned on client-funded research, or independent research and development (IR&D) funds provided by the Department of Defense.

This document and trademark(s) contained herein are protected by law. This representation of RAND intellectual property is provided for noncommercial use only. Unauthorized posting of this publication online is prohibited; linking directly to this product page is encouraged. Permission is required from RAND to reproduce, or reuse in another form, any of its research documents for commercial purposes. For information on reprint and reuse permissions, please visit [www.rand.org/pubs/permissions](https://www.rand.org/pubs/permissions.html).

RAND is a nonprofit institution that helps improve policy and decisionmaking through research and analysis. RAND's publications do not necessarily reflect the opinions of its research clients and sponsors.