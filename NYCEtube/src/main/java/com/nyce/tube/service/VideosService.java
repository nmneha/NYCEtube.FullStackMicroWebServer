package com.nyce.tube.service;

import com.nyce.tube.domain.Videos;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link Videos}.
 */
public interface VideosService {
    /**
     * Save a videos.
     *
     * @param videos the entity to save.
     * @return the persisted entity.
     */
    Videos save(Videos videos);

    /**
     * Updates a videos.
     *
     * @param videos the entity to update.
     * @return the persisted entity.
     */
    Videos update(Videos videos);

    /**
     * Partially updates a videos.
     *
     * @param videos the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Videos> partialUpdate(Videos videos);

    /**
     * Get all the videos.
     *
     * @return the list of entities.
     */
    List<Videos> findAll();

    /**
     * Get the "id" videos.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Videos> findOne(Long id);

    /**
     * Delete the "id" videos.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
