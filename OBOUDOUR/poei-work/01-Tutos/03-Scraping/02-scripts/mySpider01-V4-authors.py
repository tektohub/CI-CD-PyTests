# -*- coding: utf-8 -*-

import scrapy

class USpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'http://quotes.toscrape.com/'
    ]

    def parse(self, response):
        
        #title = response.css('title').extract()

        #title = response.css('title::text').extract()

# suite - xpath
# combiner css et xpath : 

	#title = response.css("a").xpath("href").extract()

        #yield {'titletext': title}

# - select all authors - tags :


	quote = response.css("div.quote")
        title = quote.css("span.text::text").extract()
        author = quote.css(".author::text").extract()
        tags = quote.css("div.tags a.tag::text").extract()
        yield {
            'title': title,
            'author': author,
            'tags': tags
        }





