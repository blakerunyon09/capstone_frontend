export const IntegrationsList = [
  {
    name: "Active",
    logo: "/images/logos/Active.png",
    apis: 
      [
          {
          name: "Seasons",
          requestRequirements: {
            appToken: null,
            applicationName: null,
            password: null,
            seasonIds: null
          },
          request: {
            appToken: "Bj45ayY+J1dGddxipZVH17FPdd1Kn5tYNSEfn5wonUBop2BrjhoQCHBbanDTs5BL",
            request:
              {
                applicationName: "MyOrganization",
                userName: "registrar@camp.org",
                password: "123456",
                seasonIds: [557902]
              }
            }
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
    apis: {
      comingSoon: {
        name: "Coming Soon"
      }
    }
  },
]

