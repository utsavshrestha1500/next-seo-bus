// Import necessary modules and components
import React from 'react';
import Image from 'next/image';

// Define the Layout component
const Layout = ({ }) => {
    return (
        <div>
            {/* Your existing layout code or components go here */}

            {/* Add the provided HTML code with Tailwind CSS classes */}
            <section className="site-section-wrap bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Left Content */}
                        <div className="col-span-2 md:col-span-1 lg:col-span-2">
                            <div className="site-left-wrap p-4">
                                <h1 ><strong className="font-bold "> Introduction</strong>  </h1>
                                <p className="text-justify">
                                    <strong className="font-bold">Trekking In Nepal </strong>
                                    is the best way to experience <strong className="font-bold">Nepal’s</strong>
                                     unbeatable combination of natural beauty and cultural riches is to walk 
                                     through them. One can walk along the beaten trails or virgin tracks. 
                                     Either way, you are in for an experience for a lifetime. 
                                     Along with forests of rhododendron, isolated hamlets, and small mountain villages,
                                      birds, animals, temples, monasteries, and breathtaking landscapes, you will also 
                                      encounter friendly people of different cultures – offering a fascinating glimpse 
                                      of traditional rural life.
                                </p>
                                <Image
                                                    src="/bus1.jpg"
                                                    alt="Annapurna Trekking Region"
                                                    width={240}
                                                    height={240}
                                                    style={{borderRadius: "5px"}}
                                                    className="img-responsive"
                                                />
                                                
                                <p className="text-justify">
                                    <strong className="font-bold">Trekking</strong> 
                                    is possible any time of the year depending on where you are going. 
                                    The popular seasons are<em className="italic"> spring and autumn</em>.
                                     During winter, trekking is possible at lower altitudes. 
                                     During the monsoon season, you can trek in the rain shadow areas north 
                                     of the Himalaya like <strong className="font-bold">Mustang, Upper Manang, 
                                     and Dolpo.</strong> These places are out of reach of the rain clouds because 
                                     of the high mountains and are unaffected by the monsoon. The best part about
                                      trekking in this season is that the routes are less crowded, and if you happen
                                       to be a keen botanist, you will revel in lush vegetation as meadows blossom in
                                        full swing. To ensure quality service and safety, it is advisable to make the
                                         trekking programs through a government-recognized trekking agency.
                                </p>

                                <h1 className="summary-head text-2xl font-bold mt-4">Trekking in Nepal | Book Nepal Trekking Package with Local Expert</h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Package 1 */}
                                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                        <div className="package-post p-4">
                                            <a href="hhttps://www.okayjourney.com/">
                                                <Image
                                                    src="/bus2.jpg"
                                                    alt="Everest Trekking Region"
                                                    width={240}
                                                    height={240}
                                                    style={{borderRadius: "5px"}}
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <a href="https://www.okayjourney.com/">
                                                <h4 className="text-xl font-bold"></h4>
                                            </a>
                                            <h3 className="text-lg font-semibold">Everest Trekking Region</h3>
                                            <p className="mt-2">
                                                Everest Trekking Region is home to the Worlds Highest Mountain Mount Everest and other peaks like Nuptse, Cho Oyu, Lhotse, Gosainthan, Amadablam and...{' '}
                                                <a href="https://www.okayjourney.com/" className="text-blue-500">
                                                    Read more..
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Package 2 */}
                                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                        <div className="package-post p-4">
                                            <a href="https://www.okayjourney.com/">
                                                <Image
                                                    src="/bus1.jpg"
                                                    alt="Annapurna Trekking Region"
                                                    width={240}
                                                    height={240}
                                                    style={{borderRadius: "5px"}}
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <a href="https://www.okayjourney.com/">
                                                <h4 className="text-xl font-bold"></h4>
                                            </a>
                                            <h3 className="text-lg font-semibold">Annapurna Trekking Region</h3>
                                            <p className="mt-2">
                                                Annapurna Trekking region is recognized as a naturalists paradise and one of the world greatest trekking destinations. Annapurna Region is located in the north...{' '}
                                                <a href="https://www.okayjourney.com/" className="text-blue-500">
                                                    Read more..
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Package 3 */}
                                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                        <div className="package-post p-4">
                                            <a href="https://www.okayjourney.com/">
                                                <Image
                                                    src="/bus4.jpg"
                                                    alt="Annapurna Trekking Region"
                                                    width={240}
                                                    height={240}
                                                    style={{borderRadius: "5px"}}
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <a href="https://www.okayjourney.com/">
                                                <h4 className="text-xl font-bold"></h4>
                                            </a>
                                            <h3 className="text-lg font-semibold">Himalaya Trekking Region</h3>
                                            <p className="mt-2">
                                                Himalayan Trekking region is recognized as a naturalists paradise and one of the world greatest trekking destinations. Annapurna Region is located in the north...{' '}
                                                <a href="https://www.okayjourney.com/" className="text-blue-500">
                                                    Read more..
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content (Packages) */}
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="row">
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

// Export the Layout component
export default Layout;
