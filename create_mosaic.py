import os
from PIL import Image
import random

def create_mosaic(image_dir, output_path, mosaic_width=1920, mosaic_height=1080, scale_variation=0.2):
    # Load all available images (excluding existing mosaics)
    all_images = []
    for fname in os.listdir(image_dir):
        if fname.lower().endswith(('.png', '.jpg', '.jpeg')) and not fname.startswith('mosaic_'):
            img_path = os.path.join(image_dir, fname)
            img = Image.open(img_path).convert('RGB')
            all_images.append(img)
    
    if len(all_images) < 3:
        raise Exception('Need at least 3 images for mosaic')
    
    # Randomly select 4-5 images (avoid 3 for better balance)
    num_images = random.randint(4, min(5, len(all_images)))
    selected_images = random.sample(all_images, num_images)
    
    # Create empty mosaic canvas
    mosaic = Image.new('RGB', (mosaic_width, mosaic_height), (255, 255, 255))
    
    # Define non-overlapping grid positions based on number of images
    if num_images == 4:
        # 2x2 grid - NO GAPS, NO OVERLAPS
        half_w = mosaic_width // 2
        half_h = mosaic_height // 2
        positions = [
            (0, 0, half_w, half_h),
            (half_w, 0, mosaic_width - half_w, half_h),
            (0, half_h, half_w, mosaic_height - half_h),
            (half_w, half_h, mosaic_width - half_w, mosaic_height - half_h)
        ]
    elif num_images == 5:
        # Top row: 3 images, Bottom row: 2 images - NO GAPS, NO OVERLAPS
        third_w = mosaic_width // 3
        half_w = mosaic_width // 2
        half_h = mosaic_height // 2
        positions = [
            (0, 0, third_w, half_h),
            (third_w, 0, third_w, half_h),
            (2 * third_w, 0, mosaic_width - 2 * third_w, half_h),
            (0, half_h, half_w, mosaic_height - half_h),
            (half_w, half_h, mosaic_width - half_w, mosaic_height - half_h)
        ]
    
    # Place each image in its exact designated position
    for i, (img, pos) in enumerate(zip(selected_images, positions)):
        x, y, w, h = pos
        
        # Crop and resize image to fit EXACTLY in the designated area
        img_ratio = img.width / img.height
        target_ratio = w / h
        
        if img_ratio > target_ratio:
            # Image is wider than target - crop width
            new_width = int(img.height * target_ratio)
            left_crop = (img.width - new_width) // 2
            img_cropped = img.crop((left_crop, 0, left_crop + new_width, img.height))
        else:
            # Image is taller than target - crop height
            new_height = int(img.width / target_ratio)
            top_crop = (img.height - new_height) // 2
            img_cropped = img.crop((0, top_crop, img.width, top_crop + new_height))
        
        # Resize to exact dimensions and paste at exact position
        img_final = img_cropped.resize((w, h), Image.LANCZOS)
        mosaic.paste(img_final, (x, y))
    
    # Save the completed mosaic
    mosaic.save(output_path)
    print(f"Mosaic created successfully with {num_images} images: {output_path}")

# Generate mosaics when script is run directly
if __name__ == "__main__":
    # Create home page mosaic
    home_dir = "."
    create_mosaic(home_dir, "public/photos/home/mosaic_home.png")
    
    # Create menu page mosaic  
    menu_dir = "../menu"
    create_mosaic(menu_dir, "public/photos/menu/mosaic_menu.png")
