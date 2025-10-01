import os
import random
import cv2
import numpy as np

def create_mosaic(image_dir, output_path, mosaic_width=2400, mosaic_height=1920, scale_variation=0.3):
    n_rows = 2
    row_height = int(mosaic_height / n_rows)
    # Load all available images (excluding existing mosaics)
    all_images = []
    for fname in os.listdir(image_dir):
        if fname.lower().endswith(('.png', '.jpg', '.jpeg')) and not fname.startswith('mosaic_'):
            img_path = os.path.join(image_dir, fname)
            img = cv2.imread(img_path, cv2.IMREAD_COLOR_BGR)
            print(img.shape)
            height_ratio = row_height / img.shape[0]
            img = cv2.resize(img, (int(img.shape[1] * height_ratio), row_height))
            all_images.append(img)
    
    random.shuffle(all_images)
    print("\n")
    x_idx = 0
    row_idx = 0
    mosaic = all_images[0]
    img_idx = 1
    table = []
    row_max_width = 0
    while(row_idx < n_rows):
        table.append([])
        x_idx = 0
        while (x_idx < mosaic_width):
            if img_idx >= len(all_images):
                break

            table[row_idx].append(all_images[img_idx])
            x_idx += all_images[img_idx].shape[1]
            img_idx += 1

        row_width = sum(img.shape[1] for img in table[row_idx])
        if row_width > row_max_width:
            row_max_width = row_width
        row_idx += 1

    x_idx, y_idx = 0, 0
    img_idx = 0
    base_image = np.zeros((mosaic_height, row_max_width, 3), dtype=np.uint8)
    rows = [np.concat([row_img for row_img in table[row_idx]], axis=1) for row_idx in range(n_rows)]
    mosaic_width_rows = []
    for row_idx, row in enumerate(rows):
        wi = row.shape[1]
        d_w = abs(wi - mosaic_width)
        x0 = random.randint(0, d_w)
        mosaic_width_rows.append(row[:,x0:x0+mosaic_width,:])

    final_mosaic = np.concat([img for img in mosaic_width_rows], axis=0)
    cv2.imwrite("final_mosaic.png", final_mosaic)


    for row_idx, row in enumerate(table):
        x_idx = 0
        for row_img in table[row_idx]:
            base_image[y_idx:y_idx + row_height, x_idx:x_idx + row_img.shape[1]] = row_img
            x_idx += row_img.shape[1]
        y_idx += row_height
        
    cv2.imwrite("test_mosaic.png", base_image)

    # Take a random mosaic_width sample along each row
    

# Generate mosaics when script is run directly
if __name__ == "__main__":
    # Create home page mosaic
    home_dir = "./mosaic_photos"
    create_mosaic(home_dir, "mosaic_home.png")
    
