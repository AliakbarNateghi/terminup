# Generated by Django 4.1.1 on 2022-10-04 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sharitz', '0012_alter_college_college'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='college',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
