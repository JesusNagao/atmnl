-- ============================================================
-- ATMNL — Full database migration
-- Compatible with any PostgreSQL GUI (TablePlus, DBeaver,
-- pgAdmin, etc.) — no psql meta-commands used.
--
-- Before running, edit the bottom section (Migration 013)
-- and replace the admin email, username, and password hash.
--
-- Generate a bcrypt hash with Node.js:
--   node -e "const b=require('bcrypt'); b.hash('yourpassword',10).then(console.log)"
-- ============================================================


-- ============================================================
-- Migration 001: Users
-- ============================================================

CREATE TABLE IF NOT EXISTS users (
  id                        SERIAL PRIMARY KEY,
  username                  VARCHAR(50)   NOT NULL UNIQUE,
  email                     VARCHAR(255)  NOT NULL UNIQUE,
  password_hash             VARCHAR(255)  NOT NULL,
  role                      VARCHAR(20)   NOT NULL
                              CHECK (role IN ('association_admin', 'club_admin', 'player', 'coach')),
  email_verification_token  VARCHAR(255)  NULL,
  email_verified_at         TIMESTAMPTZ   NULL,
  is_email_verified         BOOLEAN       NOT NULL DEFAULT FALSE,
  created_at                TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);


-- ============================================================
-- Migration 002: Clubs
-- ============================================================

CREATE TABLE IF NOT EXISTS clubs (
  id             SERIAL PRIMARY KEY,
  admin_user_id  INT           NOT NULL REFERENCES users(id),
  name           VARCHAR(150)  NOT NULL UNIQUE,
  logo_url       VARCHAR(500)  NULL,
  address        VARCHAR(255)  NULL,
  phone          VARCHAR(20)   NULL,
  email          VARCHAR(255)  NULL,
  description    TEXT          NULL,
  status         VARCHAR(20)   NOT NULL DEFAULT 'pending'
                   CHECK (status IN ('pending', 'active', 'inactive')),
  created_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);


-- ============================================================
-- Migration 003: Players
-- ============================================================

CREATE TABLE IF NOT EXISTS players (
  id                SERIAL PRIMARY KEY,
  user_id           INT           NOT NULL UNIQUE REFERENCES users(id),
  club_id           INT           NULL REFERENCES clubs(id),
  full_name         VARCHAR(150)  NOT NULL,
  photo_url         VARCHAR(500)  NULL,
  birth_date        DATE          NULL,
  gender            VARCHAR(10)   NULL
                      CHECK (gender IN ('male', 'female', 'other')),
  phone             VARCHAR(20)   NULL,
  national_id       VARCHAR(50)   NULL UNIQUE,
  national_rating   NUMERIC(8,2)  NULL,
  status            VARCHAR(20)   NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending', 'active', 'inactive')),
  is_email_verified BOOLEAN       NOT NULL DEFAULT FALSE,
  last_scraped_at   TIMESTAMPTZ   NULL,
  created_at        TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);


-- ============================================================
-- Migration 004: Club membership requests
-- ============================================================

CREATE TABLE IF NOT EXISTS club_membership_requests (
  id            SERIAL PRIMARY KEY,
  player_id     INT           NOT NULL REFERENCES players(id),
  club_id       INT           NOT NULL REFERENCES clubs(id),
  status        VARCHAR(20)   NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'approved', 'rejected', 'withdrawn')),
  notes         VARCHAR(500)  NULL,
  requested_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  resolved_at   TIMESTAMPTZ   NULL
);

-- Only one pending request per player+club at a time
CREATE UNIQUE INDEX IF NOT EXISTS uq_cmr_pending
  ON club_membership_requests (player_id, club_id)
  WHERE status = 'pending';


-- ============================================================
-- Migration 005: Coaches
-- ============================================================

CREATE TABLE IF NOT EXISTS coaches (
  id          SERIAL PRIMARY KEY,
  user_id     INT           NOT NULL UNIQUE REFERENCES users(id),
  full_name   VARCHAR(150)  NOT NULL,
  photo_url   VARCHAR(500)  NULL,
  bio         TEXT          NULL,
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);


-- ============================================================
-- Migration 006: Board members
-- ============================================================

CREATE TABLE IF NOT EXISTS board_members (
  id              SERIAL PRIMARY KEY,
  user_id         INT           NULL UNIQUE REFERENCES users(id),
  full_name       VARCHAR(150)  NOT NULL,
  position_title  VARCHAR(100)  NOT NULL,
  photo_url       VARCHAR(500)  NULL,
  bio             TEXT          NULL,
  display_order   INT           NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);


-- ============================================================
-- Migration 007: Tournaments
-- ============================================================

CREATE TABLE IF NOT EXISTS tournaments (
  id                      SERIAL PRIMARY KEY,
  name                    VARCHAR(200)  NOT NULL,
  date                    DATE          NOT NULL,
  location                VARCHAR(255)  NULL,
  description             TEXT          NULL,
  category                VARCHAR(100)  NULL,
  status                  VARCHAR(30)   NOT NULL DEFAULT 'upcoming'
                            CHECK (status IN ('upcoming', 'registration_open', 'ongoing', 'finished')),
  max_players             INT           NULL,
  registration_open_date  DATE          NULL,
  registration_close_date DATE          NULL,
  min_rating              NUMERIC(8,2)  NULL,
  max_rating              NUMERIC(8,2)  NULL,
  gender_filter           VARCHAR(10)   NOT NULL DEFAULT 'open'
                            CHECK (gender_filter IN ('open', 'male', 'female')),
  min_birth_year          INT           NULL,
  max_birth_year          INT           NULL,
  created_at              TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

  CONSTRAINT chk_tournaments_dates
    CHECK (
      registration_open_date IS NULL
      OR registration_close_date IS NULL
      OR registration_open_date <= registration_close_date
    ),
  CONSTRAINT chk_tournaments_rating
    CHECK (min_rating IS NULL OR max_rating IS NULL OR min_rating <= max_rating),
  CONSTRAINT chk_tournaments_birth_year
    CHECK (min_birth_year IS NULL OR max_birth_year IS NULL OR min_birth_year <= max_birth_year)
);


-- ============================================================
-- Migration 008: Tournament registrations
-- ============================================================

CREATE TABLE IF NOT EXISTS tournament_registrations (
  id             SERIAL PRIMARY KEY,
  tournament_id  INT           NOT NULL REFERENCES tournaments(id),
  player_id      INT           NOT NULL REFERENCES players(id),
  status         VARCHAR(20)   NOT NULL DEFAULT 'confirmed'
                   CHECK (status IN ('confirmed', 'waitlisted', 'withdrawn')),
  notes          VARCHAR(500)  NULL,
  registered_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  resolved_at    TIMESTAMPTZ   NULL,

  CONSTRAINT uq_treg_player_tournament UNIQUE (tournament_id, player_id)
);


-- ============================================================
-- Migration 009: Tournament results
-- ============================================================

CREATE TABLE IF NOT EXISTS tournament_results (
  id             SERIAL PRIMARY KEY,
  tournament_id  INT           NOT NULL REFERENCES tournaments(id),
  player_id      INT           NOT NULL REFERENCES players(id),
  placement      INT           NOT NULL CHECK (placement > 0),
  notes          VARCHAR(500)  NULL,
  created_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_tresult_player_tournament UNIQUE (tournament_id, player_id)
);


-- ============================================================
-- Migration 010: Matches
-- ============================================================

CREATE TABLE IF NOT EXISTS matches (
  id             SERIAL PRIMARY KEY,
  tournament_id  INT           NOT NULL REFERENCES tournaments(id),
  player1_id     INT           NOT NULL REFERENCES players(id),
  player2_id     INT           NOT NULL REFERENCES players(id),
  winner_id      INT           NULL     REFERENCES players(id),
  stage          VARCHAR(100)  NULL,
  played_at      TIMESTAMPTZ   NULL,

  CONSTRAINT chk_matches_players_differ
    CHECK (player1_id <> player2_id),
  CONSTRAINT chk_matches_winner
    CHECK (winner_id IS NULL OR winner_id = player1_id OR winner_id = player2_id)
);


-- ============================================================
-- Migration 011: News
-- ============================================================

CREATE TABLE IF NOT EXISTS news (
  id               SERIAL PRIMARY KEY,
  author_id        INT           NOT NULL REFERENCES users(id),
  title            VARCHAR(300)  NOT NULL,
  slug             VARCHAR(350)  NOT NULL UNIQUE,
  content          TEXT          NOT NULL,
  cover_image_url  VARCHAR(500)  NULL,
  is_published     BOOLEAN       NOT NULL DEFAULT FALSE,
  published_at     TIMESTAMPTZ   NULL,
  created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ix_news_slug      ON news (slug);
CREATE INDEX IF NOT EXISTS ix_news_published ON news (is_published, published_at DESC);


-- ============================================================
-- Migration 012: Email logs
-- ============================================================

CREATE TABLE IF NOT EXISTS email_logs (
  id               SERIAL PRIMARY KEY,
  recipient_email  VARCHAR(255)  NOT NULL,
  email_type       VARCHAR(50)   NOT NULL
                     CHECK (email_type IN (
                       'verify_email',
                       'club_approved',
                       'club_rejected',
                       'membership_approved',
                       'membership_rejected',
                       'tournament_confirmed',
                       'tournament_waitlisted',
                       'tournament_from_waitlist'
                     )),
  status           VARCHAR(10)   NOT NULL DEFAULT 'sent'
                     CHECK (status IN ('sent', 'failed')),
  related_type     VARCHAR(50)   NULL,
  related_id       INT           NULL,
  error_message    TEXT          NULL,
  sent_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ix_email_logs_recipient ON email_logs (recipient_email);
CREATE INDEX IF NOT EXISTS ix_email_logs_type      ON email_logs (email_type, sent_at DESC);


-- ============================================================
-- Migration 013: Seed — initial association admin
-- ============================================================
-- Replace the three placeholder values below before running.
-- ============================================================

INSERT INTO users (
  username,
  email,
  password_hash,
  role,
  is_email_verified,
  email_verified_at
)
SELECT
  'admin',                      -- change this
  'admin@tudominio.com',        -- change this
  'REPLACE_WITH_BCRYPT_HASH',   -- change this
  'association_admin',
  TRUE,
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM users WHERE role = 'association_admin'
);