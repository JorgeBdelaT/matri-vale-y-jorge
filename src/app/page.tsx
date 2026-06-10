import { Countdown } from "@/components/sections/countdown/countdown.component";
import { DressCode } from "@/components/sections/dress-code/dress-code.component";
import { EnvelopeIntro } from "@/components/sections/envelope-intro/envelope-intro.component";
import { GiftList } from "@/components/sections/gift-list/gift-list.component";
import { Hero } from "@/components/sections/hero/hero.component";
import { Location } from "@/components/sections/location/location.component";
import { Playlist } from "@/components/sections/playlist/playlist.component";
import { Rsvp } from "@/components/sections/rsvp/rsvp.component";
import { Schedule } from "@/components/sections/schedule/schedule.component";
import { SiteFooter } from "@/components/sections/site-footer/site-footer.component";
import { Story } from "@/components/sections/story/story.component";

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
