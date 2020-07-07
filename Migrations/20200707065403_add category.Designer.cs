﻿// <auto-generated />
using System;
using Green.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Green.Migrations
{
    [DbContext(typeof(Greencontext))]
    [Migration("20200707065403_add category")]
    partial class addcategory
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Green.Models.Category", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("bread")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fish")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fruit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("meat")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("vegetables")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Green.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Categoryid")
                        .HasColumnType("int");

                    b.Property<string>("category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("imagePthUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("price")
                        .HasColumnType("real");

                    b.Property<string>("productName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("Categoryid");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Green.Models.Product", b =>
                {
                    b.HasOne("Green.Models.Category", null)
                        .WithMany("products")
                        .HasForeignKey("Categoryid");
                });
#pragma warning restore 612, 618
        }
    }
}
