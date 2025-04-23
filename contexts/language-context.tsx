"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

type Translations = {
  es: TranslationStrings
  en: TranslationStrings
}

type TranslationStrings = {
  nav: {
    home: string
    register: string
    rankings: string
    downloads: string
    info: string
    vip: string
    more: string
    forum: string
    support: string
    donation: string
    login: string
    account: string
    social: string
  }
  hero: {
    accounts: string
    download: string
    client: string
  }
  news: {
    title: string
    important: string
    maintenance: string
    event: string
  }
  server: {
    title: string
    version: string
    experience: string
    drop: string
    accounts: string
    characters: string
    guilds: string
    timeonline: string
    maxlevel: string
    zendrop: string
    pointsperreset: string
  }
  castle: {
    title: string
    subtitle: string
  }
  rankings: {
    players: string
    resets: string
    events: string
    name: string
    class: string
    reset: string
    ranking: string
    more: string
    novice: string
    apprentice: string
  }
  footer: {
    best: string
    rights: string
  }
  register: {
    title: string
    username: string
    email: string
    password: string
    confirmPassword: string
    acceptTerms: string
    termsLink: string
    createAccount: string
    alreadyHaveAccount: string
    login: string
    successMessage: string
    errors: {
      usernameRequired: string
      usernameLength: string
      emailRequired: string
      emailInvalid: string
      passwordRequired: string
      passwordLength: string
      confirmPasswordRequired: string
      passwordsMatch: string
      termsRequired: string
    }
  }
  downloads: {
    title: string
    subtitle: string
    fullClient: string
    fullClientDesc: string
    patch: string
    patchDesc: string
    download: string
    size: string
    requirements: string
    minimum: string
    recommended: string
    storage: string
    instructions: string
    step1: string
    step2: string
    step3: string
    step4: string
    step5: string
  }
  rankingsPage: {
    title: string
    subtitle: string
    topPlayers: string
    topResets: string
    topPvP: string,
    killCount: string,
    topGuilds: string
    name: string
    class: string
    level: string
    reset: string
    guild: string
    ranking: string
    guildName: string
    members: string
    score: string
    leader: string,
    rankings: {
      novice: string
      apprentice: string
      expert: string
      master: string
    }
  }
  infosPage: {
    title: string
    subtitle: string
    serverInfo: string
    features: string
    eventsSchedule: string
    serverRules: string
    version: string
    experience: string
    drop: string
    zen: string
    maxStats: string
    maxLevel: string
    maxReset: string
    resetLevel: string
    masterResetLevel: string
    masterResetReq: string
    day: string
    time: string
    event: string
    rewards: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
    bloodCastleRewards: string
    devilSquareRewards: string
    chaosCastleRewards: string
    illusionTempleRewards: string
    castleSiegeRewards: string
    crywolfRewards: string
    kanturuRewards: string
    raklionRewards: string
    fortressRewards: string
    featuresList: {
      customItems: string
      balancedClasses: string
      weeklyEvents: string
      vipSystem: string
      guildSystem: string
      pvpSystem: string
      questSystem: string
    }
    rules: {
      noHacking: string
      noInsulting: string
      noSpamming: string
      noMultiClient: string
      noExploiting: string
      respectGMs: string
      reportBugs: string
      accountSharing: string
      itemSelling: string
      penalties: string
    }
  }
  account: {
    lastLogin: string
    characters: string
    settings: string
    signOut: string
    myCharacters: string
    accountSettings: string
    changePassword: string
    currentPassword: string
    newPassword: string
    confirmPassword: string
    updatePassword: string
    level: string
    resets: string
    masterLevel: string
    reset: string
    addStats: string
    pkClear: string
    resetStats: string
    stats: string
    strength: string
    agility: string
    vitality: string
    energy: string
    addStatsFor: string
    availablePoints: string
    pointsToAdd: string
    cancel: string
    saveChanges: string
    resetCharacter: string
    resetConfirmation: string
    resetRequirements: string
    levelRequirement: string
    zenRequirement: string
    itemsLost: string
    confirmReset: string
    clearPKStatus: string
    pkClearConfirmation: string
    pkClearCost: string
    confirmPKClear: string
    resetStatsConfirmation: string
    resetStatsCost: string
    confirmResetStats: string
    passwordChangeSuccess: string
    ok: string
    loading: string
  }
  vips: {
    title: string
    subtitle: string
    choosePlan: string
    mostPopular: string
    buyNow: string
    paymentMethods: string
    benefits: {
      exp: {
        title: string
        description: string
      }
      drop: {
        title: string
        description: string
      }
      items: {
        title: string
        description: string
      }
      events: {
        title: string
        description: string
      }
    }
    bronze: {
      name: string
      duration: string
      feature1: string
      feature2: string
      feature3: string
      feature4: string
    }
    silver: {
      name: string
      duration: string
      feature1: string
      feature2: string
      feature3: string
      feature4: string
      feature5: string
    }
    gold: {
      name: string
      duration: string
      feature1: string
      feature2: string
      feature3: string
      feature4: string
      feature5: string
      feature6: string
    }
    faq: {
      title: string
      q1: string
      a1: string
      q2: string
      a2: string
      q3: string
      a3: string
      q4: string
      a4: string
    }
    payment: {
      paypal: string
      creditCard: string
      crypto: string
    }
  }
  social: {
    title: string
    subtitle: string
    followUs: string
    discordFeature: {
      title: string
      description: string
      feature1: string
      feature2: string
      feature3: string
      joinNow: string
    }
    community: {
      title: string
      events: {
        title: string
        description: string
      }
      content: {
        title: string
        description: string
      }
      global: {
        title: string
        description: string
      }
    }
    discord: {
      description: string
      join: string
    }
    facebook: {
      description: string
      follow: string
    }
    instagram: {
      description: string
      follow: string
    }
    twitter: {
      description: string
      follow: string
    }
    youtube: {
      description: string
      subscribe: string
    }
    twitch: {
      description: string
      follow: string
    }
    guidelines: {
      title: string
      description: string
      rule1: string
      rule2: string
      rule3: string
      rule4: string
      rule5: string
    }
  }
  support: {
    title: string
    subtitle: string
    categories: {
      title: string
      bugs: string
      bugsDesc: string
      account: string
      accountDesc: string
      report: string
      reportDesc: string
      suggestions: string
      suggestionsDesc: string
    }
    response: {
      title: string
      description: string
      time: string
    }
    form: {
      title: string
      name: string
      email: string
      subject: string
      category: string
      selectCategory: string
      description: string
      descriptionPlaceholder: string
      attachments: string
      attachmentsHelp: string
      submit: string
      success: {
        title: string
        message: string
        newTicket: string
      }
      errors: {
        nameRequired: string
        emailRequired: string
        emailInvalid: string
        subjectRequired: string
        categoryRequired: string
        descriptionRequired: string
        descriptionLength: string
      }
    }
    faq: {
      title: string
      q1: string
      a1: string
      q2: string
      a2: string
      q3: string
      a3: string
      q4: string
      a4: string
    }
  }
  donation: {
    title: string
    subtitle: string
    categories: {
      vip: string
      coins: string
      donation: string
    }
    popular: string
    bestValue: string
    buyNow: string
    donate: string
    custom: string
    thankYou: {
      title: string
      message: string
      close: string
    }
    vip: {
      bronze: {
        name: string
        duration: string
        benefit1: string
        benefit2: string
        benefit3: string
      }
      silver: {
        name: string
        duration: string
        benefit1: string
        benefit2: string
        benefit3: string
        benefit4: string
      }
      gold: {
        name: string
        duration: string
        benefit1: string
        benefit2: string
        benefit3: string
        benefit4: string
        benefit5: string
      }
    }
    vipInfo: {
      title: string
      description: string
      howToUse: string
      step1: string
      step2: string
      step3: string
      notes: string
      note1: string
      note2: string
      note3: string
    }
    coins: {
      small: {
        name: string
      }
      medium: {
        name: string
      }
      large: {
        name: string
      }
      xlarge: {
        name: string
      }
    }
    coinsInfo: {
      title: string
      description: string
      whatCanBuy: string
      item1: string
      item2: string
      item3: string
      item4: string
      howToUse: string
      step1: string
      step2: string
      step3: string
    }
    donationInfo: {
      title: string
      description: string
      customAmount: string
      whereGoes: string
      serverCosts: {
        title: string
        description: string
      }
      development: {
        title: string
        description: string
      }
      community: {
        title: string
        description: string
      }
    }
    paymentMethods: {
      title: string
      creditCard: {
        title: string
        description: string
      }
      paypal: {
        title: string
        description: string
      }
      crypto: {
        title: string
        description: string
      }
    }
  }
  login: {
    title: string
    username: string
    password: string
    rememberMe: string
    forgotPassword: string
    loginButton: string
    loggingIn: string
    noAccount: string
    register: string
    errors: {
      usernameRequired: string
      passwordRequired: string
      invalidCredentials: string
      serverError: string
    }
  }
}

const translations: Translations = {
  es: {
    nav: {
      home: "Inicio",
      register: "Registro",
      rankings: "Rankings",
      downloads: "Descargas",
      info: "Información",
      vip: "VIP",
      more: "Más",
      forum: "Foro",
      support: "Soporte",
      donation: "Donación",
      login: "Iniciar Sesión",
      account: "Cuenta",
      social: "Social",
    },
    hero: {
      accounts: "Cuentas",
      download: "Descargar",
      client: "Cliente",
    },
    news: {
      title: "Noticias",
      important: "Importante",
      maintenance: "Mantenimiento",
      event: "Evento",
    },
    server: {
      title: "Servidor",
      version: "Versión",
      experience: "Experiencia",
      drop: "Drop",
      accounts: "Cuentas",
      characters: "Personajes",
      guilds: "Gremios",
      timeonline: "Días online",
      maxlevel: "Nivel Máximo",
      zendrop: "Drop de zen",
      pointsperreset: "Puntos por reset"
    },
    castle: {
      title: "Castle Siege",
      subtitle: "¡Lucha por el control del castillo!",
    },
    rankings: {
      players: "Jugadores",
      resets: "Resets",
      events: "Eventos",
      name: "Nombre",
      class: "Clase",
      reset: "Reset",
      ranking: "Ranking",
      more: "Más",
      novice: "Novato",
      apprentice: "Aprendiz",
    },
    footer: {
      best: "Mu Dinakon",
      rights: "Todos los derechos reservados",
    },
    register: {
      title: "Registro",
      username: "Nombre de usuario",
      email: "Correo electrónico",
      password: "Contraseña",
      confirmPassword: "Confirmar contraseña",
      acceptTerms: "Acepto los términos y condiciones",
      termsLink: "Términos y condiciones",
      createAccount: "Crear cuenta",
      alreadyHaveAccount: "¿Ya tienes una cuenta?",
      login: "Iniciar sesión",
      successMessage: "¡Cuenta creada con éxito!",
      errors: {
        usernameRequired: "El nombre de usuario es obligatorio",
        usernameLength: "El nombre de usuario debe tener entre 3 y 20 caracteres",
        emailRequired: "El correo electrónico es obligatorio",
        emailInvalid: "El correo electrónico no es válido",
        passwordRequired: "La contraseña es obligatoria",
        passwordLength: "La contraseña debe tener al menos 6 caracteres",
        confirmPasswordRequired: "La confirmación de la contraseña es obligatoria",
        passwordsMatch: "Las contraseñas no coinciden",
        termsRequired: "Debes aceptar los términos y condiciones",
      },
    },
    downloads: {
      title: "Descargas",
      subtitle: "Descarga los archivos necesarios para jugar",
      fullClient: "Cliente Completo",
      fullClientDesc: "Descarga el cliente completo del juego",
      patch: "Parche",
      patchDesc: "Descarga el parche más reciente",
      download: "Descargar",
      size: "Tamaño",
      requirements: "Requisitos",
      minimum: "Mínimo",
      recommended: "Recomendado",
      storage: "Almacenamiento",
      instructions: "Instrucciones",
      step1: "Descargar el cliente en alguno de los links proporcionados.",
      step2: "Descomprimir el cliente.",
      step3: "Ejecutar MUnique.OpenMU.ClientLauncher",
      step4: "Click en Launch Client",
      step5: "Loguearse en el juego con la cuenta creada en esta página.",
    },
    rankingsPage: {
      title: "Rankings",
      subtitle: "Los mejores jugadores del servidor",
      topPlayers: "Top Jugadores",
      topResets: "Top Resets",
      topPvP: "Top PvP",
      killCount: "PK Count",
      topGuilds: "Top Gremios",
      name: "Nombre",
      class: "Clase",
      level: "Nivel",
      reset: "Reset",
      guild: "Gremio",
      ranking: "Ranking",
      guildName: "Nombre del Gremio",
      members: "Miembros",
      score: "Puntuación",
      leader: "Líder",
      rankings: {
        novice: "Novato",
        apprentice: "Aprendiz",
        expert: "Experto",
        master: "Maestro",
      },
    },
    infosPage: {
      title: "Información del Servidor",
      subtitle: "Toda la información que necesitas saber sobre el servidor",
      serverInfo: "Información del Servidor",
      features: "Características",
      eventsSchedule: "Horario de Eventos",
      serverRules: "Reglas del Servidor",
      version: "Versión",
      experience: "Experiencia",
      drop: "Drop",
      zen: "Zen",
      maxStats: "Stats Máximos",
      maxLevel: "Nivel Máximo",
      maxReset: "Reset Máximo",
      resetLevel: "Nivel de Reset",
      masterResetLevel: "Nivel de Master Reset",
      masterResetReq: "Requisito de Master Reset",
      day: "Día",
      time: "Hora",
      event: "Evento",
      rewards: "Recompensas",
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      bloodCastleRewards: "Recompensas de Blood Castle",
      devilSquareRewards: "Recompensas de Devil Square",
      chaosCastleRewards: "Recompensas de Chaos Castle",
      illusionTempleRewards: "Recompensas de Illusion Temple",
      castleSiegeRewards: "Recompensas de Castle Siege",
      crywolfRewards: "Recompensas de Crywolf",
      kanturuRewards: "Recompensas de Kanturu",
      raklionRewards: "Recompensas de Raklion",
      fortressRewards: "Recompensas de Fortress",
      featuresList: {
        customItems: "Items Custom",
        balancedClasses: "Clases Balanceadas",
        weeklyEvents: "Eventos Semanales",
        vipSystem: "Sistema VIP",
        guildSystem: "Sistema de Gremios",
        pvpSystem: "Sistema PvP",
        questSystem: "Sistema de Misiones",
      },
      rules: {
        noHacking: "No Hackear",
        noInsulting: "No Insultar",
        noSpamming: "No Spamming",
        noMultiClient: "No Multi Cliente",
        noExploiting: "No Explotar Bugs",
        respectGMs: "Respetar a los GMs",
        reportBugs: "Reportar Bugs",
        accountSharing: "No Compartir Cuentas",
        itemSelling: "No Vender Items por Dinero Real",
        penalties: "Penalizaciones",
      },
    },
    account: {
      lastLogin: "Último Inicio de Sesión",
      characters: "Personajes",
      settings: "Configuración",
      signOut: "Cerrar Sesión",
      myCharacters: "Mis Personajes",
      accountSettings: "Configuración de la Cuenta",
      changePassword: "Cambiar Contraseña",
      currentPassword: "Contraseña Actual",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Contraseña",
      updatePassword: "Actualizar Contraseña",
      level: "Nivel",
      resets: "Resets",
      masterLevel: "Nivel Maestro",
      reset: "Reset",
      addStats: "Agregar Stats",
      pkClear: "Limpiar PK",
      resetStats: "Resetear Stats",
      stats: "Stats",
      strength: "Fuerza",
      agility: "Agilidad",
      vitality: "Vitalidad",
      energy: "Energía",
      addStatsFor: "Agregar Stats para",
      availablePoints: "Puntos Disponibles",
      pointsToAdd: "Puntos a Agregar",
      cancel: "Cancelar",
      saveChanges: "Guardar Cambios",
      resetCharacter: "Resetear Personaje",
      resetConfirmation: "¿Estás seguro de que quieres resetear tu personaje?",
      resetRequirements: "Requisitos para Resetear",
      levelRequirement: "Nivel Requerido",
      zenRequirement: "Zen Requerido",
      itemsLost: "Items Perdidos",
      confirmReset: "Confirmar Reset",
      clearPKStatus: "Limpiar Estado PK",
      pkClearConfirmation: "¿Estás seguro de que quieres limpiar tu estado PK?",
      pkClearCost: "Costo de Limpiar PK",
      confirmPKClear: "Confirmar Limpiar PK",
      resetStatsConfirmation: "¿Estás seguro de que quieres resetear tus stats?",
      resetStatsCost: "Costo de Resetear Stats",
      confirmResetStats: "Confirmar Resetear Stats",
      passwordChangeSuccess: "Contraseña cambiada con éxito",
      ok: "Aceptar",
      loading: "Cargando...",
    },
    vips: {
      title: "VIP",
      subtitle: "Beneficios exclusivos para jugadores VIP",
      choosePlan: "Elige tu Plan",
      mostPopular: "Más Popular",
      buyNow: "Comprar Ahora",
      paymentMethods: "Métodos de Pago",
      benefits: {
        exp: {
          title: "Experiencia",
          description: "Aumenta la experiencia obtenida en el juego.",
        },
        drop: {
          title: "Drop",
          description: "Aumenta la probabilidad de obtener items.",
        },
        items: {
          title: "Items",
          description: "Obtén items exclusivos.",
        },
        events: {
          title: "Eventos",
          description: "Participa en eventos exclusivos.",
        },
      },
      bronze: {
        name: "Bronce",
        duration: "30 días",
        feature1: "+50% Experiencia",
        feature2: "+25% Drop",
        feature3: "Acceso a Eventos VIP",
        feature4: "Soporte Prioritario",
      },
      silver: {
        name: "Plata",
        duration: "60 días",
        feature1: "+75% Experiencia",
        feature2: "+50% Drop",
        feature3: "Acceso a Eventos VIP",
        feature4: "Items Exclusivos",
        feature5: "Soporte Prioritario",
      },
      gold: {
        name: "Oro",
        duration: "90 días",
        feature1: "+100% Experiencia",
        feature2: "+75% Drop",
        feature3: "Acceso a Eventos VIP",
        feature4: "Items Exclusivos",
        feature5: "Soporte Prioritario",
        feature6: "Regalos Mensuales",
      },
      faq: {
        title: "Preguntas Frecuentes",
        q1: "¿Qué es VIP?",
        a1: "VIP es un sistema de beneficios exclusivos para jugadores que apoyan el servidor.",
        q2: "¿Cómo me hago VIP?",
        a2: "Puedes hacerte VIP comprando un plan en la página de donación.",
        q3: "¿Qué beneficios obtengo al ser VIP?",
        a3: "Obtienes beneficios como aumento de experiencia, drop, acceso a eventos exclusivos y más.",
        q4: "¿Cómo uso mis beneficios VIP?",
        a4: "Los beneficios VIP se activan automáticamente al comprar un plan.",
      },
      payment: {
        paypal: "PayPal",
        creditCard: "Tarjeta de Crédito",
        crypto: "Criptomonedas",
      },
    },
    social: {
      title: "Social",
      subtitle: "¡Únete a nuestra comunidad!",
      followUs: "Síguenos en nuestras redes sociales",
      discordFeature: {
        title: "Discord",
        description: "Únete a nuestro servidor de Discord para estar al tanto de las últimas noticias y eventos.",
        feature1: "Noticias y Anuncios",
        feature2: "Soporte Técnico",
        feature3: "Comunidad Activa",
        joinNow: "Unirse Ahora",
      },
      community: {
        title: "Comunidad",
        events: {
          title: "Eventos",
          description: "Participa en eventos y gana premios.",
        },
        content: {
          title: "Contenido",
          description: "Comparte tu contenido con la comunidad.",
        },
        global: {
          title: "Global",
          description: "Chatea con jugadores de todo el mundo.",
        },
      },
      discord: {
        description: "Únete a nuestro servidor de Discord.",
        join: "Unirse",
      },
      facebook: {
        description: "Síguenos en Facebook.",
        follow: "Seguir",
      },
      instagram: {
        description: "Síguenos en Instagram.",
        follow: "Seguir",
      },
      twitter: {
        description: "Síguenos en Twitter.",
        follow: "Seguir",
      },
      youtube: {
        description: "Suscríbete a nuestro canal de YouTube.",
        subscribe: "Suscribirse",
      },
      twitch: {
        description: "Síguenos en Twitch.",
        follow: "Seguir",
      },
      guidelines: {
        title: "Guías de la Comunidad",
        description: "Sigue estas guías para mantener una comunidad sana.",
        rule1: "Sé respetuoso con los demás.",
        rule2: "No hagas spam.",
        rule3: "No publiques contenido inapropiado.",
        rule4: "No hagas publicidad de otros servidores.",
        rule5: "Sigue las instrucciones de los administradores.",
      },
    },
    support: {
      title: "Soporte",
      subtitle: "¿Necesitas ayuda?",
      categories: {
        title: "Categorías",
        bugs: "Reportar Bugs",
        bugsDesc: "Reporta cualquier bug que encuentres en el juego.",
        account: "Problemas de Cuenta",
        accountDesc: "Problemas con tu cuenta.",
        report: "Reportar Jugador",
        reportDesc: "Reporta a un jugador que esté infringiendo las reglas.",
        suggestions: "Sugerencias",
        suggestionsDesc: "Envía tus sugerencias para mejorar el servidor.",
      },
      response: {
        title: "Tiempo de Respuesta",
        description: "Nuestro equipo de soporte responderá a tu solicitud lo antes posible.",
        time: "Tiempo estimado de respuesta: 24-48 horas",
      },
      form: {
        title: "Formulario de Soporte",
        name: "Nombre",
        email: "Correo Electrónico",
        subject: "Asunto",
        category: "Categoría",
        selectCategory: "Seleccionar Categoría",
        description: "Descripción",
        descriptionPlaceholder: "Describe tu problema detalladamente",
        attachments: "Adjuntos",
        attachmentsHelp: "Adjunta capturas de pantalla o archivos relevantes",
        submit: "Enviar",
        success: {
          title: "¡Solicitud Enviada!",
          message: "Tu solicitud ha sido enviada con éxito. Recibirás una respuesta en breve.",
          newTicket: "Crear Nuevo Ticket",
        },
        errors: {
          nameRequired: "El nombre es obligatorio",
          emailRequired: "El correo electrónico es obligatorio",
          emailInvalid: "El correo electrónico no es válido",
          subjectRequired: "El asunto es obligatorio",
          categoryRequired: "La categoría es obligatoria",
          descriptionRequired: "La descripción es obligatoria",
          descriptionLength: "La descripción debe tener al menos 10 caracteres",
        },
      },
      faq: {
        title: "Preguntas Frecuentes",
        q1: "¿Cómo reporto un bug?",
        a1: "Puedes reportar un bug a través del formulario de soporte.",
        q2: "¿Cómo recupero mi cuenta?",
        a2: "Puedes recuperar tu cuenta a través del formulario de soporte.",
        q3: "¿Cómo reporto a un jugador?",
        a3: "Puedes reportar a un jugador a través del formulario de soporte.",
        q4: "¿Cómo hago una sugerencia?",
        a4: "Puedes hacer una sugerencia a través del formulario de soporte.",
      },
    },
    donation: {
      title: "Donación",
      subtitle: "Apoya el servidor y obtén recompensas",
      categories: {
        vip: "VIP",
        coins: "Coins",
        donation: "Donación",
      },
      popular: "Popular",
      bestValue: "Mejor Valor",
      buyNow: "Comprar Ahora",
      donate: "Donar",
      custom: "Cantidad Personalizada",
      thankYou: {
        title: "¡Gracias por tu Donación!",
        message: "Tu donación ha sido recibida con éxito. ¡Gracias por apoyar el servidor!",
        close: "Cerrar",
      },
      vip: {
        bronze: {
          name: "Bronce",
          duration: "30 Días",
          benefit1: "+50% Experiencia",
          benefit2: "+25% Drop",
          benefit3: "Acceso a Eventos VIP",
        },
        silver: {
          name: "Plata",
          duration: "60 Días",
          benefit1: "+75% Experiencia",
          benefit2: "+50% Drop",
          benefit3: "Acceso a Eventos VIP",
          benefit4: "Items Exclusivos",
        },
        gold: {
          name: "Oro",
          duration: "90 Días",
          benefit1: "+100% Experiencia",
          benefit2: "+75% Drop",
          benefit3: "Acceso a Eventos VIP",
          benefit4: "Items Exclusivos",
          benefit5: "Regalos Mensuales",
        },
      },
      vipInfo: {
        title: "Información VIP",
        description: "Aprende cómo usar tus beneficios VIP.",
        howToUse: "Cómo Usar",
        step1: "Inicia sesión en tu cuenta.",
        step2: "Ve a la página de tu cuenta.",
        step3: "Activa tus beneficios VIP.",
        notes: "Notas",
        note1: "Los beneficios VIP se activan automáticamente al comprar un plan.",
        note2: "Los beneficios VIP son válidos por el tiempo que dure tu plan.",
        note3: "Puedes renovar tu plan VIP en cualquier momento.",
      },
      coins: {
        small: {
          name: "Pequeño",
        },
        medium: {
          name: "Mediano",
        },
        large: {
          name: "Grande",
        },
        xlarge: {
          name: "Extra Grande",
        },
      },
      coinsInfo: {
        title: "Información de Coins",
        description: "Aprende cómo usar tus Coins.",
        whatCanBuy: "¿Qué puedes comprar con Coins?",
        item1: "Items Exclusivos",
        item2: "Servicios Premium",
        item3: "Eventos Especiales",
        item4: "Más...",
        howToUse: "Cómo Usar",
        step1: "Inicia sesión en tu cuenta.",
        step2: "Ve a la tienda de Coins.",
        step3: "Compra los items que desees.",
      },
      donationInfo: {
        title: "Información de Donación",
        description: "Aprende cómo tu donación ayuda al servidor.",
        customAmount: "Cantidad Personalizada",
        whereGoes: "¿A dónde va tu donación?",
        serverCosts: {
          title: "Costos del Servidor",
          description: "Tu donación ayuda a cubrir los costos del servidor.",
        },
        development: {
          title: "Desarrollo",
          description: "Tu donación ayuda a financiar el desarrollo del servidor.",
        },
        community: {
          title: "Comunidad",
          description: "Tu donación ayuda a apoyar a la comunidad.",
        },
      },
      paymentMethods: {
        title: "Métodos de Pago",
        creditCard: {
          title: "Tarjeta de Crédito",
          description: "Paga con tu tarjeta de crédito.",
        },
        paypal: {
          title: "PayPal",
          description: "Paga con PayPal.",
        },
        crypto: {
          title: "Criptomonedas",
          description: "Paga con criptomonedas.",
        },
      },
    },
    login: {
      title: "Iniciar Sesión",
      username: "Nombre de usuario",
      password: "Contraseña",
      rememberMe: "Recordarme",
      forgotPassword: "¿Olvidaste tu contraseña?",
      loginButton: "Iniciar Sesión",
      loggingIn: "Iniciando sesión...",
      noAccount: "¿No tienes una cuenta?",
      register: "Regístrate",
      errors: {
        usernameRequired: "El nombre de usuario es obligatorio",
        passwordRequired: "La contraseña es obligatoria",
        invalidCredentials: "Nombre de usuario o contraseña incorrectos",
        serverError: "Error del servidor, inténtalo de nuevo más tarde",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      register: "Register",
      rankings: "Rankings",
      downloads: "Downloads",
      info: "Info",
      vip: "VIP",
      more: "More",
      forum: "Forum",
      support: "Support",
      donation: "Donation",
      login: "Login",
      account: "Account",
      social: "Social",
    },
    hero: {
      accounts: "Accounts",
      download: "Download",
      client: "Client",
    },
    news: {
      title: "News",
      important: "Important",
      maintenance: "Maintenance",
      event: "Event",
    },
    server: {
      title: "Server",
      version: "Version",
      experience: "Experience",
      drop: "Drop",
      accounts: "Accounts",
      characters: "Characters",
      guilds: "Guilds",
      timeonline: "Days operating",
      maxlevel: "Max level",
      zendrop: "Zen drop",
      pointsperreset: "Points per reset"
    },
    castle: {
      title: "Castle Siege",
      subtitle: "Fight for the control of the castle!",
    },
    rankings: {
      players: "Players",
      resets: "Resets",
      events: "Events",
      name: "Name",
      class: "Class",
      reset: "Reset",
      ranking: "Ranking",
      more: "More",
      novice: "Novice",
      apprentice: "Apprentice",
    },
    footer: {
      best: "Mu Dinakon",
      rights: "All rights reserved",
    },
    register: {
      title: "Register",
      username: "Username",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      acceptTerms: "I accept the terms and conditions",
      termsLink: "Terms and conditions",
      createAccount: "Create Account",
      alreadyHaveAccount: "Already have an account?",
      login: "Login",
      successMessage: "Account created successfully!",
      errors: {
        usernameRequired: "Username is required",
        usernameLength: "Username must be between 3 and 20 characters",
        emailRequired: "Email is required",
        emailInvalid: "Email is invalid",
        passwordRequired: "Password is required",
        passwordLength: "Password must be at least 6 characters",
        confirmPasswordRequired: "Confirm password is required",
        passwordsMatch: "Passwords do not match",
        termsRequired: "You must accept the terms and conditions",
      },
    },
    downloads: {
      title: "Downloads",
      subtitle: "Download the necessary files to play",
      fullClient: "Full Client",
      fullClientDesc: "Download the full client of the game",
      patch: "Patch",
      patchDesc: "Download the latest patch",
      download: "Download",
      size: "Size",
      requirements: "Requirements",
      minimum: "Minimum",
      recommended: "Recommended",
      storage: "Storage",
      instructions: "Instructions",
      step1: "Download the client",
      step2: "Extract the client.",
      step3: "Execute MUnique.OpenMU.ClientLauncher.exe",
      step4: "Click on Launch Client",
      step5: "Log in with an account created in this website",
    },
    rankingsPage: {
      title: "Rankings",
      subtitle: "The best players on the server",
      topPlayers: "Top Players",
      topResets: "Top Resets",
      topPvP: "Top PvP",
      killCount: "PK Totales",
      topGuilds: "Top Guilds",
      name: "Name",
      class: "Class",
      level: "Level",
      reset: "Reset",
      guild: "Guild",
      ranking: "Ranking",
      guildName: "Guild Name",
      members: "Members",
      score: "Score",
      leader: "Leader",
      rankings: {
        novice: "Novice",
        apprentice: "Apprentice",
        expert: "Expert",
        master: "Master",
      },
    },
    infosPage: {
      title: "Server Information",
      subtitle: "All the information you need to know about the server",
      serverInfo: "Server Information",
      features: "Features",
      eventsSchedule: "Events Schedule",
      serverRules: "Server Rules",
      version: "Version",
      experience: "Experience",
      drop: "Drop",
      zen: "Zen",
      maxStats: "Max Stats",
      maxLevel: "Max Level",
      maxReset: "Max Reset",
      resetLevel: "Reset Level",
      masterResetLevel: "Master Reset Level",
      masterResetReq: "Master Reset Requirement",
      day: "Day",
      time: "Time",
      event: "Event",
      rewards: "Rewards",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      bloodCastleRewards: "Blood Castle Rewards",
      devilSquareRewards: "Devil Square Rewards",
      chaosCastleRewards: "Chaos Castle Rewards",
      illusionTempleRewards: "Illusion Temple Rewards",
      castleSiegeRewards: "Castle Siege Rewards",
      crywolfRewards: "Crywolf Rewards",
      kanturuRewards: "Kanturu Rewards",
      raklionRewards: "Raklion Rewards",
      fortressRewards: "Fortress Rewards",
      featuresList: {
        customItems: "Custom Items",
        balancedClasses: "Balanced Classes",
        weeklyEvents: "Weekly Events",
        vipSystem: "VIP System",
        guildSystem: "Guild System",
        pvpSystem: "PvP System",
        questSystem: "Quest System",
      },
      rules: {
        noHacking: "No Hacking",
        noInsulting: "No Insulting",
        noSpamming: "No Spamming",
        noMultiClient: "No Multi Client",
        noExploiting: "No Exploiting Bugs",
        respectGMs: "Respect GMs",
        reportBugs: "Report Bugs",
        accountSharing: "No Account Sharing",
        itemSelling: "No Selling Items for Real Money",
        penalties: "Penalties",
      },
    },
    account: {
      lastLogin: "Last Login",
      characters: "Characters",
      settings: "Settings",
      signOut: "Sign Out",
      myCharacters: "My Characters",
      accountSettings: "Account Settings",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      level: "Level",
      resets: "Resets",
      masterLevel: "Master Level",
      reset: "Reset",
      addStats: "Add Stats",
      pkClear: "Clear PK",
      resetStats: "Reset Stats",
      stats: "Stats",
      strength: "Strength",
      agility: "Agility",
      vitality: "Vitality",
      energy: "Energy",
      addStatsFor: "Add Stats for",
      availablePoints: "Available Points",
      pointsToAdd: "Points to Add",
      cancel: "Cancel",
      saveChanges: "Save Changes",
      resetCharacter: "Reset Character",
      resetConfirmation: "Are you sure you want to reset your character?",
      resetRequirements: "Requirements to Reset",
      levelRequirement: "Level Requirement",
      zenRequirement: "Zen Requirement",
      itemsLost: "Items Lost",
      confirmReset: "Confirm Reset",
      clearPKStatus: "Clear PK Status",
      pkClearConfirmation: "Are you sure you want to clear your PK status?",
      pkClearCost: "Cost to Clear PK",
      confirmPKClear: "Confirm Clear PK",
      resetStatsConfirmation: "Are you sure you want to reset your stats?",
      resetStatsCost: "Cost to Reset Stats",
      confirmResetStats: "Confirm Reset Stats",
      passwordChangeSuccess: "Password changed successfully",
      ok: "Ok",
      loading: "Loading...",
    },
    vips: {
      title: "VIP",
      subtitle: "Exclusive benefits for VIP players",
      choosePlan: "Choose your Plan",
      mostPopular: "Most Popular",
      buyNow: "Buy Now",
      paymentMethods: "Payment Methods",
      benefits: {
        exp: {
          title: "Experience",
          description: "Increase the experience gained in the game.",
        },
        drop: {
          title: "Drop",
          description: "Increase the probability of obtaining items.",
        },
        items: {
          title: "Items",
          description: "Get exclusive items.",
        },
        events: {
          title: "Events",
          description: "Participate in exclusive events.",
        },
      },
      bronze: {
        name: "Bronze",
        duration: "30 Days",
        feature1: "+50% Experience",
        feature2: "+25% Drop",
        feature3: "Access to VIP Events",
        feature4: "Priority Support",
      },
      silver: {
        name: "Silver",
        duration: "60 Days",
        feature1: "+75% Experience",
        feature2: "+50% Drop",
        feature3: "Access to VIP Events",
        feature4: "Exclusive Items",
        feature5: "Priority Support",
      },
      gold: {
        name: "Gold",
        duration: "90 Days",
        feature1: "+100% Experience",
        feature2: "+75% Drop",
        feature3: "Access to VIP Events",
        feature4: "Exclusive Items",
        feature5: "Priority Support",
        feature6: "Monthly Gifts",
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What is VIP?",
        a1: "VIP is a system of exclusive benefits for players who support the server.",
        q2: "How do I become VIP?",
        a2: "You can become VIP by purchasing a plan on the donation page.",
        q3: "What benefits do I get from being VIP?",
        a3: "You get benefits such as increased experience, drop, access to exclusive events and more.",
        q4: "How do I use my VIP benefits?",
        a4: "VIP benefits are automatically activated when you purchase a plan.",
      },
      payment: {
        paypal: "PayPal",
        creditCard: "Credit Card",
        crypto: "Cryptocurrencies",
      },
    },
    social: {
      title: "Social",
      subtitle: "Join our community!",
      followUs: "Follow us on our social networks",
      discordFeature: {
        title: "Discord",
        description: "Join our Discord server to stay up to date with the latest news and events.",
        feature1: "News and Announcements",
        feature2: "Technical Support",
        feature3: "Active Community",
        joinNow: "Join Now",
      },
      community: {
        title: "Community",
        events: {
          title: "Events",
          description: "Participate in events and win prizes.",
        },
        content: {
          title: "Content",
          description: "Share your content with the community.",
        },
        global: {
          title: "Global",
          description: "Chat with players from all over the world.",
        },
      },
      discord: {
        description: "Join our Discord server.",
        join: "Join",
      },
      facebook: {
        description: "Follow us on Facebook.",
        follow: "Follow",
      },
      instagram: {
        description: "Follow us on Instagram.",
        follow: "Follow",
      },
      twitter: {
        description: "Follow us on Twitter.",
        follow: "Follow",
      },
      youtube: {
        description: "Subscribe to our YouTube channel.",
        subscribe: "Subscribe",
      },
      twitch: {
        description: "Follow us on Twitch.",
        follow: "Follow",
      },
      guidelines: {
        title: "Community Guidelines",
        description: "Follow these guidelines to maintain a healthy community.",
        rule1: "Be respectful to others.",
        rule2: "Do not spam.",
        rule3: "Do not post inappropriate content.",
        rule4: "Do not advertise other servers.",
        rule5: "Follow the instructions of the administrators.",
      },
    },
    support: {
      title: "Support",
      subtitle: "Need help?",
      categories: {
        title: "Categories",
        bugs: "Report Bugs",
        bugsDesc: "Report any bugs you find in the game.",
        account: "Account Issues",
        accountDesc: "Problems with your account.",
        report: "Report Player",
        reportDesc: "Report a player who is violating the rules.",
        suggestions: "Suggestions",
        suggestionsDesc: "Send your suggestions to improve the server.",
      },
      response: {
        title: "Response Time",
        description: "Our support team will respond to your request as soon as possible.",
        time: "Estimated response time: 24-48 hours",
      },
      form: {
        title: "Support Form",
        name: "Name",
        email: "Email",
        subject: "Subject",
        category: "Category",
        selectCategory: "Select Category",
        description: "Description",
        descriptionPlaceholder: "Describe your problem in detail",
        attachments: "Attachments",
        attachmentsHelp: "Attach screenshots or relevant files",
        submit: "Submit",
        success: {
          title: "Request Sent!",
          message: "Your request has been sent successfully. You will receive a response shortly.",
          newTicket: "Create New Ticket",
        },
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is invalid",
          subjectRequired: "Subject is required",
          categoryRequired: "Category is required",
          descriptionRequired: "Description is required",
          descriptionLength: "Description must be at least 10 characters",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How do I report a bug?",
        a1: "You can report a bug through the support form.",
        q2: "How do I recover my account?",
        a2: "You can recover your account through the support form.",
        q3: "How do I report a player?",
        a3: "You can report a player through the support form.",
        q4: "How do I make a suggestion?",
        a4: "You can make a suggestion through the support form.",
      },
    },
    donation: {
      title: "Donation",
      subtitle: "Support the server and get rewards",
      categories: {
        vip: "VIP",
        coins: "Coins",
        donation: "Donation",
      },
      popular: "Popular",
      bestValue: "Best Value",
      buyNow: "Buy Now",
      donate: "Donate",
      custom: "Custom Amount",
      thankYou: {
        title: "Thank you for your Donation!",
        message: "Your donation has been received successfully. Thank you for supporting the server!",
        close: "Close",
      },
      vip: {
        bronze: {
          name: "Bronze",
          duration: "30 Days",
          benefit1: "+50% Experience",
          benefit2: "+25% Drop",
          benefit3: "Access to VIP Events",
        },
        silver: {
          name: "Silver",
          duration: "60 Days",
          benefit1: "+75% Experience",
          benefit2: "+50% Drop",
          benefit3: "Access to VIP Events",
          benefit4: "Exclusive Items",
        },
        gold: {
          name: "Gold",
          duration: "90 Days",
          benefit1: "+100% Experience",
          benefit2: "+75% Drop",
          benefit3: "Access to VIP Events",
          benefit4: "Exclusive Items",
          benefit5: "Monthly Gifts",
        },
      },
      vipInfo: {
        title: "VIP Information",
        description: "Learn how to use your VIP benefits.",
        howToUse: "How to Use",
        step1: "Log in to your account.",
        step2: "Go to your account page.",
        step3: "Activate your VIP benefits.",
        notes: "Notes",
        note1: "VIP benefits are automatically activated when you purchase a plan.",
        note2: "VIP benefits are valid for the duration of your plan.",
        note3: "You can renew your VIP plan at any time.",
      },
      coins: {
        small: {
          name: "Small",
        },
        medium: {
          name: "Medium",
        },
        large: {
          name: "Large",
        },
        xlarge: {
          name: "Extra Large",
        },
      },
      coinsInfo: {
        title: "Coins Information",
        description: "Learn how to use your Coins.",
        whatCanBuy: "What can you buy with Coins?",
        item1: "Exclusive Items",
        item2: "Premium Services",
        item3: "Special Events",
        item4: "More...",
        howToUse: "How to Use",
        step1: "Log in to your account.",
        step2: "Go to the Coins store.",
        step3: "Buy the items you want.",
      },
      donationInfo: {
        title: "Donation Information",
        description: "Learn how your donation helps the server.",
        customAmount: "Custom Amount",
        whereGoes: "Where does your donation go?",
        serverCosts: {
          title: "Server Costs",
          description: "Your donation helps cover the costs of the server.",
        },
        development: {
          title: "Development",
          description: "Your donation helps fund the development of the server.",
        },
        community: {
          title: "Community",
          description: "Your donation helps support the community.",
        },
      },
      paymentMethods: {
        title: "Payment Methods",
        creditCard: {
          title: "Credit Card",
          description: "Pay with your credit card.",
        },
        paypal: {
          title: "PayPal",
          description: "Pay with PayPal.",
        },
        crypto: {
          title: "Cryptocurrencies",
          description: "Pay with cryptocurrencies.",
        },
      },
    },
    login: {
      title: "Login",
      username: "Username",
      password: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginButton: "Login",
      loggingIn: "Logging in...",
      noAccount: "Don't have an account?",
      register: "Register",
      errors: {
        usernameRequired: "Username is required",
        passwordRequired: "Password is required",
        invalidCredentials: "Invalid username or password",
        serverError: "Server error, please try again later",
      },
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationStrings
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

