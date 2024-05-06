import React from "react";

const SocialMediaLayout = () => {
  const posts = [
    {
      id: 1,
      username: "fulanodetal",
    },
    {
      id: 2,
      username: "fulanodetal",
    },
    {
      id: 3,
      username: "fulanodetal",
    },
  ];

  return (
    <>
      <div className=" text-gray-700 pt-20 max-w-xl ">
        <section>
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg p-5 mb-5">
              <div className="mb-4">
                <div className="flex flex-row items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                    <div className="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                      <img
                        className="w-full h-full object-contain"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className=" text-sm font-semibold pb-2 pt-1">
                    fulanodetal
                  </p>
                </div>
                <div></div>
              </div>
              <div>
                <div>
                  <img
                    className="w-[100%] rounded"
                    // src="https://picsum.photos/600/400/?random"
                    src="/images/tom-clancy-ghost-recon.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="pt-3 pb-2">
                  <ul className=" text-2xl flex space-x-8">
                    <li>
                      <i className="fa-regular fa-heart cursor-pointer hover:text-gray-300"></i>
                    </li>
                    <li>
                      <i className="fa-regular fa-comments cursor-pointer hover:text-gray-300"></i>
                    </li>
                    <li>
                      <i className="fa-regular fa-paper-plane cursor-pointer hover:text-gray-300"></i>
                    </li>
                    <li>
                      <i className="fa-regular fa-bookmark  cursor-pointer hover:text-gray-300"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" pb-2 space-y-1 text-sm">
                <div>
                  <div className="flex font-semibold  cursor-pointer gap-3">
                    {/* Like icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    {/* Comment icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      />
                    </svg>

                    {/* Share icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold  cursor-pointer">37.103 likes</p>
                </div>
                <div>
                  <div className=" cursor-pointer">
                    {" "}
                    <span className=" font-bold">Shan Jathurshan</span> texto
                    serviria para exemplificar esse post :)
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 cursor-pointer">
                    Ver todos os 400 comentários
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-3 space-x-3">
                <div className="">
                  <p className="text-gray-400 text-sm">Comment section...</p>
                </div>
                <button className="text-blue-400 ml-[264px] font-semibold cursor-pointer">
                  Post
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default SocialMediaLayout;
