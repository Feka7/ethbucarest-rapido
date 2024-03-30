import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ backgroundColor: "#0C0124", padding: "2rem 6rem" }}>
      <div className="navbar flex justify-between items-center px-4 py-2">
        <div className="logo">
          <Image src="/Logo.png" alt="Logo" width={200} height={80} />
        </div>
        <div className="nav-links flex items-center scroll-behavior: smooth">
          <a
            href="#how"
            className="mx-7 font-medium text-white hover:text-sky-500"
          >
            How it works
          </a>
          <a
            href="#company"
            className="mx-7 font-medium text-white hover:text-sky-500"
          >
            Use Cases
          </a>
          <Link href="/app" className="enter-app-btn">Enter App</Link>
        </div>
      </div>
      <div className="text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          <h1 className="text-5xl leading-normal font-bold mb-4">
            <span className="text-[#79DFFF]">R</span>eal-time{" "}
            <span className="text-[#79DFFF]">A</span>ccess{" "}
            <span className="text-[#79DFFF]">P</span>ayroll{" "}
            <span className="text-[#79DFFF]">I</span>ntegration for{" "}
            <span className="text-[#79DFFF]">D</span>AO{" "}
            <span className="text-[#79DFFF]">O</span>perations⚡
          </h1>
          <p className="mb-6 leading-normal text-xl">
          We redefine how DAOs handle payroll, making it as dynamic and flexible as the teams that drive them
          </p>
          <Link href="/app" className="enter-app-btn">Enter App</Link>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image
            src="/image5.png"
            alt="Image"
            width={400}
            height={200}
            className="float"
          />
        </div>
      </div>
      <div className="mt-26 text-center" id="how">
        <p className="text-5xl font-bold gradient-text">How it works</p>
        <div className="divider"></div>
      </div>
      <div className=" text-white p-10 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          <p className="mb-[10px] text-4xl font-bold">
          Seamless setup for DAOs
          </p>
          <p className="max-w-md  text-xl mt-4">
          mapping DAO’s teams to specific ENS subdomains - this one-time setup aligns the DAO organizational structure with payment streams
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/donnaschema.png" width={400} height={300} alt="work1" />
        </div>
      </div>
      <div className=" text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/uomopay.png" width={350} height={300} alt="work2" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">
          Stream payments effortlessly with Sablier
          </p>
          <p className="max-w-md  text-xl mt-4">
          employees or collaborators can withdraw their accumulated funds at any point from their specific subdomain
          </p>
        </div>
      </div>
      <div className=" text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">
          Dynamic ENS integration 
          </p>
          <p className="max-w-md  text-xl mt-4">
          ENS makes payments easy to manage and remember - funds are streamed to recognizable and memorable subdomains aligned with the DAO's structure
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/uomoens.png" width={400} height={300} alt="work3" />
        </div>
      </div>
      <div className="text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/schemawoman.png" width={400} height={300} alt="work4" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">Ownership flexibility</p>
          <p className="max-w-md  text-xl mt-4">
          as roles within a DAO evolve, payment streams can be easily redirected to new recipients under the same subdomain, without any interruption
          </p>
        </div>
      </div>

      <div className="mt-[50px] text-center" id="company">
        <p className="text-4xl font-bold gradient-text">
          For DAOs
        </p>
        <div className="divider"></div>
      </div>
      <div className="text-white grid grid-cols-3 gap-4 p-4 mb-[120px]">
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Ensures high-quality deliverables through continuous evaluation</h2>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Makes interaction easy with a user-friendly interface</h2>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Cuts down boring and errore prone administrative work</h2>
          </div>
        </div>
      </div>
      <div className="mt-[50px] text-center" id="recipient">
        <p className="text-4xl font-bold gradient-text">
          For Contributors
        </p>
        <div className="divider"></div>
      </div>
      <div className="text-white grid grid-cols-3 gap-4 p-4">
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Streamlines the funding process, allowing for quicker project starts</h2>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Provides a stable stream of funding, ensuring financial security</h2>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title" style={{ textAlign: 'center' }}>Opens up funding opportunities for innovative small-scale initiatives</h2>
          </div>
        </div>
      </div>
      <div className="flex place-content-center w-full mt-6">
        <Link href="/app" className="enter-app-btn">Enter App</Link>
      </div>     
    </main>
  );
}
