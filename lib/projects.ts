// Ported 1:1 from design/preview.html's `PROJECTS` array (source of truth
// during design review). Slugs added for real routing; everything else —
// copy, alt text, gallery order — is unchanged.

export type ProjectSection = {
  name: string;
  note?: string;
  gal: string[];
};

export type ProjectVideo = {
  yt?: string;
  ratio?: string;
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  meta: string;
  hero: string;
  heroFocus?: string;
  heroInset?: boolean;
  heroZoom?: number;
  heroHeight?: string;
  dense?: boolean;
  statement: string[];
  alt?: Record<string, string>;
  cap?: Record<string, string>;
  sections?: ProjectSection[];
  gal?: string[];
  video?: ProjectVideo;
};

export const PROJECTS: Project[] = [
{slug:"personal-brand", title:"personal brand",     meta:"2026 \u00b7 portrait \u00b7 visual direction",hero:"h01",
  statement:[
    "Portraits can be quiet, expressive, editorial or unexpected. The approach changes with the person, but the intention stays the same: to find an image that feels true to them now."
  ],
  heroFocus:"50% 11%", heroInset:false,
                            /* 11% trims the forehead off the top of the band — brows
                               sit at the frame’s edge, eyes fill the band. Title sits
                               at the standard bottom offset, same as every other
                               project; the crop fix alone gives it enough clean cheek
                               below the eyes now. Inset removed. */
  alt:{
    "h01":"Close portrait of a woman with dark hair and a pale velvet choker, natural light across her face.",
    "a01":"A woman in a one-shoulder black bodysuit and sheer gloves sits cross-legged in a dark studio, lit from below.",
    "a02":"Low-key portrait of a woman in a one-shoulder black top leaning into a single shaft of light.",
    "a03":"A woman looks up from inside a dark curved concrete stairwell, a band of amber light behind her.",
    "a04":"A woman in a black off-shoulder top leans on a curved dark wall wearing a turquoise pendant.",
    "a05":"A woman sits cross-legged in a black bodysuit against a dark wall, eyes closed, light pooling behind her.",
    "a07":"A woman in a white eyelet blouse and floral headscarf sits on a wooden floor, hands raised as she speaks.",
    "a08":"A woman in white linen and a floral headscarf presses a hand to her chest in hard window light.",
    "a09":"A woman lies on a wooden floor in white cotton, hands raised into a shaft of afternoon light.",
    "a10":"A woman lies on a wooden floor and reaches a hand towards the camera, her face in soft focus behind it.",
    "e01":"A woman reads a paperback in warm lamplight, the open pages lighting her face and hand.",
    "e02":"A woman in black lace sits on a concrete ledge reading a Spanish paperback held in both hands.",
    "e03":"A woman in a cream ribbed tank rests her chin on her hand against a concrete wall, arm tattoo visible.",
    "e04":"A woman in a cream backless bodysuit sits on a stool holding a corded telephone to her ear.",
    "e05":"Profile portrait of a woman with a blunt bob in a black slip dress against a warm cream wall.",
    "e06":"A woman in a sheer black dress sits in a whitewashed nook holding a single red rose, candle and singing bowl beside her.",
    "e07":"A woman in a black slip leans against a concrete wall with both hands raised to her hair, eyes closed.",
    "e08":"Black and white portrait of a woman with a blunt bob, bare shoulders and a fine line tattoo.",
    "e09":"Black and white frame of a woman seen through an open window, sitting on a bed behind a curtain.",
    "e10":"A woman looks down with her eyes closed, bare shoulders above a white sheet, soft daylight.",
    "e11":"A woman stands on white steps holding a white sheet against herself, tropical garden behind her.",
    "e12":"Close detail of a woman's shoulder and the nape of her neck under her dark bob, warm side light.",
    "e14":"A woman looks to camera beside a white lily, tropical foliage and a sunlit wall behind her.",
    "e15":"A woman sits in a bath seen from behind, head turned, a fine line tattoo across her shoulder.",
    "e16":"A woman sits on a terrace ledge wrapped in white linen with a potted palm behind her.",
    "e17":"A woman reads a Clarissa Pinkola Estés paperback, the book held close to her face in warm light.",
    "c01":"A woman in a long black open-backed dress stands on volcanic rock above the surf at dusk.",
    "c02":"A woman in a black backless dress looks over her shoulder, crouched on wet rocks at the shoreline.",
    "c03":"A woman sits bare-backed on rock among pale pebbles, freckled shoulders turned to the sea.",
    "c04":"A woman sits with her back to the camera in a black skirt on dark rocks, waves breaking behind her.",
    "c07":"A woman tilts her head back with one arm raised, silver bangle on her wrist, rock face behind her.",
    "c08":"Close portrait of a woman with sun-bleached hair and a long chain earring against limestone rock.",
    "c17":"A woman in a black dress with crossed back straps looks down, turned away against a rock wall.",
    "c19":"A woman in a sheer black cut-out dress stands on limestone boulders against the Caribbean sea and sky.",
    "c18":"Out-of-focus frame of a woman's shoulder and jaw with the surf breaking on rock beyond her.",
    "c16":"A woman rests her cheek and hand on limestone rock, freckled face turned to the camera at dusk.",
    "c09":"Detail of hands drawing a caramel silk scarf across a bare shoulder, sea and sunlight behind.",
    "c11":"A sheer caramel scarf blows across a woman's face and raised arms against a pale sky.",
    "c12":"A woman in a nude cut-out swimsuit holds a caramel silk scarf overhead on the beach at golden hour.",
    "c10":"A woman in a nude lace-front swimsuit and long caramel robe stands on the sand, surf behind her.",
    "c13":"A woman holds a sheer caramel scarf above her head, one eye visible through the fabric.",
    "c14":"A woman draws a sheer caramel sleeve across her face, looking to camera, sea blurred behind.",
    "c15":"A woman in a black cut-out swimsuit and sheer skirt shields her eyes on volcanic rock by the sea.",
    "c20":"A woman's face half hidden behind a white sheet lifted against the sky.",
    "c22":"A woman with wet salt-flecked hair pushes it back from her face on the beach, white cotton at her shoulder.",
    "c23":"A woman looks over a sand-dusted bare shoulder to camera, beach and surf behind her.",
    "b03":"A woman in a botanically dyed jacket and long white skirt looks back over her shoulder on limestone rocks by the sea.",
    "b04":"A hand holds a round brass mirror beside a pineapple and lemons on white cloth, reflecting the fruit.",
    "b05":"A woman in botanically dyed linen walks a limestone path between thatched palapas and low greenery.",
    "b06":"A woman in a botanically dyed jacket and white linen sits on rock against a pale dusk sky.",
    "b07":"A woman in botanically dyed linen stands on limestone rocks holding a lemon, sea behind her.",
    "b01":"Two hands hold a round brass mirror reflecting the rocks and sea, white linen skirt behind.",
    "b02":"Bare feet with pale blue polish on limestone rock beside a lemon, white linen skirt above.",
    "b08":"A single palm frond laid across crumpled white linen, soft daylight.",
    "b09":"Overhead still life of a pineapple crown and lemons on white cloth beside a brass mirror.",
    "b10":"A woman in a botanically dyed linen jacket turns to camera, limestone and low scrub behind her.",
    "b11":"A woman in white linen sits among glossy green leaves holding a lemon, looking to camera.",
    "b12":"A woman stands beneath a pineapple balanced above her head against tropical foliage."
  },
  sections:[
      {name:"alexia, wellness facilitator",
    note:"for the launch of a wellness practice, a conceptual approach to light and darkness",
    gal:["a01","a02","a03","a04","a05","a07","a08","a09","a10"]},
   {name:"maria, artist",
    note:"a creative exploration, born by the sea",
    gal:["c01","c02","c03","c04","c07","c08","c17","c19","c18","c16","c09","c11","c12","c10","c13","c14","c15","c20","c22","c23"]},
   {name:"emanuela, writer",
    note:"images made to accompany the creative act and to be written over",
    gal:["e01","e02","e03","e04","e05","e06","e07","e08","e09","e10","e11","e12","e14","e15","e16","e17"]},
   {name:"rebecca, graphic designer",
    note:"marketing assets: website, packages and programme",
    gal:["b03","b04","b05","b06","b07",
         "b01","b02",
         "b08","b09","b10","b11","b12"]}
  ]},
 {slug:"commercial", title:"commercial",         meta:"2026 \u00b7 brands \u00b7 product",  hero:"x011",
  heroFocus:"50% 30%",   /* provisional recentring — the goblet was cut off at the
                            top and the composition read off-balance; this brings
                            the whole object into frame. Laura may replace the
                            image, so treat this as a placeholder crop. */
  statement:[
    "Product and campaign work for brands with a story."
  ],
  alt:{
    "x011":"A beaded goblet and a silver dish of bananas among greenery and patterned textiles, styled outdoors in the Riviera Maya.",
    "x001":"Enamelled parrot brooch, freshwater pearls and a red beaded rose arranged on a floral china dish, shot outdoors in the Riviera Maya jungle.",
    "x009":"Close detail of pale green glass-bead embroidery stitched across vintage fabric, lit by low afternoon sun.",
    "x005":"Lilac lace bralette with beaded straps hung from a garden line, backed by soft green jungle bokeh.",
    "x008":"Pink and green embroidered fabrics hanging on a line in dense tropical greenery near Tulum.",
    "x013":"Embroidered flat slippers and bare feet under the sheer green hem of a lace kaftan on a limestone path.",
    "x017":"Profile of a woman wearing a beaded floral headpiece, gold teardrop earring and green lace, against jungle foliage.",
    "x018":"A hand lifts a shell-and-fringe tasselled bag into the sunlight, lens flare across the frame.",
    "x016":"A woman in sheer green lace looks back over her shoulder, pearl headpiece in her hair, Riviera Maya jungle behind her.",
    "x021":"Dappled light falls across a woman's face as she holds a green lace veil above her head.",
    "x012":"Grapes, guavas and a printed silk scarf on an engraved silver dish beside a beaded goblet, styled on layered textiles.",
    "x028":"A woman in green lace holds a bunch of green grapes to her mouth, eyes closed, jungle light behind her.",
    "x037":"Overhead still life of embroidered slippers, silver dishes of fruit and a beaded goblet on a fringed blanket over limestone.",
    "x058":"A hand with a blue stone ring reaches into a tamarind frond above pale limestone rock.",
    "x041":"A silver and coral talisman necklace lying in the dirt among twigs and leaf litter, seen from above.",
    "x044":"Two cupped hands hold a coral-beaded silver pendant necklace in warm side light.",
    "x043":"A man with locs lowers his head as he lifts a silver coin-and-coral necklace towards his chest.",
    "x050":"A man in a patchwork waistcoat stands in the jungle wearing a silver and coral talisman necklace, eyes closed in the sun.",
    "x054":"Frontal portrait of a man with locs wearing layered silver and coral necklaces over an embroidered waistcoat.",
    "x052":"A man presses both hands to his face, a carved gold ring on one finger, one eye visible between them.",
    "x067":"Close frame of a bare torso with a silver and coral collar necklace resting against the skin.",
    "x069":"A man raises both arms towards the sky wearing a coral and silver necklace, jungle canopy behind him.",
    "x074":"A beaded cuff worked in rainbow geometric patterns with a white fringe, propped on limestone rock.",
    "x078":"A green enamelled pendant set with red and blue stones, resting on pale stone and dark earth.",
    "x075":"Silver crosses, an enamelled plaque and amber beads hung together on a weathered tree stump.",
    "x055":"A man in a printed waistcoat walks away down a narrow limestone path into thick Riviera Maya jungle.",
    "x095":"A woman in a pink and gold brocade kimono stands full length in cleared jungle, veiled pillbox cap on her head.",
    "x097":"A woman in a pink brocade kimono extends one arm, sleeve falling open, jungle behind her.",
    "x084":"A woman in a veiled pink cap rests both tattooed hands on her chest above a pink and gold brocade kimono.",
    "x091":"Profile of a woman in a pink veiled cap wearing a long silver leaf earring, jungle bokeh behind.",
    "x089":"A woman tilts her head back with eyes closed, veil across her face and a silver leaf earring catching the light.",
    "x092":"The back of a pink and gold brocade kimono, obi tied in a soft bow at the waist.",
    "x093":"Close detail of the pink brocade kimono's crossed front and tied waist sash, chrysanthemum weave visible.",
    "x094":"The hem of a pink brocade kimono above a studded silver mule on a gravel path.",
    "x100":"A woman in a pink brocade kimono turns away as a figure in a straw hat walks off down the path behind her.",
    "x102":"A man in a straw conical hat and cream shirt stands half hidden behind bright jungle foliage.",
    "x107":"A man holds a woven straw hat against his chest with both hands, rings on his fingers, dark greenery behind.",
    "x106":"A hand with two silver rings grips the woven brim of a straw hat against a black ground.",
    "x118":"A man tilts the brim of his straw hat, cream shirt with coral trim at the neck, jungle light behind.",
    "x104":"Profile of a man in a straw hat and cream shirt seen through out-of-focus leaves.",
    "x112":"Two hands clasped at the waist, blue stone and silver rings, between a cream shirt and ochre trousers.",
    "x109":"A man in a straw hat bends forward across fallen branches, cream shirt and ochre trousers in motion.",
    "x108":"A man seen from behind, straw hat slung on his back over a loose cream shirt, facing into the jungle.",
    "x126":"Close portrait of a man under a low straw brim, eyes in shadow, coral-trimmed cream shirt.",
    "x114":"A man smiles broadly with hands clasped, cream shirt and straw hat, sunlit jungle behind him.",
    "x125":"A man sits on limestone rock in a straw hat, cream shirt and ochre trousers, surrounded by low jungle growth.",
    "x115":"A man stands small and distant in a clearing, framed by out-of-focus jungle leaves.",
    "gd011":"Two hands against hanging roots wear gold hand chains set with black stones and a baroque pearl.",
    "gd036":"A woman brushes hair from her ear, gold drop earring and stacked bracelets catching warm tungsten light.",
    "gd017":"A gold hand chain with black stones laid across a woman's collarbone, her hand at her neck.",
    "gd019":"A gold hand chain with a pearl centre resting across a shoulder and chest in low amber light.",
    "gd022":"A woman looks straight to camera, one hand in her hair, a gold and black hand chain across her fingers.",
    "gd028":"A gold and black drop earring hangs free against the back of a woman's neck and shoulder.",
    "gd030":"Profile of a woman with her hair up wearing an ornate gold drop earring, warm rim light.",
    "gd032":"Both hands at a woman's throat, gold chain jewellery across the backs of her fingers.",
    "gd037":"A woman with hair across her face rests a hand on her chest, gold ring and chain visible, amber light behind.",
    "gd043":"Two hands framing a black harness and leather skirt, gold hand chains across the skin.",
    "gd050":"Silhouette of a woman wearing a pearl-fringed headdress against a warm lamplit wall.",
    "gd051":"A woman lies with her head turned to camera, a gold brocade headwrap across her brow.",
    "gd052":"A woman's face seen through candlelight and out-of-focus gold ornaments.",
    "gd053":"A woman in a gold brocade headwrap looks to camera wearing a fine gold and black chain necklace.",
    "gd054":"A woman in a gold headwrap turns her shoulder to camera, gold chain necklace at her throat.",
    "gd055":"Close portrait of a woman in a bronze brocade headwrap with a gold drop earring, warm shadow behind.",
    "gd056":"Detail of a fine gold chain necklace with black stones falling across a bare shoulder and collarbone."
  },
  sections:[
   {name:"timelines, xingular concept store",
    note:"two lovers crossing timelines",
    gal:["x005","x008","x013","x017","x018","x016","x021","x012","x028","x037","x058","x041","x044","x043","x050","x054","x052","x067","x069","x074","x078","x075","x055","x095","x097","x084","x091","x089","x092","x093","x094","x100","x102","x107","x106","x118","x104","x112","x109","x108","x126","x114","x125","x115"]},
   {name:"goldish, jewelry",
    note:"product photography featuring maria",
    gal:["gd011","gd036","gd017","gd019","gd022","gd028","gd030","gd032","gd037","gd043","gd050","gd051","gd052","gd053","gd054","gd055","gd056"]}
  ]},
 {slug:"artisan-series", title:"artisan series",     meta:"2026 · video + stills",     hero:"g10",
  statement:[
    "An ongoing series on people who make things with their hands, exploring presence, process and meditative craft."
  ],
  video:{yt:"DoVPJeWItho",ratio:"9/16",poster:"g11"},
  alt:{"h01": "Small glazed vessels resting together in a rough stone basin, seen from above.", "p01": "A tattooed forearm setting a small vessel down against a bare plaster wall.", "p02": "Finished vessels gathered on a plaster ledge — ribbed, dotted and smooth forms side by side.", "p03": "A hand reaching into an arched plaster niche holding small dark bottles.", "g01": "The maker standing in a colonnade, a vessel cradled in each arm.", "g02": "Two hands cradling a white vessel with a scalloped rim and a dotted surface.", "g03": "The maker holding a large ribbed vessel against his chest, a smaller one in his hand.", "g04": "A ribbed vessel lifted in darkness above a wide conical bowl.", "g05": "The maker leaning down to arrange magenta flowers in a tall ribbed vase.", "g06": "Hands turning a round, textured jug in the light.", "g07": "The maker against a plaster wall, holding a vessel filled with pink flowers.", "g08": "The maker in profile at a window, vessels held in both arms.", "g09": "A figure and a white dog in a bright doorway at the end of a dark corridor.", "g10": "A pale speckled bottle on sunlit stone, its shadow stretched long beside it.", "g11": "A basket-textured vessel standing in a shaft of light, casting a long shadow.", "g12": "A wide conical bowl at the edge of the light, half in shadow.", "g13": "A round-bellied vessel with two handles, lit from the side, shadow across the stone.", "g14": "A small spouted vessel with looped handles on a lit ledge.", "g15": "The maker standing against plaster, a white vessel in one hand and cut flowers in the other."},
  cap:{},
 gal:["p01","p02","p03",
       "g01","g02","g03","g04","g05","g06","g07","g08",
       "g09","g10","g11","g12","g13","g14","g15"]}
];

export const PROJECT_DIRS: Record<string, string> = {
  "personal-brand": "/images/personal-brand/web/",
  "commercial": "/images/commercial/web/",
  "artisan-series": "/images/artisan-series/web/",
};

export function imgSrc(slug: string, name: string, size: "lg" | "sm"): string {
  const dir = PROJECT_DIRS[slug] ?? "/images/analog/";
  return `${dir}${name}-${size}.jpg`;
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
