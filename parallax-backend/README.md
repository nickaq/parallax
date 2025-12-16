# Parallax Backend

Spring Boot REST API backend for Parallax Demo.

## Quick Start

```bash
cd parallax-backend
./mvnw spring-boot:run
```

Server runs on http://localhost:8080

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List messages

### Config
- `GET /api/config/presets` - Get all presets
- `GET /api/config/presets/{name}` - Get preset
- `POST /api/config/presets` - Create preset

### Analytics
- `POST /api/analytics/pageview` - Track page view
- `POST /api/analytics/interaction` - Track interaction
- `GET /api/analytics/stats` - Get stats

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe
- `DELETE /api/newsletter/unsubscribe?email=` - Unsubscribe

## H2 Console

http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:parallaxdb`
- User: `sa`
