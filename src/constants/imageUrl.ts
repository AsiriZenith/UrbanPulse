export const IMAGE_URLS = {
  CITY_BANNER: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  TRAFFIC_JAM: 'https://images.pexels.com/photos/262100/pexels-photo-262100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  WASTE_DISPOSAL: 'https://images.pexels.com/photos/3174349/pexels-photo-3174349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ENERGY_CONSUMPTION: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuF6NMxHk7eLkXQGj1dB8g5hG0TUKaEX3HQ&s',
  SMART_TRAFFIC_LIGHTS: 'https://media.istockphoto.com/id/1249340318/photo/self-driving-autonomous-cars-on-city-street.jpg?s=612x612&w=0&k=20&c=Gd88QIkkmN134hkMZ74FK-IXSP7WW0VSp1fGMF8fMoM=',
  SMART_BINS: 'https://www.cistoca.hr/UserDocsImages//Info%20centar/Aktualnosti/pametna%20kanta2.jpg',
  SOLAR_PANEL_GRIDS: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  CITY_CLEANUP_DRIVE: 'https://i.natgeofe.com/k/3519980b-ba58-456d-b691-2ed516c223e0/clean-it-up-textimage_3x2.jpg',
  SMART_CITY_TECH_EXPO: 'https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/42/2025/05/05130525/scewc24-zona-expositiva.jpg',
  URBAN_GARDEN_WORKSHOP: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQqrslskiebvG41kXJqrtV7Q-dwCS21kYSczmCAgoCl_Jb8M4gQ7-t7WjY4xeHSSOOMM&usqp=CAU',
} as const;

export type ImageUrlKey = keyof typeof IMAGE_URLS;
