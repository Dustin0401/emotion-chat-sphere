import React, { useState, useRef } from 'react';
import { Palette, Download, Sparkles, Wand2 } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI image generation
    setTimeout(() => {
      // Create a placeholder generated image on canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Create gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#84cc16');
          gradient.addColorStop(0.5, '#22c55e');
          gradient.addColorStop(1, '#06b6d4');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Add some abstract shapes
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          for (let i = 0; i < 10; i++) {
            ctx.beginPath();
            ctx.arc(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
              Math.random() * 50 + 20,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
          
          // Add text
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.font = '20px Space Grotesk';
          ctx.textAlign = 'center';
          ctx.fillText('AI Generated Art', canvas.width / 2, canvas.height / 2);
          ctx.font = '14px Space Grotesk';
          ctx.fillText(`"${prompt}"`, canvas.width / 2, canvas.height / 2 + 30);
          
          setGeneratedImage(canvas.toDataURL());
        }
      }
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.download = 'ai-generated-image.png';
      link.href = generatedImage;
      link.click();
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI Image Generator
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your ideas into stunning visuals with our advanced AI image generation technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-lime-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Wand2 className="w-5 h-5 text-lime-400" />
                  Create Your Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe the image you want to create... (e.g., 'A futuristic city at sunset with flying cars')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 bg-muted border-lime-500/20 text-white placeholder-gray-400 resize-none"
                />
                
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Palette className="w-4 h-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-lime-500/10">
                <div className="w-8 h-8 bg-lime-500/10 rounded-lg flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4 text-lime-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">High Quality</h4>
                <p className="text-sm text-gray-400">Professional-grade image generation</p>
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-lime-500/10">
                <div className="w-8 h-8 bg-lime-500/10 rounded-lg flex items-center justify-center mb-2">
                  <Download className="w-4 h-4 text-lime-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">Instant Download</h4>
                <p className="text-sm text-gray-400">Save your creations immediately</p>
              </div>
            </div>
          </div>

          {/* Canvas Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-lime-500/20">
              <CardHeader>
                <CardTitle className="text-white">Preview Canvas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <canvas
                    ref={canvasRef}
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-lg border border-lime-500/20 bg-muted"
                  />
                  
                  {!generatedImage && !isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-muted/50">
                      <div className="text-center">
                        <Palette className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400">Your generated image will appear here</p>
                      </div>
                    </div>
                  )}
                  
                  {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 backdrop-blur-sm">
                      <div className="text-center">
                        <Sparkles className="w-8 h-8 text-lime-400 mx-auto mb-2 animate-spin" />
                        <p className="text-white">Generating your image...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {generatedImage && (
                  <Button
                    onClick={handleDownload}
                    className="w-full mt-4 bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Image
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImageGenerator;