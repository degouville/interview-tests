<?php

namespace App\DataFixtures\ORM;

use App\Entity\User;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $dummies = $this->createDummies();

        foreach ($dummies as $index => $dummy) {
            $user = new User();
            $hash = $this->container
                ->get('security.password_encoder')
                ->encodePassword($user, $dummy['password']);

            $user->setUsername($dummy['username']);
            $user->setEmail($dummy['email']);
            $user->setPassword( $hash );

            $manager->persist($user);
        }

        $manager->flush();
    }

    /**
 	 * Create a set of fake users and 2 hardcoded admin accounts.
	 */
    public function createDummies()
    {
        $faker = Faker\Factory::create('fr_FR');

        $dummies = [
            [
                'username' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => 'pass_1234'
            ],
            [
                'username' => 'Mathieu de Gouville',
                'email' => 'mathieu@degouville.com',
                'password' => 'J7p(L,hP99dQjrq8F(y2oAF)2bx>8ikmxUzkirE8(f7BGQF/B(hoavk3bxi}&eiC'
            ],
        ];

        for ($i = 0; $i < mt_rand(3, 100); $i++) {
            $dummies[] = [
                'username' => $faker->name,
                'email' => $faker->email,
                'password' => $faker->password
            ];
        }

        return $dummies;
    }
}
