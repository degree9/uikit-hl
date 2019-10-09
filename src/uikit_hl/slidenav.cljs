(ns uikit-hl.slidenav
  (:require [hoplon.core :as hl]
            ["uikit" :as uikit]
            [uikit-hl.core :as core]
            [uikit-hl.icon :as icon]))

(def ^:dynamic *uk-slidenav-large* false)

(defmethod hl/do! :uk-slidenav-next
  [elem _ v]
  (.slidenavNext uikit elem v))

(defmethod hl/do! :uk-slidenav-previous
  [elem _ v]
  (.slidenavPrevious uikit elem v))

(defmethod hl/do! :uk-slidenav-large
  [elem _ v]
  (hl/do! elem :class {:uk-slidenav-large v}))

(hl/defelem slidenav-next [attr kids]
  (let [large (:large attr *uk-slidenav-large*)
        attr (assoc attr :uk-slidenav-next true
                         :uk-slidenav-large large)]
    (hl/a attr kids)))

(hl/defelem slidenav-previous [attr kids]
  (let [large (:large attr *uk-slidenav-large*)
        attr (assoc attr :uk-slidenav-previous true
                         :uk-slidenav-large large)]
    (hl/a attr kids)))
