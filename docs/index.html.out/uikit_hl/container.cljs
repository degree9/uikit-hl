(ns uikit-hl.container
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-container* "")
(def ^:dynamic *small* nil)
(def ^:dynamic *large* nil)
(def ^:dynamic *expand* nil)


(hl/defelem container [attr kids]
  (let [small  (:small  attr *small*)
        large  (:large  attr *large*)
        expand (:expand attr *expand*)
        attr   (dissoc  attr :small :large :expand)]
    (hl/div (core/assoc-class attr {:uk-container        true
                                    :uk-container-small  small
                                    :uk-container-large  large
                                    :uk-container-expand expand}) kids)))
