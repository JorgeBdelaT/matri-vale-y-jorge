import { Countdown } from "@/components/sections/countdown";
import { DressCode } from "@/components/sections/dress-code";
import { EnvelopeIntro } from "@/components/sections/envelope-intro";
import { GiftList } from "@/components/sections/gift-list";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Playlist } from "@/components/sections/playlist";
import { Rsvp } from "@/components/sections/rsvp";
import { Schedule } from "@/components/sections/schedule";
import { SiteFooter } from "@/components/sections/site-footer";
import { Story } from "@/components/sections/story";

export default function Home() {
  return (
    <>
      <main>
        <EnvelopeIntro />
        <Hero />
        <Story />
        <Countdown />
        <Schedule />
        <Location />
        <DressCode />
        <Rsvp />
        <Playlist />
        <GiftList />
      </main>
      <SiteFooter />
    </>
  );
}
