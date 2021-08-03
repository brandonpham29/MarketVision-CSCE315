# Generated by Django 3.2 on 2021-04-11 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundamentalstats',
            name='beta',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='debtToEquity',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='dividendYield',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='eps',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='epsNext5Yr',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='epsPrev5Yr',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='epsThisYr',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='freeCashFlowPerShare',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='priceToBook',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='priceToEarnings',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='roa',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='roe',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='roi',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
        migrations.AlterField(
            model_name='fundamentalstats',
            name='volume',
            field=models.DecimalField(blank=True, decimal_places=10, max_digits=1000, null=True),
        ),
    ]
