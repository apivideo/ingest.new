import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { useDropzone } from "react-dropzone";
import Prism from "prismjs";

import { Button } from "../components/button";
import * as H from "../styles/home.style.js";

//break into 1 MB chunks for demo purposes
const chunkSize = 1000000;

export default function Home() {
  const inputRef = useRef(null);
  const [uploadProgress, setProgress] = useState(0);
  const [uploadResponse, setUploadResponse] = useState(false);
  const [chunkInformation, setChunkInformation] = useState(false);
  const [VideoInformation, setVideoInformation] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const url = "https://ws.api.video/upload?token=to1R5LOYV0091XN3GQva27OS";
  let chunkCounter = 0;
  let videoId = "";
  let playerUrl = "";

  const uploadFile = (file) => {
    const filename = file.name;
    let numberofChunks = Math.ceil(file.size / chunkSize);
    setUploadResponse(false);
    setVideoInformation(
      "There will be " + numberofChunks + " chunks uploaded."
    );
    let start = 0;
    chunkCounter = 0;
    videoId = "";
    let chunkEnd = start + chunkSize;
    //upload the first chunk to get the videoId
    createChunk(videoId, start);

    function createChunk(videoId, start, end) {
      chunkCounter++;
      console.log("created chunk: ", chunkCounter);
      chunkEnd = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, chunkEnd);
      console.log(
        "i created a chunk of video" + start + "-" + chunkEnd + "minus 1	"
      );
      const chunkForm = new FormData();
      if (videoId && videoId.length > 0) {
        //we have a videoId
        chunkForm.append("videoId", videoId);
        console.log("added videoId");
      }
      //chunkForm.append('file', chunk);
      chunkForm.append("file", chunk, filename);
      console.log("added file");

      //created the chunk, now upload iit
      uploadChunk(chunkForm, start, chunkEnd);
    }

    function uploadChunk(chunkForm, start, chunkEnd) {
      let oReq = new XMLHttpRequest();
      oReq.upload.addEventListener("progress", updateProgress);
      oReq.open("POST", url, true);
      let blobEnd = chunkEnd - 1;
      let contentRange = "bytes " + start + "-" + blobEnd + "/" + file.size;
      oReq.setRequestHeader("Content-Range", contentRange);
      console.log("Content-Range", contentRange);
      function updateProgress(oEvent) {
        if (oEvent.lengthComputable) {
          let percentComplete = Math.round(
            (oEvent.loaded / oEvent.total) * 100
          );

          let totalPercentComplete = Math.round(
            ((chunkCounter - 1) / numberofChunks) * 100 +
              percentComplete / numberofChunks
          );
          setProgress(totalPercentComplete);
          setChunkInformation(
            "Chunk # " +
              chunkCounter +
              " is " +
              percentComplete +
              "% uploaded. Total uploaded: " +
              totalPercentComplete +
              "%"
          );
          //	console.log (percentComplete);
          // ...
        } else {
          console.log("not computable");
          // Unable to compute progress information since the total size is unknown
        }
      }
      oReq.onload = function (oEvent) {
        // Uploaded.
        console.log("uploaded chunk");
        console.log("oReq.response", oReq.response);
        let resp = JSON.parse(oReq.response);
        videoId = resp.videoId;
        //playerUrl = resp.assets.player;
        console.log("videoId", videoId);

        //now we have the video ID - loop through and add the remaining chunks
        //we start one chunk in, as we have uploaded the first one.
        //next chunk starts at + chunkSize from start
        start += chunkSize;
        //if start is smaller than file size - we have more to still upload
        if (start < file.size) {
          //create the new chunk
          createChunk(videoId, start);
        } else {
          try {
            setUploadResponse(resp);
            Prism.highlightAll();
            //the video is fully uploaded. there will now be a url in the response
            playerUrl = resp.assets.player;
            console.log("all uploaded! Watch here: ", playerUrl);
            setVideoInformation(
              "🎉 All uploaded! Watch the video <a href='" +
                playerUrl +
                "' target='_blank'>here</a>."
            );
          } catch (error) {
            setVideoInformation(error)
          }
        }
      };
      oReq.send(chunkForm);
    }
  };

  const fileInputChange = (e) => {
    uploadFile(e.target.files[0]);
  };

  const refreshIframe = () => {
    setIframeKey(iframeKey + 1);
  };

  const { getRootProps, isDragActive } = useDropzone({
    onDrop: (file) => {
      uploadFile(file[0]);
    },
  });

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const openFilePicker = () => {
    inputRef.current.click();
  };

  return (
    <H.Container>
      <Head>
        <title>Stream a video with HLS | Video uploader by api.video</title>
        <meta name="description" content="Upload a video to api.video" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <H.Main {...getRootProps()}>
        {isDragActive && <H.DndOverlay>Drop to upload</H.DndOverlay>}
        <H.CTASection>
          <H.HomeCTA>
            <img src="/api-video-logo.svg" width={72} height={72} />
            <H.Title>
              Stream a video with HLS<span>.</span>
            </H.Title>
            <H.Baseline>
              <a href="#">What does HLS "HTTP Live Streaming" mean ?</a>
            </H.Baseline>
            <p>
              Quickly upload <em>*any*</em> size video to{" "}
              <a href="https://api.video">api.video</a> using a delegated token.
              <br />
              Upon upload, we'll give you a shareable link to stream it.
            </p>
            <H.UploadAction>
              <p>↓ Drag &amp; drop a video file anywhere</p>
              <Button
                htmlFor="video-file"
                id="video-file-label"
                color="dark"
                shadow="hover"
                onClick={openFilePicker}
              >
                Upload a video
              </Button>
              <H.InputFile
                type="file"
                id="video-file"
                ref={inputRef}
                onChange={fileInputChange}
              />
            </H.UploadAction>
            <H.DemoCopy>
              <p>
                Get the{" "}
                <a href="https://github.com/apivideo/ingest.new">
                  sample code
                </a>
                , and read about{" "}
                <a href="https://a.video/works/upload-a-video">
                  how we built the demo.
                </a>
                <br />
                More demos at <a href="https://a.video">a.video</a>
              </p>
            </H.DemoCopy>
          </H.HomeCTA>
        </H.CTASection>
        <H.CTASection>
          {(uploadResponse || VideoInformation || chunkInformation) && (
            <H.UploadNotification>
              {uploadResponse ? (
                <img
                  id="uploadFile__icon"
                  src="/Videos.svg"
                  width={16}
                  height={16}
                />
              ) : (
                <>
                  {uploadProgress && (
                    <H.UploadPercentage>{uploadProgress}%</H.UploadPercentage>
                  )}
                </>
              )}
              <div>
                {VideoInformation && (
                  <p dangerouslySetInnerHTML={{ __html: VideoInformation }} />
                )}
                {chunkInformation && (
                  <p dangerouslySetInnerHTML={{ __html: chunkInformation }} />
                )}
              </div>
            </H.UploadNotification>
          )}
          {uploadResponse && uploadResponse.assets && (
            <H.UploadResult>
              <div>
                <H.IframeDemo src={uploadResponse.assets.player} key={iframeKey}/>
                <H.RefreshButton onClick={refreshIframe}>Refresh Video</H.RefreshButton>
                <p>Embed your video :</p>
                <pre className={"line-numbers"}>
                  <code className="language-html">
                    {uploadResponse.assets.iframe}
                  </code>
                </pre>
                <p>Share your video with this link :</p>
                <pre>
                  <code className="language-html">
                    {uploadResponse.assets.player}
                  </code>
                </pre>
              </div>
              <div>
                <pre className={"line-numbers"}>
                  <code className="language-json">
                    {JSON.stringify({ uploadResponse }, 0, 2)}
                  </code>
                </pre>
              </div>
            </H.UploadResult>
          )}
        </H.CTASection>
      </H.Main>
      <H.Footer>
        <p>
          <strong>
            This app was created with <a href="https://api.video">api.video</a>
          </strong> | <a href="https://api.video/terms-and-conditions">Terms</a>
        </p>
        <p>
          The end-to-end solution which enables you to easily build, scale and
          operate on-demand and live streaming videos in your app, software or
          platform. <a href="https://my.api.video/register">Get started today</a>
        </p>
      </H.Footer>
    </H.Container>
  );
}
