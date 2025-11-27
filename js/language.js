// Language switcher with geolocation auto-detection
const translations = {
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_categories: "Categorías",
        nav_health_guide: "Guía de Salud",
        nav_products: "Productos",
        nav_business: "Oportunidad de Negocio",
        nav_contact: "Contacto",
        
        // Hero Section
        hero_title: "PRODUCTOS CONFIABLES Y FUNCIONALES",
        hero_subtitle: "Tenemos los mejores suplementos con extractos naturales, vitaminas y minerales, supervisados por nuestro consejo de más de 300 médicos especialistas. Contamos con más de 70,000 historias de éxito y testimonios que demuestran que nuestros productos tienen notables resultados en su bienestar general.",
        hero_nano: "Utilizamos nanotecnología avanzada desarrollada por VitalHealth, que permite una absorción máxima de los ingredientes activos, haciendo que los nutrientes sean más biodisponibles y efectivos en tu organismo.",
        hero_wellness_title: "Nos preocupamos por apoyar los diferentes objetivos de bienestar",
        hero_wellness_1: "Desintoxicar - Tu cuerpo",
        hero_wellness_2: "Restaurar - Tu vitalidad",
        hero_wellness_3: "Nutrir - A ti y a tu familia",
        hero_wellness_4: "Despertar - Tu energía",
        hero_wellness_5: "Desarrollar - Integral y físicamente a los niños",
        
        // Categories
        categories_title: "Categorías de Productos",
        category_detox: "DESINTOXICA",
        category_restore: "RESTAURA",
        category_nourish: "NUTRE",
        category_awaken: "DESPIERTA",
        category_develop: "DESARROLLO",
        view_category: "Ver Categoría",
        
        // Detox Category
        detox_title: "DESINTOXICA",
        detox_subtitle: "Posibles beneficios de los ingredientes:",
        detox_benefit_1: "Disminuyen la retención de líquidos.",
        detox_benefit_2: "Previenen infecciones en las vías urinarias.",
        detox_benefit_3: "Detox en riñón.",
        detox_benefit_4: "Limpian vías biliares.",
        detox_benefit_5: "Detox hepático.",
        detox_benefit_6: "Promueven la producción de insulina.",
        detox_benefit_7: "Apoyan la regulación de azúcares en sangre.",
        detox_benefit_8: "Ayudan a eliminar toxinas en tu cuerpo.",
        detox_benefit_9: "Favorecen la pérdida de peso y un mejor manejo del mismo.",
        detox_benefit_10: "Ayudan a limpiar de forma suave tus órganos internos.",
        
        // Restore Category
        restore_title: "RESTAURA",
        restore_subtitle: "Posibles beneficios de los ingredientes:",
        restore_benefit_1: "Promueve la reparación de la flora intestinal.",
        restore_benefit_2: "Reducen la distensión abdominal.",
        restore_benefit_3: "Disminuyen problemas cognitivos y neuronales.",
        restore_benefit_4: "Apoyan el flujo sanguíneo.",
        restore_benefit_5: "Promueven la salud del corazón.",
        restore_benefit_6: "En la retención de líquidos.",
        restore_benefit_7: "Apoyan en lesiones.",
        restore_benefit_8: "Apoyan en dolor e inflamación.",
        restore_benefit_9: "Apoyan en artritis.",
        restore_benefit_10: "En padecimientos crónicos promovidos por la inflamación articular.",
        restore_benefit_11: "Apoyan el fortalecimiento de las neuronas, la capacidad cognitiva.",
        restore_benefit_12: "Disminuyen el riesgo de desarrollar arritmias.",
        restore_benefit_13: "Mantienen los niveles de colesterol, triglicéridos y azúcar en la sangre.",
        
        // Nourish Category
        nourish_title: "NUTRE",
        nourish_subtitle: "Posibles beneficios de los ingredientes:",
        nourish_benefit_1: "Mejoran la salud cardiovascular.",
        nourish_benefit_2: "Proporcionan mayor energía y rendimiento físico.",
        nourish_benefit_3: "Fortalecen el sistema inmunológico.",
        nourish_benefit_4: "Mejoran la salud sexual.",
        nourish_benefit_5: "En la regeneración de células.",
        nourish_benefit_6: "Regulan la presión arterial.",
        nourish_benefit_7: "Promueven la energía natural.",
        nourish_benefit_8: "Mejoran el estado de ánimo.",
        nourish_benefit_9: "Apoyan la pérdida de peso.",
        nourish_benefit_10: "Favorecen un mejor rendimiento cognitivo.",
        nourish_benefit_11: "Proporcionan altos niveles de antioxidantes.",
        nourish_benefit_12: "Mejoran la función cognitiva.",
        nourish_benefit_13: "Fortalecen el sistema inmunológico.",
        
        // Awaken Category
        awaken_title: "DESPIERTA",
        awaken_subtitle: "UN CAFÉ CON PROPÓSITO",
        awaken_benefits: "Posibles beneficios de los ingredientes:",
        awaken_benefit_1: "Aceleran el metabolismo.",
        awaken_benefit_2: "Facilitan la pérdida de peso.",
        awaken_benefit_3: "Apoyan en el control de apetito.",
        awaken_benefit_4: "Mejoran la fatiga física y mental.",
        awaken_benefit_5: "Aumentan el deseo sexual y la libido.",
        awaken_benefit_6: "Apoyan en la disminución de la fatiga e inflamación.",
        awaken_benefit_7: "En la regulación del ciclo menstrual.",
        awaken_benefit_8: "Promueven un metabolismo saludable.",
        awaken_benefit_9: "Fomentan un estado de concentración y determinación.",
        awaken_benefit_10: "Mejoran la claridad mental y la tranquilidad.",
        awaken_benefit_11: "Pueden proporcionar efectos antiestrés.",
        
        // Develop Category
        develop_title: "DESARROLLO",
        develop_subtitle: "¡Cuida el desarrollo de tus pequeños con productos diseñados especialmente para ellos!",
        develop_description: "En Vital Health, entendemos la importancia de brindarles lo mejor a tus hijos. Nuestros productos están formulados para acompañarlos en cada etapa de su crecimiento, apoyando su desarrollo cognitivo, su sistema inmunológico y su bienestar integral.",
        develop_benefits: "Beneficios destacados:",
        develop_benefit_1: "Mejora de la digestión y equilibrio de la flora intestinal.",
        develop_benefit_2: "Impulso al aprendizaje y retención de información.",
        develop_benefit_3: "Fortalecimiento del sistema inmunológico, ayudando a prevenir enfermedades.",
        develop_benefit_4: "Protección antioxidante para cuidar sus células cerebrales y combatir el daño oxidativo.",
        develop_benefit_5: "Apoyo para un neurodesarrollo saludable y prevención de enfermedades neurodegenerativas.",
        develop_benefit_6: "Dales las herramientas necesarias para enfrentar los retos del día a día con salud integral.",
        develop_tagline: "¡Un cuerpo y mente saludables son el mejor regalo para su futuro!",
        
        // Quantum Analyzer
        quantum_title: "NUEVO",
        quantum_name: "Analizador Cuántico Bio Eléctrico",
        quantum_description: "El analizador cuántico identifica hasta 45 funciones vitales del cuerpo humano y recomienda nuestros productos para mejorar la salud de nuestros afiliados.",
        quantum_feature: "¡Ahora digital con oxímetro y frecuencia de pulso!",
        quantum_button: "Ver en la Tienda",
        
        // VitalHealth Characteristics
        char_title: "PRODUCTOS VITALHEALTH",
        char_nano_title: "Nanotecnología",
        char_nano_desc: "Ingrediente activo más pequeño para una máxima absorción.",
        char_adapt_title: "Adaptógenos",
        char_adapt_desc: "Nutrientes que adaptan su funcionalidad a las necesidades del cuerpo.",
        char_price_title: "Precios Bajos",
        char_price_desc: "Ingredientes de clase mundial a un precio accesible para todos.",
        
        // Health Advice
        advice_title: "¿Por qué consumir nuestros productos?",
        advice_description: "Un estudio de la OMS realizado en 1998, demuestra que 8 de cada 10 personas en países industrializados mueren por enfermedades y no por llegar a edad adulta. <strong>63% De estas muertes pueden ser prevenidas</strong> con la información correcta, un mejor estilo de vida y el consumo de nutrientes.",
        advice_manual_text: 'En el siguiente enlace podrás descargar un <span style="color: var(--accent-green); font-weight: 600;">Manual de apoyo para diferentes condiciones de salud</span>.',
        advice_statistic: "63%",
        advice_stat_desc: "De estas muertes pueden ser prevenidas con la información correcta, un mejor estilo de vida y el consumo de nutrientes.",
        advice_button: "Guía de Tratamientos",
        
        // Business Opportunity
        business_title: "Únete a la Familia ACTIVATE",
        business_subtitle: "No solo puedes comprar nuestros productos, también puedes afiliarte y generar ingresos",
        business_benefits_title: "Beneficios de trabajar con nosotros:",
        business_benefit_1: "Productos confiables y funcionales",
        business_benefit_2: "Apoyar los diferentes objetivos de bienestar",
        business_benefit_3: "Promover hábitos saludables",
        business_benefit_4: "Ser parte de los distribuidores",
        business_benefit_5: "Capacitaciones continuas y material didáctico",
        business_benefit_6: "Comunidad y propósito",
        business_benefit_7: "Acceso preferencial",
        business_benefit_8: "Flexibilidad total",
        business_benefit_9: "Diferentes maneras de generar dinero",
        business_benefit_10: "Ser parte de los pioneros de esta industria",
        business_button: "Más Información",
        
        // Anairis Section
        anairis_title: "Conoce a Nuestra Líder",
        anairis_name: "Anairis Morales Florez",
        anairis_role: "Creadora de la marca ACTIVATE",
        anairis_intro: "Si buscas un liderazgo comprobado y consejos que funcionan, únete a mi equipo ACTIVATE y te mostraremos los resultados que transforman. Soy una mujer empoderada con más de 15 años de experiencia y lecciones aprendidas que te llevarán de la mano a buscar tu proceso de transformación. Te mostraré el camino para encontrar la fuerza dentro de ti, y como a través del ejemplo y de nuestro plan de compensación, alcanzarás tu visión y la convertirás en la autoridad de tu propio negocio y destino.",
        
        // Contact
        contact_title: "Contáctanos",
        contact_name: "Nombre completo",
        contact_email: "Correo electrónico",
        contact_phone: "Teléfono",
        contact_message: "Mensaje",
        contact_submit: "Enviar Mensaje",
        
        // Footer
        footer_about: "Acerca de ACTIVATE",
        footer_about_text: "ACTIVATE es tu marca de confianza para productos de salud y bienestar de VitalHealth. Comprometidos con tu transformación integral.",
        footer_links: "Enlaces Rápidos",
        footer_categories: "Categorías",
        footer_business: "Oportunidad de Negocio",
        footer_health_guide: "Guía de Salud",
        footer_terms: "Términos y Condiciones",
        footer_privacy: "Política de Privacidad",
        footer_contact_title: "Contacto",
        footer_rights: "© 2025 ACTIVATE. Todos los derechos reservados.",
        footer_disclaimer: "Los productos no están destinados a diagnosticar o curar ninguna enfermedad, solo ayudar a prevenirlas.",
        
        // General
        learn_more: "Conocer Más",
        view_products: "Ver Productos",
        buy_now: "Comprar Ahora",
        view_store: "Ver en la Tienda",
        disclaimer: "*Estas afirmaciones no han sido evaluadas por la Administración de Alimentos y Medicamentos (FDA, por sus siglas en inglés). Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.",
        
        // Category Pages - Restore
        restore_page_title: "RESTAURA",
        restore_page_subtitle: "Recupera tu vitalidad y fortalece tu salud desde adentro",
        restore_prod1_desc: "Reparación de la flora intestinal",
        restore_prod2_desc: "Salud cardiovascular y flujo sanguíneo",
        restore_prod3_desc: "Función cognitiva y salud del corazón",
        restore_prod4_desc: "Antiinflamatorio natural",
        
        // Category Pages - Nourish
        nourish_page_title: "NUTRE",
        nourish_page_subtitle: "Alimenta tu cuerpo con los nutrientes esenciales",
        nourish_prod1_desc: "Proteína y nutrición completa",
        nourish_prod2_desc: "Energía y rendimiento físico",
        nourish_prod3_desc: "Regeneración celular y salud de la piel",
        
        // Category Pages - Awaken
        awaken_page_title: "DESPIERTA",
        awaken_page_subtitle: "Un café con propósito - Energía natural y concentración",
        awaken_prod1_desc: "Café para la concentración y enfoque mental",
        awaken_prod2_desc: "Café para el bienestar emocional y energía",
        awaken_prod3_desc: "Control de apetito y metabolismo",
        
        // Category Pages - Develop
        develop_page_title: "DESARROLLO",
        develop_page_subtitle: "Cuida el desarrollo integral de tus pequeños",
        develop_prod1_desc: "Batido nutricional para el desarrollo cognitivo",
        develop_prod2_desc: "Probióticos para la salud digestiva infantil",
        develop_prod3_desc: "Fortalecimiento del sistema inmunológico",
        
        // Category Descriptions
        category_detox_desc: "Elimina toxinas y purifica tu organismo",
        category_restore_desc: "Recupera tu vitalidad y fortalece tu salud",
        category_nourish_desc: "Alimenta tu cuerpo con nutrientes esenciales",
        category_awaken_desc: "Energía natural y enfoque mental",
        category_develop_desc: "Cuidado integral para el desarrollo infantil",
        
        // Detox Products
        detox_prod1: "- Limpieza profunda de órganos vitales",
        detox_prod2: "- Infusión natural para eliminar toxinas",
        detox_prod3: "- Apoya el equilibrio de glucosa en sangre",
        detox_prod4: "- Regula el sistema digestivo y metabólico",
        detox_prod5: "- Detox celular con efecto revitalizante",
        
        // Restore Products  
        restore_prod1: "- Regeneración hepática y soporte antioxidante",
        restore_prod2: "- Alivio natural de dolores articulares",
        restore_prod3: "- Potente antioxidante para defensa celular",
        restore_prod4: "- Protección contra el estrés oxidativo",
        restore_prod5: "- Reequilibrio intestinal con probióticos",
        restore_prod6: "- Apoyo a la salud cardiovascular",
        restore_prod7: "- Ácidos grasos esenciales para cerebro y corazón",
        restore_prod8: "- Fortalece articulaciones y tejido conectivo",
        restore_prod9: "- Antiinflamatorio natural con cúrcuma",
        restore_prod10: "- Equilibrio hormonal y metabólico",
        restore_prod11: "- Estímulo integral para energía y recuperación",
        
        // Nourish Products
        nourish_prod1: "- Proteína vegetal para masa muscular",
        nourish_prod2: "- Energía sostenida para el día a día",
        nourish_prod3: "- Activador físico con óxido nítrico",
        nourish_prod4: "- Multivitamínico completo para uso diario",
        nourish_prod5: "- Colágeno hidrolizado para piel y articulaciones",
        nourish_prod6: "- Aislado de proteína de soya, ideal para batidos",
        
        // Awaken Products
        awaken_prod1: "- Café termogénico para quemar grasa",
        awaken_prod2: "- Café funcional con toque afrodisíaco",
        awaken_prod3: "- Café con nootrópicos para enfoque mental",
        awaken_prod4: "- Café cetogénico para energía prolongada",
        awaken_prod5: "- Apoyo a la cetosis con sales BHB",
        awaken_prod6: "- Latte funcional con 10 hongos adaptógenos",
        
        // Develop Products
        develop_prod1: "- Batido para rendimiento cognitivo",
        develop_prod2: "- Refuerzo inmunológico de alta potencia",
        develop_prod3: "- Probióticos inteligentes para salud integral",
        
        // View Products Button
        view_products: "Ver Productos en la Tienda",
        
        // Testimonials Section
        testimonials_title: "Lo Que Dicen Nuestros Clientes",
        testimonials_subtitle: "Historias reales de transformación y éxito",
        
        testimonial_1_text: '"El V-FORTYFLORA cambió mi vida. Ya no tengo molestias estomacales y me siento con más energía cada día."',
        testimonial_1_name: "María González",
        testimonial_1_location: "Miami, FL",
        
        testimonial_2_text: '"Unirme al equipo ACTIVATE fue la mejor decisión. En 6 meses logré la libertad financiera que buscaba."',
        testimonial_2_name: "Carlos Ramírez",
        testimonial_2_location: "Houston, TX",
        
        testimonial_3_text: '"El NEUROKAFE me ayuda a mantener concentración todo el día. Los resultados con CURCUMAX son increíbles."',
        testimonial_3_name: "Ana Patricia Díaz",
        testimonial_3_location: "Los Angeles, CA",
        
        testimonial_4_text: '"GENIUS SHAKE le encanta a mis hijos. Ahora trabajo desde casa y paso más tiempo con mi familia."',
        testimonial_4_name: "Luisa Fernández",
        testimonial_4_location: "Orlando, FL",
        
        testimonial_5_text: '"VITALPRO y V-NRGY transformaron mi ejercicio. Mejor resistencia y recuperación muscular."',
        testimonial_5_name: "Roberto Méndez",
        testimonial_5_location: "San Antonio, TX",
        
        testimonial_6_text: '"Con V-ITARLY bajé 15 kilos en 4 meses. ¡Productos que funcionan y una comunidad increíble!"',
        testimonial_6_name: "Sandra Morales",
        testimonial_6_location: "Phoenix, AZ",
        
        // International Shipping
        shipping_title: "Envíos Internacionales desde:",
        shipping_to: "a:",
        
        // Contact Section
        contact_email_text: "info@activate.com",
        contact_whatsapp_text: "+1 (555) 987-6543",
        
        // WhatsApp Button
        whatsapp_message: "Deseo obtener mas información",
        
        // Business Opportunity Page
        business_page_title: "¿Por qué ser parte de VitalHealth con el equipo ACTIVATE?",
        business_page_subtitle: "Transforma tu vida y genera ingresos con propósito",
        business_benefit_1_title: "Productos Confiables y Funcionales",
        business_benefit_1_text: "Tenemos los mejores suplementos con extractos naturales, vitaminas y minerales, supervisados por nuestro consejo de más de 300 médicos especialistas. Contamos con más de 70,000 historias de éxito y testimonios que demuestran que nuestros productos tienen notables resultados en su bienestar general.",
        business_benefit_2_title: "Apoyar los Diferentes Objetivos de Bienestar",
        business_benefit_2_text: "Nos preocupamos por apoyar las diferentes necesidades de salud:",
        business_benefit_2_li1: "Desintoxicar",
        business_benefit_2_li2: "Restaurar",
        business_benefit_2_li3: "Nutrir",
        business_benefit_2_li4: "Despertar",
        business_benefit_2_li5: "Y el desarrollo integral y físico de los más consentidos de la casa, los niños",
        business_benefit_3_title: "Promover Hábitos Saludables",
        business_benefit_3_text: "Recordando siempre que nuestros productos no sustituyen un tratamiento médico, pero que sí son de gran aporte nutricional para el bienestar general. Te convertirás en un embajador de la salud y el bienestar en tu comunidad.",
        business_benefit_4_title: "Representar una Marca Confiable",
        business_benefit_4_text: "Si representas la marca como distribuidor de VitalHealth, representas una marca confiable que está en expansión con presencia internacional de productos de alta calidad, respaldo y nutrición avanzada y con los permisos oficiales necesarios para su comercialización.",
        business_benefit_5_title: "Capacitación Continua y Apoyo",
        business_benefit_5_text: "Ofrecemos todo el material de apoyo para conocer los beneficios de nuestros productos, ingredientes y su modo de uso. Además tendremos capacitaciones semanales constantes de nutrición, bienestar y liderazgo, como eventos, charlas, entrenamientos y viajes.",
        business_benefit_6_title: "Plan de Compensación en Red",
        business_benefit_6_text: "Tendrás acceso a un plan de compensación en Red, que te permitirá generar ingresos adicionales por recomendar nuevos distribuidores. Forma parte de un grupo de personas que comparten tu misma visión, y que su enfoque no es sólo en la parte comercial, sino humana y educativa.",
        business_benefit_7_title: "Acceso Preferencial",
        business_benefit_7_text: "Como distribuidor o cliente, tendrás acceso preferencial a productos y descuentos. Prueba nuevos lanzamientos antes de que el producto salga a la venta pública. Tendrás el material digital y las herramientas de trabajo de ventas que necesitas.",
        business_benefit_8_title: "Flexibilidad Total",
        business_benefit_8_text: "No tendrás un JEFE, serás dueño de tu tiempo. Tendrás ingresos adicionales y el apoyo continuo de una comunidad, ya sea que hagas el negocio como un ingreso adicional o como tu proyecto principal. Trabaja desde donde quieras, cuando quieras.",
        business_benefit_9_title: "Múltiples Maneras de Generar Dinero",
        business_benefit_9_text: "Disfrutarás de las más de 12 maneras de ganar dinero con la compañía que no sólo es vender producto, sino también hacer el negocio con un enfoque residual, donde tus ganancias perduren en el tiempo. Construye un ingreso pasivo real.",
        business_benefit_10_title: "Ser Parte de los Pioneros",
        business_benefit_10_text: "Con tres años en el mercado, tendrás la oportunidad de ser pionero de esta industria, y formar parte de los primeros diamantes de la Red. Aprovecha el momento de crecimiento explosivo de la empresa.",
        business_leader_name: "ANAIRIS MORALES FLOREZ",
        business_leader_role: "Creadora de la marca ACTIVATE",
        business_leader_p1: "Si buscas un liderazgo probado, consejos que funcionan, aquí estoy. Mi nombre es ANAIRIS MORALES Y JUNTO A MI EQUIPO ACTIVATE te mostraremos los resultados que transforman. Soy una mujer empoderada con más de 15 años de experiencia, lecciones aprendidas que te llevarán de la mano a buscar tu proceso de transformación.",
        business_leader_p2: "Te mostraré el camino para encontrar la fuerza dentro de ti, y como a través del ejemplo y de nuestro plan de compensación, alcanzarás tu visión y la convertirás en la autoridad de tu propio negocio y destino.",
        business_leader_p3: "Soy madre de tres hijos, esposa, ama de casa, y aún así lidero un equipo que no sólo sueña, sino actúa para construir la vida que se merece. Sígueme para recibir la guía, las estrategias y la mentalidad de líder que necesitas para activar tu potencial.",
        business_leader_p4: "Soy una líder que irradia fuerza y que no sólo trazo el camino, sino que te ayuda a recorrerlo con éxito. Si estás listo para transformar tu potencial en resultados medibles, necesitas una guía con experiencia y visión, y esa indudablemente soy yo.",
        business_leader_p5: "El éxito no es suerte, es estrategia, disciplina y guía correcta. Únete a mi comunidad y activa el líder de alto impacto que llevas dentro de ti.",
        business_cta_title: "¿Listo para Activar tu Potencial?",
        business_cta_subtitle: "Contáctanos y comienza tu transformación hoy",
        business_cta_button: "Contáctanos Ahora",
        
        // Health Guide Page
        health_guide_title: "Guía de Tratamientos VitalHealth",
        health_guide_subtitle: "Manual de apoyo para diferentes condiciones de salud",
        health_guide_important: "IMPORTANTE: Consulta con un profesional de la salud antes de comenzar cualquier tratamiento. Estos productos no sustituyen el tratamiento médico.",
        health_guide_section_title: "🌿 Tu Guía de Bienestar VitalHealth",
        health_guide_intro_p1: "En <strong style=\"color: var(--primary-green);\">ACTIVATE</strong>, respaldados por <strong style=\"color: var(--primary-green);\">VITALHEALTH</strong>, nos comprometemos con tu bienestar integral. Entendemos que cada persona tiene necesidades únicas de salud, y es por eso que hemos desarrollado una <strong>guía completa y detallada</strong> para orientarte en el uso adecuado de nuestros productos naturales.",
        health_guide_intro_p2: "Nuestro <strong style=\"color: var(--accent-green);\">MANUAL DE USO PARA APOYO EN PATOLOGÍAS</strong> ha sido cuidadosamente elaborado por expertos en salud y nutrición para proporcionarte información valiosa sobre cómo nuestros suplementos pueden <strong>complementar y apoyar</strong> diversos tratamientos médicos para condiciones específicas.",
        health_guide_what_includes: "📋 ¿Qué incluye este manual?",
        health_guide_includes_1: "<strong>Recomendaciones de uso específicas</strong> para más de 20 condiciones de salud diferentes",
        health_guide_includes_2: "<strong>Dosis sugeridas</strong> y frecuencias de consumo para cada producto",
        health_guide_includes_3: "<strong>Combinaciones de productos</strong> optimizadas para diferentes necesidades de salud",
        health_guide_includes_4: "<strong>Guías de apoyo</strong> para padecimientos como diabetes, hipertensión, colesterol alto, sobrepeso, problemas digestivos, artritis, y muchos más",
        health_guide_warning_title: "⚠️ Importante: Uso Responsable",
        health_guide_warning_p1: "Los productos VitalHealth son <strong>suplementos nutricionales de apoyo</strong> que complementan el tratamiento médico profesional.",
        health_guide_warning_p2: "<strong style=\"color: #d32f2f;\">NO SUSTITUYEN</strong> el diagnóstico, tratamiento o consejo de un profesional de la salud. Son una <strong>herramienta complementaria</strong> diseñada para apoyar tu bienestar en conjunto con la supervisión médica adecuada.",
        health_guide_warning_p3: "Siempre consulta con tu médico o especialista antes de iniciar cualquier régimen de suplementación, especialmente si tienes condiciones médicas preexistentes, estás embarazada, lactando, o tomando medicamentos recetados.",
        health_guide_download_title: "📥 Descarga tu Manual de Apoyo",
        health_guide_download_subtitle: "Obtén acceso completo a todas las recomendaciones y guías de uso",
        health_guide_download_button: "📄 Descargar Manual PDF",
        health_guide_download_note: "Formato PDF • Fácil de consultar • Siempre disponible",
        health_guide_contact_title: "💚 ¿Necesitas Asesoría Personalizada?",
        health_guide_contact_text: "Nuestro equipo de expertos en salud de ACTIVATE está disponible para ayudarte a elegir los productos más adecuados para tus necesidades específicas y responder todas tus preguntas.",
        health_guide_contact_button: "Contáctanos",
        
        // Navigation links
        nav_inicio: "Inicio",
        nav_categorias: "Categorías",
        nav_guia_salud: "Guía de Salud",
        nav_oportunidad: "Oportunidad de Negocio",
        nav_contacto: "Contacto",
        nav_terminos: "Términos y Condiciones",
        nav_privacidad: "Política de Privacidad",
        
        // Terms Page
        terms_page_title: "Términos y Condiciones",
        terms_last_updated: "Última actualización: Octubre 2025",
        terms_section_1_title: "1. Aceptación de los Términos",
        terms_section_1_text: "Al acceder y utilizar el sitio web de ACTIVATE, usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.",
        terms_section_2_title: "2. Distribución de Productos VitalHealth",
        terms_section_2_text: "ACTIVATE es un distribuidor autorizado de productos VitalHealth. Todos los productos ofrecidos en este sitio web son suplementos nutricionales fabricados por VitalHealth y cumplen con las regulaciones aplicables para la venta internacional de suplementos.",
        terms_section_3_title: "3. Productos y Suplementos",
        terms_section_3_intro: "Los productos ofrecidos a través de ACTIVATE son suplementos nutricionales que:",
        terms_section_3_li1: "No están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad",
        terms_section_3_li2: "No sustituyen el consejo, diagnóstico o tratamiento médico profesional",
        terms_section_3_li3: "Deben ser utilizados como parte de un estilo de vida saludable",
        terms_section_3_li4: "Pueden variar en disponibilidad según la región",
        terms_section_4_title: "4. Responsabilidad del Consumidor",
        terms_section_4_intro: "Al adquirir nuestros productos, usted reconoce que:",
        terms_section_4_li1: "Ha consultado con un profesional de la salud antes de usar cualquier suplemento",
        terms_section_4_li2: "Es responsable de verificar si tiene alergias o condiciones que puedan verse afectadas",
        terms_section_4_li3: "Seguirá las instrucciones de uso proporcionadas con cada producto",
        terms_section_4_li4: "No excederá las dosis recomendadas",
        terms_section_5_title: "5. Oportunidad de Negocio",
        terms_section_5_intro: "ACTIVATE ofrece una oportunidad de afiliación para distribuidores independientes. Esta oportunidad:",
        terms_section_5_li1: "No garantiza ingresos específicos",
        terms_section_5_li2: "Requiere esfuerzo personal y dedicación",
        terms_section_5_li3: "Está sujeta a las políticas de VitalHealth para distribuidores",
        terms_section_5_li4: "Puede requerir inversión inicial en productos y materiales",
        terms_notice_title: "Aviso Importante",
        terms_notice_text: "Estas declaraciones no han sido evaluadas por la Administración de Alimentos y Medicamentos (FDA). Los productos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Siempre consulte con un profesional de la salud calificado antes de comenzar cualquier programa de dieta, ejercicio o suplementación.",
        
        // Privacy Page
        privacy_page_title: "Política de Privacidad",
        privacy_last_updated: "Última actualización: Octubre 2025",
        privacy_section_1_title: "1. Introducción",
        privacy_section_1_text: "En ACTIVATE, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.",
        privacy_section_2_title: "2. Información que Recopilamos",
        privacy_section_2_intro: "Podemos recopilar los siguientes tipos de información:",
        privacy_section_2_li1: "<strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono",
        privacy_section_2_li2: "<strong>Información de la cuenta:</strong> Datos necesarios para crear una cuenta de distribuidor",
        privacy_section_2_li3: "<strong>Información de compra:</strong> Historial de pedidos, preferencias de productos",
        privacy_section_2_li4: "<strong>Información técnica:</strong> Dirección IP, tipo de navegador, ubicación geográfica aproximada",
        privacy_section_2_li5: "<strong>Cookies y tecnologías similares:</strong> Datos sobre cómo utiliza nuestro sitio web",
        privacy_notice_title: "Su Privacidad es Importante",
        privacy_notice_text: "En ACTIVATE, nos tomamos muy en serio la protección de sus datos personales. Si tiene alguna pregunta o inquietud sobre cómo manejamos su información, no dude en contactarnos.",
        
        // Footer
        footer_about_title: "Acerca de ACTIVATE",
        footer_about_text: "ACTIVATE es tu marca de confianza para productos de salud y bienestar de VitalHealth.",
        footer_quick_links: "Enlaces Rápidos",
        footer_copyright: "© 2025 ACTIVATE. Todos los derechos reservados."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_categories: "Categories",
        nav_health_guide: "Health Guide",
        nav_products: "Products",
        nav_business: "Business Opportunity",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "RELIABLE AND FUNCTIONAL PRODUCTS",
        hero_subtitle: "We have the best supplements with natural extracts, vitamins and minerals, supervised by our council of more than 300 specialist doctors. We have more than 70,000 success stories and testimonials that demonstrate that our products have notable results in your overall well-being.",
        hero_nano: "We use advanced nanotechnology developed by VitalHealth, which allows maximum absorption of active ingredients, making nutrients more bioavailable and effective in your body.",
        hero_wellness_title: "We care about supporting different wellness goals",
        hero_wellness_1: "Detoxify - Your body",
        hero_wellness_2: "Restore - Your vitality",
        hero_wellness_3: "Nourish - You and your family",
        hero_wellness_4: "Awaken - Your energy",
        hero_wellness_5: "Develop - Children integrally and physically",
        
        // Categories
        categories_title: "Product Categories",
        category_detox: "DETOXIFY",
        category_restore: "RESTORE",
        category_nourish: "NOURISH",
        category_awaken: "AWAKEN",
        category_develop: "DEVELOP",
        view_category: "View Category",
        
        // Detox Category
        detox_title: "DETOXIFY",
        detox_subtitle: "Possible benefits of the ingredients:",
        detox_benefit_1: "Reduce fluid retention.",
        detox_benefit_2: "Prevent urinary tract infections.",
        detox_benefit_3: "Kidney detox.",
        detox_benefit_4: "Cleanse bile ducts.",
        detox_benefit_5: "Liver detox.",
        detox_benefit_6: "Promote insulin production.",
        detox_benefit_7: "Support blood sugar regulation.",
        detox_benefit_8: "Help eliminate toxins from your body.",
        detox_benefit_9: "Favor weight loss and better weight management.",
        detox_benefit_10: "Help gently cleanse your internal organs.",
        
        // Restore Category
        restore_title: "RESTORE",
        restore_subtitle: "Possible benefits of the ingredients:",
        restore_benefit_1: "Promotes intestinal flora repair.",
        restore_benefit_2: "Reduces abdominal distension.",
        restore_benefit_3: "Decreases cognitive and neuronal problems.",
        restore_benefit_4: "Supports blood flow.",
        restore_benefit_5: "Promotes heart health.",
        restore_benefit_6: "For fluid retention.",
        restore_benefit_7: "Supports injuries.",
        restore_benefit_8: "Supports pain and inflammation.",
        restore_benefit_9: "Supports arthritis.",
        restore_benefit_10: "For chronic conditions promoted by joint inflammation.",
        restore_benefit_11: "Support neuron strengthening, cognitive capacity.",
        restore_benefit_12: "Decrease the risk of developing arrhythmias.",
        restore_benefit_13: "Maintain cholesterol, triglyceride and blood sugar levels.",
        
        // Nourish Category
        nourish_title: "NOURISH",
        nourish_subtitle: "Possible benefits of the ingredients:",
        nourish_benefit_1: "Improve cardiovascular health.",
        nourish_benefit_2: "Provide greater energy and physical performance.",
        nourish_benefit_3: "Strengthen the immune system.",
        nourish_benefit_4: "Improve sexual health.",
        nourish_benefit_5: "For cell regeneration.",
        nourish_benefit_6: "Regulate blood pressure.",
        nourish_benefit_7: "Promote natural energy.",
        nourish_benefit_8: "Improve mood.",
        nourish_benefit_9: "Support weight loss.",
        nourish_benefit_10: "Favor better cognitive performance.",
        nourish_benefit_11: "Provide high levels of antioxidants.",
        nourish_benefit_12: "Improve cognitive function.",
        nourish_benefit_13: "Strengthen the immune system.",
        
        // Awaken Category
        awaken_title: "AWAKEN",
        awaken_subtitle: "A COFFEE WITH PURPOSE",
        awaken_benefits: "Possible benefits of the ingredients:",
        awaken_benefit_1: "Accelerate metabolism.",
        awaken_benefit_2: "Facilitate weight loss.",
        awaken_benefit_3: "Support appetite control.",
        awaken_benefit_4: "Improve physical and mental fatigue.",
        awaken_benefit_5: "Increase sexual desire and libido.",
        awaken_benefit_6: "Support the reduction of fatigue and inflammation.",
        awaken_benefit_7: "In menstrual cycle regulation.",
        awaken_benefit_8: "Promote healthy metabolism.",
        awaken_benefit_9: "Encourage a state of concentration and determination.",
        awaken_benefit_10: "Improve mental clarity and tranquility.",
        awaken_benefit_11: "Can provide anti-stress effects.",
        
        // Develop Category
        develop_title: "DEVELOPMENT",
        develop_subtitle: "Take care of your little ones' development with products specially designed for them!",
        develop_description: "At Vital Health, we understand the importance of giving your children the best. Our products are formulated to accompany them at every stage of their growth, supporting their cognitive development, immune system and overall well-being.",
        develop_benefits: "Featured benefits:",
        develop_benefit_1: "Improved digestion and intestinal flora balance.",
        develop_benefit_2: "Boost learning and information retention.",
        develop_benefit_3: "Strengthening the immune system, helping to prevent diseases.",
        develop_benefit_4: "Antioxidant protection to care for their brain cells and combat oxidative damage.",
        develop_benefit_5: "Support for healthy neurodevelopment and prevention of neurodegenerative diseases.",
        develop_benefit_6: "Give them the necessary tools to face daily challenges with comprehensive health.",
        develop_tagline: "A healthy body and mind are the best gift for their future!",
        
        // Quantum Analyzer
        quantum_title: "NEW",
        quantum_name: "Bio Electric Quantum Analyzer",
        quantum_description: "The quantum analyzer identifies up to 45 vital functions of the human body and recommends our products to improve the health of our affiliates.",
        quantum_feature: "Now digital with oximeter and pulse frequency!",
        quantum_button: "View in Store",
        
        // VitalHealth Characteristics
        char_title: "VITALHEALTH PRODUCTS",
        char_nano_title: "Nanotechnology",
        char_nano_desc: "Smallest active ingredient for maximum absorption.",
        char_adapt_title: "Adaptogens",
        char_adapt_desc: "Nutrients that adapt their functionality to the body's needs.",
        char_price_title: "Low Prices",
        char_price_desc: "World-class ingredients at an affordable price for everyone.",
        
        // Health Advice
        advice_title: "Why consume our products?",
        advice_description: "A WHO study conducted in 1998 shows that 8 out of 10 people in industrialized countries die from diseases and not from reaching adulthood. <strong>63% of these deaths can be prevented</strong> with the right information, a better lifestyle, and nutrient consumption.",
        advice_manual_text: 'At the following link you can download a <span style="color: var(--accent-green); font-weight: 600;">Support Manual for different health conditions</span>.',
        advice_statistic: "63%",
        advice_stat_desc: "Of these deaths can be prevented with the right information, a better lifestyle and the consumption of nutrients.",
        advice_button: "Treatment Guide",
        
        // Business Opportunity
        business_title: "Join the ACTIVATE Family",
        business_subtitle: "Not only can you buy our products, you can also affiliate and generate income",
        business_benefits_title: "Benefits of working with us:",
        business_benefit_1: "Reliable and functional products",
        business_benefit_2: "Support different wellness goals",
        business_benefit_3: "Promote healthy habits",
        business_benefit_4: "Be part of the distributors",
        business_benefit_5: "Continuous training and educational material",
        business_benefit_6: "Community and purpose",
        business_benefit_7: "Preferential access",
        business_benefit_8: "Total flexibility",
        business_benefit_9: "Different ways to make money",
        business_benefit_10: "Be part of the pioneers of this industry",
        business_button: "More Information",
        
        // Anairis Section
        anairis_title: "Meet Our Leader",
        anairis_name: "Anairis Morales Florez",
        anairis_role: "Creator of the ACTIVATE brand",
        anairis_intro: "If you are looking for proven leadership and advice that works, join my ACTIVATE team and we will show you the results that transform. I am an empowered woman with more than 15 years of experience and learned lessons that will guide you hand in hand to seek your transformation process. I will show you the way to find the strength within you, and how through example and our compensation plan, you will achieve your vision and turn it into the authority of your own business and destiny.",
        
        // Contact
        contact_title: "Contact Us",
        contact_name: "Full name",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_message: "Message",
        contact_submit: "Send Message",
        
        // Footer
        footer_about: "About ACTIVATE",
        footer_about_text: "ACTIVATE is your trusted brand for VitalHealth health and wellness products. Committed to your comprehensive transformation.",
        footer_links: "Quick Links",
        footer_categories: "Categories",
        footer_business: "Business Opportunity",
        footer_health_guide: "Health Guide",
        footer_terms: "Terms and Conditions",
        footer_privacy: "Privacy Policy",
        footer_contact_title: "Contact",
        footer_rights: "© 2025 ACTIVATE. All rights reserved.",
        footer_disclaimer: "Products are not intended to diagnose or cure any disease, only to help prevent them.",
        
        // General
        learn_more: "Learn More",
        view_products: "View Products",
        buy_now: "Buy Now",
        view_store: "View in Store",
        disclaimer: "*These statements have not been evaluated by the Food and Drug Administration (FDA). This product is not intended to diagnose, treat, cure or prevent any disease.",
        
        // Category Pages - Restore
        restore_page_title: "RESTORE",
        restore_page_subtitle: "Recover your vitality and strengthen your health from within",
        restore_prod1_desc: "Intestinal flora repair",
        restore_prod2_desc: "Cardiovascular health and blood flow",
        restore_prod3_desc: "Cognitive function and heart health",
        restore_prod4_desc: "Natural anti-inflammatory",
        
        // Category Pages - Nourish
        nourish_page_title: "NOURISH",
        nourish_page_subtitle: "Feed your body with essential nutrients",
        nourish_prod1_desc: "Complete protein and nutrition",
        nourish_prod2_desc: "Energy and physical performance",
        nourish_prod3_desc: "Cell regeneration and skin health",
        
        // Category Pages - Awaken
        awaken_page_title: "AWAKEN",
        awaken_page_subtitle: "Coffee with purpose - Natural energy and concentration",
        awaken_prod1_desc: "Coffee for concentration and mental focus",
        awaken_prod2_desc: "Coffee for emotional well-being and energy",
        awaken_prod3_desc: "Appetite control and metabolism",
        
        // Category Pages - Develop
        develop_page_title: "DEVELOPMENT",
        develop_page_subtitle: "Care for your little ones' comprehensive development",
        develop_prod1_desc: "Nutritional shake for cognitive development",
        develop_prod2_desc: "Probiotics for children's digestive health",
        develop_prod3_desc: "Immune system strengthening",
        
        // Category Descriptions
        category_detox_desc: "Eliminate toxins and purify your body",
        category_restore_desc: "Recover your vitality and strengthen your health",
        category_nourish_desc: "Feed your body with essential nutrients",
        category_awaken_desc: "Natural energy and mental focus",
        category_develop_desc: "Comprehensive care for child development",
        
        // Detox Products
        detox_prod1: "- Deep cleansing of vital organs",
        detox_prod2: "- Natural infusion to eliminate toxins",
        detox_prod3: "- Supports blood glucose balance",
        detox_prod4: "- Regulates digestive and metabolic system",
        detox_prod5: "- Cellular detox with revitalizing effect",
        
        // Restore Products
        restore_prod1: "- Liver regeneration and antioxidant support",
        restore_prod2: "- Natural relief from joint pain",
        restore_prod3: "- Powerful antioxidant for cellular defense",
        restore_prod4: "- Protection against oxidative stress",
        restore_prod5: "- Intestinal rebalancing with probiotics",
        restore_prod6: "- Cardiovascular health support",
        restore_prod7: "- Essential fatty acids for brain and heart",
        restore_prod8: "- Strengthens joints and connective tissue",
        restore_prod9: "- Natural anti-inflammatory with turmeric",
        restore_prod10: "- Hormonal and metabolic balance",
        restore_prod11: "- Comprehensive boost for energy and recovery",
        
        // Nourish Products
        nourish_prod1: "- Plant-based protein for muscle mass",
        nourish_prod2: "- Sustained energy for daily use",
        nourish_prod3: "- Physical activator with nitric oxide",
        nourish_prod4: "- Complete multivitamin for daily use",
        nourish_prod5: "- Hydrolyzed collagen for skin and joints",
        nourish_prod6: "- Soy protein isolate, ideal for shakes",
        
        // Awaken Products
        awaken_prod1: "- Thermogenic coffee for fat burning",
        awaken_prod2: "- Functional coffee with aphrodisiac touch",
        awaken_prod3: "- Coffee with nootropics for mental focus",
        awaken_prod4: "- Ketogenic coffee for prolonged energy",
        awaken_prod5: "- Ketosis support with BHB salts",
        awaken_prod6: "- Functional latte with 10 adaptogenic mushrooms",
        
        // Develop Products
        develop_prod1: "- Shake for cognitive performance",
        develop_prod2: "- High-potency immune boost",
        develop_prod3: "- Smart probiotics for comprehensive health",
        
        // View Products Button
        view_products: "View Products in Store",
        
        // Testimonials Section
        testimonials_title: "What Our Clients Say",
        testimonials_subtitle: "Real stories of transformation and success",
        
        testimonial_1_text: '"V-FORTYFLORA changed my life. I no longer have stomach discomfort and feel more energized every day."',
        testimonial_1_name: "María González",
        testimonial_1_location: "Miami, FL",
        
        testimonial_2_text: '"Joining the ACTIVATE team was the best decision. In 6 months I achieved the financial freedom I was looking for."',
        testimonial_2_name: "Carlos Ramírez",
        testimonial_2_location: "Houston, TX",
        
        testimonial_3_text: '"NEUROKAFE helps me maintain concentration all day. The results with CURCUMAX are incredible."',
        testimonial_3_name: "Ana Patricia Díaz",
        testimonial_3_location: "Los Angeles, CA",
        
        testimonial_4_text: '"My kids love GENIUS SHAKE. Now I work from home and spend more time with my family."',
        testimonial_4_name: "Luisa Fernández",
        testimonial_4_location: "Orlando, FL",
        
        testimonial_5_text: '"VITALPRO and V-NRGY transformed my workout. Better endurance and muscle recovery."',
        testimonial_5_name: "Roberto Méndez",
        testimonial_5_location: "San Antonio, TX",
        
        testimonial_6_text: '"With V-ITARLY I lost 15 kilos in 4 months. Products that work and an incredible community!"',
        testimonial_6_name: "Sandra Morales",
        testimonial_6_location: "Phoenix, AZ",
        
        // International Shipping
        shipping_title: "International Shipping from:",
        shipping_to: "to:",
        
        // Contact Section
        contact_email_text: "info@activate.com",
        contact_whatsapp_text: "+1 (555) 987-6543",
        
        // WhatsApp Button
        whatsapp_message: "I would like more information",
        
        // Business Opportunity Page
        business_page_title: "Why be part of VitalHealth with the ACTIVATE team?",
        business_page_subtitle: "Transform your life and generate income with purpose",
        business_benefit_1_title: "Reliable and Functional Products",
        business_benefit_1_text: "We have the best supplements with natural extracts, vitamins and minerals, supervised by our council of more than 300 specialist doctors. We have more than 70,000 success stories and testimonials that demonstrate that our products have notable results in your overall well-being.",
        business_benefit_2_title: "Support Different Wellness Goals",
        business_benefit_2_text: "We care about supporting different health needs:",
        business_benefit_2_li1: "Detoxify",
        business_benefit_2_li2: "Restore",
        business_benefit_2_li3: "Nourish",
        business_benefit_2_li4: "Awaken",
        business_benefit_2_li5: "And the comprehensive and physical development of the most cherished in the house, the children",
        business_benefit_3_title: "Promote Healthy Habits",
        business_benefit_3_text: "Always remembering that our products do not replace medical treatment, but they are of great nutritional support for overall well-being. You will become an ambassador of health and wellness in your community.",
        business_benefit_4_title: "Represent a Reliable Brand",
        business_benefit_4_text: "If you represent the brand as a VitalHealth distributor, you represent a reliable brand that is expanding with an international presence of high-quality products, support and advanced nutrition with the necessary official permits for its commercialization.",
        business_benefit_5_title: "Continuous Training and Support",
        business_benefit_5_text: "We offer all the support material to learn about the benefits of our products, ingredients and how to use them. We will also have constant weekly training on nutrition, wellness and leadership, as well as events, talks, training and travel.",
        business_benefit_6_title: "Network Compensation Plan",
        business_benefit_6_text: "You will have access to a Network compensation plan, which will allow you to generate additional income by recommending new distributors. Be part of a group of people who share your same vision, and whose focus is not only on the commercial part, but human and educational.",
        business_benefit_7_title: "Preferential Access",
        business_benefit_7_text: "As a distributor or customer, you will have preferential access to products and discounts. Try new releases before the product goes on sale to the public. You will have the digital material and sales work tools you need.",
        business_benefit_8_title: "Total Flexibility",
        business_benefit_8_text: "You will not have a BOSS, you will own your time. You will have additional income and continuous support from a community, whether you do the business as an additional income or as your main project. Work from wherever you want, whenever you want.",
        business_benefit_9_title: "Multiple Ways to Generate Money",
        business_benefit_9_text: "You will enjoy more than 12 ways to make money with the company that is not only selling product, but also doing business with a residual approach, where your earnings last over time. Build real passive income.",
        business_benefit_10_title: "Be Part of the Pioneers",
        business_benefit_10_text: "With three years in the market, you will have the opportunity to be a pioneer in this industry, and be part of the first diamonds in the Network. Take advantage of the company's explosive growth moment.",
        business_leader_name: "ANAIRIS MORALES FLOREZ",
        business_leader_role: "Creator of the ACTIVATE brand",
        business_leader_p1: "If you are looking for proven leadership, advice that works, here I am. My name is ANAIRIS MORALES AND TOGETHER WITH MY ACTIVATE TEAM we will show you the results that transform. I am an empowered woman with more than 15 years of experience, learned lessons that will take you by the hand to seek your transformation process.",
        business_leader_p2: "I will show you the way to find the strength within you, and how through example and our compensation plan, you will achieve your vision and turn it into the authority of your own business and destiny.",
        business_leader_p3: "I am a mother of three children, a wife, a housewife, and yet I lead a team that not only dreams, but acts to build the life it deserves. Follow me to receive the guidance, strategies and leader mindset you need to activate your potential.",
        business_leader_p4: "I am a leader who radiates strength and not only traces the path, but helps you walk it successfully. If you are ready to transform your potential into measurable results, you need a guide with experience and vision, and that is undoubtedly me.",
        business_leader_p5: "Success is not luck, it is strategy, discipline and the right guidance. Join my community and activate the high impact leader within you.",
        business_cta_title: "Ready to Activate Your Potential?",
        business_cta_subtitle: "Contact us and start your transformation today",
        business_cta_button: "Contact Us Now",
        
        // Health Guide Page
        health_guide_title: "VitalHealth Treatment Guide",
        health_guide_subtitle: "Support manual for different health conditions",
        health_guide_important: "IMPORTANT: Consult with a health professional before starting any treatment. These products do not substitute medical treatment.",
        health_guide_section_title: "🌿 Your VitalHealth Wellness Guide",
        health_guide_intro_p1: "At <strong style=\"color: var(--primary-green);\">ACTIVATE</strong>, backed by <strong style=\"color: var(--primary-green);\">VITALHEALTH</strong>, we are committed to your comprehensive well-being. We understand that each person has unique health needs, and that is why we have developed a <strong>complete and detailed guide</strong> to guide you in the proper use of our natural products.",
        health_guide_intro_p2: "Our <strong style=\"color: var(--accent-green);\">USAGE MANUAL FOR SUPPORT IN PATHOLOGIES</strong> has been carefully prepared by health and nutrition experts to provide you with valuable information on how our supplements can <strong>complement and support</strong> various medical treatments for specific conditions.",
        health_guide_what_includes: "📋 What does this manual include?",
        health_guide_includes_1: "<strong>Specific usage recommendations</strong> for more than 20 different health conditions",
        health_guide_includes_2: "<strong>Suggested doses</strong> and consumption frequencies for each product",
        health_guide_includes_3: "<strong>Product combinations</strong> optimized for different health needs",
        health_guide_includes_4: "<strong>Support guides</strong> for conditions such as diabetes, hypertension, high cholesterol, overweight, digestive problems, arthritis, and many more",
        health_guide_warning_title: "⚠️ Important: Responsible Use",
        health_guide_warning_p1: "VitalHealth products are <strong>nutritional support supplements</strong> that complement professional medical treatment.",
        health_guide_warning_p2: "<strong style=\"color: #d32f2f;\">THEY DO NOT SUBSTITUTE</strong> the diagnosis, treatment or advice of a health professional. They are a <strong>complementary tool</strong> designed to support your well-being in conjunction with proper medical supervision.",
        health_guide_warning_p3: "Always consult with your doctor or specialist before starting any supplementation regimen, especially if you have pre-existing medical conditions, are pregnant, breastfeeding, or taking prescription medications.",
        health_guide_download_title: "📥 Download Your Support Manual",
        health_guide_download_subtitle: "Get full access to all recommendations and usage guides",
        health_guide_download_button: "📄 Download PDF Manual",
        health_guide_download_note: "PDF Format • Easy to consult • Always available",
        health_guide_contact_title: "💚 Need Personalized Advice?",
        health_guide_contact_text: "Our team of health experts at ACTIVATE is available to help you choose the most suitable products for your specific needs and answer all your questions.",
        health_guide_contact_button: "Contact Us",
        
        // Navigation links
        nav_inicio: "Home",
        nav_categorias: "Categories",
        nav_guia_salud: "Health Guide",
        nav_oportunidad: "Business Opportunity",
        nav_contacto: "Contact",
        nav_terminos: "Terms and Conditions",
        nav_privacidad: "Privacy Policy",
        
        // Terms Page
        terms_page_title: "Terms and Conditions",
        terms_last_updated: "Last updated: October 2025",
        terms_section_1_title: "1. Acceptance of Terms",
        terms_section_1_text: "By accessing and using the ACTIVATE website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.",
        terms_section_2_title: "2. VitalHealth Product Distribution",
        terms_section_2_text: "ACTIVATE is an authorized distributor of VitalHealth products. All products offered on this website are nutritional supplements manufactured by VitalHealth and comply with applicable regulations for the international sale of supplements.",
        terms_section_3_title: "3. Products and Supplements",
        terms_section_3_intro: "Products offered through ACTIVATE are nutritional supplements that:",
        terms_section_3_li1: "Are not intended to diagnose, treat, cure or prevent any disease",
        terms_section_3_li2: "Do not replace professional medical advice, diagnosis or treatment",
        terms_section_3_li3: "Should be used as part of a healthy lifestyle",
        terms_section_3_li4: "May vary in availability by region",
        terms_section_4_title: "4. Consumer Responsibility",
        terms_section_4_intro: "By purchasing our products, you acknowledge that:",
        terms_section_4_li1: "You have consulted with a health professional before using any supplement",
        terms_section_4_li2: "You are responsible for verifying if you have allergies or conditions that may be affected",
        terms_section_4_li3: "You will follow the usage instructions provided with each product",
        terms_section_4_li4: "You will not exceed recommended doses",
        terms_section_5_title: "5. Business Opportunity",
        terms_section_5_intro: "ACTIVATE offers an affiliation opportunity for independent distributors. This opportunity:",
        terms_section_5_li1: "Does not guarantee specific income",
        terms_section_5_li2: "Requires personal effort and dedication",
        terms_section_5_li3: "Is subject to VitalHealth policies for distributors",
        terms_section_5_li4: "May require initial investment in products and materials",
        terms_notice_title: "Important Notice",
        terms_notice_text: "These statements have not been evaluated by the Food and Drug Administration (FDA). The products are not intended to diagnose, treat, cure or prevent any disease. Always consult with a qualified health professional before starting any diet, exercise or supplementation program.",
        
        // Privacy Page
        privacy_page_title: "Privacy Policy",
        privacy_last_updated: "Last updated: October 2025",
        privacy_section_1_title: "1. Introduction",
        privacy_section_1_text: "At ACTIVATE, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect your information when you visit our website or use our services.",
        privacy_section_2_title: "2. Information We Collect",
        privacy_section_2_intro: "We may collect the following types of information:",
        privacy_section_2_li1: "<strong>Contact information:</strong> Name, email address, phone number",
        privacy_section_2_li2: "<strong>Account information:</strong> Data needed to create a distributor account",
        privacy_section_2_li3: "<strong>Purchase information:</strong> Order history, product preferences",
        privacy_section_2_li4: "<strong>Technical information:</strong> IP address, browser type, approximate geographic location",
        privacy_section_2_li5: "<strong>Cookies and similar technologies:</strong> Data about how you use our website",
        privacy_notice_title: "Your Privacy Is Important",
        privacy_notice_text: "At ACTIVATE, we take the protection of your personal data very seriously. If you have any questions or concerns about how we handle your information, please do not hesitate to contact us.",
        
        // Footer
        footer_about_title: "About ACTIVATE",
        footer_about_text: "ACTIVATE is your trusted brand for VitalHealth health and wellness products.",
        footer_quick_links: "Quick Links",
        footer_copyright: "© 2025 ACTIVATE. All rights reserved."
    }
};

// Current language (default: Spanish)
let currentLang = 'es';

// WhatsApp Configuration - CHANGE THIS NUMBER TO YOUR ACTUAL WHATSAPP NUMBER
const WHATSAPP_NUMBER = '1234567890'; // Format: country code + number (no + or spaces)

// Initialize language on page load
function initLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedLang) {
        currentLang = savedLang;
    } else {
        // Try to detect user's location
        detectLanguageByLocation();
    }
    
    setLanguage(currentLang);
}

// Detect language based on browser/location
function detectLanguageByLocation() {
    const userLang = navigator.language || navigator.userLanguage;
    
    // If browser language is English, set to English
    if (userLang.startsWith('en')) {
        currentLang = 'en';
    } else {
        currentLang = 'es';
    }
}

// Set language and update UI
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update elements with HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language selector buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update WhatsApp button link
    updateWhatsAppLink(lang);
}

// Update WhatsApp button with current language message
function updateWhatsAppLink(lang) {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn && translations[lang].whatsapp_message) {
        const message = encodeURIComponent(translations[lang].whatsapp_message);
        whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    }
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLanguage);
