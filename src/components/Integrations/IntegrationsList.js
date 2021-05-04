export const IntegrationsList = [
  {
    name: "Active",
    logo: "/images/logos/Active.png",
    apis: 
      [
          {
          name: "Seasons",
          request: {
            appToken: '',
            request:
              {
                applicationName: '',
                userName: '',
                password: '',
                seasonIds: ''
              }
            },
          setUpForm: [
            {
              inputName: "Application Token",
              requestName: "appToken",
              type: "text"
            },
            {
              inputName: "Application Name",
              requestName: "applicationName",
              type: "text"
            },
            {
              inputName: "Username",
              requestName: "userName",
              type: "text"
            },
            {
              inputName: "Password",
              requestName: "password",
              type: "password"
            },
            {
              inputName: "Season IDs",
              requestName: "seasonIds",
              type: "text",
              note: "Optional: '517746, 613772, 439112' If left blank, will return all seasons."
            },
            ]
          },
        {
          name: "Tuition"
        },
        {
          name: "Registrations"
        },
        {
          name: "Merchandise"
        },
      ]
  },
  {
    name: "Hubspot",
    logo: "/images/logos/Hubspot.png",
    apis: [
      {comingSoon: "Coming Soon"}
    ]
  },
]

