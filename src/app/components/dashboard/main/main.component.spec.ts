import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {NewsService} from "../../../services/news.service";
import {NewsServiceMock} from "../../../mocks/mocked-services/news-service-mock";
import {homeMockData} from "../../../mocks/mocked-data/home-mock-data";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {worldMockData} from "../../../mocks/mocked-data/world-mock-data";
import {scienceMockData} from "../../../mocks/mocked-data/science-mock-data";
import {PageEvent} from "@angular/material/paginator";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ MainComponent ],
      providers: [
        MainComponent,
        { provide: NewsService, useClass: NewsServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return news by category type: home (default)', () => {
    let expectedData = homeMockData;
    component.getTopStories('home');
    expect(component.stories).toBe(expectedData.results);
  });

  it('should return news by category type: world', () => {
    let expectedData = worldMockData;
    component.getTopStories('world');
    expect(component.stories).toBe(expectedData.results);
  });

  it('should return news by category type: science', () => {
    let expectedData = scienceMockData;
    component.getTopStories('science');
    expect(component.stories).toBe(expectedData.results);
  });

  it('should paginate categories', () => {
    let expectedData = [
      {
        "section": "business",
        "subsection": "economy",
        "title": "Consumer spending continues to shift from goods to services.",
        "abstract": "Americans spent only a little more in the second quarter overall, as a decrease in purchases of stuff was offset by experiences.",
        "url": "https://www.nytimes.com/live/2022/07/28/business/gdp-inflation-news/gdp-consumer-spending",
        "uri": "nyt://article/3e7fb046-3bb0-5762-9bf9-0a86fb08103e",
        "byline": "By Lydia DePillis",
        "item_type": "Article",
        "updated_date": "2022-07-28T10:34:08-04:00",
        "created_date": "2022-07-28T09:56:36-04:00",
        "published_date": "2022-07-28T09:56:36-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "United States Economy",
          "Prices (Fares, Fees and Rates)",
          "Consumer Behavior",
          "Inflation (Economics)",
          "Gross Domestic Product",
          "Food",
          "Supply Chain",
          "Restaurants"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/28/business/gdp-consumer-spending-1659013383729/gdp-consumer-spending-1659013383729-superJumbo-v2.png",
            "format": "Super Jumbo",
            "height": 1333,
            "width": 2000,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/business/gdp-consumer-spending-1659013383729/gdp-consumer-spending-1659013383729-threeByTwoSmallAt2X-v3.png",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/business/gdp-consumer-spending-1659013383729/gdp-consumer-spending-1659013383729-thumbLarge-v2.png",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3S5DhBP"
      },
      {
        "section": "business",
        "subsection": "economy",
        "title": "Highlights From Today’s G.D.P. Report",
        "abstract": "Inventories were a big drag on the G.D.P. number. Construction of homes and nonresidential structures declined. And federal spending fell.",
        "url": "https://www.nytimes.com/2022/07/28/business/economy/gdp-q2-highlights.html",
        "uri": "nyt://article/87db60ff-8253-548c-8ad0-1f2bd3ef5a21",
        "byline": "By Lydia DePillis",
        "item_type": "Article",
        "updated_date": "2022-07-28T11:01:03-04:00",
        "created_date": "2022-07-28T08:58:10-04:00",
        "published_date": "2022-07-28T08:58:10-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "United States Economy",
          "Inflation (Economics)",
          "Gross Domestic Product",
          "Real Estate and Housing (Residential)",
          "Building (Construction)",
          "Consumer Behavior"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/27/business/gdp-promo/merlin_210011466_d2bf3537-223e-4798-acfa-17367e67a677-superJumbo.jpg",
            "format": "Super Jumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "There are signs that consumers are struggling to keep pace with rapidly rising prices.",
            "copyright": "Hiroko Masuike/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/business/gdp-promo/merlin_210011466_d2bf3537-223e-4798-acfa-17367e67a677-threeByTwoSmallAt2X.jpg",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "There are signs that consumers are struggling to keep pace with rapidly rising prices.",
            "copyright": "Hiroko Masuike/The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/business/gdp-promo/merlin_210011466_d2bf3537-223e-4798-acfa-17367e67a677-thumbLarge.jpg",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "There are signs that consumers are struggling to keep pace with rapidly rising prices.",
            "copyright": "Hiroko Masuike/The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3zeFemX"
      },
      {
        "section": "climate",
        "subsection": "",
        "title": "Surprise Deal Would Be Most Ambitious Climate Action Undertaken by U.S.",
        "abstract": "The announcement Wednesday of an agreement in the Senate almost instantly reset the role of the United States in the global effort to fight climate change.",
        "url": "https://www.nytimes.com/2022/07/28/climate/climate-change-deal-manchin.html",
        "uri": "nyt://article/d6fe6194-da32-5b9c-98b3-bfeaf4c0a298",
        "byline": "By Lisa Friedman and Brad Plumer",
        "item_type": "Article",
        "updated_date": "2022-07-28T10:18:46-04:00",
        "created_date": "2022-07-28T05:00:19-04:00",
        "published_date": "2022-07-28T05:00:19-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Global Warming",
          "Greenhouse Gas Emissions",
          "United States International Relations",
          "Law and Legislation",
          "Tax Credits, Deductions and Exemptions",
          "United States Politics and Government",
          "Batteries",
          "Solar Energy",
          "Oil (Petroleum) and Gasoline",
          "Wind Power",
          "Carbon Capture and Sequestration",
          "Alternative and Renewable Energy",
          "Electric and Hybrid Vehicles",
          "Air Pollution",
          "Energy Efficiency"
        ],
        "org_facet": [
          "Senate"
        ],
        "per_facet": [
          "Biden, Joseph R Jr",
          "Manchin, Joe III"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/28/lens/28cli-deal-1-g/28cli-deal-1-g-superJumbo.jpg",
            "format": "Super Jumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "The climate legislation’s most immediate effect will be to supercharge the growth of wind and other clean energy industries in the United States, experts said.",
            "copyright": "Luke Sharrett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/lens/28cli-deal-1-g/28cli-deal-1-g-threeByTwoSmallAt2X.jpg",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "The climate legislation’s most immediate effect will be to supercharge the growth of wind and other clean energy industries in the United States, experts said.",
            "copyright": "Luke Sharrett for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/lens/28cli-deal-1-g/28cli-deal-1-g-thumbLarge.jpg",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "The climate legislation’s most immediate effect will be to supercharge the growth of wind and other clean energy industries in the United States, experts said.",
            "copyright": "Luke Sharrett for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3PCfcRw"
      },
      {
        "section": "us",
        "subsection": "politics",
        "title": "Manchin, in Reversal, Agrees to Quick Action on Climate and Tax Plan",
        "abstract": "The West Virginia Democrat, a holdout on his party’s domestic agenda, said the package would reduce inflation, a concern he had cited in rejecting it just weeks ago.",
        "url": "https://www.nytimes.com/2022/07/27/us/politics/manchin-climate-tax-bill.html",
        "uri": "nyt://article/a34bed81-9e37-51c7-9f33-c2ae4fc60ff4",
        "byline": "By Emily Cochrane, Jim Tankersley and Lisa Friedman",
        "item_type": "Article",
        "updated_date": "2022-07-28T10:52:06-04:00",
        "created_date": "2022-07-27T17:26:07-04:00",
        "published_date": "2022-07-27T17:26:07-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Law and Legislation",
          "Global Warming",
          "Alternative and Renewable Energy",
          "Federal Taxes (US)",
          "United States Economy",
          "United States Politics and Government",
          "Health Insurance and Managed Care",
          "Drugs (Pharmaceuticals)",
          "Inflation (Economics)"
        ],
        "org_facet": [
          "Senate",
          "Democratic Party"
        ],
        "per_facet": [
          "Manchin, Joe III",
          "Biden, Joseph R Jr"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-cong-01/merlin_210394923_57b6b84f-9a24-4cae-90ce-681e14143e50-superJumbo.jpg",
            "format": "Super Jumbo",
            "height": 1366,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "“Rather than risking more inflation with trillions in new spending, this bill will cut the inflation taxes Americans are paying,” Senator Joe Manchin III said in a statement on Wednesday.",
            "copyright": "Pete Marovich for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-cong-01/merlin_210394923_57b6b84f-9a24-4cae-90ce-681e14143e50-threeByTwoSmallAt2X.jpg",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "“Rather than risking more inflation with trillions in new spending, this bill will cut the inflation taxes Americans are paying,” Senator Joe Manchin III said in a statement on Wednesday.",
            "copyright": "Pete Marovich for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/27dc-cong-01/27dc-cong-01-thumbLarge.jpg",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "“Rather than risking more inflation with trillions in new spending, this bill will cut the inflation taxes Americans are paying,” Senator Joe Manchin III said in a statement on Wednesday.",
            "copyright": "Pete Marovich for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3zEnd2E"
      },
      {
        "section": "briefing",
        "subsection": "",
        "title": "A Deal, for Now",
        "abstract": "Joe Manchin’s climate announcement has the potential to be a very big deal.",
        "url": "https://www.nytimes.com/2022/07/28/briefing/joe-manchin-climate-deal-chuck-schumer.html",
        "uri": "nyt://article/e58a0ade-b45d-5bd4-9f93-71bf1dce1515",
        "byline": "By David Leonhardt",
        "item_type": "Article",
        "updated_date": "2022-07-28T07:28:07-04:00",
        "created_date": "2022-07-28T06:19:04-04:00",
        "published_date": "2022-07-28T06:19:04-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "internal-storyline-no",
          "Law and Legislation",
          "Greenhouse Gas Emissions",
          "Global Warming",
          "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
          "Manchin, Joe III",
          "Schumer, Charles E"
        ],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/28-THE-MORNING-NL-manchin-ukz/merlin_210394923_57b6b84f-9a24-4cae-90ce-681e14143e50-superJumbo.jpg",
            "format": "Super Jumbo",
            "height": 1366,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Senator Joe Manchin of West Virginia.",
            "copyright": "Pete Marovich for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/28-THE-MORNING-NL-manchin-ukz/merlin_210394923_57b6b84f-9a24-4cae-90ce-681e14143e50-threeByTwoSmallAt2X.jpg",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "Senator Joe Manchin of West Virginia.",
            "copyright": "Pete Marovich for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/27/us/politics/28-THE-MORNING-NL-manchin-ukz/27dc-cong-01-thumbLarge.jpg",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Senator Joe Manchin of West Virginia.",
            "copyright": "Pete Marovich for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3Bk5Xkz"
      },
      {
        "section": "business",
        "subsection": "",
        "title": "West Virginia Punishes Banks That It Says Don’t Support Coal",
        "abstract": "The move to exclude the institutions from state business is part of a growing effort by Republican officials to shut out companies that are backing away from fossil fuels.",
        "url": "https://www.nytimes.com/2022/07/28/business/west-virginia-fossil-fuel-banks.html",
        "uri": "nyt://article/c3a7b770-9d63-58b4-ac0d-217cbc94b9bb",
        "byline": "By David Gelles",
        "item_type": "Article",
        "updated_date": "2022-07-28T10:03:00-04:00",
        "created_date": "2022-07-28T09:33:00-04:00",
        "published_date": "2022-07-28T09:33:00-04:00",
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Greenhouse Gas Emissions",
          "Banking and Financial Institutions",
          "Global Warming",
          "Corporate Social Responsibility",
          "Politics and Government",
          "Coal",
          "Pensions and Retirement Plans"
        ],
        "org_facet": [
          "BlackRock Inc",
          "Goldman Sachs Group Inc",
          "JPMorgan Chase & Company",
          "Morgan Stanley",
          "Republican Party",
          "US Bancorp",
          "Wells Fargo & Company"
        ],
        "per_facet": [],
        "geo_facet": [
          "West Virginia"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2022/07/28/climate/28cli-wvirginia1/28cli-wvirginia1-superJumbo.jpg",
            "format": "Super Jumbo",
            "height": 1536,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "Riley Moore, the West Virginia treasurer, can bar financial institutions from state business if they are deemed to be “boycotting” fossil fuels.",
            "copyright": "Kristian Thacker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/climate/28cli-wvirginia1/28cli-wvirginia1-threeByTwoSmallAt2X.jpg",
            "format": "threeByTwoSmallAt2X",
            "height": 400,
            "width": 600,
            "type": "image",
            "subtype": "photo",
            "caption": "Riley Moore, the West Virginia treasurer, can bar financial institutions from state business if they are deemed to be “boycotting” fossil fuels.",
            "copyright": "Kristian Thacker for The New York Times"
          },
          {
            "url": "https://static01.nyt.com/images/2022/07/28/climate/28cli-wvirginia1/28cli-wvirginia1-thumbLarge.jpg",
            "format": "Large Thumbnail",
            "height": 150,
            "width": 150,
            "type": "image",
            "subtype": "photo",
            "caption": "Riley Moore, the West Virginia treasurer, can bar financial institutions from state business if they are deemed to be “boycotting” fossil fuels.",
            "copyright": "Kristian Thacker for The New York Times"
          }
        ],
        "short_url": "https://nyti.ms/3PTRQXy"
      }];
    let event: PageEvent = {
      length: 38,
      pageIndex: 0,
      pageSize: 6,
      previousPageIndex: 0
    };

    component.getServerData(event);

    expect(component.dataSource).toEqual(expectedData);
  });
});
