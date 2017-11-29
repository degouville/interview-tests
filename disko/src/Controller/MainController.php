<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Repository\ProductRepository;

class MainController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction(ProductRepository $productRepository)
    {
        $products = $productRepository->allSortedBy('price');

        return $this->render('home/index.html.twig', compact('products'));
    }
}
