# Brix Database

Supabase PostgreSQL is the database provider. This directory is for reviewed schema snapshots, migrations, policies and database tests only.

## Production safety

The existing Supabase project contains production data and schema. **Do not run `db reset`, drop tables, truncate data, or apply unreviewed migrations to production.** Never commit database passwords, access tokens, or service-role keys.

Before adding a migration:
1. Inspect and capture the current schema using the approved Supabase workflow.
2. Make a forward-only migration that preserves existing data.
3. Test against a disposable development database.
4. Review RLS policies and grants.
5. Apply to production only after explicit approval and a verified backup.

The scaffold intentionally contains no SQL that modifies the live database.
