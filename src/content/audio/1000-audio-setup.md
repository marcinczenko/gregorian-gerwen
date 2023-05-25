---
path: /audio
title: 'Our Audio Setup'
tag: technology
content: ../styling.md
sortIndex: 1000
---

## Current Installation

The system we have is a [100V system](https://www.monacor.com/magazine/100-v-speakers). It is convenient: speakers can be added/removed without impacting the whole installation as long as the maximum output power of the amplifier is respected (for voice-only applications, it is recommended that the combined load of all the loudspeakers is less than 90% of the maximum output power of the amplifier).

The drawing below shows the overview of our current installation.

<a id="figure-1"></a> 
<div class="scrollable flex-wrap responsive">
<div class="content-600">
  <img alt="Current Installation" src="../images/current.drawio.png"/>
</div>
</div>
<div class="flex-wrap responsive">
<p class="figure-title"><b>Figure 1</b> Current Installation</p>
</div>

The components we currently use are described below:

| Component | Description |
|---|---|
| Microphone | **Prefer MPR-85**<br>*Fixed-charge back plate, permanently polarized condenser*<br>**Output:** XLR balanced<br>**Battery:** 1.5V AA |
| Amplifier | **Eagle PA4060E**<br>**Power output:** 60W<br>[User Manual](/pdf/PA4000-Series.pdf) |
| Speakers | **Philips EL 7163/00**<br>*70V/100V Speakers, 12W*<br>**Cable color code:** blue: 70V, brown: 100V, black: common |

From the above description, we see that the existing configuration with 7 active loudspeakers exceeds the output power of the amplifier (output power is 60W, the combined power of all speakers is 84W).

## Proposed installation

In order to make the installation more robust and flexible, I would recommend maintaining the current 100V setup, but to upgrade the components.

Thanks to the flexibility of the 100V installation, the upgrade can be performed in steps. The best way is to first upgrade the amplifier, then the speakers (best all at once or in few stages but without waiting too long between them in order to avoid supply problems or product discontinuity), and only then the microphone setup.


## Amplifier and Speakers

This is the most affordable selection that should be sufficient for our needs. The amplifier has 2 XLR balanced microphone inputs plus 2 unbalanced microphone/line inputs (6.3mm (1⁄4”) input jack) and two RCA line inputs. There is also an RCA line output and phantom power (24v, see the note below) for XLR microphone input. The output power of 120W should be enough to power 11 speaker of 10W. This amplifier has one zone.

> The Power Dynamic amplifiers provide optional *phantom power* to the XLR inputs. In the PRM120 amplifier shown below this is 24V, for other amplifiers it is sometimes 12V. Unfortunately, lots of modern condenser microphones require 48V of phantom power. Thus, for a more reliable solution, it is better to use an external Phantom Power supplier as for example [Millenium PP2B Phantom Power Supply](https://www.thomann.de/nl/millenium_pp2b.htm?gclid=EAIaIQobChMIu7CYwdqQ_wIVWvJ3Ch0mygxLEAQYASABEgIpXfD_BwE) (€32, 24-May-2023).

| Component | Description |
|---|---|
| Amplifier | **Power Dynamics PRM120 100V**<br>**Power output:** 120W<br>[Product Description](https://www.tronios.com/prm120-100v-6-ch-mixer-amplifier-120w/)<br>[User Manual](/pdf/PRM120.pdf)<br>**Buy:** [€254, 24-May-2023](https://www.bax-shop.nl/100-volt-versterker-mixer/power-dynamics-prm120-100v-4-8-ohm-19-inch-versterker-120-watt) |
| Speakers | **Power Dynamics ICS4 100V 20W**<br>*100V Speakers*<br>**Available power settings:** 5W, 10W, 20W<br>**Buy:** [€49, 24-May-2023, price per unit](https://www.bax-shop.nl/100v-zuil-luidspreker/power-dynamics-ics4-100v-20-watt-zuilluidspreker-wit) |

With higher budget, we may consider a more powerful or even multi-zone amplifier.

## Microphone and other materials

Here are some example of good quality, yet affordable microphones specially meant for churches or public announcement setups. The list also includes other elements that may need to be considered. As said, this is the last step of the upgrade and it does not affect the overal installation (which means it is flexible and can be changed regardless of the choice of the amplifier and speakers above). 

| Component | Description |
|---|---|
| Microphone | **Audio-Technica PRO49QL**<br>*Cardioid Condenser Quick-Mount Gooseneck Microphone*<br>**Output:** XLR balanced<br>**Phantom power:** 48V<br>[Product Description](https://www.audio-technica.com/nl-nl/microphones/wired/best-for/podium-lecturn/pro49q)<br>**Buy**: [€139, 24-May-2023](https://www.thomann.de/nl/audio_technica_pro_49_ql_schwanenhalsmikrofon.htm) |
| Microphone | **Audio-Technica U857Q**<br>*Cardioid Condenser Quick-Mount Gooseneck Microphone*<br>**Output:** XLR balanced<br>**Phantom power:** 48V<br>[Product Description](https://www.audio-technica.com/nl-nl/microphones/wired/best-for/podium-lecturn/u857q)<br>**Buy:** [€249, 24-May-2023](https://www.thomann.de/nl/audio_technica_u857q.htm) |
| Mount-plate | **AT8647QM/S**<br>*Microphone Shock-mount Plate with Mute Switch*<br>[Product Description](https://www.audio-technica.com/nl-nl/at8647qm-s?gclid=CjwKCAjw67ajBhAVEiwA2g_jEIBs6lpyXsY0_I4tprShd88NJp96Ufyw1zWTeVJY6BhxtxrlrOKaTBoCEacQAvD_BwE)<br>[Datasheet](/pdf/AT8646-Specification-Sheet.pdf)<br>**Buy:** [€110, 24-May-2023](https://www.audio-technica.com/nl-nl/at8647qm-s?gclid=CjwKCAjw67ajBhAVEiwA2g_jEIBs6lpyXsY0_I4tprShd88NJp96Ufyw1zWTeVJY6BhxtxrlrOKaTBoCEacQAvD_BwE) |
| Shock Mount | **AT8662**<br>*Quick-mount Microphone Shock Mount*<br>[Product Description](https://www.audio-technica.com/nl-nl/at8662)<br>[Datasheet](/pdf/AT8662-Installation-Guide.pdf)<br>**Buy:** [€38, 24-May-2023](https://www.thomann.de/nl/audio_technica_at_8662.htm) |
| XLR Socket | **Neutrik NC3 FD-L-B-1**<br>*XLR Inbouwkoppeling*<br>**Buy:** [€6.50, 24-May-2023](https://www.thomann.de/nl/neutrik_nc3fdl1b.htm) |
| Inline<br>Microphone<br>Switch | **JTS MA-SW**<br>*Inline-microfoonschakelaar*<br>**Buy:** [€23.90, 24-May-2023](https://www.thomann.de/nl/jts_ma_sw.htm?gclid=EAIaIQobChMIzLSqjcSO_wIVGs13Ch2ATgh_EAQYDCABEgJdEfD_BwE) |
| Microphone<br>Stand | **the t.bone Table Stand**<br>*Tafelvoet voor microfoon*<br>**Buy:** [€35, 24-May-2023](https://www.thomann.de/nl/the_tbone_tischfuss.htm) |
| Microphone<br>Station | **Sirus Desktop Microphone Station**<br>*Microphone-Desktop Station with Anti-Shock Microphone Connection*<br>**Buy:** [€66, 24-May-2023](https://www.thomann.de/nl/sirus_desktop_microphone_station.htm) |