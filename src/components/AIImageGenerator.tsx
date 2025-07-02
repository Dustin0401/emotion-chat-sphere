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
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/60 backdrop-blur-md border border-lime-500/30 shadow-2xl shadow-lime-500/10 hover:shadow-lime-500/20 transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center">
                    <Wand2 className="w-5 h-5 text-black" />
                  </div>
                  Create Your Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative">
                  <Textarea
                    placeholder="Describe the image you want to create... (e.g., 'A futuristic city at sunset with flying cars')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-40 bg-muted/80 backdrop-blur-sm border-lime-500/30 text-white placeholder-gray-400 resize-none focus:border-lime-400 transition-colors rounded-xl"
                  />
                  <div className="absolute top-4 right-4 text-xs text-gray-500">
                    {prompt.length}/500
                  </div>
                </div>
                
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full h-14 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-black font-bold text-lg rounded-xl shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-5 h-5 mr-3 animate-spin" />
                      Generating Magic...
                    </>
                  ) : (
                    <>
                      <Palette className="w-5 h-5 mr-3" />
                      Generate Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md rounded-2xl p-6 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-500/20 to-lime-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-lime-400" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">High Quality</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Professional-grade image generation with stunning detail</p>
              </div>
              
              <div className="group bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md rounded-2xl p-6 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2 text-lg">Instant Download</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Save your creations in high resolution immediately</p>
              </div>
            </div>
          </div>

          {/* Enhanced Canvas Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/60 backdrop-blur-md border border-lime-500/30 shadow-2xl shadow-lime-500/10 hover:shadow-lime-500/20 transition-all duration-500 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-black" />
                  </div>
                  Preview Canvas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-2xl overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    width={512}
                    height={512}
                    className="w-full h-auto rounded-2xl border-2 border-lime-500/30 bg-gradient-to-br from-muted to-muted/50 shadow-inner"
                  />
                  
                  {!generatedImage && !isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-muted/80 to-muted/60 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-lime-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Palette className="w-10 h-10 text-gray-400" />
                        </div>
                        <p className="text-gray-400 text-lg font-medium">Your AI masterpiece</p>
                        <p className="text-gray-500 text-sm mt-1">will appear here</p>
                      </div>
                    </div>
                  )}
                  
                  {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/80 backdrop-blur-md">
                      <div className="text-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <Sparkles className="w-8 h-8 text-black animate-spin" />
                          </div>
                          <div className="absolute inset-0 w-16 h-16 bg-lime-400/20 rounded-2xl mx-auto animate-ping" />
                        </div>
                        <p className="text-white text-lg font-semibold">Creating your vision...</p>
                        <p className="text-gray-400 text-sm mt-1">This may take a moment</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {generatedImage && (
                  <Button
                    onClick={handleDownload}
                    className="w-full mt-6 h-12 bg-gradient-to-r from-primary to-lime-600 hover:from-primary/90 hover:to-lime-700 text-black font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Your Creation
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