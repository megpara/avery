import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

const projects = [
  "Project Reed",
  "Project Radde",
  "Project Scott",
  "Project Evans",
  "Project ECH Office",
  "Project VetWealth Office Remodel",
  "Project Saul",
];

export default function Projects() {
  return (
    <Layout>
      <Header />
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="max-w-md font-light tracking-[1px] text-center smWrapper py-16">
          {/* <div className="headerTitle italic !leading-normal pb-4 text-center "> */}
          Please stay tuned to see our latest projects!
          {/* </div> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mr-8 ml-8 pb-16">
          {projects.map((project, index) => (
            <>
              {/* <button onClick={() => openModal(index)}> */}
              <div
                key={index}
                className="bg-[#d6cec4] text-white aspect-square flex flex-col justify-center text-center p-4"
              >
                <div className="headerTitle">{project}</div>{" "}
              </div>
              {/* </button> */}

              {/* <Modal open={checkIsModalOpen(index)} closeModal={closeModal}>
              <div className="title text-3xl secondaryColor pb-4">
                {employee.name}
              </div>
              <div className="paragraph paragraphSmall max-h-[50vh] overflow-scroll">
                {employee.bio.map((paragraph) => (
                  <div className="pb-4">{paragraph}</div>
                ))}
              </div>
            </Modal> */}
            </>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
