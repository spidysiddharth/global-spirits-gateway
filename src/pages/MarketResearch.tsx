import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, TrendingUp, Users, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  // Asia
  { name: "Singapore", region: "Asia", flagEmoji: "🇸🇬" },
  { name: "Malaysia", region: "Asia", flagEmoji: "🇲🇾" },
  { name: "Philippines", region: "Asia", flagEmoji: "🇵🇭" },
  { name: "Vietnam", region: "Asia", flagEmoji: "🇻🇳" },
  { name: "Laos", region: "Asia", flagEmoji: "🇱🇦" },
  { name: "India", region: "Asia", flagEmoji: "🇮🇳" },
  
  // Middle East
  { name: "United Arab Emirates", region: "Middle East", flagEmoji: "🇦🇪" },
  { name: "Saudi Arabia", region: "Middle East", flagEmoji: "🇸🇦" },
  { name: "Lebanon", region: "Middle East", flagEmoji: "🇱🇧" },
  { name: "Qatar", region: "Middle East", flagEmoji: "🇶🇦" },
  { name: "Egypt", region: "Middle East", flagEmoji: "🇪🇬" },
  
  // Africa
  { name: "South Africa", region: "Africa", flagEmoji: "🇿🇦" },
  { name: "Nigeria", region: "Africa", flagEmoji: "🇳🇬" },
  { name: "Kenya", region: "Africa", flagEmoji: "🇰🇪" },
  { name: "Ethiopia", region: "Africa", flagEmoji: "🇪🇹" },
  { name: "Angola", region: "Africa", flagEmoji: "🇦🇴" },
];

const detailedMarketData: Record<string, {
  marketOverview: string;
  consumerInsights: string;
  competitiveLandscape: string;
}> = {
  "Singapore": {
    marketOverview: "The Singapore liquor industry is projected to maintain steady, albeit matured, growth, with the total market size estimated at US$5.13 billion in 2025. Forecasts indicate a Compound Annual Growth Rate (CAGR) of approximately 2.2% from 2026 to 2032, pushing the market valuation toward US$5.98 billion by the end of the period. The market structure remains heavily weighted toward the on-trade sector (hotels, bars, and restaurants), which accounts for roughly 75% of market value, driven by Singapore's robust tourism and vibrant nightlife. In terms of category dominance, beer continues to lead volume sales with approximately 45-50% market share, followed by spirits at roughly 35% and wine at 15%. While volume growth for mass-market beer remains modest at around 1.9%, the industry's value expansion is primarily being fueled by high-value segments rather than sheer volume consumption.",
    consumerInsights: "Singaporean consumers are increasingly defined by a \"less but better\" philosophy, driving a potent trend of premiumization across all categories. Rather than increasing frequency, drinkers are trading up to higher-quality, artisanal options, with the premium wine and spirits segment seeing particular interest among affluent demographics. A notable shift is observed in the younger generation (Gen Z and Millennials), who are propelling the Ready-to-Drink (RTD) category—now one of the most dynamic segments with a growth rate exceeding 3.6%. Furthermore, health consciousness is reshaping habits; \"zebra striping\" (alternating between alcoholic and non-alcoholic drinks) and the demand for low-to-no alcohol beverages are gaining traction. Surveys indicate a demographic split, with younger cohorts favoring craft beers and innovative cocktails, while the 55+ age group remains the stronghold for wine consumption, increasingly favoring bold reds and natural wines.",
    competitiveLandscape: "The competitive arena is characterized by a high degree of consolidation among global giants alongside a fragmented, thriving niche for craft labels. Major international players such as Asia Pacific Breweries (APB)—makers of the iconic Tiger Beer—Diageo, Pernod Ricard, and Beam Suntory command the lion's share of distribution and volume, leveraging deep networks in both on-trade and retail channels. However, the market is seeing disruption from specialized importers and e-commerce platforms catering to the \"long tail\" of consumer demand for craft gins, single malt whiskies, and organic wines. Digital adoption is also a key competitive differentiator, with online alcohol sales projected to capture a larger slice of the retail pie as consumers increasingly seek the convenience of home delivery for premium goods."
  },
  "Malaysia": {
    marketOverview:"The Malaysian liquor industry is projected to experience steady value growth, driven largely by premiumization rather than sheer volume expansion. The broader alcoholic drinks market is forecast to grow at a compound annual growth rate (CAGR) of approximately 7% between 2024 and 2029. While volume sales for some categories like cider and perry have seen declines due to shifting preferences, the fine wines and spirits segment is resilient, achieving a retail current value growth of 5% in 2025 to reach MYR 421 million. This growth is heavily supported by a thriving tourism sector—Malaysia welcomed over 17 million international tourists in 2024—which helps offset the regulatory and religious constraints in a country where nearly two-thirds of the population are Muslim and do not consume alcohol.",
    consumerInsights:"Consumer behavior in Malaysia is increasingly defined by the 'drink less, but better' mantra, with a distinct shift toward high-quality, premium beverages. Urbanization and rising disposable incomes have fueled a sophisticated 'cocktail culture' that is driving the growth of whiskies and white spirits. Conversely, health consciousness is reshaping habits among younger demographics (Millennials and Gen Z), who are moving away from traditional high-volume consumption toward lower-alcohol alternatives or 'mindful drinking'. In terms of purchasing channels, while hypermarkets remain the dominant venue for purchasing spirits intended as gifts, there is a burgeoning trend toward e-commerce, with online alcohol sales recording a 20% year-on-year growth in 2024 as digital platforms improve accessibility.",
    competitiveLandscape:"The market structure is characterized by a strong duopoly in the beer segment and a fragmented, international-led landscape for spirits. Heineken Malaysia Berhad and Carlsberg Brewery Malaysia Berhad continue to dominate the beer category, which accounts for the vast majority of total alcohol volume. In the spirits sector, international heavyweights hold the strongest positions, with companies like Rémy Cointreau and Duncan Gilbey capturing significant market share in categories like brandy. The competitive dynamic is further intensifying with the entry of niche players and alcohol-free brands, such as Crossip, which entered the market in late 2024 to cater to the growing demand for non-alcoholic"
  },
  "Philippines": {
    marketOverview:"The Philippine liquor industry is poised for steady expansion, driven by economic resilience and a recovering tourism sector. The broader alcoholic beverages market was valued at approximately USD 7.27 billion in 2024 and is projected to reach USD 10.63 billion by 2033, growing at a CAGR of roughly 3.87%. While beer continues to dominate volume sales—accounting for over 50% of the market share—the spirits segment is witnessing robust value growth. This upward trajectory is supported by a revitalized tourism industry, which welcomed significant international arrivals in 2024, and a strong domestic culture of social drinking that is gradually shifting from mass-market consumption to value-driven purchases.",
    consumerInsights:"Filipino drinking habits are undergoing a significant transformation characterized by 'mindful consumption' and premiumization. A recent study highlighted that 42% of Filipino drinkers have reduced their alcohol intake, a figure significantly higher than the Asia-Pacific average, driven by health consciousness and financial prudence. Despite this reduction in volume, value is being retained through a 'drink less, but better' approach; consumers are increasingly gravitating toward premium whiskies, craft spirits, and sophisticated Ready-to-Drink (RTD) cocktails. E-commerce is also reshaping access, with online beverage sales generating approximately USD 795 million in 2024, as digital platforms become a preferred channel for younger, tech-savvy demographics.",
    competitiveLandscape:"The market remains highly concentrated, effectively operating as an oligopoly where the top five companies control nearly 95% of the market share. San Miguel Corporation continues its stronghold on the beer segment, while Emperador Distillers and Ginebra San Miguel dominate the spirits category, particularly in brandy and gin respectively. However, the landscape is diversifying at the premium end, where international giants like Diageo and Pernod Ricard are aggressively targeting the affluent urban class with high-end imported spirits. This bifurcation sees local giants maintaining volume through affordable mass-market options, while global brands capture value through the growing demand for luxury and craft distinctions."
  },
  "Vietnam": {
    marketOverview:"The Vietnam liquor industry is a high-volume powerhouse, dominated heavily by beer which accounts for over 90% of total alcohol consumption. The broader alcoholic beverages market was valued at approximately USD 15.5 billion in 2024 and is projected to grow at a healthy CAGR of roughly 7% to 9% through 2030. However, the market is navigating significant regulatory headwinds; the strict enforcement of Decree 100 (zero-tolerance for drunk driving) has dampened on-trade volume, while a recently approved tax roadmap will see special consumption taxes on alcohol rise to 90% by 2031. Despite these challenges, the market's value continues to expand, driven by a recovering tourism sector and an overall increase in pricing power.",
    consumerInsights:"Vietnamese drinking culture, traditionally centered around 'Nhau' (social drinking sessions), is rapidly shifting from high-volume consumption to 'mindful drinking' and premiumization. With the strict DUI penalties curbing late-night bar visits, there is a distinct migration toward home consumption and off-trade purchasing, fueling a 20% growth in online alcohol sales via platforms like Shopee and TikTok Shop. Younger consumers (Gen Z and Millennials) are moving away from traditional rice wines and mass-market lagers, showing a growing preference for craft beers, whiskies, and cocktails. This demographic is driving the 'drink less, but better' trend, willing to pay a premium for foreign brands and sophisticated packaging that signals status.",
    competitiveLandscape:"The market structure is defined by a fierce duopoly in the beer segment, where Heineken Vietnam (holding approx. 37% market share) and the local giant Sabeco (approx. 34%) control the vast majority of volume. While Sabeco dominates the mass market with its 'Bia Saigon' brand, Heineken leads the premium segment. In the spirits category, the landscape is more fragmented but skewed toward international conglomerates like Diageo and Pernod Ricard at the high end, who are capitalizing on the demand for scotch and cognac. These major players are currently engaging in aggressive price wars and marketing campaigns to protect margins against rising input costs and the looming tax hikes."
  },
  "Laos": {
    marketOverview:"The liquor industry in Laos is a beer-dominated powerhouse experiencing steady value growth despite global economic headwinds. The broader alcoholic beverages market was valued at approximately USD 1.77 billion in 2024, with the beer segment alone contributing nearly USD 591 million and projected to grow at a CAGR of over 4% through 2033. While overall consumption volume is seeing a slight stabilization or marginal decline due to inflationary pressures, the market value is expanding due to a recovering tourism sector—which brought in 5 million visitors in 2024—and a gradual shift toward higher-value products. Beer remains the undisputed king, accounting for over 75% of total alcohol sales, effectively dwarfing the wine and spirits categories.",
    consumerInsights:"Laotian drinking culture is deeply rooted in social communal consumption, traditionally centered around Lao-Lao (a potent local rice whiskey) and the ubiquitous Beerlao. However, rapid urbanization and a younger demographic (25–40 years old) are driving a significant shift toward premiumization. There is a growing preference for 'drinking less, but better,' which has spurred demand for imported spirits, craft beers, and even low-alcohol alternatives like Carlsberg 0.0, catering to the health-conscious urbanite. Although Lao-Lao remains the staple for rural and budget-conscious consumers, the urban middle class is increasingly engaging with international brands, particularly in Vientiane and tourist hubs like Luang Prabang.",
    competitiveLandscape:"The competitive environment is defined by the near-monopolistic dominance of the Lao Brewery Company (LBC), which commands an estimated 85% to 90% share of the beer market with its iconic Beerlao brand. LBC is a joint venture partially owned by Carlsberg, giving it immense distribution reach and production capabilities (over 210 million liters annually). The primary challenger is Heineken Lao Brewery, which has been aggressively marketing brands like Tiger and Namkhong to capture share in the premium segment. The spirits market is far more fragmented; while unbranded local rice whiskey dominates volume, international giants like Diageo are making inroads at the top end of the market, targeting luxury hotels and nightclubs."
  },
  "India": {
    marketOverview:"The Indian liquor industry is one of the fastest-growing in the world, valued at approximately USD 60–65 billion in 2024 and projected to reach nearly USD 100 billion by 2030, growing at a CAGR of roughly 7%. The market is characterized by immense volume, having recently crossed the 1.1 billion cases mark annually. This expansion is fueled by powerful demographic tailwinds: with nearly 100 million Indians expected to reach the legal drinking age by 2030, the user base is naturally widening. While the market has traditionally been price-sensitive, the real value driver is now the 'prestige' segment, which is growing at nearly double the rate of the mass market as disposable incomes rise and urbanization spreads to Tier-2 cities.",
    consumerInsights:"Indian drinking habits are undergoing a radical shift defined by 'Premiumization' and 'Indian Pride.' A rising middle class is embracing the philosophy of 'drink less, but better,' leading to a surge in demand for premium whiskies, craft gins, and agave spirits. Notably, the acceptance of alcohol is broadening; industry reports indicate a 50% increase in women consumers over the last two decades, reshaping marketing and product portfolios toward cocktails and sophisticated RTDs. There is also a distinct trend toward 'homegrown luxury'—domestic single malts (like Indri and Amrut) and craft gins are now competing head-to-head with established global brands, with the premium Indian spirits category witnessing volume growth of over 18% annually.",
    competitiveLandscape:"The market structure operates as a consolidated oligopoly at the top, heavily influenced by global giants. United Breweries (backed by Heineken) dominates the beer segment with approximately 50% market share, largely through its Kingfisher brand. In the spirits category, United Spirits (Diageo) and Pernod Ricard control the lion's share of the premium and semi-premium segments. However, the landscape is becoming more competitive in the 'prestige' bracket, with domestic players like Radico Khaitan aggressively expanding their portfolios (e.g., Rampur whisky, Jaisalmer gin) to capture higher margins. Despite this dominance, the industry remains fragmented at the lower end due to complex, state-specific excise policies that create high entry barriers for new national players."
  },
  "United Arab Emirates": {
    marketOverview:"The United Arab Emirates liquor industry is a high-value, tourism-driven market valued at approximately USD 3.5 billion to USD 7.8 billion in 2024 (depending on scope estimates), with projections to grow at a CAGR of 7% to 8% through 2033. The market recently experienced a volatility 'shock' with the reinstatement of the 30% municipality tax on alcohol sales in Dubai effective January 1, 2025, ending a two-year tax-free suspension that had fueled a consumption boom. Despite this regulatory headwind, long-term growth remains underpinned by a robust tourism sector—which saw over 17 million international visitors recently—and the country’s status as a global expat hub. The industry is heavily weighted toward high-value volume, as strict licensing laws confine consumption to licensed venues (hotels, clubs) and private homes,",
    consumerInsights:"The consumer base is almost exclusively comprised of expatriates (who make up nearly 90% of the population) and international tourists, creating a unique demand structure skewed heavily toward premium and super-premium labels. Following the tax reinstatement in 2025, there is a renewed shift toward 'smart purchasing,' with residents increasingly stocking up at duty-free outlets or driving to neighboring emirates like Abu Dhabi and Ras Al Khaimah (where tax structures differ) for bulk purchases. Inside the country, the 'drink less, but better' trend is accelerating; consumers are gravitating toward craft spirits, single malt whiskies, and fine wines, while a growing health-conscious segment is driving a surge in non-alcoholic and low-ABV alternatives, which have seen double-digit growth in retail channels.",
    competitiveLandscape:"The distribution landscape is defined by a strictly regulated duopoly in Dubai, controlled by Maritime and Mercantile International (MMI) (a subsidiary of the Emirates Group) and African + Eastern. These two entities effectively manage the vast majority of importation, logistics, and retail chains (e.g., Cellar Save, The Cellars) within the emirate. While they distribute global heavyweights like Diageo and Pernod Ricard, the competitive dynamic is shifting slightly with the rise of independent retail players in other emirates (such as The Bottle Store in Abu Dhabi and Barracuda in Umm Al Quwain) which compete aggressively on price. In the on-trade sector (hotels/bars), competition is fierce among international brands fighting for pouring agreements in high-end venues, where brand visibility is paramount."
  },
  "Saudi Arabia": {
    marketOverview:"Saudi Arabia presents a unique 'liquor' market defined by strict prohibition for the general public, yet it is undergoing historic, albeit cautious, shifts. In a landmark move in January 2024, the Kingdom opened its first-ever alcohol store in Riyadh’s Diplomatic Quarter, exclusively accessible to non-Muslim diplomats via a tiered quota system. While a general legalization remains speculative, this development has fueled persistent industry rumors regarding potential 'wet zones' in upcoming giga-projects like NEOM and the Red Sea Global resorts to cater to international tourism targets of 150 million visits by 2030. Currently, the commercially viable 'liquor' industry is actually the non-alcoholic sector (0.0% ABV), where the market for malt beverages and alcohol-free spirits is booming, valued at approximately USD 552 million in 2024 and projected to grow at a CAGR of roughly 7.8% through 2033.",
    consumerInsights:"Since traditional alcohol is illegal for the vast majority, consumer behavior is bifurcated into a small, elite diplomatic circle and a massive, young population driving the 'Zero-Alcohol' revolution. Saudi consumers, particularly Millennials and Gen Z (who make up a significant portion of the population), are aggressively embracing 'sophisticated sobriety.' There is a surging demand for premium non-alcoholic alternatives that mimic the complexity of spirits—such as alcohol-free gins and whiskies—used in high-end 'mocktail' mixology at luxury hotels and restaurants. This demographic treats non-alcoholic beer (like Barbican and Moussy) not as a substitute, but as a staple social beverage, consuming it with the same frequency as soft drinks in Western markets.",
    competitiveLandscape:"The competitive environment operates on two distinct levels: a state-run monopoly and a fierce open market for alternatives. The sale of real alcohol is strictly controlled by the government, with the single diplomatic store in Riyadh serving as the sole legal retail point, effectively barring any private competition. However, in the non-alcoholic segment, the landscape is intensely competitive. Regional giants like Aujan Coca-Cola Beverages Company (ACCBC) dominate with the iconic brand Barbican, while global heavyweights like Heineken and Budweiser are heavily investing in marketing their 0.0% variants to capture share. Simultaneously, premium alcohol-free spirit brands like Lyre’s and Bella are entering the market to target the high-end hospitality sector, positioning themselves as luxury lifestyle choices rather than mere soft drink alternatives."
  },
  "Lebanon": {
    marketOverview:"The Lebanese liquor industry is currently navigating a period of fragile recovery, heavily influenced by the country's severe economic crisis and fluctuating regional stability. While the market saw a rebound in 2022-2023 driven by a surge in tourism and diaspora remittances, growth has tempered recently due to renewed geopolitical tensions. Despite these headwinds, the market remains resilient, with a projected recovery in consumption volume. The broader alcoholic drinks market is substantial for the region, with beer remaining the dominant category by volume. However, value growth is increasingly driven by the local wine and Arak sectors, which have pivoted toward export markets to secure 'fresh dollars.' Local production has become a lifeline, as the devaluation of the Lebanese pound has made imported spirits prohibitively expensive for the average consumer, effectively shrinking the market for mid-range international brands while maintaining a niche luxury segment.",
    consumerInsights:"Consumer behavior in Lebanon has shifted drastically from brand loyalty to 'smart affordability' and national pride. The collapse of purchasing power has led to a 'drink local' movement, where consumers are swapping imported vodkas and whiskies for locally produced Arak (the national anise-flavored spirit), local gin, and craft beers. There is also a distinct polarization in consumption: the affluent 'fresh dollar' economy sustains a demand for ultra-premium imported spirits and fine wines in high-end venues like Mar Mikhael and Batroun, while the mass market has reduced consumption frequency or switched to budget-friendly local alternatives. A recent study indicated that roughly 6.3% of adolescents report consuming alcohol, pointing to early social integration of drinking, but overall per capita consumption is under pressure as households prioritize essentials over discretionary spending.",
    competitiveLandscape:"The competitive structure is a mix of a strong local monopoly in beer and a fragmented, export-oriented landscape for wine and spirits. Almaza (majority-owned by Heineken) continues to dominate the beer segment, though it faces rising competition from local craft breweries like 961 Beer and Colonel, which cater to younger, trend-conscious drinkers. The wine sector is highly competitive and prestigious, led by historic giants like Château Ksara and Château Kefraya, which together control a significant portion of local production and export millions of bottles annually to Europe and the Americas. In the spirits category, while international giants like Diageo maintain a presence for the upper class, local distilleries producing affordable gin and vodka are rapidly gaining market share, effectively filling the void left by expensive imports."
  },
  "Qatar": {
    marketOverview:"The liquor industry in Qatar operates within a highly regulated framework defined by a state-controlled monopoly and significant fiscal barriers. The market is recovering from post-World Cup fluctuations, with the broader beverage sector projected to reach approximately USD 539 million by 2026. A defining characteristic of this market is the 'sin tax' introduced in 2019, which imposes a 100% excise duty on all alcohol imports, effectively doubling retail prices overnight. Despite these high costs, the market has shown resilience in 2024 and 2025, driven largely by a recovering expatriate workforce and a consistent stream of international events (like Formula 1) that sustain on-trade consumption in licensed hotels and clubs.",
    consumerInsights:"The consumer base is almost exclusively composed of expatriates and tourists, as alcohol consumption is illegal for Muslim citizens. The exorbitant pricing structure has forced a 'drink less, but better' behavior pattern; residents with access to the Qatar Distribution Company (QDC) permit system tend to bulk-buy during promotional periods or prioritize higher-quality spirits over volume. Simultaneously, there is a booming market for zero-alcohol alternatives—valued at over USD 16 million in the non-alcoholic wine segment alone—catering to the health-conscious and the wider Muslim population. This 'sober curious' trend is visible in the rising availability of sophisticated mocktails and alcohol-free beers in mainstream supermarkets, which serve as social substitutes in a dry public environment.",
    competitiveLandscape:"Qatar’s liquor distribution is a strict monopoly held by the Qatar Distribution Company (QDC), a subsidiary of Qatar Airways, which serves as the sole importer and retailer for the entire country. There is no private competition in the off-trade sector; residents must book appointments and hold a valid liquor license (tied to a minimum salary threshold, typically QAR 3,000+) to purchase alcohol for home consumption. In the on-trade sector, competition is fierce among high-end international hotel chains (e.g., Marriott, Hilton, Ritz-Carlton), which battle for footfall through 'Happy Hour' offers and ladies' nights to offset the high price points. Brand visibility is thus heavily concentrated in these luxury venues, where global giants like Diageo and Heineken maintain dominance through exclusive pouring agreements."
  },
  "Egypt": {
    marketOverview:"The Egyptian liquor industry is a volume-driven market heavily skewed toward beer, valued at roughly USD 6.1 billion recently and projected to reach approximately USD 6.6 billion by 2026. While the 'Consumable Spirits' segment is relatively niche—valued at just USD 57 million in 2024—it is forecast to grow at a robust CAGR of 8.7% through 2033. The market’s vitality is inextricably linked to the tourism sector, which fuels on-trade consumption in Red Sea resorts and Cairo’s hotels. However, the industry faces significant headwinds from high inflation and steep taxation, which have forced periodic price hikes. despite this, the overall Food & Beverage manufacturing sector (including beverages) continues to expand, driven by a population exceeding 110 million and a steady stream of international visitors.",
    consumerInsights:"Consumer behavior in Egypt is defined by a distinct dichotomy: the mass market vs. the 'modern' consumer. The vast majority of volume is driven by beer, but the fastest-growing category is Ready-to-Drink (RTD) beverages, appealing to younger demographics (Gen Z and Millennials) entering the legal drinking age who prefer sweeter, flavor-forward options over traditional bitter spirits. There is also a noticeable trend of 'health-conscious' consumption, reflected in the rising popularity of non-alcoholic malt beverages (like Birell), which serve as social substitutes in a predominantly Muslim culture. For the drinking population, premiumization is taking root in the wine sector, where domestic consumers are increasingly opting for higher-quality local vintages over expensive imports, driven by the currency devaluation which has made foreign brands prohibitively expensive.",
    competitiveLandscape:"The competitive environment is effectively a monopoly in the beer segment, dominated by Al Ahram Beverages Company (ABC), a subsidiary of Heineken N.V.. ABC controls the lion's share of the market—historically estimated at over 90% of the beer volume and 78% of the malt beverage market with its flagship brand Birell. They continue to solidify this position with significant capital injection, recently announcing a USD 33.1 million investment to expand production capacity to 3.7 million hectoliters. While ABC remains the undisputed giant, the landscape is seeing pockets of competition in the RTD and wine sectors from players like Egy Beverages, who are capitalizing on the demand for innovative, locally produced formats that can compete on price against the monolithic market leader."
  },
    "South Africa": {
        marketOverview:"The South African liquor industry is a mature yet evolving market, valued at approximately USD 19.8 billion in 2025 and projected to grow at a CAGR of roughly 5% through 2030. The sector is currently navigating a complex economic landscape defined by high inflation and aggressive fiscal policies; notably, the government has proposed a 6.75% increase in excise duties ('sin tax') in the 2025 budget, continuing a trend of above-inflation tax hikes. despite these cost pressures, the market remains resilient, supported by a recovering tourism sector and a stabilizing supply chain. Beer remains the undisputed volume leader, accounting for nearly 71% of total alcohol volume and 52% of value, though the most dynamic growth is now visible in the Ready-to-Drink (RTD) and premium spirits segments, which are outperforming the broader market as consumers prioritize convenience and 'accessible luxury.'", 
        consumerInsights:"South African consumers are increasingly adopting a 'drink less, but better' philosophy, driving a significant wave of premiumization across all categories. There is a distinct generational shift led by a young demographic (average age of 27), which is moving away from traditional mass-market wines toward sophisticated RTDs (Ready-to-Drinks) and premium spirits like gin and brandy. The RTD segment, in particular, has become the second-largest category by volume (approx. 15.6%), fueled by a demand for sweeter, fruit-forward profiles and convenient packaging suitable for the 'braai' (barbecue) social culture. Simultaneously, health consciousness is reshaping habits; there is a burgeoning demand for low- and no-alcohol variants, with major retailers expanding shelf space for 0.0% beers and de-alcoholized wines to cater to the 'sober curious' movement in urban centers like Cape Town and Johannesburg.",
        competitiveLandscape:"The competitive environment has been fundamentally reshaped by consolidation, most notably the massive acquisition of Distell by Heineken, which created a powerful new entity (Heineken Beverages) to challenge the historic dominance of South African Breweries (SAB, owned by AB InBev). These two giants now effectively operate as a duopoly controlling the vast majority of the beer and cider market. SAB retains its stronghold on the mass-market beer segment with brands like Carling Black Label, while Heineken Beverages has consolidated its lead in the cider and premium sectors (e.g., Savanna, Amarula). Below this tier, the market is fragmented but vibrant, with international players like Diageo and Pernod Ricard competing fiercely in the spirits category, alongside a robust ecosystem of local craft gin distillers and independent wine estates fighting for share in the premium niche."
    },
    "Nigeria": {
        marketOverview:"The Nigerian liquor industry is currently defined by a paradox of 'inflation-led growth,' where skyrocketing revenues mask stagnant or declining consumption volumes. The brewery sector alone reported a staggering 79.5% year-on-year revenue surge to ₦2.1 trillion in FY 2024, driven almost entirely by aggressive price hikes necessitated by a headline inflation rate exceeding 34%. While the country’s massive youthful population offers immense long-term demographic potential, the immediate reality is one of severe economic contraction; the devaluation of the Naira has decimated purchasing power, forcing a 'sachetization' of the market where consumers downgrade to smaller, more affordable units. Despite these headwinds, the market remains one of the most vital in Africa due to sheer scale, with the broader alcoholic drinks sector showing resilience through adaptation to 'value' price points.",
        consumerInsights:"Nigerian consumers are increasingly polarized between extreme affordability and aspirational premiumization. The most significant trend in the mass market is the explosion of Herbal Bitters (e.g., Orijin, Campari), which have overtaken traditional gin to become a leading spirit category. These high-ABV, medicinal-branded drinks cater to the 'functional' drinking habits of the working class, often believed to have health or aphrodisiac benefits. Conversely, the urban elite and a growing Gen Z demographic are driving a 'Westernized' cocktail culture, fueling demand for imported spirits and sophisticated Ready-to-Drink (RTD) beverages. However, price sensitivity is paramount; brand loyalty is currently fragile, with consumers rapidly switching to cheaper alternatives or locally produced 'value brands' whenever prices tick upward.",
        competitiveLandscape:"The competitive terrain recently underwent a seismic shift with Diageo’s exit from direct manufacturing in 2024, selling its 58.02% controlling stake in Guinness Nigeria to the Tolaram Group for approximately ₦103.7 billion. This move transforms the market structure: Nigerian Breweries (Heineken) now stands as the undisputed dominant manufacturer, controlling the lion's share of the beer volume with brands like Star and Goldberg. Meanwhile, Tolaram—a powerhouse in consumer goods (best known for Indomie noodles)—is expected to leverage its massive distribution network to aggressively push Guinness products into deeper rural markets. The spirits segment remains fragmented but fierce, with local players like Intercontinental Distillers competing against these giants by dominating the lower-end 'sachet' and small-bottle market that global conglomerates often struggle to service profitably."
    },
    "Kenya": {
        marketOverview:"The Kenyan liquor industry is a high-potential market currently battling severe regulatory headwinds, valued at approximately USD 3.6 billion in 2024 with a projected CAGR of roughly 7.1% through 2033. The sector's growth is underpinned by rapid urbanization and a growing middle class, but it is heavily constrained by aggressive taxation. The Finance Act 2023 increased excise duties on spirits and advertising fees, exacerbating an affordability crisis that has driven a massive portion of the market underground. Consequently, the 'illicit' alcohol trade—comprising traditional brews like Chang'aa and counterfeit spirits—now accounts for an estimated 60% of all alcohol consumed in the country, causing an estimated tax revenue loss of KES 120 billion (approx. USD 920 million) annually.",
        consumerInsights:"Consumer behavior in Kenya is starkly polarized by income levels. The affluent and urban middle class are driving a 'premiumization' trend, showing a strong preference for international spirit brands (whisky, gin) and sophisticated Ready-to-Drink (RTD) beverages, which appeal particularly to the younger demographic (Gen Z and Millennials). In contrast, the mass market is 'down-trading' due to inflation, shifting from legal, taxed beer to cheaper, potent illicit alternatives; reports indicate the average adult now consumes 3.6 liters of illicit alcohol annually compared to just 2.5 liters of legal alcohol. Additionally, there is a rising 'health-conscious' segment in Nairobi promoting the growth of low-alcohol and sugar-free cider options, a category that has seen consistent double-digit growth.",
        competitiveLandscape:"The formal market operates as a near-monopoly dominated by East African Breweries Limited (EABL), a subsidiary of Diageo, which commands over 65% to 70% of the beer market with its flagship Tusker brand. EABL effectively controls the supply chain from farm to glass, though it recently noted a 22% profit decline due to currency devaluation and tax costs. Its primary local competitor, Keroche Breweries, has faced existential threats from prolonged tax disputes with the revenue authority, limiting its ability to challenge EABL's dominance. At the premium end, international players like Pernod Ricard and Bacardi are aggressively marketing imported spirits to the upper class, while new local entrants like African Originals are carving out a niche in the craft cider and gin market (e.g., Kenyan Originals), capitalizing on the demand for authentic, locally sourced ingredients."
    },
    "Ethiopia": {
        marketOverview:"The Ethiopian liquor industry is a high-volume, beer-dominated market valued at approximately USD 2.4 billion in 2024, with volume expected to reach nearly 2.1 billion liters by 2028. The sector is fueled by powerful demographic fundamentals, specifically a population exceeding 120 million and a rapid rate of urbanization. However, the industry is currently navigating severe macroeconomic headwinds, including a headline inflation rate hovering near 30% and a significant devaluation of the Birr. These factors have driven up input costs for imported raw materials (like malt and glass), forcing manufacturers to increase prices. Despite this, the market remains attractive due to its sheer scale, with the state-owned National Alcohol and Liquor Factory (NALF) recently reporting an 8% revenue increase to 2.6 billion Birr (approx. USD 45 million), signaling resilience in demand even amidst fiscal tightening.",
        consumerInsights:"Ethiopian drinking culture is characterized by a massive dichotomy between traditional, home-brewed beverages and commercial brands. Historically, the vast majority of alcohol consumed was Tella (traditional beer) and Tej (honey wine). However, rapid urbanization and a young population are driving a structural shift toward commercial beer and 'modern' spirits. In urban centers like Addis Ababa, there is a growing 'brand consciousness' among the youth, who view western-style beers and packaged spirits as status symbols. While beer remains the default social lubricant, there is rising demand for locally produced gin and ouzo (often referred to simply as 'dry alcohol') as a more potent, cost-effective alternative to beer. Conversely, rural consumption remains heavily anchored in the informal sector, where unregulated traditional spirits (Areke) still account for a significant portion of total alcohol intake due to their low cost.",
        competitiveLandscape:"The formal competitive landscape is effectively a fierce duopoly in the beer segment, which constitutes over 90% of the commercial alcohol market. BGI Ethiopia (subsidiary of Castel Group) acts as the market leader, especially following its acquisition of the Meta brand from Diageo in 2022, which consolidated its market share to over 50%. Its primary challenger is Heineken, which has invested heavily to modernize production and capture the premium segment with its Walia and Bedele brands. In the spirits category, the National Alcohol and Liquor Factory (NALF) remains a dominant force, operating as a state-owned giant that controls the mass-market supply of vodka, gin, and ouzo. The entry of new private players is limited by high capital requirements and the entrenched distribution networks of these three giants, creating high barriers to entry for international brands not willing to partner with existing leaders."
    },
    "Angola": {
        marketOverview:"The Angolan liquor industry is a high-volume, beer-dominated market that is slowly recovering from economic volatility, valued at a scale where beer accounts for the vast majority of alcohol consumption. Despite inflationary pressures, the market remains one of the most lucrative in Sub-Saharan Africa due to high urbanization and a 'social drinking' culture. However, local production has become the primary driver of supply as the country seeks to reduce its reliance on imports; domestic production of beer and soft drinks has ramped up significantly to mitigate currency devaluation. The market is projected to see a volume stabilization around 19,000 to 20,000 metric tons by 2028, but value growth is expected to come from the 'formalization' of the sector, as consumers slowly migrate from illicit, home-made brews to branded, taxed products.",
        consumerInsights:"Angolan consumers exhibit a strong dichotomy between 'status' and 'sustenance.' In Luanda, one of the world's most expensive cities for expats, there is a resilient demand for premium Portuguese wines (imports reached over USD 50.2 million from Portugal alone in 2023) and high-end scotch whiskies, which serve as essential status symbols for the elite. Conversely, the mass market is fiercely loyal to beer, which is viewed as a staple food item; demographic data suggests beer consumption is highest among men aged 36–45. A notable trend among the younger demographic (18–35) is a shift toward 'affordable luxury'—opting for accessible but branded spirits (like vodka and gin) and sweeter, flavor-forward Ready-to-Drink (RTD) beverages over traditional bitter lagers.",
        competitiveLandscape:"The competitive terrain is defined by a powerful duopoly between the Castel Group and Refriango. Castel Group is the historic market leader, commanding a massive share of the beer market (estimated at over 80%) with iconic national brands like Cuca, Eka, and Nocal. Its primary challenger, Refriango, has disrupted the market with its flagship beer Tigra and has aggressively diversified into spirits and mixers, operating a massive industrial complex that also bottles Coca-Cola products. In the spirits segment, international giants like Pernod Ricard and Diageo have established direct presences or strong distributor partnerships to capture the premium market, but they face stiff competition from cheaper, locally bottled spirits that cater to the price-sensitive mass market."
    },
};

const MarketResearch = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState<{
    marketOverview: boolean;
    consumerInsights: boolean;
    competitiveLandscape: boolean;
  }>({
    marketOverview: false,
    consumerInsights: false,
    competitiveLandscape: false,
  });
  
  const countryData = locations.find(
    (loc) => loc.name.toLowerCase().replace(/\s+/g, "-") === country
  );

  const marketData = countryData ? detailedMarketData[countryData.name] : null;

  const truncateText = (text: string, isExpanded: boolean) => {
    if (!text || isExpanded) return text;
    const halfLength = Math.floor(text.length / 2);
    return text.slice(0, halfLength);
  };

  const toggleCard = (card: keyof typeof expandedCards) => {
    setExpandedCards((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  if (!countryData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
              <Button onClick={() => navigate("/")}>Return Home</Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{countryData.flagEmoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {countryData.name}
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Market Research & Insights
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>{countryData.region} Region</span>
            </div>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Market Overview</CardTitle>
                  <CardDescription>
                    Key market trends and opportunities in {countryData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {truncateText(
                      marketData?.marketOverview || 
                        "Comprehensive analysis of the spirits and beverage market, including consumer preferences, distribution channels, and growth projections.",
                      expandedCards.marketOverview
                    )}
                    {!expandedCards.marketOverview && marketData?.marketOverview && marketData.marketOverview.length > 200 && "..."}
                  </p>
                  {marketData?.marketOverview && marketData.marketOverview.length > 200 && (
                    <button
                      onClick={() => toggleCard("marketOverview")}
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      {expandedCards.marketOverview ? "View Less" : "View More"}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Consumer Insights</CardTitle>
                  <CardDescription>
                    Understanding local preferences and demographics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {truncateText(
                      marketData?.consumerInsights || 
                        "Detailed demographic data, consumption patterns, and cultural considerations for successful market entry and brand positioning.",
                      expandedCards.consumerInsights
                    )}
                    {!expandedCards.consumerInsights && marketData?.consumerInsights && marketData.consumerInsights.length > 200 && "..."}
                  </p>
                  {marketData?.consumerInsights && marketData.consumerInsights.length > 200 && (
                    <button
                      onClick={() => toggleCard("consumerInsights")}
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      {expandedCards.consumerInsights ? "View Less" : "View More"}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Competitive Landscape</CardTitle>
                  <CardDescription>
                    Analysis of market players and opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                    {truncateText(
                      marketData?.competitiveLandscape || 
                        `Strategic insights into existing competition, market share distribution, and potential partnership opportunities in ${countryData.name}.`,
                      expandedCards.competitiveLandscape
                    )}
                    {!expandedCards.competitiveLandscape && marketData?.competitiveLandscape && marketData.competitiveLandscape.length > 200 && "..."}
                  </p>
                  {marketData?.competitiveLandscape && marketData.competitiveLandscape.length > 200 && (
                    <button
                      onClick={() => toggleCard("competitiveLandscape")}
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      {expandedCards.competitiveLandscape ? "View Less" : "View More"}
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Request Detailed Market Report
                </CardTitle>
                <CardDescription>
                  Get comprehensive insights and data for {countryData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our team can provide you with detailed market research, regulatory guidance,
                  and strategic recommendations for entering the {countryData.name} market.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  Contact Our Team
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketResearch;
