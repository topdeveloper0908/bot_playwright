/**
 * The most generic representation of a single page.
 */
export interface IPage {
    /**
     * Waits for the page to be ready for use, usually called right after opening
     * it.
     */
    waitForReadiness(): Promise<void>;
}
