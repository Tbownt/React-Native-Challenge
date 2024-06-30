# Challenge React Native Expo

Este proyecto fue realizado como prueba técnica para una empresa enfocada en Blockchain y Crypto. En esta oportunidad, se requieren 4 pantallas:

1. Inicio con dos inputs para manejar el concepto del pago, el cual sería cambiar de Crypto a Fiat en una pasarela de pago de la empresa.
2. Una página para compartir el enlace de la pasarela por múltiples medios, ya sea WhatsApp, Correo, Código QR o cualquier otra App.
3. Una página para mostrar el QR.
4. Un Modal que se queda escuchando un WebSocket sobre el actual pago.

# Desafios del Challenge

Básicamente, en las últimas dos pantallas de compartir se requiere que la aplicación se quede escuchando por cambios en el pago. Dependiendo de la respuesta del WebSocket, va a actualizar los campos y volver al inicio. En el caso de que el monto sea incorrecto, vuelve al inicio a crear otro pago; en caso de que el monto sea insuficiente, lo hace saber y espera por cambios en el pago.

# Tecnologías utilizadas

Decidí que la mejor opción para esta aplicación sería el manejador de estado de Redux Toolkit, debido a su facilidad al manejar el estado y la eficiencia de las peticiones. También utilicé varios módulos de Expo y React Native como el Toast para ambos dispositivos, tanto Android como iOS, y React Navigation para el manejo de rutas.
