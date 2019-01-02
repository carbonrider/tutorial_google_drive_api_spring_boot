/**
 * 
 */
package com.carbonrider.tutorials.gdrive.sbt.drivelistfiles.dto;

import java.io.Serializable;

/**
 * @author Yogesh Jadhav
 *
 */
public class FileItemDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String name;

	private String id;

	private String thumbnailLink;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getThumbnailLink() {
		return thumbnailLink;
	}

	public void setThumbnailLink(String thumbnailLink) {
		this.thumbnailLink = thumbnailLink;
	}

}
