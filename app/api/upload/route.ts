import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate size (max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { success: false, message: 'File exceeds maximum limit of 10MB' },
        { status: 400 }
      );
    }

    // Validate extension
    const allowedExtensions = ['.pdf', '.docx', '.png', '.jpg', '.jpeg'];
    const originalName = file.name;
    const ext = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return NextResponse.json(
        { success: false, message: `Disallowed file type. Allowed: ${allowedExtensions.join(', ')}` },
        { status: 400 }
      );
    }

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate safe unique filename
    const safeBaseName = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueFileName = `${safeBaseName}_${Date.now()}${ext}`;
    const targetFilePath = path.join(uploadDir, uniqueFileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(targetFilePath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully to college server storage',
      fileUrl: publicUrl,
      fileName: uniqueFileName,
      sizeBytes: file.size
    });

  } catch (error: any) {
    console.error('[Upload Error]:', error);
    return NextResponse.json(
      { success: false, message: 'File upload failed' },
      { status: 500 }
    );
  }
}
