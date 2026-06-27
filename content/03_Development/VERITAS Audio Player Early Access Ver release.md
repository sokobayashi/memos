---
title: VERITAS Audio Player Early Access Ver release
tags:
  - VERITAS
  - AudioPlayer
---

# VERITAS Early Access版をリリースしました

[[VERITAS Version 1.5リリースしました]]

## VERITAS - Honest Playback

![[VERITAS-screen.png]]
VERITASは、再生品質を最優先に設計した macOS 用オーディオプレーヤーです。

ローカルフォルダ内の音源をブラウズし、再生することに特化しています。  
余計な機能を増やすよりも、音源をできるだけ素直に、安定して、気持ちよく再生することを重視しました。

排他出力の優先設定にも対応しており、環境に応じて最適な再生経路を選べます。

今後 App Store での公開を予定していますが、その前段階として、まずは Early Access版として販売します。  
本 Early Access版を購入された方には、将来的な App Store版も無料でご利用いただけるよう対応予定です。

また、機能制限はありますが、音質は製品版と変わらない無料トライアル版も用意しています。  
ぜひ、お使いの環境で試してみてください。

製品版はSTORESにて3,000円となっております。
https://veritas-software.stores.jp/
![[Pasted image 20260517231143.png]]

なお、STORESから購入できる限り対象地域に制限はありませんが、日本国内ユーザーを主な対象としています。

---

## 開発のきっかけ

VERITASを作り始めたきっかけは、とても単純です。

**macOSで、シンプルで高品質なローカル音源再生用のオーディオプレーヤーが欲しかった。**

ストリーミングサービスは非常に便利です。 多くの人がApple MusicやSpotify、YouTubeで音楽を聞くことが日常に鳴っていると思います。
一方で、ストリーミングの最大のリスクは配信側が取り下げてしまったら二度と聞けなくなってしまうという点があります。
また、音質に関してもベストなものとは言えません。
こうしたことから、良い音で聴きたいという作品はCDやDL版の購入でローカル再生で聞く必要がありました。

macOSではAudirvanaが非常に有名で、私も再生品質がとても良いと感じていました。
ただ、Audirvanaは私にとっては操作性がイマイチだったこともあり、基本的にWindowsで聴くようになってしまいました。
その他いくつかプレーヤーを試してみたりはしましたが、音質的にもWindows環境を上回ることが出来ないのでmacOS環境は諦めていました。

それからしばらく経ち、AIでプログラミングが身近になったこともあり自作してみることにしたのがきっかけです。

---

## コーディングエージェントと共に開発

これまでの経験から、Digital to Analog Convertを行う前、完全なデジタルドメインでの扱い方が非常に重要だということは感覚的に理解していました。
VERITASは、私自身がデジタル領域で「こうすれば音が良くなるのではないか」と思っていた知識・アイデアを設計に落とし込み、CodexやClaudeで実装を行っていきました。

意外なことに、最初に出来上がった初期バージョンの時点で、音はかなり良く、ある程度自分の仮説は的を外していないと思えました。。
もちろん、それで完成というわけではなく、怪しい動作や見た目のブラッシュアップを進めていく必要がありました。

そして、そこからが大変でした。

機能を追加すると、音が変わる。  
UIを少し作り込むと、音が悪くなる。  
オーディオ再生とは何も関係が無いコードが、明らかに再生品質に影響を及ぼす。

そうしたことが何度もありました。

機能を足しては戻し、設計・実装を見直し、また試す。  
その繰り返しでした。

---

## 音質のために

VERITASでは、単に「再生できる」ことではなく、再生中の余計な処理や負荷をできるだけ避けることを重視しています。

ダメだった実装を分析したり、オーディオプログラミングのベストプラクティスを調査したり、Deep Researchを使ってCore Audioまわりの設計を掘り下げたりしながら、少しずつ現在の形に近づけてきました。

正直に言うと、コードと音質の因果関係をすべて解明できたとは、まだ言えません。

ただ、何が悪さをしやすいのか。  
どのような設計にすると再生品質を保ちやすいのか。  
その輪郭は、開発を通じてかなり見えてきました。

VERITASは、そうした試行錯誤の積み重ねから生まれたプレーヤーです。
結果として、macOSで利用可能な単体プレーヤーの中で音質は最高峰であると自負しています。

---

## Early Access版について

今回リリースするのは、App Store公開前の Early Access版です。

現時点でも、ローカル音源をブラウズして再生するプレーヤーとしての基本機能は備えています。  
一方で、今後さらに改善したい点や、追加したい機能もあります。

まずはこのバージョンを実際に使っていただき、フィードバックをいただきながら、追加開発やさらなる音質向上を行っていきたいと考えています。

最終的には、より完成度を高めたうえで App Store に公開する予定です。
Early Access版をご購入頂いた方には、無料でApp Store版も利用できる様に対応する予定です。
リリースの際、有料版ご購入者にはメールにてご連絡を差し上げる予定です。

---

## 対応環境

- 対応OS: macOS 15.5 以降
- 対応CPU: Apple Silicon 専用
- 対応機種: M1 / M2 / M3 / M4 搭載Mac
- Intel Mac: 非対応・サポート対象外

VERITASは **Apple Silicon Mac 専用版** です。  
Intel Macでは動作しませんので、誤って購入されないようご注意ください。

再生品質と動作検証範囲を明確に保つため、対応環境を Apple Silicon 搭載Mac に限定しています。

---

## 対応ファイル形式

VERITASは、以下のファイル形式に対応しています。

- FLAC
- MP3
- AIFF / AIF
- WAV
- M4A
- CAF
- ALAC

---

## 無料トライアル版について

VERITASには、無料トライアル版があります。

トライアル版には機能制限がありますが、再生音質は製品版と変わりません。  
まずはお使いのMacとオーディオ環境で、VERITASの音を試していただければと思います。

---

## 最後に

VERITASは、現時点では巨大な多機能プレーヤーを目指したアプリではありません。

ローカルにある音源を、できるだけ素直に、誠実に鳴らす。  
その一点を大切にして作っています。

音楽を聴く時間を、少しでも良いものにできれば嬉しいです。

**VERITAS - Honest Playback**  
ぜひ、お試しください。

---

# VERITAS Early Access Has Been Released

## VERITAS - Honest Playback

![[VERITAS-screen.png]]

VERITAS is a macOS audio player designed with playback quality as its highest priority.

It is focused on browsing and playing audio files stored in local folders.  
Rather than adding unnecessary features, VERITAS prioritizes playing audio as honestly, stably, and enjoyably as possible.

It also supports a preference for exclusive output, allowing the app to choose the optimal playback path depending on your environment.

VERITAS is planned for release on the App Store in the future, but before that, it is being made available as an Early Access version.  
Those who purchase this Early Access version are planned to receive access to the future App Store version at no additional cost.

A free trial version is also available. Although it has some functional limitations, the playback quality is the same as the full version.  
Please try it in your own listening environment.

The full version is available on STORES for ¥3,000.  
https://veritas-software.stores.jp/

![[Pasted image 20260517231143.png]]

There are no regional restrictions as long as you can purchase through STORES, but VERITAS is primarily intended for users in Japan.

---

## Why I Started Developing VERITAS

The reason I started building VERITAS was very simple.

**I wanted a simple, high-quality audio player for local music playback on macOS.**

Streaming services are extremely convenient. For many people, listening to music through Apple Music, Spotify, or YouTube has become part of everyday life.

At the same time, one of the biggest risks of streaming is that once a work is removed by the provider, it may become impossible to listen to it again.

Streaming also does not always offer the best possible sound quality.

For these reasons, I felt that works I truly wanted to hear in good sound quality needed to be purchased on CD or as downloads and played locally.

On macOS, Audirvana is very well known, and I also felt that its playback quality was excellent.  
However, its usability did not suit me very well, so I eventually found myself listening mainly on Windows.

I tried several other players as well, but I could not find a macOS environment that surpassed my Windows setup in terms of sound quality, so I had largely given up on macOS playback.

Some time later, programming became much more accessible through AI, and I decided to try building my own player.

---

## Developed Together with Coding Agents

From my past experience, I had an intuitive understanding that how audio is handled in the fully digital domain, before digital-to-analog conversion, is extremely important.

With VERITAS, I took the knowledge and ideas I had about how sound quality might be improved in the digital domain, turned them into a design, and implemented them using Codex and Claude.

Surprisingly, even the first early version sounded quite good. That gave me the feeling that my hypothesis was not entirely off the mark.

Of course, it was far from complete. There were still suspicious behaviors to fix and many aspects of the interface to refine.

And that was where the difficult part began.

Add a feature, and the sound changes.  
Polish the UI a little, and the sound gets worse.  
Code that appears to have nothing to do with audio playback clearly affects playback quality.

This happened again and again.

I would add a feature, remove it, rethink the design and implementation, and try again.  
That cycle repeated many times.

---

## For Sound Quality

With VERITAS, the goal is not simply to make audio “play.”  
The priority is to avoid unnecessary processing and load during playback as much as possible.

I analyzed implementations that did not work well, researched best practices in audio programming, and used Deep Research to dig deeper into Core Audio design. Step by step, VERITAS moved closer to its current form.

To be honest, I still cannot say that I have fully explained every causal relationship between code and sound quality.

However, through development, I have gained a much clearer sense of what tends to cause problems and what kinds of design choices help preserve playback quality.

VERITAS is a player born from that long process of trial and error.

As a result, I believe its sound quality is among the very best standalone audio players currently available on macOS.

---

## About the Early Access Version

This release is the Early Access version, made available before the App Store release.

Even at this stage, VERITAS already includes the basic functionality needed to browse and play local audio files.  
At the same time, there are still areas I would like to improve and features I would like to add.

I would like people to use this version first, send feedback, and help shape further development and sound-quality improvements.

Eventually, I plan to release a more complete version on the App Store.

Those who purchase the Early Access version are planned to receive access to the App Store version at no additional cost.

When the App Store version is released, paid-version purchasers will be contacted by email.

---

## System Requirements

- Supported OS: macOS 15.5 or later
- Supported CPU: Apple Silicon only
- Supported Macs: Macs with M1 / M2 / M3 / M4
- Intel Macs: Not supported

VERITAS is an **Apple Silicon Mac-only** application.  
It does not run on Intel Macs, so please be careful not to purchase it by mistake.

To keep playback quality and the scope of testing clearly defined, VERITAS is limited to Apple Silicon Macs.

---

## Supported File Formats

VERITAS supports the following file formats:

- FLAC
- MP3
- AIFF / AIF
- WAV
- M4A
- CAF
- ALAC

---

## About the Free Trial Version

A free trial version of VERITAS is available.

The trial version has some functional limitations, but the playback quality is the same as the full version.  
Please try VERITAS in your own Mac and audio environment.

---

## Closing

At this stage, VERITAS is not trying to be a huge, feature-packed player.

It is built around one simple idea:

To play local audio files as honestly and faithfully as possible.

If VERITAS can make your time listening to music even a little better, I would be very happy.

**VERITAS - Honest Playback**  
Please give it a try.