import Dropzone from "@/components/dropzone";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        File Converter For Everyone
      </h1>
      <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
        Convert your files to any format instantly. Just drag and drop your
        files and convert them effortlessly.
      </p>
      <div className="text-muted-foreground text-center ">
        <span className="block text-sm md:text-lg font-medium">
          Files allowed:
        </span>
        <ul className="text-muted-foreground list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-md">
          <li>
            Image: jpg, jpeg, png, gif, bmp, webp, ico, tif, tiff, svg, raw, tga
          </li>
          <li>
            Video: mp4, m4v, mp4v, 3gp, 3g2, avi, mov, wmv, mkv, flv, ogv, webm,
            h264, 264, hevc, 265
          </li>
          <li>Audio: mp3, wav, ogg, aac, wma, flac, m4a</li>
        </ul>
      </div>

      <Dropzone />
      <Footer />
    </div>
  );
}
