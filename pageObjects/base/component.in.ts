/**
 * The most generic representation of a component.
 */
export interface IComponent {

    /**
     * check if the selector is visible and return true if visible, so you can perform next operations
     */
    waitForReadiness(): Promise<boolean>;

}
