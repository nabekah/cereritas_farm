"use client";
import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Temp() {
  let [categories] = useState({
    Story: [
      {
        id: 1,
        title: 'Founded in 2022, Celeritas Farms started as a humble family-owned farm with a vision to create a difference in the agricultural landscape. Over the years, we have grown into a dynamic and forward-thinking organization, embracing modern technology and responsible farming methods',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Join us in our journey towards a greener and more prosperous future. Together, we cultivate a world where abundance flourishes, and sustainability thrives",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Philosophy: [
      {
        id: 1,
        title: 'At the heart of our operations lies a deep-rooted respect for nature and its resources. We believe that by harnessing the power of nature and adopting sustainable practices, we can achieve a harmonious balance between productivity and ecological preservation.',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      
    ],
    Why: [
      {
        id: 1,
        title: 'Sustainability: We prioritize sustainable agriculture, minimizing our environmental impact and promoting biodiversity conservation.',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'Community Engagement: We actively engage with local farmers and communities, offering training and support to promote economic empowerment.',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 3,
        title: 'Technology and Innovation: Embracing cutting-edge technology, we optimize productivity and efficiency across our farm operations.',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      
      
    ],
    Commitment: [
      {
        id: 1,
        title: 'To provide nutritious and safe farm products to consumers while ensuring the welfare of our animals and the environment.',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "To invest in research and development, continuously improving our agricultural practices.",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
      {
        id: 3,
        title: "To be a responsible corporate citizen, supporting local communities, and fostering sustainable growth.",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500',
                  ' ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-300 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}<span aria-hidden="true">&rarr;</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-1',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-300 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-0 hover:bg-gray-600 hover:text-orange-800"
                  >
                    <h3 className="leading-8 mb-2 pb-3 text-gray-300 hover:text-orange-800 text-base">
                      {post.title}
                    </h3>

                    {/* <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul> */}

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-orange-300 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
