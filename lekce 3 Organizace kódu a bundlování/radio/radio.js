const radio = [
    {
      name: 'Evropa 2',
      frequency: '88.6 FM',
      description:
        'Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/evropa2.html',
    },
    {
      name: 'Frekvence 1',
      frequency: '102.1 FM',
      description:
        'Frekvence 1 je česká soukromá rozhlasová stanice, která vysílá od roku 1991. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/frekvence1.html',
    },
    {
      name: 'Radiožurnál',
      frequency: '92.6 FM',
      description:
        'Radiožurnál je česká rozhlasová stanice Českého rozhlasu. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.',
      link: '/radiozurnal.html',
    },
  ];

  const createMarkup = (station) => {
    return `
        <h1>${station.name}</h1>
        <p>${station.frequency}</p>
        <p>${station.description}</p>
        <a href="${station.link}">${station.name}</a>
    `;
};

const renderNavigation = () => {
    let links = '';
    radio.forEach(station => {
        links += `<a href="${station.link}">${station.name}</a>`;
    });
    return links;
};

export { radio, createMarkup, renderNavigation };