from django.db import migrations


class Migration(migrations.Migration):
    """Turns on the pgvector extension so later slices can store embeddings."""

    initial = True
    dependencies = []

    operations = [
        migrations.RunSQL(
            sql="CREATE EXTENSION IF NOT EXISTS vector;",
            reverse_sql="DROP EXTENSION IF EXISTS vector;",
        ),
    ]
