import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { routes } from './app.router';

import { AdvertiseCommercialComponent } from './advertise/advertise-commercial/advertise-commercial.component';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LocalReviewsComponent } from './local-reviews/local-reviews.component';
import { LiveComponent } from './stations-main/live/live.component';
import { HomeComponent } from './stations-main/worldtelevision/home.component';
import { CaliforniaComponent } from './stations-main/california/california.component';
import { HawaiiComponent } from './stations-main/hawaii/hawaii.component';
import { StationsMainComponent } from './stations-main/stations-main.component';
import { Ktla5Component } from './stations-main/california/ktla5/ktla5.component';
import { Fox11laComponent } from './stations-main/california/fox11la/fox11la.component';
import { Fox5sandiegoComponent } from './stations-main/california/fox5sandiego/fox5sandiego.component';
import { HawaiiNewsNowComponent } from './stations-main/hawaii/hawaiinewsnow/hawaii-news-now.component';
import { Kitv4hawaiiComponent } from './stations-main/hawaii/kitv4hawaii/kitv4hawaii.component';
import { Khon2hawaiiComponent } from './stations-main/hawaii/khon2hawaii/khon2hawaii.component';
import { Kron4Component } from './stations-main/california/kron4/kron4.component';
import { LiveHighSpeedPursuitFeedComponent } from './stations-main/live-high-speed-pursuit-feed/live-high-speed-pursuit-feed.component';
import { BakersfieldNews23abcComponent } from './stations-main/california/bakersfield-news-23abc/bakersfield-news-23abc.component';
import { Abc30BakersfieldComponent } from './stations-main/california/abc30-bakersfield/abc30-bakersfield.component';
import { Boston25NewsComponent } from './stations-main/massachusetts/boston-25-news/boston-25-news.component';
import { MassachusettsComponent } from './stations-main/massachusetts/massachusetts.component';
import { Fox10phoenixComponent } from './stations-main/arizona/fox10phoenix/fox10phoenix.component';
import { ArizonaComponent } from './stations-main/arizona/arizona.component';
import { ColoradoComponent } from './stations-main/colorado/colorado.component';
import { Colorado9newsComponent } from './stations-main/colorado/colorado-9news/colorado-9news.component';
import { Nbc11newsComponent } from './stations-main/colorado/nbc11news/nbc11news.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NasaPublicComponent } from './stations-main/nasa-public/nasa-public.component';
import { NasaIisComponent } from './stations-main/nasa-iis/nasa-iis.component';
import { NasaIssEarthviewComponent } from './stations-main/nasa-iss-earthview/nasa-iss-earthview.component';
import { NasaMediaComponent } from './stations-main/nasa-media/nasa-media.component';
import { LiveTrafficCamsComponent } from './live-traffic-cams/live-traffic-cams.component';
import { Cam10fwyWestOfMonteVistaAveComponent } from './live-traffic-cams/cam-10fwy-west-of-monte-vista-ave/cam-10fwy-west-of-monte-vista-ave.component';
import { WorldTvMoviesComponent } from './world-tv-movies/world-tv-movies.component';
import { EntertainmentTvStationsComponent } from './entertainment-tv-stations/entertainment-tv-stations.component';
import { NoahPopTvComponent } from './entertainment-tv-stations/noah-pop-tv/noah-pop-tv.component';
import { HollywoodShowLiveComponent } from './entertainment-tv-stations/hollywood-show-live/hollywood-show-live.component';
import { TheDirectorsCutComponent } from './entertainment-tv-stations/the-directors-cut/the-directors-cut.component';
import { TheRomanceComponent } from './entertainment-tv-stations/the-romance/the-romance.component';
import { OnTheMikeComponent } from './entertainment-tv-stations/on-the-mike/on-the-mike.component';
import { CaliforniaLifeComponent } from './stations-main/california/california-life/california-life.component';
import { DroneTvComponent } from './entertainment-tv-stations/drone-tv/drone-tv.component';
import { MissMultiverseComponent } from './entertainment-tv-stations/miss-multiverse/miss-multiverse.component';
import { TomorrowPicturesComponent } from './entertainment-tv-stations/tomorrow-pictures/tomorrow-pictures.component';
import { TheRazziesChannelComponent } from './entertainment-tv-stations/the-razzies-channel/the-razzies-channel.component';
import { ComedyTvStationsComponent } from './comedy-tv-stations/comedy-tv-stations.component';
import { ComicZooComponent } from './comedy-tv-stations/comic-zoo/comic-zoo.component';
import { ThePlaceholdersComponent } from './comedy-tv-stations/the-placeholders/the-placeholders.component';
import { ComedyClassicsComponent } from './comedy-tv-stations/comedy-classics/comedy-classics.component';
import { EyeForAnEyeComponent } from './comedy-tv-stations/eye-for-an-eye/eye-for-an-eye.component';
import { TexasComponent } from './stations-main/texas/texas.component';
import { Fox4TexasComponent } from './stations-main/texas/fox-4-texas/fox-4-texas.component';
import { Fox7AustinComponent } from './stations-main/texas/fox-7-austin/fox-7-austin.component';
import { Khou11TexasComponent } from './stations-main/texas/khou-11-texas/khou-11-texas.component';
import { LiveRoyalWedding2018Component } from './live-royal-wedding-2018/live-royal-wedding-2018.component';
import { BreakingNews1Component } from './breaking-news-1/breaking-news-1.component';
import { Kwtx10Component } from './stations-main/texas/kwtx-10/kwtx-10.component';
import { GeorgiaComponent } from './stations-main/georgia/georgia.component';
import { Wsb2AtlantaComponent } from './stations-main/georgia/wsb-2-atlanta/wsb-2-atlanta.component';
import { VolcanoLiveComponent } from './volcano-live/volcano-live.component';
import { OklahomaComponent } from './stations-main/oklahoma/oklahoma.component';
import { News4OklahomaComponent } from './stations-main/oklahoma/news4-oklahoma/news4-oklahoma.component';
import { IndianaComponent } from './stations-main/indiana/indiana.component';
import { Wthr13IndianaComponent } from './stations-main/indiana/wthr-13-indiana/wthr-13-indiana.component';
import { Fox59IndianaComponent } from './stations-main/indiana/fox-59-indiana/fox-59-indiana.component';
import { Wishtv8IndianaComponent } from './stations-main/indiana/wishtv-8-indiana/wishtv-8-indiana.component';
import { TennesseeComponent } from './stations-main/tennessee/tennessee.component';
import { Fox10TennesseeComponent } from './stations-main/tennessee/fox10-tennessee/fox10-tennessee.component';
import { Wsoc9Component } from './stations-main/north-carolina/wsoc9/wsoc9.component';
import { NorthCarolinaComponent } from './stations-main/north-carolina/north-carolina.component';
import { Wbtw13Component } from './stations-main/north-carolina/wbtw13/wbtw13.component';
import { FranceComponent } from './international/france/france.component';
import { France24liveComponent } from './international/france/france24live/france24live.component';
import { Tf1Component } from './international/france/tf1/tf1.component';
import { France2Component } from './international/france/france2/france2.component';
import { CopyrightAbusePolicyComponent } from './copyright-abuse-policy/copyright-abuse-policy.component';
import { FloridaComponent } from './stations-main/florida/florida.component';
import { WsbTv2Component } from './stations-main/florida/wsb-tv2/wsb-tv2.component';
import { Fox13TampaComponent } from './stations-main/florida/fox13-tampa/fox13-tampa.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalReviewsComponent,
    LiveComponent,
    AdvertiseCommercialComponent,
    AboutComponent,
    HomeComponent,
    CaliforniaComponent,
    HawaiiComponent,
    StationsMainComponent,
    Ktla5Component,
    Fox11laComponent,
    Fox5sandiegoComponent,
    HawaiiNewsNowComponent,
    Kitv4hawaiiComponent,
    Khon2hawaiiComponent,
    Kron4Component,
    LiveHighSpeedPursuitFeedComponent,
    BakersfieldNews23abcComponent,
    Abc30BakersfieldComponent,
    Boston25NewsComponent,
    MassachusettsComponent,
    Fox10phoenixComponent,
    ArizonaComponent,
    ColoradoComponent,
    Colorado9newsComponent,
    Nbc11newsComponent,
    ContactusComponent,
    NasaPublicComponent,
    NasaIisComponent,
    NasaIssEarthviewComponent,
    NasaMediaComponent,
    LiveTrafficCamsComponent,
    Cam10fwyWestOfMonteVistaAveComponent,
    WorldTvMoviesComponent,
    EntertainmentTvStationsComponent,
    NoahPopTvComponent,
    HollywoodShowLiveComponent,
    TheDirectorsCutComponent,
    TheRomanceComponent,
    OnTheMikeComponent,
    CaliforniaLifeComponent,
    DroneTvComponent,
    MissMultiverseComponent,
    TomorrowPicturesComponent,
    TheRazziesChannelComponent,
    ComedyTvStationsComponent,
    ComicZooComponent,
    ThePlaceholdersComponent,
    ComedyClassicsComponent,
    EyeForAnEyeComponent,
    TexasComponent,
    Fox4TexasComponent,
    Fox7AustinComponent,
    Khou11TexasComponent,
    LiveRoyalWedding2018Component,
    BreakingNews1Component,
    Kwtx10Component,
    GeorgiaComponent,
    Wsb2AtlantaComponent,
    VolcanoLiveComponent,
    OklahomaComponent,
    News4OklahomaComponent,
    IndianaComponent,
    Wthr13IndianaComponent,
    Fox59IndianaComponent,
    Wishtv8IndianaComponent,
    TennesseeComponent,
    Fox10TennesseeComponent,
    Wsoc9Component,
    NorthCarolinaComponent,
    Wbtw13Component,
    FranceComponent,
    France24liveComponent,
    Tf1Component,
    France2Component,
    CopyrightAbusePolicyComponent,
    FloridaComponent,
    WsbTv2Component,
    Fox13TampaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'live', component: LiveComponent},
      { path: 'breaking-news-1', component: BreakingNews1Component},
      { path: 'live-royal-wedding-2018', component: LiveRoyalWedding2018Component },
      { path: 'live-high-speed-pursuit', component: LiveHighSpeedPursuitFeedComponent},
      { path: 'local-reviews', component: LocalReviewsComponent},
      { path: 'advertise-commercial', component: AdvertiseCommercialComponent},
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactusComponent},
      { path: 'stations-main', component: StationsMainComponent},
      { path: 'nasa-public', component: NasaPublicComponent },
      { path: 'nasa-iss', component: NasaIisComponent },
      { path: 'nasa-iss-earthview', component: NasaIssEarthviewComponent },
      { path: 'nasa-media', component: NasaMediaComponent },

      { path: 'entertainment-tv-stations', component: EntertainmentTvStationsComponent },
      { path: 'world-tv-movies', component: WorldTvMoviesComponent },
      { path: 'drone-tv', component: DroneTvComponent },
      { path: 'noah-pop-tv', component: NoahPopTvComponent },
      { path: 'hollywood-show-live', component: HollywoodShowLiveComponent },
      { path: 'the-directors-cut', component: TheDirectorsCutComponent },
      { path: 'the-romance', component: TheRomanceComponent },
      { path: 'on-the-mike', component: OnTheMikeComponent },
      { path: 'miss-multiverse', component: MissMultiverseComponent },
      { path: 'tomorrow-pictures', component: TomorrowPicturesComponent },
      { path: 'the-razzies-channel', component: TheRazziesChannelComponent },

      { path: 'comedy-tv-stations', component: ComedyTvStationsComponent },
      { path: 'comedy-classics', component: ComedyClassicsComponent },
      { path: 'comic-zoo', component: ComicZooComponent },
      { path: 'eye-for-an-eye', component: EyeForAnEyeComponent },
      { path: 'the-placeholders', component: ThePlaceholdersComponent },

      { path: 'arizona-tv-stations', component: ArizonaComponent},
      { path: 'fox10-phoenix', component: Fox10phoenixComponent},
      { path: 'oklahoma-tv-stations', component: OklahomaComponent },
      { path: 'texas-tv-stations', component: TexasComponent },
      { path: 'khou-11', component: Khou11TexasComponent},
      { path: 'news4-oklahoma', component: News4OklahomaComponent },
      { path: 'fox-4-texas', component: Fox4TexasComponent},
      { path: 'fox-7-austin', component: Fox7AustinComponent},
      { path: 'kwtx-10', component: Kwtx10Component},

      { path: 'california-tv-stations', component: CaliforniaComponent },
      { path: 'california-life', component: CaliforniaLifeComponent },
      { path: 'ktla5', component: Ktla5Component},
      { path: 'fox11la', component: Fox11laComponent},
      { path: 'fox5sandiego', component: Fox5sandiegoComponent},
      { path: 'kron4', component: Kron4Component},
      { path: 'bakersfield-news-23abc', component: BakersfieldNews23abcComponent},
      { path: 'abc30-bakersfield', component: Abc30BakersfieldComponent},

      { path: 'florida-tv-stations', component: FloridaComponent },
      { path: 'wsb-tv2', component: WsbTv2Component },
      { path: 'fox13-tampa', component: Fox13TampaComponent },

      { path: 'colorado-tv-stations', component: ColoradoComponent },
      { path: 'colorado-9news', component: Colorado9newsComponent },
      { path: 'nbc11news', component: Nbc11newsComponent },

      { path: 'georgia-tv-stations', component: GeorgiaComponent },
      { path: 'wsb-tv-2', component: Wsb2AtlantaComponent },

      { path: 'massachusetts-tv-stations', component: MassachusettsComponent },
      { path: 'boston-25-news', component: Boston25NewsComponent},

      { path: 'north-carolina-tv-stations', component: NorthCarolinaComponent},
      { path: 'wsoctv9', component: Wsoc9Component },
      { path: 'wbtw13', component: Wbtw13Component},

      { path: 'hawaii-tv-stations', component: HawaiiComponent},
      { path: 'hawaii-news-now', component: HawaiiNewsNowComponent },
      { path: 'kitv4-hawaii', component: Kitv4hawaiiComponent},
      { path: 'khon2-hawaii', component: Khon2hawaiiComponent},
      { path: 'volcano-live', component: VolcanoLiveComponent},

      { path: 'indiana-tv-stations', component: IndianaComponent},
      { path: 'wthr-13-indiana', component: Wthr13IndianaComponent},
      { path: 'fox-59-indiana', component: Fox59IndianaComponent},
      { path: 'wishtv-8-indiana', component: Wishtv8IndianaComponent},

      { path: 'tennessee-tv-stations', component: TennesseeComponent},
      { path: 'fox10-tennessee', component: Fox10TennesseeComponent},

      { path: 'international/france-tv-stations', component: FranceComponent },
      { path: 'international/france-tv-stations/france24live', component: France24liveComponent},
      { path: 'international/france-tv-stations/tf1', component: Tf1Component},
      { path: 'international/france-tv-stations/france2', component: France2Component},

      
      { path: 'copyright-abuse-policy', component: CopyrightAbusePolicyComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent}
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }