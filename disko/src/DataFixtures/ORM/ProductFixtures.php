<?php

namespace App\DataFixtures\ORM;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory as Faker;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker::create('fr_FR');

        // Create 100 products w/ dummy datas.
        for ($i = 0; $i < mt_rand(3, 100); $i++) {
            $product = new Product();

            // A product name is a "lorem" sentence wo/ ending point.
            $product->setName( str_replace('.', '', $faker->sentence(3, true)));
            $product->setPrice($faker->randomFloat(2, 1, 1000));

            $manager->persist($product);
        }

        $manager->flush();
    }
}
