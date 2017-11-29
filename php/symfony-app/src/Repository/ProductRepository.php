<?php

namespace App\Repository;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class ProductRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Product::class);
    }

    /**
 	 * Get products default sorted by ID and ASC ordered
     * @param  string $field The field to sort id|name|price
     * @param  string $order The direction ASC|DESC
     * @return array $products
	 */
    public function allSortedBy($field = 'id', $order = 'ASC')
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.'.$field, $order)
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('p')
            ->where('p.something = :value')->setParameter('value', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
