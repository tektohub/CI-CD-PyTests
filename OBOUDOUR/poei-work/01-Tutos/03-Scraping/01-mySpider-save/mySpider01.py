# -*- coding: utf-8 -*-
import scrapy

class USpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'http://quotes.toscrape.com/'
    ]

    def parse(self, response):
        
        #title = response.css('title').extract()

        title = response.css('title::text').extract()

        yield ('titletext': title) 


