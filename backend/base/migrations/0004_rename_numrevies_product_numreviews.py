# Generated by Django 4.1.5 on 2023-01-07 22:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='numRevies',
            new_name='numReviews',
        ),
    ]
