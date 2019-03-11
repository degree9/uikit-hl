(ns uikit-hl.toggle
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(def ^:dynamic *uk-toggle* "")

(defmethod hl/do! :uk-toggle
  [elem _ v]
  (.toggle uikit elem (clj->js v)))
