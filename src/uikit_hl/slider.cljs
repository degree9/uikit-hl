(ns uikit-hl.slider
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(def ^:dynamic *uk-slider* "")

(defmethod hl/do! :uk-slider
  [elem _ v]
  (.slider uikit elem v))

(defmethod hl/do! :uk-slider-items
  [elem _ v]
  (hl/do! elem :class {:uk-slider-items v}))

(defmethod hl/do! :uk-slider-nav
  [elem _ v]
  (hl/do! elem :class {:uk-slider-nav v}))

(hl/defelem slider [attr kids]
  (let [slider (:uk-slider attr *uk-slider*)
        attr (assoc attr :uk-slider slider)]
    (hl/div attr kids)))

(hl/defelem items [attr kids]
  (hl/div :uk-slider-items true attr kids))
