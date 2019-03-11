(ns uikit-hl.sticky
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(def ^:dynamic *uk-sticky* "")

(defmethod hl/do! :uk-sticky
  [elem _ v]
  (.sticky uikit elem (clj->js v)))

(hl/defelem sticky [attr kids]
  (let [sticky (:uk-sticky attr *uk-sticky*)
        attr (assoc attr :uk-sticky sticky)]
    (hl/div attr kids)))
