# Generated by Django 4.1.1 on 2022-10-08 18:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharitz', '0015_rename_endtime_examdate_start_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='WeeklySchedule',
            new_name='ws',
        ),
    ]
