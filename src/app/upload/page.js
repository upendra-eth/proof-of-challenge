// Copyright 2024 user
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// src/app/upload/page.js
import { useState } from 'react';
import ipfsClient from '../../lib/ipfs';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [hash, setHash] = useState('');
  const [revealDate, setRevealDate] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const added = await ipfsClient.add(file);
      setHash(added.path);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  return (
    <div>
      <h1>Upload Proof-of-Work</h1>
      <input type="file" onChange={handleFileChange} />
      <input type="date" value={revealDate} onChange={(e) => setRevealDate(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
      {hash && (
        <div>
          <p>File uploaded successfully. IPFS hash: {hash}</p>
          <p>File will be revealed on: {revealDate}</p>
        </div>
      )}
    </div>
  );
}
