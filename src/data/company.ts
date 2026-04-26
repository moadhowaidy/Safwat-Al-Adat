export const COMPANY = {
  // Phone numbers — Libyan format, +218 country code
  whatsappNumber: '+218916428014',
  whatsappNumberDisplay: '+218 91-642-8014',
  phoneNumber: '+218930006160',
  phoneNumberDisplay: '+218 93-000-6160',

  // Email
  email: 'info@safwatadat.ly',

  // @deprecated — use COMPANY.location instead
  country: { en: 'Libya', ar: 'ليبيا' },
  // @deprecated — use COMPANY.location.fullAddress instead
  address: { en: 'Tarhuna, Murqub District, Libya', ar: 'ترهونة، محافظة المرقب، ليبيا' },

  // Location — confirmed Tarhuna, Libya
  location: {
    coordinates: {
      lat: 32.437498,
      lng: 13.625666,
    },
    city:     { en: 'Tarhuna',         ar: 'ترهونة'          },
    district: { en: 'Murqub District', ar: 'محافظة المرقب'   },
    country:  { en: 'Libya',           ar: 'ليبيا'           },

    // Full display address — used in the contact page and footer
    fullAddress: {
      en: 'Tarhuna, Murqub District, Libya',
      ar: 'ترهونة، محافظة المرقب، ليبيا',
    },

    // Pre-built deep links — no API keys required
    // Embed: works inside a sandboxed iframe with no API key
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=32.437498,13.625666&hl=ar&z=15&output=embed',

    // Open the location in the user's preferred map app
    googleMapsShortUrl:      'https://maps.app.goo.gl/Cc7KH4crJuXeHwCh8',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=32.437498,13.625666',
    wazeDirectionsUrl:       'https://www.waze.com/ul?ll=32.437498,13.625666&navigate=yes',
    appleMapsDirectionsUrl:  'https://maps.apple.com/?daddr=32.437498,13.625666',
  },

  // History
  establishedDate: '2025-02-23',
  establishedYear: 2025,
};

export const SOURCE_COUNTRIES = [
  { code: 'TH', name: { en: 'Thailand',   ar: 'تايلاند'    }, categories: ['canned', 'seafood'] },
  { code: 'ID', name: { en: 'Indonesia',  ar: 'إندونيسيا'  }, categories: ['canned', 'seafood'] },
  { code: 'MA', name: { en: 'Morocco',    ar: 'المغرب'     }, categories: ['canned'] },
  { code: 'IN', name: { en: 'India',      ar: 'الهند'      }, categories: ['meat'] },
  { code: 'PK', name: { en: 'Pakistan',   ar: 'باكستان'    }, categories: ['meat'] },
  { code: 'BR', name: { en: 'Brazil',     ar: 'البرازيل'   }, categories: ['meat', 'poultry'] },
  { code: 'TR', name: { en: 'Turkey',     ar: 'تركيا'      }, categories: ['poultry'] },
  { code: 'MY', name: { en: 'Malaysia',   ar: 'ماليزيا'    }, categories: ['poultry'] },
  { code: 'VN', name: { en: 'Vietnam',    ar: 'فيتنام'     }, categories: ['seafood'] },
  { code: 'BD', name: { en: 'Bangladesh', ar: 'بنغلاديش'   }, categories: ['seafood'] },
  { code: 'SD', name: { en: 'Sudan',      ar: 'السودان'    }, categories: ['meat'] },
];
